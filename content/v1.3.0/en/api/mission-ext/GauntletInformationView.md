---
title: "GauntletInformationView"
description: "Auto-generated class reference for GauntletInformationView."
---
# GauntletInformationView

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GauntletInformationView : GlobalLayer`
**Base:** `GlobalLayer`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/GauntletInformationView.cs`

## Overview

`GauntletInformationView` is the global layer that renders tooltips — the hover panels that show a settlement, a hero, an item. It is `public class GauntletInformationView : GlobalLayer` (`GauntletInformationView.cs:12`) and its constructor is **private** (`GauntletInformationView.cs:15`): there is exactly one, held in the static `_current` field and created by `Initialize()` (`GauntletInformationView.cs:24`).

`Initialize` guards on `_current == null` (`GauntletInformationView.cs:26`), constructs the instance, registers it with `ScreenManager.AddGlobalLayer` (`GauntletInformationView.cs:29`), and then registers three tooltip key types with `PropertyBasedTooltipVM.AddKeyType` — `"MapClick"`, `"FollowModifier"` and `"ExtendModifier"` (`GauntletInformationView.cs:30` through `GauntletInformationView.cs:32`). The constructor itself builds the `GauntletLayer` at draw order `115000` and subscribes to `InformationManager.OnShowTooltip` and `OnHideTooltip` (`GauntletInformationView.cs:17`, `GauntletInformationView.cs:18`).

The show path is a registry lookup plus reflection. `OnShowTooltip(Type, object[])` first calls `OnHideTooltip()` to clear any existing tooltip (`GauntletInformationView.cs:80`), then looks the type up in `InformationManager.RegisteredTypes` (`GauntletInformationView.cs:82`) and builds the view-model with `Activator.CreateInstance(tooltipRegistry.TooltipType, new object[] { type, args })` (`GauntletInformationView.cs:86`), loading the registry's movie into the layer (`GauntletInformationView.cs:91`).

## Mental Model

The tooltip view-model is constructed by reflection from the registry, not by a factory you can override. `Activator.CreateInstance` with the two-argument array (`GauntletInformationView.cs:86`) means the tooltip class is instantiated afresh every time a tooltip shows, using the `(Type, object[])` constructor that `TooltipBaseVM` already provides (`TooltipBaseVM.cs:9`) — it registers and unregisters callbacks in that constructor. Anything expensive belongs in `OnFinalize` or in the constructor's cheap path — because `OnHideTooltip` calls `dataSource.OnFinalize()` (`GauntletInformationView.cs:109`), which is your only cleanup hook.

Showing replaces showing. The very first statement of `OnShowTooltip` is `OnHideTooltip()` (`GauntletInformationView.cs:80`), so a new tooltip always tears the old one down first. That is what makes the two fields safe as a pair: `_dataSource` and `_movie` are always both set or both null (`GauntletInformationView.cs:115`), because `OnHideTooltip` nulls them together.

Unregistered types fail loudly, in two different ways. If the type is not in `RegisteredTypes` at all, the method falls to a `FailedAssert` naming the type (`GauntletInformationView.cs:100`). If it *is* registered but construction throws, a different `FailedAssert` reports the exception (`GauntletInformationView.cs:96`). Both are development-build diagnostics, so in a release build an unregistered tooltip type silently produces nothing.

The extend gesture is timing-based and asymmetric between input devices. `OnTick` accumulates `_gamepadTooltipExtendTimer` while Alt (either side) or the controller's LBumper is held (`GauntletInformationView.cs:40`) and resets it to zero otherwise (`GauntletInformationView.cs:46`). Then `IsExtended` is set from that timer — but gamepad requires more than `0f`, specifically `> 0.18f` (`GauntletInformationView.cs:51`), while mouse and keyboard take it on the first frame. The same physical hold is therefore instant on keyboard and needs a deliberate delay on gamepad.

Nothing is null-guarded against a missing data source in the extend path — both branches test `this._dataSource != null` (`GauntletInformationView.cs:40`, `GauntletInformationView.cs:48`), so the timer keeps running with no tooltip up and the next tooltip inherits whatever was accumulated.

## How to use

**Getting one.** Call `GauntletInformationView.Initialize()` once; it is idempotent (`GauntletInformationView.cs:26`). You never construct the view — to add a tooltip, register the *type* it will show.

**Typical use** — registering a tooltip type so the layer will build it:

```csharp
using TaleWorlds.Core;
using TaleWorlds.Library;
using TaleWorlds.MountAndBlade.GauntletUI;

public class MyHeroTooltipVM : TooltipBaseVM
{
    // TooltipBaseVM already has the (Type, object[]) constructor this path needs
    // (TooltipBaseVM.cs:9) — you do not declare one.
    protected override void OnFinalizeInternal()
    {
        // Called via OnFinalize (TooltipBaseVM.cs:17) when this tooltip is
        // replaced or dismissed (GauntletInformationView.cs:109).
    }
}

public class MyHeroTarget
{
}

public static class MyTooltips
{
    public static void Install()
    {
        GauntletInformationView.Initialize();

        // Generic registration: the key type, the view-model type, a refresh
        // callback and the movie that renders it (InformationManager.cs:220).
        InformationManager.RegisterTooltip<MyHeroTarget, MyHeroTooltipVM>(
            (vm, args) => vm.Refresh((MyHeroTarget)args[0]),
            "MyHeroTooltip");

        InformationManager.ShowTooltip(typeof(MyHeroTarget), hero);
        InformationManager.HideTooltip();
    }
}
```

`InformationManager.RegisteredTypes` is the dictionary `OnShowTooltip` reads (`GauntletInformationView.cs:82`), and `InformationManager.RegisterTooltip<TRegistered, TTooltip>(Action<TTooltip, object[]>, string movieName)` (`InformationManager.cs:220`) is the real registration call — it supplies both the `TooltipType` and the `MovieName` the lookup later uses.

**Most common mistake:** registering the types but forgetting the movie name, or registering the wrong key type.

```csharp
// Registers nothing usable: RegisteredTypes gets an entry whose MovieName
// is wrong, and LoadMovie then fails (GauntletInformationView.cs:91).
InformationManager.RegisterTooltip<MyHeroTarget, MyHeroTooltipVM>(null, "NotAMovie");
```

`RegisterTooltip` is generic in both the key type and the tooltip type and takes the movie name as its third argument (`InformationManager.cs:220`); `OnShowTooltip` then looks the key type up in `RegisteredTypes` (`GauntletInformationView.cs:82`) and loads `tooltipRegistry.MovieName` into the layer (`GauntletInformationView.cs:91`). Get the key type wrong and the lookup misses, giving you the "Unable to show tooltip" assert; get the movie name wrong and construction succeeds but the layer has nothing to draw. Both are invisible in a release build — the tooltip simply does not appear. Derive from `TooltipBaseVM` (which supplies the `(Type, object[])` constructor you do not need to write), pass the refresh callback and movie name through `RegisterTooltip`, and ask with `ShowTooltip`.

## Key Methods

### Initialize
`public static void Initialize()`

**Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Static call; no instance required
GauntletInformationView.Initialize();
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
GauntletInformationView view = ...;
```

## See Also

- [Area Index](../)
- [GauntletChatLogView — the other global chat layer in this assembly](../GauntletChatLogView)
- [中文页面](../../../../zh/api/mission-ext/GauntletInformationView)