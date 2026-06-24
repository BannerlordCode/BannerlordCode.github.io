<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `KingdomClanVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# KingdomClanVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class KingdomClanVM : KingdomCategoryVM`
**Base:** `KingdomCategoryVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Clans/KingdomClanVM.cs`

## Overview

`KingdomClanVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ClanSortController` | `public KingdomClanSortControllerVM ClanSortController { get; set; }` |
| `CurrentSelectedClan` | `public KingdomClanItemVM CurrentSelectedClan { get; set; }` |
| `ExpelActionExplanationText` | `public string ExpelActionExplanationText { get; set; }` |
| `SupportActionExplanationText` | `public string SupportActionExplanationText { get; set; }` |
| `BannerText` | `public string BannerText { get; set; }` |
| `TypeText` | `public string TypeText { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `InfluenceText` | `public string InfluenceText { get; set; }` |
| `FiefsText` | `public string FiefsText { get; set; }` |
| `MembersText` | `public string MembersText { get; set; }` |
| `Clans` | `public MBBindingList<KingdomClanItemVM> Clans { get; set; }` |
| `CanSupportCurrentClan` | `public bool CanSupportCurrentClan { get; set; }` |
| `CanExpelCurrentClan` | `public bool CanExpelCurrentClan { get; set; }` |
| `SupportText` | `public string SupportText { get; set; }` |
| `ExpelActionText` | `public string ExpelActionText { get; set; }` |
| `SupportCost` | `public int SupportCost { get; set; }` |
| `ExpelCost` | `public int ExpelCost { get; set; }` |
| `ExpelHint` | `public HintViewModel ExpelHint { get; set; }` |
| `SupportHint` | `public HintViewModel SupportHint { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### RefreshClan
`public void RefreshClan()`

**Purpose:** Refreshes the display or cache of `clan`.

### SelectClan
`public void SelectClan(Clan clan)`

**Purpose:** Handles logic related to `select clan`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

## Usage Example

```csharp
var value = new KingdomClanVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)