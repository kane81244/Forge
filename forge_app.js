/* FORGE Fitness App — Application Logic */
/* Depends on: forge_data.js */

// IMAGES
// ════════════════════════════════════════════════════
const IMGS={

  // ── CHEST DAY ─────────────────────────────────────────
  'Barbell Bench Press': {
    gif:      'assets/Chest Day/Barbell Benxh press/Barbell Bench Press.gif',
    muscles:  [
      'assets/Chest Day/Barbell Benxh press/Muscles-worked-in-the-bench-press-exercise-2.jpeg',
      'assets/Chest Day/Barbell Benxh press/Max Out Your Push Day_ 5 Superior Chest, Shoulder, and Tricep Workouts for Optimal Muscle Gains.jpeg',
    ],
    machines: [
      'assets/Chest Day/Barbell Benxh press/ANYTHING SPORTS Compact Smith Machine with Adjustable_.jpeg',
      'assets/Chest Day/Barbell Benxh press/Bench Press Machine Multifunctional Chest Press Rack, Adjustable Height Chest Press Machine Space Saving Weight Bench For Chest And AB Workouts.jpeg',
      'assets/Chest Day/Barbell Benxh press/Dumbbells + Flat Bench.jpeg',
    ],
  },

  'Incline Dumbbell Press': {
    gif:      'assets/Chest Day/Incline Dumbbell Press/9 Best Dumbbell Push Exercises (with Pictures!) - Inspire US.gif',
    muscles:  [
      'assets/Chest Day/Incline Dumbbell Press/Upper-Chest-Exercises-1.jpeg',
      'assets/Chest Day/Incline Dumbbell Press/Umarul.jpeg',
    ],
    machines: [
      'assets/Chest Day/Incline Dumbbell Press/Nike Dumbbells & Dumbbell Sets.jpeg',
      'assets/Chest Day/Incline Dumbbell Press/STS Flat-to-Incline Bench, Black.jpeg',
    ],
  },

  'Cable Flyes': {
    gif:      'assets/Chest Day/Cable Flyes/_.gif',
    muscles:  [
      'assets/Chest Day/Cable Flyes/muscles-worked-in-standing-cable-flyes.jpeg',
    ],
    machines: [
      'assets/Chest Day/Cable Flyes/XMARK Functional Trainer Cable Machine, Commercial and Home Gym Functional Trainers.jpeg',
      'assets/Chest Day/Cable Flyes/Nike Dumbbells & Dumbbell Sets.jpeg',
    ],
  },

  'Push-Ups': {
    gif:      'assets/Chest Day/push ups/4 Best Alternatives to Push Ups (with Pictures!) - Inspire US.gif',
    muscles:  [
      'assets/Chest Day/push ups/Muscles-worked-in-push-ups.jpeg',
    ],
    machines: [
      'assets/Chest Day/push ups/Amazon Basics Yoga Mat, Non Slip, Extra Thick, for Pilates, Exercise, Black, 183 x 61 x 1 cm.jpeg',
    ],
  },

  'Dips (Chest)': {
    gif:      'assets/Chest Day/Dips (Chest)/Chest dip • uitvoering en uitleg • MensPower.gif',
    muscles:  [
      'assets/Chest Day/Dips (Chest)/brust-zielmuskeln-wasserzeichen.jpeg',
    ],
    machines: [
      'assets/Chest Day/Dips (Chest)/Soozier Heavy Duty Adjustable Dip Station Freestanding Commercial Parallel Dip Bar Home Gym Strength Trainer _ Aosom Canada.jpeg',
    ],
  },

  // ── BACK DAY ──────────────────────────────────────────
  'Deadlift': {
    gif:      'assets/Back Day/Deadlift/Dead lift.gif',
    muscles:  [
      'assets/Back Day/Deadlift/Deadlift-muscles-worked.jpeg',
    ],
    machines: [
      'assets/Back Day/Deadlift/barbell.jpeg',
      'assets/Back Day/Deadlift/bumper plates.jpeg',
    ],
  },

  'Pull-Ups': {
    gif:      'assets/Back Day/Pull ups/Klimmzüge_ Richtige Ausführung und Tipps.gif',
    muscles:  [
      'assets/Back Day/Pull ups/Muscles-worked-by-pull-ups.jpeg',
    ],
    machines: [
      'assets/Back Day/Pull ups/Pin Loaded Assisted Chin + Dip Station - Legacy Series.jpeg',
      'assets/Back Day/Pull ups/VINNYSEN Power Tower, Dip Station Pull Up Bar for Home.jpeg',
    ],
  },

  'Barbell Row': {
    gif:      'assets/Back Day/ Barbell Row/Rücken Übungen – die besten Trainingsübungen im Überblick.gif',
    muscles:  [
      'assets/Back Day/ Barbell Row/Barbell-row-muscles-worked.jpeg',
    ],
    machines: [
      'assets/Back Day/ Barbell Row/barbell.jpeg',
    ],
  },

  'Seated Cable Row': {
    gif:      'assets/Back Day/ Seated Cable Row/cable-underhand-row.gif',
    muscles:  [
      'assets/Back Day/ Seated Cable Row/Muscles-worked-by-seated-cable-row-with-wide-grip.jpeg',
    ],
    machines: [
      'assets/Back Day/ Seated Cable Row/MDF Excel Lat Pulldown_Low Row Combo - new.jpeg',
    ],
  },

  'Face Pulls': {
    gif:      'assets/Back Day/Face Pulls/1c57271f8e41797cbce08feb7fb0a1ab.gif',
    muscles:  [
      'assets/Back Day/Face Pulls/Muscles-worked-by-face-pull.jpeg',
    ],
    machines: [
      'assets/Back Day/Face Pulls/LFJ LAT Pull Down and Lift Weight Pulley System Cable Machine Pulley Attachment for Triceps Pull Down, Biceps Curl, Back, Forearm, Shoulder Home Gym Equipment.jpeg',
    ],
  },

  // ── LEG DAY ───────────────────────────────────────────
  'Barbell Squat': {
    gif:      'assets/Leg Day/Barbell Squat/Fitness schema voor beginners • Menspower_nl.gif',
    muscles:  [
      'assets/Leg Day/Barbell Squat/Squat-muscles-worked.jpeg',
    ],
    machines: [
      'assets/Leg Day/Barbell Squat/barbell.jpeg',
      'assets/Leg Day/Barbell Squat/6cb1f587086245e9e660cbec3a72d11d.jpg',
    ],
  },

  'Romanian Deadlift': {
    gif:      'assets/Leg Day/Romanian Deadlift/Romanian Deadlift.gif',
    muscles:  [
      'assets/Leg Day/Romanian Deadlift/unterer-ruecken-beine-hinten-zielmuskeln.jpeg',
    ],
    machines: [
      'assets/Leg Day/Romanian Deadlift/barbell.jpeg',
      'assets/Leg Day/Romanian Deadlift/Nike Dumbbells & Dumbbell Sets.jpeg',
    ],
  },

  'Leg Press': {
    gif:      'assets/Leg Day/Leg Press/Leg press • uitvoering en uitleg • MensPower.gif',
    muscles:  [
      'assets/Leg Day/Leg Press/Muscles-worked-by-leg-press.jpeg',
    ],
    machines: [
      'assets/Leg Day/Leg Press/Leg Press.jpeg',
    ],
  },

  'Leg Curls': {
    gif:      'assets/Leg Day/Leg Curls/Lying leg curl • uitvoering en uitleg • MensPower.gif',
    muscles:  [
      'assets/Leg Day/Leg Curls/muscles-worked-seated-leg-curl-2.jpeg',
    ],
    machines: [
      'assets/Leg Day/Leg Curls/Rapid Motion Commercial Leg Extension Leg Curl.jpeg',
    ],
  },

  'Standing Calf Raises': {
    gif:      'assets/Leg Day/Standing Calf Raises/Wadenheben stehend_ 11 Varianten mit oder ohne Gewicht _ modusX.gif',
    muscles:  [
      'assets/Leg Day/Standing Calf Raises/images.jpeg',
    ],
    machines: [
      'assets/Leg Day/Standing Calf Raises/Titanium Strength Elite Series Pin Loaded _ Standing Calf Raise.jpeg',
      'assets/Leg Day/Standing Calf Raises/barbell.jpeg',
    ],
  },

  // ── SHOULDERS DAY ────────────────────────────────────
  'Overhead Press': {
    gif:      'assets/Shoulders Day/Lateral Raises/https___www_docteur-fitness.com_wp-content_uploads_2000_08_developpe-militaire-exercice-musculation.gif',
    muscles:  [
      'assets/Shoulders Day/Overhead Press/Muscles-worked-in-overhead-press-exercise.jpeg',
    ],
    machines: [
      'assets/Shoulders Day/Overhead Press/barbell.jpeg',
      'assets/Shoulders Day/Overhead Press/6cb1f587086245e9e660cbec3a72d11d.jpg',
    ],
  },

  'Lateral Raises': {
    gif:      'assets/Shoulders Day/Lateral Raises/https___www_docteur-fitness.com_wp-content_uploads_2000_08_elevations-laterales-exercice-musculation.gif',
    muscles:  [
      'assets/Shoulders Day/Lateral Raises/Muscles-worked-by-dumbbell-lateral-raise.webp',
    ],
    machines: [
      'assets/Shoulders Day/Lateral Raises/barbell.jpeg',
    ],
  },

  'Arnold Press': {
    gif:      'assets/Shoulders Day/Arnold Press/Arnold Press.gif',
    muscles:  [
      'assets/Shoulders Day/Arnold Press/schultern-komplett-zielmuskeln.jpeg',
    ],
    machines: [
      'assets/Shoulders Day/Arnold Press/Nike Dumbbells & Dumbbell Sets.jpeg',
      'assets/Shoulders Day/Arnold Press/STS Flat-to-Incline Bench, Black.jpeg',
    ],
  },

  'Upright Rows': {
    gif:      'assets/Shoulders Day/Upright Rows/Dumbbell Upright Row_ How To Do and Muscles Worked.gif',
    muscles:  [
      'assets/Shoulders Day/Upright Rows/Muscles-worked-by-barbell-upright-row.jpeg',
    ],
    machines: [
      'assets/Shoulders Day/Upright Rows/Nike Dumbbells & Dumbbell Sets.jpeg',
    ],
  },

  'Rear Delt Flyes': {
    gif:      'assets/Shoulders Day/ Rear Delt Flyes/How To_ Bent Over Reverse Cable Fly - Benefits, Muscles Worked.gif',
    muscles:  [
      'assets/Shoulders Day/ Rear Delt Flyes/Muscles-worked-by-cable-rear-delt-row.jpeg',
    ],
    machines: [
      'assets/Shoulders Day/ Rear Delt Flyes/SFE - Selectorized PEC Fly_Rear Delt Machine, PEC Deck with_.jpeg',
      'assets/Shoulders Day/ Rear Delt Flyes/Nike Dumbbells & Dumbbell Sets.jpeg',
    ],
  },

  // ── ARMS DAY ──────────────────────────────────────────
  'Barbell Curl': {
    gif:      'assets/Arms Day/Barbell Curl/Barbell Curve.gif',
    muscles:  [
      'assets/Arms Day/Barbell Curl/Muscles-worked-in-the-barbell-curl-2.jpeg',
    ],
    machines: [
      'assets/Arms Day/Barbell Curl/barbell.jpeg',
    ],
  },

  'Skull Crushers': {
    gif:      'assets/Arms Day/Skull Crushers/EZ Bar Skull Crusher.gif',
    muscles:  [
      'assets/Arms Day/Skull Crushers/muscles-worked-barbell-lying-tricep-extension.webp',
    ],
    machines: [
      'assets/Arms Day/Skull Crushers/barbell.jpeg',
      'assets/Arms Day/Skull Crushers/STS Flat-to-Incline Bench, Black.jpeg',
    ],
  },

  'Hammer Curls': {
    gif:      'assets/Arms Day/Hammer Curls/Hammer Curls Kurzhantel_ Top 6 Übungen (inkl_ Bilder + Videos).gif',
    muscles:  [
      'assets/Arms Day/Hammer Curls/Muscles-worked-in-the-hammer-curl-2.jpeg',
    ],
    machines: [
      'assets/Arms Day/Hammer Curls/Nike Dumbbells & Dumbbell Sets.jpeg',
    ],
  },

  'Tricep Pushdown': {
    gif:      'assets/Arms Day/Tricep Pushdown/Tricep Pushdown.gif',
    muscles:  [
      'assets/Arms Day/Tricep Pushdown/muscles-worked-in-tricep-pushdown.jpeg',
    ],
    machines: [
      'assets/Arms Day/Tricep Pushdown/LFJ LAT Pull Down and Lift Weight Pulley System Cable Machine Pulley Attachment for Triceps Pull Down, Biceps Curl, Back, Forearm, Shoulder Home Gym Equipment.jpeg',
      'assets/Arms Day/Tricep Pushdown/Biceps.jpeg',
    ],
  },

  'Concentration Curls': {
    gif:      'assets/Arms Day/Concentration Curls/Curl de bíceps con una mancuerna.gif',
    muscles:  [
      'assets/Arms Day/Concentration Curls/Muscles-worked-by-Incline-Dumbbell-Curl.jpeg',
    ],
    machines: [
      'assets/Arms Day/Concentration Curls/Nike Dumbbells & Dumbbell Sets.jpeg',
      'assets/Arms Day/Concentration Curls/STS Flat-to-Incline Bench, Black.jpeg',
    ],
  },

  // ── CORE + CARDIO ─────────────────────────────────────
  'Plank': {
    gif:      null,
    muscles:  [
      'assets/Cardio+Core/ Plank/muscles-worked-plank-with-shoulder-taps.jpeg',
    ],
    machines: [
      'assets/Cardio+Core/ Plank/Amazon Basics Yoga Mat, Non Slip, Extra Thick, for Pilates, Exercise, Black, 183 x 61 x 1 cm.jpeg',
      'assets/Cardio+Core/ Plank/ Plank.jpeg',
    ],
  },

  'Hanging Leg Raises': {
    gif:      'assets/Cardio+Core/Hanging Leg Raises/Les 10 Meilleurs Exercices pour les Abdos - Boxlife.gif',
    muscles:  [
      'assets/Cardio+Core/Hanging Leg Raises/muscles-worked-hangning-knee-raises.jpeg',
    ],
    machines: [
      'assets/Cardio+Core/Hanging Leg Raises/VINNYSEN Power Tower, Dip Station Pull Up Bar for Home.jpeg',
    ],
  },

  'Cable Crunch': {
    gif:      'assets/Cardio+Core/Cable Crunch/Kneeling Cable Crunch.gif',
    muscles:  [
      'assets/Cardio+Core/Cable Crunch/muscles-worked-hangning-knee-raises.jpeg',
    ],
    machines: [
      'assets/Cardio+Core/Cable Crunch/LFJ LAT Pull Down and Lift Weight Pulley System Cable Machine Pulley Attachment for Triceps Pull Down, Biceps Curl, Back, Forearm, Shoulder Home Gym Equipment.jpeg',
    ],
  },

  'Russian Twists': {
    gif:      'assets/Cardio+Core/Russian Twists/Russian Twist.gif',
    muscles:  [
      'assets/Cardio+Core/Russian Twists/muscles-worked-hangning-knee-raises.jpeg',
    ],
    machines: [
      'assets/Cardio+Core/Russian Twists/Amazon Basics Yoga Mat, Non Slip, Extra Thick, for Pilates, Exercise, Black, 183 x 61 x 1 cm.jpeg',
    ],
  },

  'HIIT Sprint Intervals': {
    gif:      null,
    muscles:  [],
    machines: [
      'assets/Cardio+Core/HIIT Sprint Intervals/Trotadora Treadmill T500_.jpeg',
    ],
  },

};

// ════════════════════════════════════════════════════
// STATE
// ════════════════════════════════════════════════════
let S={
  weight:0,height:0,age:0,gender:'',bodytype:'',goal:'',level:'',gym:'',supplements:[],
  week:1,currentDay:0,
  completedDays:{},setsDone:{},skippedSets:{},
  deferredSets:[],
  streakDates:[],missedDates:[],
  waterToday:0,lastWaterDate:'',
  lastOpenDate:'',startDate:'',
  calMonth:new Date().getMonth(),calYear:new Date().getFullYear(),
};
const suppSel=new Set();

// ════════════════════════════════════════════════════
// PERSIST (localStorage)
// ════════════════════════════════════════════════════
const SAVE_KEY='forge_v4';
function saveState(){
  try{localStorage.setItem(SAVE_KEY,JSON.stringify(S));}catch(e){}
  flashSave();
}
function loadState(){
  try{
    const raw=localStorage.getItem(SAVE_KEY);
    if(raw){
      const loaded=JSON.parse(raw);
      Object.assign(S,loaded);
      return true;
    }
  }catch(e){}
  return false;
}
let saveFlashT;
function flashSave(){
  const d=document.getElementById('saveDot');
  if(!d) return;
  d.style.background='var(--accent)';
  clearTimeout(saveFlashT);
  saveFlashT=setTimeout(()=>{d.style.background='var(--green)';},600);
}

// ════════════════════════════════════════════════════
// EXERCISE DATA
// ════════════════════════════════════════════════════
const DAYS=[
  {name:'Chest',short:'CHEST',emoji:'🫀',exercises:[
    {name:'Barbell Bench Press',muscle:'Pecs (Primary)',diff:'hard',sets:3,reps:[8,10,10],rest:90},
    {name:'Incline Dumbbell Press',muscle:'Upper Chest',diff:'medium',sets:3,reps:[12,12,12],rest:75},
    {name:'Cable Flyes',muscle:'Chest Stretch',diff:'easy',sets:3,reps:[15,15,15],rest:60},
    {name:'Push-Ups',muscle:'Full Chest',diff:'easy',sets:3,reps:[15,15,15],rest:60},
    {name:'Dips (Chest)',muscle:'Lower Chest',diff:'medium',sets:3,reps:[10,10,12],rest:75},
  ]},
  {name:'Back',short:'BACK',emoji:'🔙',exercises:[
    {name:'Deadlift',muscle:'Full Back',diff:'hard',sets:3,reps:[5,5,5],rest:120},
    {name:'Pull-Ups',muscle:'Lats',diff:'hard',sets:3,reps:[8,8,10],rest:90},
    {name:'Barbell Row',muscle:'Mid Back',diff:'medium',sets:3,reps:[10,10,12],rest:75},
    {name:'Seated Cable Row',muscle:'Rhomboids',diff:'easy',sets:3,reps:[15,15,15],rest:60},
    {name:'Face Pulls',muscle:'Rear Delts',diff:'easy',sets:3,reps:[15,15,15],rest:60},
  ]},
  {name:'Legs',short:'LEGS',emoji:'🦵',exercises:[
    {name:'Barbell Squat',muscle:'Quads / Glutes',diff:'hard',sets:3,reps:[8,8,10],rest:120},
    {name:'Romanian Deadlift',muscle:'Hamstrings',diff:'medium',sets:3,reps:[10,10,12],rest:90},
    {name:'Leg Press',muscle:'Quads',diff:'medium',sets:3,reps:[12,12,15],rest:75},
    {name:'Leg Curls',muscle:'Hamstrings',diff:'easy',sets:3,reps:[15,15,15],rest:60},
    {name:'Standing Calf Raises',muscle:'Calves',diff:'easy',sets:3,reps:[15,15,15],rest:45},
  ]},
  {name:'Shoulders',short:'DELTS',emoji:'💪',exercises:[
    {name:'Overhead Press',muscle:'Front Delts',diff:'hard',sets:3,reps:[8,8,10],rest:90},
    {name:'Lateral Raises',muscle:'Side Delts',diff:'easy',sets:3,reps:[15,15,15],rest:60},
    {name:'Arnold Press',muscle:'Full Delt',diff:'medium',sets:3,reps:[10,10,12],rest:75},
    {name:'Upright Rows',muscle:'Traps / Delts',diff:'medium',sets:3,reps:[12,12,12],rest:60},
    {name:'Rear Delt Flyes',muscle:'Posterior Delt',diff:'easy',sets:3,reps:[15,15,15],rest:60},
  ]},
  {name:'Arms',short:'ARMS',emoji:'🦾',exercises:[
    {name:'Barbell Curl',muscle:'Biceps',diff:'medium',sets:3,reps:[12,12,12],rest:60},
    {name:'Skull Crushers',muscle:'Triceps',diff:'medium',sets:3,reps:[10,10,12],rest:75},
    {name:'Hammer Curls',muscle:'Brachialis',diff:'easy',sets:3,reps:[15,15,15],rest:45},
    {name:'Tricep Pushdown',muscle:'Triceps',diff:'easy',sets:3,reps:[15,15,15],rest:45},
    {name:'Concentration Curls',muscle:'Biceps Peak',diff:'easy',sets:3,reps:[15,15,15],rest:45},
  ]},
  {name:'Core + Cardio',short:'CORE',emoji:'🔥',exercises:[
    {name:'Plank',muscle:'Core Stability',diff:'medium',sets:3,reps:[45,45,60],rest:60},
    {name:'Hanging Leg Raises',muscle:'Lower Abs',diff:'hard',sets:3,reps:[10,10,12],rest:75},
    {name:'Cable Crunch',muscle:'Upper Abs',diff:'easy',sets:3,reps:[15,15,15],rest:60},
    {name:'Russian Twists',muscle:'Obliques',diff:'easy',sets:3,reps:[20,20,20],rest:45},
    {name:'HIIT Sprint Intervals',muscle:'Cardio',diff:'hard',sets:3,reps:[8,8,10],rest:90},
  ]},
];

const RELIEF={
  0:[
    {icon:'🤲',name:'Doorway Chest Stretch',dur:'30 sec × 3',desc:'Stand in doorway, arms 90°. Lean forward gently. Opens pec minor fully.'},
    {icon:'🙌',name:'Cross-Body Shoulder Stretch',dur:'20 sec / arm',desc:'Pull one arm across chest. Targets rear delt and pec. Breathe deeply.'},
    {icon:'🧘',name:"Child's Pose Arms Wide",dur:'60 sec',desc:'Arms wide on mat. Gravity opens chest and front delts passively.'},
    {icon:'🥎',name:'Foam Roll Thoracic Spine',dur:'90 sec',desc:'Roll mid-back slowly. Pause on tight spots. Counteracts press position.'},
    {icon:'❄️',name:'Ice / Heat Therapy',dur:'10 min',desc:'Ice within 1hr post-workout. Heat 24h later to increase blood flow.'},
  ],
  1:[
    {icon:'🐱',name:'Cat-Cow Stretch',dur:'10 reps slow',desc:'All fours, arch and round spine. Decompresses vertebrae after rows.'},
    {icon:'🦋',name:"Child's Pose",dur:'60 sec',desc:'Sit back on heels, arms forward. Lengthens lats and erectors.'},
    {icon:'🔄',name:'Lying Trunk Rotation',dur:'30 sec / side',desc:'Knees bent, drop to each side. Rotates and releases lower back.'},
    {icon:'🤸',name:'Passive Bar Hang',dur:'30 sec',desc:'Hang completely relaxed. Decompresses spine and lat insertions.'},
    {icon:'🥎',name:'Foam Roll Lats',dur:'60 sec / side',desc:'Side-lying, armpit to hip. Effective for post-pulldown soreness.'},
  ],
  2:[
    {icon:'🧘',name:'Standing Quad Stretch',dur:'30 sec / leg',desc:'Pull heel to glute. Prevents quad and hip flexor stiffening.'},
    {icon:'🦵',name:'Lying Hamstring Stretch',dur:'40 sec / leg',desc:'Pull leg toward chest with towel. Great for DOMS prevention.'},
    {icon:'🍑',name:'Pigeon Pose',dur:'60 sec / side',desc:'Opens hip rotators and glutes. Essential after heavy squats.'},
    {icon:'🥎',name:'Foam Roll Quads & IT Band',dur:'90 sec each',desc:'Slow on quads, pause tight spots. Then outer thigh for knee health.'},
    {icon:'🚶',name:'Light Walk 5–10 min',dur:'5–10 min',desc:"Low-impact flush of lactic acid. Don't sit still after leg day!"},
  ],
  3:[
    {icon:'🤲',name:'Cross-Body Shoulder Stretch',dur:'30 sec / arm',desc:'Essential after overhead pressing. Hits posterior capsule.'},
    {icon:'🙆',name:'Overhead Tricep Stretch',dur:'30 sec / arm',desc:'Arm overhead, bend elbow. Other hand pushes back. Releases delts.'},
    {icon:'🔄',name:'Neck Rolls',dur:'30 sec / dir',desc:'Slow deliberate circles. Releases trap and upper delt tension.'},
    {icon:'💆',name:'Upper Trap Stretch',dur:'30 sec / side',desc:'Tilt head to side, hold. Lengthens upper trap and neck.'},
    {icon:'🥶',name:'Contrast Shower Therapy',dur:'Hot 2min/Cold 30s × 3',desc:'Alternate hot and cold on shoulder area. Pumps blood in and out.'},
  ],
  4:[
    {icon:'🤲',name:'Wrist Flexor Stretch',dur:'30 sec / arm',desc:'Extend arm, pull fingers back. Reduces elbow tendon stress.'},
    {icon:'💪',name:'Bicep Wall Stretch',dur:'30 sec / arm',desc:'Palm flat on wall behind, turn away. Deep bicep stretch post-curls.'},
    {icon:'⬇️',name:'Tricep Overhead Stretch',dur:'30 sec / arm',desc:'Reach behind head, push elbow back. Lengthens tricep long head.'},
    {icon:'🧊',name:'Cold Pack on Elbows',dur:'10 min',desc:'Skull crushers stress elbows. Cold pack reduces joint inflammation.'},
    {icon:'🤸',name:'Active Wrist Circles',dur:'30 sec / dir',desc:'Slow controlled circles. Keeps forearm flexibility.'},
  ],
  5:[
    {icon:'🧘',name:'Cobra Pose',dur:'30 sec × 3',desc:'Push up from floor. Opens hip flexors, decompresses lumbar spine.'},
    {icon:'🔄',name:'Lying Trunk Rotation',dur:'30 sec / side',desc:'Releases obliques and QL after Russian twists and planks.'},
    {icon:'🤸',name:'Diaphragmatic Breathing',dur:'2 min',desc:'Breathe deep into belly. Resets core after HIIT intervals.'},
    {icon:'🦵',name:'Hip Flexor Lunge Stretch',dur:'40 sec / side',desc:'Low lunge, lean forward. Counters hip flexor tightening from raises.'},
    {icon:'💆',name:'Full Body Savasana',dur:'3–5 min',desc:'Lie completely still. Signals nervous system recovery.'},
  ],
};

const EX_DETAILS={
  'Barbell Bench Press':{
    howTo:[
      {t:'Set up',b:'Lie flat, eyes under bar. Feet firm on floor. Grip wider than shoulders.'},
      {t:'Unrack',b:'Big breath, brace core. Bar directly above chest, arms fully extended.'},
      {t:'Lower',b:'Controlled arc to <strong>lower chest / nipple line</strong>. Elbows ~75°.'},
      {t:'Press',b:'Drive bar back up explosively. Exhale. Feet into floor. Squeeze chest at top.'},
      {t:'Repeat',b:'Keep tension between reps. Re-rack only after completing all reps.'},
    ],
    muscles:{pri:['Pectoralis Major'],sec:['Anterior Deltoid','Triceps Brachii'],ter:['Serratus Anterior','Core Stabilisers']},
    tips:['Slight natural arch in lower back.','Keep wrists straight — not bent back.','2 sec down, explode up.'],
    rest:'90–120 sec between sets',
    imgGif:'Barbell Bench Press',imgMuscle:'Barbell Bench Press',
    equipment:[
      {name:'Olympic Flat Bench',desc:'Heavy-duty frame, Olympic barbell, safety hooks. The gold standard.',imgKey:'Barbell Bench Press'},
      {name:'Dumbbells + Flat Bench',desc:'Greater range of motion. Good for unilateral correction.',imgKey:null},
      {name:'Smith Machine',desc:'Fixed bar path. Good for learning form.',imgKey:null},
      {name:'Chest Press Machine',desc:'Fully guided. Best for finisher sets or rehab.',imgKey:null},
    ],
  },
};
function getExDet(name){
  if(EX_DETAILS[name]) return EX_DETAILS[name];
  return{
    howTo:[
      {t:'Setup',b:'Position yourself correctly. Ensure posture and alignment.'},
      {t:'Control',b:'Move through full range. Avoid momentum.'},
      {t:'Breathe',b:'Exhale on exertion, inhale on return.'},
      {t:'Tension',b:'Keep muscle under tension. Squeeze at peak contraction.'},
      {t:'Rest',b:'Allow full recovery between sets.'},
    ],
    muscles:{pri:['Primary Mover'],sec:['Synergists'],ter:['Stabilisers']},
    tips:['Mind-muscle connection.','Progressive overload weekly.'],
    rest:'60–90 sec',
    imgGif:null,imgMuscle:null,
    equipment:[
      {name:'Free Weights',desc:'Dumbbells/barbells for max range of motion.',imgKey:null},
      {name:'Cable Machine',desc:'Constant tension throughout range.',imgKey:null},
    ],
  };
}

const MOTIVATIONS=[
  'Your only competition is <strong>who you were yesterday</strong>.',
  "The iron doesn't care about your <strong>excuses</strong>.",
  "Champions aren't born — they're <strong>forged</strong>.",
  'Pain is temporary. <strong>Results are permanent.</strong>',
  'Every rep brings you <strong>closer to the vision</strong>.',
  'The body achieves what the <strong>mind believes</strong>.',
  "You don't get what you wish for. You get what you <strong>work for</strong>.",
  'Consistency beats intensity. <strong>Show up every day.</strong>',
  'The gym is the only place where <strong>pain equals progress</strong>.',
];

// ════════════════════════════════════════════════════
// ONBOARDING
// ════════════════════════════════════════════════════
function sel(el,k,v){
  el.closest('.cg').querySelectorAll('.cc').forEach(c=>c.classList.remove('sel'));
  el.classList.add('sel'); S[k]=v;
}
function tsupp(el,v){
  if(v==='none'){suppSel.clear();suppSel.add('none');el.closest('.cg').querySelectorAll('.cc').forEach(c=>c.classList.remove('sel'));el.classList.add('sel');return;}
  suppSel.delete('none');
  if(suppSel.has(v)){suppSel.delete(v);el.classList.remove('sel');}
  else{suppSel.add(v);el.classList.add('sel');}
  el.closest('.cg').querySelectorAll('[onclick*="none"]')[0]?.classList.remove('sel');
}
function goStep(cur){
  if(cur===0){
    S.weight=+document.getElementById('i-weight').value;
    S.height=+document.getElementById('i-height').value;
    S.age=+document.getElementById('i-age').value;
    S.gender=document.getElementById('i-gender').value;
    if(!S.weight||!S.height||!S.age){alert('Please fill in all fields.');return;}
  }
  if(cur===1&&!S.bodytype){alert('Please select body type.');return;}
  if(cur===2&&!S.goal){alert('Please select a goal.');return;}
  if(cur===3){S.gym=document.getElementById('i-gym').value||'starting';S.supplements=[...suppSel];}
  document.getElementById('step'+cur).classList.remove('active');
  document.getElementById('step'+(cur+1)).classList.add('active');
  document.getElementById('dot'+cur).classList.remove('active');
  document.getElementById('dot'+(cur+1)).classList.add('active');
}

// ════════════════════════════════════════════════════
// HELPERS
// ════════════════════════════════════════════════════
function todayISO(){return new Date().toISOString().split('T')[0];}

// How many program days have elapsed since the user's startDate (0-based).
// Day 0 = the day they joined (whatever weekday that was).
// Sundays are NOT skipped here — the 6-day split just means day index 0–5 are
// workout days and we cap at 5 (day 6 = rest).
function programDayOffset(){
  if(!S.startDate) return 0;
  const start=new Date(S.startDate);
  start.setHours(0,0,0,0);
  const now=new Date();
  now.setHours(0,0,0,0);
  const diffDays=Math.round((now-start)/(1000*60*60*24));
  // Each full 7-day block = 6 workout days + 1 rest day.
  // We map calendar days → program days by skipping every 7th day (rest).
  // Simple approach: weeks elapsed * 6 + remainder capped at 6.
  const weeksElapsed=Math.floor(diffDays/7);
  const remainder=diffDays%7; // 0–6; day 6 within a week = rest (index 6)
  const programDay=weeksElapsed*6+Math.min(remainder,5);
  // Which day within current week's 6-day cycle?
  const dayInCycle=programDay%6; // 0–5
  return dayInCycle;
}

// Returns today's program-day index (0–5), or -1 if it's a rest day.
function todayProgramDay(){
  if(!S.startDate) return 0;
  const start=new Date(S.startDate);
  start.setHours(0,0,0,0);
  const now=new Date();
  now.setHours(0,0,0,0);
  const diffDays=Math.round((now-start)/(1000*60*60*24));
  const remainder=diffDays%7;
  if(remainder===6) return -1; // rest day
  return remainder; // 0–5 maps directly to Day 1–6
}

function getProgMult(w){return Math.min(1+Math.floor((w-1)/2)*0.1,1.5);}
function adjReps(reps,w){const m=getProgMult(w);return reps.map(r=>Math.round(r*m));}
function calcStreak(){
  if(!S.streakDates.length) return 0;
  const sorted=[...new Set(S.streakDates)].sort().reverse();
  let streak=0,check=new Date();check.setHours(0,0,0,0);
  for(let d of sorted){
    const cd=new Date(d);
    if(cd.toDateString()===check.toDateString()){streak++;check.setDate(check.getDate()-1);}
    else if(cd<check) break;
  }
  return streak;
}

// ════════════════════════════════════════════════════
// LAUNCH
// ════════════════════════════════════════════════════
function launch(){
  if(!S.level){alert('Please select experience level.');return;}
  S.startDate=todayISO();S.lastOpenDate=todayISO();S.lastWaterDate=todayISO();
  document.getElementById('onboarding').style.display='none';
  document.getElementById('app').style.display='block';
  // Always start at Day 1 (index 0) regardless of what weekday it is.
  S.currentDay=0;
  checkMissed();buildAll();saveState();startWaterReminder();
}

// ════════════════════════════════════════════════════
// INIT ON LOAD
// ════════════════════════════════════════════════════
window.addEventListener('DOMContentLoaded',()=>{
  if(loadState()&&S.level){
    document.getElementById('onboarding').style.display='none';
    document.getElementById('app').style.display='block';
    checkWaterReset();checkMissed();
    // On returning, set currentDay to today's program day (or last unlocked day)
    const pd=todayProgramDay();
    if(pd>=0) S.currentDay=pd;
    // If today is rest day, show the last workout day
    else S.currentDay=5;
    buildAll();startWaterReminder();
    toast('👋 Welcome back!',`Week ${S.week} · ${calcStreak()} day streak 🔥`);
  }
});

function checkWaterReset(){
  const t=todayISO();
  if(S.lastWaterDate&&S.lastWaterDate!==t){S.waterToday=0;}
  S.lastWaterDate=t;
}
function checkMissed(){
  const today=todayISO();
  if(S.lastOpenDate&&S.lastOpenDate!==today){
    // Work out how many calendar days passed since last open
    const last=new Date(S.lastOpenDate);last.setHours(0,0,0,0);
    const now=new Date();now.setHours(0,0,0,0);
    const gapDays=Math.round((now-last)/(1000*60*60*24));
    // For each missed calendar day (excluding today), check if it was a workout day
    for(let g=1;g<gapDays;g++){
      const missed=new Date(last);missed.setDate(last.getDate()+g);
      const mISO=missed.toISOString().split('T')[0];
      // Compute which program day index that was
      const start=new Date(S.startDate);start.setHours(0,0,0,0);
      const diffFromStart=Math.round((missed-start)/(1000*60*60*24));
      const rem=diffFromStart%7; // 0–5 workout, 6 rest
      if(rem<6&&!S.completedDays[`${S.week}-${rem}`]&&!S.missedDates.includes(mISO)){
        S.missedDates.push(mISO);
      }
    }
  }
  S.lastOpenDate=today;
}

// ════════════════════════════════════════════════════
// BUILD ALL
// ════════════════════════════════════════════════════
function buildAll(){
  buildStats();buildMotiv();buildMissedBanner();buildSuppBanner();
  buildDaysGrid();buildPanel(S.currentDay);buildWeekBars();buildCal();
  document.getElementById('streakNum').textContent=calcStreak();
  document.getElementById('waterNum').textContent=S.waterToday;
}

function buildStats(){
  const bmi=(S.weight/((S.height/100)**2)).toFixed(1);
  const prog=getProgMult(S.week);
  const gmap={bulk:'Muscle',cut:'Fat Loss',strength:'Strength',endurance:'Endurance'};
  document.getElementById('userPill').innerHTML=`<span>${S.weight}kg</span> ${S.height}cm`;
  document.getElementById('wkBadge').textContent=`WEEK ${S.week}`;
  document.getElementById('statsBar').innerHTML=`
    <div class="sc"><div class="sc-lbl">Weight</div><div class="sc-val">${S.weight}<small>kg</small></div></div>
    <div class="sc"><div class="sc-lbl">BMI</div><div class="sc-val">${bmi}</div></div>
    <div class="sc"><div class="sc-lbl">Week</div><div class="sc-val">${S.week}<small>/12</small></div></div>
    <div class="sc"><div class="sc-lbl">Volume+</div><div class="sc-val">+${Math.round((prog-1)*100)}<small>%</small></div></div>
    <div class="sc"><div class="sc-lbl">🔥Streak</div><div class="sc-val">${calcStreak()}<small>d</small></div></div>
  `;
}
function buildMotiv(){document.getElementById('motivText').innerHTML=MOTIVATIONS[Math.floor(Math.random()*MOTIVATIONS.length)];}
function buildMissedBanner(){
  const el=document.getElementById('missedBanner');
  if(!S.missedDates.length){el.innerHTML='';return;}
  const lbl=S.missedDates.slice(-2).map(d=>new Date(d).toLocaleDateString('en',{weekday:'short',month:'short',day:'numeric'})).join(', ');
  el.innerHTML=`<div class="missed-banner" onclick="handleMissed()"><div style="font-size:1.3rem">⚠️</div><div><div style="font-weight:700;font-size:.85rem;color:var(--red)">Missed workout</div><div style="font-size:.75rem;color:var(--text2);margin-top:.1rem">${lbl} — <strong style="color:var(--accent)">Tap to reschedule</strong></div></div></div>`;
}
function buildSuppBanner(){
  if(!S.supplements.length||S.supplements.includes('none')){document.getElementById('suppBanner').innerHTML='';return;}
  const info={protein:'💊 Protein 30min post-workout',creatine:'⚗️ Creatine daily',preworkout:'⚡ Pre-workout 20min before'};
  const tags=S.supplements.filter(s=>info[s]).map(s=>`<span class="supp-tag">${info[s]}</span>`).join('');
  document.getElementById('suppBanner').innerHTML=`<div class="supp-banner"><span style="font-size:.68rem;color:var(--text3);text-transform:uppercase;letter-spacing:1px;">Today:</span>${tags}</div>`;
}

function buildDaysGrid(){
  // todayPD = today's program day index (0–5), or -1 on rest day
  const todayPD=todayProgramDay();
  // dayLabels show the actual calendar date each program day falls on
  const start=new Date(S.startDate||todayISO());
  start.setHours(0,0,0,0);
  const dayLabels=['DAY 1','DAY 2','DAY 3','DAY 4','DAY 5','DAY 6'];
  let h='';
  DAYS.forEach((d,i)=>{
    const done=S.completedDays[`${S.week}-${i}`];
    const active=i===S.currentDay;
    // Locked = this program day hasn't arrived yet (its index > todayPD) and not done
    const locked=todayPD!==-1 ? (i>todayPD&&!done) : (!done); // rest day: all locked except done
    const missed=!done&&(todayPD===-1?true:i<todayPD)&&S.missedDates.some(md=>{
      const mDate=new Date(md);mDate.setHours(0,0,0,0);
      const diff=Math.round((mDate-start)/(1000*60*60*24));
      return diff%7===i;
    });
    // Compute calendar date label for this program day
    const calDate=new Date(start);calDate.setDate(start.getDate()+i);
    const dateLbl=calDate.toLocaleDateString('en',{month:'short',day:'numeric'});
    let cls='day-btn';
    if(active)cls+=' active';
    if(done)cls+=' done2';
    else if(locked)cls+=' locked';
    else if(missed)cls+=' missed2';
    const oc=locked?'':`onclick="pickDay(${i})"`;
    h+=`<div class="${cls}" ${oc}>
      ${locked&&!active?'<span class="lock-ic">🔒</span>':''}
      <div class="day-name">${dateLbl}</div>
      <div class="day-num">${done?'✓':missed?'!':locked?'🔒':(i+1)}</div>
      <div class="day-tag">${done?d.short:missed?'MISS':locked?'LOCK':d.short}</div>
    </div>`;
  });
  // Rest day: 7th slot
  const restDate=new Date(start);restDate.setDate(start.getDate()+6);
  const restLbl=restDate.toLocaleDateString('en',{month:'short',day:'numeric'});
  h+=`<div class="day-btn rest"><div class="day-name">${restLbl}</div><div class="day-num">7</div><div class="day-tag">REST</div></div>`;
  document.getElementById('daysGrid').innerHTML=h;
}

function pickDay(i){
  const todayPD=todayProgramDay();
  // Allow clicking any day that has arrived (i <= todayPD) or is already done
  if(todayPD!==-1&&i>todayPD&&!S.completedDays[`${S.week}-${i}`]){
    toast('🔒 Not yet','This day unlocks once you reach it in the program.','red');return;
  }
  if(todayPD===-1&&!S.completedDays[`${S.week}-${i}`]){
    toast('😴 Rest Day','Today is your rest day. Enjoy the recovery!');return;
  }
  S.currentDay=i;buildDaysGrid();buildPanel(i);
}

function buildPanel(di){
  const panel=document.getElementById('workoutPanel');
  const day=DAYS[di];
  const todayPD=todayProgramDay();
  // Lock check: day hasn't arrived yet in the program
  const isLocked=(todayPD===-1||di>todayPD)&&!S.completedDays[`${S.week}-${di}`];
  if(isLocked){
    const start=new Date(S.startDate||todayISO());start.setHours(0,0,0,0);
    const unlockDate=new Date(start);unlockDate.setDate(start.getDate()+di);
    const unlockLbl=unlockDate.toLocaleDateString('en',{weekday:'long',month:'long',day:'numeric'});
    panel.innerHTML=`<div class="locked-panel"><div class="locked-icon">🔒</div><div class="locked-title">${day.name} Day — Locked</div><div class="locked-sub">Unlocks on <strong style="color:var(--accent)">${unlockLbl}</strong></div></div>`;
    return;
  }
  const totalSets=day.exercises.reduce((a,e)=>a+e.sets,0);
  let doneCount=0;
  day.exercises.forEach((ex,ei)=>{for(let s=0;s<ex.sets;s++)if(S.setsDone[`${S.week}-${di}-${ei}-${s}`])doneCount++;});
  const pct=totalSets>0?Math.round(doneCount/totalSets*100):0;
  const dayDone=S.completedDays[`${S.week}-${di}`];
  const half=Math.floor(totalSets*0.5)+1;
  const canTired=doneCount>=half;
  const prog=getProgMult(S.week);

  let exH='';
  // deferred sets for this day
  S.deferredSets.filter(d=>d.toDayIdx===di&&!d.done).forEach(def=>{
    exH+=`<div class="ex-row deferred">
      <div class="ex-num-box">📌</div>
      <div class="ex-main">
        <div class="ex-name" style="cursor:default;">${def.exName}</div>
        <div class="ex-defer-tag">📅 From Day ${def.srcDay+1} (${DAYS[def.srcDay].name})</div>
        <div class="ex-sets-wrap"><div class="set-row">
          <span class="set-label">SET 1</span>
          <div class="set-dot ${def.done?'done':''}" onclick="doneDeferred(${def.id})">${def.reps}</div>
          <span style="font-size:.68rem;color:var(--text3);">${def.reps} reps</span>
        </div></div>
      </div>
    </div>`;
  });

  day.exercises.forEach((ex,ei)=>{
    const reps=adjReps(ex.reps,S.week);
    const diffCls={easy:'diff-e',medium:'diff-m',hard:'diff-h'}[ex.diff];
    const allDone=Array.from({length:ex.sets},(_,s)=>S.setsDone[`${S.week}-${di}-${ei}-${s}`]||S.skippedSets[`${S.week}-${di}-${ei}-${s}`]).every(Boolean);

    let setsH='<div class="ex-sets-wrap">';
    for(let s=0;s<ex.sets;s++){
      const key=`${S.week}-${di}-${ei}-${s}`;
      const done=S.setsDone[key];
      const skipped=S.skippedSets[key];
      setsH+=`<div class="set-row">
        <span class="set-label">SET ${s+1}</span>
        <div class="set-dot ${done?'done':skipped?'skipped':''}" onclick="toggleSet(event,${di},${ei},${s})">${skipped?'→':reps[s]}</div>
        <span style="font-size:.68rem;color:var(--text3);">${reps[s]} reps</span>
        <button class="rest-timer-btn" id="rtb-${di}-${ei}-${s}" onclick="startRestTimer(${ex.rest},${di},${ei},${s},this)">⏱ ${ex.rest}s rest</button>
      </div>`;
    }
    setsH+='</div>';

    exH+=`<div class="ex-row ${allDone?'all-done':''}">
      <div class="ex-num-box">${allDone?'✓':(ei+1)}</div>
      <div class="ex-main">
        <div class="ex-name" onclick="openEx(${di},${ei})">
          ${ex.name}
          <span class="diff-badge ${diffCls}">${ex.diff}</span>
          <span class="ex-guide-hint">guide ›</span>
        </div>
        <div class="ex-detail">${ex.muscle}</div>
        ${setsH}
      </div>
    </div>`;
  });

  panel.innerHTML=`
    <div class="wp-hdr">
      <div>
        <div class="wp-daytag">DAY ${di+1}</div>
        <div class="wp-title">${day.emoji} ${day.name} Day</div>
        <div class="wp-sub">${day.exercises.length} exercises · Week ${S.week} · +${Math.round((prog-1)*100)}%</div>
      </div>
      <div>
        <div class="wp-meta-val">${doneCount}/${totalSets} sets</div>
        <div class="wp-meta-sub">${pct}% done</div>
      </div>
    </div>
    <div class="wp-actions">
      <button class="wpa relieve" onclick="openRelieve(${di})">💜 Muscle Relief</button>
      <button class="wpa tired" onclick="openTired(${di})" ${dayDone?'disabled':''} title="${canTired?'Defer remaining':'Need ≥ half sets first'}">
        ${canTired?'😮‍💨 Too Tired':'😮‍💨 Need ≥50% done'}
      </button>
    </div>
    <div class="ex-list">${exH}</div>
    <div class="prog-wrap">
      <div class="prog-top"><span>Progress</span><span>${pct}%</span></div>
      <div class="prog-bar"><div class="prog-fill" style="width:${pct}%"></div></div>
    </div>
    <button class="complete-btn" onclick="completeDay(${di})" ${dayDone?'disabled':''}>
      ${dayDone?'✓ WORKOUT COMPLETE':'MARK DAY COMPLETE'}
    </button>
  `;
}

function toggleSet(ev,di,ei,si){
  ev.stopPropagation();
  const key=`${S.week}-${di}-${ei}-${si}`;
  S.setsDone[key]=!S.setsDone[key];
  if(S.setsDone[key])delete S.skippedSets[key];
  buildPanel(di);saveState();
}
function doneDeferred(id){
  const def=S.deferredSets.find(d=>d.id===id);
  if(def){def.done=true;}
  buildPanel(S.currentDay);saveState();
}
function completeDay(di){
  S.completedDays[`${S.week}-${di}`]=true;
  const t=todayISO();
  if(!S.streakDates.includes(t))S.streakDates.push(t);
  buildDaysGrid();buildPanel(di);buildWeekBars();buildCal();buildStats();
  document.getElementById('streakNum').textContent=calcStreak();
  const allDone=DAYS.every((_,i)=>S.completedDays[`${S.week}-${i}`]);
  if(allDone){
    setTimeout(()=>{toast('🏆 WEEK COMPLETE!',`Week ${S.week+1} unlocked — +10% volume!`);S.week++;S.currentDay=0;buildAll();saveState();},600);
  }else{
    toast(`${DAYS[di].emoji} ${DAYS[di].name} Done!`,'Great work. Rest & recover 💪');
    for(let i=0;i<DAYS.length;i++){if(!S.completedDays[`${S.week}-${i}`]){setTimeout(()=>pickDay(i),800);break;}}
  }
  saveState();
}

// ════════════════════════════════════════════════════
// REST TIMER
// ════════════════════════════════════════════════════
let timerInt=null,timerLeft=0,timerTotal=0;
function startRestTimer(secs,di,ei,si,btn){
  clearInterval(timerInt);
  timerLeft=secs;timerTotal=secs;
  const ov=document.getElementById('timerOv');
  const disp=document.getElementById('timerDisplay');
  const ring=document.getElementById('timerRing');
  const lbl=document.getElementById('timerLabel');
  const circum=402;
  lbl.textContent=`Rest: ${DAYS[di].exercises[ei].name} Set ${si+2}`;
  function tick(){
    const m=Math.floor(timerLeft/60),s=timerLeft%60;
    disp.textContent=`${m}:${String(s).padStart(2,'0')}`;
    ring.style.strokeDashoffset=circum*(1-timerLeft/timerTotal);
    if(timerLeft<=0){
      clearInterval(timerInt);
      ov.classList.remove('open');
      toast('✅ Rest Done!',`Next set of ${DAYS[di].exercises[ei].name}`);
      return;
    }
    timerLeft--;
  }
  tick();
  timerInt=setInterval(tick,1000);
  ov.classList.add('open');
  if(btn){btn.classList.add('running');btn.textContent=`⏱ Running...`;}
}
function stopTimer(){
  clearInterval(timerInt);
  document.getElementById('timerOv').classList.remove('open');
}

// ════════════════════════════════════════════════════
// MISSED HANDLER
// ════════════════════════════════════════════════════
function handleMissed(){
  if(!S.missedDates.length)return;
  const md=S.missedDates[0];
  // Find the program day index for that missed date
  const start=new Date(S.startDate||todayISO());start.setHours(0,0,0,0);
  const mDate=new Date(md);mDate.setHours(0,0,0,0);
  const diffFromStart=Math.round((mDate-start)/(1000*60*60*24));
  const mDow=diffFromStart%7;
  if(mDow>=6)return; // was a rest day, nothing to defer
  const mDay=DAYS[mDow];
  const todayPD=todayProgramDay();
  const targetDay=todayPD>=0?todayPD:0;
  let count=0;
  mDay.exercises.forEach((ex,ei)=>{
    const reps2=adjReps(ex.reps,S.week);
    for(let s=0;s<ex.sets;s++){
      if(!S.setsDone[`${S.week}-${mDow}-${ei}-${s}`]){
        S.deferredSets.push({id:Date.now()+count,srcWeek:S.week,srcDay:mDow,srcEx:ei,srcSet:s,reps:reps2[s],exName:ex.name,toDayIdx:targetDay,done:false});
        count++;
      }
    }
  });
  S.missedDates.shift();
  buildMissedBanner();buildPanel(S.currentDay);saveState();
  toast('📅 Rescheduled',`${count} sets from ${mDay.name} Day moved to today.`,'blue');
}

// ════════════════════════════════════════════════════
// TIRED
// ════════════════════════════════════════════════════
function openTired(di){
  const day=DAYS[di];
  const totalSets=day.exercises.reduce((a,e)=>a+e.sets,0);
  let done=0;
  day.exercises.forEach((ex,ei)=>{for(let s=0;s<ex.sets;s++)if(S.setsDone[`${S.week}-${di}-${ei}-${s}`])done++;});
  const half=Math.floor(totalSets*0.5)+1;
  if(done<half){toast('⚠️ Too early',`Need ${half}/${totalSets} sets done first. (${done} done)`,'red');return;}
  let h=`<div class="tired-info">You've done <strong style="color:var(--accent)">${done}/${totalSets}</strong> sets. Remaining sets will be deferred and labelled <strong style="color:var(--accent2)">"From Day ${di+1} (${day.name})"</strong>.</div>`;
  h+=`<div class="defer-list">`;
  day.exercises.forEach((ex,ei)=>{
    const r=adjReps(ex.reps,S.week);
    for(let s=0;s<ex.sets;s++){
      const key=`${S.week}-${di}-${ei}-${s}`;
      if(!S.setsDone[key]&&!S.skippedSets[key]){
        h+=`<div class="defer-item will-def">
          <span>${ex.name} · Set ${s+1} (${r[s]} reps)</span>
          <select class="defer-sel" id="dsel-${di}-${ei}-${s}">
            ${DAYS.map((d,ddi)=>ddi!==di?`<option value="${ddi}" ${ddi===(di+1)%6?'selected':''}>${d.name}</option>`:'').join('')}
          </select>
        </div>`;
      }
    }
  });
  h+=`</div><button class="complete-btn" onclick="confirmTired(${di})" style="margin:0;width:100%;">CONFIRM — DEFER REST</button>`;
  document.getElementById('tiredBody').innerHTML=h;
  document.getElementById('tiredOv').classList.add('open');
  document.body.style.overflow='hidden';
}
function confirmTired(di){
  let count=0;
  DAYS[di].exercises.forEach((ex,ei)=>{
    const r=adjReps(ex.reps,S.week);
    for(let s=0;s<ex.sets;s++){
      const key=`${S.week}-${di}-${ei}-${s}`;
      if(!S.setsDone[key]&&!S.skippedSets[key]){
        S.skippedSets[key]=true;
        const sel=document.getElementById(`dsel-${di}-${ei}-${s}`);
        const tgt=sel?+sel.value:(di+1)%6;
        S.deferredSets.push({id:Date.now()+count,srcWeek:S.week,srcDay:di,srcEx:ei,srcSet:s,reps:r[s],exName:ex.name,toDayIdx:tgt,done:false});
        count++;
      }
    }
  });
  closeTired(null);buildPanel(di);saveState();
  toast('📅 Sets Deferred',`${count} sets moved to next day. Well done today!`);
}
function closeTired(ev){
  if(ev&&ev.target!==document.getElementById('tiredOv'))return;
  document.getElementById('tiredOv').classList.remove('open');
  document.body.style.overflow='';
}

// ════════════════════════════════════════════════════
// RELIEVE
// ════════════════════════════════════════════════════
function openRelieve(di){
  const stretches=RELIEF[di]||RELIEF[0];
  document.getElementById('relSub').textContent=`Recovery for ${DAYS[di].name} Day muscles`;
  document.getElementById('relBody').innerHTML='<div class="relieve-list">'+stretches.map(s=>`
    <div class="relieve-item">
      <div class="rel-hdr"><div class="rel-icon">${s.icon}</div><div class="rel-name">${s.name}</div><div class="rel-dur">${s.dur}</div></div>
      <div class="rel-desc">${s.desc}</div>
    </div>`).join('')+'</div>';
  document.getElementById('relOv').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeRel(ev){
  if(ev&&ev.target!==document.getElementById('relOv'))return;
  document.getElementById('relOv').classList.remove('open');
  document.body.style.overflow='';
}

// ════════════════════════════════════════════════════
// EX MODAL
// ════════════════════════════════════════════════════
function openEx(di,ei){
  const ex=DAYS[di].exercises[ei];
  const reps=adjReps(ex.reps,S.week);
  const det=getExDet(ex.name);
  const dc={easy:'diff-e',medium:'diff-m',hard:'diff-h'}[ex.diff];
  document.getElementById('emTitle').textContent=ex.name;
  document.getElementById('emSub').innerHTML=`<span class="diff-badge ${dc}">${ex.diff}</span>  ${ex.muscle}`;
  // sets tab
  let h=`<table class="sets-tbl"><thead><tr><th>Set</th><th>Reps</th><th>Done</th><th>Rest</th></tr></thead><tbody>`;
  for(let s=0;s<ex.sets;s++){
    const key=`${S.week}-${di}-${ei}-${s}`;
    const done=S.setsDone[key];
    h+=`<tr><td><div class="srow-num">${s+1}</div></td>
      <td><strong style="font-family:'Space Mono',monospace;">${reps[s]}</strong> reps</td>
      <td><div class="modal-set-dot ${done?'done':''}" onclick="mToggleSet(event,'${di}','${ei}','${s}')">${done?'✓':'○'}</div></td>
      <td><span class="rest-hint">${s<ex.sets-1?det.rest:'—'}</span></td></tr>`;
  }
  h+=`</tbody></table>`;
  if(det.tips?.length){
    h+=`<div style="background:var(--bg3);border:1px solid var(--border);border-radius:9px;padding:.8rem;">
      <div style="font-size:.65rem;color:var(--text3);text-transform:uppercase;letter-spacing:.8px;margin-bottom:.5rem;">Pro Tips</div>`;
    det.tips.forEach(t=>{h+=`<div style="font-size:.78rem;color:var(--text2);margin-bottom:.3rem;padding-left:.65rem;border-left:2px solid var(--accent);">${t}</div>`;});
    h+=`</div>`;
  }
  document.getElementById('ts').innerHTML=h;
  // ── HOW-TO TAB ─────────────────────────────────────────
  const exImgs = IMGS[ex.name] || {};
  const gifSrc = exImgs.gif || null;
  let hh=`<div class="how-grid">`;
  hh+=gifSrc
    ? `<div class="how-img"><img src="${gifSrc}" alt="animation" loading="lazy"></div>`
    : `<div class="how-img" style="flex-direction:column;gap:.5rem;"><span style="font-size:2.5rem;">🏋️</span><span style="font-size:.75rem;color:var(--text3);">No GIF yet</span></div>`;
  hh+=`<div class="how-steps">`+det.howTo.map((step,i)=>`<div class="how-step"><div class="how-snum">${i+1}</div><div class="how-stxt"><strong>${step.t}:</strong> ${step.b}</div></div>`).join('')+`</div></div>`;
  document.getElementById('th').innerHTML=hh;

  // ── MUSCLES TAB ────────────────────────────────────────
  const muscleImgs = exImgs.muscles || [];
  let mh=`<div class="muscle-section">`;
  if(muscleImgs.length){
    // Show all muscle diagrams in a scrollable row
    mh+=`<div style="display:flex;gap:.6rem;overflow-x:auto;padding-bottom:.4rem;">`;
    muscleImgs.forEach((src,i)=>{
      mh+=`<div class="muscle-img" style="min-width:140px;flex:1;"><img src="${src}" alt="Muscle diagram ${i+1}" style="max-height:160px;object-fit:contain;"></div>`;
    });
    mh+=`</div>`;
  }
  mh+=`<div><div style="font-size:.65rem;color:var(--text3);text-transform:uppercase;letter-spacing:.8px;margin-bottom:.45rem;">PRIMARY</div><div class="mtags">`+det.muscles.pri.map(m=>`<span class="mtag pri">🔴 ${m}</span>`).join('')+`</div></div>`;
  mh+=`<div style="margin-top:.65rem;"><div style="font-size:.65rem;color:var(--text3);text-transform:uppercase;letter-spacing:.8px;margin-bottom:.45rem;">SECONDARY</div><div class="mtags">`+det.muscles.sec.map(m=>`<span class="mtag sec">🟡 ${m}</span>`).join('')+`</div></div>`;
  mh+=`<div style="margin-top:.65rem;"><div style="font-size:.65rem;color:var(--text3);text-transform:uppercase;letter-spacing:.8px;margin-bottom:.45rem;">STABILISERS</div><div class="mtags">`+det.muscles.ter.map(m=>`<span class="mtag ter">${m}</span>`).join('')+`</div></div>`;
  mh+=`</div>`;
  document.getElementById('tm').innerHTML=mh;

  // ── EQUIPMENT TAB ──────────────────────────────────────
  const machineImgs = exImgs.machines || [];
  let eh=`<div class="equip-grid">`;
  // Use machine images array — pair each image with equipment label from EX_DETAILS if available
  const eqLabels = det.equipment || [];
  machineImgs.forEach((src,i)=>{
    const label = eqLabels[i] || {};
    const name  = label.name  || `Option ${i+1}`;
    const desc  = label.desc  || '';
    eh+=`<div class="eq-card">
      <div class="eq-img"><img src="${src}" alt="${name}" loading="lazy"></div>
      <div class="eq-info">
        <div class="eq-name">${name}</div>
        <div class="eq-desc">${desc}</div>
      </div>
    </div>`;
  });
  if(!machineImgs.length){
    eh+=`<div style="color:var(--text3);font-size:.82rem;padding:.5rem;">No equipment images yet.</div>`;
  }
  eh+=`</div>`;
  document.getElementById('te').innerHTML=eh;
  // reset tabs
  document.querySelectorAll('.ex-tab').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.ex-tc').forEach(t=>t.classList.remove('active'));
  document.querySelector('.ex-tab').classList.add('active');
  document.getElementById('ts').classList.add('active');
  document.getElementById('exOv').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeEx(ev){
  if(ev&&ev.target!==document.getElementById('exOv'))return;
  document.getElementById('exOv').classList.remove('open');
  document.body.style.overflow='';
}
function exTab(el,id){
  document.querySelectorAll('.ex-tab').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.ex-tc').forEach(t=>t.classList.remove('active'));
  el.classList.add('active');
  document.getElementById(id).classList.add('active');
}
function mToggleSet(ev,di,ei,si){
  ev.stopPropagation();
  const key=`${S.week}-${di}-${ei}-${si}`;
  S.setsDone[key]=!S.setsDone[key];
  ev.currentTarget.classList.toggle('done');
  ev.currentTarget.textContent=S.setsDone[key]?'✓':'○';
  buildPanel(S.currentDay);saveState();
}

// ════════════════════════════════════════════════════
// WATER
// ════════════════════════════════════════════════════
function openWater(){
  let h=`<p style="font-size:.82rem;color:var(--text2);margin-bottom:.8rem;line-height:1.5;">Tap a cup to log it. ${S.supplements.includes('creatine')?'<strong style="color:var(--accent3)">Creatine users should drink 3L+/day</strong>.':''}</p>`;
  h+=`<div class="water-cups">`;
  for(let i=0;i<8;i++)h+=`<div class="wcup ${i<S.waterToday?'filled':''}" onclick="logWater(${i})">💧</div>`;
  h+=`</div><div class="water-prog"><div class="water-prog-fill" style="width:${Math.round(S.waterToday/8*100)}%"></div></div>`;
  h+=`<p style="font-size:.75rem;color:var(--text2);margin-top:.5rem;">${S.waterToday}/8 glasses · ${S.waterToday*250}ml / 2000ml</p>`;
  document.getElementById('waterBody').innerHTML=h;
  document.getElementById('waterOv').classList.add('open');
  document.body.style.overflow='hidden';
}
function logWater(i){
  S.waterToday=i+1;
  document.getElementById('waterNum').textContent=S.waterToday;
  saveState();openWater();
  if(S.waterToday>=8)toast('💧 Hydrated!','Goal reached! 🏆');
}
function closeWater(ev){
  if(ev&&ev.target!==document.getElementById('waterOv'))return;
  document.getElementById('waterOv').classList.remove('open');
  document.body.style.overflow='';
}
function startWaterReminder(){
  setInterval(()=>{if(S.waterToday<8)toast('💧 Hydration','Drink water! '+S.waterToday+'/8 glasses','blue');},30*60*1000);
}

// ════════════════════════════════════════════════════
// STREAK
// ════════════════════════════════════════════════════
function openStreak(){
  const streak=calcStreak();
  document.getElementById('streakSub').textContent=`${streak} day streak!`;
  const recent=[...S.streakDates].sort().reverse().slice(0,10);
  let h=`<div class="streak-big"><div style="font-size:3rem;">🔥</div><div class="streak-num">${streak}</div><div style="font-size:.82rem;color:var(--text2);">consecutive workout days</div></div>`;
  h+=`<div style="font-size:.7rem;color:var(--text3);text-transform:uppercase;letter-spacing:1px;margin-bottom:.6rem;">Recent workouts</div>`;
  h+=`<div class="streak-dates-list">`;
  if(recent.length){
    recent.forEach(d=>{
      const lbl=new Date(d).toLocaleDateString('en',{weekday:'long',month:'short',day:'numeric'});
      h+=`<div class="streak-date-row"><span style="color:var(--green)">✓</span>${lbl}</div>`;
    });
  }else{
    h+=`<div style="color:var(--text3);font-size:.82rem;">Complete your first workout to start your streak!</div>`;
  }
  h+=`</div>`;
  document.getElementById('streakBody').innerHTML=h;
  document.getElementById('streakOv').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeStreak(ev){
  if(ev&&ev.target!==document.getElementById('streakOv'))return;
  document.getElementById('streakOv').classList.remove('open');
  document.body.style.overflow='';
}

// ════════════════════════════════════════════════════
// WEEK BARS + CALENDAR
// ════════════════════════════════════════════════════
function buildWeekBars(){
  const tdow=todayProgramDay();let h='';
  for(let i=0;i<7;i++){
    if(i<6){
      const done=S.completedDays[`${S.week}-${i}`];
      const active=i===S.currentDay;
      const missed=!done&&i<tdow;
      const ht=done?70:active?45:20;
      const fc=missed&&!done?'background:var(--red);':active&&!done?'background:var(--accent3);':'';
      h+=`<div class="wbar-wrap"><div class="wbar" style="height:70px;"><div class="wbar-fill" style="height:${ht}px;${fc}"></div></div><div class="wbar-lbl">${DAYS[i].short}</div></div>`;
    }else{
      h+=`<div class="wbar-wrap"><div class="wbar" style="height:70px;"><div class="wbar-fill" style="height:14px;background:var(--border);"></div></div><div class="wbar-lbl">REST</div></div>`;
    }
  }
  document.getElementById('weekBars').innerHTML=h;
}

let calM=new Date().getMonth(),calY=new Date().getFullYear();
function calPrev(){calM--;if(calM<0){calM=11;calY--;}buildCal();}
function calNext(){calM++;if(calM>11){calM=0;calY++;}buildCal();}
function buildCal(){
  const now=new Date();
  const first=new Date(calY,calM,1);
  const days=new Date(calY,calM+1,0).getDate();
  const startOff=first.getDay()===0?6:first.getDay()-1;
  const mName=first.toLocaleDateString('en',{month:'long',year:'numeric'});
  document.getElementById('calMonthLbl').textContent=mName;
  let h='';
  ['M','T','W','T','F','S','S'].forEach(d=>{h+=`<div class="cal-head">${d}</div>`;});
  for(let i=0;i<startOff;i++)h+=`<div class="cal-cell empty"></div>`;
  for(let d=1;d<=days;d++){
    const iso=`${calY}-${String(calM+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const isToday=iso===todayISO();
    const worked=S.streakDates.includes(iso);
    const missed=S.missedDates.includes(iso);
    const dow=new Date(calY,calM,d).getDay();
    let cls='cal-cell';
    if(isToday)cls+=' today';
    else if(worked)cls+=' worked';
    else if(missed)cls+=' missed';
    else if(dow===0)cls+=' rest-day';
    h+=`<div class="${cls}" title="${iso}">${d}</div>`;
  }
  document.getElementById('calGrid').innerHTML=h;
}



// ════════════════════════════════════════════════════
// TOAST
// ════════════════════════════════════════════════════
function toast(title,body,type){
  const t=document.createElement('div');
  t.className=`toast${type==='red'?' red':type==='blue'?' blue':''}`;
  t.innerHTML=`<div class="t-title">${title}</div><div class="t-body">${body||''}</div>`;
  document.body.appendChild(t);
  setTimeout(()=>t.remove(),5000);
}