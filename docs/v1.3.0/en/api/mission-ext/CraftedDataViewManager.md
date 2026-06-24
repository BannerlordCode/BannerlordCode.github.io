<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CraftedDataViewManager`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CraftedDataViewManager

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CraftedDataViewManager`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/CraftedDataViewManager.cs`

## Overview

`CraftedDataViewManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `CraftedDataViewManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### Initialize
`public static void Initialize()`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### Clear
`public static void Clear()`

**Purpose:** Handles logic related to `clear`.

### GetCraftedDataView
`public static CraftedDataView GetCraftedDataView(WeaponDesign craftedData)`

**Purpose:** Gets the current value of `crafted data view`.

## Usage Example

```csharp
var manager = CraftedDataViewManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)