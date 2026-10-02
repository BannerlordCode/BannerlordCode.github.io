---
title: "ScriptComponentBehavior"
description: "Auto-generated class reference for ScriptComponentBehavior."
---
# ScriptComponentBehavior

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public abstract class ScriptComponentBehavior : DotNetObject `
**Base:** DotNetObject
**Source:** TaleWorlds.Engine/ScriptComponentBehavior.cs

## Overview

Auto-generated stub for `ScriptComponentBehavior`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### InvalidateWeakPointersIfValid
`protected void InvalidateWeakPointersIfValid()`

### SetScriptComponentToTick
`public void SetScriptComponentToTick(ScriptComponentBehavior.TickRequirement tickReq)`

### SetScriptComponentToTickMT
`public void SetScriptComponentToTickMT(ScriptComponentBehavior.TickRequirement value)`

### SetScene
`protected internal virtual void SetScene(Scene scene)`

### OnInit
`protected internal virtual void OnInit()`

### HandleOnRemoved
`protected internal void HandleOnRemoved(int removeReason)`

### OnRemoved
`protected virtual void OnRemoved(int removeReason)`

### GetTickRequirement
`public virtual ScriptComponentBehavior.TickRequirement GetTickRequirement()`

### CanPhysicsCollideBetweenTwoEntities
`protected internal virtual bool CanPhysicsCollideBetweenTwoEntities(WeakGameEntity myEntity,BodyFlags myEntityBodyFlags,WeakGameEntity otherEntity,BodyFlags otherEntityBodyFlags)`

### OnFixedTick
`protected internal virtual void OnFixedTick(float fixedDt)`

### OnParallelFixedTick
`protected internal virtual void OnParallelFixedTick(float fixedDt)`

### OnTick
`protected internal virtual void OnTick(float dt)`

### OnTickParallel
`protected internal virtual void OnTickParallel(float dt)`

### OnTickParallel2
`protected internal virtual void OnTickParallel2(float dt)`

### OnTickParallel3
`protected internal virtual void OnTickParallel3(float dt)`

### OnTickOccasionally
`protected internal virtual void OnTickOccasionally(float currentFrameDeltaTime)`

### OnPreInit
`protected internal virtual void OnPreInit()`

### OnEditorInit
`protected internal virtual void OnEditorInit()`

### OnEditorTick
`protected internal virtual void OnEditorTick(float dt)`

### OnEditorValidate
`protected internal virtual void OnEditorValidate()`

### IsOnlyVisual
`protected internal virtual bool IsOnlyVisual()`

### MovesEntity
`protected internal virtual bool MovesEntity()`

### DisablesOroCreation
`protected internal virtual bool DisablesOroCreation()`

### OnEditorVariableChanged
`protected internal virtual void OnEditorVariableChanged(string variableName)`

### SkeletonPostIntegrateCallback
`protected internal virtual bool SkeletonPostIntegrateCallback(AnimResult animResult)`

### OnSceneSave
`protected internal virtual void OnSceneSave(string saveFolder)`

### OnCheckForProblems
`protected internal virtual bool OnCheckForProblems()`

### OnSaveAsPrefab
`protected internal virtual void OnSaveAsPrefab()`

### OnTerrainReload
`protected internal virtual void OnTerrainReload(int step)`

### OnPhysicsCollisionAux
`protected internal void OnPhysicsCollisionAux(ref PhysicsContact contact,UIntPtr entity0,UIntPtr entity1)`

### OnPhysicsCollision
`protected internal virtual void OnPhysicsCollision(ref PhysicsContact contact,WeakGameEntity entity0,WeakGameEntity entity1)`

### OnEditModeVisibilityChanged
`protected internal virtual void OnEditModeVisibilityChanged(bool currentVisibility)`

### OnBoundingBoxValidate
`protected internal virtual void OnBoundingBoxValidate()`

### OnDynamicNavmeshVertexUpdate
`protected internal virtual void OnDynamicNavmeshVertexUpdate()`

## See Also

- [Section index](../)
