---
title: "FriendListService"
description: "FriendListService 的自动生成类参考。"
---
# FriendListService

**Namespace:** TaleWorlds.PlatformService
**Module:** TaleWorlds.PlatformService
**Type:** `public static class FriendListService`
**Base:** 无
**File:** `TaleWorlds.PlatformService/FriendListService.cs`

## 概述

`FriendListService` 位于 `TaleWorlds.PlatformService`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.PlatformService` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetAllFriendsInAllPlatforms
`public static IEnumerable<PlayerId> GetAllFriendsInAllPlatforms()`

**用途 / Purpose:** 读取并返回当前对象中 all friends in all platforms 的结果。

```csharp
// 静态调用，不需要实例
FriendListService.GetAllFriendsInAllPlatforms();
```

## 使用示例

```csharp
FriendListService.GetAllFriendsInAllPlatforms();
```

## 参见

- [本区域目录](../)