<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DailyTroopXpBonusModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DailyTroopXpBonusModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class DailyTroopXpBonusModel : MBGameModel<DailyTroopXpBonusModel>`
**Base:** `MBGameModel<DailyTroopXpBonusModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/DailyTroopXpBonusModel.cs`

## 概述

`DailyTroopXpBonusModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DailyTroopXpBonusModel>(new MyDailyTroopXpBonusModel())` 注册，以改变其计算逻辑。

## 主要方法

### CalculateDailyTroopXpBonus
```csharp
public abstract int CalculateDailyTroopXpBonus(Town town)
```

### CalculateGarrisonXpBonusMultiplier
```csharp
public abstract float CalculateGarrisonXpBonusMultiplier(Town town)
```

## 使用示例

```csharp
// DailyTroopXpBonusModel (Model) 的典型用法
Game.Current.ReplaceModel<DailyTroopXpBonusModel>(new MyDailyTroopXpBonusModel());
```

## 参见

- [完整类目录](../catalog)