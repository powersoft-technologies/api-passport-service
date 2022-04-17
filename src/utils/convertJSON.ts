const replacerFunc = () => {
    const visited = new WeakSet();
    return (key: any, value: any) => {
      if (typeof value === "object" && value !== null) {
        if (visited.has(value)) {
          return;
        }
        visited.add(value);
      }
      return value;
    };
  };
export const convertCircularToJSON = (data:any) => {
    let str = JSON.stringify(data, replacerFunc())
    return JSON.parse(str)
}