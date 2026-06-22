<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SettlementMenuOverlayVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SettlementMenuOverlayVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `SettlementMenuOverlayVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `RemainingFoodText` | `public string RemainingFoodText { get; set; }` |
| `ProsperityChangeAmount` | `public int ProsperityChangeAmount { get; set; }` |
| `MilitiaChangeAmount` | `public int MilitiaChangeAmount { get; set; }` |
| `GarrisonChangeAmount` | `public int GarrisonChangeAmount { get; set; }` |
| `GarrisonAmount` | `public int GarrisonAmount { get; set; }` |
| `CrimeChangeAmount` | `public int CrimeChangeAmount { get; set; }` |
| `LoyaltyChangeAmount` | `public int LoyaltyChangeAmount { get; set; }` |
| `SecurityChangeAmount` | `public int SecurityChangeAmount { get; set; }` |
| `FoodChangeAmount` | `public int FoodChangeAmount { get; set; }` |
| `RemainingFoodHint` | `public BasicTooltipViewModel RemainingFoodHint { get; set; }` |
| `SecurityHint` | `public BasicTooltipViewModel SecurityHint { get; set; }` |
| `PartyFilterHint` | `public HintViewModel PartyFilterHint { get; set; }` |
| `CharacterFilterHint` | `public HintViewModel CharacterFilterHint { get; set; }` |
| `MilitasHint` | `public BasicTooltipViewModel MilitasHint { get; set; }` |
| `GarrisonHint` | `public BasicTooltipViewModel GarrisonHint { get; set; }` |
| `ProsperityHint` | `public BasicTooltipViewModel ProsperityHint { get; set; }` |
| `LoyaltyHint` | `public BasicTooltipViewModel LoyaltyHint { get; set; }` |
| `WallsHint` | `public BasicTooltipViewModel WallsHint { get; set; }` |
| `CrimeHint` | `public BasicTooltipViewModel CrimeHint { get; set; }` |
| `LeaveMembersHint` | `public HintViewModel LeaveMembersHint { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### ExecuteOnOverlayClosed

```csharp
public override void ExecuteOnOverlayClosed()
```

### UpdateOverlayType

```csharp
public override void UpdateOverlayType(GameMenu.MenuOverlayType newType)
```

### Refresh

```csharp
public override void Refresh()
```

### ExecuteAddCompanion

```csharp
public void ExecuteAddCompanion()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### Compare

```csharp
public int Compare(GameMenuPartyItemVM x, GameMenuPartyItemVM y)
```

### Compare

```csharp
public int Compare(GameMenuPartyItemVM x, GameMenuPartyItemVM y)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)