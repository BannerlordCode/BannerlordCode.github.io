<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ItemCatalogController`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `after start`.

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Called when the `mission tick` event is raised.

### BeforeCatalogTickDelegate
`public delegate void BeforeCatalogTickDelegate(int currentItemIndex)`

**Purpose:** Handles logic related to `before catalog tick delegate`.

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<ItemCatalogController>();
```

## See Also

- [Complete Class Catalog](../catalog)