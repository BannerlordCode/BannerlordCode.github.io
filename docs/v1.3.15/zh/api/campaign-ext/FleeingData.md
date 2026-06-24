<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `FleeingData`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FleeingData

**命名空间:** TaleWorlds.CampaignSystem.Party
**模块:** TaleWorlds.CampaignSystem
**类型:** `public class FleeingData`
**领域:** campaign-ext

## 概述

`FleeingData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `FleeingData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

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
`public void CacheAiBehaviorPartyBase()`

**用途 / Purpose:** 处理 `cache ai behavior party base` 相关逻辑。

### CheckPartyNeedsUpdate
`public void CheckPartyNeedsUpdate()`

**用途 / Purpose:** 处理 `check party needs update` 相关逻辑。

### CalculateFleePosition
`public void CalculateFleePosition(out CampaignVec2 fleeTargetPoint, MobileParty partyToFleeFrom, Vec2 averageEnemyVec)`

**用途 / Purpose:** 处理 `calculate flee position` 相关逻辑。

### GetNearbyPartyDataWhileDefendingSettlement
`public bool GetNearbyPartyDataWhileDefendingSettlement(Settlement targetSettlement, out bool shouldConsiderJoiningNearbyAllyParties, out bool shouldJoinLandSide, out bool shouldEngage, out MobileParty mostPowerfulLandAlly, out MobileParty mostPowerfulNavalAlly)`

**用途 / Purpose:** 获取 `nearby party data while defending settlement` 的当前值。

### DisableForHours
`public void DisableForHours(int hours)`

**用途 / Purpose:** 处理 `disable for hours` 相关逻辑。

### DisableAi
`public void DisableAi()`

**用途 / Purpose:** 处理 `disable ai` 相关逻辑。

### EnableAi
`public void EnableAi()`

**用途 / Purpose:** 处理 `enable ai` 相关逻辑。

### EnableAgainAtHourIsPast
`public bool EnableAgainAtHourIsPast()`

**用途 / Purpose:** 处理 `enable again at hour is past` 相关逻辑。

### SetDoNotAttackMainParty
`public void SetDoNotAttackMainParty(int hours)`

**用途 / Purpose:** 设置 `do not attack main party` 的值或状态。

### SetInitiative
`public void SetInitiative(float attackInitiative, float avoidInitiative, float hoursUntilReset)`

**用途 / Purpose:** 设置 `initiative` 的值或状态。

### SetDoNotMakeNewDecisions
`public void SetDoNotMakeNewDecisions(bool doNotMakeNewDecisions)`

**用途 / Purpose:** 设置 `do not make new decisions` 的值或状态。

### Clear
`public void Clear()`

**用途 / Purpose:** 处理 `clear` 相关逻辑。

## 使用示例

```csharp
var value = new FleeingData();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
