---
title: "InformationManager"
description: "InformationManager 的自动生成类参考。"
---
# InformationManager

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class InformationManager`
**Base:** 无
**File:** `TaleWorlds.Library/InformationManager.cs`

## 概述

`InformationManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `InformationManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `RegisteredTypes` | `public static IReadOnlyDictionary<Type, InformationManager.TooltipRegistry> RegisteredTypes { get; }` |

## 主要方法

### DisplayMessage
`public static void DisplayMessage(InformationMessage message)`

**用途 / Purpose:** 处理与 「display message」 相关的逻辑。

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

### RegisterIsAnyTooltipActiveCallback
`public static void RegisterIsAnyTooltipActiveCallback(Func<bool> callback)`

**用途 / Purpose:** 将「is any tooltip active callback」注册到当前系统，以便后续监听或分发。

```csharp
// 静态调用，不需要实例
InformationManager.RegisterIsAnyTooltipActiveCallback(callback);
```

### UnregisterIsAnyTooltipActiveCallback
`public static void UnregisterIsAnyTooltipActiveCallback(Func<bool> callback)`

**用途 / Purpose:** 从当前系统中注销「is any tooltip active callback」。

```csharp
// 静态调用，不需要实例
InformationManager.UnregisterIsAnyTooltipActiveCallback(callback);
```

### RegisterIsAnyTooltipExtendedCallback
`public static void RegisterIsAnyTooltipExtendedCallback(Func<bool> callback)`

**用途 / Purpose:** 将「is any tooltip extended callback」注册到当前系统，以便后续监听或分发。

```csharp
// 静态调用，不需要实例
InformationManager.RegisterIsAnyTooltipExtendedCallback(callback);
```

### UnregisterIsAnyTooltipExtendedCallback
`public static void UnregisterIsAnyTooltipExtendedCallback(Func<bool> callback)`

**用途 / Purpose:** 从当前系统中注销「is any tooltip extended callback」。

```csharp
// 静态调用，不需要实例
InformationManager.UnregisterIsAnyTooltipExtendedCallback(callback);
```

### GetIsAnyTooltipActive
`public static bool GetIsAnyTooltipActive()`

**用途 / Purpose:** 读取并返回当前对象中 「is any tooltip active」 的结果。

```csharp
// 静态调用，不需要实例
InformationManager.GetIsAnyTooltipActive();
```

### GetIsAnyTooltipExtended
`public static bool GetIsAnyTooltipExtended()`

**用途 / Purpose:** 读取并返回当前对象中 「is any tooltip extended」 的结果。

```csharp
// 静态调用，不需要实例
InformationManager.GetIsAnyTooltipExtended();
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