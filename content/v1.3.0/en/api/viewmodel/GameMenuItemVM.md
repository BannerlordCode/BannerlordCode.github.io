---
title: "GameMenuItemVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameMenuItemVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GameMenuItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GameMenuItemVM : BindingListStringItem`
**Base:** `BindingListStringItem`
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
| `BattleSize` | `public int BattleSize { get; set; }` |
| `IsNavalBattle` | `public bool IsNavalBattle { get; set; }` |
| `ShortcutKey` | `public InputKeyItemVM ShortcutKey { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### ExecuteAction
`public void ExecuteAction()`

**Purpose:** Executes the `action` operation or workflow.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### Refresh
`public void Refresh()`

**Purpose:** Refreshes the display or cache of `refresh`.

### UpdateWith
`public void UpdateWith(GameMenuItemVM newItem)`

**Purpose:** Updates the state or data of `with`.

## Usage Example

```csharp
var value = new GameMenuItemVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)