<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HeirSelectionPopupHeroVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# HeirSelectionPopupHeroVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.HeirSelectionPopup
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `HeirSelectionPopupHeroVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.Map.HeirSelectionPopup` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Hero` | `public Hero Hero { get; }` |
| `Name` | `public string Name { get; set; }` |
| `Age` | `public int Age { get; set; }` |
| `Culture` | `public string Culture { get; set; }` |
| `Occupation` | `public string Occupation { get; set; }` |
| `RelationToMainHero` | `public string RelationToMainHero { get; set; }` |
| `Model` | `public HeroViewModel Model { get; set; }` |
| `ImageIdentifier` | `public CharacterImageIdentifierVM ImageIdentifier { get; set; }` |
| `Traits` | `public MBBindingList<EncyclopediaTraitItemVM> Traits { get; set; }` |
| `Attributes` | `public MBBindingList<MarriageOfferPopupHeroAttributeVM> Attributes { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `OtherSkills` | `public MBBindingList<EncyclopediaSkillVM> OtherSkills { get; set; }` |
| `HasOtherSkills` | `public bool HasOtherSkills { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)