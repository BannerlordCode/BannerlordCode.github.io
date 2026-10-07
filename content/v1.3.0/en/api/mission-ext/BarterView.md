---
title: "BarterView"
description: "Auto-generated class reference for BarterView."
---
# BarterView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BarterView : MissionView`
**Base:** `MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Singleplayer/BarterView.cs`

## Overview

A marker type. `BarterView` is a class with an empty body (`BarterView.cs:6`-`BarterView.cs:8`) that exists solely so the view layer can name the barter screen as a distinct type. It adds nothing to `MissionView`; its entire content is inherited.

## Mental Model

The type is a **slot**, not an implementation. `SandBoxViewCreator.CreateMissionBarterView()` returns `ViewCreatorManager.CreateMissionView<BarterView>(false, null, Array.Empty<object>())` (`SandBoxViewCreator.cs:102`-`SandBoxViewCreator.cs:104`), and every mission view list registers that result — it appears in five of the lists in `SandBoxMissionViews.cs` (`SandBoxMissionViews.cs:46`, `SandBoxMissionViews.cs:71`, `SandBoxMissionViews.cs:94`, `SandBoxMissionViews.cs:146`, `SandBoxMissionViews.cs:175`). Because the factory is generic on the view type, the marker is what a replacement binds to: the Gauntlet implementation declares `[OverrideView(typeof(BarterView))]` (`MissionGauntletBarterView.cs:16`). So to replace the barter screen you do not subclass `BarterView` — you register a view against it.

## How to use

**Getting one.** Never construct it. Ask the creator, or just call the static factory, which returns the currently registered implementation rather than a `BarterView`.

**Typical use.**

```csharp
// The vanilla path: a factory that resolves whatever is bound to the marker type.
MissionView view = SandBoxViewCreator.CreateMissionBarterView();   // SandBoxViewCreator.cs:102

// The replacement path: bind a different view to the marker, not a subclass of it.
[OverrideView(typeof(BarterView))]                                  // MissionGauntletBarterView.cs:16
public class MyModBarterView : MissionView
{
    // ... your barter UI
}
```

**Watch out.** Subclassing `BarterView` does nothing. It declares no members and no lifecycle of its own (`BarterView.cs:7`), and nothing looks up "the most derived `BarterView`" — the factory resolves by the exact marker type through `CreateMissionView<BarterView>` (`SandBoxViewCreator.cs:104`). A subclass you register as an override of itself is never constructed, so the barter screen silently keeps rendering the vanilla view while your code sits unused. Bind with `[OverrideView(typeof(BarterView))]` on a class derived from `MissionView`, exactly as `MissionGauntletBarterView` does.

## Members

This type declares none. `BarterView` has an empty class body (`BarterView.cs:7`) — no fields, no properties, no methods, no constructor of its own. Every member it exposes is inherited from `MissionView`.

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
BarterView view = ...;
```

## See Also

- [Area Index](../)
- [MissionView](../MissionView)
- [UsageDirection](../UsageDirection)