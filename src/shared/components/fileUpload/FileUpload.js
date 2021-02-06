import React, { useState, useCallback } from 'react';

import apiConfig from '../../config/apiServices';
import './styles/fileUpload.css';

const FileUpload = () => {
    // useState
    const [selectedFile, setSelectedFile] = useState(null);
    const [isFilePicked, setIsFilePicked] = useState(false);
    const [uploadError, setUploadError] = useState('');

    // useCallback
    const memoizedHandleFileChanged = useCallback((e) => handleFileChanged(e), []);
    const memoizedHandleUploadClicked = useCallback(handleUploadClicked, [isFilePicked, selectedFile]);

    if (uploadError) {
        throw new Error(uploadError);
    }

    return (
        <div className="file-upload">
            {
                isFilePicked
                    ? (
                        <div>
                            <i />
                            <span>{`${selectedFile.name} (${(selectedFile.size / 1024).toFixed(2)} КБ)`}</span>
                        </div>
                    )
                    : null
            }
            <label className="select-file-btn">
                <i />
                <span className="title">Добавить файл</span>
                <input
                    type="file"
                    name="file"
                    onChange={memoizedHandleFileChanged}
                />
            </label>
            <button
                type="button"
                onClick={memoizedHandleUploadClicked}
            >
                Загрузить
            </button>
        </div>
    );

    function handleFileChanged(e) {
        if (e.target.files.length > 0) {
            setSelectedFile(e.target.files[0]);
            setIsFilePicked(true);
        }
    }

    function handleUploadClicked() {
        if (isFilePicked) {
            const formData = new FormData();
            formData.append('file', selectedFile);
            fetch(`${apiConfig.timeLogServiceApi}/log/file`, {
                method: 'POST',
                body: formData,
            })
                .catch((error) => setUploadError(error));
            setSelectedFile(null);
            setIsFilePicked(false);
        }
    }
};

export default FileUpload;
