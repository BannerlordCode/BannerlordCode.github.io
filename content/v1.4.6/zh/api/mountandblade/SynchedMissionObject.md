---
title: "SynchedMissionObject"
description: "SynchedMissionObject：TaleWorlds.MountAndBlade 的 public 类，继承 MissionObject；公开成员 29 个（方法 24、属性 4、字段 0）。源文件 TaleWorlds.MountAndBlade/SynchedMissionObject.cs。"
---
# SynchedMissionObject

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class SynchedMissionObject : MissionObject`
**File:** `TaleWorlds.MountAndBlade/SynchedMissionObject.cs`

## 概述

SynchedMissionObject 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/SynchedMissionObject.cs。它是一个 public 类，实现/继承 MissionObject，继承链为 SynchedMissionObject → MissionObject → ScriptComponentBehavior。public/protected 成员共 29 个：24 方法、4 属性、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SynchedMissionObject 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 SynchedMissionObject → MissionObject → ScriptComponentBehavior。成员构成以方法为主（方法 24/29，属性 4/29），对外主要以操作入口暴露。继承链上的 ScriptComponentBehavior 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/SynchedMissionObject.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Color` | `public uint Color` | 属性 |
| `Color2` | `public uint Color2` | 属性 |
| `SynchronizeCompleted` | `public bool SynchronizeCompleted` | 属性 |
| `OnInit` | `protected internal override void OnInit()` | 方法 |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | 方法 |
| `OnTick` | `protected internal override void OnTick(float dt)` | 方法 |
| `SetLocalPositionSmoothStep` | `public void SetLocalPositionSmoothStep(ref Vec3 targetPosition)` | 方法 |
| `SetVisibleSynched` | `public virtual void SetVisibleSynched(bool value, bool forceChildrenVisible = false)` | 方法 |
| `SetPhysicsStateSynched` | `public virtual void SetPhysicsStateSynched(bool value, bool setChildren = true)` | 方法 |
| `SetDisabledSynched` | `public virtual void SetDisabledSynched()` | 方法 |
| `SetFrameSynched` | `public void SetFrameSynched(ref MatrixFrame frame, bool isClient = false)` | 方法 |
| `SetGlobalFrameSynched` | `public void SetGlobalFrameSynched(ref MatrixFrame frame, bool isClient = false)` | 方法 |
| `SetFrameSynchedOverTime` | `public void SetFrameSynchedOverTime(ref MatrixFrame frame, float duration, bool isClient = false)` | 方法 |
| `SetGlobalFrameSynchedOverTime` | `public void SetGlobalFrameSynchedOverTime(ref MatrixFrame frame, float duration, bool isClient = false)` | 方法 |
| `SetAnimationAtChannelSynched` | `public void SetAnimationAtChannelSynched(string animationName, int channelNo, float animationSpeed = 1f)` | 方法 |
| `SetAnimationAtChannelSynched` | `public void SetAnimationAtChannelSynched(int animationIndex, int channelNo, float animationSpeed = 1f)` | 方法 |
| `SetAnimationChannelParameterSynched` | `public void SetAnimationChannelParameterSynched(int channelNo, float parameter)` | 方法 |
| `PauseSkeletonAnimationSynched` | `public void PauseSkeletonAnimationSynched()` | 方法 |
| `ResumeSkeletonAnimationSynched` | `public void ResumeSkeletonAnimationSynched()` | 方法 |
| `BurstParticlesSynched` | `public void BurstParticlesSynched(bool doChildren = true)` | 方法 |
| `ApplyImpulseSynched` | `public void ApplyImpulseSynched(Vec3 localPosition, Vec3 impulse)` | 方法 |
| `AddBodyFlagsSynched` | `public void AddBodyFlagsSynched(BodyFlags flags, bool applyToChildren = true)` | 方法 |
| `RemoveBodyFlagsSynched` | `public void RemoveBodyFlagsSynched(BodyFlags flags, bool applyToChildren = true)` | 方法 |
| `SetTeamColors` | `public void SetTeamColors(uint color, uint color2)` | 方法 |
| `SetTeamColorsSynched` | `public virtual void SetTeamColorsSynched(uint color, uint color2)` | 方法 |
| `WriteToNetwork` | `public virtual void WriteToNetwork()` | 方法 |
| `OnAfterReadFromNetwork` | `public virtual void OnAfterReadFromNetwork(ValueTuple<BaseSynchedMissionObjectReadableRecord, ISynchedMissionObjectReadableRecord>synchedMissionObjectReadableRecord, bool allowVisibilityUpdate = true)` | 方法 |
| `uint` | `public enum SynchFlags : uint` | 属性 |
| `uint` | `public enum SynchFlags : uint` | 嵌套类型 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 MissionObject](../MissionObject)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
