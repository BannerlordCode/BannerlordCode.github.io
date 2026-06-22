<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultDailyTroopXpBonusModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultDailyTroopXpBonusModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultDailyTroopXpBonusModel : DailyTroopXpBonusModel`
**Base:** `DailyTroopXpBonusModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultDailyTroopXpBonusModel.cs`

## 概述

`DefaultDailyTroopXpBonusModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultDailyTroopXpBonusModel>(new MyDefaultDailyTroopXpBonusModel())` 注册，以改变其计算逻辑。

## 主要方法

### CalculateDailyTroopXpBonus
```csharp
public override int CalculateDailyTroopXpBonus(Town town)
```

### CalculateGarrisonXpBonusMultiplier
```csharp
public override float CalculateGarrisonXpBonusMultiplier(Town town)
```

## 使用示例

```csharp
// DefaultDailyTroopXpBonusModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultDailyTroopXpBonusModel>(new MyDefaultDailyTroopXpBonusModel());
```

## 参见

- [完整类目录](../catalog)