---
title: "LoginResult"
description: "LoginResult 的自动生成类参考。"
---
# LoginResult

**Namespace:** TaleWorlds.Diamond
**Module:** TaleWorlds.Diamond
**Type:** `public sealed class LoginResult : FunctionResult`
**Base:** `FunctionResult`
**File:** `bin/TaleWorlds.Diamond/TaleWorlds.Diamond/LoginResult.cs`

## 概述

`LoginResult` 位于 `TaleWorlds.Diamond`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Diamond` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `PeerId` | `public PeerId PeerId { get; }` |
| `SessionKey` | `public SessionKey SessionKey { get; }` |
| `Successful` | `public bool Successful { get; }` |
| `ErrorCode` | `public string ErrorCode { get; }` |
| `ErrorParameters` | `public Dictionary<string, string> ErrorParameters { get; }` |
| `ProviderResponse` | `public string ProviderResponse { get; }` |
| `LoginResultObject` | `public LoginResultObject LoginResultObject { get; }` |

## 使用示例

```csharp
// 从对应子系统 API 获取实例
LoginResult instance = ...;
```

## 参见

- [本区域目录](../)