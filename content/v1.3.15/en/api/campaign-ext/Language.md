---
title: "Language"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Language`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `font map has key`.

### GetMappedFont
`public Font GetMappedFont(string keyFontName)`

**Purpose:** Gets the current value of `mapped font`.

### CreateFrom
`public static Language CreateFrom(XmlNode languageNode, FontFactory fontFactory)`

**Purpose:** Creates a new `from` instance or object.

## Usage Example

```csharp
var value = new Language();
value.FontMapHasKey("example");
```

## See Also

- [Complete Class Catalog](../catalog)