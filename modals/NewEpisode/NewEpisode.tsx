// import React, { useState } from 'react';
// import { Plus, Upload, BookOpen, Pencil, Clock, Check, X, ChevronDown, Image, FileText, Languages } from 'lucide-react';
// import { FileUploader } from '@aws-amplify/ui-react-storage';
// import { uploadData } from "aws-amplify/storage";
// import '@aws-amplify/ui-react/styles.css';


// const NewEpisode = ({ reset }: any) => {

//     const [selectedSeries, setSelectedSeries] = useState<any>(null);
//     const [uploadStep, setUploadStep] = useState(1);
//     const [uploadedImages, setUploadedImages] = useState([]);
//     const [episodeTitle, setEpisodeTitle] = useState('');
//     const [episodeDescription, setEpisodeDescription] = useState('');
//     const [showAITranslate, setShowAITranslate] = useState(false);

//     // Mock data for existing series
//     const existingSeries = [
//         { id: 1, title: 'Cosmic Adventures', episodes: 12, coverImage: '/api/placeholder/80/120' },
//         { id: 2, title: 'Urban Legends', episodes: 8, coverImage: '/api/placeholder/80/120' },
//     ];

//     return (
//         <div>
//             <div className="  border-b border-gray-200">
//                 <h2 className="text-xl font-bold text-gray-900">Upload New Episode</h2>
//                 <p className="text-gray-600">Add a new episode to one of your existing series</p>
//             </div>
//             <div className="  space-y-6">
//                 {/* Step 1: Select Series */}
//                 <div className={`${uploadStep !== 1 && 'opacity-50'}`}>
//                     <div className="flex items-center mb-4">
//                         <div className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center font-medium text-sm">1</div>
//                         <h3 className="ml-3 font-medium text-gray-900">Select Series</h3>
//                         {uploadStep > 1 && (
//                             <button
//                                 onClick={() => setUploadStep(1)}
//                                 className="ml-auto text-sm text-blue-600 hover:text-blue-800"
//                             >
//                                 Edit
//                             </button>
//                         )}
//                     </div>

//                     {uploadStep === 1 ? (
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-9">
//                             {existingSeries.map((series: any) => (
//                                 <button
//                                     key={series.id}
//                                     onClick={() => {
//                                         setSelectedSeries(series);
//                                         setUploadStep(2);
//                                     }}
//                                     className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
//                                 >
//                                     <img
//                                         src={series.coverImage}
//                                         alt={series.title}
//                                         className="w-16 h-24 object-cover rounded-md"
//                                     />
//                                     <div className="ml-4">
//                                         <h4 className="font-medium text-gray-900">{series.title}</h4>
//                                         <p className="text-sm text-gray-600">{series.episodes} episodes</p>
//                                     </div>
//                                 </button>
//                             ))}
//                             <div className="flex justify-between">
//                                 <button
//                                     onClick={() => reset()}
//                                     className="cursor-pointer bg-white text-gray-700 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
//                                 >
//                                     Back
//                                 </button>

//                             </div>
//                         </div>
//                     ) : (
//                         <div className="flex items-center pl-9">
//                             <img
//                                 src={selectedSeries?.coverImage}
//                                 alt={selectedSeries?.title}
//                                 className="w-12 h-16 object-cover rounded-md"
//                             />
//                             <div className="ml-3">
//                                 <h4 className="font-medium text-gray-900">{selectedSeries?.title}</h4>
//                                 <p className="text-sm text-gray-600">Episode {selectedSeries?.episodes + 1}</p>
//                             </div>
//                         </div>
//                     )}
//                 </div>

//                 {/* Step 2: Upload Images */}
//                 <div className={`${uploadStep !== 2 && (uploadStep < 2 ? 'opacity-30' : 'opacity-50')}`}>
//                     <div className="flex items-center mb-4">
//                         <div className={`rounded-full w-6 h-6 flex items-center justify-center font-medium text-sm ${uploadStep >= 2 ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-400'
//                             }`}>2</div>
//                         <h3 className={`ml-3 font-medium ${uploadStep >= 2 ? 'text-gray-900' : 'text-gray-400'}`}>Upload Images</h3>

//                         {uploadStep > 2 && (
//                             <button
//                                 onClick={() => setUploadStep(2)}
//                                 className="ml-auto text-sm text-blue-600 hover:text-blue-800"
//                             >
//                                 Edit
//                             </button>
//                         )}
//                     </div>

//                     {uploadStep === 2 && (
//                         <div className="pl-9 space-y-4">
//                             {/* <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
//                                 <Upload className="mx-auto h-12 w-12 text-gray-400" />
//                                 <div className="mt-4 flex text-sm text-gray-600 justify-center">
//                                     <label
//                                         htmlFor="file-upload"
//                                         className="relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500"
//                                     >
//                                         <span>Upload episode images</span>
//                                         <input id="file-upload" name="file-upload" type="file" className="sr-only" multiple />
//                                     </label>
//                                     <p className="pl-1">or drag and drop</p>
//                                 </div>
//                                 <p className="text-xs text-gray-500 mt-2">
//                                     PNG, JPG, GIF up to 10MB each (max 100 images)
//                                 </p>
//                             </div> */}

//                             <FileUploader
//                                 acceptedFileTypes={['image/*']}
//                                 path={`images/`}
//                                 bucket="nextoonContent"
//                                 maxFileCount={20}
//                             />

//                             {/* Preview of uploaded images (mock data) */}
//                             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                                 {[1, 2, 3].map((index) => (
//                                     <div key={index} className="relative group">
//                                         <img
//                                             src={`/api/placeholder/200/300?text=Page ${index}`}
//                                             alt={`Page ${index}`}
//                                             className="w-full h-auto rounded-md border border-gray-200"
//                                         />
//                                         <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-md">
//                                             <button className="p-1 bg-white rounded-full">
//                                                 <X size={16} className="text-red-500" />
//                                             </button>
//                                             <button className="p-1 bg-white rounded-full ml-2">
//                                                 <Pencil size={16} className="text-blue-500" />
//                                             </button>
//                                         </div>
//                                         <div className="absolute top-2 left-2 bg-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-medium">
//                                             {index}
//                                         </div>
//                                     </div>
//                                 ))}
//                                 <button className="border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center p-8 hover:border-blue-500 hover:bg-blue-50 transition-colors">
//                                     <Plus size={24} className="text-gray-400" />
//                                 </button>
//                             </div>

//                             <div className="flex justify-between">
//                                 <button
//                                     onClick={() => setUploadStep(1)}
//                                     className="cursor-pointer bg-white text-gray-700 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
//                                 >
//                                     Back
//                                 </button>
//                                 <button
//                                     onClick={() => setUploadStep(3)}
//                                     className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
//                                 >
//                                     Continue to Details
//                                 </button>
//                             </div>
//                         </div>
//                     )}

//                     {uploadStep > 2 && (
//                         <div className="pl-9">
//                             <div className="flex items-center text-sm text-gray-600">
//                                 <Image size={16} className="mr-2 text-gray-500" />
//                                 <span>3 images uploaded</span>
//                                 <Check size={16} className="ml-2 text-green-500" />
//                             </div>
//                         </div>
//                     )}
//                 </div>

//                 {/* Step 3: Episode Details */}
//                 <div className={`${uploadStep !== 3 && (uploadStep < 3 ? 'opacity-30' : 'opacity-50')}`}>
//                     <div className="flex items-center mb-4">
//                         <div className={`rounded-full w-6 h-6 flex items-center justify-center font-medium text-sm ${uploadStep >= 3 ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-400'
//                             }`}>3</div>
//                         <h3 className={`ml-3 font-medium ${uploadStep >= 3 ? 'text-gray-900' : 'text-gray-400'}`}>Episode Details</h3>
//                         {uploadStep > 3 && (
//                             <button
//                                 onClick={() => setUploadStep(3)}
//                                 className="ml-auto text-sm text-blue-600 hover:text-blue-800"
//                             >
//                                 Edit
//                             </button>
//                         )}
//                     </div>

//                     {uploadStep === 3 && (
//                         <div className="pl-9 space-y-4">
//                             <div>
//                                 <label htmlFor="episodeTitle" className="block text-sm font-medium text-gray-700 mb-1">
//                                     Episode Title
//                                 </label>
//                                 <input
//                                     type="text"
//                                     id="episodeTitle"
//                                     value={episodeTitle}
//                                     onChange={(e) => setEpisodeTitle(e.target.value)}
//                                     className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                                     placeholder="Enter episode title"
//                                 />
//                             </div>

//                             <div>
//                                 <label htmlFor="episodeDescription" className="block text-sm font-medium text-gray-700 mb-1">
//                                     Episode Description (optional)
//                                 </label>
//                                 <textarea
//                                     id="episodeDescription"
//                                     value={episodeDescription}
//                                     onChange={(e) => setEpisodeDescription(e.target.value)}
//                                     rows={3}
//                                     className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                                     placeholder="Enter a brief description of this episode"
//                                 />
//                             </div>

//                             <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
//                                 <div className="flex items-center justify-between">
//                                     <div className="flex items-center">
//                                         <Languages size={20} className="text-blue-600 mr-2" />
//                                         <span className="font-medium text-gray-900">AI Translation</span>
//                                     </div>
//                                     <button
//                                         onClick={() => setShowAITranslate(!showAITranslate)}
//                                         className="text-blue-600 hover:text-blue-800"
//                                     >
//                                         <ChevronDown size={20} className={`transform ${showAITranslate ? 'rotate-180' : ''}`} />
//                                     </button>
//                                 </div>

//                                 {showAITranslate && (
//                                     <div className="mt-4 space-y-4">
//                                         <p className="text-sm text-gray-600">
//                                             Automatically translate your episode text to reach a global audience. Our AI preserves your original tone and context.
//                                         </p>

//                                         <div className="flex flex-wrap gap-2">
//                                             <div className="flex items-center rounded-full bg-white px-3 py-1 text-sm border border-blue-200">
//                                                 <input type="checkbox" id="lang-en" className="mr-2" />
//                                                 <label htmlFor="lang-en">English</label>
//                                             </div>
//                                             <div className="flex items-center rounded-full bg-white px-3 py-1 text-sm border border-blue-200">
//                                                 <input type="checkbox" id="lang-es" className="mr-2" />
//                                                 <label htmlFor="lang-es">Spanish</label>
//                                             </div>
//                                             <div className="flex items-center rounded-full bg-white px-3 py-1 text-sm border border-blue-200">
//                                                 <input type="checkbox" id="lang-fr" className="mr-2" />
//                                                 <label htmlFor="lang-fr">French</label>
//                                             </div>
//                                             <div className="flex items-center rounded-full bg-white px-3 py-1 text-sm border border-blue-200">
//                                                 <input type="checkbox" id="lang-de" className="mr-2" />
//                                                 <label htmlFor="lang-de">German</label>
//                                             </div>
//                                             <div className="flex items-center rounded-full bg-white px-3 py-1 text-sm border border-blue-200">
//                                                 <input type="checkbox" id="lang-ja" className="mr-2" />
//                                                 <label htmlFor="lang-ja">Japanese</label>
//                                             </div>
//                                             <button className="text-blue-600 text-sm hover:underline">+ More Languages</button>
//                                         </div>
//                                     </div>
//                                 )}
//                             </div>

//                             <div className="flex justify-between">
//                                 <button
//                                     onClick={() => setUploadStep(2)}
//                                     className="cursor-pointer bg-white text-gray-700 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
//                                 >
//                                     Back
//                                 </button>
//                                 <button
//                                     onClick={() => setUploadStep(4)}
//                                     className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
//                                 >
//                                     Continue to Publishing
//                                 </button>
//                             </div>
//                         </div>
//                     )}

//                     {uploadStep > 3 && (
//                         <div className="pl-9">
//                             <div className="flex items-center text-sm text-gray-600">
//                                 <FileText size={16} className="mr-2 text-gray-500" />
//                                 <span>Details completed</span>
//                                 <Check size={16} className="ml-2 text-green-500" />
//                             </div>
//                         </div>
//                     )}
//                 </div>

//                 {/* Step 4: Publish Options */}
//                 <div className={`${uploadStep !== 4 && (uploadStep < 4 ? 'opacity-30' : 'opacity-50')}`}>
//                     <div className="flex items-center mb-4">
//                         <div className={`rounded-full w-6 h-6 flex items-center justify-center font-medium text-sm ${uploadStep >= 4 ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-400'
//                             }`}>4</div>
//                         <h3 className={`ml-3 font-medium ${uploadStep >= 4 ? 'text-gray-900' : 'text-gray-400'}`}>Publishing Options</h3>
//                     </div>

//                     {uploadStep === 4 && (
//                         <div className="pl-9 space-y-4">
//                             <div className="flex gap-4">
//                                 <div className="flex-1 border border-gray-200 rounded-lg p-4 flex flex-col items-center">
//                                     <div className="mb-2 h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
//                                         <Check size={24} className="text-blue-600" />
//                                     </div>
//                                     <h4 className="font-medium text-gray-900 mb-1">Publish Now</h4>
//                                     <p className="text-sm text-gray-600 text-center">Make your episode available to readers immediately</p>
//                                     <button className="mt-auto bg-blue-600 text-white w-full py-2 rounded-lg hover:bg-blue-700 transition-colors mt-4">
//                                         Publish Episode
//                                     </button>
//                                 </div>

//                                 <div className="flex-1 border border-gray-200 rounded-lg p-4 flex flex-col items-center">
//                                     <div className="mb-2 h-12 w-12 bg-gray-100 rounded-full flex items-center justify-center">
//                                         <Clock size={24} className="text-gray-600" />
//                                     </div>
//                                     <h4 className="font-medium text-gray-900 mb-1">Schedule</h4>
//                                     <p className="text-sm text-gray-600 text-center">Set a future date and time for publishing</p>

//                                     <div className="mt-4 w-full">
//                                         <label htmlFor="scheduleDate" className="block text-xs text-gray-500 mb-1">
//                                             Publish Date
//                                         </label>
//                                         <input
//                                             type="date"
//                                             id="scheduleDate"
//                                             className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
//                                         />
//                                     </div>

//                                     <div className="mt-2 w-full">
//                                         <label htmlFor="scheduleTime" className="block text-xs text-gray-500 mb-1">
//                                             Publish Time
//                                         </label>
//                                         <input
//                                             type="time"
//                                             id="scheduleTime"
//                                             className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
//                                         />
//                                     </div>

//                                     <button className="mt-4 bg-white border border-gray-300 text-gray-700 w-full py-2 rounded-lg hover:bg-gray-50 transition-colors">
//                                         Schedule
//                                     </button>
//                                 </div>

//                                 <div className="flex-1 border border-gray-200 rounded-lg p-4 flex flex-col items-center">
//                                     <div className="mb-2 h-12 w-12 bg-gray-100 rounded-full flex items-center justify-center">
//                                         <Pencil size={24} className="text-gray-600" />
//                                     </div>
//                                     <h4 className="font-medium text-gray-900 mb-1">Save as Draft</h4>
//                                     <p className="text-sm text-gray-600 text-center">Save your work and continue editing later</p>
//                                     <button className="mt-auto bg-white border border-gray-300 text-gray-700 w-full py-2 rounded-lg hover:bg-gray-50 transition-colors mt-4">
//                                         Save Draft
//                                     </button>
//                                 </div>
//                             </div>

//                             <div className="flex justify-between">
//                                 <button
//                                     onClick={() => setUploadStep(3)}
//                                     className="cursor-pointer bg-white text-gray-700 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
//                                 >
//                                     Back
//                                 </button>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default NewEpisode