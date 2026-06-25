---
title: "MapNavigationVM"
description: "Auto-generated class reference for MapNavigationVM."
---
# MapNavigationVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MapNavigationVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar/MapNavigationVM.cs`

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

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MapNavigationVM from the subsystem API first
MapNavigationVM mapNavigationVM = ...;
mapNavigationVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of MapNavigationVM from the subsystem API first
MapNavigationVM mapNavigationVM = ...;
mapNavigationVM.OnFinalize();
```

### Refresh
`public void Refresh()`

**Purpose:** Refreshes the this instance's display or cache to match the underlying state.

```csharp
// Obtain an instance of MapNavigationVM from the subsystem API first
MapNavigationVM mapNavigationVM = ...;
mapNavigationVM.Refresh();
```

### Tick
`public void Tick()`

**Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of MapNavigationVM from the subsystem API first
MapNavigationVM mapNavigationVM = ...;
mapNavigationVM.Tick();
```

### ExecuteOpenQuests
`public void ExecuteOpenQuests()`

**Purpose:** Runs the operation or workflow associated with open quests.

```csharp
// Obtain an instance of MapNavigationVM from the subsystem API first
MapNavigationVM mapNavigationVM = ...;
mapNavigationVM.ExecuteOpenQuests();
```

### ExecuteOpenInventory
`public void ExecuteOpenInventory()`

**Purpose:** Runs the operation or workflow associated with open inventory.

```csharp
// Obtain an instance of MapNavigationVM from the subsystem API first
MapNavigationVM mapNavigationVM = ...;
mapNavigationVM.ExecuteOpenInventory();
```

### ExecuteOpenParty
`public void ExecuteOpenParty()`

**Purpose:** Runs the operation or workflow associated with open party.

```csharp
// Obtain an instance of MapNavigationVM from the subsystem API first
MapNavigationVM mapNavigationVM = ...;
mapNavigationVM.ExecuteOpenParty();
```

### ExecuteOpenCharacterDeveloper
`public void ExecuteOpenCharacterDeveloper()`

**Purpose:** Runs the operation or workflow associated with open character developer.

```csharp
// Obtain an instance of MapNavigationVM from the subsystem API first
MapNavigationVM mapNavigationVM = ...;
mapNavigationVM.ExecuteOpenCharacterDeveloper();
```

### ExecuteOpenKingdom
`public void ExecuteOpenKingdom()`

**Purpose:** Runs the operation or workflow associated with open kingdom.

```csharp
// Obtain an instance of MapNavigationVM from the subsystem API first
MapNavigationVM mapNavigationVM = ...;
mapNavigationVM.ExecuteOpenKingdom();
```

### ExecuteOpenClan
`public void ExecuteOpenClan()`

**Purpose:** Runs the operation or workflow associated with open clan.

```csharp
// Obtain an instance of MapNavigationVM from the subsystem API first
MapNavigationVM mapNavigationVM = ...;
mapNavigationVM.ExecuteOpenClan();
```

### ExecuteOpenEscapeMenu
`public void ExecuteOpenEscapeMenu()`

**Purpose:** Runs the operation or workflow associated with open escape menu.

```csharp
// Obtain an instance of MapNavigationVM from the subsystem API first
MapNavigationVM mapNavigationVM = ...;
mapNavigationVM.ExecuteOpenEscapeMenu();
```

### ExecuteOpenMainHeroKingdomEncyclopedia
`public void ExecuteOpenMainHeroKingdomEncyclopedia()`

**Purpose:** Runs the operation or workflow associated with open main hero kingdom encyclopedia.

```csharp
// Obtain an instance of MapNavigationVM from the subsystem API first
MapNavigationVM mapNavigationVM = ...;
mapNavigationVM.ExecuteOpenMainHeroKingdomEncyclopedia();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MapNavigationVM mapNavigationVM = ...;
mapNavigationVM.RefreshValues();
```

## See Also

- [Area Index](../)