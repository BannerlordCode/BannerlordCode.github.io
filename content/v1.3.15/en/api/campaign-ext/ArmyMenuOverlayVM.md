---
title: "ArmyMenuOverlayVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ArmyMenuOverlayVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ArmyMenuOverlayVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ArmyMenuOverlayVM : GameMenuOverlay`
**Base:** `GameMenuOverlay`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Overlay/ArmyMenuOverlayVM.cs`

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

**Purpose:** Refreshes the display or cache of `values`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### OnFrameTick
`public override void OnFrameTick(float dt)`

**Purpose:** Called when the `frame tick` event is raised.

### Refresh
`public sealed override void Refresh()`

**Purpose:** Refreshes the display or cache of `refresh`.

### ExecuteOpenArmyManagement
`public void ExecuteOpenArmyManagement()`

**Purpose:** Executes the `open army management` operation or workflow.

## Usage Example

```csharp
var value = new ArmyMenuOverlayVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)