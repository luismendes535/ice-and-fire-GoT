import moxios from "moxios";
import { testStore } from "../../utils/index";
import { fetchChars } from "../store/actions/index";


describe("fetchChars action", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test("Store is updated correctly", () => {
    // jest.setTimeout(10000);
    const expectedState = [
      {
        url: "https://www.anapioficeandfire.com/api/characters/1",
        name: "",
        gender: "Female",
        culture: "Braavosi",
        born: "",
        died: "",
        titles: [""],
        aliases: ["The Daughter of the Dusk"],
        father: "",
        mother: "",
        spouse: "",
        allegiances: [],
        books: ["https://www.anapioficeandfire.com/api/books/5"],
        povBooks: [],
        tvSeries: [""],
        playedBy: [""],
        fetchedBooks: [
          {
            name: "A Feast for Crows",
            released: "2005-11-08T00:00:00"
          }
        ]
      },
      {
        url: "https://www.anapioficeandfire.com/api/characters/1",
        name: "",
        gender: "Female",
        culture: "Braavosi",
        born: "",
        died: "",
        titles: [""],
        aliases: ["The Daughter of the Dusk"],
        father: "",
        mother: "",
        spouse: "",
        allegiances: [],
        books: ["https://www.anapioficeandfire.com/api/books/5"],
        povBooks: [],
        tvSeries: [""],
        playedBy: [""],
        fetchedBooks: [
          {
            name: "A Feast for Crows",
            released: "2005-11-08T00:00:00"
          }
        ]
      },
      {
        url: "https://www.anapioficeandfire.com/api/characters/1",
        name: "",
        gender: "Female",
        culture: "Braavosi",
        born: "",
        died: "",
        titles: [""],
        aliases: ["The Daughter of the Dusk"],
        father: "",
        mother: "",
        spouse: "",
        allegiances: [],
        books: ["https://www.anapioficeandfire.com/api/books/5"],
        povBooks: [],
        tvSeries: [""],
        playedBy: [""],
        fetchedBooks: [
          {
            name: "A Feast for Crows",
            released: "2005-11-08T00:00:00"
          }
        ]
      },
      {
        url: "https://www.anapioficeandfire.com/api/characters/1",
        name: "",
        gender: "Female",
        culture: "Braavosi",
        born: "",
        died: "",
        titles: [""],
        aliases: ["The Daughter of the Dusk"],
        father: "",
        mother: "",
        spouse: "",
        allegiances: [],
        books: ["https://www.anapioficeandfire.com/api/books/5"],
        povBooks: [],
        tvSeries: [""],
        playedBy: [""],
        fetchedBooks: [
          {
            name: "A Feast for Crows",
            released: "2005-11-08T00:00:00"
          }
        ]
      },
      {
        url: "https://www.anapioficeandfire.com/api/characters/1",
        name: "",
        gender: "Female",
        culture: "Braavosi",
        born: "",
        died: "",
        titles: [""],
        aliases: ["The Daughter of the Dusk"],
        father: "",
        mother: "",
        spouse: "",
        allegiances: [],
        books: ["https://www.anapioficeandfire.com/api/books/5"],
        povBooks: [],
        tvSeries: [""],
        playedBy: [""],
        fetchedBooks: [
          {
            name: "A Feast for Crows",
            released: "2005-11-08T00:00:00"
          }
        ]
      }
    ];
    const store = testStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status:200,
        data: expectedState[0]
      });
    });
    return store.dispatch(fetchChars())
    .then( async (response) => {
      const newState = await store.getState();
      expect(newState.chars.chars).toBe(expectedState);
    });
  });
});
