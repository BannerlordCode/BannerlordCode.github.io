<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BarterModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BarterModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class BarterModel : MBGameModel<BarterModel>`
**Base:** `MBGameModel<BarterModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/BarterModel.cs`

## 概述

`BarterModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<BarterModel>(new MyBarterModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `BarterCooldownWithHeroInDays` | `public abstract int BarterCooldownWithHeroInDays { get; }` |
| `MaximumPercentageOfNpcGoldToSpendAtBarter` | `public abstract float MaximumPercentageOfNpcGoldToSpendAtBarter { get; }` |

## 主要方法

### CalculateOverpayRelationIncreaseCosts
```csharp
public abstract int CalculateOverpayRelationIncreaseCosts(Hero hero, float overpayAmount)
```

### GetBarterPenalty
```csharp
public abstract ExplainedNumber GetBarterPenalty(IFaction faction, ItemBarterable itemBarterable, Hero otherHero, PartyBase otherParty)
```

## 使用示例

```csharp
// BarterModel (Model) 的典型用法
Game.Current.ReplaceModel<BarterModel>(new MyBarterModel());
```

## 参见

- [完整类目录](../catalog)