---
title: "MissionGauntletKillNotificationSingleplayerUIHandler"
description: "MissionGauntletKillNotificationSingleplayerUIHandler — class in TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer. 13 public members (0 static)."
---

<!-- v147-skeleton -->
# MissionGauntletKillNotificationSingleplayerUIHandler

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer`  
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`  
**Type:** `public class MissionGauntletKillNotificationSingleplayerUIHandler : MissionBattleUIBaseView`  
**Base:** `MissionBattleUIBaseView`  
**Source:** `TaleWorlds.MountAndBlade.GauntletUI/Mission/Singleplayer/MissionGauntletKillNotificationSingleplayerUIHandler.cs`

## Overview

`MissionGauntletKillNotificationSingleplayerUIHandler` is a handler or listener: it receives a notification from a publisher, filters or adapts it, and forwards it. The data it reacts to is owned by the publisher.

It extends MissionBattleUIBaseView, so the members it does not redeclare are inherited from there. 2 of its own members are properties, which is where most reads and writes land.

## Mental Model

Read a handler as a filter sitting between a publisher and its consumers. Keep the adaptation logic here and the decision logic in the system that owns the state, so the same notification can feed several consumers without being copied.

Registration is the fragile part: subscribe exactly once, unsubscribe when the owning object dies, and assume the publisher does not check whether anyone is listening.

Concretely, the surface breaks down like this:

- **Instance members** (12): `OnMissionScreenInitialize`, `OnMissionScreenFinalize`, `OnCreateView`, `OnDestroyView`, `OnSuspendView`, `OnResumeView`, ….
- **Extension points** (10): `OnMissionScreenInitialize`, `OnMissionScreenFinalize`, `OnCreateView`, `OnDestroyView`, `OnSuspendView`, `OnResumeView`, ….
- **Data and constants** (1): `_dataSource`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnAgentRemoved` | method (override) | Overrides the base member. Takes 4 arguments: `Agent affectedAgent`, `Agent affectorAgent`, `AgentState agentState`, `KillingBlow killingBlow`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMissionScreenFinalize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMissionScreenInitialize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMissionScreenTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnPhotoModeActivated` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnPhotoModeDeactivated` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnCreateView` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnDestroyView` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnResumeView` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnSuspendView` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `_isGeneralFeedEnabled` | property | Protected — for subclasses only `bool` property. Read it for current state; a declared setter writes that state in place. |
| `_isPersonalFeedEnabled` | property | Protected — for subclasses only `bool` property. Read it for current state; a declared setter writes that state in place. |
| `_dataSource` | field | Protected — for subclasses only `SPKillFeedVM` field — direct storage with no validation or notification. |

## Usage Example

```csharp
// MissionGauntletKillNotificationSingleplayerUIHandler is read through its properties:
//   _isGeneralFeedEnabled : bool
```

## Risks and Boundaries

- Missing unsubscribe is the dominant leak in this pattern.
- Handlers run inside the publisher’s call stack, so long or throwing handlers affect the publisher.
- Notifications can arrive during load, teardown and screen changes, when the referenced state does not exist yet.
- 10 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.GauntletUI/Mission/Singleplayer/MissionGauntletKillNotificationSingleplayerUIHandler.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [MissionBattleUIBaseView](../MissionBattleUIBaseView/) — `TaleWorlds.MountAndBlade.View.MissionViews`.
- [SPKillFeedVM](../../viewmodel/SPKillFeedVM/) — `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed`.
- [UIContext](../../gui/UIContext/) — `TaleWorlds.GauntletUI`.

Section: [api/mission-ext/](../) — the other types in this bucket.
