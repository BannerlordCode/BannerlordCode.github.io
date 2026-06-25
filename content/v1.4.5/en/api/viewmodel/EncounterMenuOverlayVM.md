---
title: "EncounterMenuOverlayVM"
description: "Auto-generated class reference for EncounterMenuOverlayVM."
---
# EncounterMenuOverlayVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncounterMenuOverlayVM : GameMenuOverlay`
**Base:** `GameMenuOverlay`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay/EncounterMenuOverlayVM.cs`

## Overview

`EncounterMenuOverlayVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TitleText` | `public string TitleText { get; set; }` |
| `DefenderPartyBanner` | `public BannerImageIdentifierVM DefenderPartyBanner { get; set; }` |
| `AttackerPartyBanner` | `public BannerImageIdentifierVM AttackerPartyBanner { get; set; }` |
| `PowerComparer` | `public PowerLevelComparer PowerComparer { get; set; }` |
| `AttackerPartyList` | `public MBBindingList<GameMenuPartyItemVM> AttackerPartyList { get; set; }` |
| `DefenderPartyList` | `public MBBindingList<GameMenuPartyItemVM> DefenderPartyList { get; set; }` |
| `DefenderPartyMorale` | `public string DefenderPartyMorale { get; set; }` |
| `AttackerPartyMorale` | `public string AttackerPartyMorale { get; set; }` |
| `DefenderPartyCount` | `public int DefenderPartyCount { get; set; }` |
| `AttackerPartyCount` | `public int AttackerPartyCount { get; set; }` |
| `DefenderShipCount` | `public int DefenderShipCount { get; set; }` |
| `AttackerShipCount` | `public int AttackerShipCount { get; set; }` |
| `DefenderPartyFood` | `public string DefenderPartyFood { get; set; }` |
| `AttackerPartyFood` | `public string AttackerPartyFood { get; set; }` |
| `DefenderWallHitPoints` | `public string DefenderWallHitPoints { get; set; }` |
| `IsNaval` | `public bool IsNaval { get; set; }` |
| `IsSiege` | `public bool IsSiege { get; set; }` |
| `DefenderPartyCountLbl` | `public string DefenderPartyCountLbl { get; set; }` |
| `AttackerPartyCountLbl` | `public string AttackerPartyCountLbl { get; set; }` |
| `AttackerBannerHint` | `public HintViewModel AttackerBannerHint { get; set; }` |
| `DefenderBannerHint` | `public HintViewModel DefenderBannerHint { get; set; }` |
| `AttackerTroopNumHint` | `public BasicTooltipViewModel AttackerTroopNumHint { get; set; }` |
| `DefenderTroopNumHint` | `public BasicTooltipViewModel DefenderTroopNumHint { get; set; }` |
| `AttackerShipNumHint` | `public BasicTooltipViewModel AttackerShipNumHint { get; set; }` |
| `DefenderShipNumHint` | `public BasicTooltipViewModel DefenderShipNumHint { get; set; }` |
| `DefenderWallHint` | `public BasicTooltipViewModel DefenderWallHint { get; set; }` |
| `DefenderFoodHint` | `public BasicTooltipViewModel DefenderFoodHint { get; set; }` |
| `AttackerFoodHint` | `public BasicTooltipViewModel AttackerFoodHint { get; set; }` |
| `AttackerMoraleHint` | `public BasicTooltipViewModel AttackerMoraleHint { get; set; }` |
| `DefenderMoraleHint` | `public BasicTooltipViewModel DefenderMoraleHint { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of EncounterMenuOverlayVM from the subsystem API first
EncounterMenuOverlayVM encounterMenuOverlayVM = ...;
encounterMenuOverlayVM.RefreshValues();
```

### OnFrameTick
`public override void OnFrameTick(float dt)`

**Purpose:** Invoked when the frame tick event is raised.

```csharp
// Obtain an instance of EncounterMenuOverlayVM from the subsystem API first
EncounterMenuOverlayVM encounterMenuOverlayVM = ...;
encounterMenuOverlayVM.OnFrameTick(0);
```

### Refresh
`public override void Refresh()`

**Purpose:** Refreshes the this instance's display or cache to match the underlying state.

```csharp
// Obtain an instance of EncounterMenuOverlayVM from the subsystem API first
EncounterMenuOverlayVM encounterMenuOverlayVM = ...;
encounterMenuOverlayVM.Refresh();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
EncounterMenuOverlayVM encounterMenuOverlayVM = ...;
encounterMenuOverlayVM.RefreshValues();
```

## See Also

- [Area Index](../)