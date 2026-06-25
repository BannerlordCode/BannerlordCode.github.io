---
title: "Language"
description: "Auto-generated class reference for Language."
---
# Language

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class Language : ILanguage`
**Base:** `ILanguage`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Language.cs`

## Overview

`Language` lives in `TaleWorlds.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ForbiddenStartOfLineCharacters` | `public char ForbiddenStartOfLineCharacters { get; }` |
| `ForbiddenEndOfLineCharacters` | `public char ForbiddenEndOfLineCharacters { get; }` |
| `LanguageID` | `public string LanguageID { get; }` |
| `DefaultFontName` | `public string DefaultFontName { get; }` |
| `DoesFontRequireSpaceForNewline` | `public bool DoesFontRequireSpaceForNewline { get; }` |
| `DefaultFont` | `public Font DefaultFont { get; }` |
| `LineSeperatorChar` | `public char LineSeperatorChar { get; }` |

## Key Methods

### FontMapHasKey
`public bool FontMapHasKey(string keyFontName)`

**Purpose:** **Purpose:** Executes the FontMapHasKey logic.

```csharp
// Obtain an instance of Language from the subsystem API first
Language language = ...;
var result = language.FontMapHasKey("example");
```

### GetMappedFont
`public Font GetMappedFont(string keyFontName)`

**Purpose:** **Purpose:** Reads and returns the mapped font value held by the this instance.

```csharp
// Obtain an instance of Language from the subsystem API first
Language language = ...;
var result = language.GetMappedFont("example");
```

### CreateFrom
`public static Language CreateFrom(XmlNode languageNode, FontFactory fontFactory)`

**Purpose:** **Purpose:** Constructs a new from entity and returns it to the caller.

```csharp
// Static call; no instance required
Language.CreateFrom(languageNode, fontFactory);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Language language = ...;
language.FontMapHasKey("example");
```

## See Also

- [Area Index](../)