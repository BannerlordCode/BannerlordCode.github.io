<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MessageManager`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MessageManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MessageManager`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/MessageManager.cs`

## Overview

`MessageManager` is a manager (often reached via a Current singleton or Mission.Current). Use it to access/modify its managed subsystem.

## Key Methods

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

## Usage Example

```csharp
// Typical usage of MessageManager (Manager)
MessageManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)