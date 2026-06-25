---
title: "ApiAvatarServiceBase"
description: "ApiAvatarServiceBase 的自动生成类参考。"
---
# ApiAvatarServiceBase

**Namespace:** TaleWorlds.PlayerServices.Avatar
**Module:** TaleWorlds.PlayerServices
**Type:** `public abstract class ApiAvatarServiceBase : IAvatarService`
**Base:** `IAvatarService`
**File:** `bin/TaleWorlds.PlayerServices/TaleWorlds.PlayerServices.Avatar/ApiAvatarServiceBase.cs`

## 概述

`ApiAvatarServiceBase` 位于 `TaleWorlds.PlayerServices.Avatar`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.PlayerServices.Avatar` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 ApiAvatarServiceBase 实例
ApiAvatarServiceBase apiAvatarServiceBase = ...;
apiAvatarServiceBase.Tick(0);
```

### GetPlayerAvatar
`public AvatarData GetPlayerAvatar(PlayerId playerId)`

**用途 / Purpose:** 读取并返回当前对象中 player avatar 的结果。

```csharp
// 先通过子系统 API 拿到 ApiAvatarServiceBase 实例
ApiAvatarServiceBase apiAvatarServiceBase = ...;
var result = apiAvatarServiceBase.GetPlayerAvatar(playerId);
```

### Initialize
`public void Initialize()`

**用途 / Purpose:** 加载当前对象所需的初始资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 ApiAvatarServiceBase 实例
ApiAvatarServiceBase apiAvatarServiceBase = ...;
apiAvatarServiceBase.Initialize();
```

### ClearCache
`public void ClearCache()`

**用途 / Purpose:** 清空当前对象中的cache。

```csharp
// 先通过子系统 API 拿到 ApiAvatarServiceBase 实例
ApiAvatarServiceBase apiAvatarServiceBase = ...;
apiAvatarServiceBase.ClearCache();
```

### IsInitialized
`public bool IsInitialized()`

**用途 / Purpose:** 判断当前对象是否处于 initialized 状态或条件。

```csharp
// 先通过子系统 API 拿到 ApiAvatarServiceBase 实例
ApiAvatarServiceBase apiAvatarServiceBase = ...;
var result = apiAvatarServiceBase.IsInitialized();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
ApiAvatarServiceBase instance = ...;
```

## 参见

- [本区域目录](../)