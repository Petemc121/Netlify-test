import React, { useState, useEffect, useRef } from "react";
import Techniques from "./Techniques";
import Categories from "./Categories";
import CategoryKeys from "./CategoryKeys";

const LOCAL_STORAGE_KEY_1 = "BJJNotesApp.techniques";
const LOCAL_STORAGE_KEY_2 = "BJJNotesApp.categories";
const LOCAL_STORAGE_KEY_3 = "BJJNotesApp.categoryKeys";

export default function App() {
  const [techniques, setTechniques] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoryKeys, setCategoryKeys] = useState([]);
  const categoryRef = useRef();
  const techniqueRef = useRef();
  let techniqueNo = Math.floor(Math.random() * 100000);
  let catNo = Math.floor(Math.random() * 100000);

  useEffect(() => {
    const storedTechniques = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY_1)
    );
    if (storedTechniques) setTechniques(storedTechniques);
  }, []);

  useEffect(() => {
    const storedCategories = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY_2)
    );
    if (storedCategories) setCategories(storedCategories);
  }, []);

  useEffect(() => {
    const storedCategoryKeys = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY_3)
    );
    if (storedCategoryKeys) setCategoryKeys(storedCategoryKeys);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_1, JSON.stringify(techniques));
  }, [techniques]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_2, JSON.stringify(categories));
  }, [categories]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_3, JSON.stringify(categoryKeys));
  }, [categoryKeys]);

  function createLog() {
    const technique = techniqueRef.current.value;

    if (technique === "") {
      alert("Please enter a technique.");
      return;
    }

    setTechniques((prevTechniques) => {
      return [
        ...prevTechniques,
        {
          id: techniqueNo,
          technique: technique,
          color: "rgb(21, 134, 152)",
          notes: [],
        },
      ];
    });

    //    setCategoryKeys([])

    techniqueRef.current.value = null;
  }

  function addNote(notes, chosenTechnique) {
    setTechniques((techniques) => {
      let updatedTechniques = [];
      techniques.forEach((technique) => {
        if (technique.id === chosenTechnique.id) {
          let updatedTechnique = {
            id: chosenTechnique.id,
            technique: chosenTechnique.technique,
            video: technique.video,
            color: chosenTechnique.color,
            notes: notes,
          };

          updatedTechniques.push(updatedTechnique);
        } else {
          updatedTechniques.push(technique);
        }

        console.log(updatedTechniques);
      });

      return updatedTechniques;
    });
  }

  function editNote(noteEdit, noteID, chosenTechnique) {
    setTechniques((techniques) => {
      let updatedTechniques = [];

      techniques.forEach((technique) => {
        let updatedTechniqueNotes = [];
        if (technique.id === chosenTechnique.id) {
          technique.notes.forEach((techniqueNote) => {
            if (techniqueNote.noteID === noteID) {
              updatedTechniqueNotes.push({
                noteText: noteEdit,
                noteID: noteID,
                noteTitle: "Note " + noteID,
              });
            } else {
              updatedTechniqueNotes.push({
                noteText: techniqueNote.noteText,
                noteID: techniqueNote.noteID,
                noteTitle: "Note " + techniqueNote.noteID,
              });
            }
          });
          updatedTechniques.push({
            id: technique.id,
            technique: technique.technique,
            video: technique.video,
            color: technique.color,
            notes: updatedTechniqueNotes,
          });
        } else {
          updatedTechniques.push({
            id: technique.id,
            technique: technique.technique,
            video: technique.video,
            color: technique.color,
            notes: technique.notes,
          });
        }
      });

      return updatedTechniques;
    });
  }

  function editVideo(videoLink, techniqueID) {
    let embedVideoLink = videoLink.replace("watch?v=", "embed/");

    if (embedVideoLink.includes("&t=")) {
      const tIndex = embedVideoLink.indexOf("&t=");
      embedVideoLink = embedVideoLink.substring(0, tIndex);
      console.log(embedVideoLink);
    }

    setTechniques((techniques) => {
      const updatedTechniques = techniques.map((technique) => {
        if (technique.id === techniqueID) {
          return {
            id: technique.id,
            technique: technique.technique,
            video: embedVideoLink,
            color: technique.color,
            notes: technique.notes,
          };
        } else {
          return {
            id: technique.id,
            technique: technique.technique,
            video: technique.video,
            color: technique.color,
            notes: technique.notes,
          };
        }
      });

      return updatedTechniques;
    });
  }

  function editCatTechVideo(videoLink, techniqueID) {
    let embedVideoLink = videoLink.replace("watch?v=", "embed/");

    if (embedVideoLink.includes("&t=")) {
      const tIndex = embedVideoLink.indexOf("&t=");
      embedVideoLink = embedVideoLink.substring(0, tIndex);
      console.log(embedVideoLink);
    }

    setCategories((categories) => {
      return categories.map((category) => {
        const updatedCatTechniques = category.catTechniques.map(
          (catTechnique) => {
            if (catTechnique.id === techniqueID) {
              return {
                id: catTechnique.id,
                technique: catTechnique.technique,
                video: embedVideoLink,
                color: catTechnique.color,
                notes: catTechnique.notes,
              };
            } else {
              return {
                id: catTechnique.id,
                technique: catTechnique.technique,
                video: catTechnique.video,
                color: catTechnique.color,
                notes: catTechnique.notes,
              };
            }
          }
        );

        return {
          id: category.id,
          category: category.category,
          color: category.color,
          catTechniques: updatedCatTechniques,
        };
      });
    });
  }

  function handleCreateCategory() {
    const colorArray = [
      "#F94144",
      "#F3722C",
      "#F8961E",
      "#F9C74F",
      "#90BE6D",
      "#43AA8B",
      "#577590",
      "#541388",
    ];
    const category = categoryRef.current.value;

    if (category === "") {
      alert("Please enter a category.");
      return;
    }

    if (categories.length > 7) {
      alert("You've reached your category limit!");
      return;
    }

    setCategories((prevCategories) => {
      return [
        ...prevCategories,
        {
          id: catNo,
          category: category,
          color: colorArray[categories.length],
          catTechniques: [],
        },
      ];
    });

    setCategoryKeys((prevCategoryKeys) => {
      return [
        ...prevCategoryKeys,
        { id: catNo, category: category, color: colorArray[categories.length] },
      ];
    });

    categoryRef.current.value = null;
  }

  const handleDeleteTechnique = (techniqueID) => {
    setTechniques((techniques) => {
      return techniques.filter((technique) => technique.id !== techniqueID);
    });
  };

  const handleDeleteCategory = (categoryID) => {
    const colorArray = [
      "#F94144",
      "#F3722C",
      "#F8961E",
      "#F9C74F",
      "#90BE6D",
      "#43AA8B",
      "#577590",
      "#541388",
    ];

    const deletedCategories = categories.filter(
      (category) => category.id !== categoryID
    );

    const modifiedColorCategories = deletedCategories.map((category, index) => {
      const updatedCatTechniques = category.catTechniques.map((catTechnique) => {
        return {
          id: catTechnique.id,
          technique: catTechnique.technique,
          video: catTechnique.video,
          color: LightenDarkenColor( colorArray[index], -40),
          notes: catTechnique.notes,
        };
      });
      return {
        id: category.id,
        category: category.category,
        color: colorArray[index],
        catTechniques: updatedCatTechniques,
      };
    });

    setCategories(modifiedColorCategories);

    const deletedCategoryKeys = categoryKeys.filter(
      (categoryKey) => categoryKey.id !== categoryID
    );
    const modifiedColorCategoryKeys = deletedCategoryKeys.map(
      (categoryKey, index) => {
        return {
          id: categoryKey.id,
          category: categoryKey.category,
          color: colorArray[index],
        };
      }
    );
    console.log(modifiedColorCategoryKeys);
    setCategoryKeys(modifiedColorCategoryKeys);
  };

  function handleDeleteNote(noteID, techniqueID) {
    setTechniques((techniques) => {
      return techniques.map((technique) => {
        if (technique.id === techniqueID) {
          const newNotes = technique.notes.filter(
            (note) => note.noteID !== noteID
          );

          return {
            id: technique.id,
            technique: technique.technique,
            video: technique.video,
            color: technique.color,
            notes: newNotes,
          };
        } else {
          return {
            id: technique.id,
            technique: technique.technique,
            video: technique.video,
            color: technique.color,
            notes: technique.notes,
          };
        }
      });
    });
  }

  const handleDeleteCatTechnique = (techniqueID, categoryID) => {
    setCategories((categories) => {
      let updatedCategories = [];
      categories.forEach((category) => {
        if (category.id === categoryID) {
          const updatedCatTechniques = category.catTechniques.filter(
            (catTechnique) => catTechnique.id !== techniqueID
          );
          updatedCategories.push({
            id: category.id,
            category: category.category,
            color: category.color,
            catTechniques: updatedCatTechniques,
          });
        } else {
          updatedCategories.push(category);
        }
      });

      return updatedCategories;
    });
  };

  function handleAddCatTechNote(newNotes, chosenCatTechnique) {
    setCategories((categories) => {
      let updatedCategories = [];
      categories.forEach((category) => {
        let updatedCatTechniques = [];
        category.catTechniques.forEach((catTechnique) => {
          if (catTechnique.id === chosenCatTechnique.id) {
            let updatedTechnique = {
              id: chosenCatTechnique.id,
              technique: chosenCatTechnique.technique,
              video: chosenCatTechnique.video,
              color: chosenCatTechnique.color,
              notes: newNotes,
            };

            updatedCatTechniques.push(updatedTechnique);
          } else {
            updatedCatTechniques.push(catTechnique);
          }
        });
        updatedCategories.push({
          id: category.id,
          category: category.category,
          color: category.color,
          catTechniques: updatedCatTechniques,
        });
      });

      return updatedCategories;
    });
  }

  function handleDeleteCatTechNote(noteID, techniqueID) {
    setCategories((categories) => {
      const updatedCategories = categories.map((category) => {
        let updatedCatTechniques = [];
        category.catTechniques.forEach((catTechnique) => {
          if (catTechnique.id === techniqueID) {
            const deletedNotes = catTechnique.notes.filter(
              (note) => note.noteID !== noteID
            );

            const newNotes = deletedNotes.map((note, index) => {
              return {
                noteText: note.noteText,
                noteID: index + 1,
                noteTitle: "Note " + (index + 1),
              };
            });

            updatedCatTechniques.push({
              id: catTechnique.id,
              technique: catTechnique.technique,
              video: catTechnique.video,
              color: catTechnique.color,
              notes: newNotes,
            });
            console.log("same");
          } else {
            updatedCatTechniques.push({
              id: catTechnique.id,
              technique: catTechnique.technique,
              video: catTechnique.video,
              color: catTechnique.color,
              notes: catTechnique.notes,
            });
          }
        });

        return {
          id: category.id,
          category: category.category,
          color: category.color,
          catTechniques: updatedCatTechniques,
        };
      });
      return updatedCategories;
    });
  }

  function handleEditCatTechNote(noteEdit, noteID, chosenCatTechnique) {
    setCategories((categories) => {
      const updatedCategories = categories.map((category) => {
        let updatedCatTechniques = [];

        category.catTechniques.forEach((catTechnique) => {
          let updatedCatTechniqueNotes = [];
          if (catTechnique.id === chosenCatTechnique.id) {
            catTechnique.notes.forEach((catTechniqueNote) => {
              if (catTechniqueNote.noteID === noteID) {
                updatedCatTechniqueNotes.push({
                  noteText: noteEdit,
                  noteID: noteID,
                  noteTitle: "Note " + noteID,
                });
              } else {
                updatedCatTechniqueNotes.push({
                  noteText: catTechniqueNote.noteText,
                  noteID: catTechniqueNote.noteID,
                  noteTitle: "Note " + catTechniqueNote.noteID,
                });
              }
            });
            updatedCatTechniques.push({
              id: catTechnique.id,
              technique: catTechnique.technique,
              video: catTechnique.video,
              color: catTechnique.color,
              notes: updatedCatTechniqueNotes,
            });
          } else {
            updatedCatTechniques.push({
              id: catTechnique.id,
              technique: catTechnique.technique,
              video: catTechnique.video,
              color: catTechnique.color,
              notes: catTechnique.notes,
            });
          }
        });

        return {
          id: category.id,
          category: category.category,
          color: category.color,
          catTechniques: updatedCatTechniques,
        };
      });
      return updatedCategories;
    });
  }

  function handleTouchDragStart(e) {
    e.target.classList.add("dragging"); // this / e.target is the source node.
    const touchLocation = e.targetTouches[0];

    e.target.style.position = "absolute";
    e.target.style.left = touchLocation.pageX - 100 + "px";
    e.target.style.top = touchLocation.pageY - 100 + "px";
    e.target.style.zIndex = "-100";

    const x = touchLocation.clientX;
    const y = touchLocation.clientY;

    const dropTarget = document.elementFromPoint(x, y);

    if (dropTarget) {
      if (
        dropTarget.className === "category" ||
        dropTarget.className === "categoryKeys"
      ) {
        dropTarget.style.filter = "brightness(150%)";
      } else {
        dropTarget.style.filter = "brightness(100%)";
        const categoryKeys = document.getElementsByClassName("categoryKeys");

        const categories = document.getElementsByClassName("category");

        for (let i = 0; i < categoryKeys.length; i++) {
          categoryKeys[i].style.filter = "brightness(100%)";
        }

        for (let i = 0; i < categories.length; i++) {
          categories[i].style.filter = "brightness(100%)";
        }
      }
    }
  }

  function handleTouchEnd(e) {
    const x = e.changedTouches[0].clientX;
    const y = e.changedTouches[0].clientY;
    const dropTarget = document.elementFromPoint(x, y);

    if (dropTarget.className === "category") {
      const category = categories.find(
        (cat) => cat.id.toString() === dropTarget.id
      );

      console.log(category);
      dropTarget.style.filter = "brightness(100%)";
      handleDrop(e, category);
    }

    if (dropTarget.className === "categoryKeys") {
      const idArray = dropTarget.id.split("");
      console.log(idArray);
      const keyRemove = idArray.filter((char) => char.match(/[a-z]/i) === null);
      console.log(keyRemove);
      const idString = keyRemove.join("");
      console.log(typeof idString);
      const newID = parseInt(idString);
      const categoryKey = categoryKeys.find((cat) => cat.id === newID);

      dropTarget.style.filter = "brightness(100%)";
      console.log(categoryKey);
      handleDrop(e, categoryKey);
    }

    e.target.style.position = "relative";
    e.target.style.zIndex = "1";
    e.target.style.left = "0px";
    e.target.style.top = "0px";
    e.target.style.opacity = "1";
  }

  const handleDrop = (e, chosenCategory) => {
    const draggable = document.querySelector(".dragging");
    e.target.style.filter = "brightness(100%)";
    techniques.forEach((technique) => {
      if (draggable.id === technique.id.toString()) {
        const oldColor = chosenCategory.color;

        const newColor = LightenDarkenColor(oldColor, -40);

        setCategories((categories) => {
          const updatedCategories = categories.map((category) => {
            if (chosenCategory.id === category.id) {
              const updatedCatTechniques = [
                ...category.catTechniques,
                {
                  id: technique.id,
                  technique: technique.technique,
                  video: technique.video,
                  color: newColor,
                  notes: technique.notes,
                },
              ];
              return {
                id: category.id,
                category: category.category,
                color: category.color,
                catTechniques: updatedCatTechniques,
              };
            } else {
              return category;
            }
          });

          return updatedCategories;
        });
        handleDeleteTechnique(technique.id);
      }
    });
  };

  function LightenDarkenColor(col, amt) {
    var usePound = false;

    if (col[0] === "#") {
      col = col.slice(1);
      usePound = true;
    }

    var num = parseInt(col, 16);

    var r = (num >> 16) + amt;

    if (r > 255) r = 255;
    else if (r < 0) r = 0;

    var b = ((num >> 8) & 0x00ff) + amt;

    if (b > 255) b = 255;
    else if (b < 0) b = 0;

    var g = (num & 0x0000ff) + amt;

    if (g > 255) g = 255;
    else if (g < 0) g = 0;

    return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
  }

  return (
    <>
      <div id="mainHeader" class="header">
        BJJ NOTES
      </div>
      <div id="description" class="header">
        <p>
          Add your techniques below. You can also add categories if you scroll
          down further (Instructionals, positions etc).
        </p>
        <p>
          Drag and drop techniques into catgeories/category shortcuts to
          categorize them.
        </p>
      </div>

      <div id="inContain">
        <label for="technique">Technique</label>
        <input
          ref={techniqueRef}
          id="techniqueIn"
          class="input titleIn"
          type="text"
        ></input>
        <button onClick={createLog} id="addTechnique" class="input">
          Add Technique
        </button>
      </div>
      <div id="techniqueContain">
        <Techniques
          handleTouchEnd={handleTouchEnd}
          handleDeleteTechnique={handleDeleteTechnique}
          handleTouchDragStart={handleTouchDragStart}
          handleDeleteNote={handleDeleteNote}
          editNote={editNote}
          editVideo={editVideo}
          addNote={addNote}
          techniques={techniques}
        />
      </div>
      <div class="center">
        <h1 id="categoryKeysTitle">Category Shortcuts</h1>
      </div>
      <div class="center">
        <CategoryKeys handleDrop={handleDrop} categoryKeys={categoryKeys} />
      </div>
      <div id="inContain">
        <label for="instructional">Category</label>
        <input
          ref={categoryRef}
          id="categoryIn"
          class="input titleIn"
          type="text"
        ></input>
        <button onClick={handleCreateCategory} id="addCategory" class="input">
          Add Category
        </button>
      </div>
      <Categories
        handleTouchEnd={handleTouchEnd}
        handleDrop={handleDrop}
        handleDeleteCatTechNote={handleDeleteCatTechNote}
        handleAddCatTechNote={handleAddCatTechNote}
        handleEditCatTechNote={handleEditCatTechNote}
        editCatTechVideo={editCatTechVideo}
        handleDeleteCategory={handleDeleteCategory}
        techniques={techniques}
        handleDeleteCatTechnique={handleDeleteCatTechnique}
        handleDeleteTechnique={handleDeleteTechnique}
        categories={categories}
      />
    </>
  );
}
