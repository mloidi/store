import React from 'react';

import { ImageService } from '../../../service/image.service';
import Icon from '../icons/Icon';
import { faIcons } from '../icons/IconsConstant';

const DropImage = ({ setImageUrl, imageURL }) => {
  const allowDrop = event => {
    event.preventDefault();
  };

  const drop = async event => {
    event.preventDefault();
    setImageUrl(await ImageService.uploadFile(event.dataTransfer.files[0]));
  };

  return (
    <div>
      {imageURL ? (
        <div className="flex items-center text-red-500 inline-block align-top">
          <img
            className="w-20 h-20 rounded-full mr-4 border-2 border-teal-500"
            src={imageURL}
            alt="avatar"
          />
          <button
            className="hover:text-black -m-5"
            onClick={() => {
              setImageUrl('');
            }}
          >
            <Icon icon={faIcons._faMinus} />
          </button>
        </div>
      ) : (
        <div
          className="border-dashed border-teal-500 border-2 w-20 h-20 rounded-full flex justify-center items-center"
          onDrop={drop}
          onDragOver={allowDrop}
        >
          <span class="block text-grey text-sm text-center">
            Drop your files here
          </span>
        </div>
      )}
    </div>
  );
};

export default DropImage;
