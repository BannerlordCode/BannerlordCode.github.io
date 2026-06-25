---
title: "CampaignShipDamageModel"
description: "CampaignShipDamageModel 的自动生成类参考。"
---
# CampaignShipDamageModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CampaignShipDamageModel : MBGameModel<CampaignShipDamageModel>`
**Base:** `MBGameModel<CampaignShipDamageModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/CampaignShipDamageModel.cs`

## 概述

`CampaignShipDamageModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `CampaignShipDamageModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetHourlyShipDamage
`public abstract int GetHourlyShipDamage(MobileParty owner, Ship ship)`

**用途 / Purpose:** 读取并返回当前对象中 「hourly ship damage」 的结果。

```csharp
// 先通过子系统 API 拿到 CampaignShipDamageModel 实例
CampaignShipDamageModel campaignShipDamageModel = ...;
var result = campaignShipDamageModel.GetHourlyShipDamage(owner, ship);
```

### GetEstimatedSafeSailDuration
`public abstract float GetEstimatedSafeSailDuration(MobileParty mobileParty)`

**用途 / Purpose:** 读取并返回当前对象中 「estimated safe sail duration」 的结果。

```csharp
// 先通过子系统 API 拿到 CampaignShipDamageModel 实例
CampaignShipDamageModel campaignShipDamageModel = ...;
var result = campaignShipDamageModel.GetEstimatedSafeSailDuration(mobileParty);
```

### GetShipDamage
`public abstract float GetShipDamage(Ship ship, Ship rammingShip, float rawDamage)`

**用途 / Purpose:** 读取并返回当前对象中 「ship damage」 的结果。

```csharp
// 先通过子系统 API 拿到 CampaignShipDamageModel 实例
CampaignShipDamageModel campaignShipDamageModel = ...;
var result = campaignShipDamageModel.GetShipDamage(ship, rammingShip, 0);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
CampaignShipDamageModel instance = ...;
```

## 参见

- [本区域目录](../)