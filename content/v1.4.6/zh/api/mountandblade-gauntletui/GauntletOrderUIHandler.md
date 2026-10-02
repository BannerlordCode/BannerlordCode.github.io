---
title: "GauntletOrderUIHandler"
description: "GauntletOrderUIHandler：TaleWorlds.MountAndBlade.GauntletUI 的 public 类，继承 MissionView；公开成员 34 个（方法 23、属性 8、字段 2）。源文件 TaleWorlds.MountAndBlade.GauntletUI/GauntletOrderUIHandler.cs。"
---
# GauntletOrderUIHandler

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public abstract class GauntletOrderUIHandler : MissionView`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/GauntletOrderUIHandler.cs`

## 概述

GauntletOrderUIHandler 位于 TaleWorlds.MountAndBlade.GauntletUI 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI/GauntletOrderUIHandler.cs。它是一个 public 类（abstract），实现/继承 MissionView，继承链为 GauntletOrderUIHandler → MissionView。public/protected 成员共 34 个：23 方法、8 属性、2 字段、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GauntletOrderUIHandler 是 TaleWorlds.MountAndBlade.GauntletUI 的顶层类型，命名空间与模块目录一致，继承链 GauntletOrderUIHandler → MissionView。成员构成以方法为主（方法 23/34，属性 8/34），对外主要以操作入口暴露。继承链上的 MissionView 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI/GauntletOrderUIHandler.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsDeployment` | `public abstract bool IsDeployment` | 属性 |
| `IsSiegeDeployment` | `public abstract bool IsSiegeDeployment` | 属性 |
| `IsValidForTick` | `public abstract bool IsValidForTick` | 属性 |
| `CursorState` | `public MissionOrderVM.CursorStates CursorState` | 属性 |
| `_minHoldTimeForActivation` | `protected float _minHoldTimeForActivation` | 属性 |
| `IsOrderMenuActive` | `public bool IsOrderMenuActive` | 属性 |
| `IsAnyOrderSetActive` | `public bool IsAnyOrderSetActive` | 属性 |
| `IsViewCreated` | `public bool IsViewCreated` | 属性 |
| `GauntletOrderUIHandler` | `public GauntletOrderUIHandler()` | 构造函数 |
| `OnTransferFinished` | `protected abstract void OnTransferFinished();` | 方法 |
| `SetLayerEnabled` | `protected abstract void SetLayerEnabled(bool isEnabled);` | 方法 |
| `SetSuspendTroopPlacer` | `protected virtual void SetSuspendTroopPlacer(bool value)` | 方法 |
| `SelectFormationAtIndex` | `public virtual void SelectFormationAtIndex(int index)` | 方法 |
| `DeselectFormationAtIndex` | `public virtual void DeselectFormationAtIndex(int index)` | 方法 |
| `GetFocusedOrderableObject` | `protected virtual IOrderable GetFocusedOrderableObject()` | 方法 |
| `GetVisualOrderExecutionParameters` | `protected VisualOrderExecutionParameters GetVisualOrderExecutionParameters()` | 方法 |
| `OnMissionScreenActivate` | `public override void OnMissionScreenActivate()` | 方法 |
| `OnMissionScreenDeactivate` | `public override void OnMissionScreenDeactivate()` | 方法 |
| `OnMissionScreenTick` | `public override void OnMissionScreenTick(float dt)` | 方法 |
| `TickInput` | `protected virtual void TickInput(float dt)` | 方法 |
| `GetChargeOrder` | `protected virtual OrderItemVM GetChargeOrder()` | 方法 |
| `OnAgentBuild` | `public override void OnAgentBuild(Agent agent, Banner banner)` | 方法 |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)` | 方法 |
| `OnEscape` | `public override bool OnEscape()` | 方法 |
| `IsReady` | `public override bool IsReady()` | 方法 |
| `OnActivateToggleOrder` | `public void OnActivateToggleOrder()` | 方法 |
| `OnDeactivateToggleOrder` | `public void OnDeactivateToggleOrder()` | 方法 |
| `OnBeforeOrder` | `protected void OnBeforeOrder()` | 方法 |
| `TickOrderFlag` | `protected void TickOrderFlag(float dt, bool forceUpdate)` | 方法 |
| `ToggleScreenRotation` | `protected void ToggleScreenRotation(bool isLocked)` | 方法 |
| `OnSuspendView` | `protected override void OnSuspendView()` | 方法 |
| `OnResumeView` | `protected override void OnResumeView()` | 方法 |
| `_radialOrderMovieName` | `protected string _radialOrderMovieName` | 字段 |
| `_barOrderMovieName` | `protected string _barOrderMovieName` | 字段 |

## 参见

- [↑ mountandblade-gauntletui 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ChatLogMessageManager](../ChatLogMessageManager)
- [同命名空间 GamepadCursorViewModel](../GamepadCursorViewModel)
- [同命名空间 GauntletBannerBuilderScreen](../GauntletBannerBuilderScreen)
- [同命名空间 GauntletCameraFadeView](../GauntletCameraFadeView)
