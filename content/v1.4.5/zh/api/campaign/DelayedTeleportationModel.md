---
title: "DelayedTeleportationModel"
description: "DelayedTeleportationModel 的自动生成类参考。"
---
# DelayedTeleportationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class DelayedTeleportationModel : MBGameModel<DelayedTeleportationModel>`
**Base:** `MBGameModel<DelayedTeleportationModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/DelayedTeleportationModel.cs`

## 概述

`DelayedTeleportationModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DelayedTeleportationModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `DefaultTeleportationSpeed` | `public abstract float DefaultTeleportationSpeed { get; }` |

## 主要方法

### GetTeleportationDelayAsHours
`public abstract ExplainedNumber GetTeleportationDelayAsHours(Hero teleportingHero, PartyBase target)`

**用途 / Purpose:** 读取并返回当前对象中 teleportation delay as hours 的结果。

```csharp
// 先通过子系统 API 拿到 DelayedTeleportationModel 实例
DelayedTeleportationModel delayedTeleportationModel = ...;
var result = delayedTeleportationModel.GetTeleportationDelayAsHours(teleportingHero, target);
```

### CanPerformImmediateTeleport
`public abstract bool CanPerformImmediateTeleport(Hero hero, MobileParty targetMobileParty, Settlement targetSettlement)`

**用途 / Purpose:** 检查当前对象是否满足 perform immediate teleport 的前置条件。

```csharp
// 先通过子系统 API 拿到 DelayedTeleportationModel 实例
DelayedTeleportationModel delayedTeleportationModel = ...;
var result = delayedTeleportationModel.CanPerformImmediateTeleport(hero, targetMobileParty, targetSettlement);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
DelayedTeleportationModel instance = ...;
```

## 参见

- [本区域目录](../)