---
title: "BanditSpawnCampaignBehavior"
description: "The bandit and looter spawner: builds hideouts at game start, tops up parties at night with ratios 0.1 and 0.07, expands hideouts daily with a weighted two-stage roll, sells surplus food to the settlement a bandit party walks into, and adds a boss party once a hideout is spotted."
---

# BanditSpawnCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class BanditSpawnCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/BanditSpawnCampaignBehavior.cs`

## Overview

`BanditSpawnCampaignBehavior` is **the creator of the bandit world**. It hard-codes **not a single capacity number** of its own — every ceiling is forwarded through nine expression-bodied properties to [BanditDensityModel](../BanditDensityModel):

```csharp
private float _numberOfMinimumBanditPartiesInAHideoutToInfestIt => Campaign.Current.Models.BanditDensityModel.NumberOfMinimumBanditPartiesInAHideoutToInfestIt;
private int  _numberOfMaxBanditPartiesAroundEachHideout   => Campaign.Current.Models.BanditDensityModel.NumberOfMaximumBanditPartiesAroundEachHideout;
private int  _numberOfMaxHideoutsAtEachBanditFaction     => Campaign.Current.Models.BanditDensityModel.NumberOfMaximumHideoutsAtEachBanditFaction;
private int  _numberOfInitialHideoutsAtEachBanditFaction => Campaign.Current.Models.BanditDensityModel.NumberOfInitialHideoutsAtEachBanditFaction;
private int  _numberOfMaximumBanditPartiesInEachHideout  => Campaign.Current.Models.BanditDensityModel.NumberOfMaximumBanditPartiesInEachHideout;
private int  _numberOfMaxBanditCountPerClanHideout       => _numberOfMaxBanditPartiesAroundEachHideout + _numberOfMaximumBanditPartiesInEachHideout;
```

**The only hard-coded constants are the gold coefficients and one cooldown**: `BanditStartGoldPerBandit = 10f`, `BanditLongTermGoldPerBandit = 50f`, and `HideoutInfestCooldownAfterFightInDays = 1.5f`.

It maintains two **runtime cache dictionaries**, neither of which is saved: `_hideouts` (hideouts indexed by culture) and `_banditCountsPerHideout` (party counts indexed by settlement). **The second one is maintained from four separate paths** — `MobilePartyCreated`, `MobilePartyDestroyed`, `CacheBanditCounts`, and `OnHomeHideoutChanged` — and that is the most delicate bookkeeping in this file.

## Mental Model

Think of it as **the scheduler of the bandit ecosystem**.

- **Eight event subscriptions, two of which exist only for game start.** `OnNewGameCreatedPartialFollowUpEvent` is the important one: **it carries an `int i` parameter**, and this behavior only acts on stages `10` and `11` (`BanditSpawnCampaignBehavior.cs:85-102`) — stage 10 builds hideouts, stage 11 spawns surrounding bandits and looters and recomputes the counts. **This is the official staged-initialisation mechanism, and a mod hooking into opening-time work has to pick the right `i`.**
- **`SyncData` is empty.** That is correct: both dictionaries are **rebuildable caches** — `CacheHideouts()` reconstructs from `Hideout.All` and `CacheBanditCounts()` from `MobileParty.AllBanditParties`. **After a load, `OnGameLoaded` re-runs both.**
- **Nightly spawning tops up by ratio, it does not fill to capacity.** `HourlyTickClan` (`:240-253`) only acts when `Campaign.Current.IsNight && clan.IsBanditFaction`: looter factions go through `SpawnLooters(clan, 0.07f, uniformDistribution: false)`, bandit factions through `SpawnBanditsAroundHideout(clan, 0.1f)`. **Those two ratios are hard-coded private literals and live in no model.**
- **Hideout expansion is once a day, two weighted rolls deep.** `AddNewHideouts` (`:275-298`) first weights each under-cap bandit faction by `1f - infestedCount / cap` and calls `MBRandom.ChooseWeighted`, then computes an open-box probability — **below half the cap it is `0.2f + (cap - current) * 0.1f`, above it is a cubic curve**. Only a probability hit actually builds anything.
- **Spawn weight decays with the inverse square of the existing party count.** `GetSpawnChanceInSettlement` (`:352-359`) returns `1f / MathF.Pow(_banditCountsPerHideout[settlement], 2f)`. **The more parties a hideout holds, the less likely it is picked — inverse-square, so at three parties the weight is only 1/9.**
- **"Bandit faction" and "looter faction" are two mutually exclusive tests.** `IsBanditFaction(clan)` (`:560-566`) requires `!clan.HasNavalNavigationCapability && clan.IsBanditFaction && clan.Culture.CanHaveSettlement`; `IsLooterFaction(IFaction)` (`:474-480`) requires `!faction.Culture.CanHaveSettlement && !faction.HasNavalNavigationCapability && faction.StringId != "deserters"`. **`deserters` is explicitly excluded from the looter role** by a string comparison — it has its own behavior class.
- **Entering a hideout means "selling goods" to the settlement.** `OnSettlementEntered` (`:149-180`) computes the total value `num` of surplus food, and when it is positive and the party's trade is active, it gives the party 25% of it as trade gold and the settlement 25% as gold.
- **Spotting a hideout triggers the boss party.** `CheckForSpawningBanditBoss` (`:182-197`) checks, when "hideout, spotted, and holding bandits", whether a boss party exists; if not it calls `AddBossParty`, and if one exists but lacks `culture.BanditBoss` it tops the roster up. **This method is called unconditionally as the very first line of `OnSettlementEntered`, ahead of the early-return chain.**
- **`AddBanditToHideout` is the only public creation entry, and it returns the `MobileParty`.** Five steps: verify the culture is a bandit culture → find the faction by culture → `BanditPartyComponent.CreateBanditParty(...)` → `InitializeBanditParty` → `SetMoveGoToSettlement` + `RecalculateShortTermBehavior` + `EnterSettlementAction.ApplyForParty`. **It returns null when the culture is not a bandit culture.**

### The four public entries and when they run

| Entry | Called by | When | Notes |
| --- | --- | --- | --- |
| `InitializeInitialHideouts()` | its own stage `i == 10` | Game start | Walks `Clan.BanditFactions` and builds `NumberOfInitialHideoutsAtEachBanditFaction` hideouts per bandit faction |
| `SpawnBanditsAroundHideoutAtNewGame()` | its own stage `i == 11` | Game start | Per bandit faction, ratio `MBRandom.RandomFloatRanged(0.5f, 0.75f)` |
| `SpawnLootersAtNewGame()` | its own stage `i == 11` | Game start | Per looter faction, same range, **`uniformDistribution: true`** |
| `AddBanditToHideout(Hideout, PartyTemplateObject, bool)` | **open to any caller** | Any time | The one outward-facing creation method; returns the party or null |
| `OnSettlementEntered(MobileParty, Settlement, Hero)` | Event | Entering a settlement | Boss check, hideout spotting, and selling surplus food |

## How to use

**How to obtain it.** **Do not construct it.** It is a `CampaignBehaviorBase`; use `Campaign.Current.GetCampaignBehavior<BanditSpawnCampaignBehavior>()`. The hideout tables it caches are internal state, not something you populate.

```csharp
BanditSpawnCampaignBehavior spawn = Campaign.Current.GetCampaignBehavior<BanditSpawnCampaignBehavior>();
float min = Campaign.Current.Models.BanditDensityModel.GetNumberOfMinimumBanditPartiesInAHideoutToInfestIt(...);
```

**The most common pitfall.** **`SyncData` is empty and both dictionaries are caches.** Anything derived from them must accept "rebuilt after load" — `_hideouts` is keyed by `CultureObject` reference.

## Key members

| Member | Signature | What this member is actually for |
| --- | --- | --- |
| `RegisterEvents()` | `public override void RegisterEvents()` | Subscribes eight events (`:43-53`): `MobilePartyCreated`, `MobilePartyDestroyed`, `SettlementEntered`, `DailyTickEvent`, `HourlyTickClanEvent`, `OnGameLoadedEvent`, `OnHomeHideoutChangedEvent`, and `OnNewGameCreatedPartialFollowUpEvent`. **All through `AddNonSerializedListener`** — the two cache dictionaries are rebuilt by `OnGameLoaded`, not restored from the save. |
| `SyncData(IDataStore dataStore)` | `public override void SyncData(IDataStore dataStore)` | **Empty implementation** (`:81-83`). **This is correct**: `_hideouts` and `_banditCountsPerHideout` are caches, and `OnGameLoaded` calls `CacheHideouts()` plus `CacheBanditCounts()` to rebuild them. **Any state you want to survive a load has to be written here yourself.** |
| `OnNewGameCreatedPartialFollowUp(CampaignGameStarter starter, int i)` | `private void OnNewGameCreatedPartialFollowUp(CampaignGameStarter starter, int i)` | **Staged initialisation** (`:85-102`). The `switch (i)` handles exactly two values: `10` → `CacheHideouts()` plus, when the cap is above zero, `InitializeInitialHideouts()`; `11` → `SpawnBanditsAroundHideoutAtNewGame()` plus `SpawnLootersAtNewGame()` plus `CacheBanditCounts()`. **Every other `i` does nothing** — this is the stage slot reserved for mods. |
| `InitializeInitialHideouts()` | `public void InitializeInitialHideouts()` | Builds hideouts at game start (`:130-139`). Walks `Clan.BanditFactions` and, for every faction where `IsBanditFaction` holds, calls `SpawnHideoutsAndBanditsPartiallyOnNewGame`, which loops `NumberOfInitialHideoutsAtEachBanditFaction` times calling `FillANewHideoutWithBandits`. |
| `AddBanditToHideout(Hideout hideoutComponent, PartyTemplateObject overridenPartyTemplate = null, bool isBanditBossParty = false)` | `public MobileParty AddBanditToHideout(...)` | **The only outward-facing creation entry** (`:311-334`). Five steps: test `hideoutComponent.Owner.Settlement.Culture.IsBandit`; find the matching faction in `Clan.BanditFactions` by culture; `BanditPartyComponent.CreateBanditParty(clan.StringId + "_1", clan, hideout, isBanditBossParty, pt, gatePosition)`; `InitializeBanditParty`; then `SetMoveGoToSettlement` + `RecalculateShortTermBehavior` + `EnterSettlementAction.ApplyForParty`. **Returns null when the culture is not a bandit culture.** |
| `OnSettlementEntered(MobileParty mobileParty, Settlement settlement, Hero hero)` | `public void OnSettlementEntered(...)` | On entering a settlement (`:149-180`). **Its first line unconditionally calls `CheckForSpawningBanditBoss`**, and only afterwards does it bail out on `!Campaign.Current.GameStarted || mobileParty == null || !mobileParty.IsBandit || !settlement.IsHideout`. Then two things: an unspotted but infested hideout with a visible party is marked `IsSpotted` plus an `OnHideoutSpotted` dispatch; and the surplus-food value `num`, when positive, pays 25% into the party's trade gold and 25% into the settlement's gold. |
| `CheckForSpawningBanditBoss(Settlement settlement, MobileParty mobileParty)` | `private void CheckForSpawningBanditBoss(...)` | Boss party top-up (`:182-197`). Condition: "hideout, spotted, and containing bandits or a boss party". With no boss party it calls `AddBossParty`; with one present but missing `culture.BanditBoss` from its roster it does `AddToCounts(culture.BanditBoss, 1)`. **`The mobileParty parameter is never used.** |
| `HourlyTickClan(Clan clan)` | `private void HourlyTickClan(Clan clan)` | **The nightly top-up** (`:240-253`). Acts only when `Campaign.Current.IsNight && clan.IsBanditFaction`. Looter factions get `SpawnLooters(clan, 0.07f, false)`; bandit factions get `SpawnBanditsAroundHideout(clan, 0.1f)`. **Both ratios are hard-coded literals, not model members.** |
| `SpawnBanditsAroundHideout(Clan clan, float ratio)` | `private void SpawnBanditsAroundHideout(Clan clan, float ratio)` | Tops up bandits by ratio (`:255-263`). Count is `MBRandom.RoundRandomized((GetInfestedHideoutCount(clan) * _numberOfMaxBanditCountPerClanHideout - clan.WarPartyComponents.Count) * ratio)`. **Note that the subtracted term is `WarPartyComponents.Count`, the faction-wide army count, not the number of parties inside the hideout.** |
| `SpawnLooters(Clan clan, float ratio, bool uniformDistribution)` | `private void SpawnLooters(Clan clan, float ratio, bool uniformDistribution)` | Tops up looters by ratio (`:265-273`). Count is `RoundRandomized((GetCurrentLimitForLooters(clan) - clan.WarPartyComponents.Count) * ratio)`. **`GetCurrentLimitForLooters` is `Math.Min(infested hideouts × 7, GetMaxSupportedNumberOfLootersForClan(clan))` — and that `7` is hard-coded.** |
| `AddNewHideouts()` | `private void AddNewHideouts()` | Daily hideout expansion (`:275-298`). It weights every under-cap bandit faction by `1f - current / cap` and picks one with `MBRandom.ChooseWeighted`, then computes an open-box probability — **`0.2f + (cap - current) * 0.1f` while the gap is under half the cap, otherwise a cubic curve peaking at half the cap**. Only a probability hit calls `FillANewHideoutWithBandits`. |
| `GetSpawnChanceInSettlement(Settlement settlement)` | `private float GetSpawnChanceInSettlement(Settlement settlement)` | **The spawn weight** (`:352-359`). Returns `1f / MathF.Pow(_banditCountsPerHideout[settlement], 2f)`, or 1 when the count is zero or absent from the dictionary. **Inverse-square decay — at three parties the weight is down to 1/9.** |
| `GetCurrentLimitForLooters(Clan clan)` | `private int GetCurrentLimitForLooters(Clan clan)` | The looter ceiling (`:503-506`): `Math.Min(Hideout.All.Count(x => x.IsInfested) * 7, Campaign.Current.Models.BanditDensityModel.GetMaxSupportedNumberOfLootersForClan(clan))`. **That `× 7` is hard-coded**, so the fewer infested hideouts the map has, the lower the looter ceiling. |
| `GetSpawnRadiusForClan(Clan selectedFaction)` | `private float GetSpawnRadiusForClan(Clan selectedFaction)` | The spawn radius (`:485-488`): `BanditSpawnRadiusAsDays * (IsLooterFaction(selectedFaction) ? 1.5f : 1f)`, where `BanditSpawnRadiusAsDays => 0.5f * Campaign.Current.EstimatedAverageBanditPartySpeed * CampaignTime.HoursInDay`. **Looters spawn at 1.5× the bandit's radius.** |
| `IsBanditFaction(Clan clan)` | `private bool IsBanditFaction(Clan clan)` | The bandit-faction test (`:560-566`): `!clan.HasNavalNavigationCapability && clan.IsBanditFaction && clan.Culture.CanHaveSettlement`. **All three conditions are required.** |
| `IsLooterFaction(IFaction faction)` | `private static bool IsLooterFaction(IFaction faction)` | The looter-faction test (`:474-480`): `!faction.Culture.CanHaveSettlement && !faction.HasNavalNavigationCapability && faction.StringId != "deserters"`. **`deserters` is excluded by a literal string comparison** — it has its own dedicated `DesertersCampaignBehavior`. |

## Examples

Use the one public creation entry to seed a hideout, shaped after the internal call inside `FillANewHideoutWithBandits`:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CampaignBehaviors;
using TaleWorlds.CampaignSystem.Settlements;

public static MobileParty SeedHideout(Settlement hideoutSettlement)
{
    if (Campaign.Current == null || hideoutSettlement == null || !hideoutSettlement.IsHideout)
    {
        return null;
    }

    Hideout hideout = hideoutSettlement.Hideout;
    if (hideout == null)
    {
        return null;
    }

    BanditSpawnCampaignBehavior behavior = Campaign.Current.GetCampaignBehavior<BanditSpawnCampaignBehavior>();
    if (behavior == null)
    {
        return null;
    }

    MobileParty party = behavior.AddBanditToHideout(hideout);
    if (party != null)
    {
        Debug.Print("seeded bandit at " + hideoutSettlement.Name.ToString()
            + " clan=" + party.ActualClan.Name.ToString(), 0);
    }

    return party;
}
```

Read the current spawn capacity, mirroring the nine expression-bodied forwards the official code uses:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;

public static string DescribeSpawnCapacity()
{
    if (Campaign.Current == null)
    {
        return "";
    }

    BanditDensityModel model = Campaign.Current.Models.BanditDensityModel;
    int perHideout = model.NumberOfMaximumBanditPartiesAroundEachHideout + model.NumberOfMaximumBanditPartiesInEachHideout;
    Debug.Print("max per clan-hideout = " + perHideout, 0);
    Debug.Print("hideout cap = " + model.NumberOfMaximumHideoutsAtEachBanditFaction, 0);
    return "perHideout=" + perHideout;
}
```

Check whether a hideout currently holds bandits and whether a boss is present, reproducing the test inside `CheckForSpawningBanditBoss`:

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Settlements;

public static string DescribeHideoutState(Settlement hideoutSettlement)
{
    if (hideoutSettlement == null || !hideoutSettlement.IsHideout || hideoutSettlement.Hideout == null)
    {
        return "not a hideout";
    }

    Hideout hideout = hideoutSettlement.Hideout;
    bool hasBandits = hideoutSettlement.Parties.Any(x => x.IsBandit);
    bool hasBoss = hideoutSettlement.Parties.FirstOrDefault(x => x.IsBanditBossParty) != null;

    Debug.Print("infested=" + hideout.IsInfested + " spotted=" + hideout.IsSpotted, 0);
    return "bandits=" + hasBandits + " boss=" + hasBoss;
}
```

Write your own nightly spawner, shaped after `HourlyTickClan` but with your own ratio:

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CampaignBehaviors;
using TaleWorlds.CampaignSystem.Settlements;

public class MyNightlySpawner : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.HourlyTickClanEvent.AddNonSerializedListener(this, HourlyTickClan);
    }

    private void HourlyTickClan(Clan clan)
    {
        if (Campaign.Current == null || !Campaign.Current.IsNight || !clan.IsBanditFaction)
        {
            return;
        }

        if (MobileParty.AllBanditParties.Count < 40)
        {
            Settlement target = Settlement.All.FirstOrDefault(s => s.IsHideout && s.Hideout.IsInfested);
            if (target != null && target.Hideout != null)
            {
                BanditSpawnCampaignBehavior official = Campaign.Current.GetCampaignBehavior<BanditSpawnCampaignBehavior>();
                if (official != null)
                {
                    official.AddBanditToHideout(target.Hideout);
                }
            }
        }
    }

    public override void SyncData(IDataStore dataStore)
    {
    }
}
```

## Risks and crash boundaries

- **`SyncData` is empty and both dictionaries are caches.** **Anything you derive from them must accept "rebuilt after load"**: `_hideouts` is keyed by `CultureObject` references and `_banditCountsPerHideout` by `Settlement` references. **After a load you must reacquire instances from `Campaign.Current.Kingdoms` / `Settlements`; holding pre-load references is invalid.**
- **`_banditCountsPerHideout` has four maintenance paths.** `MobilePartyCreated` +1, `MobilePartyDestroyed` -1, `OnHomeHideoutChanged` -1 on the old hideout, and `CacheBanditCounts` rebuilds wholesale. **If you destroy a bandit party externally without firing the matching event, the count stays permanently high and the spawn weight is crushed toward zero.**
- **The nightly ratios 0.1 and 0.07 are hard-coded literals, not in the model.** Swapping [BanditDensityModel](../BanditDensityModel) changes capacities but not spawn speed; **changing the rate requires copying the whole behavior class.**
- **The `* 7` inside `GetCurrentLimitForLooters` is hard-coded too.** The looter ceiling is `Min(infested hideouts × 7, model cap)`. **Clear the hideouts off the map and the looter ceiling collapses to zero.**
- **`IsLooterFaction` excludes `deserters` by string comparison.** Any faction whose `StringId` is `deserters` is never treated as a looter — **an implicit contract, not a configuration.**
- **This behavior and `DesertersCampaignBehavior` are independent paths.** Deserters are out of scope here, so the 0.07 nightly generation described on this page does not apply to them.
- **The boss check runs before the early returns.** `CheckForSpawningBanditBoss(settlement, mobileParty)` is the first line of `OnSettlementEntered`, **so it executes even when the entering party is not a bandit, the campaign has not started, or the party is null**. It only reads the settlement's own state so the logic is fine, but **this path fires more often than intuition suggests.**
- **`CheckForSpawningBanditBoss` never uses `mobileParty`.** Do not read its call site as if it were checking the entering party.
- **`HideoutInfestCooldownAfterFightInDays = 1.5f` and the two gold constants live in this file, but only the gold pair is consumed by `CreatePartyTrade` / `DailyTick`.** The cooldown's consumer sits elsewhere — do not miss it when tracing across files.
- **`DailyTick` contains a 3% raid event.** `:208-238`, beyond converging party trade gold toward `50 * totalManCount` with weight 0.05, also rolls 3% to add food to bandit parties in a map event — **8 per unit for looter factions, 16 for bandit factions**. Both numbers are hard-coded.
- **`AddBanditToHideout` returns null rather than throwing.** Its only null source is "the hideout's culture is not a bandit culture". **Callers must null-check, which is exactly what `FillANewHideoutWithBandits` does.**
- **The `clan` local inside `AddBanditToHideout` can be null.** It searches `Clan.BanditFactions` for a faction matching the culture and stays null on failure, and the next statement is `clan.DefaultPartyTemplate` — **an unguarded dereference that has no realistic trigger today but is still an unprotected read.**
- **The party id is the literal `clan.StringId + "_1"`.** `BanditPartyComponent.CreateBanditParty(clan.StringId + "_1", ...)` — every party of one faction uses that same id string. **It is not a unique party identifier**; the `MobileParty` instance is.
- **`_numberOfMaxBanditCountPerClanHideout` is the sum of two model values, not an independent setting.** Changing "around" and changing "inside" in `BanditDensityModel` have identical effects on the total.

## Cross-Version Notes

`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/BanditSpawnCampaignBehavior.cs` is a 583-line original-source file. Seven things to check across versions: **whether the staged-init `switch (i)` still uses only the indices 10 and 11** (this is the most dangerous item — those indices are coupled to the stage numbering used by other behaviors in the official SubModule, and changing them shifts when hideouts appear), the two hard-coded nightly ratios 0.1 and 0.07, the `* 7` inside `GetCurrentLimitForLooters`, the `"deserters"` string exclusion in `IsLooterFaction`, whether the inverse-square decay in `GetSpawnChanceInSettlement` became linear, the 3% raid event inside `DailyTick`, and whether the consumer of `HideoutInfestCooldownAfterFightInDays = 1.5f` still exists. **A change to the `case 10` / `case 11` indices is the one to watch**, because it silently reorders the whole opening initialisation.

## Dependencies

- Official registration point: `gameStarter.AddBehavior(new BanditSpawnCampaignBehavior());` at `SandBoxManager.cs:35`
- Capacity model: all nine expression-bodied properties forward to [BanditDensityModel](../BanditDensityModel), including `GetMaxSupportedNumberOfLootersForClan`, which `GetCurrentLimitForLooters` takes the minimum of against the hard-coded `* 7`
- Faction source: `Clan.BanditFactions` is the entry point of every generation loop; `Clan.IsBanditFaction`, `HasNavalNavigationCapability`, `WarPartyComponents`, and `DefaultPartyTemplate` drive the tests and the counting
- Hideouts: [Hideout](../Hideout)'s `IsInfested` (which depends on the model's infestation threshold), `IsSpotted`, and `Owner.Settlement`; `Hideout.All` is the full-table enumeration source
- Party side: `IsBandit`, `IsBanditBossParty`, `IsVisible`, `ItemRoster`, and `MemberRoster` on [MobileParty](../MobileParty); `MobileParty.AllBanditParties` is the recount entry point, and [BanditPartyComponent](../BanditPartyComponent) supplies `CreateBanditParty` / `CreateLooterParty`
- Settlement side: `IsHideout`, `Hideout`, `Parties`, and `Culture` on [Settlement](../Settlement), plus `SettlementComponent.ChangeGold` for the food sale
- Time and randomness: `Campaign.Current.IsNight`, `Campaign.Current.EstimatedAverageBanditPartySpeed`, and `MBRandom.RoundRandomized` / `ChooseWeighted` / `RandomFloatRanged`
- Events: the eight subscriptions on [CampaignEvents](../CampaignEvents), all `AddNonSerializedListener`; `CampaignEventDispatcher` dispatches `OnHideoutSpotted`
- Save: the behavior itself has **zero save fields**, and both dictionaries are rebuilt by `OnGameLoaded`
- Bucket index: [campaign API section](../)
