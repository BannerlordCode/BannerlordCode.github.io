---
title: "ServiceException"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ServiceException`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ServiceException

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `public class ServiceException : Exception`
**Base:** `Exception`
**File:** `TaleWorlds.Network/ServiceException.cs`

## 概述

`ServiceException` 是一个异常类型，用来表达某种明确的错误条件；调用方需要决定是捕获、转换还是让它继续向上抛出。

## 心智模型

把 `ServiceException` 当作一个 Exception 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `ExceptionMessage` | `public string ExceptionMessage { get; set; }` |
| `ExceptionType` | `public string ExceptionType { get; set; }` |

## 使用示例

```csharp
try { CallServiceException(); } catch (ServiceException exception) { Handle(exception); }
```

## 参见

- [完整类目录](../catalog)