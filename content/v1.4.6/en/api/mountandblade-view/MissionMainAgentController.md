---
title: "MissionMainAgentController"
description: "MissionMainAgentController: a public class in TaleWorlds.MountAndBlade.View, inheriting MissionView; 27 exposed members (15 methods, 6 properties, 0 fields). Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionMainAgentController.cs."
---
# MissionMainAgentController

**Namespace:** `TaleWorlds.MountAndBlade.View.MissionViews`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class MissionMainAgentController : MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionMainAgentController.cs`

## Overview

MissionMainAgentController lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionMainAgentController.cs. It is a public class, implementing/inheriting MissionView; the inheritance chain is MissionMainAgentController → MissionView → MissionBehavior. It exposes 27 public/protected members: 15 methods, 6 properties, 2 events, 1 constructors, 3 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionMainAgentController is a top-level type in TaleWorlds.MountAndBlade.View, namespace differing from (TaleWorlds.MountAndBlade.View.MissionViews) the module directory; inheritance chain MissionMainAgentController → MissionView → MissionBehavior. The surface is method-led (methods 15/27, properties 6/27), so it mostly exposes operations. MissionBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionMainAgentController.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnLockedAgentChanged;` | `public event MissionMainAgentController.OnLockedAgentChangedDelegate OnLockedAgentChanged;` | event |
| `OnPotentialLockedAgentChanged;` | `public event MissionMainAgentController.OnPotentialLockedAgentChangedDelegate OnPotentialLockedAgentChanged;` | event |
| `IsDisabled` | `public bool IsDisabled` | property |
| `CustomLookDir` | `public Vec3 CustomLookDir` | property |
| `IsPlayerAiming` | `public bool IsPlayerAiming` | property |
| `LockedAgent` | `public Agent LockedAgent` | property |
| `PotentialLockTargetAgent` | `public Agent PotentialLockTargetAgent` | property |
| `MissionMainAgentController` | `public MissionMainAgentController()` | constructor |
| `EarlyStart` | `public override void EarlyStart()` | method |
| `OnMissionScreenFinalize` | `public override void OnMissionScreenFinalize()` | method |
| `IsReady` | `public override bool IsReady()` | method |
| `OnPreMissionTick` | `public override void OnPreMissionTick(float dt)` | method |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)` | method |
| `OnAgentDeleted` | `public override void OnAgentDeleted(Agent affectedAgent)` | method |
| `OnClearScene` | `public override void OnClearScene()` | method |
| `BreakAgentVisualsInvulnerability` | `public void BreakAgentVisualsInvulnerability()` | method |
| `IsThereAgentAction` | `public override bool IsThereAgentAction(Agent userAgent, Agent otherAgent)` | method |
| `Disable` | `public void Disable()` | method |
| `Enable` | `public void Enable()` | method |
| `OnWeaponUsageToggleRequested` | `public void OnWeaponUsageToggleRequested()` | method |
| `AddOverrideControlsForFrame` | `public void AddOverrideControlsForFrame(MissionMainAgentController.OverrideMainAgentControlFlag overrideFlag)` | method |
| `OverrideMainAgentControlFlag` | `public enum OverrideMainAgentControlFlag` | property |
| `OnLockedAgentChangedDelegate` | `public delegate void OnLockedAgentChangedDelegate(Agent newAgent);` | method |
| `OnPotentialLockedAgentChangedDelegate` | `public delegate void OnPotentialLockedAgentChangedDelegate(Agent newPotentialAgent);` | method |
| `OverrideMainAgentControlFlag` | `public enum OverrideMainAgentControlFlag` | nested type |
| `OnLockedAgentChangedDelegate` | `public delegate void OnLockedAgentChangedDelegate(Agent newAgent)` | nested type |
| `OnPotentialLockedAgentChangedDelegate` | `public delegate void OnPotentialLockedAgentChangedDelegate(Agent newPotentialAgent)` | nested type |

## See Also

- [↑ mountandblade-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MissionView](../MissionView)
- [same namespace MissionAgentContourControllerView](../MissionAgentContourControllerView)
- [same namespace MissionAgentLabelView](../MissionAgentLabelView)
- [same namespace MissionAgentStatusUIHandler](../MissionAgentStatusUIHandler)
- [same namespace MissionBattleUIBaseView](../MissionBattleUIBaseView)
