<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultSettlementAccessModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultSettlementAccessModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSettlementAccessModel : SettlementAccessModel`
**Base:** `SettlementAccessModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementAccessModel.cs`

## Overview

`DefaultSettlementAccessModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultSettlementAccessModel>(new MyDefaultSettlementAccessModel())` to change how it computes.

## Key Methods

### CanMainHeroEnterSettlement
```csharp
public override void CanMainHeroEnterSettlement(Settlement settlement, out SettlementAccessModel.AccessDetails accessDetails)
```

### CanMainHeroEnterDungeon
```csharp
public override void CanMainHeroEnterDungeon(Settlement settlement, out SettlementAccessModel.AccessDetails accessDetails)
```

### CanMainHeroEnterLordsHall
```csharp
public override void CanMainHeroEnterLordsHall(Settlement settlement, out SettlementAccessModel.AccessDetails accessDetails)
```

### CanMainHeroAccessLocation
```csharp
public override bool CanMainHeroAccessLocation(Settlement settlement, string locationId, out bool disableOption, out TextObject disabledText)
```

### IsRequestMeetingOptionAvailable
```csharp
public override bool IsRequestMeetingOptionAvailable(Settlement settlement, out bool disableOption, out TextObject disabledText)
```

### CanMainHeroDoSettlementAction
```csharp
public override bool CanMainHeroDoSettlementAction(Settlement settlement, SettlementAccessModel.SettlementAction settlementAction, out bool disableOption, out TextObject disabledText)
```

## Usage Example

```csharp
// Typical usage of DefaultSettlementAccessModel (Model)
Game.Current.ReplaceModel<DefaultSettlementAccessModel>(new MyDefaultSettlementAccessModel());
```

## See Also

- [Complete Class Catalog](../catalog)