<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CustomBattleScoreboardVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CustomBattleScoreboardVM

**命名空间:** TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`CustomBattleScoreboardVM` 是 `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要方法

### Initialize

```csharp
public override void Initialize(IMissionScreen missionScreen, Mission mission, Action releaseSimulationSources, Action<bool> onToggle)
```

### RefreshValues

```csharp
public override void RefreshValues()
```

### ExecuteFastForwardAction

```csharp
public override void ExecuteFastForwardAction()
```

### ExecuteQuitAction

```csharp
public override void ExecuteQuitAction()
```

### OnBattleOver

```csharp
public void OnBattleOver()
```

### OnExitBattle

```csharp
public void OnExitBattle()
```

### TroopNumberChanged

```csharp
public void TroopNumberChanged(BattleSideEnum side, IBattleCombatant battleCombatant, BasicCharacterObject character, int number = 0, int numberDead = 0, int numberWounded = 0, int numberRouted = 0, int numberKilled = 0, int numberReadyToUpgrade = 0)
```

### HeroSkillIncreased

```csharp
public void HeroSkillIncreased(BattleSideEnum side, IBattleCombatant battleCombatant, BasicCharacterObject heroCharacter, SkillObject upgradedSkill)
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
- [本领域目录](../catalog-mountandblade)