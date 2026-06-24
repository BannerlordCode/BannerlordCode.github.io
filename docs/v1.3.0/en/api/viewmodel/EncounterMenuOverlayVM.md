<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EncounterMenuOverlayVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# EncounterMenuOverlayVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncounterMenuOverlayVM : GameMenuOverlay`
**Base:** `GameMenuOverlay`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Overlay/EncounterMenuOverlayVM.cs`

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
| `IsSiege` | `public bool IsSiege { get; set; }` |
| `DefenderPartyCountLbl` | `public string DefenderPartyCountLbl { get; set; }` |
| `AttackerPartyCountLbl` | `public string AttackerPartyCountLbl { get; set; }` |
| `AttackerBannerHint` | `public HintViewModel AttackerBannerHint { get; set; }` |
| `DefenderBannerHint` | `public HintViewModel DefenderBannerHint { get; set; }` |
| `AttackerTroopNumHint` | `public HintViewModel AttackerTroopNumHint { get; set; }` |
| `DefenderTroopNumHint` | `public HintViewModel DefenderTroopNumHint { get; set; }` |
| `AttackerShipNumHint` | `public HintViewModel AttackerShipNumHint { get; set; }` |
| `DefenderShipNumHint` | `public HintViewModel DefenderShipNumHint { get; set; }` |
| `DefenderWallHint` | `public BasicTooltipViewModel DefenderWallHint { get; set; }` |
| `DefenderFoodHint` | `public BasicTooltipViewModel DefenderFoodHint { get; set; }` |
| `AttackerFoodHint` | `public BasicTooltipViewModel AttackerFoodHint { get; set; }` |
| `AttackerMoraleHint` | `public BasicTooltipViewModel AttackerMoraleHint { get; set; }` |
| `DefenderMoraleHint` | `public BasicTooltipViewModel DefenderMoraleHint { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### OnFrameTick
`public override void OnFrameTick(float dt)`

**Purpose:** Called when the `frame tick` event is raised.

### Refresh
`public override void Refresh()`

**Purpose:** Refreshes the display or cache of `refresh`.

## Usage Example

```csharp
var value = new EncounterMenuOverlayVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)