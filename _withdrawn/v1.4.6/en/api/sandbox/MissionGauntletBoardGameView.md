---
title: "MissionGauntletBoardGameView"
description: "MissionGauntletBoardGameView: a public class in SandBox.GauntletUI.Missions, inheriting MissionView, IBoardGameHandler; 10 exposed members (7 methods, 2 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.GauntletUI/Missions/MissionGauntletBoardGameView.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionGauntletBoardGameView

**Namespace:** `SandBox.GauntletUI.Missions`
**Module:** `SandBox.GauntletUI`
**Type:** `public class MissionGauntletBoardGameView : MissionView, IBoardGameHandler`
**File:** `SandBox.GauntletUI/Missions/MissionGauntletBoardGameView.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

MissionGauntletBoardGameView lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/Missions/MissionGauntletBoardGameView.cs. It is a public class, implementing/inheriting MissionView, IBoardGameHandler; the inheritance chain is MissionGauntletBoardGameView → MissionView → MissionBehavior → IMissionBehavior. It exposes 10 public/protected members: 7 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionGauntletBoardGameView lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.GauntletUI.Missions`, inheritance chain MissionGauntletBoardGameView → MissionView → MissionBehavior → IMissionBehavior. The surface is method-led (methods 7/10, properties 2/10), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/Missions/MissionGauntletBoardGameView.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `_missionBoardGameHandler` | `public MissionBoardGameLogic _missionBoardGameHandler` | property |
| `Camera` | `public Camera Camera` | property |
| `MissionGauntletBoardGameView` | `public MissionGauntletBoardGameView()` | constructor |
| `OnMissionScreenInitialize` | `public override void OnMissionScreenInitialize()` | method |
| `OnMissionScreenActivate` | `public override void OnMissionScreenActivate()` | method |
| `OnEscape` | `public override bool OnEscape()` | method |
| `OnMissionScreenTick` | `public override void OnMissionScreenTick(float dt)` | method |
| `OnMissionScreenFinalize` | `public override void OnMissionScreenFinalize()` | method |
| `OnPhotoModeActivated` | `public override void OnPhotoModeActivated()` | method |
| `OnPhotoModeDeactivated` | `public override void OnPhotoModeDeactivated()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionView](../../mission-ext/MissionView/)
- [base / interface IBoardGameHandler](../../mission-ext/IBoardGameHandler/)
- [same namespace MissionGauntletAgentAlarmStateView](../MissionGauntletAgentAlarmStateView/)
- [same namespace MissionGauntletArenaPracticeFightView](../MissionGauntletArenaPracticeFightView/)
- [same namespace MissionGauntletBarterView](../MissionGauntletBarterView/)
- [same namespace MissionGauntletCheatView](../MissionGauntletCheatView/)
