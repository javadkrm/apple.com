import React from 'react';
import './Units.css';
import { Link } from 'react-router-dom';
import unitsDatas, { productTypes } from '../../Datas';

export default function Units() {

  return (
    <>

      {unitsDatas.map(unit => (
        <div className='unitsContainer mb-3' key={unit.id}>
          <div className='unit'>
            <h1 className='unit-title'>{unit.title}</h1>
            <h3 className='unit-desc'>{unit.desc}</h3>

            <div className='btnsWrraper d-flex align-items-center justify-content-center gap-3'>
              <button className='btn btn-primary rounded-pill'>
                {unit.firstBtnText}
              </button>

              <Link to={'/Store'}>
                <button className='btn btn-outline-primary rounded-pill'>
                  {unit.secondBtnText}
                </button>
              </Link>
            </div>

            <div className='imgWrapper'>
              <img src={unit.img} alt={unit.title}/>
            </div>
          </div>
        </div>
      ))}

      <div className='secondUnitsContainer row p-0 m-0 w-100 mt-3'>

        {productTypes.map(unit => (
          <div className='col-12 col-lg-6 mb-3' key={unit.id}>
            <div className={`unit smallUnit ${unit.classname}`}>

              <h1 className='unit-title pt-5 fs-1'>{unit.title}</h1>
              <h3 className='unit-desc fs-5 text-black'>{unit.desc}</h3>

              <div className='btnsWrraper d-flex align-items-center justify-content-center gap-3'>
                <button className='btn btn-primary rounded-pill'>
                  {unit.firstBtnText}
                </button>

                <Link to={'/Store'}>
                  <button className='btn btn-outline-primary rounded-pill'>
                    {unit.secondBtnText}
                  </button>
                </Link>
              </div>

              <div className='imgWrapper'>
                <img src={unit.img} alt={unit.title}/>
              </div>
            </div>
          </div>
        ))}

      </div>

    </>
  );
}
