---
title: "TestAvatarService"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TestAvatarService`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# TestAvatarService

**Namespace:** TaleWorlds.PlayerServices.Avatar
**Module:** TaleWorlds.PlayerServices
**Type:** `public class TestAvatarService : IAvatarService`
**Base:** `IAvatarService`
**File:** `Bannerlord.Source/bin/TaleWorlds.PlayerServices/TaleWorlds.PlayerServices.Avatar/TestAvatarService.cs`

## 概述

`TestAvatarService` 位于 `TaleWorlds.PlayerServices.Avatar`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.PlayerServices.Avatar` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### ClearCache
`public void ClearCache()`

**用途 / Purpose:** 处理 `clear cache` 相关逻辑。

### GetPlayerAvatar
`public AvatarData GetPlayerAvatar(PlayerId playerId)`

**用途 / Purpose:** 获取 `player avatar` 的当前值。

### Initialize
`public void Initialize()`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### IsInitialized
`public bool IsInitialized()`

**用途 / Purpose:** 处理 `is initialized` 相关逻辑。

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

## 使用示例

```csharp
var value = new TestAvatarService();
value.ClearCache();
```

## 参见

- [完整类目录](../catalog)