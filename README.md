## Dropdown menu

#### This dropdown menu can be used as an alternative for one branch HTML select menu

### Basic structure
```
<div class = "drop-down" values = "..." >
    <input type = "hidden" id = "..." name = "..." >
    <button class = "select" >Select</button>
    <button class = "opt-button" value = "..." >"..."</button>
    -
    -
    -
    -
    <button class = "opt-button" value = "..." >"..."</button>
</div>
```

### JSON file format

Developer should make a json file according to the below format and convert it using js JSON.stringfy() methord before inisialising it as the div element's 'values' attribute.

```
let info = {
    id: "drop-down-hidden",
    name: "drop-down-hidden",
    values: [
        {
            value: "15478478",
            text: "abc",
        },
        {
            value: "54818787",
            text: "def",
        },
        {
            value: "85255515",
            text: "ghi",
        }
    ]
};
```

The first two parameters are the hidden field id and name. value in values is an dropdown option's value and text is the text.
