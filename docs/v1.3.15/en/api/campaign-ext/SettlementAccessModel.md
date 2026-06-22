<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SettlementAccessModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SettlementAccessModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementAccessModel : MBGameModel<SettlementAccessModel>`
**Base:** `MBGameModel<SettlementAccessModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementAccessModel.cs`

## Overview

`SettlementAccessModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<SettlementAccessModel>(new MySettlementAccessModel())` to change how it computes.

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

## Usage Example

```csharp
// Typical usage of SettlementAccessModel (Model)
Game.Current.ReplaceModel<SettlementAccessModel>(new MySettlementAccessModel());
```

## See Also

- [Complete Class Catalog](../catalog)