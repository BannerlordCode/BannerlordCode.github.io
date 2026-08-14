---
title: "DefaultItemValueModel"
description: "DefaultItemValueModel 的自动生成类参考。"
---
# DefaultItemValueModel

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class DefaultItemValueModel : ItemValueModel`
**Base:** `ItemValueModel`
**File:** `TaleWorlds.Core/DefaultItemValueModel.cs`

## 概述

`DefaultItemValueModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultItemValueModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CalculateValue
`public override int CalculateValue(ItemObject item)`

**用途 / Purpose:** 计算value的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultItemValueModel 实例
DefaultItemValueModel defaultItemValueModel = ...;
var result = defaultItemValueModel.CalculateValue(item);
```

### GetIsTransferable
`public override bool GetIsTransferable(ItemObject item)`

**用途 / Purpose:** 读取并返回当前对象中 is transferable 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultItemValueModel 实例
DefaultItemValueModel defaultItemValueModel = ...;
var result = defaultItemValueModel.GetIsTransferable(item);
```

### GetEquipmentValueFromTier
`public override float GetEquipmentValueFromTier(float itemTierf)`

**用途 / Purpose:** 读取并返回当前对象中 equipment value from tier 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultItemValueModel 实例
DefaultItemValueModel defaultItemValueModel = ...;
var result = defaultItemValueModel.GetEquipmentValueFromTier(0);
```

### CalculateTier
`public override float CalculateTier(ItemObject item)`

**用途 / Purpose:** 计算tier的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultItemValueModel 实例
DefaultItemValueModel defaultItemValueModel = ...;
var result = defaultItemValueModel.CalculateTier(item);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultItemValueModel>(new MyDefaultItemValueModel());
```

## 参见

- [本区域目录](../)