import DraftEditor from "components/DraftEditor";

export default function Upload() {
  return (
    <div className="u-container">
      <div className="u-wrapper">
        <div className="u-inner">

          <div className="u-title">
            Upload Video
            <div className="u-subtitle">
              This video will be published to username
            </div>
          </div>

          <div className="u-content">
            {/* <UploadPreview />
            <UploadProgress /> */}
            <UploadSelectFile />
            <UploadForm />
          </div>
        </div>

      </div>
    </div>
  );
}

function UploadPreview() {
  return "uploadpreview";
}

function UploadProgress() {
  return "uploadprogress";
}

function UploadSelectFile() {
  return (
    <div className="u-select-file-container">
      <div className="u-select-file-wrapper">
        <img src="/cloud-icon.svg" alt="Cloud icon" className="u-select-file-icon" />
        <div className="u-select-file-title">Select video to upload</div>
        <div className="u-select-file-subtitle">Or drap and drop a file</div>
        <br className="u-select-file-spacer" />
        <ul className="u-select-file-specs">
          <li className="u-select-file-type">MP4 or WebM</li>
          <li className="u-select-file-dimentions">720x1280 resolution or higher</li>
          <li>Up to 180 seconds</li>
        </ul>
      </div>
      <input type="file" id="file-input" accept="video/mp4, video/webm" className="u-select-file-input" />
    </div>
  );
}

function UploadForm() {
  return (
    <div className="u-form-container">
      <div className="u-form-wrapper">
        <div className="u-form-inner">

          <div className="u-form-header"><span
          className="u-form-title">Caption</span><span
          className="u-form-length-container"><span
          className="u-form-length">0 / 150</span></span></div>

          <div className="u-form-input">
            <DraftEditor></DraftEditor>
          </div>
        </div>

        <div className="u-form-action"><button
        className="u-form-discard">Discard</button><button
        className="u-form-submit">Post</button></div>
      </div>
    </div>
  );
}
