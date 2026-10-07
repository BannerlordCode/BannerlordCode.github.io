---
title: "FaceGeneratorMissionView"
description: "Auto-generated class reference for FaceGeneratorMissionView."
---
# FaceGeneratorMissionView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FaceGeneratorMissionView : MissionView`
**Base:** `MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Singleplayer/FaceGeneratorMissionView.cs`

## Overview

`FaceGeneratorMissionView` is a 22-line `MissionView` whose entire body is one override: `OnMissionTick` (`FaceGeneratorMissionView.cs:12`). It watches for game key 37 on the shared input context and, if that key is pressed and no network session is active, enables the global loading window and pushes the player-character face generator screen (`FaceGeneratorMissionView.cs:15`, `FaceGeneratorMissionView.cs:17`, `FaceGeneratorMissionView.cs:18`).

It is unreferenced in this tree. A search for the type name returns exactly one hit — its own declaration (`FaceGeneratorMissionView.cs:9`). It carries no `[DefaultView]` attribute, no `[OverrideView]`, and no `ViewCreator` factory method names it. In 1.3.0 nothing creates it.

## Mental Model

Three details define the behaviour, and each is a boundary.

Game key **37** is a raw index, not a named key (`FaceGeneratorMissionView.cs:15`). `IInputContext.IsGameKeyPressed` is called with the literal `37`, so this is bound to whatever the game has at that index in the current input context — it is not a `GameKey` enum value you can look up, and it will not survive a change to the default keymap. If you want to understand what it is, you have to read the input context, not this file.

The network guard is `!GameNetwork.IsSessionActive` (`FaceGeneratorMissionView.cs:15`), and it is the one thing that makes this type safe at all. Pushing a screen during an active session would fight the multiplayer screen stack, so the whole body is skipped in multiplayer and in replays. It is a singleplayer-only affordance by construction.

`Game.Current.PlayerTroop` is passed as the first argument to the screen factory (`FaceGeneratorMissionView.cs:18`) with `false` as the second and `null` as the third. `Game.Current` is dereferenced unconditionally inside the guard, so the code assumes a non-null `Game` — which holds for a live singleplayer mission but not for an editor mission driven without one. There is no null check on `Game.Current` and none on `PlayerTroop`; the third parameter, `null`, is presumably the "no callback" slot and the second is a flag whose name the type does not tell you.

`LoadingWindow.EnableGlobalLoadingWindow()` runs *before* the push (`FaceGeneratorMissionView.cs:17`), which is the correct order: the face generator renders a character, so the screen must be allowed to block on asset loading. Nothing in this class ever disables that window — whatever the pushed screen does on close is outside its scope.

## How to use

**Getting it.** Nothing creates it, so either add it yourself or copy the six lines into a view of your own. If you add it, you are the only caller of the screen factory:

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade.View.MissionViews;
using TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer;
using TaleWorlds.ScreenSystem;

public class MyFaceGenShortcut : MissionView
{
    public override void OnMissionTick(float dt)
    {
        // Same guard as the stock class: never push a screen during a network session.
        if (Input.IsGameKeyPressed(37) && !GameNetwork.IsSessionActive && Game.Current != null)
        {
            LoadingWindow.EnableGlobalLoadingWindow();
            ScreenManager.PushScreen(ViewCreator.CreateMBFaceGeneratorScreen(
                Game.Current.PlayerTroop, false, null));
        }
    }
}

// FaceGeneratorMissionView itself is never instantiated by the game in 1.3.0,
// so register your own instance.
Mission.Current.AddMissionBehavior(new MyFaceGenShortcut());
```

To drive the face generator programmatically instead, skip this view entirely and call the same `ViewCreator.CreateMBFaceGeneratorScreen` from a behaviour or a screen — it is an ordinary `ScreenBase` factory and does not need a mission view around it.

**The mistake that pushes two screens at once.** Reading `Input.IsGameKeyPressed(37)` in `OnMissionTick` without any once-only latch. `OnMissionTick` runs every frame, and the stock implementation has no re-entry guard after the push — so as long as the player holds the key down, the screen is pushed once per frame, stacking dozens of face generators on top of each other. It does not happen in the shipped game only because nothing ships this view; add it as written and it happens immediately.

## Key Methods

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of FaceGeneratorMissionView from the subsystem API first
FaceGeneratorMissionView faceGeneratorMissionView = ...;
faceGeneratorMissionView.OnMissionTick(0);
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
FaceGeneratorMissionView view = ...;
```

## See Also

- [DeploymentView — the other unreferenced view in this namespace](../DeploymentView)
- [MissionObjectiveView — a view slot that the view layer actually creates](../MissionObjectiveView)
- [CharacterThumbnailCreationData — the face generator's output ends up in this cache](../CharacterThumbnailCreationData)
- [Mission — behaviour list and mission tick](../../mission/Mission)
- [Area Index](../)