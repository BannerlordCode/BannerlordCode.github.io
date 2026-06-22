<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultSettlementGarrisonModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultSettlementGarrisonModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSettlementGarrisonModel : SettlementGarrisonModel`
**Base:** `SettlementGarrisonModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementGarrisonModel.cs`

## 概述

`DefaultSettlementGarrisonModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultSettlementGarrisonModel>(new MyDefaultSettlementGarrisonModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetMaximumDailyAutoRecruitmentCount
```csharp
public override int GetMaximumDailyAutoRecruitmentCount(Town town)
```

### CalculateBaseGarrisonChange
```csharp
public override ExplainedNumber CalculateBaseGarrisonChange(Settlement settlement, bool includeDescriptions = false)
```

### FindNumberOfTroopsToTakeFromGarrison
```csharp
public override int FindNumberOfTroopsToTakeFromGarrison(MobileParty mobileParty, Settlement settlement, float defaultIdealGarrisonStrengthPerWalledCenter = 0f)
```

### FindNumberOfTroopsToLeaveToGarrison
```csharp
public override int FindNumberOfTroopsToLeaveToGarrison(MobileParty mobileParty, Settlement settlement)
```

### GetMaximumDailyRepairAmount
```csharp
public override float GetMaximumDailyRepairAmount(Settlement settlement)
```

## 使用示例

```csharp
// DefaultSettlementGarrisonModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultSettlementGarrisonModel>(new MyDefaultSettlementGarrisonModel());
```

## 参见

- [完整类目录](../catalog)