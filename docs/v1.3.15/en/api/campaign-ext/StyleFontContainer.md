<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StyleFontContainer`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# StyleFontContainer

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public class StyleFontContainer`
**Base:** none
**File:** `TaleWorlds.TwoDimension/StyleFontContainer.cs`

## Overview

`StyleFontContainer` lives in `TaleWorlds.TwoDimension` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Add
`public void Add(string style, Font font, float fontSize)`

**Purpose:** Adds `add` to the current collection or state.

### GetFontData
`public StyleFontContainer.FontData GetFontData(string style)`

**Purpose:** Gets the current value of `font data`.

### ClearFonts
`public void ClearFonts()`

**Purpose:** Handles logic related to `clear fonts`.

## Usage Example

```csharp
var value = new StyleFontContainer();
value.Add("example", font, 0);
```

## See Also

- [Complete Class Catalog](../catalog)