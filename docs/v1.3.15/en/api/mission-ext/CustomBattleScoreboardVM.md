<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CustomBattleScoreboardVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CustomBattleScoreboardVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `CustomBattleScoreboardVM` is a class in the `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)