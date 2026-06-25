---
title: "GameMenuVM"
description: "Auto-generated class reference for GameMenuVM."
---
# GameMenuVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GameMenuVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/GameMenuVM.cs`

## Overview

`GameMenuVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `MenuContext` | `public MenuContext MenuContext { get; }` |
| `IsNight` | `public bool IsNight { get; set; }` |
| `IsInSiegeMode` | `public bool IsInSiegeMode { get; set; }` |
| `IsEncounterMenu` | `public bool IsEncounterMenu { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `ContextText` | `public string ContextText { get; set; }` |
| `ItemList` | `public MBBindingList<GameMenuItemVM> ItemList { get; set; }` |
| `ProgressItemList` | `public MBBindingList<GameMenuItemProgressVM> ProgressItemList { get; set; }` |
| `Background` | `public string Background { get; set; }` |
| `MenuId` | `public string MenuId { get; set; }` |
| `PlunderItems` | `public MBBindingList<GameMenuPlunderItemVM> PlunderItems { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of GameMenuVM from the subsystem API first
GameMenuVM gameMenuVM = ...;
gameMenuVM.RefreshValues();
```

### SetIdleMode
`public void SetIdleMode(bool isIdle)`

**Purpose:** Assigns a new value to idle mode and updates the object's internal state.

```csharp
// Obtain an instance of GameMenuVM from the subsystem API first
GameMenuVM gameMenuVM = ...;
gameMenuVM.SetIdleMode(false);
```

### Refresh
`public void Refresh(bool forceUpdateItems)`

**Purpose:** Refreshes the this instance's display or cache to match the underlying state.

```csharp
// Obtain an instance of GameMenuVM from the subsystem API first
GameMenuVM gameMenuVM = ...;
gameMenuVM.Refresh(false);
```

### OnFrameTick
`public void OnFrameTick()`

**Purpose:** Invoked when the frame tick event is raised.

```csharp
// Obtain an instance of GameMenuVM from the subsystem API first
GameMenuVM gameMenuVM = ...;
gameMenuVM.OnFrameTick();
```

### UpdateMenuContext
`public void UpdateMenuContext(MenuContext newMenuContext)`

**Purpose:** Recalculates and stores the latest representation of menu context.

```csharp
// Obtain an instance of GameMenuVM from the subsystem API first
GameMenuVM gameMenuVM = ...;
gameMenuVM.UpdateMenuContext(newMenuContext);
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of GameMenuVM from the subsystem API first
GameMenuVM gameMenuVM = ...;
gameMenuVM.OnFinalize();
```

### AddHotKey
`public void AddHotKey(GameMenuOption.LeaveType leaveType, GameKey gameKey)`

**Purpose:** Adds hot key to the current collection or state.

```csharp
// Obtain an instance of GameMenuVM from the subsystem API first
GameMenuVM gameMenuVM = ...;
gameMenuVM.AddHotKey(leaveType, gameKey);
```

### ExecuteLink
`public void ExecuteLink(string link)`

**Purpose:** Runs the operation or workflow associated with link.

```csharp
// Obtain an instance of GameMenuVM from the subsystem API first
GameMenuVM gameMenuVM = ...;
gameMenuVM.ExecuteLink("example");
```

### Compare
`public int Compare(GameMenuItemVM x, GameMenuItemVM y)`

**Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of GameMenuVM from the subsystem API first
GameMenuVM gameMenuVM = ...;
var result = gameMenuVM.Compare(x, y);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GameMenuVM gameMenuVM = ...;
gameMenuVM.RefreshValues();
```

## See Also

- [Area Index](../)