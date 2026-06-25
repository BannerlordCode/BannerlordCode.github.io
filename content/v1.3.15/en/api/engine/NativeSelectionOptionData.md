---
title: "NativeSelectionOptionData"
description: "Auto-generated class reference for NativeSelectionOptionData."
---
# NativeSelectionOptionData

**Namespace:** TaleWorlds.Engine.Options
**Module:** TaleWorlds.Engine
**Type:** `public class NativeSelectionOptionData : NativeOptionData, ISelectionOptionData, IOptionData`
**Base:** `NativeOptionData`
**File:** `TaleWorlds.Engine/Options/NativeSelectionOptionData.cs`

## Overview

`NativeSelectionOptionData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `NativeSelectionOptionData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetSelectableOptionsLimit
`public int GetSelectableOptionsLimit()`

**Purpose:** Reads and returns the `selectable options limit` value held by the current object.

```csharp
// Obtain an instance of NativeSelectionOptionData from the subsystem API first
NativeSelectionOptionData nativeSelectionOptionData = ...;
var result = nativeSelectionOptionData.GetSelectableOptionsLimit();
```

### GetSelectableOptionNames
`public IEnumerable<SelectionData> GetSelectableOptionNames()`

**Purpose:** Reads and returns the `selectable option names` value held by the current object.

```csharp
// Obtain an instance of NativeSelectionOptionData from the subsystem API first
NativeSelectionOptionData nativeSelectionOptionData = ...;
var result = nativeSelectionOptionData.GetSelectableOptionNames();
```

### GetOptionsLimit
`public static int GetOptionsLimit(NativeOptions.NativeOptionsType optionType)`

**Purpose:** Reads and returns the `options limit` value held by the current object.

```csharp
// Static call; no instance required
NativeSelectionOptionData.GetOptionsLimit(optionType);
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
NativeSelectionOptionData entry = ...;
```

## See Also

- [Area Index](../)