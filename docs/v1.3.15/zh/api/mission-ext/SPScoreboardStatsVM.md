<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SPScoreboardStatsVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SPScoreboardStatsVM

**命名空间:** TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`SPScoreboardStatsVM` 是 `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `NameText` | `public string NameText { get; set; }` |
| `IsMainHero` | `public bool IsMainHero { get; set; }` |
| `IsMainParty` | `public bool IsMainParty { get; set; }` |
| `Kill` | `public int Kill { get; set; }` |
| `Dead` | `public int Dead { get; set; }` |
| `Wounded` | `public int Wounded { get; set; }` |
| `Routed` | `public int Routed { get; set; }` |
| `Remaining` | `public int Remaining { get; set; }` |
| `ReadyToUpgrade` | `public int ReadyToUpgrade { get; set; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### UpdateScores

```csharp
public void UpdateScores(int numberRemaining, int numberDead, int numberWounded, int numberRouted, int numberKilled, int numberReadyToUpgrade)
```

### IsAnyStatRelevant

```csharp
public bool IsAnyStatRelevant()
```

### GetScoreForOneAliveMember

```csharp
public SPScoreboardStatsVM GetScoreForOneAliveMember()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)