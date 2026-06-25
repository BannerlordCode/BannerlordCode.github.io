---
title: "BlockadeBattleMapEvent"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BlockadeBattleMapEvent`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BlockadeBattleMapEvent

**Namespace:** TaleWorlds.CampaignSystem.MapEvents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class BlockadeBattleMapEvent : MapEventComponent`
**Base:** `MapEventComponent`
**Area:** campaign-ext

## Overview

`BlockadeBattleMapEvent` lives in `TaleWorlds.CampaignSystem.MapEvents`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

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
// Prepare the required context, then call the static entry point directly
BlockadeBattleMapEvent.CreateBlockadeBattleMapEvent(attackerParty, besiegerParty, false);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
