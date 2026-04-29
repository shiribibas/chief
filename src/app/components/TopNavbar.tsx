import { Bell, MessageCircle, User, ChevronDown, BookOpen, Eye, Edit, X, HelpCircle, Play, ExternalLink, ArrowRight, Lock, MessageSquare, Phone, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface TopNavbarProps {
  showBackArrow?: boolean;
  isPersonalAreaActive?: boolean;
  navigate: (path: string) => void;
}

export function TopNavbar({ showBackArrow = false, isPersonalAreaActive = false, navigate }: TopNavbarProps) {
  const [realityMode, setRealityMode] = useState('מציאות');
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeIcon, setActiveIcon] = useState<string | null>(null);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showTraining, setShowTraining] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [showSupport, setShowSupport] = useState(false);
  const [showPermissionsModal, setShowPermissionsModal] = useState(false);

  const closeAllDropdowns = () => {
    setShowNotifications(false);
    setShowTraining(false);
    setShowFAQ(false);
    setShowSupport(false);
    setExpandedFAQ(null);
  };

  const handleIconClick = (iconName: string, setter: (value: boolean) => void, currentValue: boolean) => {
    if (activeIcon === iconName) {
      setActiveIcon(null);
      setter(false);
    } else {
      closeAllDropdowns();
      setActiveIcon(iconName);
      setter(true);
    }
  };

  return (
    <>
      <nav className="px-6 py-6 z-10 relative" dir="rtl">
        <div className="flex items-center justify-between">
          {/* Right side: Logo text and Reality dropdown */}
          <div className="flex items-center gap-4">
            <h2 className="text-[#1E3A8A]">Chief</h2>

            {/* Navigation arrows - only show on secondary screens */}
            {showBackArrow && (
              <div className="flex items-center gap-1">
                <button
                  onClick={() => navigate('/')}
                  className="p-1 rounded transition-colors hover:bg-gray-100 cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5 text-gray-700" />
                </button>
                <button
                  disabled
                  className="p-1 rounded cursor-default"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-300" />
                </button>
              </div>
            )}

            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center gap-1.5 bg-[#F2F2F4] px-4 py-1.5 rounded-full shadow-sm hover:shadow-md transition-all"
              >
                <span className="text-xs text-gray-700">{realityMode}</span>
                <ChevronDown className="w-3.5 h-3.5 text-gray-600" />
              </button>
              {showDropdown && (
                <div className="absolute top-full right-0 mt-2 bg-[#F2F2F4] rounded-3xl shadow-lg z-10 min-w-[100px] overflow-hidden">
                  <button
                    onClick={() => {
                      setRealityMode('אמת');
                      setShowDropdown(false);
                    }}
                    className="w-full text-right px-4 py-1.5 hover:bg-white/30 text-xs text-gray-700"
                  >
                    אמת
                  </button>
                  <button
                    onClick={() => {
                      setRealityMode('תרגיל');
                      setShowDropdown(false);
                    }}
                    className="w-full text-right px-4 py-1.5 hover:bg-white/30 text-xs text-gray-700"
                  >
                    תרגיל
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Left side: Grouped icons without dividers */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <button
                onClick={() => handleIconClick('bell', setShowNotifications, showNotifications)}
                className={`p-1.5 rounded-full transition-all relative ${
                  activeIcon === 'bell' ? 'bg-[#1B3A6B]' : ''
                }`}
              >
                <Bell className={`w-5 h-5 ${activeIcon === 'bell' ? 'text-white' : 'text-gray-400'}`} />
                {!showNotifications && activeIcon !== 'bell' && (
                  <span className="absolute top-1 right-1 w-2 h-2 bg-[#1B3A6B] rounded-full"></span>
                )}
              </button>

              {showNotifications && (
                <div className="absolute top-full left-0 mt-2 bg-white rounded-2xl shadow-lg z-20 w-80 overflow-hidden" dir="rtl">
                  <div className="p-4">
                    {/* Header with close button and mark all as read */}
                    <div className="flex items-center justify-between mb-4">
                      <button className="text-xs text-[#2D9B8A] hover:underline">
                        סמן הכל כנקרא
                      </button>
                      <button
                        onClick={() => {
                          setShowNotifications(false);
                          setActiveIcon(null);
                        }}
                        className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                      >
                        <X className="w-4 h-4 text-gray-500" />
                      </button>
                    </div>

                    {/* Notifications list - scrollable */}
                    <div className="max-h-64 overflow-y-auto space-y-0">
                      {/* Notification 1 */}
                      <div className="py-3">
                        <div className="flex items-start gap-3">
                          <Eye className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                          <div className="flex-1">
                            <p className="text-sm text-gray-700 text-right">ניתנה לך הרשאה לצפות במסמך "דוחות שנתיים"</p>
                            <span className="text-xs text-gray-400 text-right">לפני 5 דקות</span>
                          </div>
                        </div>
                      </div>
                      <div className="border-t border-gray-200"></div>

                      {/* Notification 2 */}
                      <div className="py-3">
                        <div className="flex items-start gap-3">
                          <Edit className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                          <div className="flex-1">
                            <p className="text-sm text-gray-700 text-right">קיבלת הרשאת עריכה במסמך "נהלי עבודה"</p>
                            <span className="text-xs text-gray-400 text-right">לפני 2 שעות</span>
                          </div>
                        </div>
                      </div>
                      <div className="border-t border-gray-200"></div>

                      {/* Notification 3 */}
                      <div className="py-3">
                        <div className="flex items-start gap-3">
                          <Eye className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                          <div className="flex-1">
                            <p className="text-sm text-gray-700 text-right">ניתנה לך הרשאה לצפות במסמך "מסמכי תקציב 2026"</p>
                            <span className="text-xs text-gray-400 text-right">לפני 3 ساعات</span>
                          </div>
                        </div>
                      </div>
                      <div className="border-t border-gray-200"></div>

                      {/* Notification 4 */}
                      <div className="py-3">
                        <div className="flex items-start gap-3">
                          <Edit className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                          <div className="flex-1">
                            <p className="text-sm text-gray-700 text-right">קיבלת הרשאת עריכה במסמך "הסכמים משפטיים"</p>
                            <span className="text-xs text-gray-400 text-right">אתמול</span>
                          </div>
                        </div>
                      </div>
                      <div className="border-t border-gray-200"></div>

                      {/* Notification 5 */}
                      <div className="py-3">
                        <div className="flex items-start gap-3">
                          <Eye className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                          <div className="flex-1">
                            <p className="text-sm text-gray-700 text-right">ניתנה לך הרשאה לצפות במסמך "תיעוד טכני"</p>
                            <span className="text-xs text-gray-400 text-right">לפני 2 ימים</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={() => handleIconClick('support', setShowSupport, showSupport)}
                className={`p-1.5 rounded-full transition-all ${
                  activeIcon === 'support' ? 'bg-[#1B3A6B]' : ''
                }`}
              >
                <MessageCircle className={`w-5 h-5 ${activeIcon === 'support' ? 'text-white' : 'text-gray-400'}`} />
              </button>

              {showSupport && (
                <div className="absolute top-full left-0 mt-2 bg-white rounded-2xl shadow-lg z-20 w-52 overflow-hidden" dir="rtl">
                  <div className="p-2">
                    <button
                      onClick={() => {
                        setShowPermissionsModal(true);
                        closeAllDropdowns();
                        setActiveIcon(null);
                      }}
                      className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-xl transition-colors text-right"
                    >
                      <Lock className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      <span className="text-sm text-gray-700">הרשאות</span>
                    </button>
                    <button
                      onClick={() => window.open('#', '_blank')}
                      className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-xl transition-colors text-right"
                    >
                      <MessageSquare className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      <span className="text-sm text-gray-700 flex-1">צ'אט תמיכה</span>
                      <ExternalLink className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={() => handleIconClick('book', setShowTraining, showTraining)}
                className={`p-1.5 rounded-full transition-all ${
                  activeIcon === 'book' ? 'bg-[#1B3A6B]' : ''
                }`}
              >
                <BookOpen className={`w-5 h-5 ${activeIcon === 'book' ? 'text-white' : 'text-gray-400'}`} />
              </button>

              {showTraining && !showFAQ && (
                <div className="absolute top-full left-0 mt-2 bg-white rounded-2xl shadow-lg z-20 w-52 overflow-hidden" dir="rtl">
                  <div className="p-2">
                    <button
                      onClick={() => setShowFAQ(true)}
                      className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-xl transition-colors text-right"
                    >
                      <HelpCircle className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      <span className="text-sm text-gray-700">הדרכה</span>
                    </button>
                    <button
                      onClick={() => window.open('#', '_blank')}
                      className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-xl transition-colors text-right"
                    >
                      <Play className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      <span className="text-sm text-gray-700 flex-1">לומדה</span>
                      <ExternalLink className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                    </button>
                  </div>
                </div>
              )}

              {showTraining && showFAQ && (
                <div className="absolute top-full left-0 mt-2 bg-white rounded-2xl shadow-lg z-20 w-80 overflow-hidden" dir="rtl">
                  <div className="p-4">
                    {/* Header with back button */}
                    <div className="flex items-center gap-3 mb-4">
                      <button
                        onClick={() => {
                          setShowFAQ(false);
                          setExpandedFAQ(null);
                        }}
                        className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                      >
                        <ArrowRight className="w-4 h-4 text-gray-500" />
                      </button>
                      <h3 className="text-sm font-medium text-gray-900">שאלות נפוצות</h3>
                    </div>

                    {/* FAQ Items */}
                    <div className="space-y-2">
                      {/* FAQ 1 */}
                      <div className="border border-gray-200 rounded-xl overflow-hidden">
                        <button
                          onClick={() => setExpandedFAQ(expandedFAQ === 1 ? null : 1)}
                          className="w-full flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors text-right"
                        >
                          <span className="text-sm text-gray-700">איך מחפשים מסמך?</span>
                          <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${expandedFAQ === 1 ? 'rotate-180' : ''}`} />
                        </button>
                        {expandedFAQ === 1 && (
                          <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
                            <p className="text-sm text-gray-600 text-right">
                              כדי לחפש מסמך, השתמש בשדה החיפוש בחלק העליון של המסך או עבור לתפריט "כל המסמכים" בסרגל הצד.
                            </p>
                          </div>
                        )}
                      </div>

                      {/* FAQ 2 */}
                      <div className="border border-gray-200 rounded-xl overflow-hidden">
                        <button
                          onClick={() => setExpandedFAQ(expandedFAQ === 2 ? null : 2)}
                          className="w-full flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors text-right"
                        >
                          <span className="text-sm text-gray-700">איך מבקשים הרשאה?</span>
                          <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${expandedFAQ === 2 ? 'rotate-180' : ''}`} />
                        </button>
                        {expandedFAQ === 2 && (
                          <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
                            <p className="text-sm text-gray-600 text-right">
                              לחץ על המסמך הרצוי, בחר "בקש הרשאה" מהתפריט, ובחר את סוג ההרשאה הנדרשת (צפייה או עריכה).
                            </p>
                          </div>
                        )}
                      </div>

                      {/* FAQ 3 */}
                      <div className="border border-gray-200 rounded-xl overflow-hidden">
                        <button
                          onClick={() => setExpandedFAQ(expandedFAQ === 3 ? null : 3)}
                          className="w-full flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors text-right"
                        >
                          <span className="text-sm text-gray-700">איך יוצרים תיקייה חדשה?</span>
                          <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${expandedFAQ === 3 ? 'rotate-180' : ''}`} />
                        </button>
                        {expandedFAQ === 3 && (
                          <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
                            <p className="text-sm text-gray-600 text-right">
                              לחץ על כפתור "+" בחלק העליון של רשימת המסמכים, בחר "תיקייה חדשה" והזן את שם התיקייה.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <button
              onClick={() => {
                navigate('/personal');
                setActiveIcon('user');
              }}
              className={`p-1.5 rounded-full transition-all ${
                isPersonalAreaActive || activeIcon === 'user' ? 'bg-[#1B3A6B]' : ''
              }`}
            >
              <User className={`w-5 h-5 ${isPersonalAreaActive || activeIcon === 'user' ? 'text-white' : 'text-gray-400'}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Permissions Modal */}
      {showPermissionsModal && (
        <div 
          className="fixed inset-0 flex items-center justify-center z-[9999]" 
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          onClick={() => setShowPermissionsModal(false)}
        >
          <div 
            className="bg-white rounded-3xl shadow-2xl w-[600px] max-w-[90vw] p-8" 
            onClick={(e) => e.stopPropagation()} 
            dir="rtl"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <h2 className="font-bold text-xl text-gray-900 mb-2">טיפול בהרשאות</h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  לצפייה במסמכים ופתיחת הרשאות למערכת יש לפנות אל הפיקוד הרלוונטי אליך
                </p>
              </div>
              <button
                onClick={() => setShowPermissionsModal(false)}
                className="p-1.5 hover:bg-gray-100 rounded-full transition-colors flex-shrink-0 mr-4"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Organizations list */}
            <div className="space-y-0 mt-6">
              {/* Organization 1 */}
              <div className="py-4 flex items-center justify-between">
                <span className="text-gray-800">ארגון א'</span>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">050-1234567</span>
                </div>
                <button className="p-2 hover:bg-[#2D9B8A]/10 rounded-full transition-colors">
                  <MessageSquare className="w-5 h-5 text-[#2D9B8A]" />
                </button>
              </div>
              <div className="border-t border-gray-200"></div>

              {/* Organization 2 */}
              <div className="py-4 flex items-center justify-between">
                <span className="text-gray-800">ארגון ב'</span>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">050-1234567</span>
                </div>
                <button className="p-2 hover:bg-[#2D9B8A]/10 rounded-full transition-colors">
                  <MessageSquare className="w-5 h-5 text-[#2D9B8A]" />
                </button>
              </div>
              <div className="border-t border-gray-200"></div>

              {/* Organization 3 */}
              <div className="py-4 flex items-center justify-between">
                <span className="text-gray-800">ארגון ג'</span>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">050-1234567</span>
                </div>
                <button className="p-2 hover:bg-[#2D9B8A]/10 rounded-full transition-colors">
                  <MessageSquare className="w-5 h-5 text-[#2D9B8A]" />
                </button>
              </div>
              <div className="border-t border-gray-200"></div>

              {/* Organization 4 */}
              <div className="py-4 flex items-center justify-between">
                <span className="text-gray-800">ארגון ד'</span>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">050-1234567</span>
                </div>
                <button className="p-2 hover:bg-[#2D9B8A]/10 rounded-full transition-colors">
                  <MessageSquare className="w-5 h-5 text-[#2D9B8A]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}