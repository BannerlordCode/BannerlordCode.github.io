---
title: "GOGPlatformAvatarService"
description: "GOGPlatformAvatarService 的自动生成类参考。"
---
# GOGPlatformAvatarService

**Namespace:** TaleWorlds.PlatformService.GOG
**Module:** TaleWorlds.PlatformService
**Type:** `public class GOGPlatformAvatarService : IAvatarService`
**Base:** `IAvatarService`
**File:** `bin/TaleWorlds.PlatformService.GOG/TaleWorlds.PlatformService.GOG/GOGPlatformAvatarService.cs`

## 概述

`GOGPlatformAvatarService` 位于 `TaleWorlds.PlatformService.GOG`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.PlatformService.GOG` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetPlayerAvatar
`public AvatarData GetPlayerAvatar(PlayerId playerId)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 player avatar 的结果。

```csharp
// 先通过子系统 API 拿到 GOGPlatformAvatarService 实例
GOGPlatformAvatarService gOGPlatformAvatarService = ...;
var result = gOGPlatformAvatarService.GetPlayerAvatar(playerId);
```

### FetchPlayerAvatar
`public async void FetchPlayerAvatar(AvatarData avatarData, PlayerId playerId)`

**用途 / Purpose:** **用途 / Purpose:** 调用 FetchPlayerAvatar 对应的操作。

```csharp
// 先通过子系统 API 拿到 GOGPlatformAvatarService 实例
GOGPlatformAvatarService gOGPlatformAvatarService = ...;
gOGPlatformAvatarService.FetchPlayerAvatar(avatarData, playerId);
```

### Initialize
`public void Initialize()`

**用途 / Purpose:** **用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 GOGPlatformAvatarService 实例
GOGPlatformAvatarService gOGPlatformAvatarService = ...;
gOGPlatformAvatarService.Initialize();
```

### ClearCache
`public void ClearCache()`

**用途 / Purpose:** **用途 / Purpose:** 清空当前对象中的cache。

```csharp
// 先通过子系统 API 拿到 GOGPlatformAvatarService 实例
GOGPlatformAvatarService gOGPlatformAvatarService = ...;
gOGPlatformAvatarService.ClearCache();
```

### IsInitialized
`public bool IsInitialized()`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 initialized 状态或条件。

```csharp
// 先通过子系统 API 拿到 GOGPlatformAvatarService 实例
GOGPlatformAvatarService gOGPlatformAvatarService = ...;
var result = gOGPlatformAvatarService.IsInitialized();
```

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** **用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 GOGPlatformAvatarService 实例
GOGPlatformAvatarService gOGPlatformAvatarService = ...;
gOGPlatformAvatarService.Tick(0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
GOGPlatformAvatarService gOGPlatformAvatarService = ...;
gOGPlatformAvatarService.GetPlayerAvatar(playerId);
```

## 参见

- [本区域目录](../)