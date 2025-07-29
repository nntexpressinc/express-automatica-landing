import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/16/solid";
import gsap from "gsap";

const people = [
  { id: 1, name: "UZ" },
  { id: 2, name: "RU" },
  { id: 3, name: "EN" },
];

export default function Language() {
  const [selected, setSelected] = useState(people[1]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <div className="relative w-[50px] listbox-container">
          <ListboxButton
            className={clsx(
              "relative w-full rounded-lg border border-primaryBg  py-2 px-4 text-left text-black shadow-lg",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primaryBg",
              "cursor-pointer clamp5 lg:text-md flex justify-between items-center text-center"
            )}
          >
            {selected.name}
          </ListboxButton>
          <ListboxOptions
            className={clsx(
              "listbox-options absolute mt-1 w-30 rounded-md bg-white shadow-lg",
              "max-h-60 py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none",
              "transition duration-200 ease-in-out transform origin-top",
              { block: open, hidden: !open }
            )}
          >
            {people.map((person) => (
              <ListboxOption
                key={person.id}
                value={person}
                className={({ active, selected }) =>
                  clsx(
                    "listbox cursor-default select-none relative py-1 pl-5 pr-4 clamp5 lg:text-md",
                    active ? "text-amber-900 bg-amber-100" : "text-gray-900",
                    selected ? "font-medium" : "font-normal"
                  )
                }
              >
                {({ selected }) => (
                  <>
                    <span
                      className={clsx(
                        "block truncate",
                        selected ? "font-semibold" : "font-normal"
                      )}
                    ></span>
                  
                    {person.name}
                  </>
                )}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      )}
    </Listbox>
  );
}
