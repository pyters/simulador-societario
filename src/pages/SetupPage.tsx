import { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { Partner, SimulationData } from '../types';

interface SetupForm {
  partners: { name: string; percentage: number }[];
  simulationYears: number;
}

interface SetupPageProps {
  onSetupComplete: (data: Partial<SimulationData>) => void;
}

export default function SetupPage({ onSetupComplete }: SetupPageProps) {
  const { register, control, handleSubmit, watch, formState: { errors } } = useForm<SetupForm>({
    defaultValues: {
      partners: [{ name: '', percentage: 100 }],
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
    if (totalPercentage !== 100) {
      alert('A soma dos percentuais deve ser 100%');
      return;
    }

    const partners: Partner[] = data.partners.map((partner, index) => ({
      id: `partner-${index + 1}`,
      name: partner.name,
      percentage: partner.percentage,
    }));

    onSetupComplete({
      partners,
      simulationYears: data.simulationYears,
      monthlyData: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Configuração da Simulação
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Período de Simulação (anos)
            </label>
            <input
              type="number"
              min="1"
              max="10"
              {...register('simulationYears', { required: 'Campo obrigatório', min: 1, max: 10 })}
              className="mt-1 block w-32 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.simulationYears && (
              <p className="mt-1 text-sm text-red-600">{errors.simulationYears.message}</p>
            )}
          </div>

          <div>
            <div className="flex justify-between items-center mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Sócios da Empresa
              </label>
              <button
                type="button"
                onClick={() => append({ name: '', percentage: 0 })}
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                + Adicionar Sócio
              </button>
            </div>

            <div className="space-y-4">
              {fields.map((field, index) => (
                <div key={field.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-md">
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="Nome do sócio"
                      {...register(`partners.${index}.name` as const, { required: 'Nome obrigatório' })}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                    {errors.partners?.[index]?.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.partners[index]?.name?.message}</p>
                    )}
                  </div>
                  
                  <div className="w-32">
                    <div className="relative">
                      <input
                        type="number"
                        min="0"
                        max="100"
                        step="0.01"
                        placeholder="%"
                        {...register(`partners.${index}.percentage` as const, { 
                          required: 'Percentual obrigatório',
                          min: 0,
                          max: 100,
                          valueAsNumber: true
                        })}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 pr-8"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <span className="text-gray-500 text-sm">%</span>
                      </div>
                    </div>
                    {errors.partners?.[index]?.percentage && (
                      <p className="mt-1 text-sm text-red-600">{errors.partners[index]?.percentage?.message}</p>
                    )}
                  </div>

                  {fields.length > 1 && (
                    <button
                      type="button"
                      onClick={() => remove(index)}
                      className="inline-flex items-center p-2 border border-transparent rounded-md text-red-600 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                      🗑️
                    </button>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-4 p-3 bg-gray-50 rounded-md">
              <p className={`text-sm ${totalPercentage === 100 ? 'text-green-600' : 'text-red-600'}`}>
                Total: {totalPercentage.toFixed(2)}%
                {totalPercentage !== 100 && ' (deve somar 100%)'}
              </p>
            </div>
          </div>

          <div className="flex justify-end pt-6 border-t border-gray-200">
            <button
              type="submit"
              disabled={totalPercentage !== 100}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Iniciar Simulação
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}