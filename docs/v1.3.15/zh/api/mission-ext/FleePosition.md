<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `FleePosition`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FleePosition

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FleePosition : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade/FleePosition.cs`

## 概述

`FleePosition` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetSide
`public BattleSideEnum GetSide()`

**用途 / Purpose:** 获取 `side` 的当前值。

### GetClosestPointToEscape
`public Vec3 GetClosestPointToEscape(Vec2 position)`

**用途 / Purpose:** 获取 `closest point to escape` 的当前值。

## 使用示例

```csharp
var value = new FleePosition();
value.GetSide();
```

## 参见

- [完整类目录](../catalog)