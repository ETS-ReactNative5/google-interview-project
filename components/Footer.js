import React from 'react'

function Footer() {
  return (
    <div className='grid grid-cols-3 bg-zinc-900 text-white h-14 justify-between'>
            <div className='flex px-10 py-3 space-x-4'>
                <h1 className='cursor-pointer hover:underline'>Advertising</h1>
                <h1 className='cursor-pointer hover:underline'>Business</h1>
                <h1 className='cursor-pointer hover:underline'>How Search works</h1>
            </div>

            <div className='flex py-3 justify-center cursor-pointer hover:underline text-xl'>
                <img className='pr-2' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAMAAAAiV0Z6AAAAPFBMVEVLoEN0wU6CzFKCzFKCzFKCzFKCzFJSo0MSczNDmkCCzFJPoUMTczNdr0gmgziCzFITczMTczMTczMTczPh00jOAAAAFHRSTlPF/+bIsms8Ad///hX+//5/tXw7aMEAx10AAACaSURBVHgBbc4HDoRQCATQ33tbvf9dF9QxaCT9UQaltLHOh/golXKhMs5Xqa0xU1lyoa2fXFyQOsDG38qsLy4TaV+sFislovyhPzLJJrBu6eQOtpW0LjbJkzTuTDLRVNKa3uxJI+VdiRqXSeu6GW+Qxi29eLIi8H7EsYrT42BD+mQtNO5JMjRuC4lSY8V4hsLX0egGijvUSEP9AbylEsOkeCgWAAAAAElFTkSuQmCC" alt="leaf" />
                <h1>Carbon Neutral Since 2007</h1>
            </div>

            <div className='flex px-10 py-3 space-x-4 justify-end'>
                <h1 className='cursor-pointer hover:underline'>Privacy</h1>
                <h1 className='cursor-pointer hover:underline'>Terms</h1>
                <h1 className='cursor-pointer hover:underline'>Settings</h1>
            </div>
            
    </div>
  )
}

export default Footer