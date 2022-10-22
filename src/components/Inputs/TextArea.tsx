import { useForm } from 'react-hook-form';

type TProps = {
  name: string;
  placeholder: string;
  label: string;
};

export default function TextArea({ name, placeholder, label }: TProps) {
  const { register, formState: { errors } } = useForm();

  return (
    <div className="w-5/6 mx-4">
      <label
        className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
        htmlFor={name}
      >
        {label}
        <textarea
          id={name}
          rows={12}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={placeholder}
          {...register(name)}
        />
        {errors?.[name] && <p>Incorrect description</p> }
      </label>
    </div>
  );
}
