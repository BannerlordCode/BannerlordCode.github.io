---
title: "Army"
description: "A temporary kingdom army formed from lord parties for sieges or decisive battles."
---
# Army

**Namespace:** TaleWorlds.CampaignSystem  
**Module:** TaleWorlds.CampaignSystem  
**Type:** `public class Army : ILootable`  
**Base:** —  
**File:** `TaleWorlds.CampaignSystem/Army.cs`

## Overview

`Army` represents a **temporary army summoned by a kingdom** during a campaign. An army consists of a `LeaderParty` (the summoning party) plus several attached parties, all sharing an objective—usually a siege or a decisive battle.

Core responsibilities:

- Manage cohesion, morale, and total strength.
- Provide gather/dismiss/add-member APIs.
- Determine formation positions of member parties on the map.

## Mental Model

Think of `Army` as a **temporary train assembled by lords**:

- The locomotive is the `LeaderParty` (army leader).
- Each car is a `MobileParty` that has joined.
- The train has a fuel gauge—cohesion. When cohesion runs out or the objective is complete, the train disbands.
- The locomotive decides direction and the cars follow; each car can still fight or retreat independently.

## How to Obtain an Army

```csharp
// iterate active armies
foreach (Army army in Army.Armies)
{
    if (army.Kingdom == Clan.PlayerClan.Kingdom)
    {
        // player-kingdom army
    }
}

// create from a kingdom
Kingdom myKingdom = Clan.PlayerClan.Kingdom;
myKingdom.CreateArmy(myRuler, targetSettlement, Army.ArmyTypes.Besieger);
```

## Core Properties

| Property | Description |
|----------|-------------|
| `Armies` | All active armies. |
| `LeaderParty` | Leader party. |
| `ArmyOwner` | Army leader hero. |
| `Kingdom` | Owning kingdom. |
| `ArmyType` | Army type: `Besieger`, `Raider`, `Defender`, `Patrolling`, etc. |
| `Cohesion` | Cohesion; low cohesion causes parties to leave. |
| `Morale` | Morale. |
| `Name` | Army name. |

## Key Methods

### `public void Gather(Settlement initialHostileSettlement, MBReadOnlyList<MobileParty> partiesToCallToArmy = null)`
Gather parties at the target settlement and start the army action.

```csharp
List<MobileParty> participants = ...;
army.Gather(enemyTown, participants);
```

### `public void AddPartyToMergedParties(MobileParty mobileParty)`
Add a party to the army.

```csharp
army.AddPartyToMergedParties(allyParty);
```

### `public bool DoesLeaderPartyAndAttachedPartiesContain(MobileParty party)`
Check whether a party belongs to the army.

```csharp
bool isMember = army.DoesLeaderPartyAndAttachedPartiesContain(myParty);
```

### `public void BoostCohesionWithInfluence(float cohesionToGain, int cost)`
Spend influence to increase cohesion.

```csharp
army.BoostCohesionWithInfluence(10f, 50);
```

### `public void RecalculateArmyMorale()`
Recalculate army morale.

```csharp
army.RecalculateArmyMorale();
```

### `public void FinishArmyObjective()`
Complete the objective and disband the army.

```csharp
if (army.ArmyObjective == ArmyObjective.BesiegeTown && targetTown.IsUnderSiege == false)
{
    army.FinishArmyObjective();
}
```

### `public float CalculateCurrentStrength()` / `public float GetCustomStrength(BattleSideEnum side, MapEvent.PowerCalculationContext context)`
Compute current/custom battle strength.

```csharp
float power = army.CalculateCurrentStrength();
```

### `public Vec2 GetRelativePositionForParty(MobileParty mobileParty, Vec2 armyFacing)`
Get a party's relative position in the army formation.

```csharp
Vec2 pos = army.GetRelativePositionForParty(party, army.LeaderParty.Bearing);
```

## Typical Usage Examples

### Example 1: Force disband all player-kingdom armies

```csharp
foreach (Army army in Army.Armies.ToList())
{
    if (army.Kingdom == Clan.PlayerClan.Kingdom)
    {
        army.FinishArmyObjective();
    }
}
```

### Example 2: Create a besieging army

```csharp
Settlement target = Settlement.Find("town_A7");
Kingdom kingdom = Clan.PlayerClan.Kingdom;
kingdom.CreateArmy(Hero.MainHero, target, Army.ArmyTypes.Besieger);
```

## Cross-Version Notes

- v1.3.0 / v1.3.15 / v1.4.5 army API is consistent; core flow is `Kingdom.CreateArmy`, `Gather`, `FinishArmyObjective`.
- v1.4.5 adds more AI condition checks, but the create/dismiss flow is unchanged.

## See Also

- [Kingdom](../../campaign/Kingdom/) — the kingdom that creates armies
- [MobileParty](../../campaign/MobileParty/) — army members
- [Settlement](../../campaign/Settlement/) — army target
- [CampaignBehaviorBase](../CampaignBehaviorBase/) — listen for army events
