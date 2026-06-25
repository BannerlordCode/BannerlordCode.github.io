---
title: "ManagedSelectionOptionData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ManagedSelectionOptionData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ManagedSelectionOptionData

**Namespace:** TaleWorlds.MountAndBlade.Options.ManagedOptions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ManagedSelectionOptionData : ManagedOptionData, ISelectionOptionData, IOptionData`
**Base:** `ManagedOptionData`
**File:** `TaleWorlds.MountAndBlade/Options/ManagedOptions/ManagedSelectionOptionData.cs`

## Overview

`ManagedSelectionOptionData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `ManagedSelectionOptionData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetSelectableOptionsLimit
`public int GetSelectableOptionsLimit()`

**Purpose:** Gets the current value of `selectable options limit`.

### GetSelectableOptionNames
`public IEnumerable<SelectionData> GetSelectableOptionNames()`

**Purpose:** Gets the current value of `selectable option names`.

### GetOptionsLimit
`public static int GetOptionsLimit(ManagedOptions.ManagedOptionsType optionType)`

**Purpose:** Gets the current value of `options limit`.

## Usage Example

```csharp
var value = new ManagedSelectionOptionData();
```

## See Also

- [Complete Class Catalog](../catalog)