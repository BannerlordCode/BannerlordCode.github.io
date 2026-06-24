<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SiegeSpawnFrameBehavior`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SiegeSpawnFrameBehavior

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SiegeSpawnFrameBehavior : SpawnFrameBehaviorBase`
**Base:** `SpawnFrameBehaviorBase`
**File:** `TaleWorlds.MountAndBlade/SiegeSpawnFrameBehavior.cs`

## 概述

`SiegeSpawnFrameBehavior` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Initialize
`public override void Initialize()`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### GetSpawnFrame
`public override MatrixFrame GetSpawnFrame(Team team, bool hasMount, bool isInitialSpawn)`

**用途 / Purpose:** 获取 `spawn frame` 的当前值。

### OnFlagDeactivated
`public void OnFlagDeactivated(FlagCapturePoint flag)`

**用途 / Purpose:** 当 `flag deactivated` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new SiegeSpawnFrameBehavior();
value.Initialize();
```

## 参见

- [完整类目录](../catalog)