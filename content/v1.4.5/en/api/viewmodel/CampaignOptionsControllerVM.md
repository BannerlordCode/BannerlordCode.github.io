---
title: "CampaignOptionsControllerVM"
description: "The view-model that owns the campaign options list: it sorts options by priority index, keys them by identifier, wires each item's change callback, and keeps the difficulty-preset dropdown and the preset-related options consistent in both directions. Constructed from the shared CampaignOptionsManager cache, and it clears that cache on finalize."
---
# CampaignOptionsControllerVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection  
**Module:** TaleWorlds.CampaignSystem.ViewModelCollection  
**Type:** `public class CampaignOptionsControllerVM : ViewModel`  
**Base:** `ViewModel`  
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/CampaignOptionsControllerVM.cs`

## Overview

`CampaignOptionsControllerVM` is the model behind the campaign options screen. It receives an already-populated `MBBindingList<CampaignOptionItemVM>` (normally built from `CampaignOptionsManager.GetGameplayCampaignOptions()`) and does four things in its constructor. It locates the difficulty preset dropdown by scanning for an item whose `OptionData.GetIdentifier()` equals `"DifficultyPresets"` and casting its data to `SelectionCampaignOptionData`. It sorts the list in place with a private `CampaignOptionComparer` that orders by `OptionData.GetPriorityIndex()`. It builds an identifier → item dictionary `_optionItems`. And it installs two passes over the list: `RefreshDisabledStatus()` on every item, and `SetOnValueChangedCallback(OnOptionChanged)` on every item.

The live behaviour is the preset coupling in `UpdatePresetData`. If the *preset* option changed, every option whose data says `IsRelatedToDifficultyPreset()` is pushed to `GetValueFromDifficultyPreset(preset)` — but only when that item is not currently disabled, which is what stops a preset from resurrecting an option that a mod has switched off. If instead one of the *related* options changed, the controller reverse-engineers which preset the current values correspond to via `FindOptionPresetForValue` (compare against `Freebooter`, `Warrior`, `Bannerlord`, else `Custom`), verifies that **all** related options agree on the same preset, and writes that preset — or `3f` (`Custom`) when they disagree. An `_isUpdatingPresetData` guard flag makes the push/pull recursive updates terminate.

## Mental Model

Read it as **"the owner of one list, plus a two-way binding between a dropdown and the options it summarises"**:

- **Where it sits:** it is a plain `ViewModel`, not a screen and not a `CampaignBehaviorBase`. It has no save hooks and no campaign ticks. Its lifetime is exactly the options screen's lifetime, and it owns exactly one resource: the shared `CampaignOptionsManager` cache.
- **Typical call order:** a screen creates the `MBBindingList<CampaignOptionItemVM>` from `CampaignOptionsManager.GetGameplayCampaignOptions()` → constructs this controller (which sorts, indexes, and wires callbacks) → binds `Options` to the Gauntlet list → on teardown, `OnFinalize` runs `base.OnFinalize()` then `CampaignOptionsManager.ClearCachedOptions()`.
- **Common misuse trap — the sort mutates the caller's list.** `Options.Sort(...)` sorts in place, and `Options` is the list the caller passed in. If the caller passed the `CampaignOptionsManager` cache list directly, you have just reordered the global cache.
- **Common misuse trap — the `_difficultyPreset` is assumed non-null.** `UpdatePresetData` dereferences `_difficultyPreset.GetIdentifier()` inside `_optionItems.TryGetValue(...)` without a null check on `_difficultyPreset` itself. A mod that changes the preset option's identifier, or a provider set with no `"DifficultyPresets"` entry, turns every option change into a `NullReferenceException`. The `changedOption == null` early-out does not protect this path.
- **Common misuse trap — `Options` setter identity check.** The `[DataSourceProperty] Options` setter only fires `OnPropertyChangedWithValue` when `value != _options` by reference. Assigning an equal-but-different list updates the backing field silently; assigning the same instance twice fires no event.
- **Common misuse trap — changing an option without re-resolving disabled state.** `OnOptionChanged` re-runs `RefreshDisabledStatus()` on every item because a mod's disable predicate may depend on another option's value. If you write your own option callback and skip that pass, dependent options stay visibly enabled.

## When to Use / When NOT to Use

**Use it when:**
- You are building (or replacing) the campaign options screen and want the base game's priority ordering, identifier indexing, and difficulty-preset coupling for free.
- You contribute an option whose behaviour must participate in the preset system — implement `IsRelatedToDifficultyPreset()` and `GetValueFromDifficultyPreset` on your `ICampaignOptionData`.
- You need to know which options the controller considers "preset-related" in order to predict what a preset change will overwrite.

**Do NOT use it when:**
- You only want to read option values. Read `ICampaignOptionData` from `CampaignOptionsManager` directly; constructing this controller for a read is heavy and mutates shared state.
- You want per-save option persistence. Campaign options are global configuration; neither this class nor `CampaignOptionsManager` writes them to a campaign save.
- Your mod has no `"DifficultyPresets"` option in its provider set but you still construct this controller — see the null trap above.

## Dependencies

- [ViewModel](../../core-extra/ViewModel) — the base class providing `OnPropertyChangedWithValue`, `OnFinalize` and the `[DataSourceProperty]` plumbing the Gauntlet layer binds to.
- [CampaignOptionItemVM](../CampaignOptionItemVM) — the per-option item this controller owns: it supplies `OptionData`, `RefreshDisabledStatus()`, `SetOnValueChangedCallback`, `SetValue` and `IsDisabled`.
- [CampaignOptionsManager](../CampaignOptionsManager) — the registry that produced the option list and whose shared cache this controller clears on finalize.
- [ICampaignOptionData](../ICampaignOptionData) — the per-option contract whose `GetPriorityIndex`, `IsRelatedToDifficultyPreset` and `GetValueFromDifficultyPreset` drive the sorting and preset logic.
- [CampaignOptionsDifficultyPresets](../CampaignOptionsDifficultyPresets) — the four-valued preset enum (`Freebooter`, `Warrior`, `Bannerlord`, `Custom`) this controller maps to and from.

## Key members

### `public MBBindingList<CampaignOptionItemVM> Options { get; set; }`  (`[DataSourceProperty]`)

The bound list. The setter raises `OnPropertyChangedWithValue(value, "Options")` only on reference change. This is the property the Gauntlet XML binds to.
- **Return semantics:** the same list instance passed to the constructor, sorted in place.

### `public CampaignOptionsControllerVM(MBBindingList<CampaignOptionItemVM> options)`

Assigns `Options`, finds the preset item (`Options.FirstOrDefault(x => x.OptionData.GetIdentifier() == "DifficultyPresets")?.OptionData as SelectionCampaignOptionData`), sorts by `GetPriorityIndex()`, fills `_optionItems` keyed by identifier, runs `RefreshDisabledStatus()` on every item, installs `OnOptionChanged` as the change callback on every item, computes `_difficultyPresetRelatedOptions` via `IsRelatedToDifficultyPreset()`, then calls `UpdatePresetData(...)` once for the first related option to establish the initial preset value.
- **Side effect:** the caller's list is sorted and every item now has a value-changed callback pointing at this controller. Items reused in another controller will have their callback silently replaced.
- **Trap:** throws if `options` is null (immediate `FirstOrDefault` on null), and later throws on first change if there is no `"DifficultyPresets"` entry.

### `public override void OnFinalize()`

Calls `base.OnFinalize()` and then `CampaignOptionsManager.ClearCachedOptions()`.
- **This is the ownership transfer point.** Because the options list is the manager's shared cache, skipping finalize leaves stale options visible to the next screen. If you host this controller yourself, call `OnFinalize` (or `ClearCachedOptions`) on teardown.

### `private void OnOptionChanged(CampaignOptionItemVM optionVM)`

The callback installed on every item. It calls `UpdatePresetData(optionVM)` and then re-runs `RefreshDisabledStatus()` across the whole list, because one option's value can change another option's `GetIsDisabledWithReason()` answer.

### `private void UpdatePresetData(CampaignOptionItemVM changedOption)`

The bidirectional core. Bails out when `_isUpdatingPresetData` is set, when `changedOption` is null, or when `_optionItems` has no entry for the preset identifier. Then:
- **Preset changed** (`changedOption.OptionData == _difficultyPreset`): for each related option, compute `OptionData.GetValueFromDifficultyPreset((CampaignOptionsDifficultyPresets)_difficultyPreset.GetValue())` and `SetValue` it — but only if `!value2.IsDisabled`.
- **Related option changed**: derive the candidate preset from the *first* related option via `FindOptionPresetForValue`, verify every other related option agrees, then `SetValue(flag ? (float)candidate : 3f)` on the preset item.
- `_isUpdatingPresetData` is set before the work and cleared in a straight line afterwards (no `finally`), so an exception inside a `SetValue` would leave the flag stuck and permanently disable further preset syncing.

### `private CampaignOptionsDifficultyPresets FindOptionPresetForValue(ICampaignOptionData option)`

Compares `option.GetValue()` against `GetValueFromDifficultyPreset` for `Freebooter`, then `Warrior`, then `Bannerlord`; returns `CampaignOptionsDifficultyPresets.Custom` if none match.
- **Note:** it only inspects `option`'s *own* value, not the whole group — consistency across the group is the caller's job.

### `private class CampaignOptionComparer : IComparer<CampaignOptionItemVM>`

Orders by `x.OptionData.GetPriorityIndex().CompareTo(y.OptionData.GetPriorityIndex())`. Ascending, with no tie-breaker, so equal priorities keep whatever order the source list had.

### `internal const int AutosaveDisableValue = -1`

Sentinel used by option data to mean "autosave is effectively off for this option". It is `internal`, so it is visible to the ViewModelCollection assembly but not to a mod assembly.

## Examples

### Example 1 — hosting the controller from a screen

```csharp
using TaleWorlds.CampaignSystem.ViewModelCollection;
using TaleWorlds.Library;

public class MyOptionsScreen : ScreenBase
{
    private MBBindingList<CampaignOptionItemVM> _optionItems;
    private CampaignOptionsControllerVM _controller;

    public override void OnScreenInitialize()
    {
        base.OnScreenInitialize();

        // Build items from the shared registry, then hand the list to the controller.
        _optionItems = new MBBindingList<CampaignOptionItemVM>();
        foreach (ICampaignOptionData data in CampaignOptionsManager.GetGameplayCampaignOptions())
        {
            _optionItems.Add(new CampaignOptionItemVM(data));
        }

        _controller = new CampaignOptionsControllerVM(_optionItems);
        GauntletScreen = ...;   // bind _controller.Options in your prefab
    }

    public override void OnScreenFinalize()
    {
        // Clears the shared CampaignOptionsManager cache; do not skip it.
        _controller.OnFinalize();
        _controller = null;
        base.OnScreenFinalize();
    }
}
```

### Example 2 — an option that participates in the difficulty preset

```csharp
using System;
using TaleWorlds.CampaignSystem.ViewModelCollection;

public class PartySizeOptionData : NumericCampaignOptionData
{
    public PartySizeOptionData()
        : base(identifier: "MyModPartySize",
               priorityIndex: 120,
               enableState: CampaignOptionEnableState.Enabled,
               getValue: () => SettingsStore.PartySize,
               setValue: v => SettingsStore.PartySize = v,
               minValue: 10f,
               maxValue: 400f,
               isDiscrete: true,
               getIsDisabledWithReason: () => new CampaignOptionDisableStatus(
                   isDisabled: SettingsStore.HardMode,
                   disabledReason: "Unavailable in Hard Mode"),
               // The two members below are what the controller reads.
               isRelatedToDifficultyPreset: true,
               onGetValueFromDifficultyPreset: preset => preset switch
               {
                   CampaignOptionsDifficultyPresets.Freebooter => 60f,
                   CampaignOptionsDifficultyPresets.Warrior => 120f,
                   CampaignOptionsDifficultyPresets.Bannerlord => 200f,
                   _ => 120f,
               })
    {
    }
}
```

## Risks and crash boundaries

- **Save serialization:** none. Neither this controller nor `CampaignOptionsManager` participates in the campaign save system; options are global configuration whose storage is whatever delegates your `ICampaignOptionData` was constructed with. The practical consequence for a mod is that you own persistence: if your `setValue` delegate only writes a static field, the setting dies with the process, and no save records which options a campaign was created under.
- **Cross-domain deps:** the class lives in the ViewModelCollection assembly and reaches into `CampaignOptionsManager` (same assembly) and, through `CampaignOptionItemVM`, into `CampaignOptionDisableStatus` and localization (`GameTexts.FindText`). Calling `RefreshDisabledStatus()` therefore touches the text/localization layer, which must be initialised — doing this from a headless or tool context will fail.
- **Load order:** the constructor is where the ordering hazard lives. It requires the option list to already contain a `"DifficultyPresets"` entry, because `UpdatePresetData` dereferences `_difficultyPreset` unguarded. Construct the controller only after the base game's option providers have run; if you construct it with a partial list you get a `NullReferenceException` on the first user interaction, not at construction.
- **ID stability:** the preset is located by the literal string `"DifficultyPresets"` (`_difficultyPresetsId`). A mod that shadows, renames, or removes that identifier breaks the coupling for the whole options screen, and the failure is a null dereference rather than a clear diagnostic.
- **UI lifetime vs VM lifetime:** this is a *VM*, not an `MvBase`. It is created and finalized by whoever hosts the screen; there is no automatic `OnFinalize`. Items keep a delegate pointing at this controller after teardown, so a late `SetValue` on a retained item will re-enter `UpdatePresetData` against a finalized controller. On finalize, null out or release the item list.
- **No `finally` around `_isUpdatingPresetData`.** If any `SetValue` in the preset push throws (a mod's `setValue` delegate throwing is entirely plausible), the reentrancy guard stays `true` and the preset dropdown silently stops tracking the options for the rest of the screen's life.
- **`Custom` is hardcoded as `3f`.** The magic number matches `CampaignOptionsDifficultyPresets.Custom` today; if the enum is reordered in a future version the "no preset" write goes to the wrong entry.

## Cross-Version Notes

- **v1.3.x → v1.4.5:** the shape is unchanged — constructor takes `MBBindingList<CampaignOptionItemVM>`, sorts by `GetPriorityIndex()`, keys by `GetIdentifier()`, and the preset sync uses `CampaignOptionsDifficultyPresets`. `AutosaveDisableValue` remains `internal const int -1`.
- **v1.4.5:** `OnFinalize` still calls `CampaignOptionsManager.ClearCachedOptions()` after `base.OnFinalize()`. There is no `OnScreenTick` or campaign-tick member; all reactivity is event-driven off `CampaignOptionItemVM`'s change callback.
- **v1.4.5:** there is no public accessor for the identifier → item dictionary and no public way to force a preset re-evaluation. Both are private; drive changes through the items' own setters.

## See Also

- ↑ Parent bucket: [ViewModel API index](../)
- ↔ Sibling: [CampaignOptionItemVM](../CampaignOptionItemVM) — the per-option item this controller owns
- ↔ Sibling: [CampaignOptionsManager](../CampaignOptionsManager) — the registry whose cache this controller clears
- ↔ Sibling: [ICampaignOptionData](../ICampaignOptionData) — the per-option contract driving sort and preset logic
- ↔ Sibling: [CampaignOptionsDifficultyPresets](../CampaignOptionsDifficultyPresets) — the four-valued preset enum
- ↑ VM base: [ViewModel](../../core-extra/ViewModel)
