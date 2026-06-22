<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SPScoreboardPartyVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SPScoreboardPartyVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `SPScoreboardPartyVM` is a class in the `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `BattleCombatant` | `public IBattleCombatant BattleCombatant { get; }` |
| `CurrentPower` | `public float CurrentPower { get; }` |
| `InitialPower` | `public float InitialPower { get; }` |
| `Score` | `public SPScoreboardStatsVM Score { get; set; }` |
| `Members` | `public MBBindingList<SPScoreboardUnitVM> Members { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### UpdateScores

```csharp
public void UpdateScores(BasicCharacterObject character, int numberRemaining, int numberDead, int numberWounded, int numberRouted, int numberKilled, int numberReadyToUpgrade)
```

### UpdateHeroSkills

```csharp
public void UpdateHeroSkills(BasicCharacterObject heroCharacter, SkillObject upgradedSkill)
```

### GetUnitAddIfNotExists

```csharp
public SPScoreboardUnitVM GetUnitAddIfNotExists(BasicCharacterObject character)
```

### GetUnit

```csharp
public SPScoreboardUnitVM GetUnit(BasicCharacterObject character)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)