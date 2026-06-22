<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PlayerStatsSiege`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PlayerStatsSiege

**命名空间:** TaleWorlds.MountAndBlade.Diamond
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`PlayerStatsSiege` 是 `TaleWorlds.MountAndBlade.Diamond` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `WallsBreached` | `public int WallsBreached { get; set; }` |
| `SiegeEngineKills` | `public int SiegeEngineKills { get; set; }` |
| `SiegeEnginesDestroyed` | `public int SiegeEnginesDestroyed { get; set; }` |
| `ObjectiveGoldGained` | `public int ObjectiveGoldGained { get; set; }` |
| `Score` | `public int Score { get; set; }` |
| `AverageScore` | `public int AverageScore { get; }` |
| `AverageKillCount` | `public int AverageKillCount { get; }` |


## 主要方法

### FillWith

```csharp
public void FillWith(PlayerId playerId, int killCount, int deathCount, int assistCount, int winCount, int loseCount, int forfeitCount, int wallsBreached, int siegeEngineKills, int siegeEnginesDestroyed, int objectiveGoldGained, int score)
```

### FillWithNewPlayer

```csharp
public void FillWithNewPlayer(PlayerId playerId)
```

### Update

```csharp
public void Update(BattlePlayerStatsSiege stats, bool won)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)