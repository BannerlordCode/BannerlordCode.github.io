---
title: "MapNavigationHelper"
description: "MapNavigationHelper 的自动生成类参考。"
---
# MapNavigationHelper

**Namespace:** SandBox.View.Map.Navigation
**Module:** SandBox.View
**Type:** `public static class MapNavigationHelper`
**Base:** 无
**File:** `Modules.SandBox/SandBox.View/SandBox.View.Map.Navigation/MapNavigationHelper.cs`

## 概述

`MapNavigationHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `MapNavigationHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetUnsavedChangedInquiry
`public static InquiryData GetUnsavedChangedInquiry(Action openNewScreenAction)`

**用途 / Purpose:** 读取并返回当前对象中 「unsaved changed inquiry」 的结果。

```csharp
// 静态调用，不需要实例
MapNavigationHelper.GetUnsavedChangedInquiry(openNewScreenAction);
```

### GetUnapplicableChangedInquiry
`public static InquiryData GetUnapplicableChangedInquiry()`

**用途 / Purpose:** 读取并返回当前对象中 「unapplicable changed inquiry」 的结果。

```csharp
// 静态调用，不需要实例
MapNavigationHelper.GetUnapplicableChangedInquiry();
```

### IsMapTopScreen
`public static bool IsMapTopScreen()`

**用途 / Purpose:** 判断当前对象是否处于 「map top screen」 状态或条件。

```csharp
// 静态调用，不需要实例
MapNavigationHelper.IsMapTopScreen();
```

### IsNavigationBarEnabled
`public static bool IsNavigationBarEnabled(MapNavigationHandler handler)`

**用途 / Purpose:** 判断当前对象是否处于 「navigation bar enabled」 状态或条件。

```csharp
// 静态调用，不需要实例
MapNavigationHelper.IsNavigationBarEnabled(handler);
```

### SwitchToANewScreen
`public static void SwitchToANewScreen(Action openNewScreenAction)`

**用途 / Purpose:** 处理与 「switch to a new screen」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MapNavigationHelper.SwitchToANewScreen(openNewScreenAction);
```

## 使用示例

```csharp
MapNavigationHelper.Initialize();
```

## 参见

- [本区域目录](../)