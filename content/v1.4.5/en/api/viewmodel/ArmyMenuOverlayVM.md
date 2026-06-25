---
title: "ArmyMenuOverlayVM"
description: "Auto-generated class reference for ArmyMenuOverlayVM."
---
# ArmyMenuOverlayVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ArmyMenuOverlayVM : GameMenuOverlay`
**Base:** `GameMenuOverlay`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay/ArmyMenuOverlayVM.cs`

## Overview

`ArmyMenuOverlayVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TutorialNotification` | `public ElementNotificationVM TutorialNotification { get; set; }` |
| `ManageArmyHint` | `public HintViewModel ManageArmyHint { get; set; }` |
| `Cohesion` | `public int Cohesion { get; set; }` |
| `IsCohesionWarningEnabled` | `public bool IsCohesionWarningEnabled { get; set; }` |
| `CanManageArmy` | `public bool CanManageArmy { get; set; }` |
| `IsPlayerArmyLeader` | `public bool IsPlayerArmyLeader { get; set; }` |
| `ManCountText` | `public string ManCountText { get; set; }` |
| `Food` | `public int Food { get; set; }` |
| `PartyList` | `public MBBindingList<GameMenuPartyItemVM> PartyList { get; set; }` |
| `CohesionHint` | `public BasicTooltipViewModel CohesionHint { get; set; }` |
| `ManCountHint` | `public BasicTooltipViewModel ManCountHint { get; set; }` |
| `FoodHint` | `public BasicTooltipViewModel FoodHint { get; set; }` |
| `IssueList` | `public MBBindingList<StringItemWithHintVM> IssueList { get; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of ArmyMenuOverlayVM from the subsystem API first
ArmyMenuOverlayVM armyMenuOverlayVM = ...;
armyMenuOverlayVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of ArmyMenuOverlayVM from the subsystem API first
ArmyMenuOverlayVM armyMenuOverlayVM = ...;
armyMenuOverlayVM.OnFinalize();
```

### OnFrameTick
`public override void OnFrameTick(float dt)`

**Purpose:** Invoked when the frame tick event is raised.

```csharp
// Obtain an instance of ArmyMenuOverlayVM from the subsystem API first
ArmyMenuOverlayVM armyMenuOverlayVM = ...;
armyMenuOverlayVM.OnFrameTick(0);
```

### Refresh
`public sealed override void Refresh()`

**Purpose:** Refreshes the this instance's display or cache to match the underlying state.

```csharp
// Obtain an instance of ArmyMenuOverlayVM from the subsystem API first
ArmyMenuOverlayVM armyMenuOverlayVM = ...;
armyMenuOverlayVM.Refresh();
```

### ExecuteOpenArmyManagement
`public void ExecuteOpenArmyManagement()`

**Purpose:** Runs the operation or workflow associated with open army management.

```csharp
// Obtain an instance of ArmyMenuOverlayVM from the subsystem API first
ArmyMenuOverlayVM armyMenuOverlayVM = ...;
armyMenuOverlayVM.ExecuteOpenArmyManagement();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ArmyMenuOverlayVM armyMenuOverlayVM = ...;
armyMenuOverlayVM.RefreshValues();
```

## See Also

- [Area Index](../)