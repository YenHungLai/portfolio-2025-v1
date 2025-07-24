import { useEffect, useState } from "react";

export enum DeviceType {
  MOBILE,
  TABLET,
  DESKTOP,
}

export function useDeviceType() {
  const [type, setType] = useState<DeviceType>(DeviceType.DESKTOP);

  const handleResize = () => {
    const deviceWidth = window.innerWidth;

    if (deviceWidth < 640) {
      setType(DeviceType.MOBILE);
    } else if (deviceWidth < 768) {
      setType(DeviceType.TABLET);
    } else {
      setType(DeviceType.DESKTOP);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return type;
}
