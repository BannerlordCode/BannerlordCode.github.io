<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultMobilePartyAIModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultMobilePartyAIModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultMobilePartyAIModel : MobilePartyAIModel`
**Base:** `MobilePartyAIModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultMobilePartyAIModel.cs`

## 概述

`DefaultMobilePartyAIModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultMobilePartyAIModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `AiCheckInterval` | `public override float AiCheckInterval { get; }` |
| `FleeToNearbyPartyRadius` | `public override float FleeToNearbyPartyRadius { get; }` |
| `FleeToNearbySettlementRadius` | `public override float FleeToNearbySettlementRadius { get; }` |
| `HideoutPatrolDistanceAsDays` | `public override float HideoutPatrolDistanceAsDays { get; }` |
| `FortificationPatrolDistanceAsDays` | `public override float FortificationPatrolDistanceAsDays { get; }` |
| `VillagePatrolDistanceAsDays` | `public override float VillagePatrolDistanceAsDays { get; }` |
| `SettlementDefendingNearbyPartyCheckRadius` | `public override float SettlementDefendingNearbyPartyCheckRadius { get; }` |
| `SettlementDefendingWaitingPositionRadius` | `public override float SettlementDefendingWaitingPositionRadius { get; }` |
| `NeededFoodsInDaysThresholdForMilitaryAction` | `public override float NeededFoodsInDaysThresholdForMilitaryAction { get; }` |

## 主要方法

### ShouldConsiderAttacking
`public override bool ShouldConsiderAttacking(MobileParty party, MobileParty targetParty)`

**用途 / Purpose:** 处理 `should consider attacking` 相关逻辑。

### ShouldConsiderAvoiding
`public override bool ShouldConsiderAvoiding(MobileParty party, MobileParty targetParty)`

**用途 / Purpose:** 处理 `should consider avoiding` 相关逻辑。

### GetPatrolRadius
`public override float GetPatrolRadius(MobileParty mobileParty, CampaignVec2 patrolPoint)`

**用途 / Purpose:** 获取 `patrol radius` 的当前值。

### ShouldPartyCheckInitiativeBehavior
`public override bool ShouldPartyCheckInitiativeBehavior(MobileParty mobileParty)`

**用途 / Purpose:** 处理 `should party check initiative behavior` 相关逻辑。

### GetBestInitiativeBehavior
`public override void GetBestInitiativeBehavior(MobileParty mobileParty, out AiBehavior bestInitiativeBehavior, out MobileParty bestInitiativeTargetParty, out float bestInitiativeBehaviorScore, out Vec2 averageEnemyVec)`

**用途 / Purpose:** 获取 `best initiative behavior` 的当前值。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultMobilePartyAIModel>(new MyDefaultMobilePartyAIModel());
```

## 参见

- [完整类目录](../catalog)