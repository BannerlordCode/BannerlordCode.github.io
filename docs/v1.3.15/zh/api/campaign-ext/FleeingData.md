<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `FleeingData`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FleeingData

**命名空间:** TaleWorlds.CampaignSystem.Party
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`FleeingData` 是 `TaleWorlds.CampaignSystem.Party` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `IsDisabled` | `public bool IsDisabled { get; }` |
| `RethinkAtNextHourlyTick` | `public bool RethinkAtNextHourlyTick { get; }` |
| `DoNotMakeNewDecisions` | `public bool DoNotMakeNewDecisions { get; }` |
| `IsAlerted` | `public bool IsAlerted { get; }` |
| `DoNotAttackMainPartyUntil` | `public CampaignTime DoNotAttackMainPartyUntil { get; set; }` |
| `AvoidInitiative` | `public float AvoidInitiative { get; }` |
| `AttackInitiative` | `public float AttackInitiative { get; }` |
| `AiBehaviorPartyBase` | `public PartyBase AiBehaviorPartyBase { get; }` |
| `AiBehaviorInteractable` | `public IInteractablePoint AiBehaviorInteractable { get; set; }` |


## 主要方法

### CacheAiBehaviorPartyBase

```csharp
public void CacheAiBehaviorPartyBase()
```

### CheckPartyNeedsUpdate

```csharp
public void CheckPartyNeedsUpdate()
```

### CalculateFleePosition

```csharp
public void CalculateFleePosition(out CampaignVec2 fleeTargetPoint, MobileParty partyToFleeFrom, Vec2 averageEnemyVec)
```

### GetNearbyPartyDataWhileDefendingSettlement

```csharp
public bool GetNearbyPartyDataWhileDefendingSettlement(Settlement targetSettlement, out bool shouldConsiderJoiningNearbyAllyParties, out bool shouldJoinLandSide, out bool shouldEngage, out MobileParty mostPowerfulLandAlly, out MobileParty mostPowerfulNavalAlly)
```

### DisableForHours

```csharp
public void DisableForHours(int hours)
```

### DisableAi

```csharp
public void DisableAi()
```

### EnableAi

```csharp
public void EnableAi()
```

### EnableAgainAtHourIsPast

```csharp
public bool EnableAgainAtHourIsPast()
```

### SetDoNotAttackMainParty

```csharp
public void SetDoNotAttackMainParty(int hours)
```

### SetInitiative

```csharp
public void SetInitiative(float attackInitiative, float avoidInitiative, float hoursUntilReset)
```

### SetDoNotMakeNewDecisions

```csharp
public void SetDoNotMakeNewDecisions(bool doNotMakeNewDecisions)
```

### Clear

```csharp
public void Clear()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)