---
title: "PartyTransitionModel"
description: "PartyTransitionModel 的自动生成类参考。"
---
# PartyTransitionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyTransitionModel : MBGameModel<PartyTransitionModel>`
**Base:** `MBGameModel<PartyTransitionModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/PartyTransitionModel.cs`

## 概述

`PartyTransitionModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `PartyTransitionModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetTransitionTimeForEmbarking
`public abstract CampaignTime GetTransitionTimeForEmbarking(MobileParty mobileParty)`

**用途 / Purpose:** 读取并返回当前对象中 transition time for embarking 的结果。

```csharp
// 先通过子系统 API 拿到 PartyTransitionModel 实例
PartyTransitionModel partyTransitionModel = ...;
var result = partyTransitionModel.GetTransitionTimeForEmbarking(mobileParty);
```

### GetTransitionTimeDisembarking
`public abstract CampaignTime GetTransitionTimeDisembarking(MobileParty mobileParty)`

**用途 / Purpose:** 读取并返回当前对象中 transition time disembarking 的结果。

```csharp
// 先通过子系统 API 拿到 PartyTransitionModel 实例
PartyTransitionModel partyTransitionModel = ...;
var result = partyTransitionModel.GetTransitionTimeDisembarking(mobileParty);
```

### GetFleetTravelTimeToSettlement
`public abstract CampaignTime GetFleetTravelTimeToSettlement(MobileParty mobileParty, Settlement targetSettlement)`

**用途 / Purpose:** 读取并返回当前对象中 fleet travel time to settlement 的结果。

```csharp
// 先通过子系统 API 拿到 PartyTransitionModel 实例
PartyTransitionModel partyTransitionModel = ...;
var result = partyTransitionModel.GetFleetTravelTimeToSettlement(mobileParty, targetSettlement);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
PartyTransitionModel instance = ...;
```

## 参见

- [本区域目录](../)