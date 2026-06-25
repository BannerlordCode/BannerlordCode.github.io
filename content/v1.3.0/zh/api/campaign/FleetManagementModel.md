---
title: "FleetManagementModel"
description: "FleetManagementModel 的自动生成类参考。"
---
# FleetManagementModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class FleetManagementModel : MBGameModel<FleetManagementModel>`
**Base:** `MBGameModel<FleetManagementModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/FleetManagementModel.cs`

## 概述

`FleetManagementModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `FleetManagementModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `MinimumTroopCountRequiredToSendShips` | `public abstract int MinimumTroopCountRequiredToSendShips { get; }` |

## 主要方法

### CanTroopsReturn
`public abstract bool CanTroopsReturn()`

**用途 / Purpose:** 检查当前对象是否满足 troops return 的前置条件。

```csharp
// 先通过子系统 API 拿到 FleetManagementModel 实例
FleetManagementModel fleetManagementModel = ...;
var result = fleetManagementModel.CanTroopsReturn();
```

### GetReturnTimeForTroops
`public abstract CampaignTime GetReturnTimeForTroops(Ship ship)`

**用途 / Purpose:** 读取并返回当前对象中 return time for troops 的结果。

```csharp
// 先通过子系统 API 拿到 FleetManagementModel 实例
FleetManagementModel fleetManagementModel = ...;
var result = fleetManagementModel.GetReturnTimeForTroops(ship);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
FleetManagementModel instance = ...;
```

## 参见

- [本区域目录](../)