---
title: "SiegeAmbushEventComponent"
description: "Auto-generated class reference for SiegeAmbushEventComponent."
---
# SiegeAmbushEventComponent

**Namespace:** TaleWorlds.CampaignSystem.MapEvents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SiegeAmbushEventComponent : MapEventComponent`
**Base:** `MapEventComponent`
**File:** `TaleWorlds.CampaignSystem/MapEvents/SiegeAmbushEventComponent.cs`

## Overview

`SiegeAmbushEventComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `SiegeAmbushEventComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `SimulationContext` | `public override MapEvent.PowerCalculationContext SimulationContext { get; }` |

## Key Methods

### CreateSiegeAmbushEvent
`public static SiegeAmbushEventComponent CreateSiegeAmbushEvent(PartyBase attackerParty, PartyBase defenderParty)`

**Purpose:** Constructs a new siege ambush event entity and returns it to the caller.

```csharp
// Static call; no instance required
SiegeAmbushEventComponent.CreateSiegeAmbushEvent(attackerParty, defenderParty);
```

## Usage Example

```csharp
var component = agent.GetComponent<SiegeAmbushEventComponent>();
```

## See Also

- [Area Index](../)