---
title: "MapNavigationVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapNavigationVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MapNavigationVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MapNavigationVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapNavigationVM.cs`

## Overview

`MapNavigationVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `NavigationItems` | `public MBBindingList<MapNavigationItemVM> NavigationItems { get; set; }` |
| `FinanceHint` | `public HintViewModel FinanceHint { get; set; }` |
| `EncyclopediaHint` | `public HintViewModel EncyclopediaHint { get; set; }` |
| `CenterCameraHint` | `public HintViewModel CenterCameraHint { get; set; }` |
| `CampHint` | `public HintViewModel CampHint { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### Refresh
`public void Refresh()`

**Purpose:** Refreshes the display or cache of `refresh`.

### Tick
`public void Tick()`

**Purpose:** Handles logic related to `tick`.

### ExecuteOpenQuests
`public void ExecuteOpenQuests()`

**Purpose:** Executes the `open quests` operation or workflow.

### ExecuteOpenInventory
`public void ExecuteOpenInventory()`

**Purpose:** Executes the `open inventory` operation or workflow.

### ExecuteOpenParty
`public void ExecuteOpenParty()`

**Purpose:** Executes the `open party` operation or workflow.

### ExecuteOpenCharacterDeveloper
`public void ExecuteOpenCharacterDeveloper()`

**Purpose:** Executes the `open character developer` operation or workflow.

### ExecuteOpenKingdom
`public void ExecuteOpenKingdom()`

**Purpose:** Executes the `open kingdom` operation or workflow.

### ExecuteOpenClan
`public void ExecuteOpenClan()`

**Purpose:** Executes the `open clan` operation or workflow.

### ExecuteOpenEscapeMenu
`public void ExecuteOpenEscapeMenu()`

**Purpose:** Executes the `open escape menu` operation or workflow.

### ExecuteOpenMainHeroEncyclopedia
`public void ExecuteOpenMainHeroEncyclopedia()`

**Purpose:** Executes the `open main hero encyclopedia` operation or workflow.

### ExecuteOpenMainHeroClanEncyclopedia
`public void ExecuteOpenMainHeroClanEncyclopedia()`

**Purpose:** Executes the `open main hero clan encyclopedia` operation or workflow.

### ExecuteOpenMainHeroKingdomEncyclopedia
`public void ExecuteOpenMainHeroKingdomEncyclopedia()`

**Purpose:** Executes the `open main hero kingdom encyclopedia` operation or workflow.

## Usage Example

```csharp
var value = new MapNavigationVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)