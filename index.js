function superbowlWin(array) {
    let win = array.find((item) => item.result === "W")
    if (win) {
        return win.year
    }
  }
  
  superbowlWin(record)