<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CraftingOrderItemVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CraftingOrderItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign.Order
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `CraftingOrderItemVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign.Order` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `CraftingOrder` | `public CraftingOrder CraftingOrder { get; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `HasAvailableHeroes` | `public bool HasAvailableHeroes { get; set; }` |
| `IsDifficultySuitableForHero` | `public bool IsDifficultySuitableForHero { get; set; }` |
| `IsQuestOrder` | `public bool IsQuestOrder { get; set; }` |
| `OrderPrice` | `public int OrderPrice { get; set; }` |
| `OrderDifficultyLabelText` | `public string OrderDifficultyLabelText { get; set; }` |
| `OrderDifficultyValueText` | `public string OrderDifficultyValueText { get; set; }` |
| `OrderNumberText` | `public string OrderNumberText { get; set; }` |
| `OrderWeaponType` | `public string OrderWeaponType { get; set; }` |
| `OrderWeaponTypeCode` | `public string OrderWeaponTypeCode { get; set; }` |
| `OrderOwnerData` | `public HeroVM OrderOwnerData { get; set; }` |
| `DisabledReasonHint` | `public BasicTooltipViewModel DisabledReasonHint { get; set; }` |
| `Quests` | `public MBBindingList<QuestMarkerVM> Quests { get; set; }` |
| `WeaponAttributes` | `public MBBindingList<WeaponAttributeVM> WeaponAttributes { get; set; }` |


## Key Methods

### RefreshStats

```csharp
public void RefreshStats()
```

### RefreshValues

```csharp
public override void RefreshValues()
```

### ExecuteSelectOrder

```csharp
public void ExecuteSelectOrder()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)