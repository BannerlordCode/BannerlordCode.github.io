---
title: "ItemValueModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ItemValueModel`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ItemValueModel

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public abstract class ItemValueModel : MBGameModel<ItemValueModel>`
**Base:** `MBGameModel<ItemValueModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/ItemValueModel.cs`

## 概述

`ItemValueModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `ItemValueModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetEquipmentValueFromTier
`public abstract float GetEquipmentValueFromTier(float itemTierf)`

**用途 / Purpose:** 获取 `equipment value from tier` 的当前值。

### CalculateTier
`public abstract float CalculateTier(ItemObject item)`

**用途 / Purpose:** 处理 `calculate tier` 相关逻辑。

### CalculateValue
`public abstract int CalculateValue(ItemObject item)`

**用途 / Purpose:** 处理 `calculate value` 相关逻辑。

### GetIsTransferable
`public abstract bool GetIsTransferable(ItemObject item)`

**用途 / Purpose:** 获取 `is transferable` 的当前值。

## 使用示例

```csharp
var implementation = new CustomItemValueModel();
```

## 参见

- [完整类目录](../catalog)