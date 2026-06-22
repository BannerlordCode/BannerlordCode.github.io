<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SPScoreboardUnitVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SPScoreboardUnitVM

**命名空间:** TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`SPScoreboardUnitVM` 是 `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `IsGainedAnySkills` | `public bool IsGainedAnySkills { get; set; }` |
| `GainedSkills` | `public MBBindingList<SPScoreboardSkillItemVM> GainedSkills { get; set; }` |
| `IsHero` | `public bool IsHero { get; set; }` |
| `Score` | `public SPScoreboardStatsVM Score { get; set; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### UpdateScores

```csharp
public void UpdateScores(int numberRemaining, int numberDead, int numberWounded, int numberRouted, int numberKilled, int numberReadyToUpgrade)
```

### UpdateHeroSkills

```csharp
public void UpdateHeroSkills(SkillObject gainedSkill, int currentSkill)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)