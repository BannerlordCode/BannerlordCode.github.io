---
title: "DefaultValuationModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultValuationModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultValuationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultValuationModel : ValuationModel`
**Base:** `ValuationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultValuationModel.cs`

## 概述

`DefaultValuationModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultValuationModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetMilitaryValueOfParty
`public override float GetMilitaryValueOfParty(MobileParty party)`

**用途 / Purpose:** 获取 `military value of party` 的当前值。

### GetValueOfTroop
`public override float GetValueOfTroop(CharacterObject troop)`

**用途 / Purpose:** 获取 `value of troop` 的当前值。

### GetValueOfHero
`public override float GetValueOfHero(Hero hero)`

**用途 / Purpose:** 获取 `value of hero` 的当前值。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultValuationModel>(new MyDefaultValuationModel());
```

## 参见

- [完整类目录](../catalog)