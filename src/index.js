const React = require("react");

/**
 * HOC transform props => className
 */
function applyPropFns(fns) {
  return Component => ({ className = "", ...props }) => {
    for (let fn of Object.values(fns)) {
      className = [className, fn(props)].join(" ");
    }

    return React.createElement(Component, { className, ...props });
  };
}

function compose(...funcs) {
  return funcs.reduce(
    (a, b) => (...args) => a(b(...args)),
    arg => arg
  );
}

function toClasses(tailwindKey, systemProp) {
  return props => {
    const prop = props[systemProp];

    if (prop) {
      if (Array.isArray(prop)) {
        const responsives = ["sm:", "md:", "lg:", "xl:"];

        return prop
          .map((value, i) => `${responsives[i]}${tailwindKey}-${value}`)
          .reduce((acc, value) => `${acc} ${value}`.trim());
      }
    }

    return `${tailwindKey}-${prop}`;
  };
}

const colorFns = {
  color: toClasses("text", "color"),
  bg: toClasses("bg", "bg")
};

const spaceFns = {
  m: toClasses("m", "m"),
  mt: toClasses("mt", "mt"),
  mr: toClasses("mr", "mr"),
  mb: toClasses("mb", "mb"),
  ml: toClasses("ml", "ml"),
  mx: toClasses("mx", "mx"),
  my: toClasses("my", "my"),

  p: toClasses("p", "p"),
  pt: toClasses("pt", "pt"),
  pr: toClasses("pr", "pr"),
  pb: toClasses("pb", "pb"),
  pl: toClasses("pl", "pl"),
  px: toClasses("px", "px"),
  py: toClasses("py", "py")
};

module.exports = {
  color: applyPropFns(colorFns),
  compose,
  space: applyPropFns(spaceFns),
  toClasses
};
