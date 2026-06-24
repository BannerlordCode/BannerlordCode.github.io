<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FontFactory`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# FontFactory

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class FontFactory`
**Base:** none
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/FontFactory.cs`

## Overview

`FontFactory` lives in `TaleWorlds.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `DefaultLangageID` | `public string DefaultLangageID { get; }` |
| `CurrentLangageID` | `public string CurrentLangageID { get; }` |
| `DefaultFont` | `public Font DefaultFont { get; }` |

## Key Methods

### LoadAllFonts
`public void LoadAllFonts(SpriteData spriteData)`

**Purpose:** Loads `all fonts` data.

### TryAddFontDefinition
`public bool TryAddFontDefinition(string fontPath, string fontName, SpriteData spriteData)`

**Purpose:** Attempts to get `add font definition`, usually returning the result in an out parameter.

### LoadLocalizationValues
`public void LoadLocalizationValues(string sourceXMLPath)`

**Purpose:** Loads `localization values` data.

### GetCurrentLanguage
`public Language GetCurrentLanguage()`

**Purpose:** Gets the current value of `current language`.

### GetFont
`public Font GetFont(string fontName)`

**Purpose:** Gets the current value of `font`.

### GetFonts
`public IEnumerable<Font> GetFonts()`

**Purpose:** Gets the current value of `fonts`.

### GetFontName
`public string GetFontName(Font font)`

**Purpose:** Gets the current value of `font name`.

### GetMappedFontForLocalization
`public Font GetMappedFontForLocalization(string englishFontName)`

**Purpose:** Gets the current value of `mapped font for localization`.

### OnLanguageChange
`public void OnLanguageChange(string newLanguageCode)`

**Purpose:** Called when the `language change` event is raised.

### GetUsableFontForCharacter
`public Font GetUsableFontForCharacter(int characterCode)`

**Purpose:** Gets the current value of `usable font for character`.

### CheckForUpdates
`public void CheckForUpdates()`

**Purpose:** Handles logic related to `check for updates`.

## Usage Example

```csharp
var value = new FontFactory();
value.LoadAllFonts(spriteData);
```

## See Also

- [Complete Class Catalog](../catalog)