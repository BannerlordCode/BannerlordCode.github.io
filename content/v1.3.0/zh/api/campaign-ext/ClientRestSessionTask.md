---
title: "ClientRestSessionTask"
description: "ClientRestSessionTask 的自动生成类参考。"
---
# ClientRestSessionTask

**Namespace:** TaleWorlds.Diamond.Rest
**Module:** TaleWorlds.Diamond
**Type:** `internal class ClientRestSessionTask`
**Base:** 无
**File:** `TaleWorlds.Diamond/Rest/ClientRestSessionTask.cs`

## 概述

`ClientRestSessionTask` 位于 `TaleWorlds.Diamond.Rest`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Diamond.Rest` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `RestRequestMessage` | `public RestRequestMessage RestRequestMessage { get; }` |
| `Finished` | `public bool Finished { get; }` |
| `Successful` | `public bool Successful { get; }` |
| `Request` | `public IHttpRequestTask Request { get; }` |
| `RestResponse` | `public RestResponse RestResponse { get; }` |
| `IsCompletelyFinished` | `public bool IsCompletelyFinished { get; }` |

## 主要方法

### SetRequestData
`public void SetRequestData(byte userCertificate, string address, IHttpDriver networkClient)`

**用途 / Purpose:** **用途 / Purpose:** 为 request data 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ClientRestSessionTask 实例
ClientRestSessionTask clientRestSessionTask = ...;
clientRestSessionTask.SetRequestData(0, "example", networkClient);
```

### Tick
`public void Tick()`

**用途 / Purpose:** **用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 ClientRestSessionTask 实例
ClientRestSessionTask clientRestSessionTask = ...;
clientRestSessionTask.Tick();
```

### WaitUntilFinished
`public async Task WaitUntilFinished()`

**用途 / Purpose:** **用途 / Purpose:** 暂停当前流程，直到until finished条件满足。

```csharp
// 先通过子系统 API 拿到 ClientRestSessionTask 实例
ClientRestSessionTask clientRestSessionTask = ...;
var result = clientRestSessionTask.WaitUntilFinished();
```

### SetFinishedAsSuccessful
`public void SetFinishedAsSuccessful(RestResponse restResponse)`

**用途 / Purpose:** **用途 / Purpose:** 为 finished as successful 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ClientRestSessionTask 实例
ClientRestSessionTask clientRestSessionTask = ...;
clientRestSessionTask.SetFinishedAsSuccessful(restResponse);
```

### SetFinishedAsFailed
`public void SetFinishedAsFailed()`

**用途 / Purpose:** **用途 / Purpose:** 为 finished as failed 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ClientRestSessionTask 实例
ClientRestSessionTask clientRestSessionTask = ...;
clientRestSessionTask.SetFinishedAsFailed();
```

### SetFinishedAsFailed
`public void SetFinishedAsFailed(RestResponse restResponse)`

**用途 / Purpose:** **用途 / Purpose:** 为 finished as failed 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ClientRestSessionTask 实例
ClientRestSessionTask clientRestSessionTask = ...;
clientRestSessionTask.SetFinishedAsFailed(restResponse);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ClientRestSessionTask clientRestSessionTask = ...;
clientRestSessionTask.SetRequestData(0, "example", networkClient);
```

## 参见

- [本区域目录](../)