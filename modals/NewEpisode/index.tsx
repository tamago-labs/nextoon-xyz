import ConnectedModal from "../Connected"
import { X, Plus, Upload, BookOpen, Pencil, ArrowRight, Check, Clock, Unlock, Key } from 'lucide-react';
import { useState, useReducer, useCallback, useContext } from "react";
import { ChevronDown, Image, FileText, Languages } from 'lucide-react';
import { FileUploader } from '@aws-amplify/ui-react-storage';
import '@aws-amplify/ui-react/styles.css';
import { ContentContext } from "@/contexts/content"

const NewEpisodeModal = ({ visible, close, mySeries }: any) => {

    const { addEpisode } = useContext(ContentContext)

    const [files, setFiles] = useState<any>({})

    const [values, dispatch] = useReducer(
        (curVal: any, newVal: any) => ({ ...curVal, ...newVal }),
        {
            selectedSeries: undefined,
            episodeTitle: "",
            episodeDescription: "",
            minTokens: 50000,
            errorMessage: undefined,
            loading: false
        }
    )

    const { selectedSeries, episodeTitle, episodeDescription, minTokens, loading, errorMessage } = values
    const [uploadStep, setUploadStep] = useState(1);

    const processFile = async ({ file }: any) => {
        const fileExtension = file.name.split('.').pop();

        return file
            .arrayBuffer()
            .then((filebuffer: any) => window.crypto.subtle.digest('SHA-1', filebuffer))
            .then((hashBuffer: any) => {
                const hashArray = Array.from(new Uint8Array(hashBuffer));
                const hashHex = hashArray
                    .map((a) => a.toString(16).padStart(2, '0'))
                    .join('');
                return { file, key: `${hashHex}.${fileExtension}` };
            });
    };

    console.log("files:", files)

    const onPublish = useCallback(async (isTokenGated: boolean) => {

        dispatch({
            errorMessage: undefined
        })

        let validFiles = []

        for (let filename of Object.keys(files)) {
            if (files[filename].status === "success") {
                validFiles.push(filename)
            }
        }

        if (validFiles.length === 0) {
            dispatch({
                errorMessage: 'None of images are added.'
            })
            return;
        }

        // Title: 1–200 characters
        if (!episodeTitle || episodeTitle.length < 1 || episodeTitle.length > 200) {
            dispatch({
                errorMessage: 'Title must be between 1 and 200 characters.'
            })
            return;
        }

        dispatch({
            loading: true
        })

        try {

            console.log({
                contentId: selectedSeries.id,
                episodeTitle: episodeTitle,
                episodeDescription: episodeDescription,
                isTokenGated,
                minimumToken: minTokens,
                pages: validFiles
            })

            await addEpisode({
                contentId: selectedSeries.id,
                episodeTitle: episodeTitle,
                episodeDescription: episodeDescription,
                isTokenGated,
                minimumToken: minTokens,
                pages: validFiles
            })

            close()

            alert("Completed. You may need to reload the page.")


        } catch (e: any) {
            console.log(e)
            dispatch({
                errorMessage: `${e.message}`
            })
        }

        dispatch({
            loading: false
        })

    }, [episodeTitle, episodeDescription, files, selectedSeries, minTokens])


    return (
        <ConnectedModal
            visible={visible}
            close={close}
            title="Add Episode"
            maxWidth="max-w-6xl"
        >
            <div>
                {/*<div className="  border-b border-gray-200">
                    <h2 className="text-xl font-bold text-gray-900">Upload New Episode</h2>
                    <p className="text-gray-600">Add a new episode to one of your existing series</p>
                </div>*/}
                <div className="space-y-6">
                    {/* Step 1: Select Series */}
                    <div className={`${uploadStep !== 1 && 'opacity-60'}`}>
                        <div className="flex items-center mb-4">
                            <div className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center font-medium text-sm">1</div>
                            <h3 className="ml-3 font-medium text-gray-900">Select Series</h3>
                            {uploadStep > 1 && (
                                <button
                                    onClick={() => setUploadStep(1)}
                                    className="ml-auto cursor-pointer text-sm text-blue-600 hover:text-blue-800"
                                >
                                    Edit
                                </button>
                            )}
                        </div>

                        {uploadStep === 1 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-9">
                                {mySeries.map((series: any) => (
                                    <button
                                        key={series.id}
                                        onClick={() => {
                                            dispatch({
                                                selectedSeries: series
                                            })
                                            setUploadStep(2);
                                        }}
                                        className="flex cursor-pointer items-center p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
                                    >
                                        {/*  <img
                                            src={series.coverImage}
                                            alt={series.title}
                                            className="w-16 h-24 object-cover rounded-md"
                                        />*/}
                                        <div className="mx-auto">
                                            <h4 className="font-medium text-gray-900">{series.tokenName}</h4>
                                            <p className="text-sm text-gray-600">{series.episodes.length} episodes</p>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        ) : (
                            <div className="flex items-center pl-9">
                                {/*<img
                                    src={selectedSeries?.coverImage}
                                    alt={selectedSeries?.title}
                                    className="w-12 h-16 object-cover rounded-md"
                                />*/}
                                <div className="ml-3">
                                    <h4 className="font-medium text-gray-900">{selectedSeries?.tokenName}</h4>
                                    <p className="text-sm  ">Episode {selectedSeries?.episodes.length + 1}</p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Step 2: Upload Images */}
                    <div className={`${uploadStep !== 2 && (uploadStep < 2 ? 'opacity-40' : 'opacity-60')}`}>
                        <div className="flex items-center mb-4">
                            <div className={`rounded-full w-6 h-6 flex items-center justify-center font-medium text-sm ${uploadStep >= 2 ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-400'
                                }`}>2</div>
                            <h3 className={`ml-3 font-medium ${uploadStep >= 2 ? 'text-gray-900' : 'text-gray-400'}`}>Upload Images</h3>

                            {uploadStep > 2 && (
                                <button
                                    onClick={() => setUploadStep(2)}
                                    className="ml-auto cursor-pointer text-sm text-blue-600 hover:text-blue-800"
                                >
                                    Edit
                                </button>
                            )}
                        </div>

                        {uploadStep === 2 && (
                            <div className="pl-9 space-y-4">
                                <FileUploader
                                    acceptedFileTypes={['image/*']}
                                    path={`images/`}
                                    bucket="nextoonContent"
                                    maxFileCount={20}
                                    isResumable
                                    processFile={processFile}
                                    onUploadSuccess={({ key }: any) => {
                                        setFiles((prevFiles: any) => {
                                            return {
                                                ...prevFiles,
                                                [key]: {
                                                    status: 'success',
                                                },
                                            };
                                        });
                                    }}
                                    onUploadStart={({ key }: any) => {
                                        setFiles((prevFiles: any) => {
                                            return {
                                                ...prevFiles,
                                                [key]: {
                                                    status: 'uploading',
                                                },
                                            };
                                        });
                                    }}
                                    onUploadError={(error: any, { key }: any) => {
                                        setFiles((prevFiles: any) => {
                                            return {
                                                ...prevFiles,
                                                [key]: {
                                                    status: 'error',
                                                    message: error
                                                },
                                            };
                                        });
                                    }}
                                />
                                {/*{Object.keys(files).map((key) => {
                                    return files[key] ? (
                                        <div>
                                            {key}: {files[key].status}
                                        </div>
                                    ) : null;
                                })}*/}

                                {/* Preview of uploaded images (mock data) */}
                                {/*<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {[1, 2, 3].map((index) => (
                                        <div key={index} className="relative group">
                                            <img
                                                src={`/api/placeholder/200/300?text=Page ${index}`}
                                                alt={`Page ${index}`}
                                                className="w-full h-auto rounded-md border border-gray-200"
                                            />
                                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-md">
                                                <button className="p-1 bg-white rounded-full">
                                                    <X size={16} className="text-red-500" />
                                                </button>
                                                <button className="p-1 bg-white rounded-full ml-2">
                                                    <Pencil size={16} className="text-blue-500" />
                                                </button>
                                            </div>
                                            <div className="absolute top-2 left-2 bg-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-medium">
                                                {index}
                                            </div>
                                        </div>
                                    ))}
                                    <button className="border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center p-8 hover:border-blue-500 hover:bg-blue-50 transition-colors">
                                        <Plus size={24} className="text-gray-400" />
                                    </button>
                                </div>*/}

                                <div className="flex justify-between mt-4">
                                    <button
                                        onClick={() => setUploadStep(1)}
                                        className="cursor-pointer bg-white text-gray-700 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                                    >
                                        Back
                                    </button>
                                    <button
                                        onClick={() => {
                                            // if (Object.keys(files),length > 0) {
                                            //     setUploadStep(3)
                                            // }
                                            setUploadStep(3)
                                        }}
                                        // disabled={ Object.keys(files),length > 0 }
                                        className={`bg-blue-600 cursor-pointer ${Object.keys(files).length === 0 && "opacity-60 "}  text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors`}
                                    >
                                        Continue to Details
                                    </button>
                                </div>
                            </div>
                        )}

                        {uploadStep > 2 && (
                            <div className="pl-9">
                                <div className="flex items-center text-sm ">
                                    <Image size={16} className="mr-2 " />
                                    <span>{Object.keys(files).length} images uploaded</span>
                                    <Check size={16} className="ml-2 text-green-700" />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Step 3: Episode Details */}
                    <div className={`${uploadStep !== 3 && (uploadStep < 3 ? 'opacity-40' : 'opacity-60')}`}>
                        <div className="flex items-center mb-4">
                            <div className={`rounded-full w-6 h-6 flex items-center justify-center font-medium text-sm ${uploadStep >= 3 ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-400'
                                }`}>3</div>
                            <h3 className={`ml-3 font-medium ${uploadStep >= 3 ? 'text-gray-900' : 'text-gray-400'}`}>Episode Details</h3>
                            {uploadStep > 3 && (
                                <button
                                    onClick={() => setUploadStep(3)}
                                    className="ml-auto cursor-pointer text-sm text-blue-600 hover:text-blue-800"
                                >
                                    Edit
                                </button>
                            )}
                        </div>

                        {uploadStep === 3 && (
                            <div className="pl-9 space-y-4">
                                <div>
                                    <label htmlFor="episodeTitle" className="block text-sm font-medium text-gray-700 mb-1">
                                        Title
                                    </label>
                                    <input
                                        type="text"
                                        id="episodeTitle"
                                        value={episodeTitle}
                                        onChange={(e) => dispatch({
                                            episodeTitle: e.target.value
                                        })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Enter episode title"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="episodeDescription" className="block text-sm font-medium text-gray-700 mb-1">
                                        Description (optional)
                                    </label>
                                    <textarea
                                        id="episodeDescription"
                                        value={episodeDescription}
                                        onChange={(e) => dispatch({
                                            episodeDescription: e.target.value
                                        })}
                                        rows={3}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Enter a brief description of this episode"
                                    />
                                </div>


                                <div className="flex justify-between">
                                    <button
                                        onClick={() => setUploadStep(2)}
                                        className="cursor-pointer bg-white text-gray-700 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                                    >
                                        Back
                                    </button>
                                    <button
                                        onClick={() => setUploadStep(4)}
                                        // disabled={!episodeTitle}
                                        className={`bg-blue-600 cursor-pointer ${!episodeTitle && "opacity-60 "}  text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors`}
                                    >
                                        Continue to Publishing
                                    </button>
                                </div>
                            </div>
                        )}

                        {uploadStep > 3 && (
                            <div className="pl-9">
                                <div className="flex items-center text-sm ">
                                    <FileText size={16} className="mr-2  " />
                                    <span>Details completed</span>
                                    <Check size={16} className="ml-2 text-green-700" />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Step 4: Publish Options */}
                    <div className={`${uploadStep !== 4 && (uploadStep < 4 ? 'opacity-40' : 'opacity-60')}`}>
                        <div className="flex items-center mb-4">
                            <div className={`rounded-full w-6 h-6 flex items-center justify-center font-medium text-sm ${uploadStep >= 4 ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-400'
                                }`}>4</div>
                            <h3 className={`ml-3 font-medium ${uploadStep >= 4 ? 'text-gray-900' : 'text-gray-400'}`}>Publishing Options</h3>
                        </div>

                        {uploadStep === 4 && (
                            <div className="pl-9 space-y-4">
                                <div className="flex gap-4">
                                    <div className="flex-1 border border-gray-200 rounded-lg p-4 flex flex-col items-center">
                                        <div className="mb-2 h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                                            <Unlock size={24} className="text-green-600" />
                                        </div>
                                        <h4 className="font-medium text-gray-900 mb-1">Free to Read</h4>
                                        <p className="text-sm text-gray-600 text-center">Make your episode available to all readers with no token requirement</p>

                                        <div className="w-full mt-auto">
                                            {/* <div className="flex items-center justify-between mb-4">
                                                <label className="flex items-center">
                                                    <input type="radio" name="publishType" defaultChecked className="mr-2" />
                                                    <span>Publish Now</span>
                                                </label>
                                                <label className="flex items-center">
                                                    <input type="radio" name="publishType" className="mr-2" />
                                                    <span>Schedule</span>
                                                </label>
                                            </div> */}

                                            <button disabled={loading} onClick={() => onPublish(false)} className="cursor-pointer w-full bg-white text-gray-700 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                                                Publish Free Episode
                                            </button>
                                        </div>
                                    </div>

                                    <div className="flex-1 border border-gray-200 rounded-lg p-4 flex flex-col items-center">
                                        <div className="mb-2 h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                                            <Key size={24} className="text-blue-600" />
                                        </div>
                                        <h4 className="font-medium text-gray-900 mb-1">Token-Gated</h4>
                                        <p className="text-sm text-gray-600 text-center">Require readers to hold a minimum amount of tokens to access</p>

                                        <div className="mt-4 mb-2 w-full">
                                            <label className="block text-xs text-gray-500 mb-1">
                                                Minimum Token Requirement
                                            </label>
                                            <div className="flex">
                                                <input
                                                    type="number"
                                                    step="1"
                                                    value={minTokens}
                                                    onChange={(e) => dispatch({
                                                        minTokens: Number(e.target.value)
                                                    })}
                                                    className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md text-sm"
                                                />
                                                <span className="bg-gray-100 px-3 py-2 border border-l-0 border-gray-300 rounded-r-md text-sm flex items-center">
                                                    {selectedSeries?.tokenSymbol}
                                                </span>
                                            </div>
                                            <p className="text-xs text-gray-500 mt-1">
                                                Readers need at least this many tokens to access this episode
                                            </p>
                                        </div>

                                        <button disabled={loading} onClick={() => onPublish(true)} className="mt-auto cursor-pointer bg-blue-600 text-white w-full py-2 rounded-lg hover:bg-blue-700 transition-colors">
                                            Publish Token-Gated Episode
                                        </button>
                                    </div>

                                </div>

                                {errorMessage && (
                                    <div className="flex px-2 w-full mx-auto py-4 pb-2 ">
                                        <p className="text-sm mx-auto text-center font-semibold  text-blue-600">
                                            {errorMessage}
                                        </p>
                                    </div>)}

                                <div className="flex justify-between">
                                    <button
                                        onClick={() => setUploadStep(3)}
                                        className="cursor-pointer bg-white text-gray-700 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                                    >
                                        Back
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </ConnectedModal>
    )
}

export default NewEpisodeModal