---
title: "BanditDensityModel"
description: "The replaceable balance model for bandit density: thirteen abstract members covering hideout counts, garrison sizes, hideout-mission troop bounds, per-faction looter caps, and the naval safe-zone test. DefaultBanditDensityModel is the only implementation."
---

# BanditDensityModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class BanditDensityModel : MBGameModel<BanditDensityModel>`
**Base:** `MBGameModel<BanditDensityModel>`
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/BanditDensityModel.cs`

## Overview

`BanditDensityModel` is the **abstract contract for every count and capacity rule of the bandit ecosystem**. It answers three kinds of question: **how many hideouts may exist** (`NumberOfMaximumHideoutsAtEachBanditFaction` / `NumberOfInitialHideoutsAtEachBanditFaction`), **how many parties and troops each hideout holds** (`NumberOfMaximumBanditPartiesInEachHideout` / `NumberOfMaximumBanditPartiesAroundEachHideout` / `NumberOfMinimumBanditPartiesInAHideoutToInfestIt`), and **how large hideout missions and looter groups may get** (`GetMinimumTroopCountForHideoutMission` / `GetMaximumTroopCountForHideoutMission` / `NumberOfMaximumTroopCountForFirstFightInHideout` / `NumberOfMaximumTroopCountForBossFightInHideout` / `SpawnPercentageForFirstFightInHideoutMission` / `GetMaxSupportedNumberOfLootersForClan`).

In the architecture it carries the **"quantitative rules lifted out of the behaviors"** slot. The behaviors that actually spawn bandits, open hideouts, and assemble missions — [BanditSpawnCampaignBehavior](../BanditSpawnCampaignBehavior), `HideoutCampaignBehavior`, `AiLandBanditPatrollingBehavior` — hard-code **nothing**: all thirty call sites in the tree go through `Campaign.Current.Models.BanditDensityModel.*`. That is precisely why changing bandit density means swapping a model rather than patching a behavior.

The only implementation is `DefaultBanditDensityModel`. Its defaults are: 9 hideouts maximum and 7 initial per faction, 3 parties inside a hideout and 3 around it, 2 parties to count as infested, 10 minimum troops for a hideout mission, first-fight cap `Floor(11 * (2 + PlayerProgress))`, boss-fight cap `Floor(1 + 5 * (1 + PlayerProgress))`, first-fight spawn ratio 0.8, and a looter cap of 270 (50 for `deserters`, with `looters` receiving 270 minus the deserters' live `WarPartyComponents` count). `IsPositionInsideNavalSafeZone` **returns false unconditionally** in the official implementation — vanilla defines no naval safe zone.

## Mental Model

Think of it as **the density knob panel of the bandit world**.

- **It only returns numbers and never acts.** Every member is a pure query; the caller behavior decides what to do with the value. **The model never spawns, never validates, and never caches.**
- **`MBGameModel<T>` with a single type argument means one instance per campaign.** Read it via `Campaign.Current.Models.BanditDensityModel`. Returning null makes every call site throw — not one of them null-checks.
- **`NumberOfMinimumBanditPartiesInAHideoutToInfestIt` is the most widely reused member.** It is not just an infestation threshold: `Hideout.IsInfested` (`Hideout.cs:25`), `AiLandBanditPatrollingBehavior` (`AiLandBanditPatrollingBehavior.cs:20/34`), `IncidentEffect` (`IncidentEffect.cs:693`), and `BanditSpawnCampaignBehavior` (`BanditSpawnCampaignBehavior.cs:31`) all treat it as the same switch. Changing it changes all four behaviours at once.
- **The two "hideout capacity" members are different things.** `NumberOfMaximumBanditPartiesInEachHideout` governs parties **inside** the hideout; `NumberOfMaximumBanditPartiesAroundEachHideout` governs parties **patrolling around** it. `BanditSpawnCampaignBehavior.cs:41` sums them into a single `_numberOfMaxBanditCountPerClanHideout` ceiling.
- **`GetMaxSupportedNumberOfLootersForClan` is not a constant.** At `DefaultBanditDensityModel.cs:53-64` the `looters` cap is `270 - DeserterClan.WarPartyComponents.Count`, which **floats as deserter war parties die on the field**; `deserters` is hard-coded to 50. Call sites are `BanditSpawnCampaignBehavior.cs:505` and `DesertersCampaignBehavior.cs:107/165`.
- **Hideout mission troop counts are two separate questions.** `NumberOfMaximumTroopCountForFirstFightInHideout` is a **global fixed ceiling**, while `GetMaximumTroopCountForHideoutMission(party, isAssault)` computes a ceiling **per party and per assault flag**. `HideoutCampaignBehavior.cs:609` sums the two boss-phase ceilings into a total budget. They are not interchangeable.
- **The `isAssault` flag changes everything.** `GetMinimumTroopCountForHideoutMission(party, false)` returns 25 by default and 8 for `isAssault: true`; the upper bound is 40 versus 15. **The same method differs by more than threefold between "being chased" and "storming".**

### Call-site lookup for all thirteen members

| Member | Who reads it | What it decides |
| --- | --- | --- |
| `NumberOfMaximumHideoutsAtEachBanditFaction` | `BanditSpawnCampaignBehavior.cs:35` | Hard hideout cap per faction |
| `NumberOfInitialHideoutsAtEachBanditFaction` | `BanditSpawnCampaignBehavior.cs:37` | Hideouts built at game start |
| `NumberOfMinimumBanditPartiesInAHideoutToInfestIt` | `Hideout.cs:25`, `BanditSpawnCampaignBehavior.cs:31`, `AiLandBanditPatrollingBehavior.cs:20`, `IncidentEffect.cs:693` | Whether a hideout counts as infested |
| `NumberOfMaximumBanditPartiesInEachHideout` | `BanditSpawnCampaignBehavior.cs:39`, `AiLandBanditPatrollingBehavior.cs:35` | Cap on parties garrisoned inside |
| `NumberOfMaximumBanditPartiesAroundEachHideout` | `BanditSpawnCampaignBehavior.cs:33`, `AiVisitSettlementBehavior.cs:508` | Cap on parties loitering around |
| `GetMaxSupportedNumberOfLootersForClan` | `BanditSpawnCampaignBehavior.cs:505`, `DesertersCampaignBehavior.cs:107,165` | Per-faction looter cap |
| `NumberOfMinimumBanditTroopsInHideoutMission` | `HideoutCampaignBehavior.cs:608` | Lower bound for a hideout mission |
| `NumberOfMaximumTroopCountForFirstFightInHideout` | `HideoutCampaignBehavior.cs:609`, `MapEventHelper.cs:150` | Fixed first-phase ceiling |
| `NumberOfMaximumTroopCountForBossFightInHideout` | `HideoutCampaignBehavior.cs:609` | Fixed boss-phase ceiling |
| `SpawnPercentageForFirstFightInHideoutMission` | `MapEventHelper.cs:150` | Share of the target actually spawned in phase one |
| `GetMinimumTroopCountForHideoutMission` | `HideoutCampaignBehavior.cs:481/520/580` | Minimum garrison, branched on `isAssault` |
| `GetMaximumTroopCountForHideoutMission` | Hideout mission assembly | Maximum garrison, branched on party and `isAssault` |
| `IsPositionInsideNavalSafeZone` | `MobilePartyAi.cs:1327/1364` | Whether an AI waypoint sits in a naval safe zone |

## How to use

**How to obtain it.** **Read the active model — you cannot instantiate it.** `public abstract class BanditDensityModel : MBGameModel<BanditDensityModel>` is reached as `Campaign.Current.Models.BanditDensityModel`. To replace it you register your own `MBGameModel<BanditDensityModel>` during `OnGameInitialization` and implement every abstract member.

```csharp
BanditDensityModel density = Campaign.Current.Models.BanditDensityModel;
// a custom model must be registered during OnGameInitialization — see the pitfall
```

**The most common pitfall.** **Returning null means a tree-wide NRE.** None of the thirty call sites null-checks `Campaign.Current.Models.BanditDensityModel`, so a bad registration crashes somewhere unrelated.

## Key members

| Member | Signature | What this member is actually for |
| --- | --- | --- |
| `NumberOfMinimumBanditPartiesInAHideoutToInfestIt` | `public abstract int NumberOfMinimumBanditPartiesInAHideoutToInfestIt { get; }` | How many parties make a hideout count as infested; default **2**. **It is reused as one switch in four places**: `Hideout.cs:25` writes it into `Hideout.IsInfested`, `AiLandBanditPatrollingBehavior.cs:20` uses it to decide bandit patrolling, `IncidentEffect.cs:693` uses it to size incident effects, and `BanditSpawnCampaignBehavior.cs:31` uses it for spawn density. Changing this one number moves all four paths. |
| `NumberOfMaximumBanditPartiesInEachHideout` | `public abstract int NumberOfMaximumBanditPartiesInEachHideout { get; }` | Cap on bandit parties garrisoned **inside** a hideout; default **3**. `BanditSpawnCampaignBehavior.cs:41` adds it to the around-hideout cap to form `_numberOfMaxBanditCountPerClanHideout`. |
| `NumberOfMaximumBanditPartiesAroundEachHideout` | `public abstract int NumberOfMaximumBanditPartiesAroundEachHideout { get; }` | Cap on parties roaming **around** a hideout; default **3**. This is a different quantity from the previous member, not another spelling of "hideout capacity". |
| `NumberOfMaximumHideoutsAtEachBanditFaction` | `public abstract int NumberOfMaximumHideoutsAtEachBanditFaction { get; }` | Hard cap on hideouts per bandit faction; default **9**. The very first statement of `DailyTick` at `BanditSpawnCampaignBehavior.cs:208` is `if (_numberOfMaxHideoutsAtEachBanditFaction > 0) AddNewHideouts();`, so **setting it to 0 disables hideout expansion entirely**. |
| `NumberOfInitialHideoutsAtEachBanditFaction` | `public abstract int NumberOfInitialHideoutsAtEachBanditFaction { get; }` | Hideouts built per faction at game start; default **7**. Read exactly once by `InitializeInitialHideouts` → `SpawnHideoutsAndBanditsPartiallyOnNewGame` (`BanditSpawnCampaignBehavior.cs:141-147`); **loading a save does not rebuild it**. |
| `NumberOfMinimumBanditTroopsInHideoutMission` | `public abstract int NumberOfMinimumBanditTroopsInHideoutMission { get; }` | Lower bound on the total troop count of a hideout mission; default **10**. `HideoutCampaignBehavior.cs:608` uses it as the floor when sizing the garrison. |
| `NumberOfMaximumTroopCountForFirstFightInHideout` | `public abstract int NumberOfMaximumTroopCountForFirstFightInHideout { get; }` | **Fixed** cap on first-phase hideout mission troops; default `Floor(11 * (2 + PlayerProgress))`. **It grows with `Campaign.Current.PlayerProgress`**, so the same save yields a different value early and late. |
| `NumberOfMaximumTroopCountForBossFightInHideout` | `public abstract int NumberOfMaximumTroopCountForBossFightInHideout { get; }` | Fixed boss-phase cap; default `Floor(1 + 5 * (1 + PlayerProgress))`, also driven by `PlayerProgress`. `HideoutCampaignBehavior.cs:609` sums both phase caps into the total budget. |
| `SpawnPercentageForFirstFightInHideoutMission` | `public abstract float SpawnPercentageForFirstFightInHideoutMission { get; }` | Share of the target count actually spawned in phase one; default **0.8**. `MapEventHelper.cs:150` multiplies the target by it, then `Min`s the result against the first-phase cap. |
| `GetMaxSupportedNumberOfLootersForClan` | `public abstract int GetMaxSupportedNumberOfLootersForClan(Clan clan)` | How many looters a faction can support. **The default is not a constant**: `deserters` is hard-coded to 50, `looters` returns `270 - DeserterClan.WarPartyComponents.Count` (falling as deserter war parties die), and every other faction gets 270. |
| `GetMinimumTroopCountForHideoutMission` | `public abstract int GetMinimumTroopCountForHideoutMission(MobileParty party, bool isAssault)` | Minimum garrison for a specific party and assault flag. The default returns **25 for `isAssault: false` and 8 for `isAssault: true`** — the same method differs by threefold across the two contexts. |
| `GetMaximumTroopCountForHideoutMission` | `public abstract int GetMaximumTroopCountForHideoutMission(MobileParty party, bool isAssault)` | Maximum garrison, same shape. The default base is `isAssault ? 15 : 40`, and it adds `DefaultPerks.Tactics.SmallUnitTactics`'s `PrimaryBonus` when the party holds that perk — **so it depends on party perks rather than being a pure constant**. |
| `IsPositionInsideNavalSafeZone` | `public abstract bool IsPositionInsideNavalSafeZone(CampaignVec2 position)` | Whether an AI waypoint lands inside a naval safe zone. **The default implementation returns `false` unconditionally** — vanilla defines no such zone. Called only from `MobilePartyAi.cs:1327/1364`, the latter inside a retry loop of up to 100 iterations. |

## Examples

Read the full density configuration for a diagnostic dump, through the real `Campaign.Current.Models` path:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;

public static string DumpBanditDensity()
{
    if (Campaign.Current == null)
    {
        return "";
    }

    BanditDensityModel model = Campaign.Current.Models.BanditDensityModel;
    Debug.Print("hideouts max/initial = " + model.NumberOfMaximumHideoutsAtEachBanditFaction
        + "/" + model.NumberOfInitialHideoutsAtEachBanditFaction, 0);
    Debug.Print("parties inside/around = " + model.NumberOfMaximumBanditPartiesInEachHideout
        + "/" + model.NumberOfMaximumBanditPartiesAroundEachHideout, 0);
    Debug.Print("infest threshold = " + model.NumberOfMinimumBanditPartiesInAHideoutToInfestIt, 0);
    return "ok";
}
```

Compute the garrison range for both assault contexts — the group most often misused in this model:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;

public static string HideoutGarrisonRange(MobileParty attacker, bool isAssault)
{
    BanditDensityModel model = Campaign.Current.Models.BanditDensityModel;
    int min = model.GetMinimumTroopCountForHideoutMission(attacker, isAssault);
    int max = model.GetMaximumTroopCountForHideoutMission(attacker, isAssault);
    return "isAssault=" + isAssault + " range=" + min + ".." + max;
}
```

Test whether a hideout currently counts as infested, mirroring the shape of `Hideout.cs:25`:

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;

public static bool IsHideoutInfested(Settlement hideoutSettlement)
{
    if (hideoutSettlement == null || Campaign.Current == null)
    {
        return false;
    }

    int threshold = Campaign.Current.Models.BanditDensityModel.NumberOfMinimumBanditPartiesInAHideoutToInfestIt;
    int bandits = hideoutSettlement.Parties.Count(party => party.IsBandit);
    return bandits >= threshold;
}
```

Write your own density model — halve the hideouts and pin the looter cap:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;

public class SparseBanditDensityModel : BanditDensityModel
{
    public override int NumberOfMinimumBanditPartiesInAHideoutToInfestIt => 2;

    public override int NumberOfMaximumBanditPartiesInEachHideout => 2;

    public override int NumberOfMaximumBanditPartiesAroundEachHideout => 2;

    public override int NumberOfMaximumHideoutsAtEachBanditFaction => 4;

    public override int NumberOfInitialHideoutsAtEachBanditFaction => 3;

    public override int NumberOfMinimumBanditTroopsInHideoutMission => 10;

    public override int NumberOfMaximumTroopCountForFirstFightInHideout => 20;

    public override int NumberOfMaximumTroopCountForBossFightInHideout => 25;

    public override float SpawnPercentageForFirstFightInHideoutMission => 0.8f;

    public override int GetMaxSupportedNumberOfLootersForClan(Clan clan)
    {
        return 150;
    }

    public override int GetMinimumTroopCountForHideoutMission(MobileParty party, bool isAssault)
    {
        return isAssault ? 8 : 25;
    }

    public override int GetMaximumTroopCountForHideoutMission(MobileParty party, bool isAssault)
    {
        return isAssault ? 15 : 40;
    }

    public override bool IsPositionInsideNavalSafeZone(CampaignVec2 position)
    {
        return false;
    }
}
```

## Risks and crash boundaries

- **Returning null means a tree-wide NRE.** None of the thirty call sites null-checks `Campaign.Current.Models.BanditDensityModel`. A custom model must be registered during `OnGameModelCreation` and must never throw.
- **`NumberOfMinimumBanditPartiesInAHideoutToInfestIt` is a reused switch.** It simultaneously drives `Hideout.IsInfested`, bandit patrolling, incident effects, and spawn density. Touching it pulls four paths with it.
- **`NumberOfMaximumHideoutsAtEachBanditFaction == 0` disables hideout expansion.** `BanditSpawnCampaignBehavior.cs:208` gates `AddNewHideouts()` on it directly.
- **`NumberOfInitialHideoutsAtEachBanditFaction` only applies at game start.** It is read once inside `InitializeInitialHideouts`, and loading a save does not re-run it. Changing it affects only fresh campaigns.
- **Two mission cap members move with `PlayerProgress`.** Both `NumberOfMaximumTroopCountForFirstFightInHideout` and `NumberOfMaximumTroopCountForBossFightInHideout` multiply by `Campaign.Current.PlayerProgress` in the default implementation, so **they are not save-independent constants**.
- **`GetMaxSupportedNumberOfLootersForClan` floats by default.** The `looters` cap subtracts `DeserterClan.WarPartyComponents.Count`, which changes mid-battle. **Using it for a one-shot quota calculation produces unstable results.**
- **`GetMaximumTroopCountForHideoutMission` depends on party perks.** `DefaultPerks.Tactics.SmallUnitTactics` adds its `PrimaryBonus` to the base, so the same party returns different values before and after unlocking it.
- **`IsPositionInsideNavalSafeZone` defaults to constant false.** Adding a naval safe zone means writing the geometry yourself — the official implementation does nothing here.
- **Abstract with thirteen members, all mandatory.** Missing one fails the build, which is good. Note that the official model's private const `MinimumTroopCountForHideoutMission = 25` and the public member `NumberOfMinimumBanditTroopsInHideoutMission = 10` **have different values and separate jobs**; do not collapse them into one in a custom model.

## Cross-Version Notes

`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/BanditDensityModel.cs` is a 33-line original-source file with thirteen abstract members (nine properties plus four methods). When diffing across versions, watch whether members were added or removed, whether signatures changed, and what the `DefaultBanditDensityModel` values are (2 / 3 / 3 / 9 / 7 / 10 / 0.8 / 25 / 8 / 40 / 15 / 270 / 50). **`IsPositionInsideNavalSafeZone` returning constant false is especially worth tracking** — it reads like an unfinished stub and could plausibly become real geometry in another version.

## Dependencies

- Sole implementation: `DefaultBanditDensityModel` in `TaleWorlds.CampaignSystem.GameComponents/DefaultBanditDensityModel.cs`, which supplies every default
- Read entry point: `Models.BanditDensityModel` on [Campaign](../Campaign), assembled during campaign initialization
- Spawn-side consumer: `DailyTick`, `AddNewHideouts`, `SpawnBanditsAroundHideout`, and `GetCurrentLimitForLooters` in [BanditSpawnCampaignBehavior](../BanditSpawnCampaignBehavior) read every capacity member
- Hideout-side consumer: `HideoutCampaignBehavior` reads the four mission troop members; [Hideout](../Hideout)'s `IsInfested` reads the infestation threshold
- AI-side consumer: `AiLandBanditPatrollingBehavior` and `AiVisitSettlementBehavior` read the hideout capacities; `MobilePartyAi` on [MobileParty](../MobileParty) calls `IsPositionInsideNavalSafeZone`
- Mission assembly: `MapEventHelper.cs:150` combines `SpawnPercentageForFirstFightInHideoutMission` with `NumberOfMaximumTroopCountForFirstFightInHideout`
- Looter side: both `DesertersCampaignBehavior` and `BanditSpawnCampaignBehavior.GetCurrentLimitForLooters` read `GetMaxSupportedNumberOfLootersForClan`
- Bucket index: [campaign API section](../)
