import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  registrationSchema,
  type RegistrationData,
} from '@/schemas/registration';
import { useRegistration } from '@/hooks/use-registration';

export function useRegistrationForm(eventId: string) {
  const { register: submitRegistration, isLoading } = useRegistration(eventId);

  const form = useForm<RegistrationData>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
    },
  });

  const onSubmit = (data: RegistrationData) => {
    submitRegistration(data, form.reset);
  };

  return {
    register: form.register,
    handleSubmit: form.handleSubmit(onSubmit),
    errors: form.formState.errors,
    isLoading,
  };
}
