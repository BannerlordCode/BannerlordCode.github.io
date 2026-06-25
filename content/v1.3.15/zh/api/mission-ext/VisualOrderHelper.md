---
title: "VisualOrderHelper"
description: "VisualOrderHelper 的自动生成类参考。"
---
# VisualOrderHelper

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class VisualOrderHelper`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Order/Visual/VisualOrderHelper.cs`

## 概述

`VisualOrderHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `VisualOrderHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### DoesFormationHaveOrderType
`public unsafe static bool DoesFormationHaveOrderType(Formation formation, OrderType type)`

**用途 / Purpose:** **用途 / Purpose:** 返回formation have order type对当前对象是否成立的布尔结果。

```csharp
// 静态调用，不需要实例
VisualOrderHelper.DoesFormationHaveOrderType(formation, type);
```

## 使用示例

```csharp
VisualOrderHelper.Initialize();
```

## 参见

- [本区域目录](../)