---
title: "MobileParty"
description: "Moving parties on the campaign map: the player party, lord parties, caravans, villagers, bandits, and more."
---
# MobileParty

**Namespace:** TaleWorlds.CampaignSystem.Party  
**Module:** TaleWorlds.CampaignSystem  
**Type:** `public class MobileParty : PartyBase, ILocatable`  
**Base:** `PartyBase`  
**File:** `TaleWorlds.CampaignSystem/Party/MobileParty.cs`

## Overview

`MobileParty` is the abstraction for **every moving party on Bannerlord's campaign map**: the player's army, lord patrols, caravans, villager parties, bandit hideouts, garrisons, etc. It is the hub connecting `Hero` (lords), `Settlement` (fiefs), `Army` (armies), and `ItemObject` (items/trade).

Core responsibilities:

- Move, path, and change targets on the campaign map.
- Manage member roster (`MemberRoster`), prisoners (`PrisonerRoster`), morale, food, and gold.
- Provide movement-order APIs: `SetMoveEngageParty`, `SetMoveRaidSettlement`, `SetMovePatrolAroundSettlement`, etc.
- Track AI objectives and short-term behavior (`AiBehavior`, `ShortTermBehavior`).

## Mental Model

Think of `MobileParty` as a **movable container on the map**:

- `MobileParty.MainParty` is the player.
- Each `MobileParty` wraps a `PartyBase` (lower-level data and rosters).
- Do not `new MobileParty()` directly; normally use `MobileParty.CreateParty(...)` or let the engine generate from a `PartyTemplateObject`.
- Move position with `SetPositionAfterMapChange`; set intent with `SetMove*` methods; control AI through the `Ai` property.
- Party identity is wrapped by a `PartyComponent` (lord, caravan, bandit, etc.), accessible via `Component` for type-specific behavior.

## How to Obtain a MobileParty

```csharp
MobileParty main = MobileParty.MainParty;

foreach (MobileParty party in MobileParty.All)
{
    if (party.IsLordParty && party.MapFaction == Hero.MainHero.MapFaction)
    {
        // friendly lord party
    }
}
```

## Core Properties

| Property | Description |
|----------|-------------|
| `MainParty` | Player party. |
| `All` | All active parties. |
| `AllCaravanParties` / `AllBanditParties` / `AllLordParties` / `AllVillagerParties` / `AllGarrisonParties` | Collections filtered by party type. |
| `Party` | Underlying `PartyBase` with rosters, items, and gold. |
| `Ai` | `MobilePartyAi` controlling AI objectives and pathfinding. |
| `LeaderHero` | Hero leading the party. |
| `Army` | Army this party belongs to, if any. |
| `CurrentSettlement` | Current settlement, if inside one. |
| `TargetSettlement` | Settlement the AI is heading toward. |
| `IsActive` | Whether the party is still active. |
| `IsLordParty` / `IsCaravan` / `IsBandit` / `IsVillager` / `IsGarrison` / `IsCustomParty` | Party-type checks. |

## Key Methods

### `public static MobileParty CreateParty(string stringId, PartyComponent component)`
Create a new party. Provide a `PartyComponent` to decide party type and behavior.

```csharp
var component = new LordPartyComponent(myHero, myHero.HomeSettlement);
MobileParty party = MobileParty.CreateParty("my_mod_party", component);
party.InitializeMobilePartyAtPosition(new CampaignVec2(500f, 800f));
```

### `public void SetMoveGoToSettlement(Settlement settlement, NavigationType navigationType, bool isTargetingThePort)`
Order the party to travel to a settlement.

```csharp
party.SetMoveGoToSettlement(targetTown, NavigationType.Default, false);
```

### `public void SetMoveEngageParty(MobileParty party, NavigationType navigationType)`
Pursue and engage another party.

```csharp
MobileParty enemy = FindNearestEnemy(party);
party.SetMoveEngageParty(enemy, NavigationType.Default);
```

### `public void SetMoveRaidSettlement(Settlement settlement, NavigationType navigationType)`
Set the party to raid a settlement.

```csharp
party.SetMoveRaidSettlement(enemyVillage, NavigationType.Default);
```

### `public void SetMovePatrolAroundSettlement(Settlement settlement, NavigationType navigationType, bool isTargetingPort)`
Patrol around a settlement.

```csharp
party.SetMovePatrolAroundSettlement(friendlyTown, NavigationType.Default, false);
```

### `public void SetMoveModeHold()`
Stop moving and hold position.

```csharp
party.SetMoveModeHold();
```

### `public void SetPositionAfterMapChange(CampaignVec2 newPosition)`
Restore position after a map scene transition (e.g., returning from a naval battle).

```csharp
party.SetPositionAfterMapChange(new CampaignVec2(100f, 200f));
```

### `public void AddElementToMemberRoster(CharacterObject element, int numberToAdd, bool insertAtFront = false)`
Add troops to the member roster.

```csharp
CharacterObject recruit = MBObjectManager.Instance.GetObject<CharacterObject>("imperial_recruit");
party.MemberRoster.AddToCounts(recruit, 10);
```

### `public void AddPrisoner(CharacterObject element, int numberToAdd)`
Add prisoners.

```csharp
party.PrisonerRoster.AddToCounts(enemyTroop.Character, 5);
```

### `public void SetPartyScout(Hero hero)` / `SetPartyQuartermaster(Hero hero)` / `SetPartyEngineer(Hero hero)` / `SetPartySurgeon(Hero hero)`
Assign hero roles that affect scouting, medicine, engineering, and stewardship.

```csharp
party.SetPartySurgeon(mySurgeonHero);
```

### `public int GetNumDaysForFoodToLast()`
Calculate how many days current food will last.

```csharp
int days = party.GetNumDaysForFoodToLast();
```

### `public bool ComputeIsWaiting()`
Check whether the party is waiting/resting.

```csharp
bool waiting = party.ComputeIsWaiting();
```

### `public void IgnoreForHours(float hours)`
Prevent AI from interacting with this party for the given hours; useful for scripted control.

```csharp
party.IgnoreForHours(12f);
```

## Typical Usage Examples

### Example 1: Create a friendly escort party that follows the player

```csharp
var lordComponent = new LordPartyComponent(friendlyHero, friendlyHero.HomeSettlement);
MobileParty escort = MobileParty.CreateParty("my_mod_escort", lordComponent);
escort.InitializeMobilePartyAtPosition(MobileParty.MainParty.Position2D);
escort.Ai.SetMoveEscortParty(MobileParty.MainParty);
```

### Example 2: Fill the player party with food

```csharp
ItemObject grain = MBObjectManager.Instance.GetObject<ItemObject>("grain");
MobileParty.MainParty.ItemRoster.AddToCounts(grain, 100);
```

### Example 3: Teleport a party to a town

```csharp
party.SetMoveGoToSettlement(targetTown, NavigationType.Default, false);
party.Position2D = targetTown.GatePosition;
```

## Cross-Version Notes

- v1.3.0 / v1.3.15 / v1.4.5 core movement-order APIs are the same.
- v1.4.5 expands naval traversal and sea-battle support; methods like `IsNavalVisualDirty` and `SetSailAtPosition` are more complete there.
- `NavigationType` may gain new enum values in newer versions.

## See Also

- [Settlement](../Settlement/) — locations parties can enter, defend, or raid
- [Army](../../campaign-ext/Army/) — armies formed from multiple parties
- [CampaignBehaviorBase](../../campaign-ext/CampaignBehaviorBase/) — listen for party events
- [Hero](../Hero/) — party leader
- [PartyBase](../PartyBase/) — underlying rosters and items
- [MobilePartyAi](../../campaign-ext/MobilePartyAi/) — AI behavior controls
