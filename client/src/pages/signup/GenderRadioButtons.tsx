import React from 'react';
import { IGenderRadioButtonsProps } from '../../interfaces/gender/gender.radio.interfces';

const GenderRadioButtons: React.FC<IGenderRadioButtonsProps> = ({ gender, setGender }) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text text-white opacity-70">Male</span>
          <input type="radio" name="gender" value="male" checked={gender === 'male'} onChange={e => setGender(e.target.value)} className="radio border-slate-900" />
        </label>
      </div>

      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text text-white opacity-70">Female</span>
          <input type="radio" name="gender" value="female" checked={gender === 'female'} onChange={e => setGender(e.target.value)} className="radio border-slate-900" />
        </label>
      </div>

     
    </div>
  );
};

export default GenderRadioButtons;

// STARTER CODE FOR THIS FILE:
// const GenderCheckBox = () => {
//     return (
//       <div className="flex">
//         <div className="form-control">
//           <label className={`label gap-2 cursor-pointer`}>
//             <span className="label-text text-white opacity-70">Male</span>
//             <input type="checkbox" className="checkbox border-slate-900 " />
//           </label>
//         </div>

//         <div className="form-control">
//           <label className={`label gap-2 cursor-pointer`}>
//             <span className="label-text text-white opacity-70">Female</span>
//             <input type="checkbox" className="checkbox border-slate-900 " />
//           </label>
//         </div>
//       </div>
//     );
//   };

//   export default GenderCheckBox;
