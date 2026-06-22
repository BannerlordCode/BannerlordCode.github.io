<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `RefinementVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RefinementVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Refinement
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`RefinementVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Refinement` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `CurrentSelectedAction` | `public RefinementActionItemVM CurrentSelectedAction { get; set; }` |
| `IsValidRefinementActionSelected` | `public bool IsValidRefinementActionSelected { get; set; }` |
| `AvailableRefinementActions` | `public MBBindingList<RefinementActionItemVM> AvailableRefinementActions { get; set; }` |
| `RefinementText` | `public string RefinementText { get; set; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### ExecuteSelectedRefinement

```csharp
public void ExecuteSelectedRefinement(Hero currentCraftingHero)
```

### RefreshRefinementActionsList

```csharp
public void RefreshRefinementActionsList(Hero craftingHero)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)