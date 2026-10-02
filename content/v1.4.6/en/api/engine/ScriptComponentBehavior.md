---
title: "ScriptComponentBehavior"
description: "ScriptComponentBehavior: a public class in TaleWorlds.Engine, inheriting DotNetObject; 39 exposed members (34 methods, 4 properties, 0 fields). Source: TaleWorlds.Engine/ScriptComponentBehavior.cs."
---
# ScriptComponentBehavior

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public abstract class ScriptComponentBehavior : DotNetObject`
**File:** `TaleWorlds.Engine/ScriptComponentBehavior.cs`

## Overview

ScriptComponentBehavior lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/ScriptComponentBehavior.cs. It is a public class (abstract), implementing/inheriting DotNetObject; the inheritance chain is ScriptComponentBehavior → DotNetObject. It exposes 39 public/protected members: 34 methods, 4 properties, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ScriptComponentBehavior is a top-level type in TaleWorlds.Engine, namespace matching the module directory; inheritance chain ScriptComponentBehavior → DotNetObject. The surface is method-led (methods 34/39, properties 4/39), so it mostly exposes operations. DotNetObject on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/ScriptComponentBehavior.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `InvalidateWeakPointersIfValid` | `protected void InvalidateWeakPointersIfValid()` | method |
| `GameEntity` | `public WeakGameEntity GameEntity` | property |
| `ScriptComponent` | `public ManagedScriptComponent ScriptComponent` | property |
| `Scene` | `public Scene Scene` | property |
| `SetScriptComponentToTick` | `public void SetScriptComponentToTick(ScriptComponentBehavior.TickRequirement tickReq)` | method |
| `SetScriptComponentToTickMT` | `public void SetScriptComponentToTickMT(ScriptComponentBehavior.TickRequirement value)` | method |
| `SetScene` | `protected internal virtual void SetScene(Scene scene)` | method |
| `OnInit` | `protected internal virtual void OnInit()` | method |
| `HandleOnRemoved` | `protected internal void HandleOnRemoved(int removeReason)` | method |
| `OnRemoved` | `protected virtual void OnRemoved(int removeReason)` | method |
| `GetTickRequirement` | `public virtual ScriptComponentBehavior.TickRequirement GetTickRequirement()` | method |
| `CanPhysicsCollideBetweenTwoEntities` | `protected internal virtual bool CanPhysicsCollideBetweenTwoEntities(WeakGameEntity myEntity, BodyFlags myEntityBodyFlags, WeakGameEntity otherEntity, BodyFlags otherEntityBodyFlags)` | method |
| `OnFixedTick` | `protected internal virtual void OnFixedTick(float fixedDt)` | method |
| `OnParallelFixedTick` | `protected internal virtual void OnParallelFixedTick(float fixedDt)` | method |
| `OnTick` | `protected internal virtual void OnTick(float dt)` | method |
| `OnTickParallel` | `protected internal virtual void OnTickParallel(float dt)` | method |
| `OnTickParallel2` | `protected internal virtual void OnTickParallel2(float dt)` | method |
| `OnTickParallel3` | `protected internal virtual void OnTickParallel3(float dt)` | method |
| `OnTickOccasionally` | `protected internal virtual void OnTickOccasionally(float currentFrameDeltaTime)` | method |
| `OnPreInit` | `protected internal virtual void OnPreInit()` | method |
| `OnEditorInit` | `protected internal virtual void OnEditorInit()` | method |
| `OnEditorTick` | `protected internal virtual void OnEditorTick(float dt)` | method |
| `OnEditorValidate` | `protected internal virtual void OnEditorValidate()` | method |
| `IsOnlyVisual` | `protected internal virtual bool IsOnlyVisual()` | method |
| `MovesEntity` | `protected internal virtual bool MovesEntity()` | method |
| `DisablesOroCreation` | `protected internal virtual bool DisablesOroCreation()` | method |
| `OnEditorVariableChanged` | `protected internal virtual void OnEditorVariableChanged(string variableName)` | method |
| `SkeletonPostIntegrateCallback` | `protected internal virtual bool SkeletonPostIntegrateCallback(AnimResult animResult)` | method |
| `OnSceneSave` | `protected internal virtual void OnSceneSave(string saveFolder)` | method |
| `OnCheckForProblems` | `protected internal virtual bool OnCheckForProblems()` | method |
| `OnSaveAsPrefab` | `protected internal virtual void OnSaveAsPrefab()` | method |
| `OnTerrainReload` | `protected internal virtual void OnTerrainReload(int step)` | method |
| `OnPhysicsCollisionAux` | `protected internal void OnPhysicsCollisionAux(ref PhysicsContact contact, UIntPtr entity0, UIntPtr entity1)` | method |
| `OnPhysicsCollision` | `protected internal virtual void OnPhysicsCollision(ref PhysicsContact contact, WeakGameEntity entity0, WeakGameEntity entity1)` | method |
| `OnEditModeVisibilityChanged` | `protected internal virtual void OnEditModeVisibilityChanged(bool currentVisibility)` | method |
| `OnBoundingBoxValidate` | `protected internal virtual void OnBoundingBoxValidate()` | method |
| `OnDynamicNavmeshVertexUpdate` | `protected internal virtual void OnDynamicNavmeshVertexUpdate()` | method |
| `uint` | `public enum TickRequirement : uint` | property |
| `uint` | `public enum TickRequirement : uint` | nested type |

## See Also

- [↑ engine module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AnimResult](../AnimResult)
- [same namespace ApplicationHealthChecker](../ApplicationHealthChecker)
- [same namespace AsyncTask](../AsyncTask)
- [same namespace BillboardType](../BillboardType)
