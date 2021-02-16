import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import './style.css';

const SingleFileUpload = ({ uploadApi }) => {
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
            uploadApi(selectedFile);
            setSelectedFile(null);
            setIsFilePicked(false);
        }
    }
};

SingleFileUpload.propTypes = {
    uploadApi: PropTypes.func.isRequired,
};

export default SingleFileUpload;
