---
title: "TeleportationCampaignBehavior"
description: "Auto-generated class reference for TeleportationCampaignBehavior."
---
# TeleportationCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TeleportationCampaignBehavior : CampaignBehaviorBase, ITeleportationCampaignBehavior, ICampaignBehavior`
**Base:** `CampaignBehaviorBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/TeleportationCampaignBehavior.cs`

## Overview

`TeleportationCampaignBehavior` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of TeleportationCampaignBehavior from the subsystem API first
TeleportationCampaignBehavior teleportationCampaignBehavior = ...;
teleportationCampaignBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of TeleportationCampaignBehavior from the subsystem API first
TeleportationCampaignBehavior teleportationCampaignBehavior = ...;
teleportationCampaignBehavior.SyncData(dataStore);
```

### GetTargetOfTeleportingHero
`public bool GetTargetOfTeleportingHero(Hero teleportingHero, out bool isGovernor, out bool isPartyLeader, out IMapPoint target)`

**Purpose:** Reads and returns the target of teleporting hero value held by the this instance.

```csharp
// Obtain an instance of TeleportationCampaignBehavior from the subsystem API first
TeleportationCampaignBehavior teleportationCampaignBehavior = ...;
var result = teleportationCampaignBehavior.GetTargetOfTeleportingHero(teleportingHero, isGovernor, isPartyLeader, target);
```

### GetHeroArrivalTimeToDestination
`public CampaignTime GetHeroArrivalTimeToDestination(Hero teleportingHero)`

**Purpose:** Reads and returns the hero arrival time to destination value held by the this instance.

```csharp
// Obtain an instance of TeleportationCampaignBehavior from the subsystem API first
TeleportationCampaignBehavior teleportationCampaignBehavior = ...;
var result = teleportationCampaignBehavior.GetHeroArrivalTimeToDestination(teleportingHero);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TeleportationCampaignBehavior teleportationCampaignBehavior = ...;
teleportationCampaignBehavior.RegisterEvents();
```

## See Also

- [Area Index](../)