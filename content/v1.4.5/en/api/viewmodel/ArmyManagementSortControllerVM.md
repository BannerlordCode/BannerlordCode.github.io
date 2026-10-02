---
title: "ArmyManagementSortControllerVM"
description: "The view model behind the army management list's column headers. It holds one mutable comparer per column, exposes a tri-state int per column plus a bool 'IsXSelected' per column for the widget, and implements the cycle Default → Ascending → Descending by resetting every other column on each click."
---
# ArmyManagementSortControllerVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement  
**Module:** TaleWorlds.CampaignSystem.ViewModelCollection  
**Type:** `public class ArmyManagementSortControllerVM : ViewModel`  
**Base:** `ViewModel`  
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement/ArmyManagementSortControllerVM.cs`

## Overview

`ArmyManagementSortControllerVM` is the `ViewModel` a Gauntlet list binds its column headers to. It does not draw anything and does not own the data: the caller constructs it with the `MBBindingList<ArmyManagementItemVM>` it wants sorted, and the controller mutates that list in place. What the controller owns is (a) one long-lived comparer instance per column and (b) the exposed state the header widgets bind to.

The state comes in two parallel sets, all `[DataSourceProperty]`. Six `int` properties (`DistanceState`, `CostState`, `StrengthState`, `NameState`, `ClanState`, `ShipCountState`) encode the tri-state column header, and six `bool` properties (`IsDistanceSelected`, `IsCostSelected`, `IsStrengthSelected`, `IsNameSelected`, `IsClanSelected`, `IsShipCountSelected`) drive the highlighted-header visual. `CampaignUIHelper.SortState` gives the three values: `Default = 0`, `Ascending = 1`, `Descending = 2`.

Each `ExecuteSortByX()` method follows an identical five-step shape. Read the current state, call `SetAllStates(CampaignUIHelper.SortState.Default)` to zero every column and clear every `IsXSelected`, advance `(previous + 1) % 3` and bump `0` up to `1` so the cycle never sits on `Default`, set the comparer direction with `SetSortMode(State == 1)`, then `Sort` the list. That last detail is why the controller cannot sort two lists and why the comparers are stateful — see [ItemComparerBase](../ItemComparerBase/).

## Mental Model

Read it as **"a state machine over six columns that happens to also own the comparers it drives"**:

- **Where it sits:** it is a `ViewModel`, not an `MvBase` and not a `ScreenBase`. Its lifetime is the army management screen's lifetime. It has no campaign ticks, no events, and no save participation — it only reorders a list and raises property-changed notifications.
- **Typical call order:** a screen builds the `MBBindingList<ArmyManagementItemVM>` → constructs this controller → binds each `DistanceState` / `IsDistanceSelected` / `ExecuteSortByDistance` in the prefab → the player clicks a header → Gauntlet invokes `ExecuteSortByDistance()` → `OnPropertyChangedWithValue` fires for every column whose int or bool actually changed (the property setters compare before raising).
- **Common misuse trap — one list, one controller.** The controller holds `readonly MBBindingList<ArmyManagementItemVM> _listToControl` from its constructor and never re-points it. Sorting the same list from two controllers, or replacing the list contents with a different collection, leaves the controller sorting the original instance.
- **Common misuse trap — `State` is not the sort direction.** `State == 1` means ascending; `State == 2` means descending; `State == 0` (Default) is never actually observed because of the `if (State == 0) State++;` correction, but it is the value the other columns are reset to on every click. A widget that treats `0` as "descending" will render wrong on the frame of a click before the correction lands — it does not, but the enum has three values and only two are reachable on a clicked column.
- **Common misuse trap — `SetAllStates` fires notifications for every column.** Each click raises up to twelve property-changed events. In a large army list this is cheap (the list is not re-sorted twelve times — only the clicked column sorts), but a widget that reacts to `OnPropertyChanged` by re-querying the list will do redundant work.
- **Common misuse trap — the comparers are shared mutable objects.** `_nameComparer` and friends are created once in the constructor and their `_isAscending` is mutated by every subsequent sort. Never call `_listToControl.Sort(...)` with one of them from outside the controller without going through the matching `ExecuteSortByX`.

## When to Use / When NOT to Use

**Use it when:**
- You are building the army management screen (or a screen with the same column set) and want the base game's tri-state header behaviour for free.
- You are adding a column: implement a comparer, add an `int` state property and a `bool` selected property, and an `ExecuteSortByX` that mirrors the existing six.
- You need to know which column is currently sorted and in which direction — read the six `int` properties.

**Do NOT use it when:**
- You need a different item type. `T` is `ArmyManagementItemVM`; the comparers are typed to it and cannot be retargeted.
- You need to sort without any header UI. A lambda comparer is one line; this controller is six state properties and six methods.
- You need the sort to be persisted. Sorting is presentation only and has no relationship to the campaign save.

## Key members

### `public ArmyManagementSortControllerVM(MBBindingList<ArmyManagementItemVM> listToControl)`

Stores the list and instantiates all six comparers: `ItemDistanceComparer`, `ItemCostComparer`, `ItemStrengthComparer`, `ItemNameComparer`, `ItemClanComparer`, `ItemShipCountComparer`.
- **Return value:** n/a (constructor).
- **Side effect:** none beyond holding the reference — no sort is performed, no state is set. All six `State` properties start at `0` and all six `IsXSelected` at `false`.
- **Trap:** `listToControl` is not null-checked.

### `public void ExecuteSortByDistance()` / `ExecuteSortByCost()` / `ExecuteSortByStrength()` / `ExecuteSortByName()` / `ExecuteSortByClan()` / `ExecuteSortByShipCount()`

The six widget-invoked entry points. Each performs the five-step cycle described above for its own column.
- **Return value:** none.
- **Side effect:** reorders `_listToControl` in place and raises property-changed for every column that changed.
- **Notable ordering quirk:** `SetAllStates` clears all six `IsXSelected` flags and only then sets the clicked column's flag back to `true`, so the highlighted header is always exactly the sorted one.

### `public int DistanceState { get; set; }` and the five siblings

`[DataSourceProperty]` int properties, each `0` / `1` / `2` per `CampaignUIHelper.SortState`. The setter raises `OnPropertyChangedWithValue(value, "<Name>")` only when the value actually differs, so redundant clicks on an unchanged state are silent.
- **Return semantics:** the header state, not the direction. Map `1` → ascending, `2` → descending yourself, or trust `State == 1` the way the controller does.

### `public bool IsDistanceSelected { get; set; }` and the five siblings

`[DataSourceProperty]` bool properties the widget binds for header highlighting. `IsDistanceSelected`'s setter additionally does nothing extra; `CampaignOptionItemVM.IsDisabled` is the one that pushes down into a child selector — these do not.

### `public abstract class ItemComparerBase : IComparer<ArmyManagementItemVM>` (nested)

The nested abstract comparer, with `protected bool _isAscending`, `public void SetSortMode(bool)`, `public abstract int Compare(...)` and `protected int ResolveEquality(...)` returning `x.LeaderNameText.CompareTo(y.LeaderNameText)`. Documented in full at [ItemComparerBase](../ItemComparerBase/).

### The six concrete comparers

- `ItemDistanceComparer` — primary `DistInTime`, tie-break `ResolveEquality`.
- `ItemCostComparer` — primary `Cost`, tie-break `ResolveEquality`.
- `ItemStrengthComparer` — primary `Strength`, then a **secondary** `ShipCount` (also direction-scaled), then `ResolveEquality`. This is the only comparer with two scaled keys.
- `ItemNameComparer` — special-cased `_isAscending` early return on `LeaderNameText`, no `ResolveEquality` call because the primary *is* the tie-break field.
- `ItemClanComparer` — primary `Clan.Name.ToString()`, tie-break `ResolveEquality`.
- `ItemShipCountComparer` — primary `ShipCount`, tie-break `ResolveEquality`.

### `private void SetAllStates(CampaignUIHelper.SortState state)`

Assigns `state` to all six `State` properties and `false` to all six `IsXSelected` properties. Private — there is no public "reset the sort" API, which means a screen that wants to restore the default order must call `SetAllStates` indirectly by clicking a column, or re-sort the list itself.

## Examples

### Example 1 — constructing and binding the controller

```csharp
using TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement;
using TaleWorlds.Library;

public class MyArmyScreen : ScreenBase
{
    private MBBindingList<ArmyManagementItemVM> _items;
    private ArmyManagementSortControllerVM _sortController;

    public override void OnScreenInitialize()
    {
        base.OnScreenInitialize();

        _items = new MBBindingList<ArmyManagementItemVM>();
        foreach (MobileParty party in Campaign.Current.CurrentParties)
        {
            _items.Add(new ArmyManagementItemVM(null, null, null, party));
        }

        _sortController = new ArmyManagementSortControllerVM(_items);

        // Bind these in the prefab:
        //   _sortController.CostState           -> column header text
        //   _sortController.IsCostSelected     -> column header highlight
        //   _sortController.ExecuteSortByCost  -> header click
        GauntletScreen = ...;
    }
}
```

### Example 2 — driving the sort from code instead of from a header click

```csharp
public void SortByDefaultArmies()
{
    // Same five steps the header click performs.
    _sortController.ExecuteSortByStrength();
    if (_sortController.StrengthState == 2)
    {
        _sortController.ExecuteSortByStrength();   // click again to flip to ascending
    }
}
```

### Example 3 — reading the current sort for a status line

```csharp
public string DescribeSort()
{
    int state = _sortController.StrengthState;
    if (state == 1)
    {
        return "Sorted by strength (ascending)";
    }

    if (state == 2)
    {
        return "Sorted by strength (descending)";
    }

    return "Unsorted";
}
```

## Risks and crash boundaries

- **Save serialization:** none. The controller is a `ViewModel` with no `SyncData` and no `IDataStore` participation; it is never serialized. The list it sorts is a transient view-model list, not a save-backed collection. Consequence for a mod: the order the player arranged the army screen in is **not** remembered across a save/load or even across leaving the screen. If you need a remembered order, persist the party ids yourself in a `CampaignBehaviorBase`.
- **Cross-domain deps:** the class lives in the ViewModelCollection assembly and is typed entirely against view models (`ArmyManagementItemVM`, `ClanBannerImageIdentifierVM`, `LeaderNameText`). The comparers read `MobileParty`-derived properties that are computed properties on the item VM, not the campaign object graph directly. Keeping the sort in the view layer is what lets the same behaviour run headless without instantiating any of this.
- **Load order:** the controller needs its `MBBindingList` fully populated at the moment the player clicks a header, not at construction time — construction does no sorting. A controller created before the items are added will happily sort an empty or partially-filled list, and because `MBBindingList.Sort` is in-place, later additions land at the end rather than in sorted position.
- **ID stability:** no ids. The stable contract here is the *column set* — `DistanceState` / `CostState` / `StrengthState` / `NameState` / `ClanState` / `ShipCountState` and their `IsXSelected` twins are the property names the prefab binds by string. Renaming or removing any of them breaks the header binding at runtime with a silent blank widget, not a compile error. This is the single most common breakage when adapting this controller.
- **UI lifetime vs VM lifetime:** there is no `OnFinalize` override, so nothing is released. The controller holds a strong reference to the list for its whole lifetime; if you cache it in a static or in a longer-lived view model, the list leaks along with it. Create it in `OnScreenInitialize` and drop it in `OnScreenFinalize`.
- **Mutable shared comparers.** Each `ExecuteSortByX` mutates the corresponding comparer's `_isAscending` before sorting. Calling `_listToControl.Sort(...)` with a comparer while the controller is also sorting — or sorting the same list from two threads — produces an order that may violate transitivity and can hang or misbehave in some sort implementations.

## Cross-Version Notes

- **v1.3.x → v1.4.5:** the controller keeps the same six columns, the same six `ExecuteSortByX` methods, and the same tri-state cycle. `ItemStrengthComparer`'s two-key comparison (strength then ship count) has been present across both versions.
- **v1.4.5:** `CampaignUIHelper.SortState` is `{ Default = 0, Ascending = 1, Descending = 2 }` and the controllers assign it via `(int)state` casts — the `int` properties are not typed to the enum.
- **v1.4.5:** there is no public `SetAllStates`, no `ResetSort`, and no `OnFinalize`. Sorting state can only be changed through the six `ExecuteSortByX` entry points, which are the same methods the widget binds.

## See Also

- ↑ Parent bucket: [ViewModel API index](../)
- ↔ Sibling: [ItemComparerBase](../ItemComparerBase) — the nested abstract comparer, documented in full
- ↔ Sibling: [ArmyManagementItemVM](../ArmyManagementItemVM) — the `T` this controller sorts
- ↔ Sibling: [CampaignUIHelper](../CampaignUIHelper) — source of the `SortState` enum and the column-state convention
- ↔ Sibling: [ArmyManagementVM](../ArmyManagementVM) — the screen view model that hosts this controller
- ↑ VM base: [ViewModel](../../core-extra/ViewModel)
