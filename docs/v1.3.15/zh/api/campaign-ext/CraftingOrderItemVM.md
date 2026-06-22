<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CraftingOrderItemVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CraftingOrderItemVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign.Order
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`CraftingOrderItemVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign.Order` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

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


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)