function flatten(obj) {
  const result = {};
  const stack = [{ key: "", value: obj }];

  for (const item of stack) {
    const { key, value } = item;

    for (const k in value) {
      const newKey = key ? key + "." + k : k;

      if (value[k] && typeof value[k] === "object" && !Array.isArray(value[k])) {
        stack.push({ key: newKey, value: value[k] });
      } else {
        result[newKey] = value[k];
      }
    }
  }

  return result;
}

console.log(flatten({ a: { b: { c: 1 } }, d: 2 }));
