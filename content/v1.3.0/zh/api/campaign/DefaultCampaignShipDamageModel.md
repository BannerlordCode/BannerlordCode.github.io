---
title: "DefaultCampaignShipDamageModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultCampaignShipDamageModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultCampaignShipDamageModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultCampaignShipDamageModel : CampaignShipDamageModel`
**Base:** `CampaignShipDamageModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultCampaignShipDamageModel.cs`

## 概述

`DefaultCampaignShipDamageModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultCampaignShipDamageModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetHourlyShipDamage
`public override int GetHourlyShipDamage(MobileParty owner, Ship ship)`

**用途 / Purpose:** 获取 `hourly ship damage` 的当前值。

### GetEstimatedSafeSailDuration
`public override float GetEstimatedSafeSailDuration(MobileParty mobileParty)`

**用途 / Purpose:** 获取 `estimated safe sail duration` 的当前值。

### GetShipDamage
`public override float GetShipDamage(Ship ship, float rawDamage)`

**用途 / Purpose:** 获取 `ship damage` 的当前值。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultCampaignShipDamageModel>(new MyDefaultCampaignShipDamageModel());
```

## 参见

- [完整类目录](../catalog)