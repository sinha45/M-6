const bottle = { color: 'yellow', price: 50, isCleaned: true, capacity: 1 };

for (const key in bottle) {
    console.log(key, bottle[key]);
}