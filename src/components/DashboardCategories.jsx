import React, { useState, useEffect, useContext } from 'react';

import { DashboardContext } from '../globalState';
import Field from './common/form/Field';
import Icon from './common/icons/Icon';
import { faIcons } from './common/icons/IconsConstant';
import { CategoryService } from '../service/category.service';

export const DashboardCategories = () => {
  const { getDashboardOption } = useContext(DashboardContext);
  const option = 'categories';

  const [dashboardOption] = useState(() => {
    return getDashboardOption(option);
  });

  const [name, setName] = useState('');
  const [categories, setCategories] = useState([]);
  const [updateCategories, setUpdateCategories] = useState(true);
  useEffect(() => {
    if (updateCategories) {
      CategoryService.get().then(res => {
        setCategories(res);
        setUpdateCategories(false);
      });
    }
  }, [updateCategories]);

  const [categoryToEdit, setCategoryToEdit] = useState(null);
  const [show, setShow] = useState(false);

  const tableHeader = color => {
    return `flex border-b border-${color}-500`;
  };

  const tableLine = color => {
    return `flex capitalize text-gray-500 hover:bg-gray-100 my-1 py-1 px-1 mr-1 border-b border-${color}-200`;
  };

  return (
    <div className="my-2 mx-4">
      <div className="flex flex-col mb-4">
        <div className={tableHeader(dashboardOption.color)}>
          <div className="w-full mr-1">Name</div>
          <div className="w-1/6">Actions</div>
        </div>
        <div>
          {categories &&
            categories.map(category => (
              <div
                key={category._id}
                className={tableLine(dashboardOption.color)}
              >
                <div className="w-full py-2">{category.name}</div>
                <div className="w-1/6">
                  <button
                    className="m-2 hover:text-gray-900 text-gray-600"
                    onClick={() => {
                      setName(category.name);
                      setCategoryToEdit(category);
                      setShow(true);
                    }}
                  >
                    <Icon icon={faIcons._faEdit}></Icon>
                  </button>
                  <button
                    className="m-2 hover:text-red-900 text-red-600"
                    onClick={async () => {
                      const categoryDeleted = await CategoryService.delete(
                        category._id
                      );
                      console.log(categoryDeleted);
                      setUpdateCategories(true);
                    }}
                  >
                    <Icon icon={faIcons._faTrash}></Icon>
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>

      {show && (
        <div className="fixed pin z-50 overflow-auto w-full h-full bg-smoke-light top-0 left-0">
          <div className="w-full shadow-xl p-3 border rounded border-green-500 relative bg-white max-w-lg m-auto mt-12">
            <Field
              type="text"
              labelText="Name"
              name="Name"
              value={name}
              setValue={setName}
              textValidation="Please fill out this field."
              validate={false}
            />
            <div className="flex mt-8">
              <button
                className="px-4 py-2 border rounded border-blue-400 bg-white hover:bg-blue-300 text-blue-700 mr-1 text-sm"
                onClick={() => {
                  setName('');
                  setCategoryToEdit(null);
                  setShow(false);
                }}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 border rounded border-green-400 bg-white hover:bg-green-300 text-green-700 mr-1 text-sm"
                onClick={async () => {
                  const isNewCategory = categoryToEdit ? false : true;
                  if (categoryToEdit) {
                    categoryToEdit.name = name;
                  }
                  const categoryToSave = categoryToEdit
                    ? categoryToEdit
                    : { name };
                  const newCategory = await CategoryService.save(
                    categoryToSave,
                    isNewCategory
                  );
                  console.log(newCategory);
                  setUpdateCategories(true);
                  setName('');
                  setShow(false);
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
