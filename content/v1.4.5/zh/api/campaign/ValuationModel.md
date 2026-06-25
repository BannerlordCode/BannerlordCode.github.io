---
title: "ValuationModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ValuationModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ValuationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class ValuationModel : MBGameModel<ValuationModel>`
**Base:** `MBGameModel<ValuationModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/ValuationModel.cs`

## 概述

`ValuationModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `ValuationModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetValueOfTroop
`public abstract float GetValueOfTroop(CharacterObject troop)`

**用途 / Purpose:** 获取 `value of troop` 的当前值。

### GetMilitaryValueOfParty
`public abstract float GetMilitaryValueOfParty(MobileParty party)`

**用途 / Purpose:** 获取 `military value of party` 的当前值。

### GetValueOfHero
`public abstract float GetValueOfHero(Hero hero)`

**用途 / Purpose:** 获取 `value of hero` 的当前值。

## 使用示例

```csharp
var implementation = new CustomValuationModel();
```

## 参见

- [完整类目录](../catalog)