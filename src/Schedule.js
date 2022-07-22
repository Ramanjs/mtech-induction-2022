import Table from './Table';
import Fade from 'react-reveal/Fade';

function Schedule() {

  //const resizeIframeToFitContent = (iframe) => {
    //console.log('resized')
    //console.log(iframe);
    //const sheet = document.getElementById('sheets-viewport');
    //sheet.width = iframe.contentWindow.document.body.scrollWidth;
  //};

  return (
    <div className="schedule" id="schedule-anchor">
      <Fade left>
        <h2 className="text-light schedule-heading">Schedule</h2>
      </Fade>
        {console.log('rendered')}
      <Table />
    </div>
  )
}

export default Schedule;
