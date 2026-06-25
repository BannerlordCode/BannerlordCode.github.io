---
title: "MusicParameters"
description: "MusicParameters 的自动生成类参考。"
---
# MusicParameters

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MusicParameters`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/MusicParameters.cs`

## 概述

`MusicParameters` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `SmallBattleTreshold` | `public static int SmallBattleTreshold { get; }` |
| `MediumBattleTreshold` | `public static int MediumBattleTreshold { get; }` |
| `LargeBattleTreshold` | `public static int LargeBattleTreshold { get; }` |
| `SmallBattleDistanceTreshold` | `public static float SmallBattleDistanceTreshold { get; }` |
| `MediumBattleDistanceTreshold` | `public static float MediumBattleDistanceTreshold { get; }` |
| `LargeBattleDistanceTreshold` | `public static float LargeBattleDistanceTreshold { get; }` |
| `MaxBattleDistanceTreshold` | `public static float MaxBattleDistanceTreshold { get; }` |
| `MinIntensity` | `public static float MinIntensity { get; }` |
| `DefaultStartIntensity` | `public static float DefaultStartIntensity { get; }` |
| `PlayerChargeEffectMultiplierOnIntensity` | `public static float PlayerChargeEffectMultiplierOnIntensity { get; }` |
| `BattleSizeEffectOnStartIntensity` | `public static float BattleSizeEffectOnStartIntensity { get; }` |
| `RandomEffectMultiplierOnStartIntensity` | `public static float RandomEffectMultiplierOnStartIntensity { get; }` |
| `FriendlyTroopDeadEffectOnIntensity` | `public static float FriendlyTroopDeadEffectOnIntensity { get; }` |
| `EnemyTroopDeadEffectOnIntensity` | `public static float EnemyTroopDeadEffectOnIntensity { get; }` |
| `PlayerTroopDeadEffectMultiplierOnIntensity` | `public static float PlayerTroopDeadEffectMultiplierOnIntensity { get; }` |
| `BattleRatioTresholdOnIntensity` | `public static float BattleRatioTresholdOnIntensity { get; }` |
| `BattleTurnsOneSideCooldown` | `public static float BattleTurnsOneSideCooldown { get; }` |
| `CampaignDarkModeThreshold` | `public static float CampaignDarkModeThreshold { get; }` |

## 主要方法

### LoadFromXml
`public static void LoadFromXml()`

**用途 / Purpose:** **用途 / Purpose:** 从持久化存储或流中读取 from xml。

```csharp
// 静态调用，不需要实例
MusicParameters.LoadFromXml();
```

## 使用示例

```csharp
MusicParameters.LoadFromXml();
```

## 参见

- [本区域目录](../)