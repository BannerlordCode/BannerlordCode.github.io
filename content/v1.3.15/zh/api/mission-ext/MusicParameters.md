---
title: "MusicParameters"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MusicParameters`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MusicParameters

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** `public static class MusicParameters`
**领域:** mission-ext

## 概述

`MusicParameters` 位于 `TaleWorlds.MountAndBlade`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

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

**用途 / Purpose:** 加载 `from xml` 数据。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
MusicParameters.LoadFromXml();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
