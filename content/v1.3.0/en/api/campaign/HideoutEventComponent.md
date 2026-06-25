---
title: "HideoutEventComponent"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HideoutEventComponent`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Creates a new `hideout event` instance or object.

### CreateComponentForOldSaves
`public static HideoutEventComponent CreateComponentForOldSaves(MapEvent mapEvent, bool isSendTroops)`

**Purpose:** Creates a new `component for old saves` instance or object.

## Usage Example

```csharp
var component = agent.GetComponent<HideoutEventComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)