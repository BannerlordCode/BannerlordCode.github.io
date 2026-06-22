<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SPScoreboardUnitVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SPScoreboardUnitVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `SPScoreboardUnitVM` is a class in the `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `IsGainedAnySkills` | `public bool IsGainedAnySkills { get; set; }` |
| `GainedSkills` | `public MBBindingList<SPScoreboardSkillItemVM> GainedSkills { get; set; }` |
| `IsHero` | `public bool IsHero { get; set; }` |
| `Score` | `public SPScoreboardStatsVM Score { get; set; }` |


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)