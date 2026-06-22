<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MarriageOfferPopupHeroVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MarriageOfferPopupHeroVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.MarriageOfferPopup
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `MarriageOfferPopupHeroVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MarriageOfferPopup` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


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

```csharp
public void Update()
```

### RefreshValues

```csharp
public override void RefreshValues()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### ExecuteHeroLink

```csharp
public void ExecuteHeroLink()
```

### ExecuteClanLink

```csharp
public void ExecuteClanLink()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)