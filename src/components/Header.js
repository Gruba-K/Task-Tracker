import PropTypes from 'prop-types';
import Button  from './Button';

function Header({title,cleve,showTask}) {
  return (
    <header className="header">
    <h1>{ title}</h1>
    <Button color={showTask?'red':'green'} text={showTask?'Close':'Add +'} cleve={cleve} />
   

    </header>
  )
}

// Default prop
Header.defaultProps = {
    title:'Task Tracker'
}

// only string data types should be given to title
Header.propTypes={
    title:PropTypes.string.isRequired,
}
export default Header