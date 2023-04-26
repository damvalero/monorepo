import { PropsTitle } from '../../types';
import './title.css'



const Title = ({ title }: PropsTitle) => {
  return <h1 className="title-site">{title}</h1>;
};

export default Title