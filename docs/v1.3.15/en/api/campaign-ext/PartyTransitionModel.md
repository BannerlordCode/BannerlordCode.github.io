<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyTransitionModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyTransitionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyTransitionModel : MBGameModel<PartyTransitionModel>`
**Base:** `MBGameModel<PartyTransitionModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyTransitionModel.cs`

## Overview

`PartyTransitionModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<PartyTransitionModel>(new MyPartyTransitionModel())` to change how it computes.

## Key Methods

### GetTransitionTimeForEmbarking
```csharp
public abstract CampaignTime GetTransitionTimeForEmbarking(MobileParty mobileParty)
```

### GetTransitionTimeDisembarking
```csharp
public abstract CampaignTime GetTransitionTimeDisembarking(MobileParty mobileParty)
```

### GetFleetTravelTimeToPoint
```csharp
public abstract CampaignTime GetFleetTravelTimeToPoint(MobileParty owner, CampaignVec2 target)
```

## Usage Example

```csharp
// Typical usage of PartyTransitionModel (Model)
Game.Current.ReplaceModel<PartyTransitionModel>(new MyPartyTransitionModel());
```

## See Also

- [Complete Class Catalog](../catalog)