<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SettlementGarrisonModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SettlementGarrisonModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementGarrisonModel : MBGameModel<SettlementGarrisonModel>`
**Base:** `MBGameModel<SettlementGarrisonModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementGarrisonModel.cs`

## 概述

`SettlementGarrisonModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<SettlementGarrisonModel>(new MySettlementGarrisonModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetMaximumDailyAutoRecruitmentCount
```csharp
public abstract int GetMaximumDailyAutoRecruitmentCount(Town town)
```

### CalculateBaseGarrisonChange
```csharp
public abstract ExplainedNumber CalculateBaseGarrisonChange(Settlement settlement, bool includeDescriptions = false)
```

### FindNumberOfTroopsToTakeFromGarrison
```csharp
public abstract int FindNumberOfTroopsToTakeFromGarrison(MobileParty mobileParty, Settlement settlement, float idealGarrisonStrengthPerWalledCenter = 0f)
```

### FindNumberOfTroopsToLeaveToGarrison
```csharp
public abstract int FindNumberOfTroopsToLeaveToGarrison(MobileParty mobileParty, Settlement settlement)
```

### GetMaximumDailyRepairAmount
```csharp
public abstract float GetMaximumDailyRepairAmount(Settlement settlement)
```

## 使用示例

```csharp
// SettlementGarrisonModel (Model) 的典型用法
Game.Current.ReplaceModel<SettlementGarrisonModel>(new MySettlementGarrisonModel());
```

## 参见

- [完整类目录](../catalog)