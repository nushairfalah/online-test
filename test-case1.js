function polycarp() {
  let da = 1666;
  let output = 1;

  for (let i = 1; i <= da; i++) {
    if (i % 3 != 0 && i % 10 != 3) {
      output = i;
      console.log(output);
    }
  }
}

polycarp();
