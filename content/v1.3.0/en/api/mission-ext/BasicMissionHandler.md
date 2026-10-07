---
title: "BasicMissionHandler"
description: "Auto-generated class reference for BasicMissionHandler."
---
# BasicMissionHandler

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions.Handlers
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BasicMissionHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Source/Missions/Handlers/BasicMissionHandler.cs`

## Overview

`BasicMissionHandler` is the retreat/surrender confirmation widget for singleplayer battles. It is a `MissionLogic` with no gameplay role at all: `MissionState` adds one instance to *every* mission's behaviour list unconditionally (`MissionState.cs:357`), and its only caller in the whole tree is the singleplayer scoreboard view-model, which fetches it with `GetMissionBehavior<BasicMissionHandler>()` (`SPScoreboardVM.cs:438`) and calls `CreateWarningWidgetForResult` when the exit result is `NeedsPlayerConfirmation` or `SurrenderSiege` (`SPScoreboardVM.cs:443`).

`CreateWarningWidgetForResult(BattleEndLogic.ExitResult)` (`BasicMissionHandler.cs:23`) is the whole public surface. It pauses the engine unless this is a network client (`BasicMissionHandler.cs:25`), records whether the result was `SurrenderSiege` into the private `_isSurrender` flag (`BasicMissionHandler.cs:29`), shows either the surrender or the retreat `InquiryData` (`BasicMissionHandler.cs:30`), and raises the public `IsWarningWidgetOpened` flag (`BasicMissionHandler.cs:31`). Accepting runs `OnEventAcceptSelectionWidget` (`BasicMissionHandler.cs:55`), which broadcasts `OnBattleEnded()` to every mission logic (`BasicMissionHandler.cs:60`) and then calls `Mission.SurrenderMission()` or `Mission.RetreatMission()` depending on that flag (`BasicMissionHandler.cs:65`). Cancelling only closes the widget (`BasicMissionHandler.cs:49`).

## Mental Model

The one piece of shared mutable state is the pair `IsWarningWidgetOpened` and `_isSurrender`, and they do not have the same lifetime. `OnBehaviorInitialize` resets `IsWarningWidgetOpened = false` (`BasicMissionHandler.cs:19`) but leaves `_isSurrender` alone, so on a behaviour that is initialised twice — the same mission restarting the behaviour, or a mod re-adding it — `_isSurrender` keeps whatever the previous exit set. It only gets a fresh value when somebody calls `CreateWarningWidgetForResult` again.

Treat `IsWarningWidgetOpened` as a one-way publish flag. It has a private setter (`BasicMissionHandler.cs:13`), so it is readable by other behaviours but not driveable: the only way to raise it is to open a real inquiry. That matters because the flag is what gates the un-pause — `CloseSelectionWidget` returns early if it is false (`BasicMissionHandler.cs:37`) and only calls `MBCommon.UnPauseGameEngine()` after clearing it (`BasicMissionHandler.cs:44`). Any code path that ends the mission without going through the accept/cancel handlers therefore leaves the engine paused on the server.

Two asymmetries to plan around. The pause is server-only: both `MBCommon.PauseGameEngine` and the un-pause are wrapped in `if (!GameNetwork.IsClient)` (`BasicMissionHandler.cs:25`, `BasicMissionHandler.cs:42`), so on a client the flag flips but the engine never pauses — the pause is the server telling the simulation to stop while the inquiry is up. And the accept path is unconditional about side effects: it walks `Mission.MissionLogics.ToArray()` and calls `OnBattleEnded()` on each (`BasicMissionHandler.cs:57`), which means every mission behaviour in the mission, including your own, sees `OnBattleEnded` once per accepted retreat or surrender — not once per battle.

## How to use

**Getting one.** You do not add it: `MissionState` already put one in every mission (`MissionState.cs:357`), so reach it through `Mission.Current.GetMissionBehavior<BasicMissionHandler>()` (`Mission.cs:4326`) and call `CreateWarningWidgetForResult`. If you want a *different* confirmation flow, register your own `MissionLogic` rather than subclassing this one — nothing dispatches to a virtual member here, so a subclass would still need its caller rewired.

**Typical use** — asking the player to confirm an end of battle from your own logic:

```csharp
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.Source.Missions.Handlers;

public static class MyRetreatFlow
{
    public static bool AskToRetreat(Mission mission)
    {
        BasicMissionHandler handler = mission.GetMissionBehavior<BasicMissionHandler>();
        if (handler == null || handler.IsWarningWidgetOpened)
        {
            // Already showing: do not stack a second inquiry on top.
            return false;
        }

        // NeedsPlayerConfirmation -> the retreat popup; SurrenderSiege -> surrender popup.
        handler.CreateWarningWidgetForResult(BattleEndLogic.ExitResult.NeedsPlayerConfirmation);
        return true;
    }
}
```

Accepting that popup is what actually ends the mission: the handler calls `Mission.RetreatMission()` (`BasicMissionHandler.cs:68`) for you, so do not also call it from your own code or the mission ends twice.

**Most common mistake:** treating `IsWarningWidgetOpened` as something you can set.

```csharp
handler.IsWarningWidgetOpened = true;   // does not compile: the setter is private
```

Reach for it as a guard, not a control. The consequence of skipping the guard is the real bug: opening a second inquiry while the first is up overwrites the first one's callbacks, so the pause from `MBCommon.PauseGameEngine()` is only ever released once, by whichever handler ran `CloseSelectionWidget` last — the game stays paused behind a dialog that has already been dismissed, and the player must kill the process. Check the flag first, as above.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsWarningWidgetOpened` | `public bool IsWarningWidgetOpened { get; }` |

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Invoked when the behavior initialize event is raised.

```csharp
// Obtain an instance of BasicMissionHandler from the subsystem API first
BasicMissionHandler basicMissionHandler = ...;
basicMissionHandler.OnBehaviorInitialize();
```

### CreateWarningWidgetForResult
`public void CreateWarningWidgetForResult(BattleEndLogic.ExitResult result)`

**Purpose:** Constructs a new warning widget for result entity and returns it to the caller.

```csharp
// Obtain an instance of BasicMissionHandler from the subsystem API first
BasicMissionHandler basicMissionHandler = ...;
basicMissionHandler.CreateWarningWidgetForResult(result);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<BasicMissionHandler>();
```

## See Also

- [Area Index](../)
- [BattleEndLogic — supplies the `ExitResult` this dialog is built from](../BattleEndLogic)
- [MBCommon — the pause/un-pause pair it drives](../MBCommon)
- [中文页面](../../../../zh/api/mission-ext/BasicMissionHandler)