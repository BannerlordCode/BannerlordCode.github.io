<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SPScoreboardSideVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SPScoreboardSideVM

**命名空间:** TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`SPScoreboardSideVM` 是 `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `CurrentPower` | `public float CurrentPower { get; }` |
| `InitialPower` | `public float InitialPower { get; }` |
| `BannerVisual` | `public BannerImageIdentifierVM BannerVisual { get; set; }` |
| `BannerVisualSmall` | `public BannerImageIdentifierVM BannerVisualSmall { get; set; }` |
| `Score` | `public SPScoreboardStatsVM Score { get; set; }` |
| `Parties` | `public MBBindingList<SPScoreboardPartyVM> Parties { get; set; }` |
| `Ships` | `public MBBindingList<SPScoreboardShipVM> Ships { get; set; }` |
| `SortController` | `public SPScoreboardSortControllerVM SortController { get; set; }` |
| `Morale` | `public float Morale { get; set; }` |
| `MoraleHint` | `public BasicTooltipViewModel MoraleHint { get; set; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### UpdateScores

```csharp
public void UpdateScores(IBattleCombatant battleCombatant, bool isPlayerParty, BasicCharacterObject character, int numberRemaining, int numberDead, int numberWounded, int numberRouted, int numberKilled, int numberReadyToUpgrade)
```

### UpdateHeroSkills

```csharp
public void UpdateHeroSkills(IBattleCombatant battleCombatant, bool isPlayerParty, BasicCharacterObject heroCharacter, SkillObject upgradedSkill)
```

### GetPartyAddIfNotExists

```csharp
public SPScoreboardPartyVM GetPartyAddIfNotExists(IBattleCombatant battleCombatant, bool isPlayerParty)
```

### GetParty

```csharp
public SPScoreboardPartyVM GetParty(IBattleCombatant battleCombatant)
```

### RemoveTroop

```csharp
public SPScoreboardStatsVM RemoveTroop(IBattleCombatant battleCombatant, BasicCharacterObject troop)
```

### AddTroop

```csharp
public void AddTroop(IBattleCombatant battleCombatant, BasicCharacterObject currentTroop, SPScoreboardStatsVM scoreToBringOver)
```

### GetShipAddIfNotExists

```csharp
public SPScoreboardShipVM GetShipAddIfNotExists(IShipOrigin ship, string shipType, IBattleCombatant owner, TeamSideEnum teamSideEnum)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)