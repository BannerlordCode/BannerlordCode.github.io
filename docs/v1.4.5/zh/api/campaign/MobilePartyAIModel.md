<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MobilePartyAIModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MobilePartyAIModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MobilePartyAIModel : MBGameModel<MobilePartyAIModel>`
**Base:** `MBGameModel<MobilePartyAIModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/MobilePartyAIModel.cs`

## 概述

`MobilePartyAIModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `MobilePartyAIModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `AiCheckInterval` | `public abstract float AiCheckInterval { get; }` |
| `FleeToNearbyPartyRadius` | `public abstract float FleeToNearbyPartyRadius { get; }` |
| `FleeToNearbySettlementRadius` | `public abstract float FleeToNearbySettlementRadius { get; }` |
| `HideoutPatrolDistanceAsDays` | `public abstract float HideoutPatrolDistanceAsDays { get; }` |
| `FortificationPatrolDistanceAsDays` | `public abstract float FortificationPatrolDistanceAsDays { get; }` |
| `FortificationPortPatrolDistanceAsDays` | `public abstract float FortificationPortPatrolDistanceAsDays { get; }` |
| `VillagePatrolDistanceAsDays` | `public abstract float VillagePatrolDistanceAsDays { get; }` |
| `SettlementDefendingNearbyPartyCheckRadius` | `public abstract float SettlementDefendingNearbyPartyCheckRadius { get; }` |
| `SettlementDefendingWaitingPositionRadius` | `public abstract float SettlementDefendingWaitingPositionRadius { get; }` |
| `NeededFoodsInDaysThresholdForSiege` | `public abstract float NeededFoodsInDaysThresholdForSiege { get; }` |
| `NeededFoodsInDaysThresholdForRaid` | `public abstract float NeededFoodsInDaysThresholdForRaid { get; }` |

## 主要方法

### ShouldConsiderAvoiding
`public abstract bool ShouldConsiderAvoiding(MobileParty party, MobileParty targetParty)`

**用途 / Purpose:** 处理 `should consider avoiding` 相关逻辑。

### ShouldConsiderAttacking
`public abstract bool ShouldConsiderAttacking(MobileParty party, MobileParty targetParty)`

**用途 / Purpose:** 处理 `should consider attacking` 相关逻辑。

### GetPatrolRadius
`public abstract float GetPatrolRadius(MobileParty mobileParty, CampaignVec2 patrolPoint)`

**用途 / Purpose:** 获取 `patrol radius` 的当前值。

### GetSettlementNearbyThreatAndAllyCheckRadius
`public abstract float GetSettlementNearbyThreatAndAllyCheckRadius(Settlement settlement, bool isPort)`

**用途 / Purpose:** 获取 `settlement nearby threat and ally check radius` 的当前值。

### ShouldPartyCheckInitiativeBehavior
`public abstract bool ShouldPartyCheckInitiativeBehavior(MobileParty mobileParty)`

**用途 / Purpose:** 处理 `should party check initiative behavior` 相关逻辑。

### GetBestInitiativeBehavior
`public abstract void GetBestInitiativeBehavior(MobileParty mobileParty, out AiBehavior bestInitiativeBehavior, out MobileParty bestInitiativeTargetParty, out float bestInitiativeBehaviorScore, out Vec2 averageEnemyVec)`

**用途 / Purpose:** 获取 `best initiative behavior` 的当前值。

## 使用示例

```csharp
var implementation = new CustomMobilePartyAIModel();
```

## 参见

- [完整类目录](../catalog)