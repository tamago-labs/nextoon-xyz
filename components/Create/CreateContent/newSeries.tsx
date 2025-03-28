import React, { useState } from 'react';
import { Upload, Image as ImageIcon, Tag, Calendar, Info, Languages, ChevronDown, Check, X, Plus } from 'lucide-react';

const NewSeries = () => {

  const [currentStep, setCurrentStep] = useState(1);
  const [seriesTitle, setSeriesTitle] = useState('');
  const [seriesDescription, setSeriesDescription] = useState('');
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [showAIAssist, setShowAIAssist] = useState(false);
  const [releaseSchedule, setReleaseSchedule] = useState('weekly');
  const [releaseDay, setReleaseDay] = useState('friday');
  const [maturityRating, setMaturityRating] = useState('everyone');
  const [coverImage, setCoverImage] = useState(null);
  const [bannerImage, setBannerImage] = useState(null);
  const [isPrivate, setIsPrivate] = useState(false);

  // Mock data for genres
  const genreOptions = [
    'Romance', 'Action', 'Fantasy', 'Comedy', 'Drama', 'Sci-Fi',
    'Horror', 'Slice of Life', 'Adventure', 'Mystery', 'Thriller'
  ];

  // Handle genre selection
  const toggleGenre = (genre) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter(g => g !== genre));
    } else {
      if (selectedGenres.length < 3) {
        setSelectedGenres([...selectedGenres, genre]);
      }
    }
  };

  // Next step handler
  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  // Previous step handler
  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div >
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-bold text-gray-900">Create New Series</h2>
        <p className="text-gray-600">Set up your new webtoon series</p>
      </div>

      {/* Progress Steps */}
      <div className="px-6 pt-6">
        <div className="flex items-center">
          <div className="flex items-center w-full">
            {[1, 2, 3].map((step) => (
              <React.Fragment key={step}>
                {/* Step circle */}
                <button
                  onClick={() => step < currentStep && setCurrentStep(step)}
                  className={`flex items-center justify-center w-8 h-8 rounded-full ${currentStep === step
                      ? 'bg-blue-600 text-white'
                      : currentStep > step
                        ? 'bg-blue-100 text-blue-600'
                        : 'bg-gray-200 text-gray-500'
                    } transition-colors ${step < currentStep ? 'cursor-pointer hover:bg-blue-200' : ''}`}
                >
                  {currentStep > step ? <Check size={16} /> : step}
                </button>

                {/* Connector line */}
                {step < 3 && (
                  <div className={`flex-1 h-1 ${currentStep > step ? 'bg-blue-600' : 'bg-gray-200'
                    }`}></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="flex justify-between text-sm mt-2">
          <div className={`${currentStep >= 1 ? 'text-blue-600 font-medium' : 'text-gray-500'}`}>Basic Information</div>
          <div className={`${currentStep >= 2 ? 'text-blue-600 font-medium' : 'text-gray-500'}`}>Visual Assets</div>
          <div className={`${currentStep >= 3 ? 'text-blue-600 font-medium' : 'text-gray-500'}`}>Publishing Settings</div>
        </div>
      </div>

      <div className="p-6">
        {/* Step 1: Basic Information */}
        {currentStep === 1 && (
          <div className="space-y-6">
            {/* Series Title */}
            <div>
              <label htmlFor="seriesTitle" className="block text-sm font-medium text-gray-700 mb-1">
                Series Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="seriesTitle"
                value={seriesTitle}
                onChange={(e) => setSeriesTitle(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your series title"
                required
              />
            </div>

            {/* Series Description */}
            <div>
              <label htmlFor="seriesDescription" className="block text-sm font-medium text-gray-700 mb-1">
                Series Description <span className="text-red-500">*</span>
              </label>
              <textarea
                id="seriesDescription"
                value={seriesDescription}
                onChange={(e) => setSeriesDescription(e.target.value)}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Describe your series to attract readers..."
                required
              />
              <div className="mt-1 flex justify-between">
                <span className="text-xs text-gray-500">
                  Minimum 100 characters
                </span>
                <span className="text-xs text-gray-500">
                  {seriesDescription.length}/2000 characters
                </span>
              </div>
            </div>

            {/* AI Description Assistant */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Info size={20} className="text-blue-600 mr-2" />
                  <span className="font-medium text-gray-900">AI Description Assistant</span>
                </div>
                <button
                  onClick={() => setShowAIAssist(!showAIAssist)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <ChevronDown size={20} className={`transform ${showAIAssist ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {showAIAssist && (
                <div className="mt-4 space-y-4">
                  <p className="text-sm text-gray-600">
                    Let AI help you craft a compelling description for your series. Just provide a few details about your story.
                  </p>

                  <div className="space-y-3">
                    <div>
                      <label htmlFor="mainCharacter" className="block text-xs font-medium text-gray-700 mb-1">
                        Main Character(s)
                      </label>
                      <input
                        type="text"
                        id="mainCharacter"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm"
                        placeholder="Describe your protagonist(s)"
                      />
                    </div>

                    <div>
                      <label htmlFor="setting" className="block text-xs font-medium text-gray-700 mb-1">
                        Setting
                      </label>
                      <input
                        type="text"
                        id="setting"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm"
                        placeholder="Where and when does the story take place?"
                      />
                    </div>

                    <div>
                      <label htmlFor="mainConflict" className="block text-xs font-medium text-gray-700 mb-1">
                        Main Conflict
                      </label>
                      <input
                        type="text"
                        id="mainConflict"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm"
                        placeholder="What challenges do your characters face?"
                      />
                    </div>
                  </div>

                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition-colors">
                    Generate Description
                  </button>
                </div>
              )}
            </div>

            {/* Genres */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Genres <span className="text-red-500">*</span> <span className="text-gray-500 font-normal">(select up to 3)</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {genreOptions.map((genre) => (
                  <button
                    key={genre}
                    onClick={() => toggleGenre(genre)}
                    className={`px-3 py-1.5 rounded-full text-sm ${selectedGenres.includes(genre)
                        ? 'bg-blue-100 text-blue-800 border border-blue-300'
                        : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200'
                      } transition-colors`}
                  >
                    {genre}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={handleNextStep}
                disabled={!seriesTitle || !seriesDescription || selectedGenres.length === 0}
                className={`px-6 py-2 rounded-lg text-white ${!seriesTitle || !seriesDescription || selectedGenres.length === 0
                    ? 'bg-gray-300 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700'
                  } transition-colors`}
              >
                Next: Visual Assets
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Visual Assets */}
        {currentStep === 2 && (
          <div className="space-y-6">
            {/* Cover Image */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cover Image <span className="text-red-500">*</span>
              </label>
              <div className="flex items-start space-x-6">
                <div className="w-48 h-72 bg-gray-100 border border-gray-300 rounded-lg flex flex-col items-center justify-center overflow-hidden">
                  {coverImage ? (
                    <div className="relative w-full h-full group">
                      <img
                        src="/api/placeholder/180/280"
                        alt="Cover preview"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-1.5 bg-white rounded-full">
                          <X size={18} className="text-red-500" />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <ImageIcon size={32} className="text-gray-400 mb-2" />
                      <span className="text-sm text-gray-500">Cover Image</span>
                    </>
                  )}
                </div>

                <div className="flex-1">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="mx-auto h-10 w-10 text-gray-400" />
                    <div className="mt-2 flex text-sm text-gray-600 justify-center">
                      <label
                        htmlFor="cover-upload"
                        className="relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500"
                      >
                        <span>Upload cover image</span>
                        <input id="cover-upload" name="cover-upload" type="file" className="sr-only" />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      PNG, JPG up to 5MB (Recommended size: 360x560px)
                    </p>
                  </div>

                  <div className="mt-4 text-sm text-gray-600">
                    <p className="font-medium mb-1">Cover Image Tips:</p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-500">
                      <li>Use vertical orientation with 9:16 aspect ratio</li>
                      <li>Feature main character(s) to attract attention</li>
                      <li>Avoid small text that may be hard to read on mobile</li>
                      <li>Choose bold colors that stand out in thumbnails</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Banner Image */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Banner Image <span className="text-gray-500 font-normal">(optional)</span>
              </label>

              <div>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  {bannerImage ? (
                    <div className="relative w-full h-32 group">
                      <img
                        src="/api/placeholder/800/200"
                        alt="Banner preview"
                        className="w-full h-full object-cover rounded-md"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-md">
                        <button className="p-1.5 bg-white rounded-full">
                          <X size={18} className="text-red-500" />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <Upload className="mx-auto h-10 w-10 text-gray-400" />
                      <div className="mt-2 flex text-sm text-gray-600 justify-center">
                        <label
                          htmlFor="banner-upload"
                          className="relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500"
                        >
                          <span>Upload banner image</span>
                          <input id="banner-upload" name="banner-upload" type="file" className="sr-only" />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">
                        PNG, JPG up to 5MB (Recommended size: 1200x300px)
                      </p>
                    </>
                  )}
                </div>

                <p className="mt-2 text-xs text-gray-500">
                  Banner images appear at the top of your series page and create a more immersive experience for readers.
                </p>
              </div>
            </div>

            {/* Character Previews */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Character Previews <span className="text-gray-500 font-normal">(optional)</span>
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {[1, 2].map((index) => (
                  <div key={index} className="relative group">
                    <img
                      src={`/api/placeholder/150/200?text=Character ${index}`}
                      alt={`Character ${index}`}
                      className="w-full h-auto rounded-md border border-gray-200"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-md">
                      <button className="p-1 bg-white rounded-full">
                        <X size={16} className="text-red-500" />
                      </button>
                    </div>
                  </div>
                ))}
                <div className="border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center p-8 hover:border-blue-500 hover:bg-blue-50 transition-colors cursor-pointer">
                  <Plus size={24} className="text-gray-400" />
                </div>
              </div>
              <p className="mt-2 text-xs text-gray-500">
                Add character previews to help readers get to know your cast before they start reading.
              </p>
            </div>

            <div className="flex justify-between">
              <button
                onClick={handlePrevStep}
                className="px-6 py-2 rounded-lg text-gray-700 border border-gray-300 hover:bg-gray-100 transition-colors"
              >
                Back
              </button>
              <button
                onClick={handleNextStep}
                disabled={!coverImage}
                className={`px-6 py-2 rounded-lg text-white ${!coverImage
                    ? 'bg-gray-300 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700'
                  } transition-colors`}
              >
                Next: Publishing Settings
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Publishing Settings */}
        {currentStep === 3 && (
          <div className="space-y-6">
            {/* Release Schedule */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Release Schedule <span className="text-red-500">*</span>
              </label>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div
                  onClick={() => setReleaseSchedule('weekly')}
                  className={`border rounded-lg p-4 cursor-pointer ${releaseSchedule === 'weekly' ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-200 hover:bg-blue-50/30'
                    }`}
                >
                  <div className="flex items-center mb-2">
                    <div className={`w-4 h-4 rounded-full mr-2 flex items-center justify-center ${releaseSchedule === 'weekly' ? 'bg-blue-600' : 'border border-gray-400'
                      }`}>
                      {releaseSchedule === 'weekly' && <div className="w-2 h-2 bg-white rounded-full"></div>}
                    </div>
                    <span className="font-medium">Weekly</span>
                  </div>
                  <p className="text-sm text-gray-600 pl-6">
                    Release one episode per week on a specific day
                  </p>
                </div>

                <div
                  onClick={() => setReleaseSchedule('biweekly')}
                  className={`border rounded-lg p-4 cursor-pointer ${releaseSchedule === 'biweekly' ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-200 hover:bg-blue-50/30'
                    }`}
                >
                  <div className="flex items-center mb-2">
                    <div className={`w-4 h-4 rounded-full mr-2 flex items-center justify-center ${releaseSchedule === 'biweekly' ? 'bg-blue-600' : 'border border-gray-400'
                      }`}>
                      {releaseSchedule === 'biweekly' && <div className="w-2 h-2 bg-white rounded-full"></div>}
                    </div>
                    <span className="font-medium">Bi-weekly</span>
                  </div>
                  <p className="text-sm text-gray-600 pl-6">
                    Release one episode every two weeks
                  </p>
                </div>

                <div
                  onClick={() => setReleaseSchedule('monthly')}
                  className={`border rounded-lg p-4 cursor-pointer ${releaseSchedule === 'monthly' ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-200 hover:bg-blue-50/30'
                    }`}
                >
                  <div className="flex items-center mb-2">
                    <div className={`w-4 h-4 rounded-full mr-2 flex items-center justify-center ${releaseSchedule === 'monthly' ? 'bg-blue-600' : 'border border-gray-400'
                      }`}>
                      {releaseSchedule === 'monthly' && <div className="w-2 h-2 bg-white rounded-full"></div>}
                    </div>
                    <span className="font-medium">Monthly</span>
                  </div>
                  <p className="text-sm text-gray-600 pl-6">
                    Release one episode per month
                  </p>
                </div>
              </div>
            </div>

            {releaseSchedule === 'weekly' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Release Day <span className="text-red-500">*</span>
                </label>

                <div className="grid grid-cols-7 gap-2">
                  {['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].map((day) => (
                    <button
                      key={day}
                      onClick={() => setReleaseDay(day)}
                      className={`py-2 rounded-md text-sm ${releaseDay === day
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        } transition-colors`}
                    >
                      {day.charAt(0).toUpperCase() + day.slice(1, 3)}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Maturity Rating */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Maturity Rating <span className="text-red-500">*</span>
              </label>

              <div className="space-y-3">
                <div
                  onClick={() => setMaturityRating('everyone')}
                  className={`border rounded-lg p-4 cursor-pointer flex items-start ${maturityRating === 'everyone' ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-200'
                    }`}
                >
                  <div className={`mt-0.5 w-4 h-4 rounded-full mr-3 flex-shrink-0 flex items-center justify-center ${maturityRating === 'everyone' ? 'bg-blue-600' : 'border border-gray-400'
                    }`}>
                    {maturityRating === 'everyone' && <div className="w-2 h-2 bg-white rounded-full"></div>}
                  </div>
                  <div>
                    <div className="font-medium">Everyone</div>
                    <p className="text-sm text-gray-600 mt-1">
                      Suitable for all ages. No mature content, violence, or strong language.
                    </p>
                  </div>
                </div>

                <div
                  onClick={() => setMaturityRating('teen')}
                  className={`border rounded-lg p-4 cursor-pointer flex items-start ${maturityRating === 'teen' ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-200'
                    }`}
                >
                  <div className={`mt-0.5 w-4 h-4 rounded-full mr-3 flex-shrink-0 flex items-center justify-center ${maturityRating === 'teen' ? 'bg-blue-600' : 'border border-gray-400'
                    }`}>
                    {maturityRating === 'teen' && <div className="w-2 h-2 bg-white rounded-full"></div>}
                  </div>
                  <div>
                    <div className="font-medium">Teen (13+)</div>
                    <p className="text-sm text-gray-600 mt-1">
                      May contain mild language, mild violence, and suggestive themes. Suitable for teens and older.
                    </p>
                  </div>
                </div>

                <div
                  onClick={() => setMaturityRating('mature')}
                  className={`border rounded-lg p-4 cursor-pointer flex items-start ${maturityRating === 'mature' ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-200'
                    }`}
                >
                  <div className={`mt-0.5 w-4 h-4 rounded-full mr-3 flex-shrink-0 flex items-center justify-center ${maturityRating === 'mature' ? 'bg-blue-600' : 'border border-gray-400'
                    }`}>
                    {maturityRating === 'mature' && <div className="w-2 h-2 bg-white rounded-full"></div>}
                  </div>
                  <div>
                    <div className="font-medium">Mature (17+)</div>
                    <p className="text-sm text-gray-600 mt-1">
                      Contains mature content such as strong language, violence, or sexual themes. For mature audiences only.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Primary Language <span className="text-red-500">*</span>
              </label>

              <select className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
                <option>English</option>
                <option>Korean</option>
                <option>Japanese</option>
                <option>Chinese</option>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
              </select>

              <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center">
                  <Languages size={20} className="text-blue-600 mr-2" />
                  <span className="font-medium text-gray-900">AI Translation Service</span>
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Your episodes can be automatically translated to reach a global audience.
                  You can set up translations after creating your series.
                </p>
              </div>
            </div>

            {/* Visibility */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Visibility Settings
              </label>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="privateMode"
                  checked={isPrivate}
                  onChange={() => setIsPrivate(!isPrivate)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="privateMode" className="ml-2 block text-sm text-gray-700">
                  Make this series private (only visible to you)
                </label>
              </div>
              <p className="mt-1 text-xs text-gray-500 pl-6">
                You can make your series public later when you're ready to launch.
              </p>
            </div>

            <div className="flex justify-between pt-4 border-t border-gray-200">
              <button
                onClick={handlePrevStep}
                className="px-6 py-2 rounded-lg text-gray-700 border border-gray-300 hover:bg-gray-100 transition-colors"
              >
                Back
              </button>
              <div>
                <button className="px-6 py-2 mr-3 rounded-lg text-gray-700 border border-gray-300 hover:bg-gray-100 transition-colors">
                  Save as Draft
                </button>
                <button className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                  Create Series
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewSeries;