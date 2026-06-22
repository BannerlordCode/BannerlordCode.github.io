<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PlayerStatsTeamDeathmatch`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PlayerStatsTeamDeathmatch

**命名空间:** TaleWorlds.MountAndBlade.Diamond
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`PlayerStatsTeamDeathmatch` 是 `TaleWorlds.MountAndBlade.Diamond` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Score` | `public int Score { get; set; }` |
| `AverageScore` | `public float AverageScore { get; }` |


## 主要方法

### FillWith

```csharp
public void FillWith(PlayerId playerId, int killCount, int deathCount, int assistCount, int winCount, int loseCount, int forfeitCount, int score)
```

### FillWithNewPlayer

```csharp
public void FillWithNewPlayer(PlayerId playerId)
```

### Update

```csharp
public void Update(BattlePlayerStatsTeamDeathmatch stats, bool won)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)