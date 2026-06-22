<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BattleSimulation`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BattleSimulation

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `BattleSimulation` is a class in the `TaleWorlds.CampaignSystem` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `IsSimulationFinished` | `public bool IsSimulationFinished { get; }` |
| `MapEvent` | `public MapEvent MapEvent { get; }` |
| `IsPlayerRetreated` | `public bool IsPlayerRetreated { get; set; }` |
| `BattleObserver` | `public IBattleObserver BattleObserver { get; }` |
| `Teams` | `public List<List<BattleResultPartyData>> Teams { get; }` |


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)