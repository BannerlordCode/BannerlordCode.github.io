<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionAgentSpawnLogic`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionAgentSpawnLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionAgentSpawnLogic : MissionLogic, IMissionAgentSpawnLogic, IMissionBehavior`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/MissionAgentSpawnLogic.cs`

## 概述

`MissionAgentSpawnLogic` 是一个 MissionLogic（MissionBehavior 的子类），在任务中运行每-tick/事件逻辑。通过 `mission.AddMissionBehavior(new MissionAgentSpawnLogic())` 添加；继承它可定制。

## 主要属性

| Name | Signature |
|------|-----------|
| `NumberOfAgents` | `public int NumberOfAgents { get { return base.Mission.AllAgents.Count; }` |
| `NumberOfActiveDefenderTroops` | `public int NumberOfActiveDefenderTroops { get { MissionAgentSpawnLogic.SpawnPhase defenderActivePhase = this.DefenderActivePhase; if (defenderActivePhase == null) { return 0; }` |
| `NumberOfActiveAttackerTroops` | `public int NumberOfActiveAttackerTroops { get { MissionAgentSpawnLogic.SpawnPhase attackerActivePhase = this.AttackerActivePhase; if (attackerActivePhase == null) { return 0; }` |
| `NumberOfRemainingDefenderTroops` | `public int NumberOfRemainingDefenderTroops { get { MissionAgentSpawnLogic.SpawnPhase defenderActivePhase = this.DefenderActivePhase; if (defenderActivePhase == null) { return 0; }` |
| `NumberOfRemainingAttackerTroops` | `public int NumberOfRemainingAttackerTroops { get { MissionAgentSpawnLogic.SpawnPhase attackerActivePhase = this.AttackerActivePhase; if (attackerActivePhase == null) { return 0; }` |
| `BattleSize` | `public int BattleSize { get { return this._battleSize; }` |
| `IsInitialSpawnOver` | `public bool IsInitialSpawnOver { get { return this.DefenderActivePhase.InitialSpawnNumber + this.AttackerActivePhase.InitialSpawnNumber == 0; }` |
| `IsDeploymentOver` | `public bool IsDeploymentOver { get { return base.Mission.Mode != MissionMode.Deployment && this.IsInitialSpawnOver; }` |
| `ReinforcementSpawnSettings` | `public readonly ref MissionSpawnSettings ReinforcementSpawnSettings { get { return ref this._spawnSettings; }` |
| `NumTroops` | `public int NumTroops { get { return this.FootTroopCount + this.MountedTroopCount; }` |
| `IsPlayerSide` | `public bool IsPlayerSide { get; }` |
| `SpawnWithHorses` | `public bool SpawnWithHorses { get { return this._spawnWithHorses; }` |
| `NumberOfActiveTroops` | `public int NumberOfActiveTroops { get { return this._numSpawnedTroops - this._troopSupplier.NumRemovedTroops; }` |
| `ReinforcementQuotaRequirement` | `public int ReinforcementQuotaRequirement { get { return this._reinforcementQuotaRequirement; }` |
| `ReinforcementsSpawnedInLastBatch` | `public int ReinforcementsSpawnedInLastBatch { get { return this._reinforcementsSpawnedInLastBatch; }` |
| `ReinforcementBatchSize` | `public float ReinforcementBatchSize { get { return (float)this._reinforcementBatchSize; }` |
| `HasReservedTroops` | `public bool HasReservedTroops { get { return this._reservedTroops.Count > 0; }` |
| `ReinforcementBatchPriority` | `public float ReinforcementBatchPriority { get { return this._reinforcementBatchPriority; }` |
| `ReservedTroopsCount` | `public int ReservedTroopsCount { get { return this._reservedTroops.Count; }` |
| `HasSpawnableReinforcements` | `public bool HasSpawnableReinforcements { get { return this.ReinforcementSpawnActive && this.HasReservedTroops && this.ReinforcementBatchSize > 0f; }` |

## 主要方法

### AfterStart
```csharp
public override void AfterStart()
```

### GetNumberOfPlayerControllableTroops
```csharp
public int GetNumberOfPlayerControllableTroops()
```

### InitWithSinglePhase
```csharp
public void InitWithSinglePhase(int defenderTotalSpawn, int attackerTotalSpawn, int defenderInitialSpawn, int attackerInitialSpawn, bool spawnDefenders, bool spawnAttackers, in MissionSpawnSettings spawnSettings)
```

### GetAllTroopsForSide
```csharp
public IEnumerable<IAgentOriginBase> GetAllTroopsForSide(BattleSideEnum side)
```

### OnMissionTick
```csharp
public override void OnMissionTick(float dt)
```

### SetCustomReinforcementSpawnTimer
```csharp
public void SetCustomReinforcementSpawnTimer(ICustomReinforcementSpawnTimer timer)
```

### SetSpawnTroops
```csharp
public void SetSpawnTroops(BattleSideEnum side, bool spawnTroops, bool enforceSpawning = false)
```

### OnBehaviorInitialize
```csharp
public override void OnBehaviorInitialize()
```

### SetSpawnHorses
```csharp
public void SetSpawnHorses(BattleSideEnum side, bool spawnHorses)
```

### StartSpawner
```csharp
public void StartSpawner(BattleSideEnum side)
```

### StopSpawner
```csharp
public void StopSpawner(BattleSideEnum side)
```

### IsSideSpawnEnabled
```csharp
public bool IsSideSpawnEnabled(BattleSideEnum side)
```

### OnSideDeploymentOver
```csharp
public void OnSideDeploymentOver(BattleSideEnum battleSide)
```

### GetReinforcementInterval
```csharp
public float GetReinforcementInterval()
```

### SetReinforcementsSpawnEnabled
```csharp
public void SetReinforcementsSpawnEnabled(bool value, bool resetTimers = true)
```

### GetTotalNumberOfTroopsForSide
```csharp
public int GetTotalNumberOfTroopsForSide(BattleSideEnum side)
```

### GetGeneralCharacterOfSide
```csharp
public BasicCharacterObject GetGeneralCharacterOfSide(BattleSideEnum side)
```

### GetSpawnHorses
```csharp
public bool GetSpawnHorses(BattleSideEnum side)
```

### IsSideDepleted
```csharp
public bool IsSideDepleted(BattleSideEnum side)
```

### AddPhaseChangeAction
```csharp
public void AddPhaseChangeAction(BattleSideEnum side, MissionAgentSpawnLogic.OnPhaseChangedDelegate onPhaseChanged)
```

### GetNumberOfPlayerControllableTroops
```csharp
public int GetNumberOfPlayerControllableTroops()
```

### TryReinforcementSpawn
```csharp
public int TryReinforcementSpawn()
```

### GetTeamFormationsSpawnData
```csharp
public void GetTeamFormationsSpawnData( { "team", "formationSpawnData" })
```

### ReserveTroops
```csharp
public void ReserveTroops(int number)
```

### GetGeneralCharacter
```csharp
public BasicCharacterObject GetGeneralCharacter()
```

### CheckReinforcementBatch
```csharp
public unsafe bool CheckReinforcementBatch()
```

### GetAllTroops
```csharp
public IEnumerable<IAgentOriginBase> GetAllTroops()
```

### SpawnTroops
```csharp
public int SpawnTroops(int number, bool isReinforcement)
```

### SetSpawnWithHorses
```csharp
public void SetSpawnWithHorses(bool spawnWithHorses)
```

### SetBannerBearerLogic
```csharp
public void SetBannerBearerLogic(BannerBearerLogic bannerBearerLogic)
```

## 使用示例

```csharp
// MissionAgentSpawnLogic (Logic) 的典型用法
Mission.Current.AddMissionBehavior(new MissionAgentSpawnLogic());
```

## 参见

- [完整类目录](../catalog)