<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SPScoreboardSideVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SPScoreboardSideVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `SPScoreboardSideVM` is a class in the `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

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


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)