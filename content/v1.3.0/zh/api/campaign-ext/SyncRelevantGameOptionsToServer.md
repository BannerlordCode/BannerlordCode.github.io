---
title: "SyncRelevantGameOptionsToServer"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SyncRelevantGameOptionsToServer`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SyncRelevantGameOptionsToServer

**Namespace:** NetworkMessages.FromClient
**Module:** NetworkMessages.FromClient
**Type:** `public sealed class SyncRelevantGameOptionsToServer : GameNetworkMessage`
**Base:** `GameNetworkMessage`
**File:** `TaleWorlds.MountAndBlade/NetworkMessages/FromClient/SyncRelevantGameOptionsToServer.cs`

## 概述

`SyncRelevantGameOptionsToServer` 位于 `NetworkMessages.FromClient`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `NetworkMessages.FromClient` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `SendMeBloodEvents` | `public bool SendMeBloodEvents { get; }` |
| `SendMeSoundEvents` | `public bool SendMeSoundEvents { get; }` |

## 主要方法

### InitializeOptions
`public void InitializeOptions()`

**用途 / Purpose:** 初始化 `options` 的状态、资源或绑定。

## 使用示例

```csharp
var value = new SyncRelevantGameOptionsToServer();
value.InitializeOptions();
```

## 参见

- [完整类目录](../catalog)