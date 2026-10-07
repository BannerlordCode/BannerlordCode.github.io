---
title: "MissionOrderOfBattleUIHandler"
description: "Auto-generated class reference for MissionOrderOfBattleUIHandler."
---
# MissionOrderOfBattleUIHandler

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionOrderOfBattleUIHandler : MissionView`
**Base:** `MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Singleplayer/MissionOrderOfBattleUIHandler.cs`

## Overview

`MissionOrderOfBattleUIHandler` is an **empty marker class** (`MissionOrderOfBattleUIHandler.cs:6`) — no members, no body — deriving from `MissionView`. It names a replaceable slot for the order-of-battle screen. Unlike its marker siblings it is created **with a constructor argument**, which is the one thing about it that is not obvious from the type.

`ViewCreator.CreateMissionOrderOfBattleUIHandler(Mission mission, OrderOfBattleVM dataSource)` (`ViewCreator.cs:103`) passes `false` for `isNetwork`, forwards `mission`, and builds a one-element parameter array holding `dataSource` (`ViewCreator.cs:105`). `ViewCreatorManager.CreateMissionView<T>` then resolves the `[OverrideView]` replacement — `MissionGauntletOrderOfBattleUIHandler` is declared `[OverrideView(typeof(MissionOrderOfBattleUIHandler))]` — checks its assembly against `ModuleHelper.GetActiveGameAssemblies()` (`ViewCreatorManager.cs:200`), and calls `Activator.CreateInstance(type, parameters)` (`ViewCreatorManager.cs:206`).

## Mental Model

`CreateMissionView<T>` has an important quirk: `isNetwork` is accepted and never used. The body only consults `_actualViewTypes` and the active-assembly list; there is no branch on the flag anywhere in `CreateMissionView` (`ViewCreatorManager.cs:191` through `ViewCreatorManager.cs:209`). Passing `true` will not give you a networked variant — it is there for signature compatibility with the older view layer.

The constructor-argument rule is what actually constrains your code. Because the parameter array is `new object[] { dataSource }`, the override's constructor must match `OrderOfBattleVM` (or something the binder can convert to it) in **exactly one** parameter. `MissionGauntletOrderOfBattleUIHandler` does, and `ViewCreatorManager.cs:206` constructs it reflectively — so a signature mismatch is a `MissingMethodException` thrown while the order-of-battle screen is being opened, not a compile error in your module.

The marker itself is still a key and not a usable base. `CreateMissionOrderOfBattleUIHandler` returns `MissionView`; when the Gauntlet override wins, the instance is a `MissionGauntletOrderOfBattleUIHandler`, and any members you added to a subclass of the marker are unreachable through the returned reference.

Where the state lives is worth being precise about: the data the screen shows comes from the `OrderOfBattleVM` you passed in, not from the view. The campaign side builds `SPOrderOfBattleVM` (`SandBox.ViewModelCollection/SPOrderOfBattleVM.cs:22`) and hands it to the factory at `SandBoxMissionViews.cs:363`. The same model gates the screen's visibility elsewhere — `MissionGauntletOrderOfBattleUIHandler` asks `MissionGameModels.Current.BattleInitializationModel.CanPlayerSideDeployWithOrderOfBattle()` at `MissionGauntletOrderOfBattleUIHandler.cs:251` before deciding what to draw.

## How to use

**Getting it.** Call the factory with a real view model; there is nothing to look up.

```csharp
// This is exactly what SandBoxMissionViews.cs:363 does.
MissionView oob = ViewCreator.CreateMissionOrderOfBattleUIHandler(Mission.Current, new SPOrderOfBattleVM());
if (oob != null)
{
    Mission.Current.AddMissionBehavior(oob);
}
```

To replace the screen, match the one-argument constructor exactly:

```csharp
[OverrideView(typeof(MissionOrderOfBattleUIHandler))]
public class MyOrderOfBattleView : MissionView
{
    // ViewCreator.cs:105 passes exactly one argument of type OrderOfBattleVM.
    // A parameterless or two-argument constructor throws MissingMethodException here.
    public MyOrderOfBattleView(OrderOfBattleVM dataSource)
    {
    }

    public override void OnMissionScreenTick(float dt) { }
}
```

**The mistake that crashes only when the player opens the order screen.** Writing a parameterless constructor on the override because every other marker view has one. The factory for this slot passes a single `OrderOfBattleVM` (`ViewCreator.cs:105`), so the binder finds no matching constructor and `Activator.CreateInstance` (`ViewCreatorManager.cs:206`) throws. It passes every load-time check and fails the first time the player tries to deploy — long after you would have noticed a startup error.

## See Also

- [MissionLeaveView — a marker whose factory passes no constructor argument](../MissionLeaveView)
- [MissionSpectatorControlView — the spectator-mode marker](../MissionSpectatorControlView)
- [MultiplayerBattleInitializationModel — decides whether order of battle is available at all](../MultiplayerBattleInitializationModel)
- [Mission — behaviour lookup for the live mission](../../mission/Mission)
- [Area Index](../)