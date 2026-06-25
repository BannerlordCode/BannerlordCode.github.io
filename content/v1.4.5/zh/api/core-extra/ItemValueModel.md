---
title: "ItemValueModel"
description: "ItemValueModel 的自动生成类参考。"
---
# ItemValueModel

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public abstract class ItemValueModel : MBGameModel<ItemValueModel>`
**Base:** `MBGameModel<ItemValueModel>`
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/ItemValueModel.cs`

## 概述

`ItemValueModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `ItemValueModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetEquipmentValueFromTier
`public abstract float GetEquipmentValueFromTier(float itemTierf)`

**用途 / Purpose:** 读取并返回当前对象中 「equipment value from tier」 的结果。

```csharp
// 先通过子系统 API 拿到 ItemValueModel 实例
ItemValueModel itemValueModel = ...;
var result = itemValueModel.GetEquipmentValueFromTier(0);
```

### CalculateTier
`public abstract float CalculateTier(ItemObject item)`

**用途 / Purpose:** 计算「tier」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 ItemValueModel 实例
ItemValueModel itemValueModel = ...;
var result = itemValueModel.CalculateTier(item);
```

### CalculateValue
`public abstract int CalculateValue(ItemObject item)`

**用途 / Purpose:** 计算「value」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 ItemValueModel 实例
ItemValueModel itemValueModel = ...;
var result = itemValueModel.CalculateValue(item);
```

### GetIsTransferable
`public abstract bool GetIsTransferable(ItemObject item)`

**用途 / Purpose:** 读取并返回当前对象中 「is transferable」 的结果。

```csharp
// 先通过子系统 API 拿到 ItemValueModel 实例
ItemValueModel itemValueModel = ...;
var result = itemValueModel.GetIsTransferable(item);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
ItemValueModel instance = ...;
```

## 参见

- [本区域目录](../)