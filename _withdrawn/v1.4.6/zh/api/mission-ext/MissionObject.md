---
title: "MissionObject"
description: "MissionObject：TaleWorlds.MountAndBlade 的 public 类，继承 ScriptComponentBehavior；公开成员 30 个（方法 21、属性 5、字段 2）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/MissionObject.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionObject

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class MissionObject : ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade/MissionObject.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

MissionObject 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/MissionObject.cs。它是一个 public 类（abstract），实现/继承 ScriptComponentBehavior，继承链为 MissionObject → ScriptComponentBehavior → DotNetObject。public/protected 成员共 30 个：21 方法、5 属性、2 字段、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionObject 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 MissionObject → ScriptComponentBehavior → DotNetObject。成员构成以方法为主（方法 21/30，属性 5/30），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/MissionObject.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Id` | `public MissionObjectId Id` | 属性 |
| `IsDisabled` | `public bool IsDisabled` | 属性 |
| `HitObjectName` | `public virtual TextObject HitObjectName` | 属性 |
| `MissionObject` | `public MissionObject()` | 构造函数 |
| `SetAbilityOfFaces` | `public virtual void SetAbilityOfFaces(bool enabled)` | 方法 |
| `SetAbilityOfConditionalFaces` | `protected void SetAbilityOfConditionalFaces(bool enabled)` | 方法 |
| `OnInit` | `protected internal override void OnInit()` | 方法 |
| `AttachDynamicNavmeshToEntity` | `protected virtual void AttachDynamicNavmeshToEntity()` | 方法 |
| `GetEntityToAttachNavMeshFaces` | `protected virtual WeakGameEntity GetEntityToAttachNavMeshFaces()` | 方法 |
| `OnCheckForProblems` | `protected internal override bool OnCheckForProblems()` | 方法 |
| `OnPreInit` | `protected internal override void OnPreInit()` | 方法 |
| `GetHashCode` | `public override int GetHashCode()` | 方法 |
| `OnMissionReset` | `protected internal virtual void OnMissionReset()` | 方法 |
| `AfterMissionStart` | `public virtual void AfterMissionStart()` | 方法 |
| `OnMissionEnded` | `public virtual void OnMissionEnded()` | 方法 |
| `OnDeploymentFinished` | `public virtual void OnDeploymentFinished()` | 方法 |
| `OnHit` | `protected internal virtual bool OnHit(Agent attackerAgent, int damage, Vec3 impactPosition, Vec3 impactDirection, in MissionWeapon weapon, int affectorWeaponSlotOrMissileIndex, ScriptComponentBehavior attackerScriptComponentBehavior, out bool reportDamage, out float finalDamage, out float fireDamage, out float modifiedFireDamage)` | 方法 |
| `SetEnabled` | `public void SetEnabled(bool isParentObject = false)` | 方法 |
| `SetEnabledAndMakeVisible` | `public void SetEnabledAndMakeVisible(bool isParentObject = false, bool enableFaces = false)` | 方法 |
| `SetDisabled` | `public void SetDisabled(bool isParentObject = false)` | 方法 |
| `SetDisabledAndMakeInvisible` | `public void SetDisabledAndMakeInvisible(bool isParentObject = false, bool disableFaces = false)` | 方法 |
| `OnRemoved` | `protected override void OnRemoved(int removeReason)` | 方法 |
| `OnEndMission` | `public virtual void OnEndMission()` | 方法 |
| `CreatedAtRuntime` | `public bool CreatedAtRuntime` | 属性 |
| `MovesEntity` | `protected internal override bool MovesEntity()` | 方法 |
| `AddStuckMissile` | `public virtual void AddStuckMissile(GameEntity missileEntity)` | 方法 |
| `MaxNavMeshPerDynamicObject` | `public const int MaxNavMeshPerDynamicObject` | 字段 |
| `NavMeshPrefabName` | `protected string NavMeshPrefabName` | 字段 |
| `DynamicNavmeshLocalIds` | `protected enum DynamicNavmeshLocalIds` | 属性 |
| `DynamicNavmeshLocalIds` | `protected enum DynamicNavmeshLocalIds` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ScriptComponentBehavior](../../engine/ScriptComponentBehavior/)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
