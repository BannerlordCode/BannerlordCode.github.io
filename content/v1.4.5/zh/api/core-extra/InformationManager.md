---
title: "InformationManager"
description: "InformationManager 的自动生成类参考。"
---
# InformationManager

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class InformationManager`
**Base:** 无
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/InformationManager.cs`

## 概述

`InformationManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `InformationManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### TooltipRegistry
`public struct TooltipRegistry(Type tooltipType, object onRefreshData, string movieName)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 InformationManager 实例
InformationManager informationManager = ...;
var result = informationManager.TooltipRegistry(tooltipType, onRefreshData, "example");
```

### IsAnyTooltipActiveDelegate
`public delegate void IsAnyTooltipActiveDelegate(out bool isAnyTooltipActive, out bool isAnyTooltipExtended)`

**用途 / Purpose:** 判断当前对象是否处于 「any tooltip active delegate」 状态或条件。

```csharp
// 先通过子系统 API 拿到 InformationManager 实例
InformationManager informationManager = ...;
informationManager.IsAnyTooltipActiveDelegate(isAnyTooltipActive, isAnyTooltipExtended);
```

### IsAnyInquiryActive
`public static bool IsAnyInquiryActive()`

**用途 / Purpose:** 判断当前对象是否处于 「any inquiry active」 状态或条件。

```csharp
// 静态调用，不需要实例
InformationManager.IsAnyInquiryActive();
```

### DisplayMessage
`public static void DisplayMessage(InformationMessage message)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
InformationManager.DisplayMessage(message);
```

### HideAllMessages
`public static void HideAllMessages()`

**用途 / Purpose:** 隐藏「all messages」对应的界面或元素。

```csharp
// 静态调用，不需要实例
InformationManager.HideAllMessages();
```

### ClearAllMessages
`public static void ClearAllMessages()`

**用途 / Purpose:** 清空当前对象中的「all messages」。

```csharp
// 静态调用，不需要实例
InformationManager.ClearAllMessages();
```

### AddSystemNotification
`public static void AddSystemNotification(string message)`

**用途 / Purpose:** 将 「system notification」 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
InformationManager.AddSystemNotification("example");
```

### ShowTooltip
`public static void ShowTooltip(Type type, params object args)`

**用途 / Purpose:** 显示「tooltip」对应的界面或元素。

```csharp
// 静态调用，不需要实例
InformationManager.ShowTooltip(type, args);
```

### HideTooltip
`public static void HideTooltip()`

**用途 / Purpose:** 隐藏「tooltip」对应的界面或元素。

```csharp
// 静态调用，不需要实例
InformationManager.HideTooltip();
```

### ShowInquiry
`public static void ShowInquiry(InquiryData data, bool pauseGameActiveState = false, bool prioritize = false)`

**用途 / Purpose:** 显示「inquiry」对应的界面或元素。

```csharp
// 静态调用，不需要实例
InformationManager.ShowInquiry(data, false, false);
```

### ShowTextInquiry
`public static void ShowTextInquiry(TextInquiryData textData, bool pauseGameActiveState = false, bool prioritize = false)`

**用途 / Purpose:** 显示「text inquiry」对应的界面或元素。

```csharp
// 静态调用，不需要实例
InformationManager.ShowTextInquiry(textData, false, false);
```

### HideInquiry
`public static void HideInquiry()`

**用途 / Purpose:** 隐藏「inquiry」对应的界面或元素。

```csharp
// 静态调用，不需要实例
InformationManager.HideInquiry();
```

### GetIsAnyTooltipActive
`public static bool GetIsAnyTooltipActive()`

**用途 / Purpose:** 读取并返回当前对象中 「is any tooltip active」 的结果。

```csharp
// 静态调用，不需要实例
InformationManager.GetIsAnyTooltipActive();
```

### GetIsAnyTooltipActiveAndExtended
`public static bool GetIsAnyTooltipActiveAndExtended()`

**用途 / Purpose:** 读取并返回当前对象中 「is any tooltip active and extended」 的结果。

```csharp
// 静态调用，不需要实例
InformationManager.GetIsAnyTooltipActiveAndExtended();
```

### Clear
`public static void Clear()`

**用途 / Purpose:** 清空当前对象中的内容。

```csharp
// 静态调用，不需要实例
InformationManager.Clear();
```

## 使用示例

```csharp
var manager = InformationManager.Current;
```

## 参见

- [本区域目录](../)