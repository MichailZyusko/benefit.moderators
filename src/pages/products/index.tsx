import { useForm } from 'react-hook-form';

export default function ProductsPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col justify-between py-12 px-20 h-screen">
          <div className="flex flex-row">
            <div>
              <div className="w-5/6 mx-4">
                <label
                  className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
                  htmlFor="barcode"
                >
                  Barcode
                  <input
                    id="barcode"
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="5449000000996"
                    {...register('barcode')}
                  />
                  {errors?.barcode && <p>Incorrect barcode</p> }
                </label>
              </div>

              <div className="w-5/6 mx-4">
                <label
                  className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
                  htmlFor="name"
                >
                  Name
                  <input
                    id="name"
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Coca-cola"
                    {...register('name')}
                  />
                  {errors?.name && <p>Incorrect name</p> }
                </label>
              </div>

              <div className="w-5/6 mx-4">
                <label
                  className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
                  htmlFor="name"
                >
                  Category
                  <input
                    id="category"
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Напитки, соки"
                    {...register('category')}
                  />
                  {errors?.category && <p>Incorrect category</p> }
                </label>
              </div>

              <div className="w-5/6 mx-4">
                <label
                  className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
                  htmlFor="description"
                >
                  Description
                  <textarea
                    id="description"
                    rows={12}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Состав: газированная вода, карамельный колер, фосфорная кислота, заменитель сахара аспартам, бензонат натрия (консервант), кофеин, натуральные ароматизаторы, ацесульфам калия, цитрат калия, кофеин."
                    {...register('description')}
                  />
                  {errors?.description && <p>Incorrect description</p> }
                </label>
              </div>
            </div>

            <div className="flex justify-center items-center w-1/2">
              <label htmlFor="dropzone-file" className="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <div className="flex flex-col justify-center items-center pt-5 pb-6">
                  <svg aria-hidden="true" className="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span>
                    {' '}
                    or drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  {...register('img')}
                />
              </label>
            </div>
          </div>

          <div className="flex justify-end">
            <button type="submit" className="w-60 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
              Reject
            </button>

            <button type="submit" className="w-60 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
              Save
            </button>
          </div>

        </div>
      </form>
    </div>
  );
}
