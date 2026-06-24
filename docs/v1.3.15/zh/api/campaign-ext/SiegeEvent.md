<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SiegeEvent`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SiegeEvent

**Namespace:** TaleWorlds.CampaignSystem.Siege
**Module:** TaleWorlds.CampaignSystem
**Type:** public class SiegeEvent
**Base:** ?**File:** 

`TaleWorlds.CampaignSystem/Siege/SiegeEvent.cs

`

## 概述

`SiegeEvent

` 表示对定居点的进行中围攻——攻城方营地、被围定居点、攻城器械、炮击时机、封锁状态。它是战役层面的围攻对象（区别于任务层面的攻城战）。mod 查询围攻进度（`IsReadyToFire

`、`NextProjectileCollisionTime

`）、炮击与封锁，或响应围攻生命周期?
## 
## 心智模型

先把 `SiegeEvent` 当作这个子系统的入口或数据节点来理解：先看属性代表什么状态，再看方法允许你做什么。
主要属?
\| Name \| Signature \|
\|------\|-----------\|
\| 

`SiegeWallSeed

` \| 

`public int SiegeWallSeed { get { return Common.GetDJB2("" + this.SiegeStartTime.NumTicks + "*" + this.BesiegedSettlement.StringId + "*" + (int)this.BesiegedSettlement.SettlementTotalWallHitPoints); }

` \|
\| 

`IsPlayerSiegeEvent

` \| 

`public bool IsPlayerSiegeEvent { get { return this.BesiegerCamp.LeaderParty.IsMainParty \|\| PlayerSiege.PlayerSiegeEvent == this; }

` \|
\| 

`BlockadeShouldBeActivated

` \| 

`public bool BlockadeShouldBeActivated { get { return this._blockadeShouldBeActivated; }

` \|
\| 

`IsBlockadeActive

` \| 

`public bool IsBlockadeActive { get { return this._isBlockadeActive; }

` \|
\| 

`ReadyToBeRemoved

` \| 

`public bool ReadyToBeRemoved { get { return this.BesiegedSettlement.Party.SiegeEvent == null; }

` \|
\| 

`NextProjectileCollisionTime

` \| 

`public CampaignTime NextProjectileCollisionTime { get { if (this.LastBombardTime.IsFuture) { return CampaignTime.Never; }

` \|
\| 

`IsReadyToFire

` \| 

`public bool IsReadyToFire { get { return this.NextTimeEngineCanBombard.IsPast; }

` \|
\| 

`IsActive

` \| 

`public bool IsActive { get { return this.IsConstructed && !this.IsBeingRedeployed; }

` \|
\| 

`IsConstructed

` \| 

`public bool IsConstructed { get { return this.Progress &gt;= 1f; }

` \|
\| 

`IsBeingRedeployed

` \| 

`public bool IsBeingRedeployed { get { return this.RedeploymentProgress &lt; 1f; }

` \|
\| 

`DeployedSiegeEngines

` \| 

`public MBReadOnlyList&lt;SiegeEvent.SiegeEngineConstructionProgress&gt; DeployedSiegeEngines { get { return this._deployedSiegeEngines; }

` \|
\| 

`ReservedSiegeEngines

` \| 

`public MBReadOnlyList&lt;SiegeEvent.SiegeEngineConstructionProgress&gt; ReservedSiegeEngines { get { return this._reservedSiegeEngines; }

` \|
\| 

`RemovedSiegeEngines

` \| 

`public MBReadOnlyList&lt;SiegeEvent.SiegeEnginesContainer.RemovedSiegeEngine&gt; RemovedSiegeEngines { get { return this._removedSiegeEngines; }

` \|

## 主要方法

### ActivateBlockade
`

`

`csharp
public void ActivateBlockade()
`

`

`

### DeactivateBlockade
`

`

`csharp
public void DeactivateBlockade()
`

`

`

### GetInvolvedPartiesForEventType
`

`

`csharp
public List&lt;PartyBase&gt; GetInvolvedPartiesForEventType(MapEvent.BattleTypes battleType)
`

`

`

### GetCurrentBattleType
`

`

`csharp
public MapEvent.BattleTypes GetCurrentBattleType()
`

`

`

### GetSiegeEventSide
`

`

`csharp
public ISiegeEventSide GetSiegeEventSide(BattleSideEnum side)
`

`

`

### CanPartyJoinSide
`

`

`csharp
public bool CanPartyJoinSide(PartyBase party, BattleSideEnum side)
`

`

`

### Tick
`

`

`csharp
public void Tick(float dt)
`

`

`

### OnAfterLoad
`

`

`csharp
public void OnAfterLoad()
`

`

`

### OnBeforeSiegeEventEnd
`

`

`csharp
public void OnBeforeSiegeEventEnd(BattleState winnerSide, MapEvent.BattleTypes battleType)
`

`

`

### FinalizeSiegeEvent
`

`

`csharp
public void FinalizeSiegeEvent()
`

`

`

### IsPartyInvolved
`

`

`csharp
public bool IsPartyInvolved(PartyBase party)
`

`

`

### SetPositionAfterMapChange
`

`

`csharp
public void SetPositionAfterMapChange(CampaignVec2 newPosition)
`

`

`

### DoSiegeAction
`

`

`csharp
public void DoSiegeAction(ISiegeEventSide siegeEventSide, SiegeStrategyActionModel.SiegeAction siegeAction, SiegeEngineType siegeEngineType, int deploymentIndex, int reserveIndex)
`

`

`

### AdvanceStrategy
`

`

`csharp
public void AdvanceStrategy(ISiegeEventSide siegeEventSide)
`

`

`

### BreakSiegeEngine
`

`

`csharp
public void BreakSiegeEngine(ISiegeEventSide siegeEventSide, SiegeEngineType siegeEngineType)
`

`

`

### GetPreparedSiegeEnginesAsDictionary
`

`

`csharp
public Dictionary&lt;SiegeEngineType, int&gt; GetPreparedSiegeEnginesAsDictionary(ISiegeEventSide siegeEventSide)
`

`

`

### GetPreparedAndActiveSiegeEngines
`

`

`csharp
public List&lt;MissionSiegeWeapon&gt; GetPreparedAndActiveSiegeEngines(ISiegeEventSide siegeEventSide)
`

`

`

### SetSiegeEngineStatesAfterSiegeMission
`

`

`csharp
public void SetSiegeEngineStatesAfterSiegeMission(IEnumerable&lt;IMissionSiegeWeapon&gt; attackerMissionSiegeEngineData, IEnumerable&lt;IMissionSiegeWeapon&gt; defenderMissionSiegeEngineData)
`

`

`

### CreateSiegeObject
`

`

`csharp
public void CreateSiegeObject(SiegeEvent.SiegeEngineConstructionProgress siegeEngineConstructionProgress, ISiegeEventSide siegeSide)
`

`

`

### ToString
`

`

`csharp
public override string ToString()
`

`

`

### ConstructionTick
`

`

`csharp
public void ConstructionTick(ISiegeEventSide siegeEventSide)
`

`

`

### BombardTick
`

`

`csharp
public void BombardTick(ISiegeEventSide siegeEventSide)
`

`

`

### FindAttackableRangedEngineWithHighestPriority
`

`

`csharp
public void FindAttackableRangedEngineWithHighestPriority(ISiegeEventSide siegeEventSide, int attackerSlotIndex, out int targetIndex, out float targetPriority)
`

`

`

### Hold
`

`

`csharp
public void Hold()
`

`

`

### Reload
`

`

`csharp
public void Reload()
`

`

`

### OnFireDecisionTaken
`

`

`csharp
public void OnFireDecisionTaken(SiegeEvent siegeEvent, BattleSideEnum battleSide, int targetSlotIndex, SiegeBombardTargets targetType)
`

`

`

### SetRedeploymentProgress
`

`

`csharp
public void SetRedeploymentProgress(float redeploymentProgress)
`

`

`

### SetHitpoints
`

`

`csharp
public void SetHitpoints(float hitPoints)
`

`

`

### SetProgress
`

`

`csharp
public void SetProgress(float progress)
`

`

`

### SetRangedSiegeEngine
`

`

`csharp
public void SetRangedSiegeEngine(SiegeEvent.RangedSiegeEngine rangedSiegeEngine)
`

`

`

## 使用示例

`

`

`csharp
// 找到玩家目标定居点的围攻并报告炮击就绪状?Settlement s = Settlement.Find(settlementStringId);
SiegeEvent siege = s.Party.SiegeEvent;
if (siege != null)
{
    InformationManager.DisplayMessage(new InformationMessage(
        $"围攻 {s.Name}：封?{(siege.IsBlockadeActive ? "已激? : "未激?)}? +
        $"{(siege.IsReadyToFire ? "器械可开? : "器械充能?)}"));
}
`

`

`

## 参见

- [完整类目录](../catalog)