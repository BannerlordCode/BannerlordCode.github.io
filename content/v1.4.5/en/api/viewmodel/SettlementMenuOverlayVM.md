---
title: "SettlementMenuOverlayVM"
description: "Auto-generated class reference for SettlementMenuOverlayVM."
---
# SettlementMenuOverlayVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SettlementMenuOverlayVM : GameMenuOverlay`
**Base:** `GameMenuOverlay`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay/SettlementMenuOverlayVM.cs`

## Overview

`SettlementMenuOverlayVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CardSelectionPopup` | `public ClanCardSelectionPopupVM CardSelectionPopup { get; set; }` |
| `RemainingFoodText` | `public string RemainingFoodText { get; set; }` |
| `ProsperityChangeAmount` | `public int ProsperityChangeAmount { get; set; }` |
| `MilitiaChangeAmount` | `public int MilitiaChangeAmount { get; set; }` |
| `GarrisonChangeAmount` | `public int GarrisonChangeAmount { get; set; }` |
| `GarrisonAmount` | `public int GarrisonAmount { get; set; }` |
| `CrimeChangeAmount` | `public int CrimeChangeAmount { get; set; }` |
| `LoyaltyChangeAmount` | `public int LoyaltyChangeAmount { get; set; }` |
| `SecurityChangeAmount` | `public int SecurityChangeAmount { get; set; }` |
| `FoodChangeAmount` | `public int FoodChangeAmount { get; set; }` |
| `RemainingFoodHint` | `public BasicTooltipViewModel RemainingFoodHint { get; set; }` |
| `SecurityHint` | `public BasicTooltipViewModel SecurityHint { get; set; }` |
| `PartyFilterHint` | `public HintViewModel PartyFilterHint { get; set; }` |
| `CharacterFilterHint` | `public HintViewModel CharacterFilterHint { get; set; }` |
| `MilitasHint` | `public BasicTooltipViewModel MilitasHint { get; set; }` |
| `GarrisonHint` | `public BasicTooltipViewModel GarrisonHint { get; set; }` |
| `ProsperityHint` | `public BasicTooltipViewModel ProsperityHint { get; set; }` |
| `LoyaltyHint` | `public BasicTooltipViewModel LoyaltyHint { get; set; }` |
| `WallsHint` | `public BasicTooltipViewModel WallsHint { get; set; }` |
| `CrimeHint` | `public BasicTooltipViewModel CrimeHint { get; set; }` |
| `AssignMembersHint` | `public HintViewModel AssignMembersHint { get; set; }` |
| `SettlementOwnerBanner` | `public BannerImageIdentifierVM SettlementOwnerBanner { get; set; }` |
| `CharacterList` | `public MBBindingList<GameMenuPartyItemVM> CharacterList { get; set; }` |
| `PartyList` | `public MBBindingList<GameMenuPartyItemVM> PartyList { get; set; }` |
| `IssueList` | `public MBBindingList<StringItemWithHintVM> IssueList { get; set; }` |
| `MilitasLbl` | `public string MilitasLbl { get; set; }` |
| `GarrisonLbl` | `public string GarrisonLbl { get; set; }` |
| `CrimeLbl` | `public string CrimeLbl { get; set; }` |
| `CanAssignMembers` | `public bool CanAssignMembers { get; set; }` |
| `ProsperityLbl` | `public string ProsperityLbl { get; set; }` |
| `LoyaltyLbl` | `public string LoyaltyLbl { get; set; }` |
| `SecurityLbl` | `public string SecurityLbl { get; set; }` |
| `WallsLbl` | `public string WallsLbl { get; set; }` |
| `WallsLevel` | `public int WallsLevel { get; set; }` |
| `SettlementNameLbl` | `public string SettlementNameLbl { get; set; }` |
| `IsFortification` | `public bool IsFortification { get; set; }` |
| `IsCrimeEnabled` | `public bool IsCrimeEnabled { get; set; }` |
| `IsNoGarrisonWarning` | `public bool IsNoGarrisonWarning { get; set; }` |
| `IsCrimeLabelHighlightEnabled` | `public bool IsCrimeLabelHighlightEnabled { get; set; }` |
| `IsLoyaltyRebellionWarning` | `public bool IsLoyaltyRebellionWarning { get; set; }` |
| `IsShipyardEnabled` | `public bool IsShipyardEnabled { get; set; }` |
| `ShipyardLbl` | `public string ShipyardLbl { get; set; }` |
| `ShipyardHint` | `public BasicTooltipViewModel ShipyardHint { get; set; }` |

## Key Methods

### Compare
`public int Compare(GameMenuPartyItemVM x, GameMenuPartyItemVM y)`

**Purpose:** Compares the current object with another instance for ordering.

```csharp
// Obtain an instance of SettlementMenuOverlayVM from the subsystem API first
SettlementMenuOverlayVM settlementMenuOverlayVM = ...;
var result = settlementMenuOverlayVM.Compare(x, y);
```

### Compare
`public int Compare(GameMenuPartyItemVM x, GameMenuPartyItemVM y)`

**Purpose:** Compares the current object with another instance for ordering.

```csharp
// Obtain an instance of SettlementMenuOverlayVM from the subsystem API first
SettlementMenuOverlayVM settlementMenuOverlayVM = ...;
var result = settlementMenuOverlayVM.Compare(x, y);
```

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of SettlementMenuOverlayVM from the subsystem API first
SettlementMenuOverlayVM settlementMenuOverlayVM = ...;
settlementMenuOverlayVM.RefreshValues();
```

### ExecuteOnOverlayClosed
`public override void ExecuteOnOverlayClosed()`

**Purpose:** Runs the operation or workflow associated with `on overlay closed`.

```csharp
// Obtain an instance of SettlementMenuOverlayVM from the subsystem API first
SettlementMenuOverlayVM settlementMenuOverlayVM = ...;
settlementMenuOverlayVM.ExecuteOnOverlayClosed();
```

### UpdateOverlayType
`public override void UpdateOverlayType(TaleWorlds.CampaignSystem.GameMenus.GameMenu.MenuOverlayType newType)`

**Purpose:** Recalculates and stores the latest representation of `overlay type`.

```csharp
// Obtain an instance of SettlementMenuOverlayVM from the subsystem API first
SettlementMenuOverlayVM settlementMenuOverlayVM = ...;
settlementMenuOverlayVM.UpdateOverlayType(newType);
```

### Refresh
`public override void Refresh()`

**Purpose:** Refreshes the current object's display or cache to match the underlying state.

```csharp
// Obtain an instance of SettlementMenuOverlayVM from the subsystem API first
SettlementMenuOverlayVM settlementMenuOverlayVM = ...;
settlementMenuOverlayVM.Refresh();
```

### ExecuteAddCompanion
`public void ExecuteAddCompanion()`

**Purpose:** Runs the operation or workflow associated with `add companion`.

```csharp
// Obtain an instance of SettlementMenuOverlayVM from the subsystem API first
SettlementMenuOverlayVM settlementMenuOverlayVM = ...;
settlementMenuOverlayVM.ExecuteAddCompanion();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the `finalize` event is raised.

```csharp
// Obtain an instance of SettlementMenuOverlayVM from the subsystem API first
SettlementMenuOverlayVM settlementMenuOverlayVM = ...;
settlementMenuOverlayVM.OnFinalize();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SettlementMenuOverlayVM settlementMenuOverlayVM = ...;
settlementMenuOverlayVM.Compare(x, y);
```

## See Also

- [Area Index](../)