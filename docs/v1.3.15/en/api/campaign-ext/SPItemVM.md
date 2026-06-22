<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SPItemVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SPItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Inventory
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `SPItemVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

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


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)