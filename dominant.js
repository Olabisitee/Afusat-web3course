function characterScript(code) {
  const scripts = [
    { name: "Latin", direction: "ltr", characters: /^[A-Za-z]+$/ },
    { name: "Arabic", direction: "rtl", characters: /^[\u0600-\u06FF]+$/ },
    { name: "Han", direction: "ttb", characters: /^[\u4e00-\u9fa5]+$/ },
  ];

  for (let script of scripts) {
    if (script.characters.test(code)) {
      return script;
    }
  }
  return null;
}

function countBy(array, groupName) {
  const counts = [];
  for (let element of array) {
    const group = groupName(element);
    let known = counts.find((c) => c.name === group);
    if (known) {
      known.count++;
    } else {
      counts.push({ name: group, count: 1 });
    }
  }
  return counts;
}

function dominantDirection(text) {
  const directions = countBy([...text], (character) => {
    const script = characterScript(character);
    return script ? script.direction : null;
  });

  const dominant = directions.reduce((max, dir) => {
    return dir.count > max.count ? dir : max;
  });

  return dominant ? dominant.name : "ltr";
}

console.log(dominantDirection("Hello!"));
console.log(dominantDirection("Hey, مساء الخير"));
