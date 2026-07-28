---
title: "Army"
description: "Temporary kingdom army: several MobileParties share a goal under LeaderParty; cohesion drain or finished objective ends the army."
---
# Army

**Namespace:** `TaleWorlds.CampaignSystem`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class Army`  
**Base:** (none)  
**File:** `TaleWorlds.CampaignSystem/Army.cs`

## One-line job

On the campaign map, **temporarily** group several `MobileParty` instances into one strategic force: a leader party, cohesion, morale, and an objective type (siege / raid / defend, …). When the goal ends or conditions fail, the army disbands.

## Mental Model

```
Kingdom.CreateArmy / Gather
         │
         ▼
      Army
   LeaderParty (locomotive MobileParty)
        │
        ├── Attached parties (cars)
        ├── Cohesion (fuel) ──runs out──► DisbandArmyAction
        ├── Morale
        └── ArmyType + target Settlement
```

Treat `Army` as a **train lords assemble for a short campaign**:

| Dimension | Meaning |
|-----------|---------|
| Who creates | Usually `Kingdom.CreateArmy(...)`; gather flow can use `GatherArmyAction` |
| Who holds | `Kingdom.Armies`; reverse ref `MobileParty.Army` on members |
| Layer | Campaign-map strategy (not Mission formations) |
| Lifetime | **Short**: objective done, cohesion gone, leader dead/captured, no active war, … → `DisbandArmyAction` / `FinishArmyObjective` |
| vs Party | Cars remain independent `MobileParty`s; they can leave or fight alone |

### When to use

- "Is this party in an army?": `party.Army`, `army.DoesLeaderPartyAndAttachedPartiesContain(party)`.
- Create / gather siege or defense armies: `Kingdom.CreateArmy` + `Gather`.
- Read army strength / headcount: `CalculateCurrentStrength`, `TotalManCount`, `TotalHealthyMembers`.
- Quest scripts that force disband or top up cohesion: `DisbandArmyAction` / `BoostCohesionWithInfluence`.
- Follow positions on the map: `GetRelativePositionForParty`.

### When not to use / do not write fields directly

| Don't | Why | Do instead |
|-------|-----|------------|
| `party.Army = null` as a clean leave | Lists, cohesion, AI goals desync | Official leave / disband Actions or `FinishArmyObjective` paths |
| Build permanent TOE on Army as core save gameplay | Engine treats armies as temporary; load may disband them again | Persist intent in your Behavior data, re-gather when needed |
| Force a siege army with no kingdom / no war | AI and `ApplyByNoActiveWar` tear it down | `DeclareWarAction` first, then create army |
| `new Army(...)` without attaching to Kingdom | No tick, no UI, easy leak | `Kingdom.CreateArmy` |
| Use Army instead of `MobileParty` for rosters | Troops live on the party | `MemberRoster` / recruit Actions |
| Confuse map army with battlefield `Formation` | Different layers | Mission: `Team` / `Formation` |

## Dependencies

### Upstream

| Type | Relation |
|------|----------|
| [`Kingdom`](../../campaign/Kingdom) | Owning kingdom; `CreateArmy`; `Armies` list |
| [`MobileParty`](../../campaign/MobileParty) | `LeaderParty` and attached parties |
| [`Hero`](../../campaign/Hero) | `ArmyOwner` (army leader hero) |
| [`Settlement`](../../campaign/Settlement) | Gather / siege / defend targets |

### Downstream

| Type | Relation |
|------|----------|
| Map AI | Attached follow, `ArmyPositionAdder` |
| Siege / `SiegeEvent` | `ArmyTypes.Besieger` and settlement interaction |
| UI notices | `GetNotificationText` / `GetLongTermBehaviorText` |

### Events / Actions / Models / Save

| Channel | Relation |
|---------|----------|
| Actions | `GatherArmyAction.Apply`, `DisbandArmyAction.ApplyBy*` (objective finished, cohesion, starvation, leader death, and many other reasons) |
| Events | Create, disband, party join/leave related `CampaignEvents` |
| Models | Daily cohesion change, dispersion thresholds via campaign Models |
| Save | Army state can save with the campaign; **still a temporary object**. After load, unmet conditions may disband again |

## Risks and crash boundaries

| Risk | Result | Mitigation |
|------|--------|------------|
| Disband while iterating `Armies` | Collection modified exception | `ToList()` then mutate |
| Leader party hit by `DestroyPartyAction` | Army collapses; use `ApplyByLeaderPartyRemoved` path | Disband army before destroy, or official destroy flow |
| Extreme `Cohesion` writes without notify | Odd AI / UI | `BoostCohesionWithInfluence` or intentional direct write with known side effects |
| Create army at sea / without ships (1.4 navy) | `ApplyByNoShip`-style disband | Check navigation capability |
| `Campaign.Current == null` | NRE | Campaign context only |
| Cache a disbanded `Army` | Null `LeaderParty` | Always re-fetch from `party.Army` / `kingdom.Armies` |

## Key members (purpose + timing)

### Identity and composition

| Member | Purpose | Timing |
|--------|---------|--------|
| ctor `Army(Kingdom, MobileParty leaderParty, ArmyTypes)` | Low-level construct | Prefer `Kingdom.CreateArmy` |
| `LeaderParty` | Locomotive party | Read-only use |
| `ArmyOwner` | Leader hero | Display / rights |
| `Kingdom` | Owning kingdom | Friend/foe filters |
| `ArmyType` | Besieger / Raider / Defender / Patrolling, … | Objective logic |
| `Name` / `UpdateName` | Display name | UI |
| `DoesLeaderPartyAndAttachedPartiesContain` | Membership test | Quest conditions |
| `LeaderPartyAndAttachedPartiesCount` | Size | AI |
| `IsReady` / `IsArmyInGatheringState` / `IsWaitingForArmyMembers` | Gather phase | Script waits |

### Morale, cohesion, strength

| Member | Purpose |
|--------|---------|
| `Cohesion` / `DailyCohesionChange` / `CohesionThresholdForDispersion` | Fuel and break-up line |
| `BoostCohesionWithInfluence` | Spend influence to restore cohesion |
| `Morale` / `RecalculateArmyMorale` | Morale |
| `TotalHealthyMembers` / `TotalManCount` / `TotalRegularCount` | Headcount |
| `EstimatedStrength` / `CalculateCurrentStrength` / `GetCustomStrength` | Strength estimates |

### Lifecycle methods

| Member | Purpose |
|--------|---------|
| `Gather(settlement, partiesToCall)` | Gather toward target and pull parties |
| `AddPartyToMergedParties` | Attach a party |
| `FinishArmyObjective` | End objective (often leads to disband) |
| `GetRelativePositionForParty` | Relative formation coordinates |
| `SetPositionAfterMapChange` / `CheckPositionsForMapChangeAndUpdateIfNeeded` | Fix positions after map change |

```csharp
Army army = MobileParty.MainParty.Army;
if (army != null && army.Cohesion < 30f)
{
    army.BoostCohesionWithInfluence(cohesionToGain: 15f, cost: 50);
}
```

## Real examples

### Example 1: Disband all player-kingdom armies (safe copy)

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

public void DisbandPlayerKingdomArmies()
{
    Kingdom k = Clan.PlayerClan.Kingdom;
    if (k == null)
    {
        return;
    }
    foreach (Army army in k.Armies.ToList())
    {
        DisbandArmyAction.ApplyByUnknownReason(army);
    }
}
```

### Example 2: Create a siege army

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Settlements;

public void CreateSiegeArmyOn(Settlement target)
{
    Kingdom kingdom = Clan.PlayerClan.Kingdom;
    Hero leader = Hero.MainHero;
    if (kingdom == null || target == null || !target.IsFortification)
    {
        return;
    }
    if (leader.PartyBelongedTo == null)
    {
        return;
    }
    if (target.MapFaction == null || !target.MapFaction.IsAtWarWith(kingdom))
    {
        return;
    }
    kingdom.CreateArmy(leader, target, Army.ArmyTypes.Besieger);
}
```

### Example 3: Is a party already in the main army?

```csharp
using TaleWorlds.CampaignSystem.Party;

public bool IsInMainArmy(MobileParty party)
{
    Army army = MobileParty.MainParty.Army;
    if (army == null || party == null)
    {
        return false;
    }
    return army.DoesLeaderPartyAndAttachedPartiesContain(party);
}
```

### Example 4: End army when siege objective lifts (script)

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.Settlements;

public void FinishIfSiegeLifted(Army army, Settlement wasTarget)
{
    if (army == null || wasTarget == null)
    {
        return;
    }
    if (!wasTarget.IsUnderSiege)
    {
        // Prefer reason-tagged disband for logs and AI
        DisbandArmyAction.ApplyByObjectiveFinished(army);
        // or army.FinishArmyObjective();
    }
}
```

## Cross-version notes

- **1.3.x:** `Kingdom.CreateArmy`, `Gather`, and rich `DisbandArmyAction` reason variants are in place.
- **1.4.5:** Naval / no-ship disband reasons are fuller; check `HasNavalNavigationCapability` / at-sea before creating.
- Do not assume an army lives forever. Store **intent** in a `CampaignBehavior`, call `CreateArmy` when you need the group again.

## ↑ Parent Navigation

- [campaign-ext section](./)
- [API section](../)
- [SDK overview](../../../architecture/sdk-overview)
- [Campaign system guide](../../../guide/campaign-system)

## Sibling Navigation

| Page | Relation |
|------|----------|
| [Kingdom](../../campaign/Kingdom) | Creates and holds armies |
| [MobileParty](../../campaign/MobileParty) | Locomotive and cars |
| [Settlement](../../campaign/Settlement) | Gather / siege targets |
| [Clan](../../campaign/Clan) | Owner clans of member parties |
| [Hero](../../campaign/Hero) | ArmyOwner |
| [CampaignBehaviorBase](../CampaignBehaviorBase) | Listen for create / disband |

## See also

- [DisbandArmyAction](../DisbandArmyAction) / [GatherArmyAction](../GatherArmyAction)
- [SiegeEvent](../SiegeEvent): siege events
- [Crash boundaries](../../../architecture/crash-boundaries)
