import { createElement } from "react";
import classnames from "classnames";
import domElements from "./utils/dom-elements";
import { buildClassName } from "./utils/class-name";

const classy = (tag, parentStrings, parentInterpolations) => (
  strings,
  ...interpolations
) => {

  // eslint-disable-next-line
  const ClassyComponent = props => {
    const interpolate = i => {
      return typeof i === "function" ? i(props) : i;
    };
    parentInterpolations =
      parentInterpolations && parentInterpolations.map(interpolate);
    interpolations = interpolations && interpolations.map(interpolate);

    const className = classnames(
      parentStrings && buildClassName(parentStrings, ...parentInterpolations),
      buildClassName(strings, ...interpolations)
    );

    return createElement(
      tag,
      { ...props, className: classnames(className.indexOf(props.className) === -1 ? props.className : undefined, className) },
      props.children
    );
  };

  ClassyComponent.classy = { tag, strings, interpolations };
  return ClassyComponent;
};

const classyComponent = ClassyComponent => (strings, ...interpolations) => {
  if (!ClassyComponent.classy) {
    throw new Error(
      "Only existing components that classes were added to via " +
        "classy-components can be extended this way."
    );
  }

  const {
    tag,
    strings: pStrings,
    interpolations: pInterpolations
  } = ClassyComponent.classy;
  return classy(tag, pStrings, pInterpolations)(strings, ...interpolations);
};

const classyElements = domElements.reduce(
  (obj, val) => Object.assign(obj, { [val]: classy(val) }),
  {}
);

export default Object.assign(classyComponent, classyElements);

// withClasses(Header)`bg-red`;
