---
title: "ForceVolunteersEventComponent"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ForceVolunteersEventComponent`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ForceVolunteersEventComponent

**Namespace:** TaleWorlds.CampaignSystem.MapEvents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ForceVolunteersEventComponent : MapEventComponent`
**Base:** `MapEventComponent`
**File:** `TaleWorlds.CampaignSystem/MapEvents/ForceVolunteersEventComponent.cs`

## Overview

`ForceVolunteersEventComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `ForceVolunteersEventComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `SimulationContext` | `public override MapEvent.PowerCalculationContext SimulationContext { get; }` |

## Key Methods

### CreateForceSuppliesEvent
`public static ForceVolunteersEventComponent CreateForceSuppliesEvent(PartyBase attackerParty, PartyBase defenderParty)`

**Purpose:** Creates a new `force supplies event` instance or object.

### CreateComponentForOldSaves
`public static ForceVolunteersEventComponent CreateComponentForOldSaves(MapEvent mapEvent)`

**Purpose:** Creates a new `component for old saves` instance or object.

## Usage Example

```csharp
var component = agent.GetComponent<ForceVolunteersEventComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)