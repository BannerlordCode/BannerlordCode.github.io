---
title: "DefaultPartyTransitionModel"
description: "DefaultPartyTransitionModel 的自动生成类参考。"
---
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

**用途 / Purpose:** 读取并返回当前对象中 「fleet travel time to point」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultPartyTransitionModel 实例
DefaultPartyTransitionModel defaultPartyTransitionModel = ...;
var result = defaultPartyTransitionModel.GetFleetTravelTimeToPoint(mobileParty, target);
```

### GetTransitionTimeDisembarking
`public override CampaignTime GetTransitionTimeDisembarking(MobileParty mobileParty)`

**用途 / Purpose:** 读取并返回当前对象中 「transition time disembarking」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultPartyTransitionModel 实例
DefaultPartyTransitionModel defaultPartyTransitionModel = ...;
var result = defaultPartyTransitionModel.GetTransitionTimeDisembarking(mobileParty);
```

### GetTransitionTimeForEmbarking
`public override CampaignTime GetTransitionTimeForEmbarking(MobileParty mobileParty)`

**用途 / Purpose:** 读取并返回当前对象中 「transition time for embarking」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultPartyTransitionModel 实例
DefaultPartyTransitionModel defaultPartyTransitionModel = ...;
var result = defaultPartyTransitionModel.GetTransitionTimeForEmbarking(mobileParty);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultPartyTransitionModel>(new MyDefaultPartyTransitionModel());
```

## 参见

- [本区域目录](../)