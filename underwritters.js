// advisorId = null || advisorId = req.user.userId
// default list + user created list
const data = [
    {
      companyId: "1",
      name: "Nimesh",
    },
    {
      companyId: "2",
      name: "pathum",
    },
    {
      companyId: "2",
      name: "Hemal",
    },
  ];
  
  const results = [];
  
  for (const iterator of data) {
    const idx = results.findIndex((r) => r.companyId === iterator.companyId);
    if (idx >= 0) {
        // db call
        results[idx].underwriters.push(iterator.name)
  
    } else {
        // db call
      results.push({
        companyId: iterator.companyId,
        underwriters: [iterator.name],
      });
    }
  }
  
  console.log("results",results)
  