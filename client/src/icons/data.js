import React from 'react';

export const checkboxActive = (primary, secondary) => (
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <path d="M7,5 L25,5 C26.1045695,5 27,5.8954305 27,7 L27,25 C27,26.1045695 26.1045695,27 25,27 L7,27 C5.8954305,27 5,26.1045695 5,25 L5,7 C5,5.8954305 5.8954305,5 7,5 Z M13.0023872,19.5856176 L9.70719119,16.2896348 C9.31671352,15.8990639 8.68354854,15.8989883 8.29297763,16.289466 C7.90240673,16.6799436 7.90233114,17.3131086 8.29280881,17.7036795 L12.295196,21.7070224 C12.6857396,22.0976592 13.3190348,22.0976592 13.7095784,21.7070224 L23.7071912,11.7070224 C24.0976689,11.3164515 24.0975933,10.6832865 23.7070224,10.2928088 C23.3164515,9.90233114 22.6832865,9.90240673 22.2928088,10.2929776 L13.0023872,19.5856176 Z" id="Primary" fill={ primary }></path>
    </g>
);

export const checkboxIndeterminate = (primary, secondary) => (
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <path d="M7,5 L25,5 C26.1045695,5 27,5.8954305 27,7 L27,25 C27,26.1045695 26.1045695,27 25,27 L7,27 C5.8954305,27 5,26.1045695 5,25 L5,7 C5,5.8954305 5.8954305,5 7,5 Z M9,17 L23,17 C23.5522847,17 24,16.5522847 24,16 C24,15.4477153 23.5522847,15 23,15 L9,15 C8.44771525,15 8,15.4477153 8,16 C8,16.5522847 8.44771525,17 9,17 Z" id="Secondary" fill={ secondary }></path>
    </g>
);

export const checkboxStandby = (primary, secondary) => (
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <path d="M8,7 C7.44771525,7 7,7.44771525 7,8 L7,24 C7,24.5522847 7.44771525,25 8,25 L24,25 C24.5522847,25 25,24.5522847 25,24 L25,8 C25,7.44771525 24.5522847,7 24,7 L8,7 Z M8,5 L24,5 C25.6568542,5 27,6.34314575 27,8 L27,24 C27,25.6568542 25.6568542,27 24,27 L8,27 C6.34314575,27 5,25.6568542 5,24 L5,8 C5,6.34314575 6.34314575,5 8,5 Z" id="Secondary" fill={ secondary }fillRule="nonzero"></path>
    </g>
);

export const radioActive = (primary, secondary) => (
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <circle id="Secondary" fill={ secondary } cx="16" cy="16" r="8"></circle>
        <path d="M16,29 C8.82029825,29 3,23.1797017 3,16 C3,8.82029825 8.82029825,3 16,3 C23.1797017,3 29,8.82029825 29,16 C29,23.1797017 23.1797017,29 16,29 Z M16,27 C22.0751322,27 27,22.0751322 27,16 C27,9.92486775 22.0751322,5 16,5 C9.92486775,5 5,9.92486775 5,16 C5,22.0751322 9.92486775,27 16,27 Z" id="Primary" fill={ primary } fillRule="nonzero"></path>
    </g>
);

export const radioStandby = (primary, secondary) => (
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <path d="M16,27 C9.92486775,27 5,22.0751322 5,16 C5,9.92486775 9.92486775,5 16,5 C22.0751322,5 27,9.92486775 27,16 C27,22.0751322 22.0751322,27 16,27 Z M16,25 C20.9705627,25 25,20.9705627 25,16 C25,11.0294373 20.9705627,7 16,7 C11.0294373,7 7,11.0294373 7,16 C7,20.9705627 11.0294373,25 16,25 Z" id="Secondary" fill={ secondary } fillRule="nonzero"></path>
    </g>
)