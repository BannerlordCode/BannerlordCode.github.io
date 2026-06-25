---
title: "DefaultMinorFactionsModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultMinorFactionsModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultMinorFactionsModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultMinorFactionsModel : MinorFactionsModel`
**Base:** `MinorFactionsModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultMinorFactionsModel.cs`

## 概述

`DefaultMinorFactionsModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultMinorFactionsModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetMercenaryAwardFactorToJoinKingdom
`public override int GetMercenaryAwardFactorToJoinKingdom(Clan mercenaryClan, Kingdom kingdom, bool neededAmountForClanToJoinCalculation = false)`

**用途 / Purpose:** 获取 `mercenary award factor to join kingdom` 的当前值。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultMinorFactionsModel>(new MyDefaultMinorFactionsModel());
```

## 参见

- [完整类目录](../catalog)