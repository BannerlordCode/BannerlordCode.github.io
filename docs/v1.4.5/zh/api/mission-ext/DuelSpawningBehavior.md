<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DuelSpawningBehavior`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DuelSpawningBehavior

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DuelSpawningBehavior : SpawningBehaviorBase`
**Base:** `SpawningBehaviorBase`
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/DuelSpawningBehavior.cs`

## 概述

`DuelSpawningBehavior` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Initialize
`public override void Initialize(SpawnComponent spawnComponent)`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### Clear
`public override void Clear()`

**用途 / Purpose:** 处理 `clear` 相关逻辑。

### OnTick
`public override void OnTick(float dt)`

**用途 / Purpose:** 当 `tick` 事件触发时调用此方法。

### AllowEarlyAgentVisualsDespawning
`public override bool AllowEarlyAgentVisualsDespawning(MissionPeer missionPeer)`

**用途 / Purpose:** 处理 `allow early agent visuals despawning` 相关逻辑。

## 使用示例

```csharp
var value = new DuelSpawningBehavior();
value.Initialize(spawnComponent);
```

## 参见

- [完整类目录](../catalog)