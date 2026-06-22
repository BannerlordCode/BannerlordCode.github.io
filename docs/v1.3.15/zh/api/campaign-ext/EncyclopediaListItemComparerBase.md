<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EncyclopediaListItemComparerBase`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EncyclopediaListItemComparerBase

**命名空间:** TaleWorlds.CampaignSystem.Encyclopedia
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`EncyclopediaListItemComparerBase` 是 `TaleWorlds.CampaignSystem.Encyclopedia` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `IsAscending` | `public bool IsAscending { get; }` |


## 主要方法

### SetSortOrder

```csharp
public void SetSortOrder(bool isAscending)
```

### SwitchSortOrder

```csharp
public void SwitchSortOrder()
```

### SetDefaultSortOrder

```csharp
public void SetDefaultSortOrder()
```

### Compare

```csharp
public abstract int Compare(EncyclopediaListItem x, EncyclopediaListItem y)
```

### GetComparedValueText

```csharp
public abstract string GetComparedValueText(EncyclopediaListItem item)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)