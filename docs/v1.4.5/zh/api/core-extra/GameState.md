<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameState`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# GameState

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public abstract class GameState : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/GameState.cs`

## 概述

`GameState` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsActive` | `public bool IsActive { get; }` |
| `GameStateManager` | `public GameStateManager GameStateManager { get; }` |
| `Activated` | `public bool Activated { get; }` |

## 主要方法

### RegisterListener
`public bool RegisterListener(IGameStateListener listener)`

**用途 / Purpose:** 处理 `register listener` 相关逻辑。

### UnregisterListener
`public bool UnregisterListener(IGameStateListener listener)`

**用途 / Purpose:** 处理 `unregister listener` 相关逻辑。

## 使用示例

```csharp
var implementation = new CustomGameState();
```

## 参见

- [完整类目录](../catalog)