---
title: "TroopRoster"
description: "The per-party / per-settlement membership and prisoner ledger keyed by CharacterObject. TroopRoster holds TroopRosterElement rows, drives add/remove counting, totals, and XP, and carries the hero-in-party / hero-in-captivity callbacks."
---
# TroopRoster

**Namespace:** TaleWorlds.CampaignSystem.Roster
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TroopRoster : ISerializableObject`
**Base:** `ISerializableObject`
**Source:** `TaleWorlds.CampaignSystem/Roster/TroopRoster.cs`

## Overview

`TroopRoster` is a **keyed ledger of troops** whose key is a `CharacterObject`: internally it keeps a `TroopRosterElement[]` array recording "how many soldiers, how many wounded, how much XP" for each troop type, and exposes add/remove, counting, totals, and per-element access. Every party owns **two** rosters — `PartyBase.MemberRoster` (the living members, including hero lords, regulars, and wanderers) and `PartyBase.PrisonRoster` (captured prisoners). The roster itself carries **no combat-strength value** and performs **no auto-upgrade**: strength is derived by `PartyBase.EstimatedStrength` (via `PartyStrengthModel`) from the roster contents, and upgrades are driven by `PartyUpgraderCampaignBehavior` + `PartyTroopUpgradeModel`. Treat it as an ordered, cache-maintaining container of troops.

## Mental Model

Think of `TroopRoster` as the **muster roll of a party**:

- **Lifecycle:** a roster is created together with its `PartyBase` (`new TroopRoster(this)`) and is almost never `new`'d by a mod. `OwnerParty` is bound in the constructor and is read-only afterwards (private setter).
- **Who holds it:** `MobileParty.Party.MemberRoster` / `PrisonRoster`, or a `Settlement`'s garrison / prisoner roster. `TroopRoster` is pure data — it knows nothing about world state beyond who owns it.
- **Which layer:** this is **Campaign-layer** data (campaign state), not Mission (battle scene). Casualties and wounds from a fight are written back to the roster **after** the battle via `PlayerEncounter` / `MapEvent`, never mutated directly inside the battle scene.
- **The truth about mutations:** every headcount change ultimately flows through `AddToCounts` → `AddToCountsAtIndex`, which simultaneously maintains the cached totals (`_totalRegulars`, `_totalHeroes`, …) and fires the `OwnerParty` callbacks (`OnHeroAdded` / `OnHeroRemoved` / `OnRosterSizeChanged` / `OnXpChanged`). `VersionNo` is incremented on every change and cascades into `MobileParty.UpdateVersionNo()`.

## When to Use / When NOT to Use

**Use it when:**

- You need to query a party's member/prisoner counts, healthy/wounded split: `TotalManCount`, `TotalWounded`, `GetTroopCount(c)`.
- You add or remove ordinary troops directly: `roster.AddToCounts(character, n, ...)` / `roster.RemoveTroop(character, n)`.
- You merge two rosters: `roster.Add(otherRoster)`.
- You need a **temporary, unowned** container for computation: `TroopRoster.CreateDummyTroopRoster()` (`OwnerParty == null`, so mutations fire no party callbacks).

**Do NOT use it when:**

- **Do not** mutate hero counts or wounds through `SetElementNumber` / `SetElementWoundedNumber` / `SetElementXp`. These are "bare" writers: they do not maintain the cached totals and do **not** fire `OwnerParty` callbacks, silently corrupting `TotalRegulars` and the hero-belonging state. Use `AddToCounts` / `RemoveTroop`; for heroes entering/leaving a party, go through `AddHeroToPartyAction.Apply` / `TakePrisonerAction.Apply`.
- **Do not** `new TroopRoster()` and assign it to `PartyBase.MemberRoster` to "replace" the roster — a `null` `OwnerParty` disables all later callbacks. Operate on the existing roster via `Add` / `Clear` / `AddToCounts`.
- **Do not** share one `TroopRoster` instance across parties — `OwnerParty` is a single binding, so callbacks would point at the wrong side.
- **Do not** assume `GetElementCopyAtIndex` returns something you can write back — it is a value copy (see the value-copy trap below).

## Dependencies

**Upstream (what TroopRoster depends on)**

- [CharacterObject](../../campaign/CharacterObject/) — the troop template for every roster entry (skills, equipment, tier).
- [Hero](../../campaign/Hero/) — a hero is a special `CharacterObject` stored as a roster entry.
- [PartyBase](../../campaign/PartyBase/) — the `OwnerParty`; holds `MemberRoster` and `PrisonRoster` and receives the add/remove callbacks.
- [MobileParty](../../campaign/MobileParty/) — the most common owner; its `UpdateVersionNo()` is cascaded from `VersionNo`.
- [Settlement](../../campaign/Settlement/) — a settlement's `Party` also holds a garrison roster and a prisoner roster.

**Downstream (what depends on TroopRoster)**

- `PartyBase.EstimatedStrength` — combat strength derived from the roster via `PartyStrengthModel`.
- [ItemRoster](../ItemRoster/) — the "item twin" of a troop roster; parallel structure.

**Related Actions (prefer these for hero/prisoner changes)**

- [AddHeroToPartyAction](../AddHeroToPartyAction/) — adds a hero to a party (correctly fires callbacks).
- [TakePrisonerAction](../TakePrisonerAction/) — puts a hero into a `PrisonRoster`.

## Members by Theme

> Convention: the **element count** (number of troops) is `data[i].Number`; `Count` is the number of *distinct* `CharacterObject` entries, **not** the total headcount.

### Adding and removing troops

#### `public int AddToCounts(CharacterObject character, int count, bool insertAtFront = false, int woundedCount = 0, int xpChange = 0, bool removeDepleted = true, int index = -1)`
**Purpose:** the central entry point for changing the roster. Adds `count` troops, of which `woundedCount` are wounded, and applies `xpChange` XP.
**Side effects:** maintains the cached totals (regulars go to `_totalRegulars`, heroes to `_totalHeroes`); hero add/remove fires `OwnerParty.OnHeroAdded` / `OnHeroRemoved` and `OnRosterSizeChanged`; any change calls `UpdateVersion()` (and thus `MobileParty.UpdateVersionNo()`). If an entry reaches zero and `removeDepleted == true`, the troop-type entry is removed. Returns the entry's index in `data`.
**When to call:** any time you mutate ordinary troops; adding heroes also flows through here (but prefer `AddHeroToPartyAction.Apply` so hero-side state stays consistent).

#### `public void RemoveTroop(CharacterObject troop, int numberToRemove = 1, UniqueTroopDescriptor troopSeed = default, int xp = 0)`
**Purpose:** removes troops (regulars or heroes) from the roster.
**Side effects:** for non-heroes it rolls back `xp` (subtracts XP); **when `PlayerEncounter.CurrentBattleSimulation != null` and the target is not a hero, `removeDepleted` is forced to `false`** — during battle simulation, ordinary troops only decrement `Number` and are *not* compacted immediately; cleanup happens after the simulation ends. This is deliberate lazy cleanup: if you `RemoveTroop` down to 0 repeatedly during a battle sim without compaction, you will be left with `Number == 0` entries.
**When to call:** daily attrition, freeing prisoners, post-battle settlement.

#### `public void WoundTroop(CharacterObject troop, int numberToWound = 1, UniqueTroopDescriptor troopSeed = default)`
**Purpose:** marks ordinary troops as wounded (internally `AddToCountsAtIndex(index, 0, numberToWound)`).
**Trap:** a hero's `WoundedNumber` is derived from `Character.HeroObject.IsWounded` (the `TroopRosterElement` getter returns 0 or 1 for heroes), so **`WoundTroop` does nothing for heroes**. To wound a hero, call `Hero.MakeWounded(...)`, which writes back `_totalWoundedHeroes` via `OnHeroHealthStatusChanged`.

#### `public void Add(TroopRoster troopRoster)` / `public void Add(TroopRosterElement element)`
**Purpose:** merges another roster (or a single element) into this one. Each entry is added through `AddToCounts`, so caches and callbacks are maintained correctly.
**Note:** `Add` uses *this* roster's `OwnerParty`; the merged roster's ownership is ignored.

#### `public void Clear()`
**Purpose:** removes all entries. It walks each entry through `AddToCountsAtIndex(negative)`, so each hero fires `OnHeroRemoved`.
**When to call:** disbanding a party or resetting a roster (note this triggers belonging callbacks and may change hero world-state).

#### `public ICollection<TroopRosterElement> RemoveIf(Predicate<TroopRosterElement> match)`
**Purpose:** batch-removes by predicate, returning a **copy list** of the removed elements. It iterates backwards and reverse-applies `AddToCountsAtIndex` for each match, so totals and callbacks stay correct.

#### `public void RemoveZeroCounts()`
**Purpose:** compacts the `data` array, dropping every `Number == 0` entry.
**Risk:** it moves the array and only calls `UpdateVersion()` — it does **not** fire `OwnerParty.OnHeroRemoved`. If you use it to drop a zero-count hero entry, the hero's `PartyBelongedTo` and similar state are never notified, causing desync. To remove a hero, always use `RemoveTroop`.

### Counts and totals (read-only)

| Property | Meaning | Source |
|----------|---------|--------|
| `Count` | number of distinct `CharacterObject` entries (not headcount) | `_count` |
| `TotalRegulars` | total non-hero troops | cached, maintained on add/remove |
| `TotalHeroes` | number of hero entries (entries, not headcount) | cached |
| `TotalWoundedRegulars` / `TotalWoundedHeroes` | wounded regulars / heroes | cached |
| `TotalWounded` | `TotalWoundedRegulars + TotalWoundedHeroes` | derived |
| `TotalManCount` | `TotalRegulars + TotalHeroes` (party headcount) | derived |
| `TotalHealthyCount` | `TotalManCount - TotalWounded` | derived |
| `VersionNo` | version bumped on every add/remove / XP change; cascades `MobileParty.UpdateVersionNo()` | `CachedData` |

> These totals are **cached fields**, refreshed only inside `AddToCountsAtIndex` / `OnHeroHealthStatusChanged` / `CalculateCachedStatsOnLoad`. If you mutate counts with the bare setters (`SetElementNumber` and friends), these properties go stale (see Risks).

### Element access and queries

#### `public MBList<TroopRosterElement> GetTroopRoster()`
**Purpose:** returns the (cached) list of all elements for `foreach` iteration.
**Trap:** the returned `MBList` is cached by `VersionNo`. If you **hold a reference** and the roster changes afterwards, the next `GetTroopRoster()` rebuilds the list, but your old reference remains an old snapshot. Fetch it fresh each time you iterate; do not cache it long-term.

#### `public TroopRosterElement GetElementCopyAtIndex(int index)`
**Purpose:** returns the element at an index.
**Value-copy trap:** `TroopRosterElement` is a `struct`, returned by value. The following does **not** change the roster:
```csharp
TroopRosterElement e = roster.GetElementCopyAtIndex(i);
e.Number = 5;   // only changes the local copy; roster unchanged!
e.Xp += 100;    // also ineffective
```
To really mutate, use `AddToCounts` / `SetElementNumber` / `SetElementXp`.

#### `public CharacterObject GetCharacterAtIndex(int index)`
Returns the troop template at the index; throws `IndexOutOfRangeException` if out of range.

#### `public int GetElementNumber(int index)` / `GetElementNumber(CharacterObject character)`
Returns an entry's / a troop type's headcount (`0` if absent).

#### `public int GetElementWoundedNumber(int index)` / `GetTroopCount(CharacterObject troop)` / `Contains(CharacterObject character)` / `FindIndexOfTroop(CharacterObject character)`
Routine queries: `GetTroopCount` is a `FindIndexOfTroop` + read `Number` convenience; `Contains` / `FindIndexOfTroop` compare `CharacterObject` by reference equality.

#### `public int Sum(Func<TroopRosterElement, int> selector)`
Convenience sum over all elements, e.g. `roster.Sum(e => e.Number)` equals `TotalManCount`.

### XP, version, and copying

#### `public void AddXpToTroop(CharacterObject troop, int xpAmount)` / `AddXpToTroopAtIndex(int index, int xpAmount)`
**Purpose:** accumulates XP for a troop type. Internally goes through `SetElementXp`, firing `OwnerParty.OnXpChanged`.
**Note:** it **writes XP only — it does not trigger upgrades**. Promotion to the next tier is decided by `PartyUpgraderCampaignBehavior` on the daily tick, which reads XP and calls `AddToCounts` via `PartyTroopUpgradeModel`. `TroopRoster` has no auto-upgrade logic of its own.

#### `public void SetElementXp(int index, int number)` / `SetElementNumber(int index, int number)` / `SetElementWoundedNumber(int index, int number)`
**Purpose:** low-level direct writes of `Xp` / `Number` / `WoundedNumber`.
**Risk (important):** these three setters only change data + `UpdateVersion()`, they do **not** maintain the cached totals and do **not** fire `OwnerParty` callbacks. After `SetElementNumber`, `TotalRegulars` / `TotalHeroes` no longer match reality, and hero add/remove callbacks do not fire — the discrepancy is only fully recomputed on the next load via `CalculateCachedStatsOnLoad`. Unless you are doing low-level / serialization work, always use `AddToCounts` / `RemoveTroop`.

#### `public void UpdateVersion()`
Called automatically after every add/remove / XP change; increments `VersionNo` and cascades `MobileParty.UpdateVersionNo()`, invalidating dependent caches (strength, wages, layered counts).

#### `public void OnHeroHealthStatusChanged(Hero hero)`
Called back by the hero system when a hero's wound status changes: refreshes `_totalWoundedHeroes`. Ordinary-troop wound changes do not go through here — they are maintained inside `AddToCountsAtIndex`.

#### `public TroopRoster CloneRosterData()`
**Purpose:** copies into a new roster where `OwnerParty == null`, keeping only `Character` / `Number` / `WoundedNumber` (**not** XP). Useful for snapshots or staging before a merge.

#### `public FlattenedTroopRoster ToFlattenedRoster()`
Returns a `FlattenedTroopRoster` that expands each element into individual troops (for templates / UI / recruitment tables).

#### `public static TroopRoster CreateDummyTroopRoster()`
Returns an empty roster with `OwnerParty == null`. Handy as a temporary compute container.

#### `public static void CalculateCachedStatsOnLoad()`
**Purpose:** called exactly **once** by the save system after load. It walks every freshly-deserialized `TroopRoster` in the session and recomputes `_totalRegulars` / `_totalHeroes` / wounded caches (serialization stores only `data` + `_count` + `VersionNo`; the totals are not persisted). Mods rarely call this directly; but if you deserialize or construct a roster yourself and depend on `TotalRegulars` etc., remember those fields are 0 / stale until this step of the load pipeline runs.

#### `public static bool RostersAreIdentical(TroopRoster a, TroopRoster b)`
Compares `Count` / `OwnerParty` / `VersionNo` and per-entry `Character` + `Number` (used for save validation / tests).

## Example

### Example 1: Reinforce the main party with recruits and grant XP

```csharp
MobileParty party = MobileParty.MainParty;
TroopRoster roster = party.MemberRoster; // same as party.Party.MemberRoster

// Resolve a real troop template through MBObjectManager (e.g. "looter")
CharacterObject recruit = MBObjectManager.Instance.GetObject<CharacterObject>("looter");
if (recruit != null)
{
    // Add 10 troops, 150 XP; insertAtFront=false appends to the tail
    roster.AddToCounts(recruit, 10, insertAtFront: false, woundedCount: 0, xpChange: 150);

    int now = roster.GetTroopCount(recruit); // headcount now
    int xp  = roster.GetElementXp(recruit);  // accumulated XP for this type
    InformationManager.DisplayMessage(
        new InformationMessage($"{recruit.Name}: {now} troops, {xp} XP"));
}
```

### Example 2: Tally members and free a class of prisoners

```csharp
// Tally the main party's healthy / wounded split
TroopRoster members = MobileParty.MainParty.MemberRoster;
int total    = members.TotalManCount;     // total headcount
int wounded  = members.TotalWounded;      // total wounded
int healthy  = members.TotalHealthyCount; // healthy headcount

// Iterate each troop type (GetTroopRoster returns a value-copy list;
// changing local variables does not affect the roster)
foreach (TroopRosterElement element in members.GetTroopRoster())
{
    CharacterObject c = element.Character;
    int n  = element.Number; // headcount (value copy)
    int xp = element.Xp;     // XP (value copy)
}

// Free every prisoner of one type from the main party's prisoner roster
TroopRoster prisoners = MobileParty.MainParty.PrisonRoster;
CharacterObject prisoner = MBObjectManager.Instance.GetObject<CharacterObject>("prisoner_template");
if (prisoner != null && prisoners.Contains(prisoner))
{
    // Remove all of that prisoner type; for hero prisoners prefer the
    // reverse flow of TakePrisonerAction.
    prisoners.RemoveTroop(prisoner, prisoners.GetTroopCount(prisoner));
}
```

## Risks

1. **XP is lost across save/load.** `TroopRosterElement.SerializeTo` writes four fields — `Character` (`WriteUInt`), `_number`, `_woundedNumber`, and `_xp` — but `DeserializeFrom` reads back only the first three (`_number`, `_woundedNumber`) and **never reads `_xp`** (`TroopRosterElement.cs`, `SerializeTo`/`DeserializeFrom`). As a result, troop XP in a party roster is **zeroed on every save → load** (identical behavior in v1.3.0, v1.3.15, and v1.4.5). Do not treat XP as persistent state across saves; if you need durable upgrade progress, store it in your own mod data.

2. **`SetElementNumber` / `SetElementWoundedNumber` / `SetElementXp` corrupt the cached totals.** All three are bare writers: they do not maintain `_totalRegulars` / `_totalHeroes` / the wounded caches, and they do not fire `OwnerParty` callbacks. After using them, `TotalManCount` and friends diverge from reality and hero-belonging state desyncs, only corrected wholesale on the next `CalculateCachedStatsOnLoad` (the next load). Always prefer `AddToCounts` / `RemoveTroop`; hero add/remove goes through `AddHeroToPartyAction` / `TakePrisonerAction`.

3. **`GetElementCopyAtIndex` is a value copy.** `TroopRosterElement` is a `struct`; what you get is a copy, and assigning to it does not change the roster (see the example above). To mutate, go through `AddToCounts` / `SetElement*`.

4. **`RemoveZeroCounts` fires no callback.** When it compacts the array it skips `OnHeroRemoved`. Dropping a zero-count hero entry this way leaves the hero's `PartyBelongedTo` and similar state behind. Remove heroes with `RemoveTroop`.

5. **`RemoveTroop` does not compact immediately during battle simulation.** When `PlayerEncounter.CurrentBattleSimulation != null` and the target is not a hero, `removeDepleted` is forced `false`, so the entry only decrements `Number` and is not removed. The battle-resolution logic relies on this lazy cleanup; do not assume "a troop reduced to 0 has already left the roster" mid-simulation.

6. **Hero wounds cannot be done with `WoundTroop`.** A hero's wounded count is derived from `HeroObject.IsWounded`; calling `WoundTroop` on a hero is a no-op. Wound a hero via `Hero.MakeWounded(...)`, which correctly updates `_totalWoundedHeroes` through `OnHeroHealthStatusChanged`.

7. **Do not share / manually `new` a replacement roster.** `OwnerParty` is immutable after construction; sharing one instance makes add/remove callbacks point at the wrong `PartyBase`, and `new TroopRoster()` assigned to `PartyBase.MemberRoster` yields `OwnerParty == null`, disabling all later callbacks.

8. **Do not hold the cached list long-term.** `GetTroopRoster()` returns an `MBList` cached by `VersionNo`; after the roster changes, the old reference becomes a stale snapshot. Fetch fresh on each iteration.

## Cross-Version Notes

- **v1.3.0 / v1.3.15:** the core API (`AddToCounts`, `RemoveTroop`, `WoundTroop`, `AddXpToTroop`, `CloneRosterData`, `CreateDummyTroopRoster`, `CalculateCachedStatsOnLoad`, …) has signatures and semantics essentially identical to v1.4.5, and the XP save/load asymmetry described above is present in both versions.
- **v1.4.5 (authoritative source):** as described on this page. For cross-version mods, avoid relying on the correctness of the `SetElement*` setters, and assume XP cannot survive a save/load.

## See Also

- ↑ Parent: [campaign-ext index](../)
- ↔ Sibling: [ItemRoster](../ItemRoster/) · [CharacterObject](../../campaign/CharacterObject/) · [MobileParty](../../campaign/MobileParty/)
- Upstream hub: [PartyBase](../../campaign/PartyBase/) · [Hero](../../campaign/Hero/) · [Settlement](../../campaign/Settlement/)
- Related Actions: [AddHeroToPartyAction](../AddHeroToPartyAction/) · [TakePrisonerAction](../TakePrisonerAction/)
