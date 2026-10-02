---
title: "MissionSpawnSettings"
description: "MissionSpawnSettings：TaleWorlds.MountAndBlade 的 public 结构体；公开成员 27 个（方法 1、属性 15、字段 7）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/MissionSpawnSettings.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionSpawnSettings

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public struct MissionSpawnSettings`
**File:** `TaleWorlds.MountAndBlade/MissionSpawnSettings.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

MissionSpawnSettings 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/MissionSpawnSettings.cs。它是一个 public 结构体，继承链为 MissionSpawnSettings。public/protected 成员共 27 个：1 方法、15 属性、7 字段、1 构造函数、3 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionSpawnSettings 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 MissionSpawnSettings。成员构成以属性为主（属性 15/27，方法 1/27），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/MissionSpawnSettings.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GlobalReinforcementInterval` | `public float GlobalReinforcementInterval` | 属性 |
| `DefenderAdvantageFactor` | `public float DefenderAdvantageFactor` | 属性 |
| `MaximumBattleSideRatio` | `public float MaximumBattleSideRatio` | 属性 |
| `InitialTroopsSpawnMethod` | `public MissionSpawnSettings.InitialSpawnMethod InitialTroopsSpawnMethod` | 属性 |
| `ReinforcementTroopsTimingMethod` | `public MissionSpawnSettings.ReinforcementTimingMethod ReinforcementTroopsTimingMethod` | 属性 |
| `ReinforcementTroopsSpawnMethod` | `public MissionSpawnSettings.ReinforcementSpawnMethod ReinforcementTroopsSpawnMethod` | 属性 |
| `ReinforcementBatchPercentage` | `public float ReinforcementBatchPercentage` | 属性 |
| `DesiredReinforcementPercentage` | `public float DesiredReinforcementPercentage` | 属性 |
| `ReinforcementWavePercentage` | `public float ReinforcementWavePercentage` | 属性 |
| `MaximumReinforcementWaveCount` | `public int MaximumReinforcementWaveCount` | 属性 |
| `DefenderReinforcementBatchPercentage` | `public float DefenderReinforcementBatchPercentage` | 属性 |
| `AttackerReinforcementBatchPercentage` | `public float AttackerReinforcementBatchPercentage` | 属性 |
| `MissionSpawnSettings` | `public MissionSpawnSettings(MissionSpawnSettings.InitialSpawnMethod initialTroopsSpawnMethod, MissionSpawnSettings.ReinforcementTimingMethod reinforcementTimingMethod, MissionSpawnSettings.ReinforcementSpawnMethod reinforcementTroopsSpawnMethod, float globalReinforcementInterval = 0f, float reinforcementBatchPercentage = 0f, float desiredReinforcementPercentage = 0f, float reinforcementWavePercentage = 0f, int maximumReinforcementWaveCount = 0, float defenderReinforcementBatchPercentage = 0f, float attackerReinforcementBatchPercentage = 0f, float defenderAdvantageFactor = 1f, float maximumBattleSizeRatio = 0.75f)` | 构造函数 |
| `CreateDefaultSpawnSettings` | `public static MissionSpawnSettings CreateDefaultSpawnSettings()` | 方法 |
| `MinimumReinforcementInterval` | `public const float MinimumReinforcementInterval` | 字段 |
| `MinimumDefenderAdvantageFactor` | `public const float MinimumDefenderAdvantageFactor` | 字段 |
| `MaximumDefenderAdvantageFactor` | `public const float MaximumDefenderAdvantageFactor` | 字段 |
| `MinimumBattleSizeRatioLimit` | `public const float MinimumBattleSizeRatioLimit` | 字段 |
| `MaximumBattleSizeRatioLimit` | `public const float MaximumBattleSizeRatioLimit` | 字段 |
| `DefaultMaximumBattleSizeRatio` | `public const float DefaultMaximumBattleSizeRatio` | 字段 |
| `DefaultDefenderAdvantageFactor` | `public const float DefaultDefenderAdvantageFactor` | 字段 |
| `ReinforcementSpawnMethod` | `public enum ReinforcementSpawnMethod` | 属性 |
| `ReinforcementTimingMethod` | `public enum ReinforcementTimingMethod` | 属性 |
| `InitialSpawnMethod` | `public enum InitialSpawnMethod` | 属性 |
| `ReinforcementSpawnMethod` | `public enum ReinforcementSpawnMethod` | 嵌套类型 |
| `ReinforcementTimingMethod` | `public enum ReinforcementTimingMethod` | 嵌套类型 |
| `InitialSpawnMethod` | `public enum InitialSpawnMethod` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
