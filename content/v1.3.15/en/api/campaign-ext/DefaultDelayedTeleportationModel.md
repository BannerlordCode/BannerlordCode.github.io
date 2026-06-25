---
title: "DefaultDelayedTeleportationModel"
description: "Auto-generated class reference for DefaultDelayedTeleportationModel."
---
# DefaultDelayedTeleportationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultDelayedTeleportationModel : DelayedTeleportationModel`
**Base:** `DelayedTeleportationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultDelayedTeleportationModel.cs`

## Overview

`DefaultDelayedTeleportationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultDelayedTeleportationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `DefaultTeleportationSpeed` | `public override float DefaultTeleportationSpeed { get; }` |

## Key Methods

### GetTeleportationDelayAsHours
`public override ExplainedNumber GetTeleportationDelayAsHours(Hero teleportingHero, PartyBase target)`

**Purpose:** **Purpose:** Reads and returns the teleportation delay as hours value held by the this instance.

```csharp
// Obtain an instance of DefaultDelayedTeleportationModel from the subsystem API first
DefaultDelayedTeleportationModel defaultDelayedTeleportationModel = ...;
var result = defaultDelayedTeleportationModel.GetTeleportationDelayAsHours(teleportingHero, target);
```

### CanPerformImmediateTeleport
`public override bool CanPerformImmediateTeleport(Hero hero, MobileParty targetMobileParty, Settlement targetSettlement)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for perform immediate teleport.

```csharp
// Obtain an instance of DefaultDelayedTeleportationModel from the subsystem API first
DefaultDelayedTeleportationModel defaultDelayedTeleportationModel = ...;
var result = defaultDelayedTeleportationModel.CanPerformImmediateTeleport(hero, targetMobileParty, targetSettlement);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultDelayedTeleportationModel>(new MyDefaultDelayedTeleportationModel());
```

## See Also

- [Area Index](../)