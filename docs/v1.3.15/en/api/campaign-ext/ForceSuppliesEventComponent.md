<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ForceSuppliesEventComponent`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ForceSuppliesEventComponent

**Namespace:** TaleWorlds.CampaignSystem.MapEvents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ForceSuppliesEventComponent : MapEventComponent`
**Base:** `MapEventComponent`
**File:** `TaleWorlds.CampaignSystem/MapEvents/ForceSuppliesEventComponent.cs`

## Overview

`ForceSuppliesEventComponent` is an AgentComponent — per-agent state/logic attached to an Agent. Access via `agent.GetComponent<ForceSuppliesEventComponent>()` (some have a typed agent property). Subclass AgentComponent to add your own.

## Key Properties

| Name | Signature |
|------|-----------|
| `SimulationContext` | `public override MapEvent.PowerCalculationContext SimulationContext { get; }` |

## Key Methods

### CreateForceSuppliesEvent
```csharp
public static ForceSuppliesEventComponent CreateForceSuppliesEvent(PartyBase attackerParty, PartyBase defenderParty)
```

### CreateComponentForOldSaves
```csharp
public static ForceSuppliesEventComponent CreateComponentForOldSaves(MapEvent mapEvent)
```

## Usage Example

```csharp
// Typical usage of ForceSuppliesEventComponent (Component)
agent.GetComponent<ForceSuppliesEventComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)