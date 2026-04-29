import { useState, useRef, useEffect } from 'react';
import { Download, ChevronLeft } from 'lucide-react';

interface ImportDropdownProps {
  onImportComplete?: () => void;
}

export function ImportDropdown({ onImportComplete }: ImportDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredSystem, setHoveredSystem] = useState<string | null>(null);
  const [systemMenuPosition, setSystemMenuPosition] = useState<{ top: number; right: number } | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const systemItemRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  useEffect(() => {
    if (hoveredSystem && systemItemRefs.current[hoveredSystem]) {
      const rect = systemItemRefs.current[hoveredSystem]!.getBoundingClientRect();
      setSystemMenuPosition({
        top: rect.top,
        right: window.innerWidth - rect.left
      });
    } else {
      setSystemMenuPosition(null);
    }
  }, [hoveredSystem]);

  const handleAction = (action: string) => {
    console.log('Selected action:', action);
    setIsOpen(false);
    setHoveredSystem(null);
    onImportComplete?.();
  };

  return (
    <div className="relative">
      {/* Import Icon Button */}
      <button
        ref={triggerRef}
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-gray-50 rounded-lg transition-colors"
        type="button"
      >
        <Download className="w-4 h-4 text-gray-600" />
      </button>

      {/* First Dropdown - System Selection */}
      {isOpen && (
        <div className="fixed inset-0 z-[99997]" onClick={() => { setIsOpen(false); setHoveredSystem(null); }}>
          <div
            className="absolute bg-white rounded-xl shadow-2xl w-48 border border-gray-100"
            style={{
              top: triggerRef.current ? triggerRef.current.getBoundingClientRect().bottom + 4 : 0,
              left: triggerRef.current ? triggerRef.current.getBoundingClientRect().left : 0,
              zIndex: 99998
            }}
            onClick={(e) => e.stopPropagation()}
            dir="rtl"
          >
            {/* UniTree */}
            <div
              onMouseEnter={() => setHoveredSystem('unitree')}
              onMouseLeave={() => setHoveredSystem(null)}
            >
              <button
                ref={(el) => systemItemRefs.current['unitree'] = el}
                className="w-full px-4 py-2 text-right hover:bg-gray-50 text-sm text-gray-700 flex items-center justify-between transition-colors"
                type="button"
              >
                <span>UniTree</span>
                {hoveredSystem === 'unitree' && (
                  <ChevronLeft className="w-4 h-4 text-gray-400" />
                )}
              </button>
            </div>

            {/* Ganttit */}
            <div
              onMouseEnter={() => setHoveredSystem('ganttit')}
              onMouseLeave={() => setHoveredSystem(null)}
            >
              <button
                ref={(el) => systemItemRefs.current['ganttit'] = el}
                className="w-full px-4 py-2 text-right hover:bg-gray-50 text-sm text-gray-700 flex items-center justify-between transition-colors"
                type="button"
              >
                <span>Ganttit</span>
                {hoveredSystem === 'ganttit' && (
                  <ChevronLeft className="w-4 h-4 text-gray-400" />
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Second Dropdown - Action Selection */}
      {hoveredSystem && systemMenuPosition && (
        <div
          className="fixed bg-white rounded-xl shadow-2xl w-56 border border-gray-100"
          style={{
            top: systemMenuPosition.top,
            right: systemMenuPosition.right + 8,
            zIndex: 99999
          }}
          dir="rtl"
          onMouseEnter={() => setHoveredSystem(hoveredSystem)}
          onMouseLeave={() => setHoveredSystem(null)}
        >
          <button
            onClick={() => handleAction(`${hoveredSystem}-action-1`)}
            className="w-full px-4 py-2 text-right hover:bg-gray-50 text-sm text-gray-700 transition-colors"
            type="button"
          >
            פעולה 1 - יצירת משימה
          </button>
          <button
            onClick={() => handleAction(`${hoveredSystem}-action-2`)}
            className="w-full px-4 py-2 text-right hover:bg-gray-50 text-sm text-gray-700 transition-colors"
            type="button"
          >
            פעולה 2 - עדכון סטטוס
          </button>
          <button
            onClick={() => handleAction(`${hoveredSystem}-action-3`)}
            className="w-full px-4 py-2 text-right hover:bg-gray-50 text-sm text-gray-700 transition-colors"
            type="button"
          >
            פעולה 3 - שליחת התראה
          </button>
        </div>
      )}
    </div>
  );
}
