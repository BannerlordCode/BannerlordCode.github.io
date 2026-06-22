<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ForceVolunteersEventComponent`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ForceVolunteersEventComponent

**Namespace:** TaleWorlds.CampaignSystem.MapEvents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ForceVolunteersEventComponent : MapEventComponent`
**Base:** `MapEventComponent`
**File:** `TaleWorlds.CampaignSystem/MapEvents/ForceVolunteersEventComponent.cs`

## Overview

`ForceVolunteersEventComponent` is an AgentComponent — per-agent state/logic attached to an Agent. Access via `agent.GetComponent<ForceVolunteersEventComponent>()` (some have a typed agent property). Subclass AgentComponent to add your own.

## Key Properties

| Name | Signature |
|------|-----------|
| `SimulationContext` | `public override MapEvent.PowerCalculationContext SimulationContext { get; }` |

## Key Methods

### CreateForceSuppliesEvent
```csharp
public static ForceVolunteersEventComponent CreateForceSuppliesEvent(PartyBase attackerParty, PartyBase defenderParty)
```

### CreateComponentForOldSaves
```csharp
public static ForceVolunteersEventComponent CreateComponentForOldSaves(MapEvent mapEvent)
```

## Usage Example

```csharp
// Typical usage of ForceVolunteersEventComponent (Component)
agent.GetComponent<ForceVolunteersEventComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)