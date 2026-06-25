---
title: "PartyTransitionModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyTransitionModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PartyTransitionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyTransitionModel : MBGameModel<PartyTransitionModel>`
**Base:** `MBGameModel<PartyTransitionModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/PartyTransitionModel.cs`

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

### GetFleetTravelTimeToSettlement
`public abstract CampaignTime GetFleetTravelTimeToSettlement(MobileParty mobileParty, Settlement targetSettlement)`

**Purpose:** Gets the current value of `fleet travel time to settlement`.

## Usage Example

```csharp
var implementation = new CustomPartyTransitionModel();
```

## See Also

- [Complete Class Catalog](../catalog)