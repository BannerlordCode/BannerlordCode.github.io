---
title: "MessageManager"
description: "MessageManager 的自动生成类参考。"
---
# MessageManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MessageManager`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/MessageManager.cs`

## 概述

`MessageManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `MessageManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### DisplayMessage
`public static void DisplayMessage(string message)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
MessageManager.DisplayMessage("example");
```

### DisplayMessage
`public static void DisplayMessage(string message, uint color)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
MessageManager.DisplayMessage("example", 0);
```

### DisplayDebugMessage
`public static void DisplayDebugMessage(string message)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
MessageManager.DisplayDebugMessage("example");
```

### DisplayMultilineMessage
`public static void DisplayMultilineMessage(string message, uint color)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
MessageManager.DisplayMultilineMessage("example", 0);
```

### EraseMessageLines
`public static void EraseMessageLines()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
MessageManager.EraseMessageLines();
```

### SetMessageManager
`public static void SetMessageManager(MessageManagerBase messageManager)`

**用途 / Purpose:** 为 「message manager」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
MessageManager.SetMessageManager(messageManager);
```

## 使用示例

```csharp
var manager = MessageManager.Current;
```

## 参见

- [本区域目录](../)