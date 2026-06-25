---
title: "HideoutEventComponent"
description: "Auto-generated class reference for HideoutEventComponent."
---
# HideoutEventComponent

**Namespace:** TaleWorlds.CampaignSystem.MapEvents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class HideoutEventComponent : MapEventComponent`
**Base:** `MapEventComponent`
**File:** `TaleWorlds.CampaignSystem/MapEvents/HideoutEventComponent.cs`

## Overview

`HideoutEventComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `HideoutEventComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `SimulationContext` | `public override MapEvent.PowerCalculationContext SimulationContext { get; }` |

## Key Methods

### CreateHideoutEvent
`public static HideoutEventComponent CreateHideoutEvent(PartyBase attackerParty, PartyBase defenderParty, bool isSendTroops)`

**Purpose:** Constructs a new `hideout event` entity and returns it to the caller.

```csharp
// Static call; no instance required
HideoutEventComponent.CreateHideoutEvent(attackerParty, defenderParty, false);
```

### CreateComponentForOldSaves
`public static HideoutEventComponent CreateComponentForOldSaves(MapEvent mapEvent, bool isSendTroops)`

**Purpose:** Constructs a new `component for old saves` entity and returns it to the caller.

```csharp
// Static call; no instance required
HideoutEventComponent.CreateComponentForOldSaves(mapEvent, false);
```

## Usage Example

```csharp
var component = agent.GetComponent<HideoutEventComponent>();
```

## See Also

- [Area Index](../)