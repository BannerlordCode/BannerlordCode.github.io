---
title: "AnimationPoint"
description: "AnimationPoint 的自动生成类参考。"
---
# AnimationPoint

**Namespace:** SandBox.Objects.AnimationPoints
**Module:** SandBox
**Type:** `public class AnimationPoint : StandingPoint `
**Base:** StandingPoint
**Source:** SandBox/Objects/AnimationPoints/AnimationPoint.cs

## 概述

`AnimationPoint` 的自动生成类参考页面。声明来自 `SandBox/Objects/AnimationPoints/AnimationPoint.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### OnEditModeVisibilityChanged
`protected override void OnEditModeVisibilityChanged(bool currentVisibility) `

### OnEditorTick
`protected override void OnEditorTick(float dt) `

### OnEditorInit
`protected override void OnEditorInit() `

### OnRemoved
`protected override void OnRemoved(int removeReason) `

### ResetAnimations
`protected void ResetAnimations() `

### OnEditorVariableChanged
`protected override void OnEditorVariableChanged(string variableName) `

### RequestResync
`public void RequestResync() `

### AfterMissionStart
`public override void AfterMissionStart() `

### ShouldUpdateOnEditorVariableChanged
`protected virtual bool ShouldUpdateOnEditorVariableChanged(string variableName) `

### ClearAssignedItems
`protected void ClearAssignedItems() `

### AssignItemToBone
`protected void AssignItemToBone(AnimationPoint.ItemForBone newItem) `

### IsDisabledForAgent
`public override bool IsDisabledForAgent(Agent agent) `

### OnInit
`protected override void OnInit() `

### SetActionCodes
`protected virtual void SetActionCodes() `

### DoesActionTypeStopUsingGameObject
`protected override bool DoesActionTypeStopUsingGameObject(Agent.ActionCodeType actionType) `

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement() `

### OnTick
`protected override void OnTick(float dt) `

### GetUserFrameForAgent
`public override WorldFrame GetUserFrameForAgent(Agent agent) `

### IsUsableByAgent
`public override bool IsUsableByAgent(Agent userAgent) `

### OnUse
`public override void OnUse(Agent userAgent,sbyte agentBoneIndex) `

### OnUseStopped
`public override void OnUseStopped(Agent userAgent,bool isSuccessful,int preferenceIndex) `

### SimulateTick
`public override void SimulateTick(float dt) `

### HasAlternative
`public override bool HasAlternative() `

### GetRandomWaitInSeconds
`public float GetRandomWaitInSeconds() `

### GetAlternatives
`public List<AnimationPoint> GetAlternatives() `

### IsRotationCorrectDuringUsage
`public bool IsRotationCorrectDuringUsage() `

### CanAgentUseItem
`protected bool CanAgentUseItem(Agent agent) `

### AddItemsToAgent
`protected void AddItemsToAgent() `

### OnUserConversationStart
`public override void OnUserConversationStart() `

### OnUserConversationEnd
`public override void OnUserConversationEnd() `

### SetAgentItemsVisibility
`public void SetAgentItemsVisibility(bool isVisible) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
