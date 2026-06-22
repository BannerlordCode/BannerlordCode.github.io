<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HideoutEventComponent`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# HideoutEventComponent

**Namespace:** TaleWorlds.CampaignSystem.MapEvents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class HideoutEventComponent : MapEventComponent`
**Base:** `MapEventComponent`
**File:** `TaleWorlds.CampaignSystem/MapEvents/HideoutEventComponent.cs`

## Overview

`HideoutEventComponent` is an AgentComponent — per-agent state/logic attached to an Agent. Access via `agent.GetComponent<HideoutEventComponent>()` (some have a typed agent property). Subclass AgentComponent to add your own.

## Key Properties

| Name | Signature |
|------|-----------|
| `SimulationContext` | `public override MapEvent.PowerCalculationContext SimulationContext { get; }` |

## Key Methods

### CreateHideoutEvent
```csharp
public static HideoutEventComponent CreateHideoutEvent(PartyBase attackerParty, PartyBase defenderParty, bool isSendTroops)
```

### CreateComponentForOldSaves
```csharp
public static HideoutEventComponent CreateComponentForOldSaves(MapEvent mapEvent, bool isSendTroops)
```

## Usage Example

```csharp
// Typical usage of HideoutEventComponent (Component)
agent.GetComponent<HideoutEventComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)