import React from 'react';
import {SvgXml} from 'react-native-svg';

interface Props {
  size?: number;
  color?: string;
  styles?:object
}

const LeftArrow: React.FC<Props> = props => {
  const size = props.size ? props.size : 12;
  return (
    <SvgXml
      width={size}
      height={size}
      style={props.styles}
      xml={`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="11" height="19" viewBox="0 0 11 19">
  <image id="right-arrow_copy_2" data-name="right-arrow copy 2" width="11" height="19" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAATCAYAAABGKffQAAAA3ElEQVQokYXSwSpFURSH8R8ZmJi695aUAc9hekVeAGWINzGWO6TwAiJGMj4K5Sm8goG0at9aHWefs0a7vb79/Vt774WmaQzUBK/4XhwA1/CJLfz2wWF8wyqesF2D14txjHvsxGYXPErGZ+zPG204jB8FfMA0N5fSepyMj9hrR87NYXxPxt2uQQLeQFz2pAzzz5jhlzLUVx6mBp+X9SYOhuAZjrGMG5z0wVHXyXpZO5Dv+a4kVA+0HyUSDtOBsz446jYlXOSE2kfqTMjP3ZUQ/auSsDL0+SPhCD84/QMJ3SeiwtJqqQAAAABJRU5ErkJggg=="/>
</svg>`}
    />
  );
};
export default LeftArrow;