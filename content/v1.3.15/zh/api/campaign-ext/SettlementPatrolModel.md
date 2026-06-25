---
title: "SettlementPatrolModel"
description: "SettlementPatrolModel 的自动生成类参考。"
---
# SettlementPatrolModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementPatrolModel : MBGameModel<SettlementPatrolModel>`
**Base:** `MBGameModel<SettlementPatrolModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementPatrolModel.cs`

## 概述

`SettlementPatrolModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `SettlementPatrolModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetPatrolPartySpawnDuration
`public abstract CampaignTime GetPatrolPartySpawnDuration(Settlement settlement, bool naval)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 patrol party spawn duration 的结果。

```csharp
// 先通过子系统 API 拿到 SettlementPatrolModel 实例
SettlementPatrolModel settlementPatrolModel = ...;
var result = settlementPatrolModel.GetPatrolPartySpawnDuration(settlement, false);
```

### CanSettlementHavePatrolParties
`public abstract bool CanSettlementHavePatrolParties(Settlement settlement, bool naval)`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足 settlement have patrol parties 的前置条件。

```csharp
// 先通过子系统 API 拿到 SettlementPatrolModel 实例
SettlementPatrolModel settlementPatrolModel = ...;
var result = settlementPatrolModel.CanSettlementHavePatrolParties(settlement, false);
```

### GetPartyTemplateForPatrolParty
`public abstract PartyTemplateObject GetPartyTemplateForPatrolParty(Settlement settlement, bool naval)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 party template for patrol party 的结果。

```csharp
// 先通过子系统 API 拿到 SettlementPatrolModel 实例
SettlementPatrolModel settlementPatrolModel = ...;
var result = settlementPatrolModel.GetPartyTemplateForPatrolParty(settlement, false);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
SettlementPatrolModel instance = ...;
```

## 参见

- [本区域目录](../)