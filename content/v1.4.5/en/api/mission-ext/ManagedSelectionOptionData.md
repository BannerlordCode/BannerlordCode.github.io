---
title: "ManagedSelectionOptionData"
description: "Auto-generated class reference for ManagedSelectionOptionData."
---
# ManagedSelectionOptionData

**Namespace:** TaleWorlds.MountAndBlade.Options.ManagedOptions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ManagedSelectionOptionData : ManagedOptionData, ISelectionOptionData, IOptionData`
**Base:** `ManagedOptionData`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Options.ManagedOptions/ManagedSelectionOptionData.cs`

## Overview

`ManagedSelectionOptionData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `ManagedSelectionOptionData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetSelectableOptionsLimit
`public int GetSelectableOptionsLimit()`

**Purpose:** Reads and returns the selectable options limit value held by the this instance.

```csharp
// Obtain an instance of ManagedSelectionOptionData from the subsystem API first
ManagedSelectionOptionData managedSelectionOptionData = ...;
var result = managedSelectionOptionData.GetSelectableOptionsLimit();
```

### GetSelectableOptionNames
`public IEnumerable<SelectionData> GetSelectableOptionNames()`

**Purpose:** Reads and returns the selectable option names value held by the this instance.

```csharp
// Obtain an instance of ManagedSelectionOptionData from the subsystem API first
ManagedSelectionOptionData managedSelectionOptionData = ...;
var result = managedSelectionOptionData.GetSelectableOptionNames();
```

### GetOptionsLimit
`public static int GetOptionsLimit(TaleWorlds.MountAndBlade.ManagedOptions.ManagedOptionsType optionType)`

**Purpose:** Reads and returns the options limit value held by the this instance.

```csharp
// Static call; no instance required
ManagedSelectionOptionData.GetOptionsLimit(optionType);
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
ManagedSelectionOptionData entry = ...;
```

## See Also

- [Area Index](../)