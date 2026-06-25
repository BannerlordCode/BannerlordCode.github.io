---
title: "DefaultItemValueModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultItemValueModel`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 处理 `calculate value` 相关逻辑。

### GetEquipmentValueFromTier
`public override float GetEquipmentValueFromTier(float itemTierf)`

**用途 / Purpose:** 获取 `equipment value from tier` 的当前值。

### CalculateTier
`public override float CalculateTier(ItemObject item)`

**用途 / Purpose:** 处理 `calculate tier` 相关逻辑。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultItemValueModel>(new MyDefaultItemValueModel());
```

## 参见

- [完整类目录](../catalog)