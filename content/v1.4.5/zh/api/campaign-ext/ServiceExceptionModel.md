---
title: "ServiceExceptionModel"
description: "ServiceExceptionModel 的自动生成类参考。"
---
# ServiceExceptionModel

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `public class ServiceExceptionModel`
**Base:** 无
**File:** `bin/TaleWorlds.Network/TaleWorlds.Network/ServiceExceptionModel.cs`

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

**用途 / Purpose:** **用途 / Purpose:** 调用 ToServiceException 对应的操作。

```csharp
// 先通过子系统 API 拿到 ServiceExceptionModel 实例
ServiceExceptionModel serviceExceptionModel = ...;
var result = serviceExceptionModel.ToServiceException();
```

## 使用示例

```csharp
Game.Current.ReplaceModel<ServiceExceptionModel>(new MyServiceExceptionModel());
```

## 参见

- [本区域目录](../)