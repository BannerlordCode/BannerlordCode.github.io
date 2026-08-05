---
title: "BasicMissionHandler"
description: "The default MissionLogic that presents and resolves retreat or siege-surrender confirmation in v1.4.5 missions."
---
# BasicMissionHandler

**Namespace:** `TaleWorlds.MountAndBlade.Source.Missions.Handlers`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public class BasicMissionHandler : MissionLogic`  
**Base:** [`MissionLogic`](../MissionLogic)  
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Source.Missions.Handlers/BasicMissionHandler.cs`

## One-line responsibility

`BasicMissionHandler` owns the default mission-level retreat/surrender confirmation: it pauses the appropriate game side, shows an `InquiryData` prompt, notifies every mission logic on acceptance, and then requests retreat or surrender.

## Mental model

This is a default `MissionLogic`, not a battle-result calculator and not a replacement for [`BattleEndLogic`](../BattleEndLogic). When `MissionState` opens a mission with its default behaviors enabled, it inserts a `BasicMissionHandler` alongside the network, casualty, and AI mission logics. The handler starts with `IsWarningWidgetOpened = false` during `OnBehaviorInitialize` and then waits for a UI/controller to pass a `BattleEndLogic.ExitResult` to `CreateWarningWidgetForResult`.

The handler has one transient decision bit, `_isSurrender`. It is true only for `SurrenderSiege`; every other result passed to `CreateWarningWidgetForResult` selects the retreat prompt. Acceptance copies the current mission-logic list, calls `OnBattleEnded()` on that snapshot, closes the prompt, and then calls `Mission.SurrenderMission()` or `Mission.RetreatMission()`. Cancellation only closes the prompt. The class does not save the decision and does not itself decide whether the battle is winnable.

## When to use and when not to

**Use it when:**

- A mission UI already owns the exit decision and needs the game's standard retreat/surrender inquiry.
- You need to inspect whether the standard inquiry is currently open through `Mission.GetMissionBehavior<BasicMissionHandler>()`.
- You are writing a mission behavior that must receive the existing `OnBattleEnded()` notification before retreat or surrender cleanup.

**Do not use it when:**

- You need to calculate the battle result. Read or coordinate with [`BattleEndLogic`](../BattleEndLogic).
- You need a custom confirmation UI, custom text, or a different end action. Own that UI and explicit action in the mission module rather than opening this prompt and then adding a second transition.
- The mission was opened with `addDefaultMissionBehaviors = false`. In that case the default list does not contain this handler; add an intentional replacement behavior instead of assuming a non-null lookup.
- The mission is null, ending, or already removed. This class has no defensive `Mission.Current` check at the point where the acceptance callback reaches the mission transition.

## Dependency graph

**Upstream:**

- [`MissionState`](../../campaign-ext/MissionState) adds the handler through its default mission-behavior list when `OpenNew` keeps default behaviors enabled.
- [`CustomBattleScoreboardVM`](../../viewmodel/CustomBattleScoreboardVM) and [`SPScoreboardVM`](../../campaign-ext/SPScoreboardVM) obtain it from their current [`Mission`](../../mission/Mission) and call the public prompt method.
- [`BattleEndLogic`](../BattleEndLogic) supplies the `ExitResult` meaning used by the caller to choose whether confirmation is needed.

**Downstream:**

- [`InformationManager`](../../core-extra/InformationManager) displays the [`InquiryData`](../../core-extra/InquiryData) prompt.
- `MBCommon.PauseGameEngine()` and `GameNetwork.IsClient` determine whether the local game engine is paused.
- Every [`MissionBehavior`](../../mission/MissionBehavior) in the mission receives `OnBattleEnded()` before the final transition.
- [`Mission`](../../mission/Mission) receives `RetreatMission()` or `SurrenderMission()` and owns the ensuing mission-end lifecycle.

## Real acquisition and call path

The standard Custom Battle scoreboard obtains the handler from the active mission and calls it only while confirmation is needed. This is the source-backed pattern in `CustomBattleScoreboardVM.OnExitBattle`:

```csharp
public void OnExitBattle()
{
    BasicMissionHandler missionBehavior =
        _mission.GetMissionBehavior<BasicMissionHandler>();
    BattleEndLogic.ExitResult exitResult =
        (!_mission.MissionEnded)
            ? BattleEndLogic.ExitResult.NeedsPlayerConfirmation
            : BattleEndLogic.ExitResult.True;
    if (exitResult == BattleEndLogic.ExitResult.NeedsPlayerConfirmation)
    {
        OnToggle(false);
        missionBehavior.CreateWarningWidgetForResult(exitResult);
    }
    else
    {
        _mission.EndMission();
    }
}
```

The single-player scoreboard follows the same acquisition boundary after it queries `BattleEndLogic.TryExit()`. A mod should copy the ownership rule, not the private popup callbacks: get the handler from the active Mission, null-check it when default behaviors may be disabled, and do not call the method while another inquiry is open.

## Key members and timing

### OnBehaviorInitialize

`public override void OnBehaviorInitialize()`

Calls the base lifecycle hook and resets `IsWarningWidgetOpened` to `false`. It is called by the Mission behavior initialization phase, not by a mod's constructor or by the UI when it first appears.

```csharp
public override void OnBehaviorInitialize()
{
    base.OnBehaviorInitialize();
    IsWarningWidgetOpened = false;
}
```

### IsWarningWidgetOpened

`public bool IsWarningWidgetOpened { get; private set; }`

Reports whether this handler has opened its standard inquiry. The setter is private: callers can observe the state but cannot close the handler by assigning `false`. The flag becomes true after `ShowInquiry` and returns to false through the private cancel/accept close path.

```csharp
BasicMissionHandler handler =
    Mission.Current?.GetMissionBehavior<BasicMissionHandler>();
bool promptIsOpen = handler?.IsWarningWidgetOpened ?? false;
```

Read it on the mission/UI path before presenting another exit prompt. It is transient UI state, not a durable battle outcome.

### CreateWarningWidgetForResult

`public void CreateWarningWidgetForResult(BattleEndLogic.ExitResult result)`

Selects the prompt and opens it through `InformationManager.ShowInquiry`. On non-client sides it pauses the game engine first; it stores whether the result is exactly `SurrenderSiege`; it uses surrender text only for that value and retreat text for every other value; then it marks the inquiry open. `pauseGameActiveState` is passed as `true` to the inquiry.

```csharp
BasicMissionHandler handler =
    Mission.Current?.GetMissionBehavior<BasicMissionHandler>();
if (handler != null && !handler.IsWarningWidgetOpened)
{
    handler.CreateWarningWidgetForResult(
        BattleEndLogic.ExitResult.NeedsPlayerConfirmation);
}
```

The normal caller should pass a result that it already obtained from `BattleEndLogic`; do not treat an arbitrary enum value as a custom popup type. Calling with `SurrenderSiege` selects the surrender question, while `NeedsPlayerConfirmation` selects retreat text in this implementation.

## Internal resolution flow

The accept and cancel callbacks are private `InquiryData` callbacks, not extension points. Both first close the selection widget. Closing clears `IsWarningWidgetOpened`; on non-client sides it also calls `MBCommon.UnPauseGameEngine()`.

On acceptance, the handler snapshots `Mission.MissionLogics` with `ToArray()` and invokes `OnBattleEnded()` on every entry before requesting the final transition:

```csharp
MissionLogic[] logics = Mission.MissionLogics.ToArray();
for (int i = 0; i < logics.Length; i++)
{
    logics[i].OnBattleEnded();
}

if (_isSurrender)
{
    Mission.SurrenderMission();
}
else
{
    Mission.RetreatMission();
}
```

The snapshot matters: mission logic callbacks can affect the live collection, but this loop does not enumerate a collection that is being modified. A custom behavior that implements `OnBattleEnded()` must be prepared to run before the Mission transition and must not assume that the Mission remains active afterward.

## Risks and crash boundaries

- `MissionState` adds this class only when default mission behaviors are enabled. `GetMissionBehavior<BasicMissionHandler>()` can return null for a deliberately customized mission; dereferencing it from a scoreboard callback will fail.
- `CreateWarningWidgetForResult` does not guard against a second prompt. Check `IsWarningWidgetOpened` in custom callers, or two inquiries can compete over the same Mission/UI state.
- Only `SurrenderSiege` selects surrender text and `Mission.SurrenderMission()`. `NeedsPlayerConfirmation`, `True`, and all other values follow the retreat branch; do not pass a value expecting different semantics.
- The non-client branch pauses and later unpauses the game engine. Client code still displays the inquiry but does not call the engine pause APIs, so UI and network ownership must not be inferred from the flag alone.
- Acceptance calls every mission logic's `OnBattleEnded()` before the transition. Releasing an Agent or native entity twice in that callback can invalidate later mission cleanup.
- `RetreatMission()` and `SurrenderMission()` initiate the Mission end path. Do not call `EndMission()` again from a handler that accepts this prompt, and do not retain the Mission after its end callbacks.
- `IsWarningWidgetOpened` and `_isSurrender` are runtime state only. They are not save fields and must not be used as a campaign or save-system contract.

## See also and reciprocal navigation

- ↑ Parent: [Mission-ext module index](../)
- ↔ Base and host: [MissionLogic](../MissionLogic) · [Mission](../../mission/Mission) · [MissionState](../../campaign-ext/MissionState)
- Exit source: [BattleEndLogic](../BattleEndLogic)
- UI callers: [CustomBattleScoreboardVM](../../viewmodel/CustomBattleScoreboardVM) · [SPScoreboardVM](../../campaign-ext/SPScoreboardVM)
- Prompt and display: [InquiryData](../../core-extra/InquiryData) · [InformationManager](../../core-extra/InformationManager) · [GameNetwork](../GameNetwork)
- Related object lifecycle: [MissionObject](../MissionObject) · [BannerlordMissions](../BannerlordMissions)
- Documentation contract: [Doc Contract](../../../architecture/doc-contract)
- 中文/English: [BasicMissionHandler](../../../../zh/api/mission-ext/BasicMissionHandler)
