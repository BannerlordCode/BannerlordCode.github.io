---
title: "BaseSynchedMissionObjectReadableRecord"
description: "BaseSynchedMissionObjectReadableRecord：TaleWorlds.MountAndBlade 的 public 结构体；公开成员 19 个（方法 3、属性 16、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/BaseSynchedMissionObjectReadableRecord.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BaseSynchedMissionObjectReadableRecord

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public struct BaseSynchedMissionObjectReadableRecord`
**File:** `TaleWorlds.MountAndBlade/BaseSynchedMissionObjectReadableRecord.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

BaseSynchedMissionObjectReadableRecord 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/BaseSynchedMissionObjectReadableRecord.cs。它是一个 public 结构体，继承链为 BaseSynchedMissionObjectReadableRecord。public/protected 成员共 19 个：3 方法、16 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BaseSynchedMissionObjectReadableRecord 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 BaseSynchedMissionObjectReadableRecord。成员构成以属性为主（属性 16/19，方法 3/19），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/BaseSynchedMissionObjectReadableRecord.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SetVisibilityExcludeParents` | `public bool SetVisibilityExcludeParents` | 属性 |
| `SynchTransform` | `public bool SynchTransform` | 属性 |
| `GameObjectFrame` | `public MatrixFrame GameObjectFrame` | 属性 |
| `SynchronizeFrameOverTime` | `public bool SynchronizeFrameOverTime` | 属性 |
| `LastSynchedFrame` | `public MatrixFrame LastSynchedFrame` | 属性 |
| `Duration` | `public float Duration` | 属性 |
| `HasSkeleton` | `public bool HasSkeleton` | 属性 |
| `SynchAnimation` | `public bool SynchAnimation` | 属性 |
| `AnimationIndex` | `public int AnimationIndex` | 属性 |
| `AnimationSpeed` | `public float AnimationSpeed` | 属性 |
| `AnimationParameter` | `public float AnimationParameter` | 属性 |
| `IsSkeletonAnimationPaused` | `public bool IsSkeletonAnimationPaused` | 属性 |
| `SynchColors` | `public bool SynchColors` | 属性 |
| `Color` | `public uint Color` | 属性 |
| `Color2` | `public uint Color2` | 属性 |
| `IsDisabled` | `public bool IsDisabled` | 属性 |
| `ReadFromNetwork` | `public bool ReadFromNetwork(ref bool bufferReadValid)` | 方法 |
| `SetSetVisibilityExcludeParents` | `public void SetSetVisibilityExcludeParents(bool visible)` | 方法 |
| `ISynchedMissionObjectReadableRecord>CreateFromNetworkWithTypeIndex` | `public static ValueTuple<BaseSynchedMissionObjectReadableRecord, ISynchedMissionObjectReadableRecord>CreateFromNetworkWithTypeIndex(int typeIndex)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
