---
title: "RaidEventComponent"
description: "Auto-generated class reference for RaidEventComponent."
---
# RaidEventComponent

**Namespace:** TaleWorlds.CampaignSystem.MapEvents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class RaidEventComponent : MapEventComponent`
**Base:** `MapEventComponent`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.MapEvents/RaidEventComponent.cs`

## Overview

`RaidEventComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `RaidEventComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `RaidDamage` | `public float RaidDamage { get; }` |
| `SimulationContext` | `public override MapEvent.PowerCalculationContext SimulationContext { get; }` |

## Key Methods

### CreateRaidEvent
`public static RaidEventComponent CreateRaidEvent(PartyBase attackerParty, PartyBase defenderParty)`

**Purpose:** **Purpose:** Constructs a new raid event entity and returns it to the caller.

```csharp
// Static call; no instance required
RaidEventComponent.CreateRaidEvent(attackerParty, defenderParty);
```

### CreateComponentForOldSaves
`public static RaidEventComponent CreateComponentForOldSaves(MapEvent mapEvent, float nextSettlementDamage, int lootedItemCount, float raidDamage)`

**Purpose:** **Purpose:** Constructs a new component for old saves entity and returns it to the caller.

```csharp
// Static call; no instance required
RaidEventComponent.CreateComponentForOldSaves(mapEvent, 0, 0, 0);
```

## Usage Example

```csharp
var component = agent.GetComponent<RaidEventComponent>();
```

## See Also

- [Area Index](../)