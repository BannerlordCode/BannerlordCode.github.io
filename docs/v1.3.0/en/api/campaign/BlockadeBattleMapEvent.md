<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BlockadeBattleMapEvent`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BlockadeBattleMapEvent

**Namespace:** TaleWorlds.CampaignSystem.MapEvents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class BlockadeBattleMapEvent : MapEventComponent`
**Base:** `MapEventComponent`
**File:** `TaleWorlds.CampaignSystem/MapEvents/BlockadeBattleMapEvent.cs`

## Overview

`BlockadeBattleMapEvent` lives in `TaleWorlds.CampaignSystem.MapEvents` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.MapEvents` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SimulationContext` | `public override MapEvent.PowerCalculationContext SimulationContext { get; }` |

## Key Methods

### CreateBlockadeBattleMapEvent
`public static BlockadeBattleMapEvent CreateBlockadeBattleMapEvent(PartyBase attackerParty, PartyBase besiegerParty, bool isSallyOut)`

**Purpose:** Creates a new `blockade battle map event` instance or object.

## Usage Example

```csharp
BlockadeBattleMapEvent.CreateBlockadeBattleMapEvent(attackerParty, besiegerParty, false);
```

## See Also

- [Complete Class Catalog](../catalog)