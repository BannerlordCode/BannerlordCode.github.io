<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SPItemVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SPItemVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.Inventory
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`SPItemVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `InventorySide` | `public InventoryLogic.InventorySide InventorySide { get; }` |
| `IsFocused` | `public bool IsFocused { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `IsArtifact` | `public bool IsArtifact { get; set; }` |
| `IsTransferable` | `public bool IsTransferable { get; set; }` |
| `IsTransferButtonHighlighted` | `public bool IsTransferButtonHighlighted { get; set; }` |
| `IsItemHighlightEnabled` | `public bool IsItemHighlightEnabled { get; set; }` |
| `IsCivilianItem` | `public bool IsCivilianItem { get; set; }` |
| `IsStealthItem` | `public bool IsStealthItem { get; set; }` |
| `IsNew` | `public bool IsNew { get; set; }` |
| `IsGenderDifferent` | `public bool IsGenderDifferent { get; set; }` |
| `CanBeSlaughtered` | `public bool CanBeSlaughtered { get; set; }` |
| `CanBeDonated` | `public bool CanBeDonated { get; set; }` |
| `IsEquipableItem` | `public bool IsEquipableItem { get; set; }` |
| `CanCharacterUseItem` | `public bool CanCharacterUseItem { get; set; }` |
| `IsLocked` | `public bool IsLocked { get; set; }` |
| `ItemCount` | `public int ItemCount { get; set; }` |
| `ItemLevel` | `public int ItemLevel { get; set; }` |
| `ProfitType` | `public int ProfitType { get; set; }` |
| `TransactionCount` | `public int TransactionCount { get; set; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### RefreshWith

```csharp
public void RefreshWith(SPItemVM itemVM, InventoryLogic.InventorySide inventorySide)
```

### ExecuteBuySingle

```csharp
public void ExecuteBuySingle()
```

### ExecuteBuy

```csharp
public void ExecuteBuy(int amount)
```

### ExecuteSellSingle

```csharp
public void ExecuteSellSingle()
```

### ExecuteSell

```csharp
public void ExecuteSell(int amount)
```

### ExecuteSellItem

```csharp
public void ExecuteSellItem()
```

### ExecuteConcept

```csharp
public void ExecuteConcept()
```

### ExecuteResetTrade

```csharp
public void ExecuteResetTrade()
```

### UpdateTradeData

```csharp
public void UpdateTradeData(bool forceUpdateAmounts)
```

### ExecuteSlaughterItem

```csharp
public void ExecuteSlaughterItem()
```

### ExecuteDonateItem

```csharp
public void ExecuteDonateItem()
```

### ExecuteSetFocused

```csharp
public void ExecuteSetFocused()
```

### ExecuteSetUnfocused

```csharp
public void ExecuteSetUnfocused()
```

### UpdateCanBeSlaughtered

```csharp
public void UpdateCanBeSlaughtered()
```

### UpdateHintTexts

```csharp
public void UpdateHintTexts()
```

### GetProfitTypeFromDiff

```csharp
public static SPItemVM.ProfitTypes GetProfitTypeFromDiff(float averageValue, float currentValue)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)