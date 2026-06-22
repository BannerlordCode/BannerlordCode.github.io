<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultPartyTransitionModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultPartyTransitionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartyTransitionModel : PartyTransitionModel`
**Base:** `PartyTransitionModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyTransitionModel.cs`

## Overview

`DefaultPartyTransitionModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultPartyTransitionModel>(new MyDefaultPartyTransitionModel())` to change how it computes.

## Key Methods

### GetFleetTravelTimeToPoint
```csharp
public override CampaignTime GetFleetTravelTimeToPoint(MobileParty mobileParty, CampaignVec2 target)
```

### GetTransitionTimeDisembarking
```csharp
public override CampaignTime GetTransitionTimeDisembarking(MobileParty mobileParty)
```

### GetTransitionTimeForEmbarking
```csharp
public override CampaignTime GetTransitionTimeForEmbarking(MobileParty mobileParty)
```

## Usage Example

```csharp
// Typical usage of DefaultPartyTransitionModel (Model)
Game.Current.ReplaceModel<DefaultPartyTransitionModel>(new MyDefaultPartyTransitionModel());
```

## See Also

- [Complete Class Catalog](../catalog)