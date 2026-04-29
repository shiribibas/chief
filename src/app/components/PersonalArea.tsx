import { User, Eye, Send, CheckCircle, Share2, FileText, PenLine, List, Search, Folder, Trash2, Copy, ChevronDown, ChevronLeft, GripVertical, Pin, Filter, X, Check } from 'lucide-react';
import { useState } from 'react';
import { ImportDropdown } from './ImportDropdown';

export function PersonalArea() {
  const [activeCard, setActiveCard] = useState<'templates' | 'signatures' | 'lists'>('templates');
  const [activeSubTab, setActiveSubTab] = useState<'my-templates' | 'deleted'>('my-templates');
  const [activeSignatureTab, setActiveSignatureTab] = useState<'approver' | 'distribution' | 'personal'>('approver');
  const [activeListTab, setActiveListTab] = useState<'my-lists' | 'deleted'>('my-lists');
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null);
  const [showDuplicatePanel, setShowDuplicatePanel] = useState<{type: string, name: string} | null>(null);
  const [hoveredSignature, setHoveredSignature] = useState<string | null>(null);
  const [showNewTemplate, setShowNewTemplate] = useState(false);
  const [templateMode, setTemplateMode] = useState<'new' | 'automatic'>('new');
  const [templateRows, setTemplateRows] = useState<Array<{id: string, type: 'section' | 'topic' | 'attachment' | 'emphasis', content: string, subsections?: Array<{id: string, content: string}>}>>([]);
  const [showNewSignature, setShowNewSignature] = useState(false);
  const [signatureType, setSignatureType] = useState<'approver' | 'distribution' | 'personal' | null>(null);
  const [showNewList, setShowNewList] = useState(false);
  const [listFilterDropdown, setListFilterDropdown] = useState(false);
  const [listMembers, setListMembers] = useState<Array<{id: string, name: string, idNumber: string, environment: string}>>([]);
  const [pinnedTemplates, setPinnedTemplates] = useState<Set<string>>(new Set());
  const [activeFilters, setActiveFilters] = useState<Array<string>>([]);
  const [selectedTemplateType, setSelectedTemplateType] = useState<'command' | 'instruction' | 'document' | null>(null);
  const [showNetworkSubMenu, setShowNetworkSubMenu] = useState(false);

  return (
    <div className="flex-1 overflow-auto px-8 py-6" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-6">
          {/* RIGHT SECTION - User Profile */}
          <div className="w-80 flex-shrink-0 space-y-4 relative">
            {/* Vertical divider on the left */}
            <div className="absolute left-0 top-4 bottom-4 w-px bg-[#E5E5E5]"></div>
            
            {/* User Profile - No card background */}
            <div className="px-6">
              {/* Avatar */}
              <div className="flex justify-center mb-4">
                <div className="w-24 h-24 rounded-full bg-[#1B3A6B] flex items-center justify-center">
                  <User className="w-12 h-12 text-white" />
                </div>
              </div>

              {/* User Info */}
              <div className="text-center mb-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">שם המשתמש</h3>
                <p className="text-sm text-gray-600 mb-1">ת.ז: 123456789</p>
                <p className="text-sm text-gray-600">ארגון א'</p>
              </div>

              {/* Permissions */}
              <div className="border-t border-gray-200 pt-4">
                <h4 className="text-xs font-medium text-gray-500 mb-3 text-right">הרשאות</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-right">
                    <Eye className="w-4 h-4 text-[#1B3A6B] flex-shrink-0" />
                    <span className="text-sm text-gray-700">נצפה פקודה</span>
                  </div>
                  <div className="flex items-center gap-2 text-right">
                    <Send className="w-4 h-4 text-[#1B3A6B] flex-shrink-0" />
                    <span className="text-sm text-gray-700">מפיץ פקודות</span>
                  </div>
                  <div className="flex items-center gap-2 text-right">
                    <CheckCircle className="w-4 h-4 text-[#1B3A6B] flex-shrink-0" />
                    <span className="text-sm text-gray-700">מאשר פקודות</span>
                  </div>
                  <div className="flex items-center gap-2 text-right">
                    <Share2 className="w-4 h-4 text-[#1B3A6B] flex-shrink-0" />
                    <span className="text-sm text-gray-700">משתף פקודות</span>
                  </div>
                </div>
              </div>

              {/* Departments */}
              <div className="border-t border-gray-200 pt-4 mt-4">
                <h4 className="text-xs font-medium text-gray-500 mb-3 text-right">אגפים</h4>
                <div className="relative">
                  <div className="max-h-32 overflow-y-auto space-y-2 pr-1 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                    <div className="flex items-center gap-2 text-right">
                      <Folder className="w-4 h-4 text-[#1B3A6B] flex-shrink-0" />
                      <span className="text-sm text-gray-700">מחלקת משאבי אנוש</span>
                    </div>
                    <div className="flex items-center gap-2 text-right">
                      <Folder className="w-4 h-4 text-[#1B3A6B] flex-shrink-0" />
                      <span className="text-sm text-gray-700">מחלקת כספים</span>
                    </div>
                    <div className="flex items-center gap-2 text-right">
                      <Folder className="w-4 h-4 text-[#1B3A6B] flex-shrink-0" />
                      <span className="text-sm text-gray-700">מחלקת טכנולוגיה</span>
                    </div>
                    <div className="flex items-center gap-2 text-right">
                      <Folder className="w-4 h-4 text-[#1B3A6B] flex-shrink-0" />
                      <span className="text-sm text-gray-700">מחלקת תפעול</span>
                    </div>
                    <div className="flex items-center gap-2 text-right">
                      <Folder className="w-4 h-4 text-[#1B3A6B] flex-shrink-0" />
                      <span className="text-sm text-gray-700">מחלקת שיווק</span>
                    </div>
                    <div className="flex items-center gap-2 text-right">
                      <Folder className="w-4 h-4 text-[#1B3A6B] flex-shrink-0" />
                      <span className="text-sm text-gray-700">מחלקת מכירות</span>
                    </div>
                  </div>
                  {/* Subtle scroll indicator */}
                  <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-white/20 to-transparent pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>

          {/* CENTER/MAIN SECTION */}
          <div className="flex-1">
            {/* Summary Cards Row - Rectangular clickable cards */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {/* Templates Card */}
              <button
                onClick={() => setActiveCard('templates')}
                className={`rounded-2xl p-4 transition-all cursor-pointer h-24 flex flex-col items-center justify-center gap-2 border ${
                  activeCard === 'templates'
                    ? 'bg-white shadow-lg border-[#E0E0E0]'
                    : 'bg-transparent border-[#E0E0E0]'
                }`}
              >
                {/* Large icon centered */}
                <FileText className="w-8 h-8 text-gray-600" strokeWidth={1.5} />
                {/* Title below icon */}
                <span className="text-sm font-medium text-gray-700">תבניות</span>
              </button>

              {/* Signatures Card */}
              <button
                onClick={() => setActiveCard('signatures')}
                className={`rounded-2xl p-4 transition-all cursor-pointer h-24 flex flex-col items-center justify-center gap-2 border ${
                  activeCard === 'signatures'
                    ? 'bg-white shadow-lg border-[#E0E0E0]'
                    : 'bg-transparent border-[#E0E0E0]'
                }`}
              >
                {/* Large icon centered */}
                <PenLine className="w-8 h-8 text-gray-600" strokeWidth={1.5} />
                {/* Title below icon */}
                <span className="text-sm font-medium text-gray-700">חתימות</span>
              </button>

              {/* Distribution Lists Card */}
              <button
                onClick={() => setActiveCard('lists')}
                className={`rounded-2xl p-4 transition-all cursor-pointer h-24 flex flex-col items-center justify-center gap-2 border ${
                  activeCard === 'lists'
                    ? 'bg-white shadow-lg border-[#E0E0E0]'
                    : 'bg-transparent border-[#E0E0E0]'
                }`}
              >
                {/* Large icon centered */}
                <List className="w-8 h-8 text-gray-600" strokeWidth={1.5} />
                {/* Title below icon */}
                <span className="text-sm font-medium text-gray-700">רשימות תפוצה</span>
              </button>
            </div>

            {/* Content Section Based on Active Card */}
            {activeCard === 'templates' && (
              <div>
                {/* Search Bar and Add Button - RTL: button on far right, search to its left */}
                <div className="flex items-center gap-4 mb-4">
                  <button
                    onClick={() => setShowNewTemplate(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-[#1B3A6B] text-white rounded-xl text-sm hover:bg-[#152e54] transition-colors flex-shrink-0"
                  >
                    <span>+</span>
                    <span>תבנית חדשה</span>
                  </button>
                  <div className="relative flex-1">
                    <input
                      type="text"
                      placeholder="חיפוש..."
                      className="w-full pr-10 pl-4 py-2 bg-white/70 backdrop-blur-md rounded-xl text-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1B3A6B]/50 text-right"
                    />
                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Sub-tabs - Far Right aligned */}
                <div className="flex gap-4 mb-4">
                  <button
                    onClick={() => setActiveSubTab('my-templates')}
                    className={`text-sm transition-colors pb-2 ${
                      activeSubTab === 'my-templates' ? 'text-gray-900 font-medium border-b-2 border-[#1B3A6B]' : 'text-gray-500'
                    }`}
                  >
                    התבניות שלי
                  </button>
                  <button
                    onClick={() => setActiveSubTab('deleted')}
                    className={`text-sm transition-colors pb-2 ${
                      activeSubTab === 'deleted' ? 'text-gray-900 font-medium border-b-2 border-[#1B3A6B]' : 'text-gray-500'
                    }`}
                  >
                    תבניות שנמחקו
                  </button>
                </div>

                {/* Templates List in White Container */}
                <div className="bg-white/70 backdrop-blur-md p-6 shadow-lg relative">
                  {activeSubTab === 'my-templates' && (
                    <div className="relative">
                      <div className="max-h-96 overflow-y-auto space-y-0 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                        <div className="py-4 hover:bg-gray-50/50 px-4 transition-colors cursor-pointer flex items-center justify-between">
                          <div className="flex items-center gap-3 flex-1">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                const newPinned = new Set(pinnedTemplates);
                                if (newPinned.has('template-1')) {
                                  newPinned.delete('template-1');
                                } else {
                                  newPinned.add('template-1');
                                }
                                setPinnedTemplates(newPinned);
                              }}
                              className="p-1 hover:bg-gray-200 rounded transition-colors"
                            >
                              <Pin className={`w-4 h-4 ${pinnedTemplates.has('template-1') ? 'text-[#1B3A6B] fill-[#1B3A6B]' : 'text-gray-400'}`} />
                            </button>
                            <span className="text-sm text-gray-900">תבנית פקודה כללית</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setShowNewTemplate(true);
                                // Pre-fill with existing data for duplication
                              }}
                              className="p-1 hover:bg-gray-200 rounded transition-colors"
                            >
                              <Copy className="w-4 h-4 text-gray-400" />
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setShowDeleteConfirm('template-1');
                              }}
                              className="p-1 hover:bg-gray-200 rounded transition-colors"
                            >
                              <Trash2 className="w-4 h-4 text-gray-400" />
                            </button>
                          </div>
                        </div>
                        <div className="border-t border-gray-200/50"></div>

                        <div className="py-4 hover:bg-gray-50/50 px-4 transition-colors cursor-pointer flex items-center justify-between">
                          <div className="flex items-center gap-3 flex-1">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                const newPinned = new Set(pinnedTemplates);
                                if (newPinned.has('template-2')) {
                                  newPinned.delete('template-2');
                                } else {
                                  newPinned.add('template-2');
                                }
                                setPinnedTemplates(newPinned);
                              }}
                              className="p-1 hover:bg-gray-200 rounded transition-colors"
                            >
                              <Pin className={`w-4 h-4 ${pinnedTemplates.has('template-2') ? 'text-[#1B3A6B] fill-[#1B3A6B]' : 'text-gray-400'}`} />
                            </button>
                            <span className="text-sm text-gray-900">תבנית דוח שבועי</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setShowNewTemplate(true);
                              }}
                              className="p-1 hover:bg-gray-200 rounded transition-colors"
                            >
                              <Copy className="w-4 h-4 text-gray-400" />
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setShowDeleteConfirm('template-2');
                              }}
                              className="p-1 hover:bg-gray-200 rounded transition-colors"
                            >
                              <Trash2 className="w-4 h-4 text-gray-400" />
                            </button>
                          </div>
                        </div>
                        <div className="border-t border-gray-200/50"></div>

                        <div className="py-4 hover:bg-gray-50/50 px-4 transition-colors cursor-pointer flex items-center justify-between">
                          <div className="flex items-center gap-3 flex-1">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                const newPinned = new Set(pinnedTemplates);
                                if (newPinned.has('template-3')) {
                                  newPinned.delete('template-3');
                                } else {
                                  newPinned.add('template-3');
                                }
                                setPinnedTemplates(newPinned);
                              }}
                              className="p-1 hover:bg-gray-200 rounded transition-colors"
                            >
                              <Pin className={`w-4 h-4 ${pinnedTemplates.has('template-3') ? 'text-[#1B3A6B] fill-[#1B3A6B]' : 'text-gray-400'}`} />
                            </button>
                            <span className="text-sm text-gray-900">תבנית הודעה</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setShowNewTemplate(true);
                              }}
                              className="p-1 hover:bg-gray-200 rounded transition-colors"
                            >
                              <Copy className="w-4 h-4 text-gray-400" />
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setShowDeleteConfirm('template-3');
                              }}
                              className="p-1 hover:bg-gray-200 rounded transition-colors"
                            >
                              <Trash2 className="w-4 h-4 text-gray-400" />
                            </button>
                          </div>
                        </div>
                        <div className="border-t border-gray-200/50"></div>

                        <div className="py-4 hover:bg-gray-50/50 px-4 transition-colors cursor-pointer flex items-center justify-between">
                          <div className="flex items-center gap-3 flex-1">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                const newPinned = new Set(pinnedTemplates);
                                if (newPinned.has('template-4')) {
                                  newPinned.delete('template-4');
                                } else {
                                  newPinned.add('template-4');
                                }
                                setPinnedTemplates(newPinned);
                              }}
                              className="p-1 hover:bg-gray-200 rounded transition-colors"
                            >
                              <Pin className={`w-4 h-4 ${pinnedTemplates.has('template-4') ? 'text-[#1B3A6B] fill-[#1B3A6B]' : 'text-gray-400'}`} />
                            </button>
                            <span className="text-sm text-gray-900">תבנית דוח חודשי</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setShowNewTemplate(true);
                              }}
                              className="p-1 hover:bg-gray-200 rounded transition-colors"
                            >
                              <Copy className="w-4 h-4 text-gray-400" />
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setShowDeleteConfirm('template-4');
                              }}
                              className="p-1 hover:bg-gray-200 rounded transition-colors"
                            >
                              <Trash2 className="w-4 h-4 text-gray-400" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeSubTab === 'deleted' && (
                    <div className="relative">
                      <div className="max-h-96 overflow-y-auto space-y-0 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                        <div className="py-4 hover:bg-gray-50/50 px-4 transition-colors cursor-pointer flex items-center justify-between">
                          <span className="text-sm text-gray-900">תבנית ישנה שנמחקה</span>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setShowNewTemplate(true);
                              }}
                              className="p-1 hover:bg-gray-200 rounded transition-colors"
                            >
                              <Copy className="w-4 h-4 text-gray-400" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeCard === 'signatures' && (
              <div>
                {/* Search Bar and Add Button - RTL: button on far right, search to its left */}
                <div className="flex items-center gap-4 mb-4">
                  <button
                    onClick={() => setShowNewSignature(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-[#1B3A6B] text-white rounded-xl text-sm hover:bg-[#152e54] transition-colors flex-shrink-0"
                  >
                    <span>+</span>
                    <span>חתימה חדשה</span>
                  </button>
                  <div className="relative flex-1">
                    <input
                      type="text"
                      placeholder="חיפוש..."
                      className="w-full pr-10 pl-4 py-2 bg-white/70 backdrop-blur-md rounded-xl text-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1B3A6B]/50 text-right"
                    />
                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Sub-tabs - Far Right aligned */}
                <div className="flex gap-4 mb-4">
                  <button
                    onClick={() => setActiveSignatureTab('approver')}
                    className={`text-sm transition-colors pb-2 ${
                      activeSignatureTab === 'approver' ? 'text-gray-900 font-medium border-b-2 border-[#1B3A6B]' : 'text-gray-500'
                    }`}
                  >
                    חתימת מאשר
                  </button>
                  <button
                    onClick={() => setActiveSignatureTab('distribution')}
                    className={`text-sm transition-colors pb-2 ${
                      activeSignatureTab === 'distribution' ? 'text-gray-900 font-medium border-b-2 border-[#1B3A6B]' : 'text-gray-500'
                    }`}
                  >
                    חתימה להפצה
                  </button>
                  <button
                    onClick={() => setActiveSignatureTab('personal')}
                    className={`text-sm transition-colors pb-2 ${
                      activeSignatureTab === 'personal' ? 'text-gray-900 font-medium border-b-2 border-[#1B3A6B]' : 'text-gray-500'
                    }`}
                  >
                    חתימה אישית במסמך
                  </button>
                </div>

                {/* Signatures List in White Container */}
                <div className="bg-white/70 backdrop-blur-md p-6 shadow-lg relative overflow-visible">
                  {activeSignatureTab === 'approver' && (
                    <div className="relative overflow-visible">
                      <div className="max-h-96 overflow-y-auto space-y-0 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                        <div className="py-4 hover:bg-gray-50/50 px-4 transition-colors cursor-pointer flex items-center justify-between">
                          <span className="text-sm text-gray-900">חתימת מאשר ראשי</span>
                          <div className="flex items-center gap-2 relative">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setShowDeleteConfirm('signature-1');
                              }}
                              className="p-1 hover:bg-gray-200 rounded transition-colors"
                            >
                              <Trash2 className="w-4 h-4 text-gray-400" />
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setShowNewSignature(true);
                              }}
                              className="p-1 hover:bg-gray-200 rounded transition-colors"
                            >
                              <Copy className="w-4 h-4 text-gray-400" />
                            </button>
                            <div className="relative">
                              <button
                                onMouseEnter={() => setHoveredSignature('signature-1')}
                                onMouseLeave={() => setHoveredSignature(null)}
                                className="p-1 hover:bg-gray-200 rounded transition-colors"
                              >
                                <Eye className="w-4 h-4 text-gray-400" />
                              </button>
                              {hoveredSignature === 'signature-1' && (
                                <div className="absolute left-0 top-8 bg-white rounded-xl shadow-lg p-4 w-64 z-[9999] text-right">
                                  <div className="space-y-2">
                                    <div><span className="text-sm text-gray-900">שם: ישראל ישראלי</span></div>
                                    <div><span className="text-sm text-gray-900">תפקיד: מנהל מחלקה</span></div>
                                    <div><span className="text-sm text-gray-900">טלפון: 050-1234567</span></div>
                                    <div><span className="text-sm text-gray-900">דוא״ל: israel@org.co.il</span></div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="border-t border-gray-200/50"></div>

                        <div className="py-4 hover:bg-gray-50/50 px-4 transition-colors cursor-pointer flex items-center justify-between">
                          <span className="text-sm text-gray-900">חתימת מאשר משנה</span>
                          <div className="flex items-center gap-2 relative">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setShowDeleteConfirm('signature-2');
                              }}
                              className="p-1 hover:bg-gray-200 rounded transition-colors"
                            >
                              <Trash2 className="w-4 h-4 text-gray-400" />
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setShowNewSignature(true);
                              }}
                              className="p-1 hover:bg-gray-200 rounded transition-colors"
                            >
                              <Copy className="w-4 h-4 text-gray-400" />
                            </button>
                            <div className="relative">
                              <button
                                onMouseEnter={() => setHoveredSignature('signature-2')}
                                onMouseLeave={() => setHoveredSignature(null)}
                                className="p-1 hover:bg-gray-200 rounded transition-colors"
                              >
                                <Eye className="w-4 h-4 text-gray-400" />
                              </button>
                              {hoveredSignature === 'signature-2' && (
                                <div className="absolute left-0 top-8 bg-white rounded-xl shadow-lg p-4 w-64 z-[9999] text-right">
                                  <div className="space-y-2">
                                    <div><span className="text-sm text-gray-900">שם: ישראל ישראלי</span></div>
                                    <div><span className="text-sm text-gray-900">תפקיד: מנהל מחלקה</span></div>
                                    <div><span className="text-sm text-gray-900">טלפון: 050-1234567</span></div>
                                    <div><span className="text-sm text-gray-900">דוא״ל: israel@org.co.il</span></div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeSignatureTab === 'distribution' && (
                    <div className="relative overflow-visible">
                      <div className="max-h-96 overflow-y-auto space-y-0 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                        <div className="py-4 hover:bg-gray-50/50 px-4 transition-colors cursor-pointer flex items-center justify-between">
                          <span className="text-sm text-gray-900">חתימה להפצה כללית</span>
                          <div className="flex items-center gap-2 relative">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setShowDeleteConfirm('signature-3');
                              }}
                              className="p-1 hover:bg-gray-200 rounded transition-colors"
                            >
                              <Trash2 className="w-4 h-4 text-gray-400" />
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setShowNewSignature(true);
                              }}
                              className="p-1 hover:bg-gray-200 rounded transition-colors"
                            >
                              <Copy className="w-4 h-4 text-gray-400" />
                            </button>
                            <div className="relative">
                              <button
                                onMouseEnter={() => setHoveredSignature('signature-3')}
                                onMouseLeave={() => setHoveredSignature(null)}
                                className="p-1 hover:bg-gray-200 rounded transition-colors"
                              >
                                <Eye className="w-4 h-4 text-gray-400" />
                              </button>
                              {hoveredSignature === 'signature-3' && (
                                <div className="absolute left-0 top-8 bg-white rounded-xl shadow-lg p-4 w-64 z-[9999] text-right">
                                  <div className="space-y-2">
                                    <div><span className="text-sm text-gray-900">שם: ישראל ישראלי</span></div>
                                    <div><span className="text-sm text-gray-900">תפקיד: מנהל מחלקה</span></div>
                                    <div><span className="text-sm text-gray-900">טלפון: 050-1234567</span></div>
                                    <div><span className="text-sm text-gray-900">דוא״ל: israel@org.co.il</span></div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeSignatureTab === 'personal' && (
                    <div className="relative overflow-visible">
                      <div className="max-h-96 overflow-y-auto space-y-0 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                        <div className="py-4 hover:bg-gray-50/50 px-4 transition-colors cursor-pointer flex items-center justify-between">
                          <span className="text-sm text-gray-900">חתימה אישית</span>
                          <div className="flex items-center gap-2 relative">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setShowDeleteConfirm('signature-4');
                              }}
                              className="p-1 hover:bg-gray-200 rounded transition-colors"
                            >
                              <Trash2 className="w-4 h-4 text-gray-400" />
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setShowNewSignature(true);
                              }}
                              className="p-1 hover:bg-gray-200 rounded transition-colors"
                            >
                              <Copy className="w-4 h-4 text-gray-400" />
                            </button>
                            <div className="relative">
                              <button
                                onMouseEnter={() => setHoveredSignature('signature-4')}
                                onMouseLeave={() => setHoveredSignature(null)}
                                className="p-1 hover:bg-gray-200 rounded transition-colors"
                              >
                                <Eye className="w-4 h-4 text-gray-400" />
                              </button>
                              {hoveredSignature === 'signature-4' && (
                                <div className="absolute left-0 top-8 bg-white rounded-xl shadow-lg p-4 w-64 z-[9999] text-right">
                                  <div className="space-y-2">
                                    <div><span className="text-sm text-gray-900">שם: ישראל ישראלי</span></div>
                                    <div><span className="text-sm text-gray-900">תפקיד: מנהל מחלקה</span></div>
                                    <div><span className="text-sm text-gray-900">טלפון: 050-1234567</span></div>
                                    <div><span className="text-sm text-gray-900">דוא״ל: israel@org.co.il</span></div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeCard === 'lists' && (
              <div>
                {/* Search Bar and Add Button - RTL: button on far right, search to its left */}
                <div className="flex items-center gap-4 mb-4">
                  <button
                    onClick={() => setShowNewList(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-[#1B3A6B] text-white rounded-xl text-sm hover:bg-[#152e54] transition-colors flex-shrink-0"
                  >
                    <span>+</span>
                    <span>רשימה חדשה</span>
                  </button>
                  <div className="relative flex-1">
                    <input
                      type="text"
                      placeholder="חיפוש..."
                      className="w-full pr-10 pl-4 py-2 bg-white/70 backdrop-blur-md rounded-xl text-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1B3A6B]/50 text-right"
                    />
                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Sub-tabs - Far Right aligned */}
                <div className="flex gap-4 mb-4">
                  <button
                    onClick={() => setActiveListTab('my-lists')}
                    className={`text-sm transition-colors pb-2 ${
                      activeListTab === 'my-lists' ? 'text-gray-900 font-medium border-b-2 border-[#1B3A6B]' : 'text-gray-500'
                    }`}
                  >
                    הרשימות שלי
                  </button>
                  <button
                    onClick={() => setActiveListTab('deleted')}
                    className={`text-sm transition-colors pb-2 ${
                      activeListTab === 'deleted' ? 'text-gray-900 font-medium border-b-2 border-[#1B3A6B]' : 'text-gray-500'
                    }`}
                  >
                    רשימות שנמחקו
                  </button>
                </div>

                {/* Distribution Lists in White Container */}
                <div className="bg-white/70 backdrop-blur-md p-6 shadow-lg relative">
                  {activeListTab === 'my-lists' && (
                    <div className="relative">
                      <div className="max-h-96 overflow-y-auto space-y-0 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                        <div className="py-4 hover:bg-gray-50/50 px-4 transition-colors cursor-pointer flex items-center justify-between">
                          <span className="text-sm text-gray-900">רשימת מפקדים</span>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setShowNewList(true);
                              }}
                              className="p-1 hover:bg-gray-200 rounded transition-colors"
                            >
                              <Copy className="w-4 h-4 text-gray-400" />
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setShowDeleteConfirm('list-1');
                              }}
                              className="p-1 hover:bg-gray-200 rounded transition-colors"
                            >
                              <Trash2 className="w-4 h-4 text-gray-400" />
                            </button>
                          </div>
                        </div>
                        <div className="border-t border-gray-200/50"></div>

                        <div className="py-4 hover:bg-gray-50/50 px-4 transition-colors cursor-pointer flex items-center justify-between">
                          <span className="text-sm text-gray-900">רשימת צוות א'</span>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setShowNewList(true);
                              }}
                              className="p-1 hover:bg-gray-200 rounded transition-colors"
                            >
                              <Copy className="w-4 h-4 text-gray-400" />
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setShowDeleteConfirm('list-2');
                              }}
                              className="p-1 hover:bg-gray-200 rounded transition-colors"
                            >
                              <Trash2 className="w-4 h-4 text-gray-400" />
                            </button>
                          </div>
                        </div>
                        <div className="border-t border-gray-200/50"></div>

                        <div className="py-4 hover:bg-gray-50/50 px-4 transition-colors cursor-pointer flex items-center justify-between">
                          <span className="text-sm text-gray-900">רשימת כלל המשתמשים</span>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setShowNewList(true);
                              }}
                              className="p-1 hover:bg-gray-200 rounded transition-colors"
                            >
                              <Copy className="w-4 h-4 text-gray-400" />
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setShowDeleteConfirm('list-3');
                              }}
                              className="p-1 hover:bg-gray-200 rounded transition-colors"
                            >
                              <Trash2 className="w-4 h-4 text-gray-400" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeListTab === 'deleted' && (
                    <div className="relative">
                      <div className="max-h-96 overflow-y-auto space-y-0 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                        <div className="py-4 hover:bg-gray-50/50 px-4 transition-colors cursor-pointer flex items-center justify-between">
                          <span className="text-sm text-gray-900">רשימה ישנה שנמחקה</span>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setShowNewList(true);
                              }}
                              className="p-1 hover:bg-gray-200 rounded transition-colors"
                            >
                              <Copy className="w-4 h-4 text-gray-400" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* New Template Creation Modal */}
      {showNewTemplate && (
        <div
          className="fixed inset-0 flex items-center justify-center z-[9998]"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          onClick={() => {
            setShowNewTemplate(false);
            setTemplateRows([]);
            setSelectedTemplateType(null);
            setTemplateMode('new');
          }}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl w-[800px] max-w-[90vw] max-h-[90vh] overflow-y-auto overflow-x-hidden p-8"
            onClick={(e) => e.stopPropagation()}
            dir="rtl"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => {
                  setShowNewTemplate(false);
                  setTemplateRows([]);
                  setTemplateMode('new');
                  setSelectedTemplateType(null);
                }}
                className="text-gray-600 hover:text-gray-900 text-2xl"
              >
                ✕
              </button>
              <h2 className="text-2xl font-bold text-gray-900">תבנית חדשה</h2>
            </div>

            {/* Template Mode Selector */}
            <div className="flex gap-4 mb-6 border-b border-gray-200">
              <button
                onClick={() => setTemplateMode('new')}
                className={`pb-3 px-2 text-sm transition-colors ${
                  templateMode === 'new' ? 'text-gray-900 font-medium border-b-2 border-[#1B3A6B]' : 'text-gray-500'
                }`}
              >
                תבנית חדשה
              </button>
              <button
                onClick={() => setTemplateMode('automatic')}
                className={`pb-3 px-2 text-sm transition-colors ${
                  templateMode === 'automatic' ? 'text-gray-900 font-medium border-b-2 border-[#1B3A6B]' : 'text-gray-500'
                }`}
              >
                תבנית פקודה אוטומטית
              </button>
            </div>

            {/* Header Fields */}
            <div className="space-y-4 mb-8">
              <div>
                <label className="block text-sm text-gray-700 mb-2 text-right">שם התבנית</label>
                <input
                  type="text"
                  placeholder="הזן שם תבנית..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl text-right focus:outline-none focus:ring-2 focus:ring-[#1B3A6B]/50"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2 text-right">בחירת אגף</label>
                <div className="relative">
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-xl text-right focus:outline-none focus:ring-2 focus:ring-[#1B3A6B]/50 appearance-none bg-white">
                    <option>בחר אגף...</option>
                    <option>מחלקת משאבי אנוש</option>
                    <option>מחלקת כספים</option>
                    <option>מחלקת טכנולוגיה</option>
                    <option>מחלקת תפעול</option>
                    <option>מחלקת שיווק</option>
                    <option>מחלקת מכירות</option>
                  </select>
                  <ChevronDown className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2 text-right">חיבור לתיקייה</label>
                <div className="relative">
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-xl text-right focus:outline-none focus:ring-2 focus:ring-[#1B3A6B]/50 appearance-none bg-white">
                    <option>בחר תיקייה...</option>
                    <option>תיקיית פקודות</option>
                    <option>תיקיית דוחות</option>
                    <option>תיקיית הוראות</option>
                    <option>תיקייה כללית</option>
                  </select>
                  <ChevronDown className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Template Type Selection - Document Preview Cards */}
            <div className="mb-8">
              <label className="block text-sm text-gray-700 mb-4 text-right">בחירת סוג מסמך</label>
              <div className="grid grid-cols-3 gap-3">
                {/* פקודה */}
                <button
                  onClick={() => setSelectedTemplateType('command')}
                  className={`relative rounded-xl transition-all overflow-hidden ${
                    selectedTemplateType === 'command'
                      ? 'border-2 border-[#1B3A6B]'
                      : 'border border-[#DEDEDE]'
                  }`}
                >
                  {/* Card background - top 2/3 */}
                  <div className={`p-4 pb-0 ${
                    selectedTemplateType === 'command'
                      ? 'bg-[#E8F4F8]'
                      : 'bg-[#EEF2F7]'
                  }`}>
                    {selectedTemplateType === 'command' && (
                      <div className="absolute top-2 right-2 w-5 h-5 bg-[#1B3A6B] rounded-full flex items-center justify-center z-10">
                        <Check className="w-3 h-3 text-white" strokeWidth={2.5} />
                      </div>
                    )}
                    {/* White document rectangle - cut off at bottom */}
                    <div className="bg-white rounded-t-lg p-3 pb-6 h-28 flex flex-col justify-start pt-4">
                      {/* 3 gray rectangles - one wide at top, two medium side by side */}
                      <div className="space-y-2">
                        <div className="h-2 bg-[#EEF2F7] rounded w-full"></div>
                        <div className="flex gap-1.5">
                          <div className="h-10 bg-[#EEF2F7] rounded flex-1"></div>
                          <div className="h-10 bg-[#EEF2F7] rounded flex-1"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Bottom white section - blends with document */}
                  <div className="bg-white px-3 py-2">
                    <span className="text-xs font-medium text-gray-900">פקודה</span>
                  </div>
                </button>

                {/* הוראה */}
                <button
                  onClick={() => setSelectedTemplateType('instruction')}
                  className={`relative rounded-xl transition-all overflow-hidden ${
                    selectedTemplateType === 'instruction'
                      ? 'border-2 border-[#1B3A6B]'
                      : 'border border-[#DEDEDE]'
                  }`}
                >
                  {/* Card background - top 2/3 */}
                  <div className={`p-4 pb-0 ${
                    selectedTemplateType === 'instruction'
                      ? 'bg-[#E8F4F8]'
                      : 'bg-[#EEF2F7]'
                  }`}>
                    {selectedTemplateType === 'instruction' && (
                      <div className="absolute top-2 right-2 w-5 h-5 bg-[#1B3A6B] rounded-full flex items-center justify-center z-10">
                        <Check className="w-3 h-3 text-white" strokeWidth={2.5} />
                      </div>
                    )}
                    {/* White document rectangle - cut off at bottom */}
                    <div className="bg-white rounded-t-lg p-3 pb-6 h-28 flex flex-col justify-start pt-4">
                      {/* 3 gray rectangles - one wide at top, two medium side by side */}
                      <div className="space-y-2">
                        <div className="h-2 bg-[#EEF2F7] rounded w-full"></div>
                        <div className="flex gap-1.5">
                          <div className="h-10 bg-[#EEF2F7] rounded flex-1"></div>
                          <div className="h-10 bg-[#EEF2F7] rounded flex-1"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Bottom white section - blends with document */}
                  <div className="bg-white px-3 py-2">
                    <span className="text-xs font-medium text-gray-900">הוראה</span>
                  </div>
                </button>

                {/* מסמך */}
                <button
                  onClick={() => setSelectedTemplateType('document')}
                  className={`relative rounded-xl transition-all overflow-hidden ${
                    selectedTemplateType === 'document'
                      ? 'border-2 border-[#1B3A6B]'
                      : 'border border-[#DEDEDE]'
                  }`}
                >
                  {/* Card background - top 2/3 */}
                  <div className={`p-4 pb-0 ${
                    selectedTemplateType === 'document'
                      ? 'bg-[#E8F4F8]'
                      : 'bg-[#EEF2F7]'
                  }`}>
                    {selectedTemplateType === 'document' && (
                      <div className="absolute top-2 right-2 w-5 h-5 bg-[#1B3A6B] rounded-full flex items-center justify-center z-10">
                        <Check className="w-3 h-3 text-white" strokeWidth={2.5} />
                      </div>
                    )}
                    {/* White document rectangle - cut off at bottom */}
                    <div className="bg-white rounded-t-lg p-3 pb-6 h-28 flex flex-col justify-start pt-4">
                      {/* 3 gray rectangles - one wide at top, two medium side by side */}
                      <div className="space-y-2">
                        <div className="h-2 bg-[#EEF2F7] rounded w-full"></div>
                        <div className="flex gap-1.5">
                          <div className="h-10 bg-[#EEF2F7] rounded flex-1"></div>
                          <div className="h-10 bg-[#EEF2F7] rounded flex-1"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Bottom white section - blends with document */}
                  <div className="bg-white px-3 py-2">
                    <span className="text-xs font-medium text-gray-900">מסמך</span>
                  </div>
                </button>
              </div>

              {/* Additional fields for automatic mode */}
              {templateMode === 'automatic' && (
                <>
                  <div>
                    <label className="block text-sm text-gray-700 mb-2 text-right">שם הפקודה</label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="הזן שם פקודה..."
                        className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-xl text-right focus:outline-none focus:ring-2 focus:ring-[#1B3A6B]/50"
                      />
                      <div className="absolute left-3 top-1/2 -translate-y-1/2">
                        <ImportDropdown />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 mb-2 text-right">זמנים</label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="הזן זמנים..."
                        className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-xl text-right focus:outline-none focus:ring-2 focus:ring-[#1B3A6B]/50"
                      />
                      <div className="absolute left-3 top-1/2 -translate-y-1/2">
                        <ImportDropdown />
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Template Builder Section */}
            <div className="bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl p-6 mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 text-right">בניית התבנית</h3>

              {/* Existing Rows */}
              <div className="space-y-2 mb-4">
                {templateRows.map((row, index) => (
                  <div key={row.id}>
                    <div className="flex items-center gap-3 py-3 px-4 bg-white rounded-xl border border-gray-200">
                      <GripVertical className="w-4 h-4 text-gray-400 cursor-move" />
                      <div className="flex-1 relative">
                        <input
                          type="text"
                          value={row.content}
                          onChange={(e) => {
                            const newRows = [...templateRows];
                            newRows[index].content = e.target.value;
                            setTemplateRows(newRows);
                          }}
                          placeholder={
                            row.type === 'section' ? 'שם הסעיף...' :
                            row.type === 'topic' ? 'שם הנושא...' :
                            row.type === 'attachment' ? 'שם הנספח...' :
                            'דגשים לכתיבה...'
                          }
                          className={`w-full text-right focus:outline-none ${templateMode === 'automatic' && (row.type === 'section' || row.type === 'topic' || row.type === 'attachment') ? 'pl-8' : ''}`}
                        />
                        {templateMode === 'automatic' && (row.type === 'section' || row.type === 'topic' || row.type === 'attachment') && (
                          <div className="absolute left-0 top-1/2 -translate-y-1/2">
                            <ImportDropdown />
                          </div>
                        )}
                      </div>
                      <button
                        onClick={() => {
                          setTemplateRows(templateRows.filter((_, i) => i !== index));
                        }}
                        className="p-1 hover:bg-gray-200 rounded transition-colors"
                      >
                        <Trash2 className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>

                    {/* Sub-sections for sections */}
                    {row.type === 'section' && (
                      <div className="mr-8 mt-2 space-y-2">
                        {row.subsections?.map((subsection, subIndex) => (
                          <div key={subsection.id} className="flex items-center gap-3 py-2 px-4 bg-gray-50 rounded-xl border border-gray-200">
                            <GripVertical className="w-4 h-4 text-gray-400 cursor-move" />
                            <div className="flex-1 relative">
                              <input
                                type="text"
                                value={subsection.content}
                                onChange={(e) => {
                                  const newRows = [...templateRows];
                                  if (newRows[index].subsections) {
                                    newRows[index].subsections![subIndex].content = e.target.value;
                                    setTemplateRows(newRows);
                                  }
                                }}
                                placeholder="שם תת הסעיף..."
                                className={`w-full text-right focus:outline-none bg-transparent ${templateMode === 'automatic' ? 'pl-8' : ''}`}
                              />
                              {templateMode === 'automatic' && (
                                <div className="absolute left-0 top-1/2 -translate-y-1/2">
                                  <ImportDropdown />
                                </div>
                              )}
                            </div>
                            <button
                              onClick={() => {
                                const newRows = [...templateRows];
                                newRows[index].subsections = newRows[index].subsections?.filter((_, i) => i !== subIndex);
                                setTemplateRows(newRows);
                              }}
                              className="p-1 hover:bg-gray-200 rounded transition-colors"
                            >
                              <Trash2 className="w-4 h-4 text-gray-400" />
                            </button>
                          </div>
                        ))}
                        <button
                          onClick={() => {
                            const newRows = [...templateRows];
                            if (!newRows[index].subsections) {
                              newRows[index].subsections = [];
                            }
                            newRows[index].subsections!.push({
                              id: `subsection-${Date.now()}`,
                              content: ''
                            });
                            setTemplateRows(newRows);
                          }}
                          className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-2"
                        >
                          <span>+</span>
                          <span>הוספת תת סעיף</span>
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Add Buttons */}
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => {
                    setTemplateRows([...templateRows, {
                      id: `section-${Date.now()}`,
                      type: 'section',
                      content: '',
                      subsections: []
                    }]);
                  }}
                  className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-xl text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <span>+</span>
                  <span>הוספת סעיף</span>
                </button>

                <button
                  onClick={() => {
                    setTemplateRows([...templateRows, {
                      id: `topic-${Date.now()}`,
                      type: 'topic',
                      content: ''
                    }]);
                  }}
                  className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-xl text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <span>+</span>
                  <span>הוספת נושא</span>
                </button>

                <button
                  onClick={() => {
                    setTemplateRows([...templateRows, {
                      id: `attachment-${Date.now()}`,
                      type: 'attachment',
                      content: ''
                    }]);
                  }}
                  className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-xl text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <span>+</span>
                  <span>הוספת נספח</span>
                </button>

                <button
                  onClick={() => {
                    setTemplateRows([...templateRows, {
                      id: `emphasis-${Date.now()}`,
                      type: 'emphasis',
                      content: ''
                    }]);
                  }}
                  className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-xl text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <span>+</span>
                  <span>הוספת דגשים לכתיבת המסמך</span>
                </button>
              </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-end">
              <button
                onClick={() => {
                  // Handle save action
                  setShowNewTemplate(false);
                  setTemplateRows([]);
                  setSelectedTemplateType(null);
                  setTemplateMode('new');
                }}
                className="px-8 py-3 bg-[#1B3A6B] text-white rounded-xl hover:bg-[#152e54] transition-colors font-medium"
              >
                צור תבנית
              </button>
            </div>
          </div>
        </div>
      )}

      {/* New Signature Modal */}
      {showNewSignature && (
        <div
          className="fixed inset-0 flex items-center justify-center z-[9998]"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          onClick={() => {
            setShowNewSignature(false);
            setSignatureType(null);
          }}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl w-[600px] max-w-[90vw] max-h-[90vh] overflow-y-auto p-8"
            onClick={(e) => e.stopPropagation()}
            dir="rtl"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={() => {
                  setShowNewSignature(false);
                  setSignatureType(null);
                }}
                className="text-gray-600 hover:text-gray-900 text-2xl"
              >
                ✕
              </button>
              <h2 className="text-2xl font-bold text-gray-900">חתימה חדשה</h2>
            </div>

            {!signatureType ? (
              /* Signature Type Selection */
              <div className="space-y-4">
                <p className="text-sm text-gray-700 mb-6 text-right">בחר סוג חתימה:</p>
                <button
                  onClick={() => setSignatureType('approver')}
                  className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl text-gray-900 hover:border-[#1B3A6B] hover:bg-gray-50 transition-all text-right"
                >
                  חתימת מאשר
                </button>
                <button
                  onClick={() => setSignatureType('distribution')}
                  className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl text-gray-900 hover:border-[#1B3A6B] hover:bg-gray-50 transition-all text-right"
                >
                  חתימה להפצה
                </button>
                <button
                  onClick={() => setSignatureType('personal')}
                  className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl text-gray-900 hover:border-[#1B3A6B] hover:bg-gray-50 transition-all text-right"
                >
                  חתימה אישית במסמך
                </button>
              </div>
            ) : (
              /* Signature Content Editor */
              <div className="space-y-6">
                <div>
                  <label className="block text-sm text-gray-700 mb-2 text-right">תוכן החתימה</label>
                  <textarea
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl text-right focus:outline-none focus:ring-2 focus:ring-[#1B3A6B]/50 resize-none"
                    rows={8}
                    placeholder="הזן את תוכן החתימה..."
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2 text-right">או העלה תמונת חתימה</label>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    id="signature-upload"
                  />
                  <label
                    htmlFor="signature-upload"
                    className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-xl text-sm text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>העלאת תמונה</span>
                  </label>
                </div>

                <div className="flex gap-3 justify-end pt-4">
                  <button
                    onClick={() => setSignatureType(null)}
                    className="px-6 py-2 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition-colors"
                  >
                    חזור
                  </button>
                  <button
                    onClick={() => {
                      // Save signature
                      setShowNewSignature(false);
                      setSignatureType(null);
                    }}
                    className="px-6 py-2 bg-[#1B3A6B] text-white rounded-xl hover:bg-[#152e54] transition-colors"
                  >
                    שמור חתימה
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* New Distribution List Modal */}
      {showNewList && (
        <div
          className="fixed inset-0 flex items-center justify-center z-[9998]"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          onClick={() => {
            setShowNewList(false);
            setListMembers([]);
            setActiveFilters([]);
          }}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl w-[800px] max-w-[90vw] max-h-[90vh] overflow-y-auto overflow-x-hidden p-8"
            onClick={(e) => e.stopPropagation()}
            dir="rtl"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={() => {
                  setShowNewList(false);
                  setListMembers([]);
                  setActiveFilters([]);
                }}
                className="text-gray-600 hover:text-gray-900 text-2xl"
              >
                ✕
              </button>
              <h2 className="text-2xl font-bold text-gray-900">רשימת תפוצה חדשה</h2>
            </div>

            {/* Top Fields */}
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm text-gray-700 mb-2 text-right">שם רשימת התפוצה</label>
                <input
                  type="text"
                  placeholder="הזן שם רשימה..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl text-right focus:outline-none focus:ring-2 focus:ring-[#1B3A6B]/50"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2 text-right">בחירת אגף</label>
                <div className="relative">
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-xl text-right focus:outline-none focus:ring-2 focus:ring-[#1B3A6B]/50 appearance-none bg-white">
                    <option>בחר אגף...</option>
                    <option>מחלקת משאבי אנוש</option>
                    <option>מחלקת כספים</option>
                    <option>מחלקת טכנולוגיה</option>
                    <option>מחלקת תפעול</option>
                    <option>מחלקת שיווק</option>
                    <option>מחלקת מכירות</option>
                  </select>
                  <ChevronDown className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Search Bar with Filter Dropdown */}
            <div className="mb-6">
              <div className="relative flex gap-2">
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="חיפוש..."
                    className="w-full pr-10 pl-4 py-2 border border-gray-300 rounded-xl text-right focus:outline-none focus:ring-2 focus:ring-[#1B3A6B]/50"
                  />
                  <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
                <div className="relative">
                  <button
                    onClick={() => setListFilterDropdown(!listFilterDropdown)}
                    className="p-2 hover:bg-gray-50 rounded-xl transition-colors"
                  >
                    <Filter className="w-5 h-5 text-gray-600" />
                  </button>
                  {listFilterDropdown && (
                    <div className="absolute left-0 top-full mt-1 bg-white rounded-xl shadow-2xl z-[99998] w-72 border border-gray-100" dir="rtl">
                      <button
                        onClick={() => {
                          if (!activeFilters.includes('ייבוא ממסמך קיים')) {
                            setActiveFilters([...activeFilters, 'ייבוא ממסמך קיים']);
                          }
                          setListFilterDropdown(false);
                        }}
                        className="w-full px-4 py-2 text-right hover:bg-gray-50 text-sm text-gray-700"
                      >
                        ייבוא ממסמך קיים
                      </button>
                      <button
                        onClick={() => {
                          if (!activeFilters.includes('הוספת קבוצות')) {
                            setActiveFilters([...activeFilters, 'הוספת קבוצות']);
                          }
                          setListFilterDropdown(false);
                        }}
                        className="w-full px-4 py-2 text-right hover:bg-gray-50 text-sm text-gray-700"
                      >
                        הוספת קבוצות
                      </button>
                      <button
                        onClick={() => {
                          if (!activeFilters.includes('הוספת קבוצות מיראז׳')) {
                            setActiveFilters([...activeFilters, 'הוספת קבוצות מיראז׳']);
                          }
                          setListFilterDropdown(false);
                        }}
                        className="w-full px-4 py-2 text-right hover:bg-gray-50 text-sm text-gray-700"
                      >
                        הוספת קבוצות מיראז׳
                      </button>
                      <button
                        onClick={() => {
                          if (!activeFilters.includes('הוספת רשימת תפוצה קיימת מהאזור האישי')) {
                            setActiveFilters([...activeFilters, 'הוספת רשימת תפוצה קיימת מהאזור האישי']);
                          }
                          setListFilterDropdown(false);
                        }}
                        className="w-full px-4 py-2 text-right hover:bg-gray-50 text-sm text-gray-700"
                      >
                        הוספת רשימת תפוצה קיימת מהאזור האישי
                      </button>
                      <div
                        className="relative"
                        onMouseEnter={() => setShowNetworkSubMenu(true)}
                        onMouseLeave={() => setShowNetworkSubMenu(false)}
                      >
                        <button
                          className="w-full px-4 py-2 text-right hover:bg-gray-50 text-sm text-gray-700 font-medium flex items-center justify-between"
                        >
                          {showNetworkSubMenu && (
                            <ChevronLeft className="w-4 h-4 text-gray-400" />
                          )}
                          <span>יבוא מרשתות אחרות</span>
                        </button>
                        {showNetworkSubMenu && (
                          <div
                            className="absolute right-full top-0 mr-1 bg-white rounded-xl shadow-2xl z-[99999] w-48 border border-gray-100"
                            dir="rtl"
                          >
                            <button
                              onClick={() => {
                                if (!activeFilters.includes('רשת א׳')) {
                                  setActiveFilters([...activeFilters, 'רשת א׳']);
                                }
                                setListFilterDropdown(false);
                                setShowNetworkSubMenu(false);
                              }}
                              className="w-full px-4 py-2 text-right hover:bg-gray-50 text-sm text-gray-700"
                            >
                              רשת א׳
                            </button>
                            <button
                              onClick={() => {
                                if (!activeFilters.includes('רשת ב׳')) {
                                  setActiveFilters([...activeFilters, 'רשת ב׳']);
                                }
                                setListFilterDropdown(false);
                                setShowNetworkSubMenu(false);
                              }}
                              className="w-full px-4 py-2 text-right hover:bg-gray-50 text-sm text-gray-700"
                            >
                              רשת ב׳
                            </button>
                            <button
                              onClick={() => {
                                if (!activeFilters.includes('רשת ג׳')) {
                                  setActiveFilters([...activeFilters, 'רשת ג׳']);
                                }
                                setListFilterDropdown(false);
                                setShowNetworkSubMenu(false);
                              }}
                              className="w-full px-4 py-2 text-right hover:bg-gray-50 text-sm text-gray-700"
                            >
                              רשת ג׳
                            </button>
                          </div>
                        )}
                        </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Active Filter Tags */}
              {activeFilters.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {activeFilters.map((filter) => (
                    <div
                      key={filter}
                      className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-lg text-sm text-gray-700"
                    >
                      <span>{filter}</span>
                      <button
                        onClick={() => setActiveFilters(activeFilters.filter(f => f !== filter))}
                        className="hover:bg-gray-200 rounded-full p-0.5"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Results Table */}
            <div className="border border-gray-200 rounded-xl overflow-hidden mb-6">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-right text-sm font-medium text-gray-700"></th>
                    <th className="px-4 py-3 text-right text-sm font-medium text-gray-700">תעודת זהות</th>
                    <th className="px-4 py-3 text-right text-sm font-medium text-gray-700">סביבה</th>
                    <th className="px-4 py-3 text-right text-sm font-medium text-gray-700">שם מלא</th>
                  </tr>
                </thead>
                <tbody>
                  {listMembers.map((member) => (
                    <tr key={member.id} className="border-t border-gray-200">
                      <td className="px-4 py-3">
                        <button
                          onClick={() => setListMembers(listMembers.filter(m => m.id !== member.id))}
                          className="p-1 hover:bg-gray-200 rounded transition-colors"
                        >
                          <Trash2 className="w-4 h-4 text-gray-400" />
                        </button>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700 text-right">{member.idNumber}</td>
                      <td className="px-4 py-3 text-sm text-gray-700 text-right">{member.environment}</td>
                      <td className="px-4 py-3 text-sm text-gray-700 text-right">{member.name}</td>
                    </tr>
                  ))}
                  {listMembers.length === 0 && (
                    <tr>
                      <td colSpan={4} className="px-4 py-12 text-center text-gray-500 text-sm">
                        אין פריטים ברשימה
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Save Button */}
            <div className="flex justify-end">
              <button
                onClick={() => {
                  // Save list
                  setShowNewList(false);
                  setListMembers([]);
                  setActiveFilters([]);
                }}
                className="px-8 py-3 bg-[#1B3A6B] text-white rounded-xl hover:bg-[#152e54] transition-colors font-medium"
              >
                צור רשימה
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Dialog */}
      {showDeleteConfirm && (
        <div
          className="fixed inset-0 flex items-center justify-center z-[9999]"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          onClick={() => setShowDeleteConfirm(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl p-6 w-80"
            onClick={(e) => e.stopPropagation()}
            dir="rtl"
          >
            <p className="text-center text-gray-900 mb-6">אתה בטוח שאתה רוצה למחוק?</p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={() => setShowDeleteConfirm(null)}
                className="px-6 py-2 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition-colors"
              >
                ביטול
              </button>
              <button
                onClick={() => {
                  // Handle delete action here
                  setShowDeleteConfirm(null);
                }}
                className="px-6 py-2 bg-[#1B3A6B] text-white rounded-xl hover:bg-[#152e54] transition-colors"
              >
                אישור
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Duplicate Panel */}
      {showDuplicatePanel && (
        <div
          className="fixed inset-0 flex items-center justify-center z-[9999]"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          onClick={() => setShowDuplicatePanel(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl p-8 w-[600px] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
            dir="rtl"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-right">
              שכפול {showDuplicatePanel.type === 'template' ? 'תבנית' : showDuplicatePanel.type === 'signature' ? 'חתימה' : 'רשימה'}
            </h3>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm text-gray-700 mb-2 text-right">שם</label>
                <input
                  type="text"
                  defaultValue={showDuplicatePanel.name}
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl text-right focus:outline-none focus:ring-2 focus:ring-[#1B3A6B]/50"
                />
              </div>

              {showDuplicatePanel.type === 'template' && (
                <>
                  <div>
                    <label className="block text-sm text-gray-700 mb-2 text-right">תיאור</label>
                    <textarea
                      className="w-full px-4 py-2 border border-gray-300 rounded-xl text-right focus:outline-none focus:ring-2 focus:ring-[#1B3A6B]/50 resize-none"
                      rows={3}
                      defaultValue="תבנית לשימוש כללי"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-2 text-right">תוכן</label>
                    <textarea
                      className="w-full px-4 py-2 border border-gray-300 rounded-xl text-right focus:outline-none focus:ring-2 focus:ring-[#1B3A6B]/50 resize-none"
                      rows={5}
                      defaultValue="תוכן התבנית..."
                    />
                  </div>
                </>
              )}

              {showDuplicatePanel.type === 'signature' && (
                <>
                  <div>
                    <label className="block text-sm text-gray-700 mb-2 text-right">שם מלא</label>
                    <input
                      type="text"
                      defaultValue="ישראל ישראלי"
                      className="w-full px-4 py-2 border border-gray-300 rounded-xl text-right focus:outline-none focus:ring-2 focus:ring-[#1B3A6B]/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-2 text-right">תפקיד</label>
                    <input
                      type="text"
                      defaultValue="מנהל מחלקה"
                      className="w-full px-4 py-2 border border-gray-300 rounded-xl text-right focus:outline-none focus:ring-2 focus:ring-[#1B3A6B]/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-2 text-right">טלפון</label>
                    <input
                      type="text"
                      defaultValue="050-1234567"
                      className="w-full px-4 py-2 border border-gray-300 rounded-xl text-right focus:outline-none focus:ring-2 focus:ring-[#1B3A6B]/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-2 text-right">דוא״ל</label>
                    <input
                      type="email"
                      defaultValue="israel@org.co.il"
                      className="w-full px-4 py-2 border border-gray-300 rounded-xl text-right focus:outline-none focus:ring-2 focus:ring-[#1B3A6B]/50"
                    />
                  </div>
                </>
              )}

              {showDuplicatePanel.type === 'list' && (
                <>
                  <div>
                    <label className="block text-sm text-gray-700 mb-2 text-right">תיאור</label>
                    <textarea
                      className="w-full px-4 py-2 border border-gray-300 rounded-xl text-right focus:outline-none focus:ring-2 focus:ring-[#1B3A6B]/50 resize-none"
                      rows={2}
                      defaultValue="רשימת תפוצה לצוות"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-2 text-right">חברים</label>
                    <textarea
                      className="w-full px-4 py-2 border border-gray-300 rounded-xl text-right focus:outline-none focus:ring-2 focus:ring-[#1B3A6B]/50 resize-none"
                      rows={4}
                      defaultValue="משתמש 1, משתמש 2, משתמש 3"
                    />
                  </div>
                </>
              )}
            </div>

            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setShowDuplicatePanel(null)}
                className="px-6 py-2 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition-colors"
              >
                ביטול
              </button>
              <button
                onClick={() => {
                  // Handle save action here
                  setShowDuplicatePanel(null);
                }}
                className="px-6 py-2 bg-[#1B3A6B] text-white rounded-xl hover:bg-[#152e54] transition-colors"
              >
                שמור וצור חדש
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}