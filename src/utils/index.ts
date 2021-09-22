export const throttle = (fxn: (...args: any[]) => void, timeout: number = 200) => {
  let wait = false;
  return (...args: any) => {
    if (!wait) {
      fxn(...args);
      wait = true;
      setTimeout(() => {
        wait = false;
      }, timeout);
    }
  };
};

export const openNewTab = (url: string): void => {
  const newTab = window.open(url, '_blank');
  if (newTab) {
    newTab.focus();
  }
};

// export const handleScreenResize = (fxn): void => {
// 	if (window.innerWidth < 960) {
// 		setRootFlexDirection(directions.COLUMN);
// 	} else {
// 		setRootFlexDirection(directions.ROW);
// 	}
// };
