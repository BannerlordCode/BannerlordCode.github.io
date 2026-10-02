---
title: "VertexAnimator"
description: "VertexAnimator：TaleWorlds.MountAndBlade 的 public 类，继承 SynchedMissionObject；公开成员 20 个（方法 17、属性 1、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/VertexAnimator.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# VertexAnimator

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class VertexAnimator : SynchedMissionObject`
**File:** `TaleWorlds.MountAndBlade/VertexAnimator.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

VertexAnimator 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/VertexAnimator.cs。它是一个 public 类，实现/继承 SynchedMissionObject，继承链为 VertexAnimator → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject。public/protected 成员共 20 个：17 方法、1 属性、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：VertexAnimator 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 VertexAnimator → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject。成员构成以方法为主（方法 17/20，属性 1/20），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/VertexAnimator.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `VertexAnimator` | `public VertexAnimator()` | 构造函数 |
| `OnInit` | `protected internal override void OnInit()` | 方法 |
| `OnEditorInit` | `protected internal override void OnEditorInit()` | 方法 |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | 方法 |
| `OnTick` | `protected internal override void OnTick(float dt)` | 方法 |
| `PlayOnce` | `public void PlayOnce()` | 方法 |
| `Pause` | `public void Pause()` | 方法 |
| `Play` | `public void Play()` | 方法 |
| `Resume` | `public void Resume()` | 方法 |
| `Stop` | `public void Stop()` | 方法 |
| `StopAndGoToEnd` | `public void StopAndGoToEnd()` | 方法 |
| `SetAnimation` | `public void SetAnimation(int beginKey, int endKey, float speed)` | 方法 |
| `SetAnimationSynched` | `public void SetAnimationSynched(int beginKey, int endKey, float speed)` | 方法 |
| `SetProgressSynched` | `public void SetProgressSynched(float value)` | 方法 |
| `OnRemoved` | `protected override void OnRemoved(int removeReason)` | 方法 |
| `OnEditorTick` | `protected internal override void OnEditorTick(float dt)` | 方法 |
| `WriteToNetwork` | `public override void WriteToNetwork()` | 方法 |
| `OnAfterReadFromNetwork` | `public override void OnAfterReadFromNetwork(ValueTuple<BaseSynchedMissionObjectReadableRecord, ISynchedMissionObjectReadableRecord>synchedMissionObjectReadableRecord, bool allowVisibilityUpdate = true)` | 方法 |
| `ISynchedMissionObjectReadableRecord` | `public struct VertexAnimatorRecord : ISynchedMissionObjectReadableRecord` | 属性 |
| `ISynchedMissionObjectReadableRecord` | `public struct VertexAnimatorRecord : ISynchedMissionObjectReadableRecord` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 SynchedMissionObject](../SynchedMissionObject/)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
