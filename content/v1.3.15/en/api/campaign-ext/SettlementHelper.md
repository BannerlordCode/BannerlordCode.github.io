---
title: "SettlementHelper"
description: "Settlement-side facade: nearest settlement/hideout/town/village/fortification lookups by party or point, random selection, notable spawning, and garrison explanations."
---
# SettlementHelper

**Namespace:** `Helpers`
**Module:** Helpers (TaleWorlds.CampaignSystem assembly)
**Type:** `public static class SettlementHelper`
**Base:** none (static)
**Source:** `TaleWorlds.CampaignSystem/Helpers/SettlementHelper.cs`

## Overview

`SettlementHelper` is the settlement-side facade of the `Helpers` namespace, sitting alongside [HeroHelper](../HeroHelper/), [CharacterHelper](../CharacterHelper/), [FactionHelper](../FactionHelper/) and [DiplomacyHelper](../DiplomacyHelper/). Its bulk is a family of twenty "find the nearest …" methods parameterised by origin (a settlement, a mobile party, or a map point) and by a `Func<Settlement, bool>` filter: villages, towns, castles, fortifications, hideouts, plus the "furthest" and "next around the party" variants. Around those sit random-selection helpers (`FindRandomSettlement`, `FindRandomHideout`, `GetRandomTown`), settlement-content helpers (`SpawnNotablesIfNeeded`, `GetAllHeroesOfSettlement`, `IsGarrisonStarving`, `GetGarrisonChangeExplainedNumber`, `TakeEnemyVillagersOutsideSettlements`) and scoring helpers (`GetBestSettlementToSpawnAround`, `GetNeighborScoreForConsideringClan`).

Thirty-plus public members, all `static`, spread over 760 lines. Almost all of them are **full linear scans over a settlement list**, so they are O(n) per call and are meant to be called a handful of times — not per agent, not per frame. Two of them (`SpawnNotablesIfNeeded`, `TakeEnemyVillagersOutsideSettlements`) mutate campaign state. As with its siblings, the namespace is the bare `Helpers`, so `using Helpers;` is required.

## Mental Model

Think of `SettlementHelper` as **"the settlement-lookup toolbox, where every query is a full scan and every answer respects your navigation type"**:

- **Typical call order in a mod.** Register a [CampaignBehaviorBase](../CampaignBehaviorBase/) through [CampaignGameStarter](../CampaignGameStarter/), subscribe to [CampaignEvents](../CampaignEvents/) in `RegisterEvents`, and on a daily/hourly tick ask `SettlementHelper` for the nearest matching settlement to a party, or for the heroes present at a settlement. There is no registration or teardown for the helper itself.
- **The `navCapabilities` parameter is the whole point of the distance methods.** Every `FindNearest*` overload for a mobile party passes `navCapabilities` into `DistanceHelper.FindClosestDistanceFromMobilePartyToSettlement`, which returns both the reachable distance and the shortest-path edge distance. Passing `MobileParty.NavigationType.All` gives "closest in the world"; passing a land-only flag set lets a landlocked party find the nearest *reachable* settlement instead of one across the sea. Getting this wrong is the most common functional bug with these methods.
- **The `condition` predicate is applied to the `Settlement`, not to the subtype object.** `FindNearestHideoutToMobileParty` passes `hideout.Settlement` into the predicate and returns `settlement.Hideout` afterwards. A predicate written for `Hideout` properties will silently never match. This applies to every `FindNearest*` overload.
- **Trap: the town/hideout variants return a subtype, the rest return a `Settlement`.** `FindNearestTownToMobileParty` returns `Town`, `FindNearestHideoutToMobileParty` returns `Hideout`; `FindNearestVillageToMobileParty` returns `Village`; `FindNearestSettlement*`, `FindNearestCastle*` and `FindNearestFortification*` return `Settlement`. Read the return type before writing `var x = ...;` and assuming `x.Settlement` exists.
- **Trap: `null` means "no match", not "no data".** Every `FindNearest*` returns `null` when the predicate matches nothing. `FindRandomInternal` returns `null` when its filtered candidate list is empty. `GetRandomTown` returns `null` when the faction owns no town/village *and* when the count is 0. Always branch on null.
- **Trap: `FindRandomInternal` dereferences `condition` unconditionally.** `FindRandomSettlement(null)` and `FindRandomHideout(null)` pass `null` down to `FindRandomInternal`, which calls `condition(settlement)` — a `NullReferenceException`. The default parameter says `= null` but the implementation does not tolerate it. Always pass a predicate (or `s => true`).
- **Trap: `GetRandomTown` has an off-by-one that can return `null` on a single match.** It counts candidates into `num`, rolls `MBRandom.RandomInt(0, num - 1)`, then walks candidates decrementing. With exactly one candidate, `RandomInt(0, 0)` and the walk can miss it depending on the roll, and with `num == 0` the roll itself is `RandomInt(0, -1)`. Treat its null return as normal and always null-check.
- **`SpawnNotablesIfNeeded` is a mutator with model-driven intent.** It compares `settlement.Notables.Count` against `Campaign.Current.Models.NotableSpawnModel.GetTargetNotableCountForSettlement(...)` summed over the settlement's allowed occupations, and randomly spawns when the shortfall probability rolls true. It consumes `MBRandom` heavily.

### When to Use

**Use `SettlementHelper` when:**
- You need the nearest settlement of a kind relative to a party or a map point, honouring navigation (`FindNearestVillageToMobileParty`, `FindNearestTownToPoint`, `FindNearestFortificationToSettlement`, …).
- You need a settlement the party can actually reach next along its route: `FindNextSettlementAroundMobileParty` gives you an index into `Settlement.All` you can iterate.
- You need "some settlement, any settlement, matching X": `FindRandomSettlement`, `FindRandomHideout`, `GetRandomTown`.
- You need everyone present at a settlement: `GetAllHeroesOfSettlement(settlement, includePrisoners)`.
- You need a settlement-scoped state check: `IsGarrisonStarving`, `GetGarrisonChangeExplainedNumber`.
- You need a spawn target for a hero or a notable: `GetBestSettlementToSpawnAround`, `SpawnNotablesIfNeeded`.

**Do NOT use `SettlementHelper` when:**
- You need settlement *state* changes (prosperity, food, loyalty, owner). Those are `*Action.Apply` and the settlement/town models — this class is a lookup and spawning facade.
- You need nearest-settlement answers inside a hot loop. Every method is a full scan; use the `Settlement.StartFindingLocatablesAroundPosition` spatial index for per-frame work.
- You want a hero's location. That's [HeroHelper](../HeroHelper/)'s `GetClosestSettlement`, which itself delegates most of its work here.
- You need settlement ownership or faction stance. That's [FactionHelper](../FactionHelper/) and [DiplomacyHelper](../DiplomacyHelper/).
- You want a saveable record of any of this. Nothing here is serialized; store what you need yourself.

## Dependencies

- [Settlement](../../campaign/Settlement/) — the universal return type and the list most methods scan (`Settlement.All` or `Campaign.Current.Settlements`).
- [MobileParty](../../campaign/MobileParty/) — the origin object for the party-relative methods and the `NavigationType` argument that defines reachability.
- [DistanceHelper](../DistanceHelper/) — `FindClosestDistanceFromMobilePartyToSettlement` is the actual distance computation every nearest-lookup uses.
- [HeroHelper](../HeroHelper/) — the caller of `FindNearestSettlementToMobileParty` / `FindNearestSettlementToSettlement` from `GetClosestSettlement`.
- [DiplomacyHelper](../DiplomacyHelper/) — `GetBestSettlementToSpawnAround` calls `IsSameFactionAndNotEliminated` to weight allied settlements.
- [FactionHelper](../FactionHelper/) — the clan/kingdom-side sibling; supplies the faction-membership questions `GetRandomTown` filters on.
- [CharacterHelper](../CharacterHelper/) — the character-side sibling; shared spawn logic for notable templates.
- [MapDistanceModel](../MapDistanceModel/) — the model that supplies consistent distance semantics elsewhere in the campaign, including inside `HeroHelper.GetClosestSettlement`.
- [Town](../../campaign/Town/) — `FindNearestTownTo*` iterates `Town.AllTowns` and returns a `Town`; `IsGarrisonStarving` and `GetGarrisonChangeExplainedNumber` take a `Town`.
- [Hideout](../Hideout/) — `FindNearestHideoutTo*` iterates `Hideout.All` and returns a `Hideout`.
- [Village](../../campaign/Village/) — `FindNearestVillageTo*` iterates `Village.All` and returns a `Village`.
- [LocationComplex](../LocationComplex/) and [LocationCharacter](../LocationCharacter/) — the settlement location list that notable spawning writes into.
- [Campaign](../../campaign/Campaign/) — `Campaign.Current.Settlements`, `Campaign.MapDiagonal` and `Campaign.Current.Models.NotableSpawnModel` are the live reads behind most members.
- [CampaignEvents](../CampaignEvents/) — the dispatcher your behavior subscribes to before calling into this helper.
- [CampaignBehaviorBase](../CampaignBehaviorBase/) — where the calling code usually lives.

## Key members

#### `public static Settlement FindNearestSettlementToMobileParty(MobileParty mobileParty, MobileParty.NavigationType navCapabilities, Func<Settlement, bool> condition = null)`

The generic nearest-settlement lookup relative to a party.
- **Algorithm:** initialise `best = Campaign.MapDiagonal * 2f`; iterate `Settlement.All`; for each settlement passing the predicate, call `DistanceHelper.FindClosestDistanceFromMobilePartyToSettlement(mobileParty, settlement, navCapabilities, out _)` and keep the smallest.
- **Return-value semantics:** the closest settlement satisfying the predicate, or `null` if none. The `out` parameter of the distance call (the shortest-path edge distance) is discarded here — only the total is used.
- **Trap:** the `condition` default is `null` and is handled correctly (`condition == null || condition(s)`), unlike `FindRandomSettlement`. Passing `null` here is safe.
- **Trap:** the initial bound `MapDiagonal * 2f` is a sentinel, not a real distance. A map so large that a legitimate distance exceeds it would silently yield `null`.
- **Cost:** O(`Settlement.All`) with a path-aware distance call each. Do not call per agent.

#### `public static Settlement FindNearestSettlementToSettlement(Settlement fromSettlement, MobileParty.NavigationType navCapabilities, Func<Settlement, bool> condition = null)`

The settlement-to-settlement variant. Same scan shape, same predicate handling, same `MapDiagonal * 2f` sentinel.
- **Trap:** it does **not** exclude `fromSettlement` itself. If nothing else matches, `fromSettlement` can be returned as its own nearest neighbour. Add `s => s != fromSettlement` to the predicate when that matters.

#### `public static Settlement FindNearestSettlementToPoint(in CampaignVec2 point, Func<Settlement, bool> condition = null)`

The straight-line variant, with **no** navigation type.
- **Algorithm:** scan `Settlement.All`, compare `settlement.Position.Distance(point)`, keep the minimum.
- **Return-value semantics:** nearest by **euclidean** distance, ignoring terrain, rivers and party movement type.
- **Trap:** this is not "what the party would reach first". Use it only for pure geometry questions (a minimap marker, a score), never for AI travel decisions.
- **Trap:** `point` is `in CampaignVec2`; an invalid (uninitialised) point yields a meaningless distance rather than an exception.

#### `public static Settlement FindNearestFortificationToSettlement(...)` / `FindNearestFortificationToMobileParty(...)` / `FindFurthestFortificationToSettlement(MBReadOnlyList<Town> candidates, MobileParty.NavigationType navCapabilities, Settlement fromSettlement, out float furthestDistance)`

Fortification search, including the "furthest" variant.
- **Return-value semantics:** `FindFurthestFortificationToSettlement` writes the winning distance into `out furthestDistance` and returns the settlement — the distance is the useful second half of the answer.
- **Trap:** it takes an explicit `MBReadOnlyList<Town> candidates`, so the candidate set is *yours*, not `Town.AllFiefs`. Passing an empty list gives `null` and an unwritten/meaningless `furthestDistance`.
- **Trap:** `FindNearestFortification*` filters on `IsFortification` internally (castle and town); it does not exclude hideouts.

#### `public static Settlement FindNearestCastleToSettlement(...)` / `FindNearestCastleToMobileParty(...)`

Castle-only variants, filtering `IsCastle`.
- **Trap:** towns are *not* castles. Use `FindNearestFortification*` when you want "walled settlement" generally.

#### `public static Village FindNearestVillageToSettlement(...)` / `FindNearestVillageToMobileParty(...)` / `public static Town FindNearestTownToSettlement(...)` / `public static Town FindNearestTownToMobileParty(...)` / `public static Hideout FindNearestHideoutToSettlement(...)` / `public static Hideout FindNearestHideoutToMobileParty(...)`

Subtype-specific scans returning the subtype object.
- **Algorithm (hideout):** iterate `Hideout.All`; apply the predicate to `hideout.Settlement`; keep the smallest distance; then return `settlement.Hideout` (null-safe: returns `null` when nothing matched). Town and village variants are the same shape over `Town.AllTowns` and `Village.All`.
- **Return-value semantics:** `null` when nothing matched. Because the predicate runs against `.Settlement`, a predicate testing `s.Hideout != null` works but one testing hideout-specific members does not.
- **Trap:** these are three different iteration pools. A village that was re-typed by a mod (e.g. a castle converted into a village) disappears from the castle pool and appears in the village pool.
- **Cost:** each is a full scan of its pool with a path-aware distance call.

#### `public static int FindNextSettlementAroundMobileParty(MobileParty mobileParty, MobileParty.NavigationType navCapabilities, float maxDistance, int lastIndex, Func<Settlement, bool> condition = null)`

An iterator cursor over settlements within `maxDistance`, for walking candidates in `Settlement.All` order.
- **Algorithm:** for `i` from `lastIndex + 1` to `Settlement.All.Count - 1`, return `i` at the first settlement that passes the predicate **and** whose closest distance is under `maxDistance`; return `-1` when the scan is exhausted.
- **Return-value semantics:** an **index into `Settlement.All`**, not a settlement. `-1` is the terminator. Feed it back as `lastIndex` for the next call.
- **Trap:** the order is `Settlement.All` order, which is data-driven and not sorted by distance. If you want nearest-first you must scan everything yourself.
- **Trap:** it returns as soon as it finds *any* match, so a caller that keeps calling with the returned index does a full O(n) scan in the worst case per step.

#### `public static Settlement FindRandomSettlement(Func<Settlement, bool> condition = null)` / `FindRandomHideout(Func<Settlement, bool> condition = null)`

Uniformly random settlement (or hideout).
- **Algorithm (shared private `FindRandomInternal`):** build a `List<Settlement>` of everything passing `condition`; if non-empty, return `list[MBRandom.RandomInt(list.Count)]`; else `null`.
- **Trap — the important one:** `FindRandomInternal` calls `condition(settlement)` with **no null check**, so `FindRandomSettlement()` with the default `null` predicate throws `NullReferenceException`. Always pass a predicate (`_ => true` for unfiltered).
- **Trap:** the RNG is consumed, so it is not reproducible.
- **Trap:** the list build is an extra allocation proportional to the pool size. Do not call per frame.
- `FindRandomHideout` runs the same shape over `Hideout.All` and then converts to `hideout.Settlement`, so it returns a `Settlement` whose `Hideout` is non-null.

#### `public static Settlement GetRandomTown(Clan fromFaction = null)`

A random town or village, optionally restricted to one faction.
- **Algorithm:** count matching settlements over `Campaign.Current.Settlements` (`IsTown || IsVillage`, optionally `MapFaction == fromFaction`); roll `MBRandom.RandomInt(0, num - 1)`; walk the same candidates decrementing and return the one that crosses zero.
- **Return-value semantics:** a `Settlement` that is a town or village, or `null` when nothing matched.
- **Trap:** `RandomInt(0, num - 1)` with `num == 0` is `RandomInt(0, -1)`, and the exclusive upper bound means a single-candidate pool can roll to a miss and return `null`. Null is normal; always check it.
- **Trap:** the faction filter is `settlement.MapFaction == fromFaction`, i.e. **map** faction. A clan that owns nothing on the map matches nothing, even though it has a `HomeSettlement`.

#### `public static bool IsGarrisonStarving(Settlement settlement)`

Whether a town's garrison is actively starving, rather than merely food-negative.
- **Algorithm:** returns true only when `settlement.IsStarving` **and** `settlement.Town.FoodChange < -(settlement.Town.Prosperity / Campaign.Current.Models.SettlementFoodModel.NumberOfProsperityToEatOneFood)`.
- **Return-value semantics:** a stricter signal than `settlement.IsStarving` alone. A town can be starving yet still feeding its garrison if its prosperity is high enough.
- **Trap:** it dereferences `settlement.Town` unconditionally — passing a village or castle (which have no `Town`) throws.
- **Trap:** it divides by `NumberOfProsperityToEatOneFood` from the food model; a model returning `0` divides by zero and yields infinity.

#### `public static IEnumerable<Hero> GetAllHeroesOfSettlement(Settlement settlement, bool includePrisoners)`

Everyone physically at a settlement.
- **Algorithm (yield order):** every `settlement.Parties`' `LeaderHero`; then every `settlement.HeroesWithoutParty`; then, if `includePrisoners`, every prisoner in `settlement.Party.PrisonRoster` whose `TroopRosterElement.Character.IsHero`.
- **Return-value semantics:** a lazy `IEnumerable<Hero>`. Empty (never `null`) for an empty settlement. **Duplicates are possible** if a hero appears both as a party leader and elsewhere.
- **Trap:** the party branch only yields `LeaderHero`, not every hero in every visiting party. For companions inside a visiting party you need `party.Party.LeaderHero` plus your own roster walk.
- **Trap:** the prisoner branch only includes `IsHero` prisoners — notable-tier prisoners only.

#### `public static void SpawnNotablesIfNeeded(Settlement settlement)`

Fills a settlement's notable roster up to the model target, probabilistically.
- **Algorithm:** only towns and villages qualify. Towns target `{GangLeader, Artisan, Merchant}`; villages `{RuralNotable, Headman}`. Sum `Campaign.Current.Models.NotableSpawnModel.GetTargetNotableCountForSettlement(settlement, occupation)` over those occupations into `target`; compute `ratio = (target - Notables.Count) / target` (or 1 when `Notables.Count == 0`); apply `ratio *= pow(ratio, 0.36f)`; roll one `MBRandom.RandomFloat` and, if it is `<= ratio`, count existing notables per occupation and spawn the shortfall.
- **Side effects:** creates heroes and adds them to the settlement. **Heavily RNG-consuming.**
- **Trap:** if `target == 0` and `Notables.Count > 0` the ratio goes negative and `pow(negative, 0.36f)` is `NaN`, so the comparison silently never spawns. A settlement with more notables than the model targets simply stops growing — correct, but for the wrong reason.
- **Trap:** calling it repeatedly on the same settlement will keep rolling; it does not have a "done" flag beyond the notable count itself.
- **Trap:** not for hideouts or castles — the `IsTown || IsVillage` guard makes those a silent no-op.

#### `public static ExplainedNumber GetGarrisonChangeExplainedNumber(Town town)`

A per-tick garrison change with labelled contributions.
- **Algorithm:** start `new ExplainedNumber(0f, true, null)`; ask `Campaign.Current.GetCampaignBehavior<IGarrisonRecruitmentBehavior>()` for its own explained number and, when `BaseNumber > 0`, add it labelled `"{=basevalue}Base"`; then, when `town.GarrisonParty != null`, subtract `Campaign.Current.Models.PartyDesertionModel.GetTroopsToDesert(town.GarrisonParty).TotalManCount` labelled `"{=ojBJ3aTO}Desertion"`.
- **Return-value semantics:** an `ExplainedNumber` whose `Result` is the signed change and whose `GetAffectedGameStrings()` explains it.
- **Trap:** `GetCampaignBehavior<IGarrisonRecruitmentBehavior>()` returning null throws at the first dereference. A campaign without that behavior registered cannot use this method at all.
- **Trap:** the label strings are inline literals with translation keys, not `GameTexts.FindText` lookups — they will not appear in a string table dump.
- **Trap:** the base contribution is added only when positive, so a negative base recruitment is silently dropped from the explanation while still being applied by the behavior. Do not treat the explanation as a complete audit of the change.

#### `public static float GetNeighborScoreForConsideringClan(Settlement settlement, Clan consideringClan)`

A defensive-positioning score for a fortification, from the perspective of a clan.
- **Algorithm:** only scores when `settlement.MapFaction == consideringClan.MapFaction && settlement.IsFortification`. Collect `settlement.Town.GetNeighborFortifications(NavigationType.All)` into a set; for each **direct** neighbour: `-0.2` if the settlement's map faction is at war with the neighbour's, `+0.1` if the neighbour shares the considering clan's map faction, `+0.05` otherwise. Then, for each neighbour's neighbours not already in the first set and not in a second set: `-0.04` at war with the considering faction, `+0.02` same faction, `+0.01` otherwise.
- **Return-value semantics:** a small signed float. `0f` for a settlement that is not a fortification or whose map faction differs from the considering clan's — so zero means "not applicable", not "neutral".
- **Trap:** the branch order means `+0.1` and `+0.05` are keyed on `consideringClan.MapFaction`, while `-0.2` is keyed on `settlement.MapFaction`. Since the guard already requires them equal, these coincide; but the *second* ring uses `consideringClan.MapFaction` for the positive branches and `settlement.MapFaction` for the negative one. Read carefully before assuming symmetry.
- **Trap:** the `0.2 / 0.1 / 0.05 / 0.04 / 0.02 / 0.01` weights are literals in the helper, not model values.
- **Use:** rank candidate fiefs for a clan in a "choose your seat" screen.

#### `public static void TakeEnemyVillagersOutsideSettlements(Settlement settlementWhichChangedFaction)`

A campaign-state mutator used when settlement ownership flips.
- **Side effects:** moves villagers belonging to the losing faction out of the settlement, using the static `StuffToCarryForMan` / `StuffToCarryForWoman` item id arrays and the rotating `_stuffToCarryIndex` field.
- **Trap:** it mutates a **static** `_stuffToCarryIndex` seeded from `MBRandom.NondeterministicRandomInt`, so its output is not reproducible and its behaviour depends on how many times it has been called in this process.
- **Trap:** it is written for the ownership-change path. Calling it on a settlement that has not changed faction will still move villagers out.
- **Use:** only from your own ownership-change handling, immediately after the change action.

#### `public static string GetRandomStuff(bool isFemale)`

A random cosmetic item id string for a villager's carried goods.
- **Return-value semantics:** an item **string id** from `StuffToCarryForMan` or `StuffToCarryForWoman`, selected by the rotating static index.
- **Trap:** the result is not guaranteed to exist in your item XML; treat it as a hint, not a validated id.

## Examples

### Example 1 — nearest *reachable* village for a landlocked party

```csharp
public Settlement FindRefugeTarget(MobileParty party)
{
    // NavigationType matters: NavigationType.All would happily return a
    // settlement on the far side of the sea.
    return SettlementHelper.FindNearestVillageToMobileParty(
        party,
        MobileParty.NavigationType.AllowAllNavigation,
        s => s.MapFaction != party.MapFaction);
}
```

### Example 2 — walk every settlement in range without allocating a list

```csharp
public List<Settlement> GetSettlementsInRange(MobileParty party, float maxDistance)
{
    var found = new List<Settlement>();
    int index = -1;
    // Returns an INDEX into Settlement.All, or -1 when exhausted.
    while ((index = SettlementHelper.FindNextSettlementAroundMobileParty(
                party, MobileParty.NavigationType.AllowAllNavigation, maxDistance, index)) >= 0)
    {
        found.Add(Settlement.All[index]);
    }
    return found;
}
```

### Example 3 — random settlement, with the null predicate the API does not tolerate

```csharp
public Settlement PickQuestTarget()
{
    // FindRandomSettlement() with no predicate throws - FindRandomInternal
    // dereferences the condition. Always pass one, even a trivial one.
    return SettlementHelper.FindRandomSettlement(s => s.IsVillage && !s.IsUnderRaid);
}
```

### Example 4 — everyone at a settlement, prisoners included

```csharp
public List<Hero> GetEveryoneInside(Settlement settlement)
{
    var heroes = new List<Hero>();
    foreach (Hero hero in SettlementHelper.GetAllHeroesOfSettlement(settlement, includePrisoners: true))
    {
        heroes.Add(hero);
    }
    return heroes;
}
```

### Example 5 — gate an AI decision on a real starvation signal

```csharp
public bool ShouldSendGrain(Settlement settlement)
{
    // Only towns have a Town component - a village here would throw.
    if (!settlement.IsTown)
    {
        return false;
    }
    return SettlementHelper.IsGarrisonStarving(settlement);
}
```

### Example 6 — rank candidate fiefs for a clan

```csharp
public List<Settlement> RankFiefsFor(Clan consideringClan, IEnumerable<Settlement> candidates)
{
    return candidates
        .Where(s => s.IsFortification)
        .OrderByDescending(s => SettlementHelper.GetNeighborScoreForConsideringClan(s, consideringClan))
        .ThenBy(s => s.SettlementTier)
        .ToList();
}
```

## Risks and crash boundaries

- **Null-predicate crash in the random helpers.** `FindRandomInternal` calls `condition(settlement)` with no null guard, so `FindRandomSettlement()` / `FindRandomHideout()` with the documented `= null` default throw `NullReferenceException`. This is a genuine footgun in the shipped API, not a misuse — always pass a predicate.
- **`GetRandomTown` returns `null` routinely.** `MBRandom.RandomInt(0, num - 1)` with `num == 1` can roll out of range, and `num == 0` produces `RandomInt(0, -1)`. Null is the normal "no match" answer; branch on it.
- **Full-scan cost.** Every `FindNearest*` iterates a whole settlement pool and performs a path-aware distance computation per candidate. On a large modded map, a per-frame or per-agent call is a real frame-time cost. Use `Settlement.StartFindingLocatablesAroundPosition` for hot-path work.
- **Navigation-type sensitivity.** Omitting or mis-specifying `navCapabilities` silently returns a *geographically* nearest but *unreachable* settlement. There is no error — only a wrong answer that shows up as AI walking in circles.
- **`IsGarrisonStarving` requires a town.** It dereferences `settlement.Town` with no guard; a village, castle or hideout throws. Also divides by `SettlementFoodModel.NumberOfProsperityToEatOneFood`, which a mod returning `0` turns into a division by zero.
- **`GetGarrisonChangeExplainedNumber` requires a registered behavior.** `Campaign.Current.GetCampaignBehavior<IGarrisonRecruitmentBehavior>()` returning null throws immediately. It also silently omits a *negative* base contribution from the explanation while the behavior still applies it — the explanation is not a complete audit.
- **Mutators with hidden state.** `TakeEnemyVillagersOutsideSettlements` advances a static `_stuffToCarryIndex` seeded from `MBRandom.NondeterministicRandomInt`; `SpawnNotablesIfNeeded` rolls `MBRandom` several times. Neither is reproducible, so neither belongs on a networked, replayed, or deterministic path.
- **`SpawnNotablesIfNeeded` numeric edge.** When `target == 0` and notables already exist, `ratio` goes negative and `pow(ratio, 0.36f)` yields `NaN`, so the comparison silently never spawns. A settlement that already exceeds the model target simply stops growing.
- **Cross-domain dependency.** The class lives in `TaleWorlds.CampaignSystem` under `Helpers` but returns `TaleWorlds.Core` types (`ExplainedNumber`, `TextObject`, `CampaignVec2`) and reads `TaleWorlds.ObjectSystem` object lists (`Town.AllTowns`, `Hideout.All`, `Village.All`). Missing any of those references is a load-time assembly failure on first call, not a compile error.
- **Load order.** Every member reads `Campaign.Current.Settlements`, `Campaign.MapDiagonal` or `Campaign.Current.Models.*` at call time. In character creation, the encyclopedia preview or the editor these are uninitialized and you get a `NullReferenceException`. Gate on `Campaign.Current != null` for any code that also runs outside a campaign.
- **Save serialization and ID stability.** Nothing here is saved. `FindNextSettlementAroundMobileParty` hands you an **index into `Settlement.All`**, which is *not* a stable identifier: inserting a settlement in your XML shifts every later index and silently changes which settlements a saved cursor points at. Never persist that index — persist settlement `StringId`s and resolve them yourself.
- **Predicate/type mismatch.** For the subtype-returning overloads the predicate receives the `Settlement`, not the `Hideout`/`Town`/`Village`. A predicate written against subtype members never matches, producing a plausible-looking `null`.

## Cross-Version Notes

- **v1.3.x (this page):** the member set above matches 1.3.15, including `FindNearestSettlementToPoint(in CampaignVec2, ...)` and `GetGarrisonChangeExplainedNumber`. The `FindRandomInternal` null-predicate behaviour is as described here — it is the shipped 1.3.15 implementation.
- **v1.4.x:** the nearest-lookup family is unchanged in shape and still full-scan based. Newer versions add settlement models; `IsGarrisonStarving` continues to read `SettlementFoodModel`, so it does follow a replaced food model, unlike the literal constants inside `GetNeighborScoreForConsideringClan`.
- **v1.5.x:** expect more settlement types and additional spawn helpers. The stable contract to build on is the `FindNearest*ToMobileParty` family (respect `NavigationType`, always supply a predicate) plus `GetAllHeroesOfSettlement`. Treat the weights inside `GetNeighborScoreForConsideringClan` and the item lists inside `GetRandomStuff` as version-sensitive internals.

## See Also

- ↑ Parent bucket: [Campaign-Ext API index](./)
- ↔ Sibling: [HeroHelper](../HeroHelper/) — `GetClosestSettlement` delegates here for its distance work
- ↔ Sibling: [FactionHelper](../FactionHelper/) — the clan/kingdom-side sibling
- ↔ Sibling: [DiplomacyHelper](../DiplomacyHelper/) — `GetBestSettlementToSpawnAround` uses its same-faction test
- ↔ Sibling: [CharacterHelper](../CharacterHelper/) — the character-side sibling; shared notable-template logic
- ↔ Sibling: [DistanceHelper](../DistanceHelper/) — the actual distance computation behind every lookup
- ↔ Sibling: [MapDistanceModel](../MapDistanceModel/) — consistent distance semantics elsewhere in the campaign
- ↔ Sibling: [Hideout](../Hideout/) and [Town](../../campaign/Town/) and [Village](../../campaign/Village/) — the subtype pools the scans iterate
- ↑ Settlement: [Settlement](../../campaign/Settlement/)
- ↑ MobileParty: [MobileParty](../../campaign/MobileParty/)
- ↑ Campaign world: [Campaign](../../campaign/Campaign/)