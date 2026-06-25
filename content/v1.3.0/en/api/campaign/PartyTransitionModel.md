---
title: "PartyTransitionModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyTransitionModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PartyTransitionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyTransitionModel : MBGameModel<PartyTransitionModel>`
**Base:** `MBGameModel<PartyTransitionModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyTransitionModel.cs`

## Overview

`PartyTransitionModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `PartyTransitionModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetTransitionTimeForEmbarking
`public abstract CampaignTime GetTransitionTimeForEmbarking(MobileParty mobileParty)`

**Purpose:** Gets the current value of `transition time for embarking`.

### GetTransitionTimeDisembarking
`public abstract CampaignTime GetTransitionTimeDisembarking(MobileParty mobileParty)`

**Purpose:** Gets the current value of `transition time disembarking`.

### GetFleetTravelTimeToPoint
`public abstract CampaignTime GetFleetTravelTimeToPoint(MobileParty owner, CampaignVec2 target)`

**Purpose:** Gets the current value of `fleet travel time to point`.

## Usage Example

```csharp
var implementation = new CustomPartyTransitionModel();
```

## See Also

- [Complete Class Catalog](../catalog)