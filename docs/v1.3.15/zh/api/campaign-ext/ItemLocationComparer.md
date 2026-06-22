<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ItemLocationComparer`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ItemLocationComparer

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`ItemLocationComparer` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `NameState` | `public int NameState { get; set; }` |
| `LocationState` | `public int LocationState { get; set; }` |
| `IsNameSelected` | `public bool IsNameSelected { get; set; }` |
| `IsLocationSelected` | `public bool IsLocationSelected { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `LocationText` | `public string LocationText { get; set; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### ExecuteSortByName

```csharp
public void ExecuteSortByName()
```

### ExecuteSortByLocation

```csharp
public void ExecuteSortByLocation()
```

### ResetAllStates

```csharp
public void ResetAllStates()
```

### SetSortMode

```csharp
public void SetSortMode(bool isAcending)
```

### Compare

```csharp
public abstract int Compare(ClanLordItemVM x, ClanLordItemVM y)
```

### Compare

```csharp
public override int Compare(ClanLordItemVM x, ClanLordItemVM y)
```

### Compare

```csharp
public override int Compare(ClanLordItemVM x, ClanLordItemVM y)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)