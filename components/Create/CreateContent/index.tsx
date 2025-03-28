
import React, { useState } from 'react';
import { Plus, BookOpen, Pencil } from 'lucide-react';
import NewEpisode from './newEpisode';
import NewSeries from './newSeries';
import ContinueDraft from './draft';

enum CreateOptions {
    NEW_EPISODE,
    NEW_SERIES,
    DRAFT
}

const CreateContent = () => {

    const [activeSection, setActiveSection] = useState<CreateOptions>(CreateOptions.NEW_EPISODE);

    const createOptions = [
        { id: CreateOptions.NEW_EPISODE, name: 'New Episode', icon: Plus, description: 'Add a new episode to an existing series' },
        { id: CreateOptions.NEW_SERIES, name: 'New Series', icon: BookOpen, description: 'Create a brand new webtoon series' },
        { id: CreateOptions.DRAFT, name: 'Continue Draft', icon: Pencil, description: 'Continue working on saved drafts' },
    ];

    return (
        <div className="space-y-8">
            {/* Create Options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {createOptions.map((option) => (
                    <button
                        key={option.id}
                        onClick={() => setActiveSection(option.id)}
                        className={`flex flex-col items-center p-6 rounded-xl border-2 transition-all ${activeSection === option.id
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50/50'
                            }`}
                    >
                        <option.icon size={32} className={activeSection === option.id ? 'text-blue-600' : 'text-gray-500'} />
                        <h3 className="mt-4 font-semibold text-lg text-gray-900">{option.name}</h3>
                        <p className="mt-2 text-sm text-gray-600 text-center">{option.description}</p>
                    </button>
                ))}
            </div>

            {/* Active Section Content */}
            {activeSection === CreateOptions.NEW_EPISODE && (
                <div className="bg-white border border-gray-200 rounded-xl shadow-sm"> 
                    <NewEpisode/> 
                </div>
            )}

            {activeSection === CreateOptions.NEW_SERIES && (
                <div className="text-center  border border-gray-200 rounded-xl shadow-sm">
                    <NewSeries/>
                </div>
            )}

            {activeSection === CreateOptions.DRAFT && (
                <div className="text-center    border border-gray-200 rounded-xl shadow-sm">
                    <ContinueDraft/>
                </div>
            )}
        </div>
    )
}

export default CreateContent