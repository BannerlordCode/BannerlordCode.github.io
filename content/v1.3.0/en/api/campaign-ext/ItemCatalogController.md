---
title: "ItemCatalogController"
description: "Auto-generated class reference for ItemCatalogController."
---
# ItemCatalogController

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class ItemCatalogController : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/MissionLogics/ItemCatalogController.cs`

## Overview

`ItemCatalogController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `ItemCatalogController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `AllItems` | `public MBReadOnlyList<ItemObject> AllItems { get; }` |

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ItemCatalogController from the subsystem API first
ItemCatalogController itemCatalogController = ...;
itemCatalogController.AfterStart();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Invoked when the `mission tick` event is raised.

```csharp
// Obtain an instance of ItemCatalogController from the subsystem API first
ItemCatalogController itemCatalogController = ...;
itemCatalogController.OnMissionTick(0);
```

### BeforeCatalogTickDelegate
`public delegate void BeforeCatalogTickDelegate(int currentItemIndex)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ItemCatalogController from the subsystem API first
ItemCatalogController itemCatalogController = ...;
itemCatalogController.BeforeCatalogTickDelegate(0);
```

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<ItemCatalogController>();
```

## See Also

- [Area Index](../)