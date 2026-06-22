<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultBarterModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultBarterModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultBarterModel : BarterModel`
**Base:** `BarterModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultBarterModel.cs`

## 概述

`DefaultBarterModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultBarterModel>(new MyDefaultBarterModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `BarterCooldownWithHeroInDays` | `public override int BarterCooldownWithHeroInDays { get; }` |
| `MaximumPercentageOfNpcGoldToSpendAtBarter` | `public override float MaximumPercentageOfNpcGoldToSpendAtBarter { get; }` |

## 主要方法

### CalculateOverpayRelationIncreaseCosts
```csharp
public override int CalculateOverpayRelationIncreaseCosts(Hero hero, float overpayAmount)
```

### GetBarterPenalty
```csharp
public override ExplainedNumber GetBarterPenalty(IFaction faction, ItemBarterable itemBarterable, Hero otherHero, PartyBase otherParty)
```

## 使用示例

```csharp
// DefaultBarterModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultBarterModel>(new MyDefaultBarterModel());
```

## 参见

- [完整类目录](../catalog)