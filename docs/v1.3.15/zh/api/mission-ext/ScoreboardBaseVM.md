<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ScoreboardBaseVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ScoreboardBaseVM

**命名空间:** TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`ScoreboardBaseVM` 是 `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

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


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)