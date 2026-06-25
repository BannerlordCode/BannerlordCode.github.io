---
title: "RestResponse"
description: "RestResponse 的自动生成类参考。"
---
# RestResponse

**Namespace:** TaleWorlds.Diamond.Rest
**Module:** TaleWorlds.Diamond
**Type:** `public sealed class RestResponse : RestData`
**Base:** `RestData`
**File:** `bin/TaleWorlds.Diamond/TaleWorlds.Diamond.Rest/RestResponse.cs`

## 概述

`RestResponse` 位于 `TaleWorlds.Diamond.Rest`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Diamond.Rest` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Successful` | `public bool Successful { get; }` |
| `SuccessfulReason` | `public string SuccessfulReason { get; }` |
| `FunctionResult` | `public RestFunctionResult FunctionResult { get; set; }` |
| `UserCertificate` | `public byte UserCertificate { get; set; }` |
| `RemainingMessageCount` | `public int RemainingMessageCount { get; }` |

## 主要方法

### SetSuccessful
`public void SetSuccessful(bool successful, string successfulReason)`

**用途 / Purpose:** 为 successful 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 RestResponse 实例
RestResponse restResponse = ...;
restResponse.SetSuccessful(false, "example");
```

### Create
`public static RestResponse Create(bool successful, string successfulReason)`

**用途 / Purpose:** 创建当前对象的新实例或相关实体。

```csharp
// 静态调用，不需要实例
RestResponse.Create(false, "example");
```

### TryDequeueMessage
`public RestResponseMessage TryDequeueMessage()`

**用途 / Purpose:** 尝试获取 dequeue message 的值，通常通过 out 参数返回是否成功。

```csharp
// 先通过子系统 API 拿到 RestResponse 实例
RestResponse restResponse = ...;
var result = restResponse.TryDequeueMessage();
```

### ClearMessageQueue
`public void ClearMessageQueue()`

**用途 / Purpose:** 清空当前对象中的message queue。

```csharp
// 先通过子系统 API 拿到 RestResponse 实例
RestResponse restResponse = ...;
restResponse.ClearMessageQueue();
```

### EnqueueMessage
`public void EnqueueMessage(RestResponseMessage message)`

**用途 / Purpose:** 调用 EnqueueMessage 对应的操作。

```csharp
// 先通过子系统 API 拿到 RestResponse 实例
RestResponse restResponse = ...;
restResponse.EnqueueMessage(message);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
RestResponse restResponse = ...;
restResponse.SetSuccessful(false, "example");
```

## 参见

- [本区域目录](../)