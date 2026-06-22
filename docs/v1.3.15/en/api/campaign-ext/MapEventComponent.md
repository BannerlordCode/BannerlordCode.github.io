<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapEventComponent`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapEventComponent

**Namespace:** TaleWorlds.CampaignSystem.MapEvents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MapEventComponent`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/MapEvents/MapEventComponent.cs`

## Overview

`MapEventComponent` is an AgentComponent — per-agent state/logic attached to an Agent. Access via `agent.GetComponent<MapEventComponent>()` (some have a typed agent property). Subclass AgentComponent to add your own.

## Key Properties

| Name | Signature |
|------|-----------|
| `MapEvent` | `public MapEvent MapEvent { get; }` |
| `SimulationContext` | `public abstract MapEvent.PowerCalculationContext SimulationContext { get; }` |

## Usage Example

```csharp
// Typical usage of MapEventComponent (Component)
agent.GetComponent<MapEventComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)