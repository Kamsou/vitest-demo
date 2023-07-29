export function deepMerge(a, b) {
  if (Array.isArray(a) && Array.isArray(b)) {
    return a.concat(b);
  }

  if (Array.isArray(a) || Array.isArray(b) || typeof a !== typeof b) {
    throw new Error("Cannot merge two different types");
  }

  const merged = { ...a };
  for (const key in b) {
    if (merged[key] && typeof merged[key] === "object") {
      merged[key] = deepMerge(merged[key], b[key]);
    } else {
      merged[key] = b[key];
    }
  }

  return merged;
}

export function greeting(name) {
  console.log(`Hello ${name}`);
}

export async function getPostBody(id) {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts/1").then(
    (res) => res.json()
  );

  return data.body;
}
