<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Font`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Font

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public class Font`
**Base:** none
**File:** `TaleWorlds.TwoDimension/Font.cs`

## Overview

`Font` lives in `TaleWorlds.TwoDimension` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; }` |
| `Size` | `public int Size { get; }` |
| `LineHeight` | `public int LineHeight { get; }` |
| `Base` | `public int Base { get; }` |
| `CharacterCount` | `public int CharacterCount { get; }` |
| `SmoothingConstant` | `public float SmoothingConstant { get; }` |
| `CustomScale` | `public float CustomScale { get; }` |
| `Smooth` | `public bool Smooth { get; }` |
| `FontSprite` | `public SpritePart FontSprite { get; }` |
| `Characters` | `public Dictionary<int, BitmapFontCharacter> Characters { get; }` |

## Key Methods

### TryLoadFontFromPath
`public bool TryLoadFontFromPath(string path, SpriteData spriteData)`

**Purpose:** Attempts to get `load font from path`, usually returning the result in an out parameter.

### GetWordWidth
`public float GetWordWidth(string word, float extraPadding)`

**Purpose:** Gets the current value of `word width`.

### GetCharacterWidth
`public float GetCharacterWidth(char character, float extraPadding)`

**Purpose:** Gets the current value of `character width`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

## Usage Example

```csharp
var value = new Font();
value.TryLoadFontFromPath("example", spriteData);
```

## See Also

- [Complete Class Catalog](../catalog)