---
title: "Army"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Army`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# Army

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class Army : ITrackableCampaignObject, ITrackableBase`
**Base:** `ITrackableCampaignObject`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/Army.cs`

## 概述

`Army` 位于 `TaleWorlds.CampaignSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ArmyType` | `public ArmyTypes ArmyType { get; set; }` |
| `ArmyOwner` | `public Hero ArmyOwner { get; set; }` |
| `Cohesion` | `public float Cohesion { get; set; }` |
| `Morale` | `public float Morale { get; }` |
| `LeaderParty` | `public MobileParty LeaderParty { get; }` |
| `EstimatedStrength` | `public float EstimatedStrength { get; }` |
| `Kingdom` | `public Kingdom Kingdom { get; set; }` |
| `AiBehaviorObject` | `public IMapPoint AiBehaviorObject { get; set; }` |
| `Name` | `public TextObject Name { get; }` |

## 主要方法

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### CalculateCurrentStrength
`public float CalculateCurrentStrength()`

**用途 / Purpose:** 处理 `calculate current strength` 相关逻辑。

### GetCustomStrength
`public float GetCustomStrength(BattleSideEnum side, MapEvent.PowerCalculationContext context)`

**用途 / Purpose:** 获取 `custom strength` 的当前值。

### UpdateName
`public void UpdateName()`

**用途 / Purpose:** 更新 `name` 的状态或数据。

### DoesLeaderPartyAndAttachedPartiesContain
`public bool DoesLeaderPartyAndAttachedPartiesContain(MobileParty party)`

**用途 / Purpose:** 处理 `does leader party and attached parties contain` 相关逻辑。

### BoostCohesionWithInfluence
`public void BoostCohesionWithInfluence(float cohesionToGain, int cost)`

**用途 / Purpose:** 处理 `boost cohesion with influence` 相关逻辑。

### RecalculateArmyMorale
`public void RecalculateArmyMorale()`

**用途 / Purpose:** 处理 `recalculate army morale` 相关逻辑。

### GetNotificationText
`public TextObject GetNotificationText()`

**用途 / Purpose:** 获取 `notification text` 的当前值。

### GetLongTermBehaviorText
`public TextObject GetLongTermBehaviorText(bool setWithLink = false)`

**用途 / Purpose:** 获取 `long term behavior text` 的当前值。

### Gather
`public void Gather(Settlement initialHostileSettlement, MBReadOnlyList<MobileParty> partiesToCallToArmy = null)`

**用途 / Purpose:** 处理 `gather` 相关逻辑。

### IsWaitingForArmyMembers
`public bool IsWaitingForArmyMembers()`

**用途 / Purpose:** 处理 `is waiting for army members` 相关逻辑。

### FinishArmyObjective
`public void FinishArmyObjective()`

**用途 / Purpose:** 处理 `finish army objective` 相关逻辑。

### GetRelativePositionForParty
`public Vec2 GetRelativePositionForParty(MobileParty mobileParty, Vec2 armyFacing)`

**用途 / Purpose:** 获取 `relative position for party` 的当前值。

### AddPartyToMergedParties
`public void AddPartyToMergedParties(MobileParty mobileParty)`

**用途 / Purpose:** 向当前集合/状态中添加 `party to merged parties`。

### SetPositionAfterMapChange
`public void SetPositionAfterMapChange(CampaignVec2 newPosition)`

**用途 / Purpose:** 设置 `position after map change` 的值或状态。

### CheckPositionsForMapChangeAndUpdateIfNeeded
`public void CheckPositionsForMapChangeAndUpdateIfNeeded()`

**用途 / Purpose:** 处理 `check positions for map change and update if needed` 相关逻辑。

## 使用示例

```csharp
var value = new Army();
value.ToString();
```

## 参见

- [完整类目录](../catalog)