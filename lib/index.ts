export interface Entry {
  // The actual name of the entry
  name: string;
  // Aliases, or commonly used nicknames
  aliases?: Array<string>;
  // Keywords for the entry, e.g. course, editor
  keywords?: Array<string>;
  // A description for it
  description: string;
}

const entries: Array<Entry> = [{ name: "Test", description: "None" }];

export const filterEntry = (search: string): Entry[] | undefined => {
  return entries
    .filter((entry) => {
      if (entry.name.toLowerCase().includes(search.toLowerCase())) return true;
      if (
        entry.aliases?.some((alias) =>
          alias.toLowerCase().includes(search.toLowerCase())
        )
      )
        return true;
      if (entry.keywords?.includes(search)) return true;

      return false;
    })
    .slice(0, 20);
};
