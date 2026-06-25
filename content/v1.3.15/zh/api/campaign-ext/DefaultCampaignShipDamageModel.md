---
title: "DefaultCampaignShipDamageModel"
description: "DefaultCampaignShipDamageModel 的自动生成类参考。"
---
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

**用途 / Purpose:** 读取并返回当前对象中 「hourly ship damage」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultCampaignShipDamageModel 实例
DefaultCampaignShipDamageModel defaultCampaignShipDamageModel = ...;
var result = defaultCampaignShipDamageModel.GetHourlyShipDamage(owner, ship);
```

### GetEstimatedSafeSailDuration
`public override float GetEstimatedSafeSailDuration(MobileParty mobileParty)`

**用途 / Purpose:** 读取并返回当前对象中 「estimated safe sail duration」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultCampaignShipDamageModel 实例
DefaultCampaignShipDamageModel defaultCampaignShipDamageModel = ...;
var result = defaultCampaignShipDamageModel.GetEstimatedSafeSailDuration(mobileParty);
```

### GetShipDamage
`public override float GetShipDamage(Ship ship, Ship rammingShip, float rawDamage)`

**用途 / Purpose:** 读取并返回当前对象中 「ship damage」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultCampaignShipDamageModel 实例
DefaultCampaignShipDamageModel defaultCampaignShipDamageModel = ...;
var result = defaultCampaignShipDamageModel.GetShipDamage(ship, rammingShip, 0);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultCampaignShipDamageModel>(new MyDefaultCampaignShipDamageModel());
```

## 参见

- [本区域目录](../)