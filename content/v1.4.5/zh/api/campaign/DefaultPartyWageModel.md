---
title: "DefaultPartyWageModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultPartyWageModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultPartyWageModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartyWageModel : PartyWageModel`
**Base:** `PartyWageModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultPartyWageModel.cs`

## 概述

`DefaultPartyWageModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultPartyWageModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetCharacterWage
`public override int GetCharacterWage(CharacterObject character)`

**用途 / Purpose:** 获取 `character wage` 的当前值。

### GetTotalWage
`public override ExplainedNumber GetTotalWage(MobileParty mobileParty, TroopRoster troopRoster, bool includeDescriptions = false)`

**用途 / Purpose:** 获取 `total wage` 的当前值。

### GetTroopRecruitmentCost
`public override ExplainedNumber GetTroopRecruitmentCost(CharacterObject troop, Hero buyerHero, bool withoutItemCost = false)`

**用途 / Purpose:** 获取 `troop recruitment cost` 的当前值。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultPartyWageModel>(new MyDefaultPartyWageModel());
```

## 参见

- [完整类目录](../catalog)