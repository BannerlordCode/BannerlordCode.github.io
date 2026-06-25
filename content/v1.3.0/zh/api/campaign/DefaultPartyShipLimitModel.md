---
title: "DefaultPartyShipLimitModel"
description: "DefaultPartyShipLimitModel 的自动生成类参考。"
---
# DefaultPartyShipLimitModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartyShipLimitModel : PartyShipLimitModel`
**Base:** `PartyShipLimitModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyShipLimitModel.cs`

## 概述

`DefaultPartyShipLimitModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultPartyShipLimitModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetIdealShipNumber
`public override int GetIdealShipNumber(MobileParty mobileParty)`

**用途 / Purpose:** 读取并返回当前对象中 「ideal ship number」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultPartyShipLimitModel 实例
DefaultPartyShipLimitModel defaultPartyShipLimitModel = ...;
var result = defaultPartyShipLimitModel.GetIdealShipNumber(mobileParty);
```

### GetIdealShipNumber
`public override int GetIdealShipNumber(Clan clan)`

**用途 / Purpose:** 读取并返回当前对象中 「ideal ship number」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultPartyShipLimitModel 实例
DefaultPartyShipLimitModel defaultPartyShipLimitModel = ...;
var result = defaultPartyShipLimitModel.GetIdealShipNumber(clan);
```

### GetShipPriority
`public override float GetShipPriority(MobileParty mobileParty, Ship ship, bool isSelling)`

**用途 / Purpose:** 读取并返回当前对象中 「ship priority」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultPartyShipLimitModel 实例
DefaultPartyShipLimitModel defaultPartyShipLimitModel = ...;
var result = defaultPartyShipLimitModel.GetShipPriority(mobileParty, ship, false);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultPartyShipLimitModel>(new MyDefaultPartyShipLimitModel());
```

## 参见

- [本区域目录](../)