---
title: "ItemComparerBase"
description: "The nested abstract comparer every list-sorting screen in the campaign ViewModelCollection uses. It carries one piece of mutable state — _isAscending, set by SetSortMode — and forces every concrete comparer to fall back to ResolveEquality for tie-breaking, which is what keeps repeated clicks on a column stable instead of shuffling rows."
---
# ItemComparerBase

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting  
**Module:** TaleWorlds.CampaignSystem.ViewModelCollection  
**Type:** `public abstract class ItemComparerBase : IComparer<SmeltingItemVM>`  
**Base:** `IComparer<SmeltingItemVM>`  
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting/SmeltingSortControllerVM.cs`

## Overview

`ItemComparerBase` is a **nested** abstract class, and the name is reused by ten separate campaign screens plus two multiplayer ones. Each instance of the name lives inside a different `*SortControllerVM` in a different assembly, and each implements `IComparer<T>` for a *different* item type. This page documents the Smelting variant (`IComparer<SmeltingItemVM>`), which is the shape every variant shares:

| Screen controller | `T` |
|---|---|
| `SmeltingSortControllerVM` | `SmeltingItemVM` |
| `ArmyManagementSortControllerVM` | `ArmyManagementItemVM` |
| `ClanFiefsSortControllerVM` | `ClanSettlementItemVM` |
| `ClanMembersSortControllerVM` | `ClanLordItemVM` |
| `ClanPartiesSortControllerVM` | `ClanPartyItemVM` |
| `TournamentLeaderboardSortControllerVM` | `TournamentLeaderboardEntryItemVM` |
| `KingdomArmySortControllerVM` | `KingdomArmyItemVM` |
| `KingdomClanSortControllerVM` | `KingdomClanItemVM` |
| `KingdomWarSortControllerVM` | `KingdomWarItemVM` |
| `KingdomSettlementSortControllerVM` | `KingdomSettlementItemVM` |
| `MissionScoreboardPlayerSortControllerVM` | `MissionScoreboardPlayerVM` |

The class itself is four members. `protected bool _isAscending` is the shared mutable state. `public void SetSortMode(bool isAscending)` writes it — it is called by the controller's `ExecuteSortByX()` methods immediately before `MBBindingList<T>.Sort(comparer)`, so the *same* comparer instance is reused across many sorts and mutated between them. `public abstract int Compare(T x, T y)` is what each concrete comparer (e.g. `ItemNameComparer`, `ItemYieldComparer`, `ItemTypeComparer`) overrides. `protected int ResolveEquality(T x, T y)` provides the tie-break, and it differs per screen: Smelting uses `x.Name.CompareTo(y.Name)`, ArmyManagement uses `x.LeaderNameText.CompareTo(y.LeaderNameText)`.

## Mental Model

Read it as **"a mutable sort-direction flag wrapped around one required tie-break"**:

- **Where it sits:** it is not a standalone type. It is a nested class of a `*SortControllerVM : ViewModel`, which is itself the thing bound to the Gauntlet column headers. The controller owns the `MBBindingList<T>` and the concrete comparer instances; the comparer is a helper that happens to be typed.
- **Typical call order:** the widget invokes `ExecuteSortByName()` on the controller → the controller bumps its `NameState`, resets every other state via `SetAllStates`, calls `_nameComparer.SetSortMode(NameState == 1)`, then `_listToControl.Sort(_nameComparer)`. Inside that `Sort`, `Compare` is called many times, each call consulting `_isAscending`.
- **Common misuse trap — the comparer instance is shared and mutable.** There is exactly one `ItemNameComparer` per controller, created in the controller's constructor and reused for every subsequent sort. You must not cache a comparer and use it from two threads or two controllers at once; `_isAscending` is not per-call state.
- **Common misuse trap — tie-breaks are required, not optional.** Every built-in concrete comparer ends with `return ResolveEquality(x, y);` when the primary keys compare equal. Without it, `MBBindingList.Sort` (a non-stable sort in practice) reshuffles equal rows on every click, and the player's selection jumps. If you write your own concrete comparer, always end with `ResolveEquality`.
- **Common misuse trap — the direction multiplication is inconsistent by design.** Numeric comparers do `int n = y.Cost.CompareTo(x.Cost); return n * (_isAscending ? -1 : 1);` while `ItemNameComparer` special-cases `_isAscending` with an early return. Both are correct; mixing the two conventions in one comparer is an easy sign flip.
- **Common misuse trap — name collisions across assemblies.** `ItemComparerBase` is not unique. A `using` of two of these namespaces plus an unqualified `ItemComparerBase` is an ambiguous reference, and the C# compiler will tell you so — but only if you actually reference the type, which most mod code never does.

## When to Use / When NOT to Use

**Use it when:**
- You are writing your own `*SortControllerVM` for a custom list screen and want the same three-state (default / ascending / descending) column behaviour.
- You want to add a new sort column to an existing screen: subclass `ItemComparerBase`, implement `Compare`, register it, add an `ExecuteSortBy...` method.
- You want a *stable-feeling* sort: implement `Compare` and always terminate with `ResolveEquality`.

**Do NOT use it when:**
- You need a one-off sort with no UI column. A plain `IComparer<T>` or a `Comparison<T>` lambda is shorter and needs no state.
- You need a comparer that is used from more than one place at once. Write a stateless comparer instead; `_isAscending` makes these unsuitable for concurrent use.
- You are trying to reuse an existing comparer across different item types. The `T` is baked into the interface implementation.

## Key members

### `protected bool _isAscending`

The sort direction. Written only by `SetSortMode`. Read inside every `Compare` override.
- **Visibility:** `protected`, so subclasses see it but the controller does not — the controller flips it through `SetSortMode` rather than by assignment.
- **Statefulness:** it persists between sorts. Nothing resets it except the controller's next `ExecuteSortByX`.

### `public void SetSortMode(bool isAscending)`

Assigns `_isAscending`. Called by the owning controller immediately before each `Sort`.
- **Return value:** none.
- **Contract:** `true` means ascending. Note that the built-in numeric comparers negate the reversed comparison (`y.CompareTo(x)`) and then multiply by `-1` when ascending, so the effective order is *ascending* when the flag is `true` even though the raw comparison was descending.

### `public abstract int Compare(T x, T y)`

The sort key. Contract: return negative when `x` precedes `y`, zero when equal, positive when `x` follows.
- **Required pattern:** compute the primary key; if it differs, return `key * (_isAscending ? -1 : 1)`; otherwise return `ResolveEquality(x, y)`.

### `protected int ResolveEquality(T x, T y)`

The screen-specific tie-break, `x.Name.CompareTo(y.Name)` in Smelting and `x.LeaderNameText.CompareTo(y.LeaderNameText)` in ArmyManagement.
- **It is intentionally *not* direction-aware.** It returns the same result regardless of `_isAscending`, which means tie-broken rows keep a stable ascending name order even when the primary column is descending. That is the desired behaviour; do not "fix" it by multiplying by the direction.

## Examples

### Example 1 — the canonical concrete comparer (Smelting, name)

```csharp
public class ItemNameComparer : ItemComparerBase
{
    public override int Compare(SmeltingItemVM x, SmeltingItemVM y)
    {
        if (_isAscending)
        {
            return y.Name.CompareTo(x.Name) * -1;
        }

        return y.Name.CompareTo(x.Name);
    }
}
```

### Example 2 — the canonical concrete comparer (Smelting, numeric key)

```csharp
public class ItemYieldComparer : ItemComparerBase
{
    public override int Compare(SmeltingItemVM x, SmeltingItemVM y)
    {
        int byYield = y.Yield.CompareTo(x.Yield);
        if (byYield != 0)
        {
            return byYield * (_isAscending ? -1 : 1);
        }

        return ResolveEquality(x, y);   // mandatory tie-break
    }
}
```

### Example 3 — adding a column to an existing controller

```csharp
public class ItemTierComparer : ItemComparerBase
{
    public override int Compare(SmeltingItemVM x, SmeltingItemVM y)
    {
        int byTier = y.Tier.CompareTo(x.Tier);
        if (byTier != 0)
        {
            return byTier * (_isAscending ? -1 : 1);
        }

        return ResolveEquality(x, y);
    }
}

// In SmeltingSortControllerVM's constructor:
_tierComparer = new ItemTierComparer();

// And a matching execute method, mirroring ExecuteSortByYield:
public void ExecuteSortByTier()
{
    int tierState = TierState;
    SetAllStates(CampaignUIHelper.SortState.Default);
    TierState = (tierState + 1) % 3;
    if (TierState == 0)
    {
        TierState++;
    }

    _tierComparer.SetSortMode(TierState == 1);
    _listToControl.Sort(_tierComparer);
    IsTierSelected = true;
}
```

## Risks and crash boundaries

- **Save serialization:** none, and none is possible. `ItemComparerBase` is a transient helper held by a `ViewModel`; it holds no campaign state, has no `SyncData`, and is never written anywhere. Sorting is a pure view operation — it must not be used to reorder anything you expect to persist. If you want a persisted ordering, sort a save-backed collection instead.
- **Cross-domain deps:** the type lives in a screen-specific ViewModelCollection assembly and is typed against that screen's item VM. Referencing `SmeltingItemVM` from a campaign behaviour to sort it would invert the layering — the behaviour belongs in `Campaign`, the item VM in the view layer. Sorting is presentation; keep it there.
- **Load order:** comparers are constructed in the controller's constructor, which runs when the screen's view model is created. There is nothing to initialise and nothing global to depend on, so ordering is not a hazard for this class — but the *item VMs* must already be populated in the `MBBindingList` before you sort, or you sort an empty list and see no effect.
- **ID stability:** no ids. The relevant stability concern is the `T` binding: `ItemComparerBase` in the Smelting assembly is `IComparer<SmeltingItemVM>` and in ClanMembers is `IComparer<ClanLordItemVM>`. Nothing prevents you from writing code that assumes the family shares a type parameter; it does not, and the compiler only catches it if you name the type.
- **Shared mutable state across sorts.** The comparer instance outlives a single sort. If your controller is destroyed and rebuilt while an old `Sort` is still in progress (or if you sort the same list from a background callback), `_isAscending` can change mid-comparison and produce an inconsistent order — or worse, an ordering that violates transitivity, which some sort implementations handle badly.
- **`ResolveEquality` is `protected` and non-virtual.** You cannot change the tie-break for an existing screen without overriding `Compare` in every concrete comparer. There is no `IComparer` hook for it.

## Cross-Version Notes

- **v1.3.x → v1.4.5:** the four-member shape (`_isAscending`, `SetSortMode`, abstract `Compare`, `protected ResolveEquality`) is identical across every variant in both versions. New screens get new copies of this class rather than a shared generic one.
- **v1.4.5:** there are ten campaign `ItemComparerBase` declarations and two multiplayer ones. Two of the multiplayer variants make the class `private` rather than `public` (`MPLobbyClanLeaderboardSortControllerVM`), so they are not extensible from outside.
- **v1.4.5:** there is no generic `ItemComparerBase<T>` and no shared base in `TaleWorlds.Core`. The duplication is deliberate per-screen, which means the tie-break field differs per screen and cannot be unified.

## See Also

- ↑ Parent bucket: [ViewModel API index](../)
- ↔ Sibling: [SmeltingSortControllerVM](../SmeltingSortControllerVM) — the controller documented here, whose nested class this is
- ↔ Sibling: [ArmyManagementSortControllerVM](../ArmyManagementSortControllerVM) — the same pattern over `ArmyManagementItemVM`
- ↔ Sibling: [ItemComparer](../ItemComparer) — a plain non-stateful comparer, the right choice when you need no column UI
- ↔ Sibling: [SmeltingItemVM](../SmeltingItemVM) — the `T` this variant sorts
- ↑ VM base: [ViewModel](../../core-extra/ViewModel) — the base of the owning sort controller
