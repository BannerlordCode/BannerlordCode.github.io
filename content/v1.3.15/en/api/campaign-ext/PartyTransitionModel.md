---
title: "PartyTransitionModel"
description: "Auto-generated class reference for PartyTransitionModel."
---
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

**Purpose:** Reads and returns the `transition time for embarking` value held by the current object.

```csharp
// Obtain an instance of PartyTransitionModel from the subsystem API first
PartyTransitionModel partyTransitionModel = ...;
var result = partyTransitionModel.GetTransitionTimeForEmbarking(mobileParty);
```

### GetTransitionTimeDisembarking
`public abstract CampaignTime GetTransitionTimeDisembarking(MobileParty mobileParty)`

**Purpose:** Reads and returns the `transition time disembarking` value held by the current object.

```csharp
// Obtain an instance of PartyTransitionModel from the subsystem API first
PartyTransitionModel partyTransitionModel = ...;
var result = partyTransitionModel.GetTransitionTimeDisembarking(mobileParty);
```

### GetFleetTravelTimeToPoint
`public abstract CampaignTime GetFleetTravelTimeToPoint(MobileParty owner, CampaignVec2 target)`

**Purpose:** Reads and returns the `fleet travel time to point` value held by the current object.

```csharp
// Obtain an instance of PartyTransitionModel from the subsystem API first
PartyTransitionModel partyTransitionModel = ...;
var result = partyTransitionModel.GetFleetTravelTimeToPoint(owner, target);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
PartyTransitionModel instance = ...;
```

## See Also

- [Area Index](../)