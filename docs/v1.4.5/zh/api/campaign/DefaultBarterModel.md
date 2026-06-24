<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultBarterModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultBarterModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultBarterModel : BarterModel`
**Base:** `BarterModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultBarterModel.cs`

## 概述

`DefaultBarterModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultBarterModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CalculateOverpayRelationIncreaseCosts
`public override int CalculateOverpayRelationIncreaseCosts(Hero hero, float overpayAmount)`

**用途 / Purpose:** 处理 `calculate overpay relation increase costs` 相关逻辑。

### GetBarterPenalty
`public override ExplainedNumber GetBarterPenalty(IFaction faction, ItemBarterable itemBarterable, Hero otherHero, PartyBase otherParty)`

**用途 / Purpose:** 获取 `barter penalty` 的当前值。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultBarterModel>(new MyDefaultBarterModel());
```

## 参见

- [完整类目录](../catalog)