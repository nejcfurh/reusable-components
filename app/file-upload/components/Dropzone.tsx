'use client';

import { useRef, useState } from 'react';
import { FiFile, FiUploadCloud } from 'react-icons/fi';

interface FileInfo {
  name: string;
  size: number;
  type: string;
  file: File;
}

const Dropzone = () => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [fileInfo, setFileInfo] = useState<FileInfo | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File) => {
    setFileInfo({
      name: file.name,
      size: Math.round(file.size / 1024), // Convert to KB
      type: file.type || 'Unknown',
      file: file,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFile(files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!isDragOver) {
      setIsDragOver(true);
    }
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      handleFile(files[0]);
    }
  };

  const handleReset = () => {
    setFileInfo(null);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (fileInfo?.file) {
      console.log('Submitted file:', fileInfo.file);
      // Add your file upload logic here
      alert(`File "${fileInfo.name}" is ready to be uploaded!`);
    }
  };

  const getFileIcon = (type: string) => {
    if (type.startsWith('image/')) return '🖼️';
    if (type.startsWith('video/')) return '🎥';
    if (type.startsWith('audio/')) return '🎵';
    if (type.includes('pdf')) return '📄';
    if (type.includes('word') || type.includes('document')) return '📝';
    if (type.includes('sheet') || type.includes('excel')) return '📊';
    if (type.includes('zip') || type.includes('rar')) return '🗜️';
    return '📁';
  };

  return (
    <div className="flex w-full min-h-screen items-center justify-center bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 p-4 dark:from-gray-950 dark:via-slate-900 dark:to-gray-900">
      <form
        onSubmit={handleSubmit}
        onReset={handleReset}
        className="w-full max-w-2xl rounded-2xl border border-gray-300 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl dark:border-gray-800 dark:bg-gray-900"
      >
        {/* HEADER */}
        <div className="mb-6">
          <h2 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
            Upload a file
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Drag & drop the file into the area, or click on the icon below!
          </p>
        </div>

        {/* DROPZONE AREA */}
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDragEnd={handleDragEnd}
          onDrop={handleDrop}
          className={`group relative flex min-h-[200px] cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed p-8 transition-all duration-300 ${
            isDragOver
              ? 'scale-[1.02] border-blue-500 bg-blue-50 shadow-lg dark:border-blue-400 dark:bg-blue-950/20'
              : 'border-gray-300 bg-gray-50 hover:scale-[1.01] hover:border-blue-400 hover:bg-gray-400/50 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-500 dark:hover:bg-gray-750'
          }`}
        >
          <input
            ref={inputRef}
            type="file"
            required
            id="upload-file"
            name="uploaded-file"
            onChange={handleFileChange}
            className="absolute inset-0 cursor-pointer opacity-0"
          />

          {!fileInfo ? (
            <>
              <FiUploadCloud className="mb-4 h-16 w-16 text-gray-400 transition-all duration-300 group-hover:scale-110 group-hover:text-blue-500 dark:text-gray-500 dark:group-hover:text-blue-400" />
              <p className="text-center text-lg font-medium text-gray-700 transition-colors duration-300 group-hover:text-gray-900 dark:text-gray-300 dark:group-hover:text-white">
                No Files Selected
              </p>
              <p className="mt-2 text-center text-sm text-gray-500 transition-colors duration-300 group-hover:text-gray-600 dark:text-gray-400 dark:group-hover:text-gray-300">
                Click to browse or drag and drop
              </p>
            </>
          ) : (
            <div className="flex w-full items-center gap-4 rounded-lg bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md dark:bg-gray-800">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-linear-to-br from-blue-500 to-indigo-500 text-2xl transition-transform duration-300 hover:scale-110 hover:rotate-6">
                {getFileIcon(fileInfo.type)}
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900 dark:text-white">
                  {fileInfo.name}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {fileInfo.size} KB • {fileInfo.type || 'Unknown type'}
                </p>
              </div>
              <FiFile className="h-6 w-6 text-gray-400 transition-all duration-300 group-hover:scale-110 group-hover:text-blue-500" />
            </div>
          )}
        </div>

        {/* ACTION BUTTONS */}
        <div className="mt-8 flex gap-4">
          <button
            type="reset"
            className="group flex-1 rounded-lg border border-gray-300 bg-white px-6 py-3 text-lg font-medium text-gray-700 transition-all duration-300 hover:scale-[1.02] hover:border-gray-400 hover:bg-gray-400/50 hover:shadow-md active:scale-[0.98] dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:bg-gray-750"
          >
            <span className="inline-block transition-transform duration-300 group-hover:scale-105">
              Cancel
            </span>
          </button>
          <button
            type="submit"
            disabled={!fileInfo}
            className="group flex-1 rounded-lg bg-linear-to-r from-blue-500 to-indigo-600 px-6 py-3 text-lg font-medium text-white shadow-md transition-all duration-300 hover:scale-[1.02] hover:from-blue-600 hover:to-indigo-700 hover:shadow-lg active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100 disabled:hover:from-blue-500 disabled:hover:to-indigo-600 disabled:hover:shadow-md"
          >
            <span className="inline-block transition-transform duration-300 group-hover:scale-105">
              Save
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Dropzone;
