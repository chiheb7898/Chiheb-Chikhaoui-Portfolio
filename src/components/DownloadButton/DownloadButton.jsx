import React, { useState } from 'react';
import './DownloadButton.css'
import cv from '../../assets/documents/Chiheb_Chikhaoui_CV.pdf';

function DownloadButton() {


  return (
    <a style={{ textDecoration: 'none' }} download="" href={cv}>
    <button class="download-button">
      <span>Download My Resume</span>
    </button>
    </a>
  );
}

export default DownloadButton;
