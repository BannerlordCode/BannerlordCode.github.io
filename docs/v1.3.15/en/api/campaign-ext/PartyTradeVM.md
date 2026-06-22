<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyTradeVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyTradeVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `PartyTradeVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.Party` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `IsTransfarable` | `public bool IsTransfarable { get; set; }` |
| `ThisStockLbl` | `public string ThisStockLbl { get; set; }` |
| `TotalStockLbl` | `public string TotalStockLbl { get; set; }` |
| `ThisStock` | `public int ThisStock { get; set; }` |
| `InitialThisStock` | `public int InitialThisStock { get; set; }` |
| `OtherStock` | `public int OtherStock { get; set; }` |
| `InitialOtherStock` | `public int InitialOtherStock { get; set; }` |
| `TotalStock` | `public int TotalStock { get; set; }` |
| `IsThisStockIncreasable` | `public bool IsThisStockIncreasable { get; set; }` |
| `IsOtherStockIncreasable` | `public bool IsOtherStockIncreasable { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### UpdateTroopData

```csharp
public void UpdateTroopData(TroopRosterElement troopRoster, PartyScreenLogic.PartyRosterSide side, bool forceUpdate = true)
```

### FindTroopFromSide

```csharp
public TroopRosterElement? FindTroopFromSide(CharacterObject character, PartyScreenLogic.PartyRosterSide side, bool isPrisoner)
```

### ExecuteIncreasePlayerStock

```csharp
public void ExecuteIncreasePlayerStock()
```

### ExecuteIncreaseOtherStock

```csharp
public void ExecuteIncreaseOtherStock()
```

### ExecuteReset

```csharp
public void ExecuteReset()
```

### ExecuteApplyTransaction

```csharp
public void ExecuteApplyTransaction()
```

### ExecuteRemoveZeroCounts

```csharp
public void ExecuteRemoveZeroCounts()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)