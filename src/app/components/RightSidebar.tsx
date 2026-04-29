import { ChevronLeft, Folder, FileText, BookOpen } from 'lucide-react';
import { useState } from 'react';

export function RightSidebar() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const mainOrganizations = [
    'משרד הבריאות',
    'משרד הביטחון',
    'משרד החינוך',
    'משרד הפנים'
  ];

  return (
    <aside className="w-64 flex-shrink-0 overflow-y-auto z-10 relative px-4 py-6 before:content-[''] before:absolute before:left-0 before:top-6 before:bottom-6 before:w-[1px] before:bg-[#E5E5E5]" dir="rtl">
      <div className="space-y-1">
        {/* My Environment */}
        <div>
          <button
            onClick={() => {
              toggleSection('myEnvironment');
              setActiveItem(activeItem === 'myEnvironment' ? null : 'myEnvironment');
            }}
            className={`w-full flex items-center gap-3 px-4 py-1.5 rounded-full transition-all ${
              activeItem === 'myEnvironment' ? 'bg-[#1B3A6B]' : 'hover:bg-white/60'
            }`}
          >
            <ChevronLeft
              className={`w-4 h-4 transition-transform flex-shrink-0 ${
                expandedSection === 'myEnvironment' ? '-rotate-90' : ''
              } ${activeItem === 'myEnvironment' ? 'text-white' : 'text-gray-500'}`}
            />
            <span className={`text-right flex-1 ${activeItem === 'myEnvironment' ? 'text-white' : 'text-gray-700'}`}>הסביבה שלי</span>
          </button>
          {expandedSection === 'myEnvironment' && (
            <div className="mr-8 mt-1 space-y-0.5">
              <div className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:bg-white/60 rounded-full cursor-pointer text-right transition-all">
                <Folder className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                <span className="flex-1">מחלקת משאבי אנוש</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:bg-white/60 rounded-full cursor-pointer text-right transition-all">
                <Folder className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                <span className="flex-1">מחלקת כספים</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:bg-white/60 rounded-full cursor-pointer text-right transition-all">
                <Folder className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                <span className="flex-1">מחלקת טכנולוגיה</span>
              </div>
            </div>
          )}
        </div>

        {/* Additional Environments */}
        <div>
          <button
            onClick={() => {
              toggleSection('additionalEnvironments');
              setActiveItem(activeItem === 'additionalEnvironments' ? null : 'additionalEnvironments');
            }}
            className={`w-full flex items-center gap-3 px-4 py-1.5 rounded-full transition-all ${
              activeItem === 'additionalEnvironments' ? 'bg-[#1B3A6B]' : 'hover:bg-white/60'
            }`}
          >
            <ChevronLeft
              className={`w-4 h-4 transition-transform flex-shrink-0 ${
                expandedSection === 'additionalEnvironments' ? '-rotate-90' : ''
              } ${activeItem === 'additionalEnvironments' ? 'text-white' : 'text-gray-500'}`}
            />
            <span className={`text-right flex-1 ${activeItem === 'additionalEnvironments' ? 'text-white' : 'text-gray-700'}`}>סביבות נוספות</span>
          </button>
          {expandedSection === 'additionalEnvironments' && (
            <div className="mr-8 mt-1 space-y-0.5">
              <div className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:bg-white/60 rounded-full cursor-pointer text-right transition-all">
                <Folder className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                <span className="flex-1">ארגון א׳</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:bg-white/60 rounded-full cursor-pointer text-right transition-all">
                <Folder className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                <span className="flex-1">ארגון ב׳</span>
              </div>
            </div>
          )}
        </div>

        {/* All Documents */}
        <button
          onClick={() => {
            toggleSection('allDocuments');
            setActiveItem(activeItem === 'allDocuments' ? null : 'allDocuments');
          }}
          className={`w-full flex items-center gap-3 px-4 py-1.5 rounded-full transition-all ${
            activeItem === 'allDocuments' ? 'bg-[#1B3A6B]' : 'hover:bg-white/60'
          }`}
        >
          <ChevronLeft className={`w-4 h-4 flex-shrink-0 ${activeItem === 'allDocuments' ? 'text-white' : 'text-gray-500'}`} />
          <span className={`text-right flex-1 ${activeItem === 'allDocuments' ? 'text-white' : 'text-gray-700'}`}>כל המסמכים</span>
        </button>

        {/* Main Documents */}
        <div>
          <button
            onClick={() => {
              toggleSection('mainDocuments');
              setActiveItem(activeItem === 'mainDocuments' ? null : 'mainDocuments');
            }}
            className={`w-full flex items-center gap-3 px-4 py-1.5 rounded-full transition-all ${
              activeItem === 'mainDocuments' ? 'bg-[#1B3A6B]' : 'hover:bg-white/60'
            }`}
          >
            <ChevronLeft
              className={`w-4 h-4 transition-transform flex-shrink-0 ${
                expandedSection === 'mainDocuments' ? '-rotate-90' : ''
              } ${activeItem === 'mainDocuments' ? 'text-white' : 'text-gray-500'}`}
            />
            <span className={`text-right flex-1 ${activeItem === 'mainDocuments' ? 'text-white' : 'text-gray-700'}`}>מסמכים ראשיים</span>
          </button>
          {expandedSection === 'mainDocuments' && (
            <div className="mr-8 mt-1 space-y-0.5">
              {mainOrganizations.map((org, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:bg-white/60 rounded-full cursor-pointer transition-all"
                >
                  <Folder className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                  <span className="text-right flex-1">{org}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Guide */}
        <div>
          <button
            onClick={() => {
              toggleSection('guide');
              setActiveItem(activeItem === 'guide' ? null : 'guide');
            }}
            className={`w-full flex items-center gap-3 px-4 py-1.5 rounded-full transition-all ${
              activeItem === 'guide' ? 'bg-[#1B3A6B]' : 'hover:bg-white/60'
            }`}
          >
            <ChevronLeft
              className={`w-4 h-4 transition-transform flex-shrink-0 ${
                expandedSection === 'guide' ? '-rotate-90' : ''
              } ${activeItem === 'guide' ? 'text-white' : 'text-gray-500'}`}
            />
            <span className={`text-right flex-1 ${activeItem === 'guide' ? 'text-white' : 'text-gray-700'}`}>מורה נבוכים</span>
          </button>
          {expandedSection === 'guide' && (
            <div className="mr-8 mt-1 space-y-0.5">
              <div className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:bg-white/60 rounded-full cursor-pointer transition-all">
                <FileText className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                <span className="text-right flex-1">מדיניות</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:bg-white/60 rounded-full cursor-pointer transition-all">
                <BookOpen className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                <span className="text-right flex-1">שיתופי פעולה</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}