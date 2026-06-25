---
title: "StyleFontContainer"
description: "Auto-generated class reference for StyleFontContainer."
---
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

**Purpose:** Adds an item to the current collection or state.

```csharp
// Obtain an instance of StyleFontContainer from the subsystem API first
StyleFontContainer styleFontContainer = ...;
styleFontContainer.Add("example", font, 0);
```

### GetFontData
`public StyleFontContainer.FontData GetFontData(string style)`

**Purpose:** Reads and returns the `font data` value held by the current object.

```csharp
// Obtain an instance of StyleFontContainer from the subsystem API first
StyleFontContainer styleFontContainer = ...;
var result = styleFontContainer.GetFontData("example");
```

### ClearFonts
`public void ClearFonts()`

**Purpose:** Removes all `fonts` from the current object.

```csharp
// Obtain an instance of StyleFontContainer from the subsystem API first
StyleFontContainer styleFontContainer = ...;
styleFontContainer.ClearFonts();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
StyleFontContainer styleFontContainer = ...;
styleFontContainer.Add("example", font, 0);
```

## See Also

- [Area Index](../)