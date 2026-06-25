---
title: "GameMenuVM"
description: "Auto-generated class reference for GameMenuVM."
---
# GameMenuVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GameMenuVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu/GameMenuVM.cs`

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
| `BackgroundCopy` | `public string BackgroundCopy { get; set; }` |
| `MenuId` | `public string MenuId { get; set; }` |
| `PlunderItems` | `public MBBindingList<GameMenuPlunderItemVM> PlunderItems { get; set; }` |

## Key Methods

### Get
`public TItem Get()`

**Purpose:** **Purpose:** Reads the this instance's value or state and returns it.

```csharp
// Obtain an instance of GameMenuVM from the subsystem API first
GameMenuVM gameMenuVM = ...;
var result = gameMenuVM.Get();
```

### Release
`public void Release(TItem item)`

**Purpose:** **Purpose:** Executes the Release logic.

```csharp
// Obtain an instance of GameMenuVM from the subsystem API first
GameMenuVM gameMenuVM = ...;
gameMenuVM.Release(item);
```

### Compare
`public int Compare(GameMenuItemVM x, GameMenuItemVM y)`

**Purpose:** **Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of GameMenuVM from the subsystem API first
GameMenuVM gameMenuVM = ...;
var result = gameMenuVM.Compare(x, y);
```

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of GameMenuVM from the subsystem API first
GameMenuVM gameMenuVM = ...;
gameMenuVM.RefreshValues();
```

### SetIdleMode
`public void SetIdleMode(bool isIdle)`

**Purpose:** **Purpose:** Assigns a new value to idle mode and updates the object's internal state.

```csharp
// Obtain an instance of GameMenuVM from the subsystem API first
GameMenuVM gameMenuVM = ...;
gameMenuVM.SetIdleMode(false);
```

### Refresh
`public void Refresh(bool forceUpdateItems)`

**Purpose:** **Purpose:** Refreshes the this instance's display or cache to match the underlying state.

```csharp
// Obtain an instance of GameMenuVM from the subsystem API first
GameMenuVM gameMenuVM = ...;
gameMenuVM.Refresh(false);
```

### OnFrameTick
`public void OnFrameTick()`

**Purpose:** **Purpose:** Invoked when the frame tick event is raised.

```csharp
// Obtain an instance of GameMenuVM from the subsystem API first
GameMenuVM gameMenuVM = ...;
gameMenuVM.OnFrameTick();
```

### UpdateMenuContext
`public void UpdateMenuContext(MenuContext newMenuContext)`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of menu context.

```csharp
// Obtain an instance of GameMenuVM from the subsystem API first
GameMenuVM gameMenuVM = ...;
gameMenuVM.UpdateMenuContext(newMenuContext);
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** **Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of GameMenuVM from the subsystem API first
GameMenuVM gameMenuVM = ...;
gameMenuVM.OnFinalize();
```

### SetLeaveHotKey
`public void SetLeaveHotKey(GameKey gameKey)`

**Purpose:** **Purpose:** Assigns a new value to leave hot key and updates the object's internal state.

```csharp
// Obtain an instance of GameMenuVM from the subsystem API first
GameMenuVM gameMenuVM = ...;
gameMenuVM.SetLeaveHotKey(gameKey);
```

### ExecuteLink
`public void ExecuteLink(string link)`

**Purpose:** **Purpose:** Runs the operation or workflow associated with link.

```csharp
// Obtain an instance of GameMenuVM from the subsystem API first
GameMenuVM gameMenuVM = ...;
gameMenuVM.ExecuteLink("example");
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GameMenuVM gameMenuVM = ...;
gameMenuVM.Get();
```

## See Also

- [Area Index](../)