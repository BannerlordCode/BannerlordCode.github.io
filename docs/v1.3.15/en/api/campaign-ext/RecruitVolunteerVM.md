<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RecruitVolunteerVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RecruitVolunteerVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Recruitment
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `RecruitVolunteerVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Recruitment` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `OwnerHero` | `public Hero OwnerHero { get; }` |
| `VolunteerTroops` | `public List<CharacterObject> VolunteerTroops { get; }` |
| `GoldCost` | `public int GoldCost { get; }` |
| `Troops` | `public MBBindingList<RecruitVolunteerTroopVM> Troops { get; set; }` |
| `Owner` | `public RecruitVolunteerOwnerVM Owner { get; set; }` |
| `CanRecruit` | `public bool CanRecruit { get; set; }` |
| `ButtonIsVisible` | `public bool ButtonIsVisible { get; set; }` |
| `QuantityText` | `public string QuantityText { get; set; }` |
| `RecruitText` | `public string RecruitText { get; set; }` |
| `RecruitHint` | `public HintViewModel RecruitHint { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### ExecuteRecruit

```csharp
public void ExecuteRecruit(RecruitVolunteerTroopVM troop)
```

### ExecuteRemoveFromCart

```csharp
public void ExecuteRemoveFromCart(RecruitVolunteerTroopVM troop)
```

### OnRecruitMoveToCart

```csharp
public void OnRecruitMoveToCart(RecruitVolunteerTroopVM troop)
```

### OnRecruitRemovedFromCart

```csharp
public void OnRecruitRemovedFromCart(RecruitVolunteerTroopVM troop)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)