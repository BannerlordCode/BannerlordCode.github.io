<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CompanionHiringPriceCalculationModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CompanionHiringPriceCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CompanionHiringPriceCalculationModel : MBGameModel<CompanionHiringPriceCalculationModel>`
**Base:** `MBGameModel<CompanionHiringPriceCalculationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/CompanionHiringPriceCalculationModel.cs`

## 概述

`CompanionHiringPriceCalculationModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<CompanionHiringPriceCalculationModel>(new MyCompanionHiringPriceCalculationModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetCompanionHiringPrice
```csharp
public abstract int GetCompanionHiringPrice(Hero companion)
```

## 使用示例

```csharp
// CompanionHiringPriceCalculationModel (Model) 的典型用法
Game.Current.ReplaceModel<CompanionHiringPriceCalculationModel>(new MyCompanionHiringPriceCalculationModel());
```

## 参见

- [完整类目录](../catalog)