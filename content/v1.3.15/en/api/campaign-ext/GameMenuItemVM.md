---
title: "GameMenuItemVM"
description: "Auto-generated class reference for GameMenuItemVM."
---
# GameMenuItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GameMenuItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/GameMenuItemVM.cs`

## Overview

`GameMenuItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `OptionID` | `public string OptionID { get; }` |
| `GameMenuOption` | `public GameMenuOption GameMenuOption { get; }` |
| `Quests` | `public MBBindingList<QuestMarkerVM> Quests { get; set; }` |
| `OptionLeaveType` | `public string OptionLeaveType { get; set; }` |
| `ItemType` | `public int ItemType { get; set; }` |
| `IsWaitActive` | `public bool IsWaitActive { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsHighlightEnabled` | `public bool IsHighlightEnabled { get; set; }` |
| `ItemHint` | `public HintViewModel ItemHint { get; set; }` |
| `QuestHint` | `public HintViewModel QuestHint { get; set; }` |
| `IssueHint` | `public HintViewModel IssueHint { get; set; }` |
| `GameMenuStringId` | `public string GameMenuStringId { get; set; }` |
| `Item` | `public string Item { get; set; }` |
| `BattleSize` | `public int BattleSize { get; set; }` |
| `IsNavalBattle` | `public bool IsNavalBattle { get; set; }` |
| `ShortcutKey` | `public InputKeyItemVM ShortcutKey { get; set; }` |
| `OptionID` | `public string OptionID { get; }` |

## Key Methods

### InitializeWith
`public void InitializeWith(in GameMenuItemVM.GameMenuItemCreationData data)`

**Purpose:** Prepares the resources, state, or bindings required by with.

```csharp
// Obtain an instance of GameMenuItemVM from the subsystem API first
GameMenuItemVM gameMenuItemVM = ...;
gameMenuItemVM.InitializeWith(data);
```

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of GameMenuItemVM from the subsystem API first
GameMenuItemVM gameMenuItemVM = ...;
gameMenuItemVM.RefreshValues();
```

### ExecuteAction
`public void ExecuteAction()`

**Purpose:** Runs the operation or workflow associated with action.

```csharp
// Obtain an instance of GameMenuItemVM from the subsystem API first
GameMenuItemVM gameMenuItemVM = ...;
gameMenuItemVM.ExecuteAction();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of GameMenuItemVM from the subsystem API first
GameMenuItemVM gameMenuItemVM = ...;
gameMenuItemVM.OnFinalize();
```

### Refresh
`public void Refresh()`

**Purpose:** Refreshes the this instance's display or cache to match the underlying state.

```csharp
// Obtain an instance of GameMenuItemVM from the subsystem API first
GameMenuItemVM gameMenuItemVM = ...;
gameMenuItemVM.Refresh();
```

### UpdateWith
`public void UpdateWith(GameMenuItemVM newItem)`

**Purpose:** Recalculates and stores the latest representation of with.

```csharp
// Obtain an instance of GameMenuItemVM from the subsystem API first
GameMenuItemVM gameMenuItemVM = ...;
gameMenuItemVM.UpdateWith(newItem);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GameMenuItemVM gameMenuItemVM = ...;
gameMenuItemVM.InitializeWith(data);
```

## See Also

- [Area Index](../)