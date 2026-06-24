<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MarriageOfferPopupHeroVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MarriageOfferPopupHeroVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.MarriageOfferPopup
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MarriageOfferPopupHeroVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MarriageOfferPopup/MarriageOfferPopupHeroVM.cs`

## Overview

`MarriageOfferPopupHeroVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MarriageOfferPopup` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MarriageOfferPopup` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Hero` | `public Hero Hero { get; }` |
| `EncyclopediaLinkWithName` | `public string EncyclopediaLinkWithName { get; set; }` |
| `AgeString` | `public string AgeString { get; set; }` |
| `OccupationString` | `public string OccupationString { get; set; }` |
| `Relation` | `public int Relation { get; set; }` |
| `ClanName` | `public string ClanName { get; set; }` |
| `ClanBanner` | `public BannerImageIdentifierVM ClanBanner { get; set; }` |
| `Model` | `public HeroViewModel Model { get; set; }` |
| `Traits` | `public MBBindingList<EncyclopediaTraitItemVM> Traits { get; set; }` |
| `Attributes` | `public MBBindingList<MarriageOfferPopupHeroAttributeVM> Attributes { get; set; }` |
| `OtherSkills` | `public MBBindingList<EncyclopediaSkillVM> OtherSkills { get; set; }` |
| `HasOtherSkills` | `public bool HasOtherSkills { get; set; }` |

## Key Methods

### Update
`public void Update()`

**Purpose:** Updates the state or data of `update`.

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### ExecuteHeroLink
`public void ExecuteHeroLink()`

**Purpose:** Executes the `hero link` operation or workflow.

### ExecuteClanLink
`public void ExecuteClanLink()`

**Purpose:** Executes the `clan link` operation or workflow.

## Usage Example

```csharp
var value = new MarriageOfferPopupHeroVM();
value.Update();
```

## See Also

- [Complete Class Catalog](../catalog)