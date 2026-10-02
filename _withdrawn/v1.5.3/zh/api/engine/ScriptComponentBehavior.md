---
title: "ScriptComponentBehavior"
description: "ScriptComponentBehavior 的自动生成类参考。"
---
# ScriptComponentBehavior

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public abstract class ScriptComponentBehavior : DotNetObject `
**Base:** DotNetObject
**Source:** TaleWorlds.Engine/ScriptComponentBehavior.cs

## 概述

`ScriptComponentBehavior` 的自动生成类参考页面。声明来自 `TaleWorlds.Engine/ScriptComponentBehavior.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### InvalidateWeakPointersIfValid
`protected void InvalidateWeakPointersIfValid() `

### SetScriptComponentToTick
`public void SetScriptComponentToTick(ScriptComponentBehavior.TickRequirement tickReq) `

### SetScriptComponentToTickMT
`public void SetScriptComponentToTickMT(ScriptComponentBehavior.TickRequirement value) `

### SetScene
`protected internal virtual void SetScene(Scene scene) `

### OnInit
`protected internal virtual void OnInit() `

### HandleOnRemoved
`protected internal void HandleOnRemoved(int removeReason) `

### OnRemoved
`protected virtual void OnRemoved(int removeReason) `

### GetTickRequirement
`public virtual ScriptComponentBehavior.TickRequirement GetTickRequirement() `

### CanPhysicsCollideBetweenTwoEntities
`protected internal virtual bool CanPhysicsCollideBetweenTwoEntities(WeakGameEntity myEntity,BodyFlags myEntityBodyFlags,WeakGameEntity otherEntity,BodyFlags otherEntityBodyFlags) `

### OnFixedTick
`protected internal virtual void OnFixedTick(float fixedDt) `

### OnParallelFixedTick
`protected internal virtual void OnParallelFixedTick(float fixedDt) `

### OnTick
`protected internal virtual void OnTick(float dt) `

### OnTickParallel
`protected internal virtual void OnTickParallel(float dt) `

### OnTickParallel2
`protected internal virtual void OnTickParallel2(float dt) `

### OnTickParallel3
`protected internal virtual void OnTickParallel3(float dt) `

### OnTickOccasionally
`protected internal virtual void OnTickOccasionally(float currentFrameDeltaTime) `

### OnPreInit
`protected internal virtual void OnPreInit() `

### OnEditorInit
`protected internal virtual void OnEditorInit() `

### OnEditorTick
`protected internal virtual void OnEditorTick(float dt) `

### OnEditorValidate
`protected internal virtual void OnEditorValidate() `

### IsOnlyVisual
`protected internal virtual bool IsOnlyVisual() `

### MovesEntity
`protected internal virtual bool MovesEntity() `

### DisablesOroCreation
`protected internal virtual bool DisablesOroCreation() `

### OnEditorVariableChanged
`protected internal virtual void OnEditorVariableChanged(string variableName) `

### SkeletonPostIntegrateCallback
`protected internal virtual bool SkeletonPostIntegrateCallback(AnimResult animResult) `

### OnSceneSave
`protected internal virtual void OnSceneSave(string saveFolder) `

### OnCheckForProblems
`protected internal virtual bool OnCheckForProblems() `

### OnSaveAsPrefab
`protected internal virtual void OnSaveAsPrefab() `

### OnTerrainReload
`protected internal virtual void OnTerrainReload(int step) `

### OnPhysicsCollisionAux
`protected internal void OnPhysicsCollisionAux(ref PhysicsContact contact,UIntPtr entity0,UIntPtr entity1) `

### OnPhysicsCollision
`protected internal virtual void OnPhysicsCollision(ref PhysicsContact contact,WeakGameEntity entity0,WeakGameEntity entity1) `

### OnEditModeVisibilityChanged
`protected internal virtual void OnEditModeVisibilityChanged(bool currentVisibility) `

### OnBoundingBoxValidate
`protected internal virtual void OnBoundingBoxValidate() `

### OnDynamicNavmeshVertexUpdate
`protected internal virtual void OnDynamicNavmeshVertexUpdate() `

## 参见

- [本区域目录](../)
- [API 参考](../../)
