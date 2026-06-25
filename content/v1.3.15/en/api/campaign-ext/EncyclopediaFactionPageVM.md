---
title: "EncyclopediaFactionPageVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EncyclopediaFactionPageVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EncyclopediaFactionPageVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaFactionPageVM : EncyclopediaContentPageVM`
**Base:** `EncyclopediaContentPageVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Pages/EncyclopediaFactionPageVM.cs`

## Overview

`EncyclopediaFactionPageVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Clans` | `public MBBindingList<EncyclopediaFactionVM> Clans { get; set; }` |
| `Enemies` | `public MBBindingList<EncyclopediaFactionVM> Enemies { get; set; }` |
| `TradeAgreements` | `public MBBindingList<EncyclopediaFactionVM> TradeAgreements { get; set; }` |
| `Alliances` | `public MBBindingList<EncyclopediaFactionVM> Alliances { get; set; }` |
| `Settlements` | `public MBBindingList<EncyclopediaSettlementVM> Settlements { get; set; }` |
| `History` | `public MBBindingList<EncyclopediaHistoryEventVM> History { get; set; }` |
| `Leader` | `public HeroVM Leader { get; set; }` |
| `Banner` | `public BannerImageIdentifierVM Banner { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `MembersText` | `public string MembersText { get; set; }` |
| `EnemiesText` | `public string EnemiesText { get; set; }` |
| `TradeAgreementsText` | `public string TradeAgreementsText { get; set; }` |
| `AlliancesText` | `public string AlliancesText { get; set; }` |
| `ClansText` | `public string ClansText { get; set; }` |
| `SettlementsText` | `public string SettlementsText { get; set; }` |
| `VillagesText` | `public string VillagesText { get; set; }` |
| `LeaderText` | `public string LeaderText { get; set; }` |
| `DescriptorText` | `public string DescriptorText { get; set; }` |
| `InformationText` | `public string InformationText { get; set; }` |
| `ProsperityText` | `public string ProsperityText { get; set; }` |
| `StrengthText` | `public string StrengthText { get; set; }` |
| `ProsperityHint` | `public HintViewModel ProsperityHint { get; set; }` |
| `StrengthHint` | `public HintViewModel StrengthHint { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### Refresh
`public override void Refresh()`

**Purpose:** Refreshes the display or cache of `refresh`.

### GetName
`public override string GetName()`

**Purpose:** Gets the current value of `name`.

### GetNavigationBarURL
`public override string GetNavigationBarURL()`

**Purpose:** Gets the current value of `navigation bar u r l`.

### ExecuteSwitchBookmarkedState
`public override void ExecuteSwitchBookmarkedState()`

**Purpose:** Executes the `switch bookmarked state` operation or workflow.

## Usage Example

```csharp
var value = new EncyclopediaFactionPageVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)