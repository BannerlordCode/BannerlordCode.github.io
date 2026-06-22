<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MessageManager`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MessageManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MessageManager`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/MessageManager.cs`

## 概述

`MessageManager` 是一个管理器（通常经 Current 单例或 Mission.Current 访问）。用它访问/修改其管理的子系统。

## 主要方法

### DisplayMessage
```csharp
public static void DisplayMessage(string message)
```

### DisplayMessage
```csharp
public static void DisplayMessage(string message, uint color)
```

### DisplayDebugMessage
```csharp
public static void DisplayDebugMessage(string message)
```

### DisplayMultilineMessage
```csharp
public static void DisplayMultilineMessage(string message, uint color)
```

### EraseMessageLines
```csharp
public static void EraseMessageLines()
```

### SetMessageManager
```csharp
public static void SetMessageManager(MessageManagerBase messageManager)
```

## 使用示例

```csharp
// MessageManager (Manager) 的典型用法
MessageManager.Current;
```

## 参见

- [完整类目录](../catalog)