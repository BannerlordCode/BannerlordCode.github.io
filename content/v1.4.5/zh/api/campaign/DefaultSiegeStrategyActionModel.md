---
title: "DefaultSiegeStrategyActionModel"
description: "DefaultSiegeStrategyActionModel 的自动生成类参考。"
---
# DefaultSiegeStrategyActionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSiegeStrategyActionModel : SiegeStrategyActionModel`
**Base:** `SiegeStrategyActionModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultSiegeStrategyActionModel.cs`

## 概述

`DefaultSiegeStrategyActionModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultSiegeStrategyActionModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetLogicalActionForStrategy
`public override void GetLogicalActionForStrategy(ISiegeEventSide side, out SiegeAction siegeAction, out SiegeEngineType siegeEngineType, out int deploymentIndex, out int reserveIndex)`

**用途 / Purpose:** 读取并返回当前对象中 logical action for strategy 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultSiegeStrategyActionModel 实例
DefaultSiegeStrategyActionModel defaultSiegeStrategyActionModel = ...;
defaultSiegeStrategyActionModel.GetLogicalActionForStrategy(side, siegeAction, siegeEngineType, deploymentIndex, reserveIndex);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultSiegeStrategyActionModel>(new MyDefaultSiegeStrategyActionModel());
```

## 参见

- [本区域目录](../)