---
title: "GauntletOrderUIHandler"
description: "GauntletOrderUIHandler 的自动生成类参考。"
---
# GauntletOrderUIHandler

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI
**Module:** TaleWorlds.MountAndBlade.GauntletUI
**Type:** `public abstract class GauntletOrderUIHandler : MissionView `
**Base:** MissionView
**Source:** TaleWorlds.MountAndBlade.GauntletUI/GauntletOrderUIHandler.cs

## 概述

`GauntletOrderUIHandler` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade.GauntletUI/GauntletOrderUIHandler.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### OnTransferFinished
`protected abstract void OnTransferFinished()`

### SetLayerEnabled
`protected abstract void SetLayerEnabled(bool isEnabled)`

### SetSuspendTroopPlacer
`protected virtual void SetSuspendTroopPlacer(bool value) `

### SelectFormationAtIndex
`public virtual void SelectFormationAtIndex(int index) `

### DeselectFormationAtIndex
`public virtual void DeselectFormationAtIndex(int index) `

### GetFocusedOrderableObject
`protected virtual IOrderable GetFocusedOrderableObject() `

### GetVisualOrderExecutionParameters
`protected VisualOrderExecutionParameters GetVisualOrderExecutionParameters() `

### OnMissionScreenActivate
`public override void OnMissionScreenActivate() `

### OnMissionScreenDeactivate
`public override void OnMissionScreenDeactivate() `

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize() `

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt) `

### TickInput
`protected virtual void TickInput(float dt) `

### GetChargeOrder
`protected virtual OrderItemVM GetChargeOrder() `

### OnAgentBuild
`public override void OnAgentBuild(Agent agent,Banner banner) `

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent,Agent affectorAgent,AgentState agentState,KillingBlow killingBlow) `

### OnEscape
`public override bool OnEscape() `

### IsReady
`public override bool IsReady() `

### OnActivateToggleOrder
`public void OnActivateToggleOrder() `

### OnDeactivateToggleOrder
`public void OnDeactivateToggleOrder() `

### OnBeforeOrder
`protected void OnBeforeOrder() `

### TickOrderFlag
`protected void TickOrderFlag(float dt,bool forceUpdate) `

### ToggleScreenRotation
`protected void ToggleScreenRotation(bool isLocked) `

### OnSuspendView
`protected override void OnSuspendView() `

### OnResumeView
`protected override void OnResumeView() `

## 参见

- [本区域目录](../)
- [API 参考](../../)
