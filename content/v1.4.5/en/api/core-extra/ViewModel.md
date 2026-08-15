---
title: "ViewModel"
description: "The Gauntlet data-source and UI lifecycle base class in v1.4.5: property notification, commands, refresh, and OnFinalize, and its boundaries with campaign state and GauntletLayer."
---

# ViewModel

**Namespace:** `TaleWorlds.Library`  
**Module:** `TaleWorlds.Library`  
**Type:** `public abstract class ViewModel`  
**Base:** `IViewModel`, `INotifyPropertyChanged`  
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/ViewModel.cs`

## Overview

`ViewModel` is the reflection-binding data source for Gauntlet: it connects UI-visible properties, notifications, collections, and commands to a short-lived screen object, and is responsible for surfacing changes at the binding layer. It is not a campaign entity, a Mission object, or save state itself; once the page closes it must stop being used and release the subscriptions and temporary resources it holds.

## Mental Model

ViewModel sits between Library and UI. Concrete subclasses such as `BannerViewModel`, `MissionOrderVM` hold the state to display and notify Gauntlet through public properties, `OnPropertyChanged`, and `SetField`. The constructor scans the concrete type's properties and methods and caches the binding metadata; `GetPropertyValue`, `SetPropertyValue`, `GetViewModelAtPath`, and `ExecuteCommand` are part of the UI-binding bridge.

A screen usually creates a VM, passes it to [`GauntletLayer`](../../engine/GauntletLayer).`LoadMovie`, drives the display from property changes on the game/UI thread, then releases the movie in reverse order, calls `OnFinalize`, and clears the data source. A VM can read Campaign/Mission state, but it is not the authoritative holder of that state; holding Heroes, Agents, or native resources across screens causes lifecycle mismatch.

## When to Use / When Not to Use

### Good fits

- Build UI properties, collections, hints, and command entries for a Gauntlet movie.
- Use `SetField` in a setter to avoid no-change notifications, and re-read localized text or derived display values in a derived VM's `RefreshValues`.
- Override `OnFinalize` on UI destruction to unsubscribe, release temporary resources, and disconnect long-lived objects.

### Poor fits

- Do not treat the VM as the sole state source for `Hero`, `MobileParty`, or `Mission`; changing the campaign world goes back to the matching entity, Action, or Behavior.
- Do not write binding properties directly from a background thread, and do not keep firing notifications after the VM is finalized.
- Do not share, across UI pages, a VM that holds a destroyed `Agent`, `BannerVisual`, or Mission reference.

## Dependencies

```text
Campaign/Mission source → concrete ViewModel → GauntletLayer → UIContext/movie
                                  ↓                 ↓
                         PropertyChanged       ScreenLayer input/finalize
```

- Upstream: Campaign/Mission or Core value objects, e.g. `BannerViewModel` holds [`Banner`](../Banner).
- Binding layer: [`GauntletLayer`](../../engine/GauntletLayer)'s `LoadMovie` receives the `ViewModel` and reflects over its properties and methods.
- Host layer: `ScreenLayer`/`ScreenBase` manage input order, activation, focus, and destruction; Mission pages are also bound by [`Mission`](../../mission/Mission)'s lifecycle.
- Related subclasses: `BannerViewModel`, `HintViewModel`, `ItemVM` and the like are concrete data sources; do not treat a generated Gauntlet Widget as a VM subclass.

## Key Members and Timing

| Member | Purpose | Timing and side effects |
|---|---|---|
| `PropertyChanged` and typed notification events | Tell the binding layer a property or value changed. | The setter notifies only when state truly changed; repeated notifications add UI work, and notifying after finalize may touch destroyed controls. |
| `SetField<T>(ref T, T, string)` | Compare old/new, write the field, and call `OnPropertyChanged`. | The preferred pattern for derived property setters; it only returns whether a change happened and does not refresh related derived properties for you. |
| `OnPropertyChanged`, `OnPropertyChangedWithValue` | Actively broadcast a normal or typed new value. | Use when one setter affects several bound properties; the property name must match a real bound property. |
| `GetPropertyValue`, `GetPropertyType`, `SetPropertyValue` | Let the binder read/write public properties by name. | Returns null or does not write if the name does not exist; the property setter still must validate input itself. Reflection does not bypass the lifecycle. |
| `GetViewModelAtPath` | Resolve a binding path along nested VMs or `IMBBindingList`. | Returns null when the list is empty, the index is out of range, or the child is not a VM; do not treat it as unconditional object navigation. |
| `ExecuteCommand(string, object[])` | Find an instance method by command name, convert some string args, then call it. | Does not execute when the method is missing or arg count/type mismatches; the command still runs inside the current UI lifecycle and thread. |
| `RefreshValues()` | Derived class reloads localized text or derived display data. | The base implementation is empty; the concrete VM must override it and call it at legal moments like re-entering a page or a language change. |
| `OnFinalize()` | Derived class releases subscriptions and short-lived resources. | The base does not auto-release derived holdings; the host should call it once and then stop using the VM. |

## Real Binding Paths

### Build a VM with a real Banner value

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core.ViewModelCollection.BannerEditor;

BannerViewModel bannerViewModel = new BannerViewModel(Hero.MainHero.ClanBanner);
string bannerCode = bannerViewModel.BannerCode;
bannerViewModel.RefreshValues();
bannerViewModel.OnFinalize();
```

`BannerViewModel`'s constructor takes a real `Banner`, and its `BannerCode` setter calls `Banner.Deserialize` and then fires the property notification. The real movie host should release the movie first on close, then finalize the VM; the example shows the lifecycle order and that you cannot keep handing this object to the UI after finalize.

### Property pattern in a derived class

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

Gauntlet can bind `Count` and also use `ResetCount` as a command method. This VM only holds display state; when `Count` represents a Campaign value, a clear model/Action should update the authoritative value and then let the VM re-read, rather than treating the UI field as world state.

## Risks and Boundaries

- **Metadata cache:** constructing a concrete type caches the property/method reflection results. Dynamically changing the property layout at runtime will not auto-refresh; only use `RefreshPropertyAndMethodInfos` when an assembly genuinely changed, not every frame.
- **Notification consistency:** changing a backing field directly will not notify the UI; updating only one derived property can also leave an old display. Use `SetField` and notify related properties explicitly.
- **Command safety:** `ExecuteCommand` is a reflection entry. Command names and args come from the UI; validate state inside the setter/command, and do not assume every binding call comes from a trusted business flow.
- **Finalize:** `OnFinalize` does not auto-unsubscribe Campaign events, Mission events, or custom subscriptions. The derived class must clean up symmetrically, and the host must not keep using the VM after the movie is released.
- **Thread and phase:** `PropertyChanged` notifications call subscribers directly; writing from a background thread can race with UI drawing. Keep binding updates on the thread and phase the UI lifecycle allows.
- **State authority:** a VM's value refresh only changes the UI representation. Changing gold, territory, composition, or save data must use the matching Campaign API; you cannot bypass the Action/Save contract via `SetPropertyValue`.

## Version Notes

This page targets v1.4.5's `TaleWorlds.Library.ViewModel` and the Gauntlet call sites. Different versions may add typed notification events or binding helpers; a mod should rely on the actual base-class members of its target version and not treat some VM subclass's properties as a base-class guarantee.

## See Also

- [↑ Core Extra parent](../)
- [↔ Banner](../Banner)
- [↔ ItemObject](../ItemObject)
- [↔ SkillObject](../SkillObject)
- [Related: GauntletLayer](../../engine/GauntletLayer)
- [Related: ScreenManager](../../gui/ScreenManager)
