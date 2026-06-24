<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapEventParty`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MapEventParty

**Namespace:** TaleWorlds.CampaignSystem.MapEvents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MapEventParty`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.MapEvents/MapEventParty.cs`

## Overview

`MapEventParty` lives in `TaleWorlds.CampaignSystem.MapEvents` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.MapEvents` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Party` | `public PartyBase Party { get; }` |
| `GainedRenownExplained` | `public ExplainedNumber GainedRenownExplained { get; }` |
| `GainedInfluenceExplained` | `public ExplainedNumber GainedInfluenceExplained { get; }` |
| `GainedMoraleExplained` | `public ExplainedNumber GainedMoraleExplained { get; }` |
| `PlunderedGold` | `public int PlunderedGold { get; set; }` |
| `GoldLost` | `public int GoldLost { get; set; }` |
| `RosterToReceiveLootMembers` | `public TroopRoster RosterToReceiveLootMembers { get; }` |
| `RosterToReceiveLootPrisoners` | `public TroopRoster RosterToReceiveLootPrisoners { get; }` |
| `RosterToReceiveLootItems` | `public ItemRoster RosterToReceiveLootItems { get; }` |
| `HasTroopLimit` | `public bool HasTroopLimit { get; }` |

## Key Methods

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### Update
`public void Update()`

**Purpose:** Updates the state or data of `update`.

### OnTroopKilled
`public void OnTroopKilled(UniqueTroopDescriptor troopSeed)`

**Purpose:** Called when the `troop killed` event is raised.

### OnTroopWounded
`public void OnTroopWounded(UniqueTroopDescriptor troopSeed)`

**Purpose:** Called when the `troop wounded` event is raised.

### OnTroopRouted
`public void OnTroopRouted(UniqueTroopDescriptor troopSeed)`

**Purpose:** Called when the `troop routed` event is raised.

### OnShipSunk
`public void OnShipSunk(Ship ship)`

**Purpose:** Called when the `ship sunk` event is raised.

### OnShipDamaged
`public void OnShipDamaged(Ship ship, SiegeEngineType siegeEngine, int damage)`

**Purpose:** Called when the `ship damaged` event is raised.

### OnShipScoreHit
`public void OnShipScoreHit(Ship ship, Ship struckShip, SiegeEngineType siegeEngine, int damage, bool isFinishingStrike)`

**Purpose:** Called when the `ship score hit` event is raised.

### GetTroop
`public CharacterObject GetTroop(UniqueTroopDescriptor troopSeed)`

**Purpose:** Gets the current value of `troop`.

### GetTroopState
`public RosterTroopState GetTroopState(UniqueTroopDescriptor troopSeed)`

**Purpose:** Gets the current value of `troop state`.

### OnRoundEnd
`public void OnRoundEnd(MapEventSide partySide, BattleSideEnum roundWinner)`

**Purpose:** Called when the `round end` event is raised.

### OnTroopScoreHit
`public void OnTroopScoreHit(UniqueTroopDescriptor attackerTroopDesc, CharacterObject attackedTroop, int damage, bool isFatal, bool isTeamKill, WeaponComponentData attackerWeapon, bool isSimulatedHit)`

**Purpose:** Called when the `troop score hit` event is raised.

### SetRenownInfluenceAndMoraleOnBattleEnd
`public void SetRenownInfluenceAndMoraleOnBattleEnd(ExplainedNumber renown, ExplainedNumber influence, ExplainedNumber morale)`

**Purpose:** Sets the value or state of `renown influence and morale on battle end`.

## Usage Example

```csharp
var value = new MapEventParty();
value.ToString();
```

## See Also

- [Complete Class Catalog](../catalog)