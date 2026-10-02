---
title: "MissionGauntletOrderOfBattleUIHandler"
description: "MissionGauntletOrderOfBattleUIHandler — class in TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer. 11 public members (0 static)."
---

<!-- v147-skeleton -->
# MissionGauntletOrderOfBattleUIHandler

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer`  
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`  
**Type:** `public class MissionGauntletOrderOfBattleUIHandler : MissionView`  
**Base:** `MissionView`  
**Source:** `TaleWorlds.MountAndBlade.GauntletUI/Mission/Singleplayer/MissionGauntletOrderOfBattleUIHandler.cs`

## Overview

`MissionGauntletOrderOfBattleUIHandler` is a handler or listener: it receives a notification from a publisher, filters or adapts it, and forwards it. The data it reacts to is owned by the publisher.

It extends MissionView, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Read a handler as a filter sitting between a publisher and its consumers. Keep the adaptation logic here and the decision logic in the system that owns the state, so the same notification can feed several consumers without being copied.

Registration is the fragile part: subscribe exactly once, unsubscribe when the owning object dies, and assume the publisher does not check whether anyone is listening.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `MissionGauntletOrderOfBattleUIHandler`.
- **Instance members** (10): `OnMissionScreenInitialize`, `IsReady`, `OnMissionTick`, `OnMissionScreenTick`, `OnMissionScreenFinalize`, `OnEscape`, ….
- **Extension points** (10): `OnMissionScreenInitialize`, `IsReady`, `OnMissionTick`, `OnMissionScreenTick`, `OnMissionScreenFinalize`, `OnEscape`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `IsOpeningEscapeMenuOnFocusChangeAllowed` | method (override) | Overrides the base member. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsReady` | method (override) | Overrides the base member. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `OnDeploymentFinished` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnEscape` | method (override) | Overrides the base member. Takes no arguments. Returns `bool`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMissionScreenFinalize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMissionScreenInitialize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMissionScreenTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMissionTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnPhotoModeActivated` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnPhotoModeDeactivated` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `MissionGauntletOrderOfBattleUIHandler` | ctor | Instance entry point. Takes 1 argument: `OrderOfBattleVM dataSource`. Returns ``. |

- Constructed as `public MissionGauntletOrderOfBattleUIHandler(OrderOfBattleVM dataSource)`.

## Usage Example

```csharp
var missionGauntletOrderOfBattleUIHandler = new MissionGauntletOrderOfBattleUIHandler(dataSource);
missionGauntletOrderOfBattleUIHandler.OnMissionScreenInitialize();
```

## Risks and Boundaries

- Missing unsubscribe is the dominant leak in this pattern.
- Handlers run inside the publisher’s call stack, so long or throwing handlers affect the publisher.
- Notifications can arrive during load, teardown and screen changes, when the referenced state does not exist yet.
- 10 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.GauntletUI/Mission/Singleplayer/MissionGauntletOrderOfBattleUIHandler.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [OrderOfBattleHotKeyCategory](../OrderOfBattleHotKeyCategory/) — `TaleWorlds.MountAndBlade.GameKeyCategory`.
- [OrderTroopPlacer](../OrderTroopPlacer/) — `TaleWorlds.MountAndBlade.View.MissionViews.Order`.
- [SceneLayer](../../engine/SceneLayer/) — `TaleWorlds.Engine.Screens`.
- [InputRestrictions](../../gui/InputRestrictions/) — `TaleWorlds.ScreenSystem`.
- [UISoundsHelper](../UISoundsHelper/) — `TaleWorlds.MountAndBlade.View`.
- [UIContext](../../gui/UIContext/) — `TaleWorlds.GauntletUI`.
- [GauntletMovieIdentifier](../../engine/GauntletMovieIdentifier/) — `TaleWorlds.Engine.GauntletUI`.
- [SpriteCategory](../../gui/SpriteCategory/) — `TaleWorlds.TwoDimension`.

Section: [api/mission-ext/](../) — the other types in this bucket.
