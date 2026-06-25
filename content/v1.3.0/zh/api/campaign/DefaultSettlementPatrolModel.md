---
title: "DefaultSettlementPatrolModel"
description: "DefaultSettlementPatrolModel 的自动生成类参考。"
---
# DefaultSettlementPatrolModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSettlementPatrolModel : SettlementPatrolModel`
**Base:** `SettlementPatrolModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementPatrolModel.cs`

## 概述

`DefaultSettlementPatrolModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultSettlementPatrolModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetPatrolPartySpawnDuration
`public override CampaignTime GetPatrolPartySpawnDuration(Settlement settlement)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 patrol party spawn duration 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultSettlementPatrolModel 实例
DefaultSettlementPatrolModel defaultSettlementPatrolModel = ...;
var result = defaultSettlementPatrolModel.GetPatrolPartySpawnDuration(settlement);
```

### CanSettlementHavePatrolParties
`public override bool CanSettlementHavePatrolParties(Settlement settlement)`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足 settlement have patrol parties 的前置条件。

```csharp
// 先通过子系统 API 拿到 DefaultSettlementPatrolModel 实例
DefaultSettlementPatrolModel defaultSettlementPatrolModel = ...;
var result = defaultSettlementPatrolModel.CanSettlementHavePatrolParties(settlement);
```

### GetPartyTemplateForPatrolParty
`public override PartyTemplateObject GetPartyTemplateForPatrolParty(Settlement settlement)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 party template for patrol party 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultSettlementPatrolModel 实例
DefaultSettlementPatrolModel defaultSettlementPatrolModel = ...;
var result = defaultSettlementPatrolModel.GetPartyTemplateForPatrolParty(settlement);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultSettlementPatrolModel>(new MyDefaultSettlementPatrolModel());
```

## 参见

- [本区域目录](../)