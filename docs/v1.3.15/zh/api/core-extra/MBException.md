<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBException`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBException

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class MBException : ApplicationException`
**Base:** `ApplicationException`
**File:** `TaleWorlds.Core/MBException.cs`

## 概述

`MBException` 是一个异常类型（继承自 Exception），在特定错误条件发生时抛出。捕获它以处理该错误。

## 使用示例

```csharp
// MBException (Exception) 的典型用法
try { /* call */ } catch (MBException e) { /* handle */ };
```

## 参见

- [完整类目录](../catalog)