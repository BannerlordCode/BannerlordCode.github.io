---
title: "PartySpeedModel"
description: "PartySpeedModel 的自动生成类参考。"
---
# PartySpeedModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartySpeedModel : MBGameModel<PartySpeedModel>`
**Base:** `MBGameModel<PartySpeedModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartySpeedModel.cs`

## 概述

`PartySpeedModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `PartySpeedModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `BaseSpeed` | `public abstract float BaseSpeed { get; }` |
| `MinimumSpeed` | `public abstract float MinimumSpeed { get; }` |

## 主要方法

### CalculateBaseSpeed
`public abstract ExplainedNumber CalculateBaseSpeed(MobileParty party, bool includeDescriptions = false, int additionalTroopOnFootCount = 0, int additionalTroopOnHorseCount = 0)`

**用途 / Purpose:** **用途 / Purpose:** 计算base speed的当前值或结果。

```csharp
// 先通过子系统 API 拿到 PartySpeedModel 实例
PartySpeedModel partySpeedModel = ...;
var result = partySpeedModel.CalculateBaseSpeed(party, false, 0, 0);
```

### CalculateFinalSpeed
`public abstract ExplainedNumber CalculateFinalSpeed(MobileParty mobileParty, ExplainedNumber finalSpeed)`

**用途 / Purpose:** **用途 / Purpose:** 计算final speed的当前值或结果。

```csharp
// 先通过子系统 API 拿到 PartySpeedModel 实例
PartySpeedModel partySpeedModel = ...;
var result = partySpeedModel.CalculateFinalSpeed(mobileParty, finalSpeed);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
PartySpeedModel instance = ...;
```

## 参见

- [本区域目录](../)