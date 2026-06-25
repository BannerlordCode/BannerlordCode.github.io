---
title: "ForcedAvatarService"
description: "ForcedAvatarService 的自动生成类参考。"
---
# ForcedAvatarService

**Namespace:** TaleWorlds.PlayerServices.Avatar
**Module:** TaleWorlds.PlayerServices
**Type:** `internal class ForcedAvatarService : IAvatarService`
**Base:** `IAvatarService`
**File:** `TaleWorlds.PlayerServices/PlayerServices/Avatar/ForcedAvatarService.cs`

## 概述

`ForcedAvatarService` 位于 `TaleWorlds.PlayerServices.Avatar`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.PlayerServices.Avatar` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `AvatarCount` | `public int AvatarCount { get; }` |

## 主要方法

### GetPlayerAvatar
`public AvatarData GetPlayerAvatar(PlayerId playerId)`

**用途 / Purpose:** 读取并返回当前对象中 player avatar 的结果。

```csharp
// 先通过子系统 API 拿到 ForcedAvatarService 实例
ForcedAvatarService forcedAvatarService = ...;
var result = forcedAvatarService.GetPlayerAvatar(playerId);
```

### Initialize
`public void Initialize()`

**用途 / Purpose:** 加载当前对象所需的初始资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 ForcedAvatarService 实例
ForcedAvatarService forcedAvatarService = ...;
forcedAvatarService.Initialize();
```

### IsInitialized
`public bool IsInitialized()`

**用途 / Purpose:** 判断当前对象是否处于 initialized 状态或条件。

```csharp
// 先通过子系统 API 拿到 ForcedAvatarService 实例
ForcedAvatarService forcedAvatarService = ...;
var result = forcedAvatarService.IsInitialized();
```

### ClearCache
`public void ClearCache()`

**用途 / Purpose:** 清空当前对象中的cache。

```csharp
// 先通过子系统 API 拿到 ForcedAvatarService 实例
ForcedAvatarService forcedAvatarService = ...;
forcedAvatarService.ClearCache();
```

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 ForcedAvatarService 实例
ForcedAvatarService forcedAvatarService = ...;
forcedAvatarService.Tick(0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ForcedAvatarService forcedAvatarService = ...;
forcedAvatarService.GetPlayerAvatar(playerId);
```

## 参见

- [本区域目录](../)