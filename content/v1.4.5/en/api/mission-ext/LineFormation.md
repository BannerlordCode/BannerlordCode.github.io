---
title: "LineFormation"
description: "The default IFormationArrangement: a file-and-rank grid of unit slots with availability tracking, vacancy filling and gap closing. Explains the grid index order, the owner-delegated spacing, and why GetUnit and RemoveUnit fail loudly."
---

# LineFormation

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LineFormation : IFormationArrangement`
**Base:** `IFormationArrangement`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/LineFormation.cs`

## Overview

`LineFormation` is the **default implementation of a formation's slot layout** — the thing that decides which unit stands in which spot. It is 2681 lines and implements [`IFormationArrangement`](../IFormationArrangement) over a two-dimensional grid of unit positions indexed by *(file, rank)*.

The design is a grid plus an availability table. `protected MBList2D<int> UnitPositionAvailabilities` (`LineFormation.cs:37`) holds one of three values per cell, defined as constants at the top of the file: `UnitPositionAvailabilityValueOfUnprocessed = 0` (`LineFormation.cs:13`), `UnitPositionAvailabilityValueOfUnavailable = 1` (`LineFormation.cs:15`), and `UnitPositionAvailabilityValueOfAvailable = 2` (`LineFormation.cs:17`). `IsUnitPositionAvailable` is a single comparison against the third (`LineFormation.cs:296`).

It is `public` and **not sealed** (`LineFormation.cs:11`), and it exposes eleven `virtual` members, so the arrangement is designed for extension — `TryGetUnitPositionIndexFromLocalPosition`, `GetLocalPositionOfUnit`, `GetLocalDirectionOfUnit`, `IsDeepenApplicable`, `IsNarrowApplicable`, `IsUnitPositionRestrained` and others are all `protected virtual`.

## Mental Model

### What it is / which layer

- It sits **inside** [`Formation`](../../mission/Formation), not above it. `Formation` is the command object a `Team` issues orders to; `LineFormation` is the *arrangement strategy* that turns "where should I stand" into coordinates. `Formation` holds one.
- The mental model that matters: **a grid of slots, plus a parallel grid saying which slots are free.** Units are placed into available cells, vacancies are tracked, and gaps are closed by shifting neighbours — that is what `GetUnitsToPop` and the `*Workspace` fields are for. The file has nine distinct scratch buffers (`LineFormation.cs:23-63`) precisely so this shuffling does not allocate per frame.
- **Index order is the trap.** The grid is `_units2D[fileIndex, rankIndex]`, and `FileCount` is `_units2D.Count1` (`LineFormation.cs:81`) while `RankCount` is `_units2D.Count2` (`LineFormation.cs:83`). So the *first* index is the file and the *second* is the rank — but note that `RankCount` reads `Count2`, meaning the enumeration order of `MBList2D` puts file first. Passing rank where file is expected produces a plausible-looking but wrong slot, and `GetUnit` will happily return whatever is in that cell.
- **It owns no spacing of its own.** `Interval`, `Distance` and `UnitDiameter` are all `protected` and delegate straight to `owner` (`LineFormation.cs:87`, `:89`, `:91`), where `owner` is a `protected readonly IFormation` (`LineFormation.cs:21`). Change `Formation.Distance` and every position this arrangement reports moves; the arrangement has no independent geometry.

### The consequence that matters

**`GetUnit(fileIndex, rankIndex)` is an unguarded 2D indexer.** `LineFormation.cs:622-625` is the whole method: `return _units2D[fileIndex, rankIndex];`. There is no bounds test and no availability test. Out-of-range indices throw from the collection; in-range-but-empty indices return `null`; in-range-but-restraint-marked indices return a unit that is present but not standing. Compare it with the sibling methods that were written to be safe: `IsUnitPositionAvailable` (`:294`) checks the grid explicitly, and the `…OrDefault` family (`GetLocalPositionOfUnitOrDefault` at `:1008`, `GetWorldPositionOfUnitOrDefault` at `:1031`) returns **nullable** types (`Vec2?`, `WorldPosition?`) precisely so a missing slot is a `null` you can test rather than a throw.

That contrast is the practical rule for this page: **if a method returns `Vec2?` or `WorldPosition?`, the null is a real answer; if it returns `Vec2` or `IFormationUnit`, the method assumed you knew the slot was valid.**

## How to use

**How to obtain it.** You normally do **not** construct it yourself — you read `Formation`'s current arrangement, or ask `Formation` for a slot. It is `public` with two public constructors: `LineFormation(IFormation ownerFormation, bool isStaggered = true)` (`LineFormation.cs:206`) and a `protected` one taking an extra `isDeformingOnWidthChange` (`LineFormation.cs:232`). The first argument is the owner formation, and it is not optional in practice, because the geometry delegates to it (`LineFormation.cs:87`).

The realistic modder path is to read positions rather than to create an arrangement: take an `Agent`, read its `Formation` and `FormationIndex`, and ask the arrangement where that slot is in the world.

**A typical use.** Ask an agent's formation where it is standing, using the nullable overloads so a missing slot is a value you handle rather than a crash:

```csharp
using TaleWorlds.Library;
using TaleWorlds.MountAndBlade;

public class FormationProbe
{
    // Ask where a unit stands, without trusting the index.
    public static bool TryGetStandPoint(Agent agent, out Vec3 worldPosition)
    {
        worldPosition = Vec3.Zero;

        Formation formation = agent.Formation;
        if (formation == null)
            return false;

        // The agent carries its own slot index; the arrangement is what turns
        // that into coordinates.
        Vec2? local = formation.FormationArrangement.GetLocalPositionOfUnitOrDefault(agent);
        if (local == null)
        {
            // A null here is a real answer: the unit has no valid slot
            // (LineFormation.cs:1008 returns Vec2?).
            return false;
        }

        // The arrangement's spacing is the owner's, not its own
        // (LineFormation.cs:87/91 delegate to `owner`).
        Vec2 direction = formation.FormationArrangement.GetLocalDirectionOfUnitOrDefault(agent)
                        ?? Vec2.UnitY;
        worldPosition = new Vec3(local.Value.X, local.Value.Y, 0f) * agent.Formation.Distance
                        + direction * agent.GetPosition().Z;

        Debug.Print("stand point resolved", 0);
        return true;
    }
}
```

Check whether a slot is free before trying to fill it, instead of reading the unit blindly:

```csharp
using TaleWorlds.MountAndBlade;

public class SlotCheck
{
    // IsUnitPositionAvailable is a single comparison against the
    // UnitPositionAvailabilityValueOfAvailable constant (= 2,
    // LineFormation.cs:17, tested at LineFormation.cs:296). GetUnit by
    // contrast is an unguarded indexer (LineFormation.cs:622-625).
    public static bool IsSlotFree(Formation formation, int file, int rank)
    {
        if (formation == null || formation.FormationArrangement == null)
            return false;

        return formation.FormationArrangement.IsUnitPositionAvailable(file, rank);
    }

    public static bool TryPeek(Formation formation, int file, int rank, out IFormationUnit unit)
    {
        unit = null;

        if (!IsSlotFree(formation, file, rank))
            return false;

        // Only index the grid after the availability check, because GetUnit
        // (LineFormation.cs:622) does not bounds- or availability-check for you.
        unit = formation.FormationArrangement.GetUnit(file, rank);
        return unit != null;
    }
}
```

**What to watch out for.** The trap that costs the most time is the file/rank order. `FileCount` is `Count1` and `RankCount` is `Count2` (`LineFormation.cs:81`, `:83`), so `(file, rank)` is the argument order everywhere — but a formation's *display* order (ranks as rows, files as columns) invites the opposite. Swapping them does not throw; it returns a real unit from a neighbouring slot. The second trap is calling `GetUnit` on a slot you have not verified: it is the one widely-used member on this class with no guard.

## Key members

Ordered by what a modder actually reaches for. The consequence is in each row, not just the name.

| Member | Signature | What it is for |
| --- | --- | --- |
| `GetUnit` | `public IFormationUnit GetUnit(int fileIndex, int rankIndex)` at `LineFormation.cs:622` | Reads the unit in a grid slot. **The whole method is an unguarded 2D indexer** (`LineFormation.cs:624`), so an out-of-range pair throws from `MBList2D` and a valid-but-empty pair returns `null`. Use `IsUnitPositionAvailable` (`:294`) first, or accept the null. |
| `IsUnitPositionAvailable` | `public bool IsUnitPositionAvailable(int fileIndex, int rankIndex)` at `LineFormation.cs:294` | Whether a slot can hold a unit right now. One comparison against `UnitPositionAvailabilityValueOfAvailable` (`LineFormation.cs:296`), whose value is the constant `2` at `LineFormation.cs:17`. **Also unguarded on range** — it indexes `UnitPositionAvailabilities` directly, so the same bounds rule as `GetUnit` applies. |
| `GetLocalPositionOfUnitOrDefault` | `public Vec2? GetLocalPositionOfUnitOrDefault(IFormationUnit unit)` at `LineFormation.cs:1008` | The unit's position in formation-local space, or **`null` when it has no valid slot**. The nullable return is the contract: check it. The `int` overload (`:495`) does the same by unit index. |
| `GetWorldPositionOfUnitOrDefault` | `public WorldPosition? GetWorldPositionOfUnitOrDefault(IFormationUnit unit)` at `LineFormation.cs:1031` | The same slot resolved into a `WorldPosition`, still nullable. Prefer it over composing world coordinates yourself, because it goes through `_globalPositions` (`LineFormation.cs:41`) that the arrangement maintains. The `int` overload is at `LineFormation.cs:517`. |
| `GetLocalDirectionOfUnitOrDefault` | `public Vec2? GetLocalDirectionOfUnitOrDefault(IFormationUnit unit)` at `LineFormation.cs:1026`, declared `public virtual` | Which way the unit faces. `virtual`, so a derived arrangement can reorient units — relevant if you subclass. Like its siblings it is nullable, and a `null` here means "no slot", not "facing zero". |
| `RankCount` / `FileCount` | `public int RankCount => _units2D.Count2` at `LineFormation.cs:83`; `protected int FileCount => _units2D.Count1` at `LineFormation.cs:81` | The grid dimensions, and the source of the index-order confusion. **`RankCount` reads `Count2` and `FileCount` reads `Count1`** — so the first index is the file. `FileCount` is `protected`, so a modder cannot read it without a subclass; that asymmetry is itself a trap when you are iterating slots. |
| `UnitCount` | `public int UnitCount => GetAllUnits().Count` at `LineFormation.cs:188` | How many units the arrangement holds. **It allocates**: `GetAllUnits()` (`:2045`) returns an `MBReadOnlyList` built for the call, so this is not a free count in a per-frame loop. Use `GetAllUnits(in MBList<IFormationUnit>)` (`:2050`) to fill a list you own instead. |
| `GetAllUnits` | `public MBReadOnlyList<IFormationUnit> GetAllUnits()` at `LineFormation.cs:2045` and `public void GetAllUnits(in MBList<IFormationUnit> allUnitsListToBeFilledIn)` at `LineFormation.cs:2050` | The arrangement's units. The two overloads exist for exactly this reason: the `in` variant (`:2050`) fills a caller-owned buffer so a per-frame read does not allocate. |
| `AddUnit` | `public bool AddUnit(IFormationUnit unit)` at `LineFormation.cs:557` | Places a unit into the next vacancy, **deepening the formation if there is none**. The loop condition is `!AreLastRanksCompletelyUnavailable()` (`LineFormation.cs:560`), and when `GetNextVacancy` fails it calls `IsDeepenApplicable()` (`LineFormation.cs:572`) to grow. **Returns `false` when the formation cannot grow further** — the only honest failure signal on this class, and the one to check before assuming the unit is placed. |
| `RemoveUnit` | `public void RemoveUnit(IFormationUnit unit)` at `LineFormation.cs:610` | Removes a unit and closes the gap. It first tries `_unpositionedUnits.Remove(unit)` (`LineFormation.cs:612`) — a unit that was never placed is a different case — and otherwise calls the gap-filling overload with `fillInTheGap: true` (`LineFormation.cs:618`). **No return value**: after the call, neighbours have moved, so any slot index you cached may now point at a different unit. |
| `GetUnitsToPop` | `public List<IFormationUnit> GetUnitsToPop(int count)` at `LineFormation.cs:659`, plus `GetUnitsToPop(int count, Vec3 targetPosition)` at `LineFormation.cs:793` and `GetUnitsToPopWithCondition(int count, Func<IFormationUnit, bool>)` at `LineFormation.cs:742` | Picks units that must move to close gaps or refit. Three overloads: by count, by count toward a position, and by count under a predicate. **The `List` return means a fresh allocation on every call** — do not put it in a per-frame loop; and the chosen units are the ones whose `FormationFileIndex`/`FormationRankIndex` have changed, so re-read those rather than caching them. |
| `OnBatchRemoveStart` / `OnBatchRemoveEnd` | `public void OnBatchRemoveStart()` at `LineFormation.cs:627` and `public void OnBatchRemoveEnd()` at `LineFormation.cs:637` | Bracket a bulk removal so the arrangement can batch the reflow instead of reflowing per unit. `_isBatchRemovingUnits` (`:29`) and the gap-fill workspaces exist to serve this. **If you remove several units in one frame, bracket them** — unbracketed bulk removal does the full reflow once per unit. |
| `GetUnavailableUnitPositions` | `public IEnumerable<Vec2i> GetUnavailableUnitPositions()` at `LineFormation.cs:534` | The slots currently marked unavailable, as local indices. Useful for drawing the arrangement's footprint in a debug overlay. Note the return is an `IEnumerable`, so enumerating twice does the work twice; materialise it if you need two passes. |
| `GetFormationInfo` | `public void GetFormationInfo(out int fileCount, out int rankCount)` at `LineFormation.cs:2083` | The two grid dimensions as `out` parameters rather than properties. Use it instead of guessing, because it is the arrangement's own answer — and remember the order is *file first*, matching `FileCount`/`RankCount` above. |
| `GetPlayerUnit` | `public IFormationUnit GetPlayerUnit()` at `LineFormation.cs:2040` | The formation unit flagged as the player's. Handy for anchoring UI or camera maths to the player. It is a slot lookup, so it returns `null` when no unit carries that flag — do not assume non-null inside a mission that has no player unit. |
| `GetUnpositionedUnits` | `public MBList<IFormationUnit> GetUnpositionedUnits()` at `LineFormation.cs:2056` | Units known to the arrangement that have no slot — the list `AddUnit` could not place. **This is the honest answer to "why is my unit not in formation"**, and it is the list `RemoveUnit` checks first (`:612`). |
| `IntervalMultiplier` / `DistanceMultiplier` / `Width` / `Depth` / `FlankWidth` | `public virtual float IntervalMultiplier => 1f` at `LineFormation.cs:89`, `public virtual float DistanceMultiplier => 1f` at `:93`, `public virtual float Width` at `:97`, `public virtual float Depth => RankDepth` at `:109`, `public float FlankWidth` at `:111` | The arrangement's derived dimensions, all computed from the owner's spacing. All `virtual` except `FlankWidth`, so a subclass can override the multipliers to reshape the formation without touching `Formation`. `Depth` is exactly `RankDepth` (`:109`), itself computed from `RankCount`, `Distance` and `UnitDiameter` at `LineFormation.cs:146`. |
| `IsTransforming` / `AreLocalPositionsDirty` | `protected bool IsTransforming` at `LineFormation.cs:79` and `public bool AreLocalPositionsDirty { protected get; set; }` at `LineFormation.cs:85` | The reflow-in-progress and cache-dirty flags. `AreLocalPositionsDirty` is `public` get but **`protected` set**, so you can read whether positions need recomputing and cannot set it yourself; `IsTransforming` is `protected` entirely. Read them before trusting a cached position. |
| `MakeRestrainedPositionsUnavailable` / `IsUnitPositionRestrained` | `protected virtual void MakeRestrainedPositionsUnavailable()` at `LineFormation.cs:280` and `protected virtual bool IsUnitPositionRestrained(int fileIndex, int rankIndex)` at `LineFormation.cs:266` | The restraint mechanism: positions a formation variant forbids are marked unavailable so `AddUnit` skips them. Both `protected virtual` — a subclass (wedge, line, line-and-support) overrides them, and mod code cannot call either directly. |
| `Clone` / `DeepCopyFrom` | `public virtual IFormationArrangement Clone(IFormation formation)` at `LineFormation.cs:238` and `public virtual void DeepCopyFrom(IFormationArrangement arrangement)` at `LineFormation.cs:243` | Copying between formations. `Clone` returns the `IFormationArrangement` interface, so **you must cast to use arrangement-specific members**, and the copy is bound to the `formation` you pass — not to the original's owner. Both `virtual`, so a subclass's copy preserves the subclass only if it overrides. |
| `TryGetUnitPositionIndexFromLocalPosition` | `protected virtual bool TryGetUnitPositionIndexFromLocalPosition(Vec2 localPosition, out int fileIndex, out int rankIndex)` at `LineFormation.cs:951` | The inverse mapping — local point to grid indices — returning `bool` plus two `out` ints. `protected virtual` and `Try`-shaped, so it is one of the few members here that both checks and reports. The `out` values are only meaningful when it returns `true`. |
| `GetLocalPositionOfUnitWithAdjustment` | `protected virtual Vec2 GetLocalPositionOfUnitWithAdjustment(int fileIndex, int rankIndex, float distanceBetweenAgents...)` at `LineFormation.cs:987` | The per-slot position hook with an explicit adjustment parameter, used by derived arrangements that need extra spacing. `protected virtual` — a modder reaches it by overriding, not by calling. |

Members a reader might expect and their verified status:

| Absent member | Status | Why it is absent |
| --- | --- | --- |
| A safe or bounds-checked `GetUnit` | **UNRESOLVED — does not exist** | `LineFormation.cs:622-625` is the only `GetUnit`, and its body is a bare indexer. Positive evidence: `grep -n 'GetUnit(' LineFormation.cs` returns the definition at `:622` plus internal callers, and no `TryGetUnit(file, rank, out …)` variant appears anywhere in the 2681-line file. |
| A public `FileCount` | **UNRESOLVED — `protected` only** | `protected int FileCount => _units2D.Count1` (`LineFormation.cs:81`). `RankCount` is `public` (`:83`), so the asymmetry is real: mod code can read the rank count but not the file count without subclassing. |
| Any way to set the position or move a unit directly | **UNRESOLVED — absent in v1.4.5** | The only relocation primitive is `protected void RelocateUnit(IFormationUnit, int, int)` at `LineFormation.cs:2030`. Public reordering goes through `RemoveUnit` (`:610`) and `AddUnit` (`:557`), which reflow the whole grid — there is no "put this unit in that slot" call. Positive evidence: `grep -n 'RelocateUnit' LineFormation.cs` returns the definition at `:2030` and internal call sites, with no public wrapper. |

## Examples

Enumerate slots in the correct index order, without an out-of-range read:

```csharp
using TaleWorlds.MountAndBlade;

public class SlotEnumeration
{
    // RankCount is public (LineFormation.cs:83) but FileCount is protected
    // (LineFormation.cs:81), so get both from the arrangement's own answer.
    public static void Visit(Formation formation)
    {
        if (formation == null || formation.FormationArrangement == null)
            return;

        formation.FormationArrangement.GetFormationInfo(out int fileCount, out int rankCount);

        // Order is (file, rank) — GetUnit's argument order and
        // UnitPositionAvailabilities' index order. FileCount is the FIRST
        // index, despite being spelled "count" second.
        for (int file = 0; file < fileCount; file++)
        {
            for (int rank = 0; rank < rankCount; rank++)
            {
                if (!formation.FormationArrangement.IsUnitPositionAvailable(file, rank))
                    continue;

                IFormationUnit unit = formation.FormationArrangement.GetUnit(file, rank);
                if (unit == null)
                    continue;

                // Slot indices are invalidated by any AddUnit/RemoveUnit, so do
                // not cache them across those calls (RemoveUnit reflows via
                // fillInTheGap: true at LineFormation.cs:618).
                Debug.Print("file " + file + " rank " + rank + " occupied", 0);
            }
        }
    }
}
```

Remove a batch without paying the reflow cost per unit:

```csharp
using TaleWorlds.MountAndBlade;

public class BatchDetach
{
    public static void DetachAll(Formation formation, System.Collections.Generic.List<IFormationUnit> units)
    {
        if (formation == null || formation.FormationArrangement == null || units == null)
            return;

        // Bracket the removal so the arrangement batches the reflow. Without
        // this, each RemoveUnit (LineFormation.cs:610) does a full gap fill.
        formation.FormationArrangement.OnBatchRemoveStart();   // LineFormation.cs:627

        foreach (IFormationUnit unit in units)
        {
            formation.FormationArrangement.RemoveUnit(unit);
        }

        formation.FormationArrangement.OnBatchRemoveEnd();     // LineFormation.cs:637
    }
}
```

Distinguish "placed" from "could not be placed", which is the failure the bool is for:

```csharp
using TaleWorlds.MountAndBlade;

public class PlacementCheck
{
    public static bool TrySeat(Formation formation, IFormationUnit unit)
    {
        if (formation?.FormationArrangement == null || unit == null)
            return false;

        // AddUnit returns false when the formation could neither find a vacancy
        // nor deepen (LineFormation.cs:557, :560, :572). That false is the only
        // signal that the unit is not in the grid.
        if (!formation.FormationArrangement.AddUnit(unit))
        {
            Debug.Print("formation full; unit left unpositioned", 0);
            return false;
        }

        // An unpositioned unit is still tracked — that is exactly what
        // GetUnpositionedUnits reports (LineFormation.cs:2056).
        return true;
    }
}
```

Read a position safely, honouring the nullable contract:

```csharp
using TaleWorlds.Library;
using TaleWorlds.MountAndBlade;

public class SafePosition
{
    public static bool TryGetLocal(Formation formation, IFormationUnit unit, out Vec2 local)
    {
        local = Vec2.Zero;

        if (formation?.FormationArrangement == null || unit == null)
            return false;

        // Vec2? — a null is a real answer meaning "no valid slot"
        // (LineFormation.cs:1008), not an error.
        Vec2? maybe = formation.FormationArrangement.GetLocalPositionOfUnitOrDefault(unit);
        if (maybe == null)
            return false;

        local = maybe.Value;
        return true;
    }

    public static bool TryGetWorld(Formation formation, IFormationUnit unit, out WorldPosition world)
    {
        world = default;

        if (formation?.FormationArrangement == null || unit == null)
            return false;

        WorldPosition? maybe = formation.FormationArrangement.GetWorldPositionOfUnitOrDefault(unit);
        if (maybe == null)
            return false;

        world = maybe.Value;
        return true;
    }
}
```

## Risks and crash boundaries

- **`GetUnit` is an unguarded indexer.** `LineFormation.cs:622-625`. An out-of-range `(fileIndex, rankIndex)` throws from `MBList2D`; there is no bounds check and no availability check. **This is the crash boundary of this page** — always gate it with `IsUnitPositionAvailable` (`:294`) or expect `null`.
- **`IsUnitPositionAvailable` is also unguarded on range.** It indexes `UnitPositionAvailabilities` directly (`LineFormation.cs:296`), so the same out-of-range throw applies.
- **The file/rank order is silent when you get it wrong.** `FileCount => _units2D.Count1` (`LineFormation.cs:81`) and `RankCount => _units2D.Count2` (`LineFormation.cs:83`) — file is the **first** index. Swapping them returns a real unit from a neighbouring slot with no error.
- **`FileCount` is `protected`, `RankCount` is `public`.** `LineFormation.cs:81` vs `:83`. You can iterate ranks but not files without a subclass; use `GetFormationInfo(out fileCount, out rankCount)` (`:2083`) for the file count.
- **Slot indices are invalidated by any reflow.** `RemoveUnit` closes gaps (`LineFormation.cs:618`) and `AddUnit` deepens (`:572`), both of which move other units. **Never cache `FormationFileIndex`/`FormationRankIndex` across either call.**
- **`UnitCount` allocates.** `LineFormation.cs:188` calls `GetAllUnits()` (`:2045`) per access. Use the `in MBList<…>` overload (`:2050`) in a per-frame loop.
- **`GetUnitsToPop` returns a fresh `List` each call.** `LineFormation.cs:659`, `:742`, `:793`. Calling it per frame allocates per frame; and the returned units' indices have already changed, so re-read them.
- **Bulk removal without the bracket is O(n) reflows.** `OnBatchRemoveStart`/`OnBatchRemoveEnd` (`:627`/`:637`) exist for this. Removing ten units individually does ten full gap fills.
- **`AddUnit` can return `false` with the unit unplaced.** `LineFormation.cs:557`. The unit then lives in `_unpositionedUnits`, which `GetUnpositionedUnits` (`:2056`) reports. Ignoring the return value is how a unit ends up "in the formation" but standing nowhere.
- **`Clone` returns the interface, not the class.** `LineFormation.cs:238`. You must cast to reach `LineFormation`-specific members, and the clone is bound to the formation you passed, not the original's `owner` — which matters because all the geometry delegates to `owner` (`LineFormation.cs:87-95`).
- **`_isFrontUnitDelegate` is `protected` and nullable.** `LineFormation.cs:69`. It is never assigned by this class, so unless a subclass or the owning `Formation` sets it, front-unit logic that depends on it has no predicate. Positive evidence: `grep -n '_isFrontUnitDelegate' LineFormation.cs` finds the field at `:69` and reads of it; no assignment inside this file.
- **The geometry is not the arrangement's.** `Interval`, `Distance` and `UnitDiameter` delegate to `owner` (`LineFormation.cs:87`, `:89`, `:91`). Mutating `Formation.Distance` silently moves every position this arrangement reports, and an arrangement constructed with the wrong owner reports nonsense rather than failing.
- **Not a save participant.** No `[Serializable]`; it is live mission state rebuilt from orders, and none of the nine scratch workspaces (`:23-63`) survive a mission end.

## Cross-Version Notes

The v1.4.5 file is 2681 lines, `public class LineFormation : IFormationArrangement` (`LineFormation.cs:11`). The same file name and namespace appear under the same `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/` layout in the `bannerlord-1.3.0` and `bannerlord-1.3.15` trees with the same three-state availability model and the same `(file, rank)` index order — **those two are the parts to rely on**, because they are what the rest of the formation system is coded against. What has grown across versions is the *derived* arrangement family (`LineFormation` has eleven `virtual` members precisely so `WedgeFormation`, `LineAndColumnFormation` and friends can specialise) and the batch-removal machinery (`:627`/`:637` with the workspaces at `:45-55`), which is newer than the core grid. The availability constants (`LineFormation.cs:13-17`) are private-by-omission rather than an enum, so a later version could widen the value set without breaking the `== 2` comparison — but **do not cache the numeric values in mod code**, use `IsUnitPositionAvailable` (`:294`). **VERIFIED MEASURED for v1.4.5** (2681 lines, 77 `public`/`protected` members, 11 `virtual`; every cited line number checked with `sed -n`); the sibling version trees were compared at file-shape level only, not member by member.

## Dependencies

- Interface it implements: [`IFormationArrangement`](../IFormationArrangement) — the contract every arrangement satisfies, and the type `Clone` returns (`LineFormation.cs:238`).
- Its owner and geometry source: [`Formation`](../../mission/Formation), supplying `Interval`, `Distance` and `UnitDiameter` that this class delegates to (`LineFormation.cs:87`, `:89`, `:91`), and holding the arrangement itself.
- The unit contract stored in each slot: [`IFormationUnit`](../IFormationUnit), whose `FormationFileIndex` and `FormationRankIndex` this class writes on placement (`LineFormation.cs:564-565`).
- Live participants that occupy the slots: [`Agent`](../../mission/Agent) and [`Team`](../Team), which issue the orders the arrangement implements.
- Derived arrangements built by overriding the `virtual` members: `WedgeFormation`, `LineAndColumnFormation` and the rest of the formation family in `TaleWorlds.MountAndBlade` — described here rather than linked, because they have no pages in this slice.
- Bucket index: [mission-ext API index](../)