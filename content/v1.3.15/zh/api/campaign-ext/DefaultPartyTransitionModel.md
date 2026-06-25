---
title: "DefaultPartyTransitionModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultPartyTransitionModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultPartyTransitionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartyTransitionModel : PartyTransitionModel`
**Base:** `PartyTransitionModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyTransitionModel.cs`

## 概述

`DefaultPartyTransitionModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultPartyTransitionModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetFleetTravelTimeToPoint
`public override CampaignTime GetFleetTravelTimeToPoint(MobileParty mobileParty, CampaignVec2 target)`

**用途 / Purpose:** 获取 `fleet travel time to point` 的当前值。

### GetTransitionTimeDisembarking
`public override CampaignTime GetTransitionTimeDisembarking(MobileParty mobileParty)`

**用途 / Purpose:** 获取 `transition time disembarking` 的当前值。

### GetTransitionTimeForEmbarking
`public override CampaignTime GetTransitionTimeForEmbarking(MobileParty mobileParty)`

**用途 / Purpose:** 获取 `transition time for embarking` 的当前值。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultPartyTransitionModel>(new MyDefaultPartyTransitionModel());
```

## 参见

- [完整类目录](../catalog)