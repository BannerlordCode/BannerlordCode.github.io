---
title: "GameMenuPartyItemVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameMenuPartyItemVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GameMenuPartyItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GameMenuPartyItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Overlay/GameMenuPartyItemVM.cs`

## Overview

`GameMenuPartyItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Relation` | `public int Relation { get; set; }` |
| `Quests` | `public MBBindingList<QuestMarkerVM> Quests { get; set; }` |
| `IsHighlightEnabled` | `public bool IsHighlightEnabled { get; set; }` |
| `IsCharacterInPrison` | `public bool IsCharacterInPrison { get; set; }` |
| `HasShips` | `public bool HasShips { get; set; }` |
| `IsIdle` | `public bool IsIdle { get; set; }` |
| `IsPlayer` | `public bool IsPlayer { get; set; }` |
| `IsEnemy` | `public bool IsEnemy { get; set; }` |
| `IsAlly` | `public bool IsAlly { get; set; }` |
| `IsNeutral` | `public bool IsNeutral { get; set; }` |
| `IsMergedWithArmy` | `public bool IsMergedWithArmy { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `SettlementPath` | `public string SettlementPath { get; set; }` |
| `LocationText` | `public string LocationText { get; set; }` |
| `PowerText` | `public string PowerText { get; set; }` |
| `DescriptionText` | `public string DescriptionText { get; set; }` |
| `ProfessionText` | `public string ProfessionText { get; set; }` |
| `EncyclopediaCursorEffect` | `public string EncyclopediaCursorEffect { get; set; }` |
| `Visual` | `public CharacterImageIdentifierVM Visual { get; set; }` |
| `Banner_9` | `public BannerImageIdentifierVM Banner_9 { get; set; }` |
| `PartySize` | `public int PartySize { get; set; }` |
| `PartyWoundedSize` | `public int PartyWoundedSize { get; set; }` |
| `ShipCount` | `public int ShipCount { get; set; }` |
| `PartySizeLbl` | `public string PartySizeLbl { get; set; }` |
| `IsLeader` | `public bool IsLeader { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### ExecuteSetAsContextMenuItem
`public void ExecuteSetAsContextMenuItem()`

**Purpose:** Executes the `set as context menu item` operation or workflow.

### ExecuteOpenEncyclopedia
`public void ExecuteOpenEncyclopedia()`

**Purpose:** Executes the `open encyclopedia` operation or workflow.

### ExecuteCloseTooltip
`public void ExecuteCloseTooltip()`

**Purpose:** Executes the `close tooltip` operation or workflow.

### ExecuteOpenTooltip
`public void ExecuteOpenTooltip()`

**Purpose:** Executes the `open tooltip` operation or workflow.

### RefreshProperties
`public void RefreshProperties()`

**Purpose:** Refreshes the display or cache of `properties`.

### RefreshQuestStatus
`public void RefreshQuestStatus()`

**Purpose:** Refreshes the display or cache of `quest status`.

### RefreshVisual
`public void RefreshVisual()`

**Purpose:** Refreshes the display or cache of `visual`.

### RefreshCounts
`public void RefreshCounts()`

**Purpose:** Refreshes the display or cache of `counts`.

### GetPartyDescriptionTextFromValues
`public string GetPartyDescriptionTextFromValues()`

**Purpose:** Gets the current value of `party description text from values`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### Compare
`public int Compare(QuestMarkerVM x, QuestMarkerVM y)`

**Purpose:** Handles logic related to `compare`.

## Usage Example

```csharp
var value = new GameMenuPartyItemVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)