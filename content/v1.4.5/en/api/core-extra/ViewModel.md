---
title: "ViewModel: Gauntlet Data Sources and UI Lifetime"
description: "The v1.4.5 UI binding base class, covering property notifications, commands, refresh, OnFinalize, and its boundary from Campaign state."
---
# ViewModel

## Metadata

- **Namespace:** `TaleWorlds.Library`
- **Module:** `TaleWorlds.Library`
- **Type:** `public abstract class ViewModel`
- **Base:** `IViewModel`, `INotifyPropertyChanged`
- **Source:** `bin/TaleWorlds.Library/TaleWorlds.Library/ViewModel.cs`

## Responsibility in one sentence

`ViewModel` is the Gauntlet binding data source: it connects UI-visible properties, notifications, and commands to a short-lived screen object, not to Campaign or save state itself.

## Mental model

`ViewModel` sits between Library and UI. Concrete subclasses such as `BannerViewModel` and `MissionOrderVM` hold display state and notify Gauntlet through public properties, `OnPropertyChanged`, and `SetField`. The constructor discovers properties and methods for the concrete type and caches binding metadata; `GetPropertyValue`, `SetPropertyValue`, `GetViewModelAtPath`, and `ExecuteCommand` form part of that binding bridge.

A screen normally creates a VM, passes it to [`GauntletLayer`](../../engine/GauntletLayer).`LoadMovie`, lets UI-thread property changes drive the view, then releases the movie, calls `OnFinalize`, and clears the data source in the reverse order. A VM may read Campaign or Mission state, but it is not the authoritative owner. Keeping a Hero, Agent, or native visual alive through another screen creates a lifetime mismatch.

## When to use it, and when not to

### Use it when

- Building a Gauntlet movie's UI properties, collections, hints, and command entry points.
- Using `SetField` in setters to avoid redundant notifications and overriding `RefreshValues` in a derived VM to reload localized or derived display values.
- Overriding `OnFinalize` to unsubscribe and release temporary resources when the UI is destroyed.

### Do not use it when

- Do not make a VM the sole source of truth for a `Hero`, `MobileParty`, or `Mission`; world changes belong to the relevant entity, Action, or Behavior.
- Do not write bound properties from a background thread or trigger notifications after the VM has been finalized.
- Do not share a VM across screens when it still holds a destroyed `Agent`, `BannerVisual`, or Mission reference.

## Dependency graph

```text
Campaign/Mission source → concrete ViewModel → GauntletLayer → UIContext/movie
                                  ↓                 ↓
                         PropertyChanged       ScreenLayer input/finalize
```

- Upstream: Campaign/Mission or a Core value object; `BannerViewModel`, for example, owns a [`Banner`](../Banner).
- Binding layer: [`GauntletLayer`](../../engine/GauntletLayer).`LoadMovie` receives the VM and reflects its properties and methods.
- Host layer: `ScreenLayer`/`ScreenBase` own input order, activation, focus, and destruction; a Mission page is also bounded by [`Mission`](../../mission/Mission).
- Related subclasses: `BannerViewModel`, `HintViewModel`, and `ItemVM` are concrete data sources. Generated Gauntlet Widgets are not VM subclasses.

## Important members and timing

| Member | Use | Timing and side effects |
|---|---|---|
| `PropertyChanged` and typed notification events | Tell the binding layer that a property or value changed. | Notify only on real changes; redundant notifications cost UI work, and notifications after finalization can reach destroyed widgets. |
| `SetField<T>(ref T, T, string)` | Compares values, assigns the field, and calls `OnPropertyChanged`. | The normal derived-property setter pattern. It returns whether a change occurred and does not refresh related derived properties for you. |
| `OnPropertyChanged`, `OnPropertyChangedWithValue` | Explicitly broadcast a property or a typed new value. | Use when one setter affects more than one bound property; the property name must match a real binding property. |
| `GetPropertyValue`, `GetPropertyType`, `SetPropertyValue` | Let the binding bridge access named properties. | Missing names return null or perform no write; the property setter still owns validation. Reflection does not bypass lifecycle rules. |
| `GetViewModelAtPath` | Resolve nested VMs or `IMBBindingList` entries along a binding path. | Empty lists, invalid indexes, and non-VM children return null. It is not unconditional object navigation. |
| `ExecuteCommand(string, object[])` | Find an instance method by name, convert some string arguments, and invoke it. | Missing methods or incompatible parameters do not execute. Commands still run inside the current UI lifetime and thread. |
| `RefreshValues()` | Let a derived VM reload localized or derived display data. | The base implementation is empty; a concrete VM must override it and call it at a valid refresh point. |
| `OnFinalize()` | Let a derived VM release subscriptions and short-lived resources. | The base class does not clean up derived references. The host should call it once and stop using the VM afterward. |

The binding metadata and SaveSystem auto-collect support are implementation details, not a replacement for Campaign save contracts. Save the behavior or entity state that owns the value and keep the UI VM disposable.

## Real binding path

### Build a VM from a real banner value

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core.ViewModelCollection.BannerEditor;

BannerViewModel bannerViewModel = new BannerViewModel(Hero.MainHero.ClanBanner);
string bannerCode = bannerViewModel.BannerCode;
bannerViewModel.RefreshValues();
bannerViewModel.OnFinalize();
```

`BannerViewModel` accepts a real `Banner`, and its `BannerCode` setter calls `Banner.Deserialize` before notifying the binding layer. A real movie host should release the movie before finalizing the VM; this example shows the order and must not hand the object back to UI after finalization.

### Derived property and command pattern

```csharp
using TaleWorlds.Library;

public sealed class CounterViewModel : ViewModel
{
    private int _count;

    public int Count
    {
        get => _count;
        set => SetField(ref _count, value);
    }

    public void ResetCount()
    {
        Count = 0;
    }
}
```

Gauntlet can bind `Count` and can invoke `ResetCount` as a command. This VM owns display state only. When `Count` represents Campaign data, update the authoritative model or Action and let the VM read it again rather than treating a UI field as world state.

## Risks and boundaries

- **Metadata cache:** Construction of a concrete type caches its reflection metadata. Runtime changes to the property layout are not discovered automatically; use `RefreshPropertyAndMethodInfos` only for an actual assembly change, never every frame.
- **Notification consistency:** Changing a backing field directly does not notify UI; changing one derived value may leave another stale. Use `SetField` and notify related properties explicitly.
- **Command safety:** `ExecuteCommand` is a reflection entry point. Names and parameters come from UI, so command and setter code must validate state instead of assuming a trusted business call.
- **Finalization:** `OnFinalize` does not automatically unsubscribe from Campaign, Mission, or custom events. Derived classes must clean up symmetrically, and the host must stop using the VM after movie release.
- **Thread and stage:** `PropertyChanged` invokes subscribers directly. Background-thread writes can race UI rendering; schedule updates inside the supported UI lifetime and thread.
- **State authority:** Refreshing a VM changes only the UI representation. Gold, ownership, rosters, and save data require their Campaign APIs; `SetPropertyValue` must not bypass Action or Save contracts.

## Version note

This page follows the v1.4.5 `TaleWorlds.Library.ViewModel` and Gauntlet call sites. Later or earlier versions may add typed notification or binding helpers; target-version source remains authoritative, and a subclass property is not a base-class guarantee.

## Navigation

- [↑ Core Extra parent](../)
- [↔ Banner](../Banner)
- [↔ ItemObject](../ItemObject)
- [↔ SkillObject](../SkillObject)
- [Related: GauntletLayer](../../engine/GauntletLayer)
- [Related: ScreenManager](../../gui/ScreenManager)
