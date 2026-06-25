---
title: "RestResponse"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `RestResponse`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# RestResponse

**Namespace:** TaleWorlds.Diamond.Rest
**Module:** TaleWorlds.Diamond
**Type:** `public sealed class RestResponse : RestData`
**Base:** `RestData`
**File:** `TaleWorlds.Diamond/Rest/RestResponse.cs`

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

**用途 / Purpose:** 设置 `successful` 的值或状态。

### Create
`public static RestResponse Create(bool successful, string successfulReason)`

**用途 / Purpose:** 创建一个 `create` 实例或对象。

### TryDequeueMessage
`public RestResponseMessage TryDequeueMessage()`

**用途 / Purpose:** 尝试获取 `dequeue message`，通常以 out 参数返回结果。

### ClearMessageQueue
`public void ClearMessageQueue()`

**用途 / Purpose:** 处理 `clear message queue` 相关逻辑。

### EnqueueMessage
`public void EnqueueMessage(RestResponseMessage message)`

**用途 / Purpose:** 处理 `enqueue message` 相关逻辑。

## 使用示例

```csharp
var value = new RestResponse();
value.SetSuccessful(false, "example");
```

## 参见

- [完整类目录](../catalog)