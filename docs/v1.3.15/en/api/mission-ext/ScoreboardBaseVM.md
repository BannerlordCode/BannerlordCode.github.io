<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ScoreboardBaseVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ScoreboardBaseVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `ScoreboardBaseVM` is a class in the `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `MissionTimeStr` | `public string MissionTimeStr { get; set; }` |
| `IsPowerComparerEnabled` | `public bool IsPowerComparerEnabled { get; set; }` |
| `QuitText` | `public string QuitText { get; set; }` |
| `ShowScoreboardText` | `public string ShowScoreboardText { get; set; }` |
| `FastForwardText` | `public string FastForwardText { get; set; }` |
| `MoraleText` | `public string MoraleText { get; set; }` |
| `Attackers` | `public SPScoreboardSideVM Attackers { get; set; }` |
| `Defenders` | `public SPScoreboardSideVM Defenders { get; set; }` |
| `NeutralTroops` | `public SPScoreboardSideVM NeutralTroops { get; set; }` |
| `KillHint` | `public HintViewModel KillHint { get; set; }` |
| `DeadHint` | `public HintViewModel DeadHint { get; set; }` |
| `UpgradeHint` | `public HintViewModel UpgradeHint { get; set; }` |
| `WoundedHint` | `public HintViewModel WoundedHint { get; set; }` |
| `RoutedHint` | `public HintViewModel RoutedHint { get; set; }` |
| `RemainingHint` | `public HintViewModel RemainingHint { get; set; }` |
| `BattleResultIndex` | `public int BattleResultIndex { get; set; }` |
| `BattleResult` | `public string BattleResult { get; set; }` |
| `IsMouseEnabled` | `public bool IsMouseEnabled { get; set; }` |
| `IsOver` | `public bool IsOver { get; set; }` |
| `SimulationResult` | `public string SimulationResult { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### OnMainHeroDeath

```csharp
public void OnMainHeroDeath()
```

### OnTakenControlOfAnotherAgent

```csharp
public void OnTakenControlOfAnotherAgent()
```

### Initialize

```csharp
public virtual void Initialize(IMissionScreen missionScreen, Mission mission, Action releaseSimulationSources, Action<bool> onToggle)
```

### OnDeploymentFinished

```csharp
public virtual void OnDeploymentFinished()
```

### Tick

```csharp
public void Tick(float dt)
```

### SetMouseState

```csharp
public void SetMouseState(bool visible)
```

### GetFormattedTimeTextFromSeconds

```csharp
public static string GetFormattedTimeTextFromSeconds(int seconds)
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### ExecuteShowScoreboardAction

```csharp
public virtual void ExecuteShowScoreboardAction()
```

### ExecutePlayAction

```csharp
public virtual void ExecutePlayAction()
```

### ExecuteFastForwardAction

```csharp
public virtual void ExecuteFastForwardAction()
```

### ExecutePauseSimulationAction

```csharp
public virtual void ExecutePauseSimulationAction()
```

### ExecuteEndSimulationAction

```csharp
public virtual void ExecuteEndSimulationAction()
```

### ExecuteQuitAction

```csharp
public virtual void ExecuteQuitAction()
```

### SetShortcuts

```csharp
public virtual void SetShortcuts(ScoreboardHotkeys shortcuts)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)