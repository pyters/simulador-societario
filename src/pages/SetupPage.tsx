import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// Schema de validação com Zod
const setupSchema = z.object({
  simulationYears: z.number().min(1, 'Mínimo 1 ano').max(10, 'Máximo 10 anos'),
  partners: z.array(
    z.object({
      name: z.string().min(1, 'Nome obrigatório').max(50, 'Nome muito longo'),
      percentage: z.number().int('Percentual deve ser número inteiro').min(1, 'Mínimo 1%').max(100, 'Máximo 100%')
    })
  ).min(2, 'Pelo menos dois sócios são necessários para a simulação')
}).refine((data) => {
  const total = data.partners.reduce((sum, partner) => sum + partner.percentage, 0);
  return total === 100;
}, {
  message: 'A soma dos percentuais deve ser exatamente 100%',
  path: ['partners']
});

type SetupForm = z.infer<typeof setupSchema>;

interface SetupPageProps {
  onSetupComplete: (data: any) => void;
}

export default function SetupPage({ onSetupComplete }: SetupPageProps) {
  const { register, control, handleSubmit, watch, setValue, formState: { errors } } = useForm<SetupForm>({
    resolver: zodResolver(setupSchema),
    defaultValues: {
      partners: [
        { name: 'João da Silva', percentage: 50 },
        { name: 'Pedro Souza', percentage: 50 }
      ],
      simulationYears: 5,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'partners',
  });

  const watchedPartners = watch('partners');
  const totalPercentage = watchedPartners?.reduce((sum, partner) => sum + (partner.percentage || 0), 0) || 0;

  const onSubmit = (data: SetupForm) => {
    const formattedData = {
      partners: data.partners.map((partner, index) => ({
        id: `partner-${index + 1}`,
        name: partner.name,
        percentage: partner.percentage,
      })),
      simulationYears: data.simulationYears,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    onSetupComplete(formattedData);
  };

  const isValidTotal = totalPercentage === 100;

  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900">
          ⚙️ Configuração Inicial
        </h2>
        <p className="text-gray-600 mt-1">
          Configure a estrutura societária inicial e período de simulação
        </p>
        <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-800">
            💡 <strong>Importante:</strong> Esta é apenas a configuração inicial. Durante a simulação, 
            os sócios poderão fazer aportes que alterarão os percentuais e o valor da empresa.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-8">
        {/* Período de Simulação */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            📅 Período de Simulação
          </label>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-gray-600">Duração:</span>
              <span className="text-lg font-bold text-red-600">
                {watch('simulationYears')} {watch('simulationYears') === 1 ? 'ano' : 'anos'}
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              step="1"
              {...register('simulationYears', { valueAsNumber: true })}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-thumb"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>1 ano</span>
              <span>5 anos</span>
              <span>10 anos</span>
            </div>
          </div>
          {errors.simulationYears && (
            <p className="mt-2 text-sm text-red-600">{errors.simulationYears.message}</p>
          )}
        </div>

        {/* Sócios */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                👥 Estrutura Societária Inicial
              </label>
              <p className="text-xs text-gray-500 mt-1">
                Percentuais podem mudar durante a simulação conforme aportes
              </p>
            </div>
            <button
              type="button"
              onClick={() => append({ name: '', percentage: 0 })}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
            >
              + Adicionar Sócio
            </button>
          </div>

          <div className="space-y-4">
            {fields.map((field, index) => (
              <div key={field.id} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1">
                      Nome do Sócio
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: João Silva"
                      {...register(`partners.${index}.name`)}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                    />
                    {errors.partners?.[index]?.name && (
                      <p className="mt-1 text-xs text-red-600">{errors.partners[index]?.name?.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1">
                      Participação
                    </label>
                    <div className="bg-white p-4 rounded border border-gray-200">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs text-gray-500">Percentual:</span>
                        <div className="flex items-center space-x-2">
                          <input
                            type="number"
                            min="1"
                            max="100"
                            step="1"
                            onChange={(e) => {
                              const value = parseInt(e.target.value) || 1;
                              const clampedValue = Math.max(1, Math.min(100, value));
                              setValue(`partners.${index}.percentage`, clampedValue, { shouldValidate: true });
                            }}
                            value={watch(`partners.${index}.percentage`) || ''}
                            className="w-16 text-center text-sm font-bold text-red-600 border border-gray-300 rounded px-2 py-1 focus:border-red-500 focus:ring-red-500"
                          />
                          <span className="text-sm font-bold text-red-600">%</span>
                        </div>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="100"
                        step="1"
                        {...register(`partners.${index}.percentage`, { valueAsNumber: true })}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                      <div className="flex justify-between text-xs text-gray-400 mt-2">
                        <span>1%</span>
                        <span>50%</span>
                        <span>100%</span>
                      </div>
                    </div>
                    {errors.partners?.[index]?.percentage && (
                      <p className="mt-1 text-xs text-red-600">{errors.partners[index]?.percentage?.message}</p>
                    )}
                  </div>
                </div>

                {fields.length > 2 && (
                  <div className="flex justify-end pt-2">
                    <button
                      type="button"
                      onClick={() => remove(index)}
                      className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors"
                      title="Remover sócio"
                    >
                      🗑️ Remover
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Total dos Percentuais */}
          <div className={`mt-4 p-4 rounded-lg border ${
            isValidTotal 
              ? 'bg-green-50 border-green-200' 
              : 'bg-red-50 border-red-200'
          }`}>
            <div className="flex items-center justify-between">
              <span className="font-medium text-gray-700">
                Total de Participação:
              </span>
              <span className={`font-bold ${
                isValidTotal ? 'text-green-700' : 'text-red-700'
              }`}>
                {totalPercentage}%
              </span>
            </div>
            {!isValidTotal && (
              <p className="mt-1 text-sm text-red-600">
                ⚠️ A soma deve ser exatamente 100%
              </p>
            )}
          </div>

          {errors.partners && typeof errors.partners.message === 'string' && (
            <p className="mt-2 text-sm text-red-600">{errors.partners.message}</p>
          )}
        </div>

        {/* Botão de Submissão */}
        <div className="flex justify-end pt-6 border-t border-gray-200">
          <button
            type="submit"
            disabled={!isValidTotal}
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-red-600 transition-colors"
          >
            🚀 Iniciar Simulação
          </button>
        </div>
      </form>
    </div>
  );
}