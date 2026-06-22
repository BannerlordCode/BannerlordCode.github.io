<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BannerlordConfig`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BannerlordConfig

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`BannerlordConfig` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
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

```csharp
public static void Initialize()
```

### Save

```csharp
public static SaveResult Save()
```

### GetDamageToPlayerMultiplier

```csharp
public static float GetDamageToPlayerMultiplier()
```

### GetRealBattleSize

```csharp
public static int GetRealBattleSize()
```

### GetRealBattleSizeForSiege

```csharp
public static int GetRealBattleSizeForSiege()
```

### GetRealBattleSizeForNaval

```csharp
public static int GetRealBattleSizeForNaval()
```

### GetReinforcementWaveCount

```csharp
public static int GetReinforcementWaveCount()
```

### GetRealBattleSizeForSallyOut

```csharp
public static int GetRealBattleSizeForSallyOut()
```

### IsValidValue

```csharp
public bool IsValidValue(int value)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)