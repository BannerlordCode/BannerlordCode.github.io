---
title: "BannerBuilderCategoryVM"
description: "The view model for one icon category in the banner editor. It expands a BannerIconGroup into background or icon rows depending on IsPattern, fills ItemsList once during construction, and forwards \"which row did the player click\" untouched to BannerBuilderVM."
---
# BannerBuilderCategoryVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder  
**Module:** TaleWorlds.MountAndBlade.ViewModelCollection  
**Type:** `public class BannerBuilderCategoryVM : ViewModel`  
**Base:** `ViewModel`  
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder/BannerBuilderCategoryVM.cs`

## Overview

The banner editor's left column is a list of categories; clicking one opens a column of selectable rows. **One category is this class.** Its job is to translate a campaign-side `BannerIconGroup` (an icon group loaded from XML) into a clickable column of `BannerBuilderItemVM` rows.

The key mechanic is that **a category has two shapes, chosen by `IsPattern`**:

```csharp
private void PopulateItems()
{
    ItemsList.Clear();
    if (IsPattern)
    {
        for (int i = 0; i < _category.AllBackgrounds.Count; i++)
        {
            KeyValuePair<int, string> keyValuePair = _category.AllBackgrounds.ElementAt(i);
            ItemsList.Add(new BannerBuilderItemVM(keyValuePair.Key, keyValuePair.Value, _onItemSelection));
        }
    }
    else
    {
        for (int j = 0; j < _category.AllIcons.Count; j++)
        {
            KeyValuePair<int, BannerIconData> keyValuePair2 = _category.AllIcons.ElementAt(j);
            ItemsList.Add(new BannerBuilderItemVM(keyValuePair2.Key, keyValuePair2.Value, _onItemSelection));
        }
    }
}
```

- **`IsPattern == true`** (a `pattern` group): rows are **backgrounds**, taken from `BannerIconGroup.AllBackgrounds` (`MBReadOnlyDictionary<int, string>`, values are texture-id strings), built with the `BannerBuilderItemVM(int key, string backgroundTextureID, Action<...>)` overload.
- **`IsPattern == false`** (an ordinary icon group): rows are **icons**, taken from `AllIcons` (`MBReadOnlyDictionary<int, BannerIconData>`), built with the `BannerBuilderItemVM(int key, BannerIconData iconData, Action<...>)` overload.

🔴 **The two sources are not exclusive.** `BannerIconGroup` carries three dictionaries — `AllIcons`, `AllBackgrounds`, and `AvailableIcons` (`BannerIconGroup.cs:12/14/16`). This class picks between `AllBackgrounds` and `AllIcons` purely on `IsPattern` and never touches `AvailableIcons`.

## Who uses it

There is exactly one construction site: **`BannerBuilderVM`** (`BannerBuilderVM.cs:651`):

```csharp
Categories.Add(new BannerBuilderCategoryVM(category, OnItemSelection));
```

`Categories` is a `MBBindingList<BannerBuilderCategoryVM>` inside `BannerBuilderVM` (allocated at `BannerBuilderVM.cs:609`, exposed as a `[DataSourceProperty]` at `BannerBuilderVM.cs:128`). The same list is bulk-refreshed with `ApplyActionOnAllItems` at `BannerBuilderVM.cs:690`, and indexed into at `BannerBuilderVM.cs:733` and `BannerBuilderVM.cs:843`.

Note that `OnItemSelection` is **handed verbatim to every child row** — this class does not handle selection itself, it only forwards.

## Mental Model

Read it as **"a one-shot category expander: it flattens a dictionary into a list at construction and then just waits for the host to refresh it"**:

- **Who news it up.** `BannerBuilderVM` (`BannerBuilderVM.cs:651`), iterating the icon groups and constructing one of these per group.
- **Who holds the reference.** `BannerBuilderVM`'s `Categories` list, ultimately owned and rendered by the banner editor screen. **The release responsibility belongs to `BannerBuilderVM`, not to this class.**
- **What it binds to.** Four `[DataSourceProperty]` members. `Title` is the display name (from `_category.Name.ToString()`), `ItemsList` the rows, `IsPattern` lets the prefab choose between the two layouts (background grid vs icon grid), and `IsEnabled` is hard-set to `true` in the constructor with **nothing in vanilla ever changing it afterwards**.
- **When it is disposed.** **There is nothing to dispose.** No `OnFinalize` override, no `CampaignEvents`, no `Game.Current.EventManager` registration. It holds two references: a `BannerIconGroup` (read-only campaign data) and an `Action<BannerBuilderItemVM>` delegate. **The delegate is the only thing that can "leak"** — in vanilla it captures `BannerBuilderVM` (`this.OnItemSelection`), so caching an instance of this class somewhere longer-lived than the editor screen also pins the `BannerBuilderVM` alive.
- 🔴 **`ItemsList` is filled exactly once.** `PopulateItems()` is private and called only at the end of the constructor (`BannerBuilderCategoryVM.cs:98`). **After an XML reload (`BannerIconGroup.Deserialize`) or a `Merge`, the rows do not rebuild automatically** — the owner must construct a new instance.
- 🔴 **It walks the dictionary with `ElementAt(i)`.** That is the `IEnumerable` extension, and each iteration is a fresh linear scan. Over `AllIcons`/`AllBackgrounds` with dozens to hundreds of entries the whole loop is O(n²). It is functionally correct, just not a good pattern — **iterate the dictionary values directly if you subclass this with large groups.**
- **`IsEnabled` is decorative.** Constructor line 97 hard-sets `true` and vanilla never writes it. Yours to control.
- **`_category` is `readonly`, but `BannerIconGroup` itself is mutable** (it has `Deserialize` and `Merge`). So after an external change to `Name`, `Title` goes stale — and `ItemsList` does not change at all. **The two can disagree.**
- **Misuse**: reading `IsPattern` as "this category is a background swatch" and branching game logic on it. It only decides **which dictionary the rows come from**; it says nothing about whether the resulting banner ends up solid or overlaid.

## Key members

| Member | Signature | What it is actually for |
| --- | --- | --- |
| Constructor | `public BannerBuilderCategoryVM(BannerIconGroup category, Action<BannerBuilderItemVM> onItemSelection)` (`:91-100`) | Called from `BannerBuilderVM.cs:651`. Creates the empty `ItemsList`, stores `_category` and the callback, copies `_category.IsPattern`, sets `IsEnabled = true` (`:97`), then calls `PopulateItems()` and `RefreshValues()`. **Filled once; never rebuilt afterwards.** |
| `PopulateItems` | `private void PopulateItems()` (`:108-127`) | The only filling logic. Branches on `IsPattern`: `true` walks `_category.AllBackgrounds` with the `string` overload, `false` walks `_category.AllIcons` with the `BannerIconData` overload. **Walks the dictionary via `ElementAt(i)`, making construction O(n²).** |
| `RefreshValues` | `public override void RefreshValues()` (`:102-106`) | The only override. One substantive line: `Title = _category.Name.ToString();`. **It does not rebuild `ItemsList`.** |
| `Title` | `[DataSourceProperty] public string Title` (`:23-38`) | The category's display name, converted from `_category.Name.ToString()` into a **string snapshot**; needs another `RefreshValues()` if the name changes externally. |
| `ItemsList` | `[DataSourceProperty] public MBBindingList<BannerBuilderItemVM> ItemsList` (`:74-89`) | The expanded rows. Filled once at construction. `PopulateItems` does `Clear()` before refilling, but **only the constructor ever calls it.** |
| `IsPattern` | `[DataSourceProperty] public bool IsPattern` (`:40-55`) | Copied straight from `_category.IsPattern`. **It only decides which dictionary the rows come from** (`AllBackgrounds` vs `AllIcons`); it does not describe the banner's final appearance. |
| `IsEnabled` | `[DataSourceProperty] public bool IsEnabled` (`:57-72`) | Hard-set to `true` at constructor line 97, **never modified by vanilla afterwards**. Yours to control. |
| `_onItemSelection` | `private readonly Action<BannerBuilderItemVM>` (`:13`) | Passed in at construction and **handed verbatim to every child row**. This class does not process selection. **The lifetime of whatever it captures is not managed here — the only leak possibility.** |

## Real Example

Constructing a category — this is `BannerBuilderVM.cs:651` verbatim:

```csharp
using System.Collections.Generic;
using TaleWorlds.Library;
using TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder;

public MBBindingList<BannerBuilderCategoryVM> BuildCategories(
    IEnumerable<BannerIconGroup> groups,
    Action<BannerBuilderItemVM> onItemSelection)
{
    MBBindingList<BannerBuilderCategoryVM> categories =
        new MBBindingList<BannerBuilderCategoryVM>();

    foreach (BannerIconGroup group in groups)
    {
        // Same shape as BannerBuilderVM.cs:651: the callback is forwarded untouched,
        // and this class takes no part in selection logic.
        categories.Add(new BannerBuilderCategoryVM(group, onItemSelection));
    }

    return categories;
}
```

Skipping the O(n²) of `ElementAt` by iterating dictionary values directly — a faster equivalent:

```csharp
using System.Collections.Generic;
using TaleWorlds.Core;
using TaleWorlds.Library;
using TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder;

public static void PopulateItemsFast(
    MBBindingList<BannerBuilderItemVM> target,
    BannerIconGroup group,
    Action<BannerBuilderItemVM> onItemSelection)
{
    target.Clear();

    if (group.IsPattern)
    {
        // Vanilla uses AllBackgrounds.ElementAt(i), an O(n) scan per iteration.
        foreach (KeyValuePair<int, string> pair in group.AllBackgrounds)
        {
            target.Add(new BannerBuilderItemVM(pair.Key, pair.Value, onItemSelection));
        }
    }
    else
    {
        foreach (KeyValuePair<int, BannerIconData> pair in group.AllIcons)
        {
            target.Add(new BannerBuilderItemVM(pair.Key, pair.Value, onItemSelection));
        }
    }
}
```

Forcing a rebuild after a `Merge`, because this class never rebuilds after construction:

```csharp
using System.Collections.Generic;
using TaleWorlds.Core;
using TaleWorlds.Library;
using TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder;

public class MyBannerBuilderCategoryVM : BannerBuilderCategoryVM
{
    private readonly BannerIconGroup _group;
    private readonly Action<BannerBuilderItemVM> _onSelect;

    public MyBannerBuilderCategoryVM(BannerIconGroup category, Action<BannerBuilderItemVM> onItemSelection)
        : base(category, onItemSelection)
    {
        _group = category;
        _onSelect = onItemSelection;
    }

    public void Rebuild()
    {
        // Vanilla has no such entry point: PopulateItems() is private and called
        // once. After BannerIconGroup.Deserialize / Merge you must rebuild yourself,
        // otherwise the screen keeps showing the stale rows.
        ItemsList.Clear();

        if (_group.IsPattern)
        {
            foreach (KeyValuePair<int, string> pair in _group.AllBackgrounds)
            {
                ItemsList.Add(new BannerBuilderItemVM(pair.Key, pair.Value, _onSelect));
            }
        }
        else
        {
            foreach (KeyValuePair<int, BannerIconData> pair in _group.AllIcons)
            {
                ItemsList.Add(new BannerBuilderItemVM(pair.Key, pair.Value, _onSelect));
            }
        }

        RefreshValues();
    }
}
```

## Risks and crash boundaries

- 🔴 **`ItemsList` is frozen after construction.** `PopulateItems()` is private and invoked only at `BannerBuilderCategoryVM.cs:98`. After `BannerIconGroup.Deserialize(XmlNode, MBList<BannerIconGroup>)` or `Merge(BannerIconGroup)` the **rows do not update**, while `Title` and `ItemsList` can therefore contradict each other. The only fix is to construct a fresh instance.
- 🔴 **Delegate capture is the only leak vector.** In vanilla `_onItemSelection` is `BannerBuilderVM.OnItemSelection`, capturing `this`. This class registers no events and overrides no `OnFinalize`, so **it cannot leak by itself** — but caching an instance somewhere longer-lived than the editor screen also pins the `BannerBuilderVM` alive.
- **O(n²) construction.** `ElementAt(i)` performs a fresh linear scan from the start on every call. Large categories pay a measurable price. It is correct; do not copy the pattern.
- **`IsEnabled` never changes.** Hard-set to `true` at construction, never written by vanilla. **You must implement availability yourself.**
- **`Title` is a snapshot while `ItemsList` holds live references.** Change `_category.Name` and `Title` goes stale; change `_category.AllIcons` and `ItemsList` goes stale. They refresh on different schedules.
- **`BannerIconGroup` is mutable; only the reference is readonly.** Both `Deserialize` and `Merge` mutate it in place.
- **`AvailableIcons` is entirely unused.** `BannerIconGroup` has three dictionaries (`BannerIconGroup.cs:12/14/16`); this class uses `AllBackgrounds` and `AllIcons` only. `AvailableIcons` is a separate, presumably availability-filtered set — choosing it is your job.
- **Serialization**: none. No `SyncData`, no `IDataStore` contact. Persistence of the banner itself lives with `BannerIconGroup` and the banner data side.
- **This class does not handle selection.** Post-click highlight, cross-category exclusivity, undo/redo are all in `BannerBuilderVM`. The entry point on a row is `BannerBuilderItemVM.ExecuteSelection()`.
- **Native boundary**: none. Pure managed. Icon texture ids eventually reach the renderer, but that is downstream of `BannerBuilderItemVM`.
- **Cross-version**: the three dictionary fields and the `Name` / `IsPattern` / `Id` properties of `BannerIconGroup`, the two `BannerBuilderItemVM` constructor overloads, and the call shape at `BannerBuilderVM.cs:651` are all v1.4.5 shapes.

## Dependencies

- ↑ VM base: [ViewModel](../../core-extra/ViewModel) — property-change notification and the `RefreshValues` contract
- ↔ Sibling: [BannerBuilderVM](../BannerBuilderVM) — **the sole constructor and holder**; `Categories` is allocated at `:609`, populated at `:651`, bulk-refreshed at `:690`
- ↔ Sibling: [BannerBuilderItemVM](../BannerBuilderItemVM) — the rows this class produces; its two constructor overloads correspond to background vs icon
- → Icon group: [BannerIconGroup](../../core-extra/BannerIconGroup) — the constructor argument; this class reads only its `Name`, `IsPattern`, `AllIcons`, and `AllBackgrounds`
- → Row data: `BannerIconData` (`TaleWorlds.Core`) — the second argument type of the icon-row constructor overload
- → List container: [MBBindingList](../../core-extra/MBBindingList)
- → Text: [GameTextManager](../../core-extra/GameTextManager)
