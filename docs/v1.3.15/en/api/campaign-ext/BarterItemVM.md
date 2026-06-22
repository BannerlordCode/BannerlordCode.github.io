<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BarterItemVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BarterItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Barter
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `BarterItemVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.Barter` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

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


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)