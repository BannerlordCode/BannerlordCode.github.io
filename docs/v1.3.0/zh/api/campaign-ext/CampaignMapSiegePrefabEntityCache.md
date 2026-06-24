<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CampaignMapSiegePrefabEntityCache`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CampaignMapSiegePrefabEntityCache

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public class CampaignMapSiegePrefabEntityCache : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `SandBox/CampaignMapSiegePrefabEntityCache.cs`

## 概述

`CampaignMapSiegePrefabEntityCache` 位于 `SandBox`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetLaunchEntitialFrameForSiegeEngine
`public MatrixFrame GetLaunchEntitialFrameForSiegeEngine(SiegeEngineType type, BattleSideEnum side)`

**用途 / Purpose:** 获取 `launch entitial frame for siege engine` 的当前值。

### GetScaleForSiegeEngine
`public Vec3 GetScaleForSiegeEngine(SiegeEngineType type, BattleSideEnum side)`

**用途 / Purpose:** 获取 `scale for siege engine` 的当前值。

## 使用示例

```csharp
var value = new CampaignMapSiegePrefabEntityCache();
value.GetLaunchEntitialFrameForSiegeEngine(type, side);
```

## 参见

- [完整类目录](../catalog)