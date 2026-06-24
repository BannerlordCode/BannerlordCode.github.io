<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SiegeQuerySystem`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SiegeQuerySystem

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SiegeQuerySystem`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/SiegeQuerySystem.cs`

## 概述

`SiegeQuerySystem` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `LeftDefenderOrigin` | `public Vec3 LeftDefenderOrigin { get; }` |
| `MidDefenderOrigin` | `public Vec3 MidDefenderOrigin { get; }` |
| `RightDefenderOrigin` | `public Vec3 RightDefenderOrigin { get; }` |
| `LeftAttackerOrigin` | `public Vec3 LeftAttackerOrigin { get; }` |
| `MiddleAttackerOrigin` | `public Vec3 MiddleAttackerOrigin { get; }` |
| `RightAttackerOrigin` | `public Vec3 RightAttackerOrigin { get; }` |
| `LeftToMidDir` | `public Vec2 LeftToMidDir { get; }` |
| `MidToLeftDir` | `public Vec2 MidToLeftDir { get; }` |
| `MidToRightDir` | `public Vec2 MidToRightDir { get; }` |
| `RightToMidDir` | `public Vec2 RightToMidDir { get; }` |

## 主要方法

### Expire
`public void Expire()`

**用途 / Purpose:** 处理 `expire` 相关逻辑。

### DeterminePositionAssociatedSide
`public int DeterminePositionAssociatedSide(Vec3 position)`

**用途 / Purpose:** 处理 `determine position associated side` 相关逻辑。

### AreSidesRelated
`public static bool AreSidesRelated(FormationAI.BehaviorSide side, int connectedSides)`

**用途 / Purpose:** 处理 `are sides related` 相关逻辑。

### SideDistance
`public static int SideDistance(int connectedSides, int side)`

**用途 / Purpose:** 处理 `side distance` 相关逻辑。

## 使用示例

```csharp
var value = new SiegeQuerySystem();
value.Expire();
```

## 参见

- [完整类目录](../catalog)