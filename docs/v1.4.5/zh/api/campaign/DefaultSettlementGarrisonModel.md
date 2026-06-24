<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultSettlementGarrisonModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultSettlementGarrisonModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSettlementGarrisonModel : SettlementGarrisonModel`
**Base:** `SettlementGarrisonModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultSettlementGarrisonModel.cs`

## 概述

`DefaultSettlementGarrisonModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultSettlementGarrisonModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetMaximumDailyAutoRecruitmentCount
`public override int GetMaximumDailyAutoRecruitmentCount(Town town)`

**用途 / Purpose:** 获取 `maximum daily auto recruitment count` 的当前值。

### CalculateBaseGarrisonChange
`public override ExplainedNumber CalculateBaseGarrisonChange(Settlement settlement, bool includeDescriptions = false)`

**用途 / Purpose:** 处理 `calculate base garrison change` 相关逻辑。

### FindNumberOfTroopsToTakeFromGarrison
`public override int FindNumberOfTroopsToTakeFromGarrison(MobileParty mobileParty, Settlement settlement, float defaultIdealGarrisonStrengthPerWalledCenter = 0f)`

**用途 / Purpose:** 处理 `find number of troops to take from garrison` 相关逻辑。

### FindNumberOfTroopsToLeaveToGarrison
`public override int FindNumberOfTroopsToLeaveToGarrison(MobileParty mobileParty, Settlement settlement)`

**用途 / Purpose:** 处理 `find number of troops to leave to garrison` 相关逻辑。

### GetMaximumDailyRepairAmount
`public override float GetMaximumDailyRepairAmount(Settlement settlement)`

**用途 / Purpose:** 获取 `maximum daily repair amount` 的当前值。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultSettlementGarrisonModel>(new MyDefaultSettlementGarrisonModel());
```

## 参见

- [完整类目录](../catalog)