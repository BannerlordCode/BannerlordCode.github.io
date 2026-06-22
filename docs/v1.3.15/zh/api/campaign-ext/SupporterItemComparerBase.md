<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SupporterItemComparerBase`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SupporterItemComparerBase

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`SupporterItemComparerBase` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `NameState` | `public int NameState { get; set; }` |
| `LocationState` | `public int LocationState { get; set; }` |
| `IncomeState` | `public int IncomeState { get; set; }` |
| `IsNameSelected` | `public bool IsNameSelected { get; set; }` |
| `IsLocationSelected` | `public bool IsLocationSelected { get; set; }` |
| `IsIncomeSelected` | `public bool IsIncomeSelected { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `LocationText` | `public string LocationText { get; set; }` |
| `IncomeText` | `public string IncomeText { get; set; }` |


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

### ExecuteSortByIncome

```csharp
public void ExecuteSortByIncome()
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
public abstract int Compare(ClanFinanceWorkshopItemVM x, ClanFinanceWorkshopItemVM y)
```

### SetSortMode

```csharp
public void SetSortMode(bool isAcending)
```

### Compare

```csharp
public abstract int Compare(ClanSupporterGroupVM x, ClanSupporterGroupVM y)
```

### SetSortMode

```csharp
public void SetSortMode(bool isAcending)
```

### Compare

```csharp
public abstract int Compare(ClanFinanceAlleyItemVM x, ClanFinanceAlleyItemVM y)
```

### Compare

```csharp
public override int Compare(ClanFinanceWorkshopItemVM x, ClanFinanceWorkshopItemVM y)
```

### Compare

```csharp
public override int Compare(ClanSupporterGroupVM x, ClanSupporterGroupVM y)
```

### Compare

```csharp
public override int Compare(ClanFinanceAlleyItemVM x, ClanFinanceAlleyItemVM y)
```

### Compare

```csharp
public override int Compare(ClanFinanceWorkshopItemVM x, ClanFinanceWorkshopItemVM y)
```

### Compare

```csharp
public override int Compare(ClanFinanceAlleyItemVM x, ClanFinanceAlleyItemVM y)
```

### Compare

```csharp
public override int Compare(ClanFinanceWorkshopItemVM x, ClanFinanceWorkshopItemVM y)
```

### Compare

```csharp
public override int Compare(ClanSupporterGroupVM x, ClanSupporterGroupVM y)
```

### Compare

```csharp
public override int Compare(ClanFinanceAlleyItemVM x, ClanFinanceAlleyItemVM y)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)