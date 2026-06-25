---
title: "DelayedTeleportationModel"
description: "Auto-generated class reference for DelayedTeleportationModel."
---
# DelayedTeleportationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class DelayedTeleportationModel : MBGameModel<DelayedTeleportationModel>`
**Base:** `MBGameModel<DelayedTeleportationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/DelayedTeleportationModel.cs`

## Overview

`DelayedTeleportationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DelayedTeleportationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `DefaultTeleportationSpeed` | `public abstract float DefaultTeleportationSpeed { get; }` |

## Key Methods

### GetTeleportationDelayAsHours
`public abstract ExplainedNumber GetTeleportationDelayAsHours(Hero teleportingHero, PartyBase target)`

**Purpose:** Reads and returns the `teleportation delay as hours` value held by the current object.

```csharp
// Obtain an instance of DelayedTeleportationModel from the subsystem API first
DelayedTeleportationModel delayedTeleportationModel = ...;
var result = delayedTeleportationModel.GetTeleportationDelayAsHours(teleportingHero, target);
```

### CanPerformImmediateTeleport
`public abstract bool CanPerformImmediateTeleport(Hero hero, MobileParty targetMobileParty, Settlement targetSettlement)`

**Purpose:** Checks whether the current object meets the preconditions for `perform immediate teleport`.

```csharp
// Obtain an instance of DelayedTeleportationModel from the subsystem API first
DelayedTeleportationModel delayedTeleportationModel = ...;
var result = delayedTeleportationModel.CanPerformImmediateTeleport(hero, targetMobileParty, targetSettlement);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
DelayedTeleportationModel instance = ...;
```

## See Also

- [Area Index](../)