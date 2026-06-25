---
title: "DefaultPartySpeedCalculatingModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultPartySpeedCalculatingModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultPartySpeedCalculatingModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartySpeedCalculatingModel : PartySpeedModel`
**Base:** `PartySpeedModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultPartySpeedCalculatingModel.cs`

## 概述

`DefaultPartySpeedCalculatingModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultPartySpeedCalculatingModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CalculateBaseSpeed
`public override ExplainedNumber CalculateBaseSpeed(MobileParty mobileParty, bool includeDescriptions = false, int additionalTroopOnFootCount = 0, int additionalTroopOnHorseCount = 0)`

**用途 / Purpose:** 处理 `calculate base speed` 相关逻辑。

### CalculateFinalSpeed
`public override ExplainedNumber CalculateFinalSpeed(MobileParty mobileParty, ExplainedNumber finalSpeed)`

**用途 / Purpose:** 处理 `calculate final speed` 相关逻辑。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultPartySpeedCalculatingModel>(new MyDefaultPartySpeedCalculatingModel());
```

## 参见

- [完整类目录](../catalog)