<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SiegeAmbushEventComponent`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SiegeAmbushEventComponent

**Namespace:** TaleWorlds.CampaignSystem.MapEvents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SiegeAmbushEventComponent : MapEventComponent`
**Base:** `MapEventComponent`
**File:** `TaleWorlds.CampaignSystem/MapEvents/SiegeAmbushEventComponent.cs`

## Overview

`SiegeAmbushEventComponent` is an AgentComponent — per-agent state/logic attached to an Agent. Access via `agent.GetComponent<SiegeAmbushEventComponent>()` (some have a typed agent property). Subclass AgentComponent to add your own.

## Key Properties

| Name | Signature |
|------|-----------|
| `SimulationContext` | `public override MapEvent.PowerCalculationContext SimulationContext { get; }` |

## Key Methods

### CreateSiegeAmbushEvent
```csharp
public static SiegeAmbushEventComponent CreateSiegeAmbushEvent(PartyBase attackerParty, PartyBase defenderParty)
```

## Usage Example

```csharp
// Typical usage of SiegeAmbushEventComponent (Component)
agent.GetComponent<SiegeAmbushEventComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)