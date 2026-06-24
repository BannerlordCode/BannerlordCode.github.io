<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StyleFontContainer`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# StyleFontContainer

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public class StyleFontContainer`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.TwoDimension/TaleWorlds.TwoDimension/StyleFontContainer.cs`

## Overview

`StyleFontContainer` lives in `TaleWorlds.TwoDimension` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### FontData
`public struct FontData(Font font, float fontSize)`

**Purpose:** Handles logic related to `font data`.

### Add
`public void Add(string style, Font font, float fontSize)`

**Purpose:** Adds `add` to the current collection or state.

### GetFontData
`public FontData GetFontData(string style)`

**Purpose:** Gets the current value of `font data`.

### ClearFonts
`public void ClearFonts()`

**Purpose:** Handles logic related to `clear fonts`.

## Usage Example

```csharp
var value = new StyleFontContainer();
value.FontData(font, 0);
```

## See Also

- [Complete Class Catalog](../catalog)