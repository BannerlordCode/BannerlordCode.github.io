<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PartySortControllerVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartySortControllerVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.Party
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`PartySortControllerVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.Party` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `IsAscending` | `public bool IsAscending { get; set; }` |
| `IsCustomSort` | `public bool IsCustomSort { get; set; }` |
| `SortOptions` | `public SelectorVM<TroopSortSelectorItemVM> SortOptions { get; set; }` |


## 主要方法

### SelectSortType

```csharp
public void SelectSortType(PartyScreenLogic.TroopSortType sortType)
```

### SortWith

```csharp
public void SortWith(PartyScreenLogic.TroopSortType sortType, bool isAscending)
```

### ExecuteToggleOrder

```csharp
public void ExecuteToggleOrder()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)