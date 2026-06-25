---
title: "MissionSpawnSettings"
description: "MissionSpawnSettings 的自动生成类参考。"
---
# MissionSpawnSettings

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct MissionSpawnSettings`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionSpawnSettings.cs`

## 概述

`MissionSpawnSettings` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `GlobalReinforcementInterval` | `public float GlobalReinforcementInterval { get; set; }` |
| `DefenderAdvantageFactor` | `public float DefenderAdvantageFactor { get; set; }` |
| `MaximumBattleSideRatio` | `public float MaximumBattleSideRatio { get; set; }` |
| `InitialTroopsSpawnMethod` | `public InitialSpawnMethod InitialTroopsSpawnMethod { get; }` |
| `ReinforcementTroopsTimingMethod` | `public ReinforcementTimingMethod ReinforcementTroopsTimingMethod { get; }` |
| `ReinforcementTroopsSpawnMethod` | `public ReinforcementSpawnMethod ReinforcementTroopsSpawnMethod { get; }` |
| `ReinforcementBatchPercentage` | `public float ReinforcementBatchPercentage { get; set; }` |
| `DesiredReinforcementPercentage` | `public float DesiredReinforcementPercentage { get; set; }` |
| `ReinforcementWavePercentage` | `public float ReinforcementWavePercentage { get; set; }` |
| `MaximumReinforcementWaveCount` | `public int MaximumReinforcementWaveCount { get; set; }` |
| `DefenderReinforcementBatchPercentage` | `public float DefenderReinforcementBatchPercentage { get; set; }` |
| `AttackerReinforcementBatchPercentage` | `public float AttackerReinforcementBatchPercentage { get; set; }` |

## 主要方法

### CreateDefaultSpawnSettings
`public static MissionSpawnSettings CreateDefaultSpawnSettings()`

**用途 / Purpose:** 构建一个新的 default spawn settings 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
MissionSpawnSettings.CreateDefaultSpawnSettings();
```

## 使用示例

```csharp
MissionSpawnSettings.CreateDefaultSpawnSettings();
```

## 参见

- [本区域目录](../)