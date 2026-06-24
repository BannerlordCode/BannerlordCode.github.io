<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `WarmupSpawningBehavior`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# WarmupSpawningBehavior

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class WarmupSpawningBehavior : SpawningBehaviorBase`
**Base:** `SpawningBehaviorBase`
**File:** `TaleWorlds.MountAndBlade/WarmupSpawningBehavior.cs`

## 概述

`WarmupSpawningBehavior` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### OnTick
`public override void OnTick(float dt)`

**用途 / Purpose:** 当 `tick` 事件触发时调用此方法。

### AllowEarlyAgentVisualsDespawning
`public override bool AllowEarlyAgentVisualsDespawning(MissionPeer lobbyPeer)`

**用途 / Purpose:** 处理 `allow early agent visuals despawning` 相关逻辑。

### GetMaximumReSpawnPeriodForPeer
`public override int GetMaximumReSpawnPeriodForPeer(MissionPeer peer)`

**用途 / Purpose:** 获取 `maximum re spawn period for peer` 的当前值。

### Clear
`public override void Clear()`

**用途 / Purpose:** 处理 `clear` 相关逻辑。

## 使用示例

```csharp
var value = new WarmupSpawningBehavior();
value.OnTick(0);
```

## 参见

- [完整类目录](../catalog)