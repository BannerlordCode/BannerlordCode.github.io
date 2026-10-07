---
title: "BarterView"
description: "A five-line public MissionView subclass that declares nothing. Covers how it is actually obtained through OverrideView and ViewCreatorManager, why the class is empty, and that it must not be confused with the barter screen."
---

# BarterView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BarterView : MissionView`
**Base:** `MissionView`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer/BarterView.cs`

## Overview

`BarterView` is a **five-line type declaration and nothing else**:

```csharp
public class BarterView : MissionView
{
}
```

That is the entire file (`BarterView.cs:3-5`). It declares no field, no property, no method, no constructor, and no nested type. Its only real content is its name and its base class.

It exists because the engine's view layer is built around **named mission-view types**, and this name is one of them. `MissionGauntletBarterView` declares `[OverrideView(typeof(BarterView))]` (`MissionGauntletBarterView.cs:17`), and `SandBoxViewCreator.CreateMissionView` requests it by that name (`SandBoxViewCreator.cs:94`). So the type's whole job is to **be a key that the view system looks up** — an empty nominal type standing where a mission view is expected.

## Mental Model

### What it is / which layer

- It sits in the **view layer**, above the simulation. [`MissionView`](../MissionView) is the base that turns game state into something a screen can draw; a subclass normally overrides things like `OnScreenMissionBehaviorIsAdded`, `OnMissionBehaviorAdded`, `OnOverlayRender` or `IsRunningMissionAfterScreen`. `BarterView` overrides **none of them**.
- Think of it as a **label on an empty slot**. When the engine asks "what view type should this barter mission use?", the answer is this name; the engine then finds the Gauntlet implementation that claims to handle it.
- The relationship is an inversion of control, not inheritance-by-use: `MissionGauntletBarterView` *claims* `BarterView` via an attribute, and `ViewCreatorManager` *builds* a `BarterView` on request. The empty class is the agreed rendezvous point between the engine and the module.
- It is **not sealed** — `public class BarterView : MissionView` (`BarterView.cs:3`) — so you can subclass it, though there is nothing to inherit.

### The consequence that matters

**You cannot construct it, and you cannot configure it, because it has no members.** There is no constructor to call, no property to set, no field to inspect. Every question of the form "how do I get the barter view's current state?" has the answer "that state is not on this type" — it lives on the Gauntlet implementation that overrides it.

The practical consequence is that **`BarterView` is not where barter UI logic goes.** Writing `new BarterView()` compiles (it has an implicit default constructor) and gives you an object that does nothing. If you want to affect the barter screen, you override the Gauntlet view and mark it with `[OverrideView(typeof(BarterView))]` — the same thing the shipped module does at `MissionGauntletBarterView.cs:17`.

### Naming trap

`BarterView` here is a **mission view**, not the barter screen and not a widget. A search for "barter" in this tree also turns up `GauntletMapConversationBarterView` (a different class in the map conversation layer) and the four barter widgets in this bucket, none of which relate to `BarterView`. Verify the namespace `TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer` before you assume a match is this type.

## How to use

**How to obtain it.** You do not construct it — you **ask the view system for it**. `SandBoxViewCreator.CreateMissionView<BarterView>(false, (Mission)null, Array.Empty<object>())` (`SandBoxViewCreator.cs:94`) is the shipped call site: a generic method invoked with `BarterView` as its type argument. That is the acquisition path a mod uses, and it goes through `ViewCreatorManager` in `TaleWorlds.MountAndBlade.View` rather than through a constructor.

**A typical use.** Override it, and register your override so the engine picks yours instead of the shipped one:

```csharp
using TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer;
using TaleWorlds.MountAndBlade.ViewModelCollection;

// BarterView itself is empty (BarterView.cs:3-5), so the real work belongs in
// a subclass. Declare your own view type and let the engine instantiate it.
public class MyModBarterView : BarterView
{
    // MissionView subclasses override these; BarterView overrides none, so
    // nothing here conflicts with the base.
    public override void OnScreenMissionBehaviorIsAdded(int screenIndex, MissionBehavior behavior)
    {
        base.OnScreenMissionBehaviorIsAdded(screenIndex, behavior);

        if (behavior is MyModBarterScreenBehavior)
        {
            Debug.Print("my barter behavior attached to screen " + screenIndex, 0);
        }
    }
}
```

Claim a view type from your Gauntlet implementation, mirroring how the module does it:

```csharp
using TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer;

// The shipped module marks its implementation with
// [OverrideView(typeof(BarterView))] at MissionGauntletBarterView.cs:17. That
// attribute is the whole registration mechanism — ViewCreatorManager resolves
// the name to the claiming type, not to BarterView itself.
public class MyModGauntletBarterView : MissionView
{
    // The engine looks this up by the BarterView name and instantiates it.
}
```

**What to watch out for.** The trap is treating this as a working API surface. `new BarterView()` compiles and does nothing, so a modder who instantiates it sees an inert object with no error — the modder's "it ran and nothing happened" case. Also note that a `MissionView` subclass is created and torn down by the view system around a mission; holding the instance past the mission is as unsafe as holding a `Mission`, because the view's lifetime is bound to the screen's.

## Key members

| Member | Signature | What it is for |
| --- | --- | --- |
| *(none)* | `public class BarterView : MissionView` — the declaration spans `BarterView.cs:3-5` and the body is empty | Nothing callable, nothing readable. Positive evidence: `grep -cE '^\t(public|private|protected|internal)' BarterView.cs` returns 0, and the file is 5 lines including its namespace declaration. |

This is the honest table for this page. The members a reader expects, and their verified status:

| Absent member | Status | Why it is absent |
| --- | --- | --- |
| Any constructor | **UNRESOLVED — absent in v1.4.5** | No constructor is declared, so only the implicit parameterless one exists. It is not used: acquisition goes through `ViewCreatorManager.CreateMissionView<BarterView>` (`SandBoxViewCreator.cs:94`), not through `new`. |
| Any `MissionView` override | **UNRESOLVED — absent in v1.4.5** | `grep -c 'override' BarterView.cs` returns 0. Positive evidence: the file is 5 lines and its only content is the class header and braces. |
| Any state or configuration | **UNRESOLVED — absent in v1.4.5** | `grep -cE 'public|private' BarterView.cs` returns 1 (the class declaration itself). |

## Examples

The honest demonstration: this compiles and is useless.

```csharp
using TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer;

public class InertBarterView
{
    public static void DoThis()
    {
        // Compiles — BarterView has an implicit default constructor — and does
        // nothing. BarterView.cs:3-5 declares no members, so this object has no
        // state to read and no behaviour to hook. No error is raised.
        BarterView view = new BarterView();

        Debug.Print("created an inert view: " + view, 0);
    }
}
```

Acquire one the way the engine does, through the view manager:

```csharp
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer;

public static class ViewAcquisition
{
    // Mirrors SandBoxViewCreator.cs:94, which passes BarterView as the type
    // argument to the view-creator helper rather than constructing it.
    public static MissionView OpenBarterMissionView()
    {
        MissionView view = ViewCreatorManager.CreateMissionView<BarterView>(
            isMultiplayer: false,
            mission: null,
            parameters: Array.Empty<object>());

        // Even a view obtained this way carries no barter state of its own: the
        // object you get back is whatever claims the BarterView name.
        return view;
    }
}
```

Check whether an object is a barter view at all, instead of casting blindly:

```csharp
using TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer;

public static class ViewTypeProbe
{
    public static bool IsBarterView(MissionView view)
    {
        // The type itself is empty, so the only thing it can answer is the
        // identity question. Use `is` rather than a cast you then dereference.
        if (view is BarterView)
        {
            Debug.Print("this is the barter mission view slot", 0);
            return true;
        }

        return false;
    }
}
```

## Risks and crash boundaries

- **`new BarterView()` compiles and does nothing.** The type has no members (`BarterView.cs:3-5`), so any instance is inert. This is the silent-failure case: no exception, no log, no effect.
- **It is not the barter screen.** `BarterView` is a mission view in `TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer`; it is unrelated to `GauntletMapConversationBarterView` and to the four barter widgets in this bucket. Matching on the word "barter" alone will send you to the wrong type.
- **Lifetime is bound to the mission screen.** The engine creates the view around a mission and tears it down with it, exactly as it does for the `MissionView` base. Holding the instance past that is a dangling reference with no managed guard.
- **`CreateMissionView` was called with a null `Mission` in the shipped code.** `SandBoxViewCreator.cs:94` passes `(Mission)null` explicitly, so the view must tolerate a null mission — relevant if you write an override that assumes one exists.
- **Nothing here is a save participant.** No `[Serializable]`, no fields, nothing to persist.
- **Do not add members to make it convenient.** The type is a lookup key resolved by `ViewCreatorManager`; the behaviour belongs in the class that claims it with `[OverrideView]`, as the shipped module does (`MissionGauntletBarterView.cs:17`).

## Cross-Version Notes

The v1.4.5 file is 5 lines under the `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer/` layout — note this source tree is `Modules.Native`, not `bin/`, unlike most pages in this bucket. The same file name and empty-body shape appear in the `bannerlord-1.3.0` and `bannerlord-1.3.15` trees, which is consistent with what this type is: a **stable name** rather than an evolving API. The parts most likely to change across versions are the two registration mechanisms — the `[OverrideView(typeof(...))]` attribute and the `ViewCreatorManager.CreateMissionView<T>` generic entry point — because both are managed-side conventions with no native symbol protecting them, and a later version could rename either. What you can rely on is the name `BarterView` and the fact that the shipped implementation claims it. **VERIFIED MEASURED for v1.4.5** (5 lines, 0 members, 0 overrides; acquisition confirmed at `MissionGauntletBarterView.cs:17` and `SandBoxViewCreator.cs:94` by repo-wide search); the sibling version trees were not read line by line for this page.

## Dependencies

- Base type: [`MissionView`](../MissionView), which supplies the view lifecycle this class inherits without overriding.
- The Gauntlet implementation that claims this type: `MissionGauntletBarterView` in `Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI.Missions`, marked `[OverrideView(typeof(BarterView))]` at `MissionGauntletBarterView.cs:17` — described here rather than linked, because it has no page in this slice.
- The module that requests the view: `SandBoxViewCreator` in `Modules.SandBox/SandBox.View/SandBox.View`, calling `ViewCreatorManager.CreateMissionView<BarterView>` at `SandBoxViewCreator.cs:94`.
- The view-construction helper itself: `ViewCreatorManager` in `TaleWorlds.MountAndBlade.View` — described here rather than linked, because it has no page in this slice.
- Unrelated despite the name: the barter widgets in this bucket, [`BarterItemCountControlButtonWidget`](../BarterItemCountControlButtonWidget), [`BarterItemCountTextWidget`](../BarterItemCountTextWidget), [`BarterTupleItemButtonWidget`](../BarterTupleItemButtonWidget) and [`BarterItemVisualBrushWidget`](../BarterItemVisualBrushWidget).
- Bucket index: [mission-ext API index](../)