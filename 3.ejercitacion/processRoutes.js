export const addRelativeAndAbsolutePath = (baseRoutesParams) => {
  const customRoutes = baseRoutesParams.map((route) => {
    const [target, value] = Object.entries(route)[0];
    const { path, children } = value;

    const newRoute = { path };

    if (children) {
      children.forEach((element) => {
        const [childKey, childPath] = Object.entries(element)[0];
        newRoute[childKey] = {
          relative: childPath,
          absolute: path + childPath,
        };
      });
    }

    return [target, newRoute];
  });

  return Object.fromEntries(customRoutes);
};

// console.log(addRelativeAndAbsolutePath(baseRoutes));

// const PATHS = addRelativeAndAbsolutePath(baseRoutes);

// console.log(PATHS.Auth.Profile.absolute);
