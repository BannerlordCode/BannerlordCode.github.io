<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BarterVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BarterVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Barter
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `BarterVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.Barter` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `FiefLbl` | `public string FiefLbl { get; set; }` |
| `PrisonerLbl` | `public string PrisonerLbl { get; set; }` |
| `ItemLbl` | `public string ItemLbl { get; set; }` |
| `OtherLbl` | `public string OtherLbl { get; set; }` |
| `CancelLbl` | `public string CancelLbl { get; set; }` |
| `ResetLbl` | `public string ResetLbl { get; set; }` |
| `OfferLbl` | `public string OfferLbl { get; set; }` |
| `DiplomaticLbl` | `public string DiplomaticLbl { get; set; }` |
| `AutoBalanceHint` | `public HintViewModel AutoBalanceHint { get; set; }` |
| `LeftHero` | `public HeroVM LeftHero { get; set; }` |
| `RightHero` | `public HeroVM RightHero { get; set; }` |
| `IsOfferDisabled` | `public bool IsOfferDisabled { get; set; }` |
| `LeftMaxGold` | `public int LeftMaxGold { get; set; }` |
| `RightMaxGold` | `public int RightMaxGold { get; set; }` |
| `LeftNameLbl` | `public string LeftNameLbl { get; set; }` |
| `RightNameLbl` | `public string RightNameLbl { get; set; }` |
| `LeftFiefList` | `public MBBindingList<BarterItemVM> LeftFiefList { get; set; }` |
| `RightFiefList` | `public MBBindingList<BarterItemVM> RightFiefList { get; set; }` |
| `LeftPrisonerList` | `public MBBindingList<BarterItemVM> LeftPrisonerList { get; set; }` |
| `RightPrisonerList` | `public MBBindingList<BarterItemVM> RightPrisonerList { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### OnInitialized

```csharp
public void OnInitialized()
```

### ExecuteTransferAllLeftFief

```csharp
public void ExecuteTransferAllLeftFief()
```

### ExecuteAutoBalance

```csharp
public void ExecuteAutoBalance()
```

### ExecuteTransferAllLeftItem

```csharp
public void ExecuteTransferAllLeftItem()
```

### ExecuteTransferAllLeftPrisoner

```csharp
public void ExecuteTransferAllLeftPrisoner()
```

### ExecuteTransferAllLeftOther

```csharp
public void ExecuteTransferAllLeftOther()
```

### ExecuteTransferAllRightFief

```csharp
public void ExecuteTransferAllRightFief()
```

### ExecuteTransferAllRightItem

```csharp
public void ExecuteTransferAllRightItem()
```

### ExecuteTransferAllRightPrisoner

```csharp
public void ExecuteTransferAllRightPrisoner()
```

### ExecuteTransferAllRightOther

```csharp
public void ExecuteTransferAllRightOther()
```

### ExecuteOffer

```csharp
public void ExecuteOffer()
```

### ExecuteCancel

```csharp
public void ExecuteCancel()
```

### ExecuteReset

```csharp
public void ExecuteReset()
```

### OnTransferItem

```csharp
public void OnTransferItem(Barterable barter, bool isTransferrable)
```

### SetResetInputKey

```csharp
public void SetResetInputKey(HotKey hotkey)
```

### SetDoneInputKey

```csharp
public void SetDoneInputKey(HotKey hotkey)
```

### SetCancelInputKey

```csharp
public void SetCancelInputKey(HotKey hotkey)
```

### InitializeStaticContent

```csharp
public void InitializeStaticContent()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)