---
title: "BannerlordConfig"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BannerlordConfig`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BannerlordConfig

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** `public static class BannerlordConfig`
**领域:** mission-ext

## 概述

`BannerlordConfig` 位于 `TaleWorlds.MountAndBlade`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `MinBattleSize` | `public static int MinBattleSize { get; }` |
| `MaxBattleSize` | `public static int MaxBattleSize { get; }` |
| `MinReinforcementWaveCount` | `public static int MinReinforcementWaveCount { get; }` |
| `MaxReinforcementWaveCount` | `public static int MaxReinforcementWaveCount { get; }` |
| `DefaultLanguage` | `public static string DefaultLanguage { get; }` |
| `Language` | `public static string Language { get; set; }` |
| `VoiceLanguage` | `public static string VoiceLanguage { get; set; }` |
| `PlayerReceivedDamageDifficulty` | `public static int PlayerReceivedDamageDifficulty { get; set; }` |
| `GyroOverrideForAttackDefend` | `public static bool GyroOverrideForAttackDefend { get; set; }` |
| `AttackDirectionControl` | `public static int AttackDirectionControl { get; set; }` |
| `DefendDirectionControl` | `public static int DefendDirectionControl { get; set; }` |
| `NumberOfCorpses` | `public static int NumberOfCorpses { get; set; }` |
| `ShowBlood` | `public static bool ShowBlood { get; set; }` |
| `DisplayAttackDirection` | `public static bool DisplayAttackDirection { get; set; }` |
| `DisplayTargetingReticule` | `public static bool DisplayTargetingReticule { get; set; }` |
| `ForceVSyncInMenus` | `public static bool ForceVSyncInMenus { get; set; }` |
| `BattleSize` | `public static int BattleSize { get; set; }` |
| `ReinforcementWaveCount` | `public static int ReinforcementWaveCount { get; set; }` |
| `CivilianAgentCount` | `public static float CivilianAgentCount { get; set; }` |
| `FirstPersonFov` | `public static float FirstPersonFov { get; set; }` |

## 主要方法

### Initialize
`public static void Initialize()`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### Save
`public static SaveResult Save()`

**用途 / Purpose:** 保存 `save` 数据。

### GetDamageToPlayerMultiplier
`public static float GetDamageToPlayerMultiplier()`

**用途 / Purpose:** 获取 `damage to player multiplier` 的当前值。

### GetRealBattleSize
`public static int GetRealBattleSize()`

**用途 / Purpose:** 获取 `real battle size` 的当前值。

### GetRealBattleSizeForSiege
`public static int GetRealBattleSizeForSiege()`

**用途 / Purpose:** 获取 `real battle size for siege` 的当前值。

### GetRealBattleSizeForNaval
`public static int GetRealBattleSizeForNaval()`

**用途 / Purpose:** 获取 `real battle size for naval` 的当前值。

### GetReinforcementWaveCount
`public static int GetReinforcementWaveCount()`

**用途 / Purpose:** 获取 `reinforcement wave count` 的当前值。

### GetRealBattleSizeForSallyOut
`public static int GetRealBattleSizeForSallyOut()`

**用途 / Purpose:** 获取 `real battle size for sally out` 的当前值。

### IsValidValue
`public bool IsValidValue(int value)`

**用途 / Purpose:** 处理 `is valid value` 相关逻辑。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
BannerlordConfig.Initialize();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
