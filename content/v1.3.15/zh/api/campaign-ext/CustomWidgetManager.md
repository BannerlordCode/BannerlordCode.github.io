---
title: "CustomWidgetManager"
description: "CustomWidgetManager 的自动生成类参考。"
---
# CustomWidgetManager

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public static class CustomWidgetManager`
**Base:** 无
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/CustomWidgetManager.cs`

## 概述

`CustomWidgetManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `CustomWidgetManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### TouchAssembly
`public static void TouchAssembly()`

**用途 / Purpose:** **用途 / Purpose:** 调用 TouchAssembly 对应的操作。

```csharp
// 静态调用，不需要实例
CustomWidgetManager.TouchAssembly();
```

## 使用示例

```csharp
var manager = CustomWidgetManager.Current;
```

## 参见

- [本区域目录](../)