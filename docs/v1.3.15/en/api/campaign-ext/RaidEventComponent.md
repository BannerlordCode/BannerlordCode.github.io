<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RaidEventComponent`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RaidEventComponent

**Namespace:** TaleWorlds.CampaignSystem.MapEvents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class RaidEventComponent : MapEventComponent`
**Base:** `MapEventComponent`
**File:** `TaleWorlds.CampaignSystem/MapEvents/RaidEventComponent.cs`

## Overview

`RaidEventComponent` is an AgentComponent — per-agent state/logic attached to an Agent. Access via `agent.GetComponent<RaidEventComponent>()` (some have a typed agent property). Subclass AgentComponent to add your own.

## Key Properties

| Name | Signature |
|------|-----------|
| `RaidDamage` | `public float RaidDamage { get; }` |
| `DefenderSide` | `public MapEventSide DefenderSide { get; }` |
| `AttackerSide` | `public MapEventSide AttackerSide { get; }` |
| `MapEventSettlement` | `public Settlement MapEventSettlement { get; }` |
| `IsPlayerMapEvent` | `public bool IsPlayerMapEvent { get; }` |
| `BattleState` | `public BattleState BattleState { get; }` |
| `SimulationContext` | `public override MapEvent.PowerCalculationContext SimulationContext { get; }` |

## Key Methods

### CreateRaidEvent
```csharp
public static RaidEventComponent CreateRaidEvent(PartyBase attackerParty, PartyBase defenderParty)
```

### CreateComponentForOldSaves
```csharp
public static RaidEventComponent CreateComponentForOldSaves(MapEvent mapEvent, float nextSettlementDamage, int lootedItemCount, float raidDamage)
```

## Usage Example

```csharp
// Typical usage of RaidEventComponent (Component)
agent.GetComponent<RaidEventComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)