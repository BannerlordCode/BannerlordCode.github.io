---
title: "DefaultPartyDesertionModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultPartyDesertionModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultPartyDesertionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartyDesertionModel : PartyDesertionModel`
**Base:** `PartyDesertionModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyDesertionModel.cs`

## 概述

`DefaultPartyDesertionModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultPartyDesertionModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetMoraleThresholdForTroopDesertion
`public override int GetMoraleThresholdForTroopDesertion()`

**用途 / Purpose:** 获取 `morale threshold for troop desertion` 的当前值。

### GetDesertionChanceForTroop
`public override float GetDesertionChanceForTroop(MobileParty mobileParty, in TroopRosterElement troopRosterElement)`

**用途 / Purpose:** 获取 `desertion chance for troop` 的当前值。

### GetTroopsToDesert
`public override TroopRoster GetTroopsToDesert(MobileParty mobileParty)`

**用途 / Purpose:** 获取 `troops to desert` 的当前值。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultPartyDesertionModel>(new MyDefaultPartyDesertionModel());
```

## 参见

- [完整类目录](../catalog)