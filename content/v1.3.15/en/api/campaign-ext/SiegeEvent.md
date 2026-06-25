---
title: "SiegeEvent"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SiegeEvent`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SiegeEvent

**Namespace:** TaleWorlds.CampaignSystem.Siege
**Module:** TaleWorlds.CampaignSystem
**Type:** public class SiegeEvent
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Siege/SiegeEvent.cs`

## Overview

`SiegeEvent` represents an ongoing siege of a settlement — the besieger camp, besieged settlement, siege engines, bombardment timing, and blockade state. It is the campaign-scale siege object (distinct from the mission-scale siege battle). Mods query siege progress (`IsReadyToFire`, `NextProjectileCollisionTime`), bombardment, and blockade, or react to siege lifecycle.

## Mental Model

Treat `SiegeEvent` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

## Key Properties

| Name | Signature |
|------|-----------|
| `SiegeWallSeed` | `public int SiegeWallSeed { get { return Common.GetDJB2("" + this.SiegeStartTime.NumTicks + "*" + this.BesiegedSettlement.StringId + "*" + (int)this.BesiegedSettlement.SettlementTotalWallHitPoints); }` |
| `IsPlayerSiegeEvent` | `public bool IsPlayerSiegeEvent { get { return this.BesiegerCamp.LeaderParty.IsMainParty || PlayerSiege.PlayerSiegeEvent == this; }` |
| `BlockadeShouldBeActivated` | `public bool BlockadeShouldBeActivated { get { return this._blockadeShouldBeActivated; }` |
| `IsBlockadeActive` | `public bool IsBlockadeActive { get { return this._isBlockadeActive; }` |
| `ReadyToBeRemoved` | `public bool ReadyToBeRemoved { get { return this.BesiegedSettlement.Party.SiegeEvent == null; }` |
| `NextProjectileCollisionTime` | `public CampaignTime NextProjectileCollisionTime { get { if (this.LastBombardTime.IsFuture) { return CampaignTime.Never; }` |
| `IsReadyToFire` | `public bool IsReadyToFire { get { return this.NextTimeEngineCanBombard.IsPast; }` |
| `IsActive` | `public bool IsActive { get { return this.IsConstructed && !this.IsBeingRedeployed; }` |
| `IsConstructed` | `public bool IsConstructed { get { return this.Progress >= 1f; }` |
| `IsBeingRedeployed` | `public bool IsBeingRedeployed { get { return this.RedeploymentProgress < 1f; }` |
| `DeployedSiegeEngines` | `public MBReadOnlyList<SiegeEvent.SiegeEngineConstructionProgress> DeployedSiegeEngines { get { return this._deployedSiegeEngines; }` |
| `ReservedSiegeEngines` | `public MBReadOnlyList<SiegeEvent.SiegeEngineConstructionProgress> ReservedSiegeEngines { get { return this._reservedSiegeEngines; }` |
| `RemovedSiegeEngines` | `public MBReadOnlyList<SiegeEvent.SiegeEnginesContainer.RemovedSiegeEngine> RemovedSiegeEngines { get { return this._removedSiegeEngines; }` |

## Key Methods

### ActivateBlockade
```csharp
public void ActivateBlockade()
```

### DeactivateBlockade
```csharp
public void DeactivateBlockade()
```

### GetInvolvedPartiesForEventType
```csharp
public List<PartyBase> GetInvolvedPartiesForEventType(MapEvent.BattleTypes battleType)
```

### GetCurrentBattleType
```csharp
public MapEvent.BattleTypes GetCurrentBattleType()
```

### GetSiegeEventSide
```csharp
public ISiegeEventSide GetSiegeEventSide(BattleSideEnum side)
```

### CanPartyJoinSide
```csharp
public bool CanPartyJoinSide(PartyBase party, BattleSideEnum side)
```

### Tick
```csharp
public void Tick(float dt)
```

### OnAfterLoad
```csharp
public void OnAfterLoad()
```

### OnBeforeSiegeEventEnd
```csharp
public void OnBeforeSiegeEventEnd(BattleState winnerSide, MapEvent.BattleTypes battleType)
```

### FinalizeSiegeEvent
```csharp
public void FinalizeSiegeEvent()
```

### IsPartyInvolved
```csharp
public bool IsPartyInvolved(PartyBase party)
```

### SetPositionAfterMapChange
```csharp
public void SetPositionAfterMapChange(CampaignVec2 newPosition)
```

### DoSiegeAction
```csharp
public void DoSiegeAction(ISiegeEventSide siegeEventSide, SiegeStrategyActionModel.SiegeAction siegeAction, SiegeEngineType siegeEngineType, int deploymentIndex, int reserveIndex)
```

### AdvanceStrategy
```csharp
public void AdvanceStrategy(ISiegeEventSide siegeEventSide)
```

### BreakSiegeEngine
```csharp
public void BreakSiegeEngine(ISiegeEventSide siegeEventSide, SiegeEngineType siegeEngineType)
```

### GetPreparedSiegeEnginesAsDictionary
```csharp
public Dictionary<SiegeEngineType, int> GetPreparedSiegeEnginesAsDictionary(ISiegeEventSide siegeEventSide)
```

### GetPreparedAndActiveSiegeEngines
```csharp
public List<MissionSiegeWeapon> GetPreparedAndActiveSiegeEngines(ISiegeEventSide siegeEventSide)
```

### SetSiegeEngineStatesAfterSiegeMission
```csharp
public void SetSiegeEngineStatesAfterSiegeMission(IEnumerable<IMissionSiegeWeapon> attackerMissionSiegeEngineData, IEnumerable<IMissionSiegeWeapon> defenderMissionSiegeEngineData)
```

### CreateSiegeObject
```csharp
public void CreateSiegeObject(SiegeEvent.SiegeEngineConstructionProgress siegeEngineConstructionProgress, ISiegeEventSide siegeSide)
```

### ToString
```csharp
public override string ToString()
```

### ConstructionTick
```csharp
public void ConstructionTick(ISiegeEventSide siegeEventSide)
```

### BombardTick
```csharp
public void BombardTick(ISiegeEventSide siegeEventSide)
```

### FindAttackableRangedEngineWithHighestPriority
```csharp
public void FindAttackableRangedEngineWithHighestPriority(ISiegeEventSide siegeEventSide, int attackerSlotIndex, out int targetIndex, out float targetPriority)
```

### Hold
```csharp
public void Hold()
```

### Reload
```csharp
public void Reload()
```

### OnFireDecisionTaken
```csharp
public void OnFireDecisionTaken(SiegeEvent siegeEvent, BattleSideEnum battleSide, int targetSlotIndex, SiegeBombardTargets targetType)
```

### SetRedeploymentProgress
```csharp
public void SetRedeploymentProgress(float redeploymentProgress)
```

### SetHitpoints
```csharp
public void SetHitpoints(float hitPoints)
```

### SetProgress
```csharp
public void SetProgress(float progress)
```

### SetRangedSiegeEngine
```csharp
public void SetRangedSiegeEngine(SiegeEvent.RangedSiegeEngine rangedSiegeEngine)
```

## Usage Example

```csharp
// Find the siege of the player's target settlement and report bombardment readiness
Settlement s = Settlement.Find(settlementStringId);
SiegeEvent siege = s.Party.SiegeEvent;
if (siege != null)
{
    InformationManager.DisplayMessage(new InformationMessage(
        $"Siege of {s.Name}: blockade {(siege.IsBlockadeActive ? "active" : "inactive")}, " +
        $"{(siege.IsReadyToFire ? "engines ready to fire" : "engines recharging")}"));
}
```

## See Also

- [Complete Class Catalog](../catalog)