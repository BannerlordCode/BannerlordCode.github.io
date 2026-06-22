<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StanceLink`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# StanceLink

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `StanceLink` is a class in the `TaleWorlds.CampaignSystem` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `IsNeutral` | `public bool IsNeutral { get; }` |
| `IsAtWar` | `public bool IsAtWar { get; set; }` |
| `Faction1` | `public IFaction Faction1 { get; }` |
| `Faction2` | `public IFaction Faction2 { get; }` |
| `WarStartDate` | `public CampaignTime WarStartDate { get; }` |
| `PeaceDeclarationDate` | `public CampaignTime PeaceDeclarationDate { get; }` |
| `TroopCasualties1` | `public int TroopCasualties1 { get; set; }` |
| `TroopCasualties2` | `public int TroopCasualties2 { get; set; }` |
| `ShipCasualties1` | `public int ShipCasualties1 { get; set; }` |
| `ShipCasualties2` | `public int ShipCasualties2 { get; set; }` |
| `SuccessfulSieges1` | `public int SuccessfulSieges1 { get; set; }` |
| `SuccessfulSieges2` | `public int SuccessfulSieges2 { get; set; }` |
| `SuccessfulRaids1` | `public int SuccessfulRaids1 { get; set; }` |
| `SuccessfulRaids2` | `public int SuccessfulRaids2 { get; set; }` |
| `TotalTributePaidFrom1To2` | `public int TotalTributePaidFrom1To2 { get; set; }` |
| `TotalTributePaidFrom2To1` | `public int TotalTributePaidFrom2To1 { get; set; }` |
| `DailyTributeInstallments` | `public int DailyTributeInstallments { get; set; }` |
| `SuccessfulTownSieges1` | `public int SuccessfulTownSieges1 { get; set; }` |
| `SuccessfulTownSieges2` | `public int SuccessfulTownSieges2 { get; set; }` |


## Key Methods

### GetCasualties

```csharp
public int GetCasualties(IFaction faction)
```

### GetSuccessfulSieges

```csharp
public int GetSuccessfulSieges(IFaction faction)
```

### GetSuccessfulRaids

```csharp
public int GetSuccessfulRaids(IFaction faction)
```

### GetTotalTributePaid

```csharp
public int GetTotalTributePaid(IFaction faction)
```

### GetSuccessfulTownSieges

```csharp
public int GetSuccessfulTownSieges(IFaction faction)
```

### GetDailyTributeToPay

```csharp
public int GetDailyTributeToPay(IFaction faction)
```

### SetDailyTributePaid

```csharp
public void SetDailyTributePaid(IFaction payer, int dailyTribute, int dailyTributeInstallments)
```

### GetRemainingTributePaymentCount

```csharp
public int GetRemainingTributePaymentCount()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)