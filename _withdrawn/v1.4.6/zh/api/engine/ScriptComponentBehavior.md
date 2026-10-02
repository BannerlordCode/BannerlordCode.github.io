---
title: "ScriptComponentBehavior"
description: "ScriptComponentBehavior：TaleWorlds.Engine 的 public 类，继承 DotNetObject；公开成员 39 个（方法 34、属性 4、字段 0）。canonical 桶 engine。源文件 TaleWorlds.Engine/ScriptComponentBehavior.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ScriptComponentBehavior

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public abstract class ScriptComponentBehavior : DotNetObject`
**File:** `TaleWorlds.Engine/ScriptComponentBehavior.cs`
**Bucket:** `engine` (rule:TaleWorlds.Engine)

## 概述

ScriptComponentBehavior 位于 TaleWorlds.Engine 模块，源文件 TaleWorlds.Engine/ScriptComponentBehavior.cs。它是一个 public 类（abstract），实现/继承 DotNetObject，继承链为 ScriptComponentBehavior → DotNetObject。public/protected 成员共 39 个：34 方法、4 属性、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ScriptComponentBehavior 落在 canonical 桶 `engine`（命中规则 `rule:TaleWorlds.Engine`），命名空间 `TaleWorlds.Engine`，继承链 ScriptComponentBehavior → DotNetObject。成员构成以方法为主（方法 34/39，属性 4/39），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Engine/ScriptComponentBehavior.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `InvalidateWeakPointersIfValid` | `protected void InvalidateWeakPointersIfValid()` | 方法 |
| `GameEntity` | `public WeakGameEntity GameEntity` | 属性 |
| `ScriptComponent` | `public ManagedScriptComponent ScriptComponent` | 属性 |
| `Scene` | `public Scene Scene` | 属性 |
| `SetScriptComponentToTick` | `public void SetScriptComponentToTick(ScriptComponentBehavior.TickRequirement tickReq)` | 方法 |
| `SetScriptComponentToTickMT` | `public void SetScriptComponentToTickMT(ScriptComponentBehavior.TickRequirement value)` | 方法 |
| `SetScene` | `protected internal virtual void SetScene(Scene scene)` | 方法 |
| `OnInit` | `protected internal virtual void OnInit()` | 方法 |
| `HandleOnRemoved` | `protected internal void HandleOnRemoved(int removeReason)` | 方法 |
| `OnRemoved` | `protected virtual void OnRemoved(int removeReason)` | 方法 |
| `GetTickRequirement` | `public virtual ScriptComponentBehavior.TickRequirement GetTickRequirement()` | 方法 |
| `CanPhysicsCollideBetweenTwoEntities` | `protected internal virtual bool CanPhysicsCollideBetweenTwoEntities(WeakGameEntity myEntity, BodyFlags myEntityBodyFlags, WeakGameEntity otherEntity, BodyFlags otherEntityBodyFlags)` | 方法 |
| `OnFixedTick` | `protected internal virtual void OnFixedTick(float fixedDt)` | 方法 |
| `OnParallelFixedTick` | `protected internal virtual void OnParallelFixedTick(float fixedDt)` | 方法 |
| `OnTick` | `protected internal virtual void OnTick(float dt)` | 方法 |
| `OnTickParallel` | `protected internal virtual void OnTickParallel(float dt)` | 方法 |
| `OnTickParallel2` | `protected internal virtual void OnTickParallel2(float dt)` | 方法 |
| `OnTickParallel3` | `protected internal virtual void OnTickParallel3(float dt)` | 方法 |
| `OnTickOccasionally` | `protected internal virtual void OnTickOccasionally(float currentFrameDeltaTime)` | 方法 |
| `OnPreInit` | `protected internal virtual void OnPreInit()` | 方法 |
| `OnEditorInit` | `protected internal virtual void OnEditorInit()` | 方法 |
| `OnEditorTick` | `protected internal virtual void OnEditorTick(float dt)` | 方法 |
| `OnEditorValidate` | `protected internal virtual void OnEditorValidate()` | 方法 |
| `IsOnlyVisual` | `protected internal virtual bool IsOnlyVisual()` | 方法 |
| `MovesEntity` | `protected internal virtual bool MovesEntity()` | 方法 |
| `DisablesOroCreation` | `protected internal virtual bool DisablesOroCreation()` | 方法 |
| `OnEditorVariableChanged` | `protected internal virtual void OnEditorVariableChanged(string variableName)` | 方法 |
| `SkeletonPostIntegrateCallback` | `protected internal virtual bool SkeletonPostIntegrateCallback(AnimResult animResult)` | 方法 |
| `OnSceneSave` | `protected internal virtual void OnSceneSave(string saveFolder)` | 方法 |
| `OnCheckForProblems` | `protected internal virtual bool OnCheckForProblems()` | 方法 |
| `OnSaveAsPrefab` | `protected internal virtual void OnSaveAsPrefab()` | 方法 |
| `OnTerrainReload` | `protected internal virtual void OnTerrainReload(int step)` | 方法 |
| `OnPhysicsCollisionAux` | `protected internal void OnPhysicsCollisionAux(ref PhysicsContact contact, UIntPtr entity0, UIntPtr entity1)` | 方法 |
| `OnPhysicsCollision` | `protected internal virtual void OnPhysicsCollision(ref PhysicsContact contact, WeakGameEntity entity0, WeakGameEntity entity1)` | 方法 |
| `OnEditModeVisibilityChanged` | `protected internal virtual void OnEditModeVisibilityChanged(bool currentVisibility)` | 方法 |
| `OnBoundingBoxValidate` | `protected internal virtual void OnBoundingBoxValidate()` | 方法 |
| `OnDynamicNavmeshVertexUpdate` | `protected internal virtual void OnDynamicNavmeshVertexUpdate()` | 方法 |
| `uint` | `public enum TickRequirement : uint` | 属性 |
| `uint` | `public enum TickRequirement : uint` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 DotNetObject](../../core-extra/DotNetObject/)
- [同命名空间 AnimResult](../AnimResult/)
- [同命名空间 ApplicationHealthChecker](../ApplicationHealthChecker/)
- [同命名空间 AsyncTask](../AsyncTask/)
- [同命名空间 BillboardType](../BillboardType/)
