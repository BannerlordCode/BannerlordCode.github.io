<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EncyclopediaListSortControllerVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EncyclopediaListSortControllerVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`EncyclopediaListSortControllerVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `SortSelection` | `public EncyclopediaListSelectorVM SortSelection { get; set; }` |
| `NameLabel` | `public string NameLabel { get; set; }` |
| `SortedValueLabelText` | `public string SortedValueLabelText { get; set; }` |
| `SortByLabel` | `public string SortByLabel { get; set; }` |
| `AlternativeSortState` | `public int AlternativeSortState { get; set; }` |
| `IsAlternativeSortVisible` | `public bool IsAlternativeSortVisible { get; set; }` |
| `IsHighlightEnabled` | `public bool IsHighlightEnabled { get; set; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### SetSortSelection

```csharp
public void SetSortSelection(int index)
```

### ExecuteSwitchSortOrder

```csharp
public void ExecuteSwitchSortOrder()
```

### SetSortOrder

```csharp
public void SetSortOrder(bool isAscending)
```

### GetSortOrder

```csharp
public bool GetSortOrder()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)