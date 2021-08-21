const [checked, setChecked] = React.useState([]);

const handleChange = (e) => {
  const inTheState = [...checked]; // في البديه هتبقا فاضيه
  let justChecked = e.target.name; // checkbox الهتضغط عليها
  let foundInTheState = inTheState.indexOf(justChecked); // لو موجوده هتتطلع 0 و 1 لو لا هتبقا -1
  if (foundInTheState === -1) {
    // لو -1 هتضيف
    inTheState.push(justChecked);
  } else {
    inTheState.splice(foundInTheState, 1); // لو موجده هتمسحها
  }
  setChecked(inTheState); // هتعمل push في array check usestate

  const b = checked.map((c) => `brand=${c}`);
  router.push(
    {
      pathname: `/page/${pathname}`, // pathname page
      query: `${brand && `${b}`.replace(/\,/g, "&")}`,
    },
    undefined,

    { scroll: false }
  );
};
// products هتعمل فلتر لبراند الداتا الاصليه
{
  brand.map((item) => {
    return (
      <Fragment key={item}>
        <ListItem button className={classes.brand}>
          {/* <ListItemText primary={item} /> */}
          <FormControlLabel
            control={
              <Checkbox
                className={classes.brand}
                checked={checked.includes(item)} // هتبقا true checkbox هيتعلم بعلامه صح
                value={item}
                onChange={handleChange}
                name={item}
              />
            }
            label={item}
          />
        </ListItem>
      </Fragment>
    );
  });
}
