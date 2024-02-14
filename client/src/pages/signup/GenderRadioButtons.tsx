import React from 'react';
import { IGenderRadioButtonsProps } from '../../interfaces/gender.radio.buttons.interfces';

const GenderRadioButtons: React.FC<IGenderRadioButtonsProps> = ({ gender, setGender }) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text text-white opacity-70">Male</span>
          <input type="radio" name="gender" value="Male" checked={gender === 'Male'} onChange={e => setGender(e.target.value)} className="radio border-slate-900" />
        </label>
      </div>

      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text text-white opacity-70">Female</span>
          <input type="radio" name="gender" value="Female" checked={gender === 'Female'} onChange={e => setGender(e.target.value)} className="radio border-slate-900" />
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
