<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MobilePartyFoodConsumptionModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MobilePartyFoodConsumptionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MobilePartyFoodConsumptionModel : MBGameModel<MobilePartyFoodConsumptionModel>`
**Base:** `MBGameModel<MobilePartyFoodConsumptionModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/MobilePartyFoodConsumptionModel.cs`

## 概述

`MobilePartyFoodConsumptionModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<MobilePartyFoodConsumptionModel>(new MyMobilePartyFoodConsumptionModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `NumberOfMenOnMapToEatOneFood` | `public abstract int NumberOfMenOnMapToEatOneFood { get; }` |

## 主要方法

### CalculateDailyBaseFoodConsumptionf
```csharp
public abstract ExplainedNumber CalculateDailyBaseFoodConsumptionf(MobileParty party, bool includeDescription = false)
```

### CalculateDailyFoodConsumptionf
```csharp
public abstract ExplainedNumber CalculateDailyFoodConsumptionf(MobileParty party, ExplainedNumber baseConsumption)
```

### DoesPartyConsumeFood
```csharp
public abstract bool DoesPartyConsumeFood(MobileParty mobileParty)
```

## 使用示例

```csharp
// MobilePartyFoodConsumptionModel (Model) 的典型用法
Game.Current.ReplaceModel<MobilePartyFoodConsumptionModel>(new MyMobilePartyFoodConsumptionModel());
```

## 参见

- [完整类目录](../catalog)