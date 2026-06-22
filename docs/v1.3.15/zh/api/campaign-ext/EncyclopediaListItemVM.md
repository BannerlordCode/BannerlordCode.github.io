<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EncyclopediaListItemVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EncyclopediaListItemVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`EncyclopediaListItemVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Object` | `public object Object { get; }` |
| `ListItem` | `public EncyclopediaListItem ListItem { get; }` |
| `IsFiltered` | `public bool IsFiltered { get; set; }` |
| `PlayerCanSeeValues` | `public bool PlayerCanSeeValues { get; set; }` |
| `Id` | `public string Id { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `ComparedValue` | `public string ComparedValue { get; set; }` |
| `IsBookmarked` | `public bool IsBookmarked { get; set; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### Execute

```csharp
public void Execute()
```

### SetComparedValue

```csharp
public void SetComparedValue(EncyclopediaListItemComparerBase comparer)
```

### ExecuteBeginTooltip

```csharp
public void ExecuteBeginTooltip()
```

### ExecuteEndTooltip

```csharp
public void ExecuteEndTooltip()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)