const FIRE_BASE = 'https://howeexpense-default-rtdb.firebaseio.com'

export async function addNewData(newData) {
	const response = await fetch(`${FIRE_BASE}/expense.json`, {
		method: 'POST',
		body: JSON.stringify(newData),
		headers: {
			'Content-Type': 'application/json',
		},
	})
	const data = await response.json()
	if (!response.ok) {
		throw new Error(data.message || 'Could not add NewData  ')
	}
	return data
}
export async function getAllData() {
	const response = await fetch(`${FIRE_BASE}/expense.json`)
	const data = await response.json()
	if (!response.ok) {
		throw new Error(data.message || 'Could not fetch quotes.')
	}
	const newData = []
	for (const key in data) {
		newData.push({
			id: key,
			date:new Date( data[key].date),
            title: data[key].title,
            amount: data[key].amount
		})
	}
	return newData
}
export async function getSingleQuote(quoteId) {
    const response = await fetch(`${FIRE_BASE}/expense/${quoteId}.json`);
    const data = await response.json();
  
    if (!response.ok) {
      throw new Error(data.message || 'Could not fetch quote.');
    }
  
    const loadedQuote = {
      id: quoteId,
      ...data,
    };
  
    return loadedQuote;
  }