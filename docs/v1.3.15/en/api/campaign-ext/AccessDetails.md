<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AccessDetails`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AccessDetails

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** struct
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `AccessDetails` is a struct in the `TaleWorlds.CampaignSystem.ComponentInterfaces` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Methods

### CanMainHeroEnterSettlement

```csharp
public abstract void CanMainHeroEnterSettlement(Settlement settlement, out SettlementAccessModel.AccessDetails accessDetails)
```

### CanMainHeroEnterLordsHall

```csharp
public abstract void CanMainHeroEnterLordsHall(Settlement settlement, out SettlementAccessModel.AccessDetails accessDetails)
```

### CanMainHeroEnterDungeon

```csharp
public abstract void CanMainHeroEnterDungeon(Settlement settlement, out SettlementAccessModel.AccessDetails accessDetails)
```

### CanMainHeroAccessLocation

```csharp
public abstract bool CanMainHeroAccessLocation(Settlement settlement, string locationId, out bool disableOption, out TextObject disabledText)
```

### CanMainHeroDoSettlementAction

```csharp
public abstract bool CanMainHeroDoSettlementAction(Settlement settlement, SettlementAccessModel.SettlementAction settlementAction, out bool disableOption, out TextObject disabledText)
```

### IsRequestMeetingOptionAvailable

```csharp
public abstract bool IsRequestMeetingOptionAvailable(Settlement settlement, out bool disableOption, out TextObject disabledText)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)