<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionSpawnSettings`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionSpawnSettings

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 结构体 struct struct
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`MissionSpawnSettings` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个结构体 struct。
> 如需了解其属性、方法和开发者用例，请参考源码或
## 主要属性

| Name | Signature |
|------|-----------|
| `GlobalReinforcementInterval` | `public float GlobalReinforcementInterval { get; set; }` |
| `DefenderAdvantageFactor` | `public float DefenderAdvantageFactor { get; set; }` |
| `MaximumBattleSideRatio` | `public float MaximumBattleSideRatio { get; set; }` |
| `InitialTroopsSpawnMethod` | `public MissionSpawnSettings.InitialSpawnMethod InitialTroopsSpawnMethod { get; }` |
| `ReinforcementTroopsTimingMethod` | `public MissionSpawnSettings.ReinforcementTimingMethod ReinforcementTroopsTimingMethod { get; }` |
| `ReinforcementTroopsSpawnMethod` | `public MissionSpawnSettings.ReinforcementSpawnMethod ReinforcementTroopsSpawnMethod { get; }` |
| `ReinforcementBatchPercentage` | `public float ReinforcementBatchPercentage { get; set; }` |
| `DesiredReinforcementPercentage` | `public float DesiredReinforcementPercentage { get; set; }` |
| `ReinforcementWavePercentage` | `public float ReinforcementWavePercentage { get; set; }` |
| `MaximumReinforcementWaveCount` | `public int MaximumReinforcementWaveCount { get; set; }` |
| `DefenderReinforcementBatchPercentage` | `public float DefenderReinforcementBatchPercentage { get; set; }` |
| `AttackerReinforcementBatchPercentage` | `public float AttackerReinforcementBatchPercentage { get; set; }` |


## 主要方法

### CreateDefaultSpawnSettings

```csharp
public static MissionSpawnSettings CreateDefaultSpawnSettings()
```

贡献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)