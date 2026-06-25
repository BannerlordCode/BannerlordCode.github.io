---
title: "FieldBattleEventComponent"
description: "Auto-generated class reference for FieldBattleEventComponent."
---
# FieldBattleEventComponent

**Namespace:** TaleWorlds.CampaignSystem.MapEvents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class FieldBattleEventComponent : MapEventComponent`
**Base:** `MapEventComponent`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.MapEvents/FieldBattleEventComponent.cs`

## Overview

`FieldBattleEventComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `FieldBattleEventComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `SimulationContext` | `public override MapEvent.PowerCalculationContext SimulationContext { get; }` |

## Key Methods

### CreateFieldBattleEvent
`public static FieldBattleEventComponent CreateFieldBattleEvent(PartyBase attackerParty, PartyBase defenderParty)`

**Purpose:** **Purpose:** Constructs a new field battle event entity and returns it to the caller.

```csharp
// Static call; no instance required
FieldBattleEventComponent.CreateFieldBattleEvent(attackerParty, defenderParty);
```

### CreateComponentForOldSaves
`public static FieldBattleEventComponent CreateComponentForOldSaves(MapEvent mapEvent)`

**Purpose:** **Purpose:** Constructs a new component for old saves entity and returns it to the caller.

```csharp
// Static call; no instance required
FieldBattleEventComponent.CreateComponentForOldSaves(mapEvent);
```

## Usage Example

```csharp
var component = agent.GetComponent<FieldBattleEventComponent>();
```

## See Also

- [Area Index](../)