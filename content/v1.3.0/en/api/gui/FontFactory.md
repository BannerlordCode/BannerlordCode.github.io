---
title: "FontFactory"
description: "Auto-generated class reference for FontFactory."
---
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

**Purpose:** **Purpose:** Reads all fonts from persistent storage or a stream.

```csharp
// Obtain an instance of FontFactory from the subsystem API first
FontFactory fontFactory = ...;
fontFactory.LoadAllFonts(spriteData);
```

### TryAddFontDefinition
`public bool TryAddFontDefinition(string fontPath, string fontName, SpriteData spriteData)`

**Purpose:** **Purpose:** Attempts to retrieve add font definition, usually returning success through an out parameter.

```csharp
// Obtain an instance of FontFactory from the subsystem API first
FontFactory fontFactory = ...;
var result = fontFactory.TryAddFontDefinition("example", "example", spriteData);
```

### LoadLocalizationValues
`public void LoadLocalizationValues(string sourceXMLPath)`

**Purpose:** **Purpose:** Reads localization values from persistent storage or a stream.

```csharp
// Obtain an instance of FontFactory from the subsystem API first
FontFactory fontFactory = ...;
fontFactory.LoadLocalizationValues("example");
```

### GetCurrentLanguage
`public Language GetCurrentLanguage()`

**Purpose:** **Purpose:** Reads and returns the current language value held by the this instance.

```csharp
// Obtain an instance of FontFactory from the subsystem API first
FontFactory fontFactory = ...;
var result = fontFactory.GetCurrentLanguage();
```

### GetFont
`public Font GetFont(string fontName)`

**Purpose:** **Purpose:** Reads and returns the font value held by the this instance.

```csharp
// Obtain an instance of FontFactory from the subsystem API first
FontFactory fontFactory = ...;
var result = fontFactory.GetFont("example");
```

### GetFonts
`public IEnumerable<Font> GetFonts()`

**Purpose:** **Purpose:** Reads and returns the fonts value held by the this instance.

```csharp
// Obtain an instance of FontFactory from the subsystem API first
FontFactory fontFactory = ...;
var result = fontFactory.GetFonts();
```

### GetFontName
`public string GetFontName(Font font)`

**Purpose:** **Purpose:** Reads and returns the font name value held by the this instance.

```csharp
// Obtain an instance of FontFactory from the subsystem API first
FontFactory fontFactory = ...;
var result = fontFactory.GetFontName(font);
```

### GetMappedFontForLocalization
`public Font GetMappedFontForLocalization(string englishFontName)`

**Purpose:** **Purpose:** Reads and returns the mapped font for localization value held by the this instance.

```csharp
// Obtain an instance of FontFactory from the subsystem API first
FontFactory fontFactory = ...;
var result = fontFactory.GetMappedFontForLocalization("example");
```

### OnLanguageChange
`public void OnLanguageChange(string newLanguageCode)`

**Purpose:** **Purpose:** Invoked when the language change event is raised.

```csharp
// Obtain an instance of FontFactory from the subsystem API first
FontFactory fontFactory = ...;
fontFactory.OnLanguageChange("example");
```

### GetUsableFontForCharacter
`public Font GetUsableFontForCharacter(int characterCode)`

**Purpose:** **Purpose:** Reads and returns the usable font for character value held by the this instance.

```csharp
// Obtain an instance of FontFactory from the subsystem API first
FontFactory fontFactory = ...;
var result = fontFactory.GetUsableFontForCharacter(0);
```

### CheckForUpdates
`public void CheckForUpdates()`

**Purpose:** **Purpose:** Verifies whether for updates holds true for the this instance.

```csharp
// Obtain an instance of FontFactory from the subsystem API first
FontFactory fontFactory = ...;
fontFactory.CheckForUpdates();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
FontFactory fontFactory = ...;
fontFactory.LoadAllFonts(spriteData);
```

## See Also

- [Area Index](../)