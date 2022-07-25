;<form id="beerEdit" onSubmit={handleSubmit}>
  <label htmlFor="name">Name</label>
  <input type="text" name="name" value={form.name} onChange={(e) => updateField('name', e.target.value)} />
  <label htmlFor="style">Style</label>
  <input type="text" name="style" value={form.style} onChange={(e) => updateField('style', e.target.value)} />
  <label htmlFor="abv">ABV</label>
  <input
    type="number"
    step=".1"
    min="0"
    id="abv"
    value={form.abv}
    onChange={(e) => updateField('abv', e.target.value)}
  />
  <label htmlFor="ibu">IBU</label>
  <input
    type="number"
    step=".1"
    min="0"
    id="ibu"
    value={form.ibu}
    onChange={(e) => updateField('ibu', e.target.value)}
  />
  <label htmlFor="color">Color</label>
  <input
    type="number"
    max="40"
    min="0"
    step=".1"
    id="color"
    value={form.color}
    onChange={(e) => updateField('color', e.target.value)}
  />
  <button type="submit">Submit</button>
</form>
