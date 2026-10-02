---
title: "SpawnPathData"
description: "SpawnPathData：TaleWorlds.MountAndBlade 的 public 类；公开成员 18 个（方法 11、属性 4、字段 1）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/SpawnPathData.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SpawnPathData

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class SpawnPathData`
**File:** `TaleWorlds.MountAndBlade/SpawnPathData.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

SpawnPathData 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/SpawnPathData.cs。它是一个 public 类，继承链为 SpawnPathData。public/protected 成员共 18 个：11 方法、4 属性、1 字段、2 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SpawnPathData 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 SpawnPathData。成员构成以方法为主（方法 11/18，属性 4/18），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/SpawnPathData.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsValid` | `public bool IsValid` | 属性 |
| `FreeSegmentCount` | `public int FreeSegmentCount` | 属性 |
| `Invert` | `public SpawnPathData Invert()` | 方法 |
| `ClampPathOffset` | `public void ClampPathOffset(ref float relativePathOffset)` | 方法 |
| `ConvertPointToRelativePathOffset` | `public float ConvertPointToRelativePathOffset(int pointIndex)` | 方法 |
| `ConvertRelativePathOffsetToPathDistance` | `public float ConvertRelativePathOffsetToPathDistance(float relativePathOffset)` | 方法 |
| `GetNodeIndexAtPathDistance` | `public int GetNodeIndexAtPathDistance(float pathDistance)` | 方法 |
| `GetBaseOffset` | `public float GetBaseOffset()` | 方法 |
| `IsPathOffsetValid` | `public bool IsPathOffsetValid(float relativePathOffset)` | 方法 |
| `GetOffsetOverflow` | `public float GetOffsetOverflow(float relativePathOffset)` | 方法 |
| `GetSpawnFrame` | `public MatrixFrame GetSpawnFrame(float relativePathOffset, bool searchNearestValidFrame = false, SpawnPathData.SearchDirection searchDirection = SpawnPathData.SearchDirection.Backward)` | 方法 |
| `GetSpawnPathFrameFacingTarget` | `public void GetSpawnPathFrameFacingTarget(float basePathOffset, float targetPathOffset, bool useTangentDirection, out Vec2 spawnPathPosition, out Vec2 spawnPathDirection, bool decideDirectionDynamically = false, float dynamicDistancePercentage = 0.2f)` | 方法 |
| `Create` | `public static SpawnPathData Create(Scene scene, Path path, float pivotOffset, bool isInverted = false, SpawnPathData.SnapMethod snapType = SpawnPathData.SnapMethod.DontSnap)` | 方法 |
| `MinimumSpawnPathOffset` | `public const float MinimumSpawnPathOffset` | 字段 |
| `SnapMethod` | `public enum SnapMethod` | 属性 |
| `SearchDirection` | `public enum SearchDirection` | 属性 |
| `SnapMethod` | `public enum SnapMethod` | 嵌套类型 |
| `SearchDirection` | `public enum SearchDirection` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
