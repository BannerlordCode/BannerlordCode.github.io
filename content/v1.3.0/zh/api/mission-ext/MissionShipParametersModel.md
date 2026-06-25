---
title: "MissionShipParametersModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionShipParametersModel`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionShipParametersModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionShipParametersModel : MBGameModel<MissionShipParametersModel>`
**Base:** `MBGameModel<MissionShipParametersModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/MissionShipParametersModel.cs`

## 概述

`MissionShipParametersModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `MissionShipParametersModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CalculateMainDeckCrewSize
`public abstract int CalculateMainDeckCrewSize(IShipOrigin shipOrigin, Agent captain)`

**用途 / Purpose:** 处理 `calculate main deck crew size` 相关逻辑。

### CalculateWindBonus
`public abstract float CalculateWindBonus(IShipOrigin shipOrigin, Agent captain, float baseSailForceMagnitude)`

**用途 / Purpose:** 处理 `calculate wind bonus` 相关逻辑。

### CalculateOarForceMultiplier
`public abstract float CalculateOarForceMultiplier(Agent pilotAgent, float baseOarForce)`

**用途 / Purpose:** 处理 `calculate oar force multiplier` 相关逻辑。

## 使用示例

```csharp
var implementation = new CustomMissionShipParametersModel();
```

## 参见

- [完整类目录](../catalog)