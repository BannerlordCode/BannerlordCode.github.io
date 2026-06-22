<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FieldBattleEventComponent`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FieldBattleEventComponent

**Namespace:** TaleWorlds.CampaignSystem.MapEvents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class FieldBattleEventComponent : MapEventComponent`
**Base:** `MapEventComponent`
**File:** `TaleWorlds.CampaignSystem/MapEvents/FieldBattleEventComponent.cs`

## Overview

`FieldBattleEventComponent` is an AgentComponent — per-agent state/logic attached to an Agent. Access via `agent.GetComponent<FieldBattleEventComponent>()` (some have a typed agent property). Subclass AgentComponent to add your own.

## Key Properties

| Name | Signature |
|------|-----------|
| `SimulationContext` | `public override MapEvent.PowerCalculationContext SimulationContext { get; }` |

## Key Methods

### CreateFieldBattleEvent
```csharp
public static FieldBattleEventComponent CreateFieldBattleEvent(PartyBase attackerParty, PartyBase defenderParty)
```

### CreateComponentForOldSaves
```csharp
public static FieldBattleEventComponent CreateComponentForOldSaves(MapEvent mapEvent)
```

## Usage Example

```csharp
// Typical usage of FieldBattleEventComponent (Component)
agent.GetComponent<FieldBattleEventComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)