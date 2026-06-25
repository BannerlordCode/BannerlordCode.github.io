---
title: "DefaultFleetManagementModel"
description: "DefaultFleetManagementModel 的自动生成类参考。"
---
# DefaultFleetManagementModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultFleetManagementModel : FleetManagementModel`
**Base:** `FleetManagementModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultFleetManagementModel.cs`

## 概述

`DefaultFleetManagementModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultFleetManagementModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `MinimumTroopCountRequiredToSendShips` | `public override int MinimumTroopCountRequiredToSendShips { get; }` |

## 主要方法

### CanTroopsReturn
`public override bool CanTroopsReturn()`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足 troops return 的前置条件。

```csharp
// 先通过子系统 API 拿到 DefaultFleetManagementModel 实例
DefaultFleetManagementModel defaultFleetManagementModel = ...;
var result = defaultFleetManagementModel.CanTroopsReturn();
```

### GetReturnTimeForTroops
`public override CampaignTime GetReturnTimeForTroops(Ship ship)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 return time for troops 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultFleetManagementModel 实例
DefaultFleetManagementModel defaultFleetManagementModel = ...;
var result = defaultFleetManagementModel.GetReturnTimeForTroops(ship);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultFleetManagementModel>(new MyDefaultFleetManagementModel());
```

## 参见

- [本区域目录](../)