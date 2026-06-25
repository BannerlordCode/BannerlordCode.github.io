---
title: "ServiceExceptionModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ServiceExceptionModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ServiceExceptionModel

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `public class ServiceExceptionModel`
**Base:** 无
**File:** `TaleWorlds.Network/ServiceExceptionModel.cs`

## 概述

`ServiceExceptionModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `ServiceExceptionModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `ExceptionMessage` | `public string ExceptionMessage { get; set; }` |
| `ExceptionType` | `public string ExceptionType { get; set; }` |

## 主要方法

### ToServiceException
`public ServiceException ToServiceException()`

**用途 / Purpose:** 处理 `to service exception` 相关逻辑。

## 使用示例

```csharp
Game.Current.ReplaceModel<ServiceExceptionModel>(new MyServiceExceptionModel());
```

## 参见

- [完整类目录](../catalog)