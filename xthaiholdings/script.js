{\rtf1\ansi\ansicpg950\cocoartf2639
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // Add a simple alert when the "Get Started" or "Invest Now" buttons are clicked\
document.querySelectorAll('.get-started, .invest-now, .submit-btn').forEach(button => \{\
    button.addEventListener('click', function(event) \{\
        event.preventDefault(); // Prevent default link/form behavior\
        alert('Thank you for your interest! Please contact us at info@xthai.com for more details.');\
    \});\
\});}