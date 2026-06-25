---
title: "DefaultPartyTransitionModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultPartyTransitionModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultPartyTransitionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartyTransitionModel : PartyTransitionModel`
**Base:** `PartyTransitionModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyTransitionModel.cs`

## Overview

`DefaultPartyTransitionModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultPartyTransitionModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetFleetTravelTimeToPoint
`public override CampaignTime GetFleetTravelTimeToPoint(MobileParty mobileParty, CampaignVec2 target)`

**Purpose:** Gets the current value of `fleet travel time to point`.

### GetTransitionTimeDisembarking
`public override CampaignTime GetTransitionTimeDisembarking(MobileParty mobileParty)`

**Purpose:** Gets the current value of `transition time disembarking`.

### GetTransitionTimeForEmbarking
`public override CampaignTime GetTransitionTimeForEmbarking(MobileParty mobileParty)`

**Purpose:** Gets the current value of `transition time for embarking`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultPartyTransitionModel>(new MyDefaultPartyTransitionModel());
```

## See Also

- [Complete Class Catalog](../catalog)