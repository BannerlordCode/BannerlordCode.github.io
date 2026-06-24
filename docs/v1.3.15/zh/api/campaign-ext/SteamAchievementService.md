<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SteamAchievementService`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SteamAchievementService

**Namespace:** TaleWorlds.PlatformService.Steam
**Module:** TaleWorlds.PlatformService
**Type:** `public class SteamAchievementService : IAchievementService`
**Base:** `IAchievementService`
**File:** `TaleWorlds.PlatformService.Steam/SteamAchievementService.cs`

## 概述

`SteamAchievementService` 位于 `TaleWorlds.PlatformService.Steam`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.PlatformService.Steam` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

### Initialize
`public void Initialize()`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

## 使用示例

```csharp
var value = new SteamAchievementService();
value.Tick(0);
```

## 参见

- [完整类目录](../catalog)