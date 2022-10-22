import { forwardRef } from 'react';
import { useForm } from 'react-hook-form';

type TProps = {
  name: string;
  placeholder: string;
  label: string;
};

export default forwardRef<HTMLInputElement, TProps>(({ name, label, ...rest }, ref) => {
  const { formState: { errors } } = useForm();

  return (
    <div className="w-5/6 mx-4">
      <label
        className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
        htmlFor={name}
      >
        {label}
        <input
          id={name}
          {...rest}
          ref={ref}
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        {errors[name] && <p>Incorrect category</p>}
      </label>
    </div>
  );
});
