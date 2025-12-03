import React from 'react';
import { 
  Bike, 
  Zap, 
  Gauge, 
  Activity, 
  MapPin, 
  ShieldCheck, 
  Scale, 
  Info, 
  Tag, 
  Globe 
} from 'lucide-react';

const EbikeInfographic = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans p-4 md:p-8 text-slate-800">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* HEADER SECTION */}
        <header className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"></div>
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="p-3 bg-slate-100 rounded-full">
              <Bike size={48} className="text-slate-700" />
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-2">
                Understanding the 3 Classes of E-Bikes
              </h1>
              <p className="text-lg md:text-xl text-slate-500 font-medium">
                A comprehensive guide for riders, parents, educators, and community leaders in the U.S.
              </p>
            </div>
          </div>
        </header>

        {/* MAIN COLUMNS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* COLUMN 1: CLASS 1 (BLUE) */}
          <div className="flex flex-col h-full bg-white rounded-3xl shadow-lg border-t-8 border-blue-500 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="bg-blue-50 p-6 flex flex-col items-center text-center border-b border-blue-100">
              <div className="bg-white p-3 rounded-full shadow-sm mb-3">
                <Activity size={32} className="text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-blue-900">Class 1</h2>
              <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold mt-2">
                Pedal-Assist Only
              </span>
            </div>
            
            <div className="p-6 space-y-6 flex-grow">
              <Section title="How it Works" color="blue">
                <ul className="space-y-2 text-sm text-slate-600">
                  <Bullet>Motor activates only when pedals are turning</Bullet>
                  <Bullet>No throttle included</Bullet>
                  <Bullet>Motor assistance stops at 20 mph</Bullet>
                  <Bullet>Rider can pedal faster using personal effort</Bullet>
                </ul>
              </Section>

              <Section title="Legal Status & Access" color="blue">
                <ul className="space-y-2 text-sm text-slate-600">
                  <Bullet>Treated like a traditional bicycle in most states</Bullet>
                  <Bullet>Allowed on bike paths, bike lanes, and many multi-use trails</Bullet>
                  <Bullet>Frequently permitted on mountain bike trails where throttles are banned</Bullet>
                  <Bullet>No license or registration typically required</Bullet>
                </ul>
              </Section>

              <Section title="Who It’s For" color="blue">
                <ul className="space-y-2 text-sm text-slate-600">
                  <Bullet>Fitness-focused riders</Bullet>
                  <Bullet>Recreational cyclists</Bullet>
                  <Bullet>Trail riders needing torque for hills</Bullet>
                  <Bullet>Riders wanting the most “natural” biking feel</Bullet>
                </ul>
              </Section>

              <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                <h3 className="font-bold text-blue-800 text-sm mb-2 flex items-center gap-2">
                  <Info size={16} /> Additional Notes
                </h3>
                <ul className="space-y-2 text-xs text-blue-900">
                  <Bullet color="bg-blue-400">Most widely accepted e-bike class nationwide</Bullet>
                  <Bullet color="bg-blue-400">Torque sensors create smooth, intuitive assistance</Bullet>
                  <Bullet color="bg-blue-400">Ideal for areas with strict “no motorized vehicles” rules</Bullet>
                </ul>
              </div>
            </div>
          </div>

          {/* COLUMN 2: CLASS 2 (PURPLE) */}
          <div className="flex flex-col h-full bg-white rounded-3xl shadow-lg border-t-8 border-purple-500 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="bg-purple-50 p-6 flex flex-col items-center text-center border-b border-purple-100">
              <div className="bg-white p-3 rounded-full shadow-sm mb-3">
                <Zap size={32} className="text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-purple-900">Class 2</h2>
              <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold mt-2">
                Throttle + Pedal
              </span>
            </div>

            <div className="p-6 space-y-6 flex-grow">
              <Section title="How it Works" color="purple">
                <ul className="space-y-2 text-sm text-slate-600">
                  <Bullet>Pedal-assist AND throttle operation</Bullet>
                  <Bullet>Throttle propels the bike without pedaling</Bullet>
                  <Bullet>Motor assistance stops at 20 mph</Bullet>
                  <Bullet>Offers quick acceleration from a full stop</Bullet>
                </ul>
              </Section>

              <Section title="Legal Status & Access" color="purple">
                <ul className="space-y-2 text-sm text-slate-600">
                  <Bullet>Allowed on roads, bike lanes, and many bike paths</Bullet>
                  <Bullet>May be restricted on non-motorized trails because of throttle</Bullet>
                  <Bullet>No license or registration required in most states</Bullet>
                </ul>
              </Section>

              <Section title="Who It’s For" color="purple">
                <ul className="space-y-2 text-sm text-slate-600">
                  <Bullet>Commuters wanting a sweat-free ride</Bullet>
                  <Bullet>Riders carrying groceries, cargo, or kids</Bullet>
                  <Bullet>People with knee pain or reduced mobility</Bullet>
                  <Bullet>City riders navigating stop-and-go traffic</Bullet>
                </ul>
              </Section>

              <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
                <h3 className="font-bold text-purple-800 text-sm mb-2 flex items-center gap-2">
                  <Info size={16} /> Additional Notes
                </h3>
                <ul className="space-y-2 text-xs text-purple-900">
                  <Bullet color="bg-purple-400">Most versatile class: exercise when you want, cruise when tired</Bullet>
                  <Bullet color="bg-purple-400">The throttle helps riders maintain stability in intersections</Bullet>
                  <Bullet color="bg-purple-400">Popular among delivery riders and urban commuters</Bullet>
                </ul>
              </div>
            </div>
          </div>

          {/* COLUMN 3: CLASS 3 (GREEN) */}
          <div className="flex flex-col h-full bg-white rounded-3xl shadow-lg border-t-8 border-emerald-500 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="bg-emerald-50 p-6 flex flex-col items-center text-center border-b border-emerald-100">
              <div className="bg-white p-3 rounded-full shadow-sm mb-3">
                <Gauge size={32} className="text-emerald-600" />
              </div>
              <h2 className="text-2xl font-bold text-emerald-900">Class 3</h2>
              <span className="bg-emerald-600 text-white px-4 py-1 rounded-full text-sm font-bold mt-2">
                Speed Assist
              </span>
            </div>

            <div className="p-6 space-y-6 flex-grow">
              <Section title="How it Works" color="emerald">
                <ul className="space-y-2 text-sm text-slate-600">
                  <Bullet>Pedal-assist up to 28 mph</Bullet>
                  <Bullet>Throttle (if present) capped at 20 mph</Bullet>
                  <Bullet>Typically includes a speedometer</Bullet>
                  <Bullet>Designed for efficient, high-speed road travel</Bullet>
                </ul>
              </Section>

              <Section title="Legal Status & Restrictions" color="emerald">
                <ul className="space-y-2 text-sm text-slate-600">
                  <Bullet>Allowed on roads and on-street bike lanes</Bullet>
                  <Bullet>Often prohibited on multi-use trails, bike paths, and natural-surface trails</Bullet>
                  <Bullet>Minimum rider age 16–17+ in many states</Bullet>
                  <Bullet>Helmets required for all riders in many jurisdictions</Bullet>
                  <Bullet>Higher speed = stricter enforcement in urban areas</Bullet>
                </ul>
              </Section>

              <Section title="Who It’s For" color="emerald">
                <ul className="space-y-2 text-sm text-slate-600">
                  <Bullet>Long-distance commuters</Bullet>
                  <Bullet>Riders replacing car trips</Bullet>
                  <Bullet>Those traveling on 35–45 mph roads</Bullet>
                  <Bullet>People wanting to “flow with traffic” more safely</Bullet>
                </ul>
              </Section>

              <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                <h3 className="font-bold text-emerald-800 text-sm mb-2 flex items-center gap-2">
                  <Info size={16} /> Additional Notes
                </h3>
                <ul className="space-y-2 text-xs text-emerald-900">
                  <Bullet color="bg-emerald-400">Fastest legal class of e-bike</Bullet>
                  <Bullet color="bg-emerald-400">Reduces commute time significantly</Bullet>
                  <Bullet color="bg-emerald-400">Best suited for confident road riders</Bullet>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM PANEL */}
        <div className="bg-slate-800 text-slate-100 rounded-3xl p-6 md:p-8 shadow-xl">
          <div className="flex items-center gap-3 mb-6 border-b border-slate-600 pb-4">
            <Scale className="text-yellow-400" size={32} />
            <h2 className="text-2xl font-bold">Laws, Safety, and Technical Standards</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Federal Standards */}
            <div className="space-y-3">
              <h3 className="flex items-center gap-2 font-bold text-yellow-400">
                <Scale size={18} /> Federal Standards
              </h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-yellow-400 rounded-full flex-shrink-0"></span>
                  <span>Maximum motor power in U.S.: 750W</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-yellow-400 rounded-full flex-shrink-0"></span>
                  <span>Maximum assisted speed: 28 mph</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-yellow-400 rounded-full flex-shrink-0"></span>
                  <span>E-bikes are federally classified as low-speed bicycles, not mopeds</span>
                </li>
              </ul>
            </div>

            {/* State & Local */}
            <div className="space-y-3">
              <h3 className="flex items-center gap-2 font-bold text-blue-400">
                <MapPin size={18} /> State & Local Variations
              </h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
                  <span>Cities and counties may create their own access rules</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
                  <span>Trail systems often restrict throttle use</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
                  <span>Some states allow all classes on same paths; others separate them</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
                  <span className="text-white font-medium">Always check local signage or land-management guidelines</span>
                </li>
              </ul>
            </div>

             {/* Labeling & Safety */}
             <div className="space-y-6">
               {/* Labeling */}
               <div className="space-y-3">
                <h3 className="flex items-center gap-2 font-bold text-pink-400">
                  <Tag size={18} /> Labeling Requirement
                </h3>
                <div className="text-sm text-slate-300 space-y-2">
                  <p>E-bikes must display:</p>
                  <ul className="pl-4 border-l-2 border-slate-600 space-y-1">
                    <li>Class number</li>
                    <li>Wattage</li>
                    <li>Top assisted speed</li>
                  </ul>
                  <div className="bg-slate-700 p-2 rounded text-xs font-mono text-center border border-slate-600 text-pink-200">
                    "Class 2 | 500W | 20 mph"
                    <br/><span className="text-[10px] text-slate-400">(Label placed on frame)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Riding Safety */}
            <div className="space-y-3">
              <h3 className="flex items-center gap-2 font-bold text-emerald-400">
                <ShieldCheck size={18} /> Riding Safety Essentials
              </h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-emerald-400 rounded-full flex-shrink-0"></span>
                  <span>Helmets always recommended; required for Class 3</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-emerald-400 rounded-full flex-shrink-0"></span>
                  <span>Obey posted speed limits on shared-use paths</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-emerald-400 rounded-full flex-shrink-0"></span>
                  <span>Slow down when passing pedestrians</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-emerald-400 rounded-full flex-shrink-0"></span>
                  <span>Understand throttle restrictions in non-motorized zones</span>
                </li>
              </ul>
              
              {/* International Sidebar */}
              <div className="mt-6 pt-6 border-t border-slate-700">
                 <h4 className="text-xs font-bold text-slate-400 flex items-center gap-2 mb-2">
                   <Globe size={12} /> INTERNATIONAL COMPARISON
                 </h4>
                 <div className="bg-slate-700/50 p-3 rounded-lg text-xs text-slate-400">
                   <span className="text-white font-bold">Canada:</span> 500W limit, 20 mph / 32 kph max assist.
                   <br/><span className="italic opacity-75">Shows why rules differ between U.S. and Canadian regions.</span>
                 </div>
              </div>
            </div>

          </div>
        </div>

        {/* FOOTER */}
        <div className="text-center text-slate-400 text-sm pb-4">
          Visual Guide for US E-Bike Classification
        </div>

      </div>
    </div>
  );
};

// Helper Components for clean JSX
const Section = ({ title, children, color }) => {
  const colorMap = {
    blue: "text-blue-600",
    purple: "text-purple-600",
    emerald: "text-emerald-600"
  };

  return (
    <div className="mb-4">
      <h3 className={`font-bold text-lg mb-3 ${colorMap[color]} uppercase tracking-wide text-xs`}>
        {title}
      </h3>
      {children}
    </div>
  );
};

const Bullet = ({ children, color = "bg-slate-300" }) => (
  <li className="flex items-start gap-3">
    <span className={`mt-1.5 w-2 h-2 ${color} rounded-full flex-shrink-0`}></span>
    <span className="leading-relaxed">{children}</span>
  </li>
);

export default EbikeInfographic;
