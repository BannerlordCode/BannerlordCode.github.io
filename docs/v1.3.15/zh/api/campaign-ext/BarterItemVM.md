<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BarterItemVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BarterItemVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.Barter
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`BarterItemVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.Barter` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `TotalItemCount` | `public int TotalItemCount { get; set; }` |
| `TotalItemCountText` | `public string TotalItemCountText { get; set; }` |
| `CurrentOfferedAmount` | `public int CurrentOfferedAmount { get; set; }` |
| `CurrentOfferedAmountText` | `public string CurrentOfferedAmountText { get; set; }` |
| `BarterableType` | `public string BarterableType { get; set; }` |
| `HasVisualIdentifier` | `public bool HasVisualIdentifier { get; set; }` |
| `IsMultiple` | `public bool IsMultiple { get; set; }` |
| `IsSelectorActive` | `public bool IsSelectorActive { get; set; }` |
| `VisualIdentifier` | `public ImageIdentifierVM VisualIdentifier { get; set; }` |
| `ItemLbl` | `public string ItemLbl { get; set; }` |
| `FiefFileName` | `public string FiefFileName { get; set; }` |
| `IsItemTransferrable` | `public bool IsItemTransferrable { get; set; }` |
| `IsOffered` | `public bool IsOffered { get; set; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### RefreshCompabilityWithItem

```csharp
public void RefreshCompabilityWithItem(BarterItemVM item, bool isItemGotOffered)
```

### ExecuteAddOffered

```csharp
public void ExecuteAddOffered()
```

### ExecuteRemoveOffered

```csharp
public void ExecuteRemoveOffered()
```

### ExecuteAction

```csharp
public void ExecuteAction()
```

### BarterTransferEventDelegate

```csharp
public delegate void BarterTransferEventDelegate(BarterItemVM itemVM, bool transferAll)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)