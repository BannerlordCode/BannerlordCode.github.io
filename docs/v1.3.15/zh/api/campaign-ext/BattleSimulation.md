<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BattleSimulation`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BattleSimulation

**命名空间:** TaleWorlds.CampaignSystem
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`BattleSimulation` 是 `TaleWorlds.CampaignSystem` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `IsSimulationFinished` | `public bool IsSimulationFinished { get; }` |
| `MapEvent` | `public MapEvent MapEvent { get; }` |
| `IsPlayerRetreated` | `public bool IsPlayerRetreated { get; set; }` |
| `BattleObserver` | `public IBattleObserver BattleObserver { get; }` |
| `Teams` | `public List<List<BattleResultPartyData>> Teams { get; }` |


## 主要方法

### Play

```csharp
public void Play()
```

### FastForward

```csharp
public void FastForward()
```

### Skip

```csharp
public void Skip()
```

### Pause

```csharp
public void Pause()
```

### OnFinished

```csharp
public void OnFinished()
```

### OnPlayerRetreat

```csharp
public void OnPlayerRetreat()
```

### Tick

```csharp
public void Tick(float dt)
```

### ResetSimulation

```csharp
public void ResetSimulation()
```

### TroopNumberChanged

```csharp
public void TroopNumberChanged(BattleSideEnum side, IBattleCombatant battleCombatant, BasicCharacterObject character, int number = 0, int numberKilled = 0, int numberWounded = 0, int numberRouted = 0, int killCount = 0, int numberReadyToUpgrade = 0)
```

### HeroSkillIncreased

```csharp
public void HeroSkillIncreased(BattleSideEnum side, IBattleCombatant battleCombatant, BasicCharacterObject heroCharacter, SkillObject skill)
```

### BattleResultsReady

```csharp
public void BattleResultsReady()
```

### TroopSideChanged

```csharp
public void TroopSideChanged(BattleSideEnum prevSide, BattleSideEnum newSide, IBattleCombatant battleCombatant, BasicCharacterObject character)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)