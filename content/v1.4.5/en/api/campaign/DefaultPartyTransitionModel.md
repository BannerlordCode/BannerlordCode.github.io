---
title: "DefaultPartyTransitionModel"
description: "Auto-generated class reference for DefaultPartyTransitionModel."
---
# DefaultPartyTransitionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartyTransitionModel : PartyTransitionModel`
**Base:** `PartyTransitionModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultPartyTransitionModel.cs`

## Overview

`DefaultPartyTransitionModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultPartyTransitionModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetFleetTravelTimeToSettlement
`public override CampaignTime GetFleetTravelTimeToSettlement(MobileParty mobileParty, Settlement targetSettlement)`

**Purpose:** Reads and returns the fleet travel time to settlement value held by the this instance.

```csharp
// Obtain an instance of DefaultPartyTransitionModel from the subsystem API first
DefaultPartyTransitionModel defaultPartyTransitionModel = ...;
var result = defaultPartyTransitionModel.GetFleetTravelTimeToSettlement(mobileParty, targetSettlement);
```

### GetTransitionTimeDisembarking
`public override CampaignTime GetTransitionTimeDisembarking(MobileParty mobileParty)`

**Purpose:** Reads and returns the transition time disembarking value held by the this instance.

```csharp
// Obtain an instance of DefaultPartyTransitionModel from the subsystem API first
DefaultPartyTransitionModel defaultPartyTransitionModel = ...;
var result = defaultPartyTransitionModel.GetTransitionTimeDisembarking(mobileParty);
```

### GetTransitionTimeForEmbarking
`public override CampaignTime GetTransitionTimeForEmbarking(MobileParty mobileParty)`

**Purpose:** Reads and returns the transition time for embarking value held by the this instance.

```csharp
// Obtain an instance of DefaultPartyTransitionModel from the subsystem API first
DefaultPartyTransitionModel defaultPartyTransitionModel = ...;
var result = defaultPartyTransitionModel.GetTransitionTimeForEmbarking(mobileParty);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultPartyTransitionModel>(new MyDefaultPartyTransitionModel());
```

## See Also

- [Area Index](../)