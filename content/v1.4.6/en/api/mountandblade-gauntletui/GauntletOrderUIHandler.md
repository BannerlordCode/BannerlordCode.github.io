---
title: "GauntletOrderUIHandler"
description: "GauntletOrderUIHandler: a public class in TaleWorlds.MountAndBlade.GauntletUI, inheriting MissionView; 34 exposed members (23 methods, 8 properties, 2 fields). Source: TaleWorlds.MountAndBlade.GauntletUI/GauntletOrderUIHandler.cs."
---
# GauntletOrderUIHandler

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public abstract class GauntletOrderUIHandler : MissionView`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/GauntletOrderUIHandler.cs`

## Overview

GauntletOrderUIHandler lives in the TaleWorlds.MountAndBlade.GauntletUI module, source file TaleWorlds.MountAndBlade.GauntletUI/GauntletOrderUIHandler.cs. It is a public class (abstract), implementing/inheriting MissionView; the inheritance chain is GauntletOrderUIHandler → MissionView. It exposes 34 public/protected members: 23 methods, 8 properties, 2 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GauntletOrderUIHandler is a top-level type in TaleWorlds.MountAndBlade.GauntletUI, namespace matching the module directory; inheritance chain GauntletOrderUIHandler → MissionView. The surface is method-led (methods 23/34, properties 8/34), so it mostly exposes operations. MissionView on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI/GauntletOrderUIHandler.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsDeployment` | `public abstract bool IsDeployment` | property |
| `IsSiegeDeployment` | `public abstract bool IsSiegeDeployment` | property |
| `IsValidForTick` | `public abstract bool IsValidForTick` | property |
| `CursorState` | `public MissionOrderVM.CursorStates CursorState` | property |
| `_minHoldTimeForActivation` | `protected float _minHoldTimeForActivation` | property |
| `IsOrderMenuActive` | `public bool IsOrderMenuActive` | property |
| `IsAnyOrderSetActive` | `public bool IsAnyOrderSetActive` | property |
| `IsViewCreated` | `public bool IsViewCreated` | property |
| `GauntletOrderUIHandler` | `public GauntletOrderUIHandler()` | constructor |
| `OnTransferFinished` | `protected abstract void OnTransferFinished();` | method |
| `SetLayerEnabled` | `protected abstract void SetLayerEnabled(bool isEnabled);` | method |
| `SetSuspendTroopPlacer` | `protected virtual void SetSuspendTroopPlacer(bool value)` | method |
| `SelectFormationAtIndex` | `public virtual void SelectFormationAtIndex(int index)` | method |
| `DeselectFormationAtIndex` | `public virtual void DeselectFormationAtIndex(int index)` | method |
| `GetFocusedOrderableObject` | `protected virtual IOrderable GetFocusedOrderableObject()` | method |
| `GetVisualOrderExecutionParameters` | `protected VisualOrderExecutionParameters GetVisualOrderExecutionParameters()` | method |
| `OnMissionScreenActivate` | `public override void OnMissionScreenActivate()` | method |
| `OnMissionScreenDeactivate` | `public override void OnMissionScreenDeactivate()` | method |
| `OnMissionScreenTick` | `public override void OnMissionScreenTick(float dt)` | method |
| `TickInput` | `protected virtual void TickInput(float dt)` | method |
| `GetChargeOrder` | `protected virtual OrderItemVM GetChargeOrder()` | method |
| `OnAgentBuild` | `public override void OnAgentBuild(Agent agent, Banner banner)` | method |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)` | method |
| `OnEscape` | `public override bool OnEscape()` | method |
| `IsReady` | `public override bool IsReady()` | method |
| `OnActivateToggleOrder` | `public void OnActivateToggleOrder()` | method |
| `OnDeactivateToggleOrder` | `public void OnDeactivateToggleOrder()` | method |
| `OnBeforeOrder` | `protected void OnBeforeOrder()` | method |
| `TickOrderFlag` | `protected void TickOrderFlag(float dt, bool forceUpdate)` | method |
| `ToggleScreenRotation` | `protected void ToggleScreenRotation(bool isLocked)` | method |
| `OnSuspendView` | `protected override void OnSuspendView()` | method |
| `OnResumeView` | `protected override void OnResumeView()` | method |
| `_radialOrderMovieName` | `protected string _radialOrderMovieName` | field |
| `_barOrderMovieName` | `protected string _barOrderMovieName` | field |

## See Also

- [↑ mountandblade-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ChatLogMessageManager](../ChatLogMessageManager)
- [same namespace GamepadCursorViewModel](../GamepadCursorViewModel)
- [same namespace GauntletBannerBuilderScreen](../GauntletBannerBuilderScreen)
- [same namespace GauntletCameraFadeView](../GauntletCameraFadeView)
