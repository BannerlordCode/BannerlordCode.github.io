<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SmeltingSortControllerVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SmeltingSortControllerVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`SmeltingSortControllerVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `NameState` | `public int NameState { get; set; }` |
| `TypeState` | `public int TypeState { get; set; }` |
| `YieldState` | `public int YieldState { get; set; }` |
| `IsNameSelected` | `public bool IsNameSelected { get; set; }` |
| `IsTypeSelected` | `public bool IsTypeSelected { get; set; }` |
| `IsYieldSelected` | `public bool IsYieldSelected { get; set; }` |
| `SortTypeText` | `public string SortTypeText { get; set; }` |
| `SortNameText` | `public string SortNameText { get; set; }` |
| `SortYieldText` | `public string SortYieldText { get; set; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### SetListToControl

```csharp
public void SetListToControl(MBBindingList<SmeltingItemVM> listToControl)
```

### SortByCurrentState

```csharp
public void SortByCurrentState()
```

### ExecuteSortByName

```csharp
public void ExecuteSortByName()
```

### ExecuteSortByYield

```csharp
public void ExecuteSortByYield()
```

### ExecuteSortByType

```csharp
public void ExecuteSortByType()
```

### SetSortMode

```csharp
public void SetSortMode(bool isAscending)
```

### Compare

```csharp
public abstract int Compare(SmeltingItemVM x, SmeltingItemVM y)
```

### Compare

```csharp
public override int Compare(SmeltingItemVM x, SmeltingItemVM y)
```

### Compare

```csharp
public override int Compare(SmeltingItemVM x, SmeltingItemVM y)
```

### Compare

```csharp
public override int Compare(SmeltingItemVM x, SmeltingItemVM y)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)