<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TWException`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TWException

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class TWException : ApplicationException`
**Base:** `ApplicationException`
**File:** `TaleWorlds.Library/TWException.cs`

## 概述

`TWException` 是一个异常类型（继承自 Exception），在特定错误条件发生时抛出。捕获它以处理该错误。

## 使用示例

```csharp
// TWException (Exception) 的典型用法
try { /* call */ } catch (TWException e) { /* handle */ };
```

## 参见

- [完整类目录](../catalog)