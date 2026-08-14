---
title: "InitializeSessionResponse"
description: "InitializeSessionResponse 的自动生成类参考。"
---
# InitializeSessionResponse

**Namespace:** Messages.FromLobbyServer.ToClient
**Module:** Messages.FromLobbyServer
**Type:** `public class InitializeSessionResponse : LoginResultObject`
**Base:** `LoginResultObject`
**File:** `TaleWorlds.MountAndBlade.Diamond/Messages/FromLobbyServer/ToClient/InitializeSessionResponse.cs`

## 概述

`InitializeSessionResponse` 位于 `Messages.FromLobbyServer.ToClient`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Messages.FromLobbyServer.ToClient` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `PlayerData` | `public PlayerData PlayerData { get; }` |
| `ServerStatus` | `public ServerStatus ServerStatus { get; }` |
| `AvailableScenes` | `public AvailableScenes AvailableScenes { get; }` |
| `SupportedFeatures` | `public SupportedFeatures SupportedFeatures { get; }` |
| `HasPendingRejoin` | `public bool HasPendingRejoin { get; }` |

## 使用示例

```csharp
// 从对应子系统 API 获取实例
InitializeSessionResponse instance = ...;
```

## 参见

- [本区域目录](../)