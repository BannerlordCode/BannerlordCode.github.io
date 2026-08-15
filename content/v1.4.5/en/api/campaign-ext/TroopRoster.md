---
title: "TroopRoster"
description: "The member and prisoner roster of each party (MobileParty / Settlement): it holds TroopRosterElement keyed by CharacterObject, handles troop add/remove, tallies counts and feeds strength input, and carries the hero in-party / in-prison state callbacks."
---
# TroopRoster

**Namespace:** TaleWorlds.CampaignSystem.Roster
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TroopRoster : ISerializableObject`
**Base:** `ISerializableObject`
**File:** `TaleWorlds.CampaignSystem/Roster/TroopRoster.cs`

## Overview

`TroopRoster` is **a troop roster keyed by troop type (`CharacterObject`)**: internally it uses a `TroopRosterElement[]` array holding "how many troops, how many wounded, how much xp" per `CharacterObject`, and exposes add / remove, counting, totals and per-element access. A party has two `TroopRoster`s:

- `PartyBase.MemberRoster` — members (hero lords, ordinary troops, wanderers included).
- `PartyBase.PrisonRoster` — prisoners.

It itself **contains no strength value** and does **not auto-upgrade** troops: strength is derived from the roster by `PartyBase.EstimatedStrength` (via `PartyStrengthModel`), and upgrades are driven by `PartyUpgraderCampaignBehavior` + `PartyTroopUpgradeModel`. Think of it as "an ordered, cache-stat-bearing troop container".

## Mental Model

Treat `TroopRoster` as **"the party muster roll"**:

- **Lifecycle:** the roster is created together with `PartyBase` (`new TroopRoster(this)`), and a mod almost never `new`s it itself. `OwnerParty` is bound at construction and cannot be changed afterwards (only a private setter).
- **Who holds it:** `MobileParty.Party.MemberRoster` / `PrisonRoster`, or the garrison / prisoner roster of a `Settlement`. `TroopRoster` is just data; it knows nothing about world state beyond who owns it.
- **Which layer:** the Campaign layer (campaign data), not the Mission (battle scene). Deaths / wounds in battle are written back into the roster after the battle via `PlayerEncounter` / `MapEvent`, not by changing `TroopRoster` directly in the scene.
- **The truth about add/remove:** all count changes ultimately go through `AddToCounts` → `AddToCountsAtIndex`, which **simultaneously maintains the cached totals** (`_totalRegulars`, etc.) and triggers `OwnerParty` callbacks (`OnHeroAdded` / `OnHeroRemoved` / `OnRosterSizeChanged` / `OnXpChanged`). `VersionNo` increments on every change and cascades to `MobileParty.UpdateVersionNo()`.

### When to use

- Query a party's member / prisoner count, healthy / wounded distribution: `TotalManCount`, `TotalWounded`, `GetTroopCount(c)`.
- Directly add / remove ordinary troops: `roster.AddToCounts(character, n, ...)` / `roster.RemoveTroop(character, n)`.
- Merge two rosters: `roster.Add(otherRoster)`.
- Need a **temporary, unowned** container for computation: `TroopRoster.CreateDummyTroopRoster()` (`OwnerParty == null`, add/remove triggers no party callbacks).

### When not to use

- **Do not** use `SetElementNumber` / `SetElementWoundedNumber` / `SetElementXp` to change counts or wounds for a hero — these three setters are "bare writes", they do not maintain the cached totals nor trigger `OwnerParty` callbacks, silently breaking `TotalRegulars` etc. and desyncing the hero's membership state. Use `AddToCounts` / `RemoveTroop`; for hero join / leave go through `AddHeroToPartyAction.Apply` / `TakePrisonerAction.Apply`.
- **Do not** `new TroopRoster()` yourself and assign it to a `PartyBase.MemberRoster` to "replace" the roster — `OwnerParty` being null makes all subsequent callbacks fail; operate on the existing roster via `Add` / `Clear` / `AddToCounts`.
- **Do not** share a single `TroopRoster` instance across parties — `OwnerParty` is singly bound and callbacks would point at the wrong side.
- **Do not** expect `GetElementCopyAtIndex`'s returned object to write back into the roster — it is a value copy (see "Value-copy trap" below).

## How to Obtain TroopRoster

```csharp
// The main party's member roster (MobileParty.MemberRoster is a shortcut for Party.MemberRoster)
TroopRoster members = MobileParty.MainParty.MemberRoster;

// The same party's prisoner roster
TroopRoster prisoners = MobileParty.MainParty.PrisonRoster;

// Settlement garrison / prisoners (Settlement's Party also holds both rosters)
TroopRoster garrison = Settlement.CurrentSettlement.Party.MemberRoster;

// A temporary, unowned roster (triggers no callbacks, often used for computation or templates)
TroopRoster temp = TroopRoster.CreateDummyTroopRoster();
```

## Member Reference (by topic)

> Convention: element count (troop count) means `data[i].Number`; `Count` is the "number of distinct `CharacterObject` entries", not the total number of people.

### Add / remove troops

#### `public int AddToCounts(CharacterObject character, int count, bool insertAtFront = false, int woundedCount = 0, int xpChange = 0, bool removeDepleted = true, int index = -1)`
**Purpose:** the core entry for roster add/remove. Add `count` troops, `woundedCount` of them wounded, with `xpChange` experience.
**Side effects:** maintains the cached totals (ordinary troops into `_totalRegulars`, heroes into `_totalHeroes`); hero add/remove triggers `OwnerParty.OnHeroAdded` / `OnHeroRemoved` and `OnRosterSizeChanged`; any count change calls `UpdateVersion()` (and thus `MobileParty.UpdateVersionNo()`). If an entry's count reaches zero and `removeDepleted == true`, that troop entry is removed.
**When to call:** change ordinary troops anytime; adding a hero also goes through it (but `AddHeroToPartyAction.Apply` is preferred to keep the hero-side state consistent). Returns the entry's index in `data`.

#### `public void RemoveTroop(CharacterObject troop, int numberToRemove = 1, UniqueTroopDescriptor troopSeed = default, int xp = 0)`
**Purpose:** remove some troops (ordinary and heroes) from the roster.
**Side effects:** for non-heroes it rolls back `xp` (i.e. reduces experience); **when `PlayerEncounter.CurrentBattleSimulation != null` and the target is not a hero, `removeDepleted` is forced to `false`** — i.e. during battle simulation ordinary troops only decrement `Number` without immediately compressing the entry, and are tidied up uniformly after the simulation ends. This is a deliberate "deferred cleanup"; if you repeatedly `RemoveTroop` to 0 during battle simulation without triggering compression, the roster retains entries with `Number==0`.
**When to call:** daily attrition, releasing prisoners, post-battle settlement.

#### `public void WoundTroop(CharacterObject troop, int numberToWound = 1, UniqueTroopDescriptor troopSeed = default)`
**Purpose:** mark some ordinary troops as wounded (underlying `AddToCountsAtIndex(index, 0, numberToWound)`).
**Trap:** a hero's `WoundedNumber` is derived from `Character.HeroObject.IsWounded` (the `TroopRosterElement` getter returns 0 or 1 directly for heroes), so `WoundTroop` is **ineffective for heroes**. To wound a hero go through `Hero.MakeWounded(...)`, which writes back `_totalWoundedHeroes` via `OnHeroHealthStatusChanged`.

#### `public void Add(TroopRoster troopRoster)` / `public void Add(TroopRosterElement element)`
**Purpose:** merge another roster (or a single element) into the current roster. Calls `AddToCounts` one by one, so caches and callbacks are maintained normally.
**Note:** `Add` uses the **current** roster's `OwnerParty`; the merged roster's ownership is ignored.

#### `public void Clear()`
**Purpose:** remove all entries. Walks `AddToCountsAtIndex(negative)` for each, so it triggers `OnHeroRemoved` for every hero.
**When to call:** disband a party, before resetting a roster (note it triggers ownership callbacks that may change hero world state).

#### `public ICollection<TroopRosterElement> RemoveIf(Predicate<TroopRosterElement> match)`
**Purpose:** bulk-remove by predicate, returns a **copy list** of the removed elements. Iterates from the end; for each hit entry calls `AddToCountsAtIndex` with a reversed delta, so statistics and callbacks are maintained normally.

#### `public void RemoveZeroCounts()`
**Purpose:** compact the `data` array, discarding all entries with `Number == 0`.
**Risk:** it directly moves the array and only calls `UpdateVersion()`, **not triggering `OwnerParty.OnHeroRemoved`**. If you use it to clear a hero entry whose count hit zero, the hero's `PartyBelongedTo` and other ownership state are not notified, causing desync. To remove a hero always use `RemoveTroop`.

### Counts and totals (read-only properties)

| Property | Meaning | Source |
|------|------|------|
| `Count` | Number of distinct `CharacterObject` entries (not total people) | `_count` |
| `TotalRegulars` | Total count of all non-hero troops | cache, maintained by add/remove |
| `TotalHeroes` | Count of hero entries in the roster (entries, not troop count) | cache |
| `TotalWoundedRegulars` / `TotalWoundedHeroes` | Ordinary / hero wounded count | cache |
| `TotalWounded` | `TotalWoundedRegulars + TotalWoundedHeroes` | derived |
| `TotalManCount` | `TotalRegulars + TotalHeroes` (total party size) | derived |
| `TotalHealthyCount` | `TotalManCount - TotalWounded` | derived |
| `VersionNo` | Version number incremented on every add/remove / xp change; cascades to `MobileParty.UpdateVersionNo()` | `CachedData` |

> These totals are **cached fields**, refreshed only in `AddToCountsAtIndex` / `OnHeroHealthStatusChanged` / `CalculateCachedStatsOnLoad`. If you change counts via the bare setters like `SetElementNumber`, these properties go stale (see Risk section).

### Element access and queries

#### `public MBList<TroopRosterElement> GetTroopRoster()`
**Purpose:** return the (cached) list of all current elements, convenient for `foreach` iteration.
**Trap:** returns an `MBList` cached by `VersionNo`. If you **hold this reference** and the roster changes afterwards, the `VersionNo` change makes the next `GetTroopRoster()` rebuild the list, but your old reference is still the old snapshot. Fetch fresh each time you need it; do not cache long-term.

#### `public TroopRosterElement GetElementCopyAtIndex(int index)`
**Purpose:** get an element by index.
**Value-copy trap:** `TroopRosterElement` is a `struct`, returned by value here. The following does **not** change the roster:
```csharp
TroopRosterElement e = roster.GetElementCopyAtIndex(i);
e.Number = 5;      // Only changed the local copy, roster unchanged!
e.Xp += 100;       // Same as above, ineffective
```
To actually modify, use `AddToCounts` / `SetElementNumber` / `SetElementXp`.

#### `public CharacterObject GetCharacterAtIndex(int index)`
Returns the troop template at the index; out of range throws `IndexOutOfRangeException`.

#### `public int GetElementNumber(int index)` / `GetElementNumber(CharacterObject character)`
Returns the troop count of an entry / a troop type (`0` means not present).

#### `public int GetElementWoundedNumber(int index)` / `GetTroopCount(CharacterObject troop)` / `Contains(CharacterObject character)` / `FindIndexOfTroop(CharacterObject character)`
Routine queries: `GetTroopCount` is a convenient wrapper over `FindIndexOfTroop` + read `Number`; `Contains` / `FindIndexOfTroop` compare `CharacterObject` references with `==`.

#### `public int Sum(Func<TroopRosterElement, int> selector)`
A convenience sum over all elements, e.g. `roster.Sum(e => e.Number)` equals `TotalManCount`.

### Experience, version and copy

#### `public void AddXpToTroop(CharacterObject troop, int xpAmount)` / `AddXpToTroopAtIndex(int index, int xpAmount)`
**Purpose:** accumulate experience for a troop type. Underlying `SetElementXp`, triggers `OwnerParty.OnXpChanged`.
**Note:** it **only writes experience, does not trigger upgrade**. Troop upgrade to the next tier is done by `PartyUpgraderCampaignBehavior` in the daily tick, which reads experience, decides via `PartyTroopUpgradeModel` and calls `AddToCounts` — `TroopRoster` itself has no "auto-upgrade" logic.

#### `public void SetElementXp(int index, int number)` / `SetElementNumber(int index, int number)` / `SetElementWoundedNumber(int index, int number)`
**Purpose:** low-level direct write of the element's `Xp` / `Number` / `WoundedNumber`.
**Risk (important):** these three setters **only change data + `UpdateVersion()`, they do not maintain the cached totals nor trigger `OwnerParty` callbacks**. After changing counts via `SetElementNumber`, `TotalRegulars` / `TotalHeroes` etc. will mismatch reality, and the hero join / leave callbacks will not fire, until the next load's `CalculateCachedStatsOnLoad` recomputes them wholesale. Unless you are doing low-level / serialization work, always use `AddToCounts` / `RemoveTroop`.

#### `public void UpdateVersion()`
Called automatically after every add/remove / xp change; makes `VersionNo++` and cascades to `MobileParty.UpdateVersionNo()`, so caches depending on the roster (strength, wage, tiered counts, etc.) are invalidated and rebuilt.

#### `public void OnHeroHealthStatusChanged(Hero hero)`
Called back by the hero system when a hero's wound state changes: refreshes `_totalWoundedHeroes`. Ordinary troops' wound changes do not go through here, but are maintained inside `AddToCountsAtIndex`.

#### `public TroopRoster CloneRosterData()`
**Purpose:** copy a new roster with `OwnerParty == null`, containing only `Character` / `Number` / `WoundedNumber` (**not experience**). Suitable for snapshots or staging before a merge.

#### `public FlattenedTroopRoster ToFlattenedRoster()`
Returns a `FlattenedTroopRoster` that expands each element into "single soldier" (for templates / UI / recruitment tables).

#### `public static TroopRoster CreateDummyTroopRoster()`
Returns an empty roster with `OwnerParty == null`. Suitable for temporary computation containers.

#### `public static void CalculateCachedStatsOnLoad()`
**Purpose:** called once by the save system after load, **only once**: iterates every just-deserialized `TroopRoster` in this session and recomputes `_totalRegulars` / `_totalHeroes` / wounded etc. caches (serialization only stores `data` + `_count` + `VersionNo`, totals are not persisted). A mod generally does not need to call it actively; but if you deserialize / construct a roster yourself and depend on `TotalRegulars` etc., you must remember these fields are 0 / stale before this step of the load pipeline.

#### `public static bool RostersAreIdentical(TroopRoster a, TroopRoster b)`
Compares `Count` / `OwnerParty` / `VersionNo` and, entry by entry, `Character` + `Number` for consistency (for save verification / tests).

## Minimal Real Examples

### Example 1: Add recruits to the main party with experience

```csharp
MobileParty party = MobileParty.MainParty;
TroopRoster roster = party.MemberRoster; // same as party.Party.MemberRoster

// Get a real troop template via MBObjectManager (using "looter" as an example)
CharacterObject recruit = MBObjectManager.Instance.GetObject<CharacterObject>("looter");
if (recruit != null)
{
    // Add 10, with 150 xp; insertAtFront=false means append to the tail
    roster.AddToCounts(recruit, 10, insertAtFront: false, woundedCount: 0, xpChange: 150);

    int now = roster.GetTroopCount(recruit);      // current count
    int xp  = roster.GetElementXp(recruit);        // cumulative xp of this troop type
    InformationManager.DisplayMessage(
        new InformationMessage($"{recruit.Name}: {now} troops, xp {xp}"));
}
```

### Example 2: Iterate member stats, release all prisoners of one type

```csharp
// Tally the main party's healthy / wounded distribution
TroopRoster members = MobileParty.MainParty.MemberRoster;
int total    = members.TotalManCount;     // total count
int wounded  = members.TotalWounded;      // total wounded
int healthy  = members.TotalHealthyCount; // healthy count

// Iterate each troop type (note GetTroopRoster returns a value-copy list, changing locals does not affect the roster)
foreach (TroopRosterElement element in members.GetTroopRoster())
{
    CharacterObject c = element.Character;
    int n  = element.Number; // troop count (value copy)
    int xp = element.Xp;     // experience (value copy)
}

// Release all prisoners of one type from the main party's prisoner roster
TroopRoster prisoners = MobileParty.MainParty.PrisonRoster;
CharacterObject prisoner = MBObjectManager.Instance.GetObject<CharacterObject>("prisoner_template");
if (prisoner != null && prisoners.Contains(prisoner))
{
    // Remove all of this prisoner type; for hero prisoners prefer the reverse flow of TakePrisonerAction
    prisoners.RemoveTroop(prisoner, prisoners.GetTroopCount(prisoner));
}
```

## Dependencies

**Upstream (TroopRoster depends on)**

- [CharacterObject](../../campaign/CharacterObject/) — the troop template per entry (skills, equipment, tier).
- [Hero](../../campaign/Hero/) — a hero is a special `CharacterObject`, stored in the roster as an entry.
- [PartyBase](../../campaign/PartyBase/) — `OwnerParty`; holds `MemberRoster` and `PrisonRoster`, and receives add/remove callbacks.
- [TroopRosterElement](../../campaign/TroopRosterElement) — a single "troop → count / wounded / xp" record (value type).
- [UniqueTroopDescriptor](../../core-extra/UniqueTroopDescriptor/) — used by `RemoveTroop` / `WoundTroop` to identify a specific hero individual.

**Downstream (depends on TroopRoster)**

- [PartyBase](../../campaign/PartyBase/)'s `EstimatedStrength` — strength computed from the roster via `PartyStrengthModel`.
- [PartyWageModel](../../campaign/PartyWageModel) — wage computed from the roster (`MobileParty.TotalWage`).
- [PartySizeLimitModel](../../campaign/PartySizeLimitModel) — party size limit is based on the roster.
- [PartyHealingModel](../../campaign/GameModels) — wound recovery writes back via `WoundTroop` / cache.
- [PartyTroopUpgradeModel](../../campaign/PartyTroopUpgradeModel) + [PartyUpgraderCampaignBehavior](../../campaign/PartyUpgraderCampaignBehavior) — read experience to complete upgrades.
- Battle / encounter (`PlayerEncounter.CurrentBattleSimulation`) — affects the `removeDepleted` behavior of `RemoveTroop`.

**Related Actions (prefer them to change heroes / prisoners)**

- [AddHeroToPartyAction](../AddHeroToPartyAction/) — add a hero to a party (correctly triggers callbacks).
- [TakePrisonerAction](../TakePrisonerAction/) — capture into `PrisonRoster`.
- [RecruitPrisonersCampaignBehavior](../../campaign/RecruitPrisonersCampaignBehavior) — prisoner recruitment.

**Sibling**

- [ItemRoster](../ItemRoster/) — the "item version roster", structurally parallel to TroopRoster.
- [FlattenedTroopRoster](../../campaign/FlattenedTroopRoster) — the flattened single-soldier view of a roster.

## Risk Section (may cause crashes / save corruption)

1. **Experience is lost after save / load:** `TroopRosterElement.SerializeTo` writes 4 fields (`Character` / `_number` / `_woundedNumber` / `_xp`), but `DeserializeFrom` only reads back the first 3, **not `_xp`**. So troop experience in party rosters zeroes out after each save → load (same behavior in v1.3.15 and v1.4.5). Do not rely on "experience" as a state that persists across save / load; if you need persistent upgrade progress, store it in data your mod manages itself.

2. **`SetElementNumber` / `SetElementWoundedNumber` / `SetElementXp` break the cached totals:** the three are bare writes, not maintaining `_totalRegulars` / `_totalHeroes` / wounded stats, nor triggering `OwnerParty` callbacks. After changing counts with them, `TotalManCount` etc. mismatch reality, hero ownership state desyncs, and it is only globally corrected at the next `CalculateCachedStatsOnLoad` (i.e. next load). Always use `AddToCounts` / `RemoveTroop`; hero add/remove goes through `AddHeroToPartyAction` / `TakePrisonerAction`.

3. **`GetElementCopyAtIndex` is a value copy:** `TroopRosterElement` is a `struct`, what you get is a copy, assigning to it does not change the roster (see example above). To change data you must go through `AddToCounts` / `SetElement*`.

4. **`RemoveZeroCounts` fires no callback:** when it compacts the array it skips `OnHeroRemoved`. Using it to clear a hero entry with zero count leaves the hero's `PartyBelongedTo` etc. state lingering. Remove a hero with `RemoveTroop`.

5. **`RemoveTroop` does not immediately compact during battle simulation:** when `PlayerEncounter.CurrentBattleSimulation != null` and the target is not a hero, `removeDepleted` is forced to `false`, the entry only decrements `Number` without removal. The battle-resolution logic relies on this deferred cleanup; do not assume "a troop type whose count dropped to 0 has disappeared from the roster" mid battle simulation.

6. **Hero wounds cannot rely on `WoundTroop`:** a hero's wounded count is derived from `HeroObject.IsWounded`, calling `WoundTroop` on a hero is ineffective. To wound a hero go through `Hero.MakeWounded(...)`, which correctly updates `_totalWoundedHeroes` via `OnHeroHealthStatusChanged`.

7. **Do not share across parties / manually `new` to replace the roster:** `OwnerParty` cannot be changed after construction; sharing an instance makes add/remove callbacks point at the wrong `PartyBase`; manually `new TroopRoster()` then assigning it to `PartyBase.MemberRoster` makes `OwnerParty == null`, and all subsequent callbacks fail.

8. **Do not hold cached lists long-term:** `GetTroopRoster()` returns an `MBList` cached by `VersionNo`; after the roster changes the old reference becomes a stale snapshot. Fetch fresh on each iteration.

## Cross-Version Notes

- **v1.3.15 / v1.3.0:** the core API (`AddToCounts`, `RemoveTroop`, `WoundTroop`, `AddXpToTroop`, `CloneRosterData`, `CreateDummyTroopRoster`, `CalculateCachedStatsOnLoad`, etc. signatures and semantics) are basically consistent with v1.4.5; the serialization asymmetry of "experience lost on save / load" exists in both versions.
- **v1.4.5 (authoritative source):** follow what this page describes; if writing a cross-version mod, avoid relying on the correctness of the `SetElement*` setters, and assume experience cannot survive across save / load.

## See Also

- ↑ Parent: [campaign-ext index](../)
- ↔ Siblings: [ItemRoster](../ItemRoster/) · [TroopRosterElement](../../campaign/TroopRosterElement) · [FlattenedTroopRoster](../../campaign/FlattenedTroopRoster)
- Upstream hubs: [PartyBase](../../campaign/PartyBase/) · [CharacterObject](../../campaign/CharacterObject/) · [Hero](../../campaign/Hero/) · [MobileParty](../../campaign/MobileParty/)
- Related models / behaviors: [PartySizeLimitModel](../../campaign/PartySizeLimitModel) · [PartyWageModel](../../campaign/PartyWageModel) · [PartyHealingModel](../../campaign/GameModels) · [PartyTroopUpgradeModel](../../campaign/PartyTroopUpgradeModel) · [PartyUpgraderCampaignBehavior](../../campaign/PartyUpgraderCampaignBehavior)
- Related Actions: [AddHeroToPartyAction](../AddHeroToPartyAction/) · [TakePrisonerAction](../TakePrisonerAction/) · [RecruitPrisonersCampaignBehavior](../../campaign/RecruitPrisonersCampaignBehavior)
