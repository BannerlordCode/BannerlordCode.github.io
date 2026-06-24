<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MobilePartyAi`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MobilePartyAi

**Namespace:** TaleWorlds.CampaignSystem.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MobilePartyAi`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Party/MobilePartyAi.cs`

## 概述

`MobilePartyAi` 位于 `TaleWorlds.CampaignSystem.Party`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Party` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

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

### Clear
`public void Clear()`

**用途 / Purpose:** 处理 `clear` 相关逻辑。

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

## 使用示例

```csharp
var value = new MobilePartyAi();
value.Clear();
```

## 参见

- [完整类目录](../catalog)