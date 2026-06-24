<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ForceSuppliesEventComponent`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Creates a new `force supplies event` instance or object.

### CreateComponentForOldSaves
`public static ForceSuppliesEventComponent CreateComponentForOldSaves(MapEvent mapEvent)`

**Purpose:** Creates a new `component for old saves` instance or object.

## Usage Example

```csharp
var component = agent.GetComponent<ForceSuppliesEventComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)