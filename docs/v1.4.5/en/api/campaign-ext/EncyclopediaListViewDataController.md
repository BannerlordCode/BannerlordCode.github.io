<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EncyclopediaListViewDataController`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# EncyclopediaListViewDataController

**Namespace:** SandBox.GauntletUI.Encyclopedia
**Module:** SandBox.GauntletUI
**Type:** `public class EncyclopediaListViewDataController`
**Base:** none
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI.Encyclopedia/EncyclopediaListViewDataController.cs`

## Overview

`EncyclopediaListViewDataController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `EncyclopediaListViewDataController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### SaveListData
`public void SaveListData(EncyclopediaListVM list, string id)`

**Purpose:** Saves `list data` data.

### LoadListData
`public void LoadListData(EncyclopediaListVM list)`

**Purpose:** Loads `list data` data.

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<EncyclopediaListViewDataController>();
```

## See Also

- [Complete Class Catalog](../catalog)