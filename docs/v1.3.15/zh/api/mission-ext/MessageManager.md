<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MessageManager`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 处理 `display message` 相关逻辑。

### DisplayMessage
`public static void DisplayMessage(string message, uint color)`

**用途 / Purpose:** 处理 `display message` 相关逻辑。

### DisplayDebugMessage
`public static void DisplayDebugMessage(string message)`

**用途 / Purpose:** 处理 `display debug message` 相关逻辑。

### DisplayMultilineMessage
`public static void DisplayMultilineMessage(string message, uint color)`

**用途 / Purpose:** 处理 `display multiline message` 相关逻辑。

### EraseMessageLines
`public static void EraseMessageLines()`

**用途 / Purpose:** 处理 `erase message lines` 相关逻辑。

### SetMessageManager
`public static void SetMessageManager(MessageManagerBase messageManager)`

**用途 / Purpose:** 设置 `message manager` 的值或状态。

## 使用示例

```csharp
var manager = MessageManager.Current;
```

## 参见

- [完整类目录](../catalog)