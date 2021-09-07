import React from 'react';
import {SvgXml} from 'react-native-svg';

interface Props {
  size?: number;
  color?: string;
  styles?:object
}

const RightArrow: React.FC<Props> = props => {
  const size = props.size ? props.size : 12;
  return (
    <SvgXml
      width={size}
      height={size}
      style={props.styles}
      xml={`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="11" height="19" viewBox="0 0 11 19">
      <image id="right-arrow_copy_2" data-name="right-arrow copy 2" width="11" height="19" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAATCAYAAABGKffQAAAA2ElEQVQokYXRPUpDQRiF4cdga3QJoiLiQmwtjIiN2KmIu3ANIdqInUiSyj2I10JX4EoU5JMZGMOdyak+uO89P8xK13Uv2MMBvjQ0wA+28YmdZfAhpljDO7ZacOgYT9jARy1hUNynmGGYEjZbcGiE5yJhtwWHTjBPP/xL6INDRylhWCbU4JyQR3fxFi04j37DOl6XwVFnP923qw3wDI/pvsa4Bp/jId2XuFMZGI4ZDMc/MLToXDpe4L78WDqXjleLYAmHYx4THSd9QwK+qXXsg6Pbd3Ic10D4BUgmKAIpYpyFAAAAAElFTkSuQmCC"/>
    </svg>`}
    />
  );
};
export default RightArrow;