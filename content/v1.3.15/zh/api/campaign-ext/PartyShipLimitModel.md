---
title: "PartyShipLimitModel"
description: "PartyShipLimitModel 的自动生成类参考。"
---
# PartyShipLimitModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyShipLimitModel : MBGameModel<PartyShipLimitModel>`
**Base:** `MBGameModel<PartyShipLimitModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyShipLimitModel.cs`

## 概述

`PartyShipLimitModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `PartyShipLimitModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetIdealShipNumber
`public abstract int GetIdealShipNumber(MobileParty mobileParty)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 ideal ship number 的结果。

```csharp
// 先通过子系统 API 拿到 PartyShipLimitModel 实例
PartyShipLimitModel partyShipLimitModel = ...;
var result = partyShipLimitModel.GetIdealShipNumber(mobileParty);
```

### GetIdealShipNumber
`public abstract int GetIdealShipNumber(Clan clan)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 ideal ship number 的结果。

```csharp
// 先通过子系统 API 拿到 PartyShipLimitModel 实例
PartyShipLimitModel partyShipLimitModel = ...;
var result = partyShipLimitModel.GetIdealShipNumber(clan);
```

### GetShipPriority
`public abstract float GetShipPriority(MobileParty mobileParty, Ship ship, bool isSelling)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 ship priority 的结果。

```csharp
// 先通过子系统 API 拿到 PartyShipLimitModel 实例
PartyShipLimitModel partyShipLimitModel = ...;
var result = partyShipLimitModel.GetShipPriority(mobileParty, ship, false);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
PartyShipLimitModel instance = ...;
```

## 参见

- [本区域目录](../)