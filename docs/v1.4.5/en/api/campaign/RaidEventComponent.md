<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RaidEventComponent`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# RaidEventComponent

**Namespace:** TaleWorlds.CampaignSystem.MapEvents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class RaidEventComponent : MapEventComponent`
**Base:** `MapEventComponent`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.MapEvents/RaidEventComponent.cs`

## Overview

`RaidEventComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `RaidEventComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `RaidDamage` | `public float RaidDamage { get; }` |
| `SimulationContext` | `public override MapEvent.PowerCalculationContext SimulationContext { get; }` |

## Key Methods

### CreateRaidEvent
`public static RaidEventComponent CreateRaidEvent(PartyBase attackerParty, PartyBase defenderParty)`

**Purpose:** Creates a new `raid event` instance or object.

### CreateComponentForOldSaves
`public static RaidEventComponent CreateComponentForOldSaves(MapEvent mapEvent, float nextSettlementDamage, int lootedItemCount, float raidDamage)`

**Purpose:** Creates a new `component for old saves` instance or object.

## Usage Example

```csharp
var component = agent.GetComponent<RaidEventComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)