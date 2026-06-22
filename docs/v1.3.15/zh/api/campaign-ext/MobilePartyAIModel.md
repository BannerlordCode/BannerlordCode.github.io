<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MobilePartyAIModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MobilePartyAIModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MobilePartyAIModel : MBGameModel<MobilePartyAIModel>`
**Base:** `MBGameModel<MobilePartyAIModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/MobilePartyAIModel.cs`

## 概述

`MobilePartyAIModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<MobilePartyAIModel>(new MyMobilePartyAIModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `AiCheckInterval` | `public abstract float AiCheckInterval { get; }` |
| `FleeToNearbyPartyRadius` | `public abstract float FleeToNearbyPartyRadius { get; }` |
| `FleeToNearbySettlementRadius` | `public abstract float FleeToNearbySettlementRadius { get; }` |
| `HideoutPatrolDistanceAsDays` | `public abstract float HideoutPatrolDistanceAsDays { get; }` |
| `FortificationPatrolDistanceAsDays` | `public abstract float FortificationPatrolDistanceAsDays { get; }` |
| `VillagePatrolDistanceAsDays` | `public abstract float VillagePatrolDistanceAsDays { get; }` |
| `SettlementDefendingNearbyPartyCheckRadius` | `public abstract float SettlementDefendingNearbyPartyCheckRadius { get; }` |
| `SettlementDefendingWaitingPositionRadius` | `public abstract float SettlementDefendingWaitingPositionRadius { get; }` |
| `NeededFoodsInDaysThresholdForSiege` | `public abstract float NeededFoodsInDaysThresholdForSiege { get; }` |
| `NeededFoodsInDaysThresholdForRaid` | `public abstract float NeededFoodsInDaysThresholdForRaid { get; }` |

## 主要方法

### ShouldConsiderAvoiding
```csharp
public abstract bool ShouldConsiderAvoiding(MobileParty party, MobileParty targetParty)
```

### ShouldConsiderAttacking
```csharp
public abstract bool ShouldConsiderAttacking(MobileParty party, MobileParty targetParty)
```

### GetPatrolRadius
```csharp
public abstract float GetPatrolRadius(MobileParty mobileParty, CampaignVec2 patrolPoint)
```

### ShouldPartyCheckInitiativeBehavior
```csharp
public abstract bool ShouldPartyCheckInitiativeBehavior(MobileParty mobileParty)
```

### GetBestInitiativeBehavior
```csharp
public abstract void GetBestInitiativeBehavior(MobileParty mobileParty, out AiBehavior bestInitiativeBehavior, out MobileParty bestInitiativeTargetParty, out float bestInitiativeBehaviorScore, out Vec2 averageEnemyVec)
```

## 使用示例

```csharp
// MobilePartyAIModel (Model) 的典型用法
Game.Current.ReplaceModel<MobilePartyAIModel>(new MyMobilePartyAIModel());
```

## 参见

- [完整类目录](../catalog)