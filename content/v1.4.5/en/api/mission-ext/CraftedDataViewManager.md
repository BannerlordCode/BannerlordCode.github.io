---
title: "CraftedDataViewManager"
description: "Auto-generated class reference for CraftedDataViewManager."
---
# CraftedDataViewManager

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CraftedDataViewManager`
**Base:** none
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View/CraftedDataViewManager.cs`

## Overview

`CraftedDataViewManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `CraftedDataViewManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### Initialize
`public static void Initialize()`

**Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Static call; no instance required
CraftedDataViewManager.Initialize();
```

### Clear
`public static void Clear()`

**Purpose:** Removes all content from the this instance.

```csharp
// Static call; no instance required
CraftedDataViewManager.Clear();
```

### GetCraftedDataView
`public static CraftedDataView GetCraftedDataView(WeaponDesign craftedData)`

**Purpose:** Reads and returns the crafted data view value held by the this instance.

```csharp
// Static call; no instance required
CraftedDataViewManager.GetCraftedDataView(craftedData);
```

## Usage Example

```csharp
var manager = CraftedDataViewManager.Current;
```

## See Also

- [Area Index](../)