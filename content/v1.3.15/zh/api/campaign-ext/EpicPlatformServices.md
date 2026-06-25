---
title: "EpicPlatformServices"
description: "EpicPlatformServices 的自动生成类参考。"
---
# EpicPlatformServices

**Namespace:** TaleWorlds.PlatformService.Epic
**Module:** TaleWorlds.PlatformService
**Type:** `public class EpicPlatformServices : IPlatformServices`
**Base:** `IPlatformServices`
**File:** `TaleWorlds.PlatformService.Epic/EpicPlatformServices.cs`

## 概述

`EpicPlatformServices` 位于 `TaleWorlds.PlatformService.Epic`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.PlatformService.Epic` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `UserId` | `public string UserId { get; }` |
| `Name` | `public string Name { get; set; }` |
| `Value` | `public int Value { get; set; }` |
| `ErrorCode` | `public string ErrorCode { get; set; }` |
| `ErrorMessage` | `public string ErrorMessage { get; set; }` |
| `NumericErrorCode` | `public int NumericErrorCode { get; set; }` |
| `ErrorDescription` | `public string ErrorDescription { get; set; }` |
| `Error` | `public string Error { get; set; }` |
| `AccessToken` | `public string AccessToken { get; set; }` |
| `ExpiresIn` | `public int ExpiresIn { get; set; }` |
| `ExpiresAt` | `public DateTime ExpiresAt { get; set; }` |
| `TokenType` | `public string TokenType { get; set; }` |
| `RefreshToken` | `public string RefreshToken { get; set; }` |
| `RefreshExpires` | `public int RefreshExpires { get; set; }` |
| `RefreshExpiresAt` | `public DateTime RefreshExpiresAt { get; set; }` |
| `AccountId` | `public string AccountId { get; set; }` |
| `ClientId` | `public string ClientId { get; set; }` |
| `InternalClient` | `public bool InternalClient { get; set; }` |
| `ClientService` | `public string ClientService { get; set; }` |
| `DisplayName` | `public string DisplayName { get; set; }` |
| `App` | `public string App { get; set; }` |
| `InAppId` | `public string InAppId { get; set; }` |
| `DeviceId` | `public string DeviceId { get; set; }` |
| `ProductId` | `public string ProductId { get; set; }` |

## 主要方法

### Initialize
`public bool Initialize(IFriendListService additionalFriendListServices)`

**用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 EpicPlatformServices 实例
EpicPlatformServices epicPlatformServices = ...;
var result = epicPlatformServices.Initialize(additionalFriendListServices);
```

### Terminate
`public void Terminate()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 EpicPlatformServices 实例
EpicPlatformServices epicPlatformServices = ...;
epicPlatformServices.Terminate();
```

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 EpicPlatformServices 实例
EpicPlatformServices epicPlatformServices = ...;
epicPlatformServices.Tick(0);
```

### QueryDefinitions
`public void QueryDefinitions()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 EpicPlatformServices 实例
EpicPlatformServices epicPlatformServices = ...;
epicPlatformServices.QueryDefinitions();
```

### ShowGamepadTextInput
`public bool ShowGamepadTextInput(string descriptionText, string existingText, uint maxChars, bool isObfuscated)`

**用途 / Purpose:** 显示「gamepad text input」对应的界面或元素。

```csharp
// 先通过子系统 API 拿到 EpicPlatformServices 实例
EpicPlatformServices epicPlatformServices = ...;
var result = epicPlatformServices.ShowGamepadTextInput("example", "example", 0, false);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
EpicPlatformServices epicPlatformServices = ...;
epicPlatformServices.Initialize(additionalFriendListServices);
```

## 参见

- [本区域目录](../)