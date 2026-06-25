---
title: "ForceSuppliesEventComponent"
description: "Auto-generated class reference for ForceSuppliesEventComponent."
---
# ForceSuppliesEventComponent

**Namespace:** TaleWorlds.CampaignSystem.MapEvents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ForceSuppliesEventComponent : MapEventComponent`
**Base:** `MapEventComponent`
**File:** `TaleWorlds.CampaignSystem/MapEvents/ForceSuppliesEventComponent.cs`

## Overview

`ForceSuppliesEventComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `ForceSuppliesEventComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `SimulationContext` | `public override MapEvent.PowerCalculationContext SimulationContext { get; }` |

## Key Methods

### CreateForceSuppliesEvent
`public static ForceSuppliesEventComponent CreateForceSuppliesEvent(PartyBase attackerParty, PartyBase defenderParty)`

**Purpose:** Constructs a new `force supplies event` entity and returns it to the caller.

```csharp
// Static call; no instance required
ForceSuppliesEventComponent.CreateForceSuppliesEvent(attackerParty, defenderParty);
```

### CreateComponentForOldSaves
`public static ForceSuppliesEventComponent CreateComponentForOldSaves(MapEvent mapEvent)`

**Purpose:** Constructs a new `component for old saves` entity and returns it to the caller.

```csharp
// Static call; no instance required
ForceSuppliesEventComponent.CreateComponentForOldSaves(mapEvent);
```

## Usage Example

```csharp
var component = agent.GetComponent<ForceSuppliesEventComponent>();
```

## See Also

- [Area Index](../)