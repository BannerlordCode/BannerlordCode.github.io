<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameStateManager`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# GameStateManager

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class GameStateManager`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/GameStateManager.cs`

## 概述

`GameStateManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `GameStateManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Current` | `public static GameStateManager Current { get; set; }` |
| `CurrentType` | `public GameStateManagerType CurrentType { get; }` |
| `Owner` | `public IGameStateManagerOwner Owner { get; }` |
| `ActiveState` | `public GameState ActiveState { get; }` |

## 主要方法

### RegisterListener
`public bool RegisterListener(IGameStateManagerListener listener)`

**用途 / Purpose:** 处理 `register listener` 相关逻辑。

### UnregisterListener
`public bool UnregisterListener(IGameStateManagerListener listener)`

**用途 / Purpose:** 处理 `unregister listener` 相关逻辑。

### RegisterActiveStateDisableRequest
`public void RegisterActiveStateDisableRequest(object requestingInstance)`

**用途 / Purpose:** 处理 `register active state disable request` 相关逻辑。

### UnregisterActiveStateDisableRequest
`public void UnregisterActiveStateDisableRequest(object requestingInstance)`

**用途 / Purpose:** 处理 `unregister active state disable request` 相关逻辑。

### OnSavedGameLoadFinished
`public void OnSavedGameLoadFinished()`

**用途 / Purpose:** 当 `saved game load finished` 事件触发时调用此方法。

### OnTick
`public void OnTick(float dt)`

**用途 / Purpose:** 当 `tick` 事件触发时调用此方法。

### PushState
`public void PushState(GameState gameState, int level = 0)`

**用途 / Purpose:** 处理 `push state` 相关逻辑。

### PopState
`public void PopState(int level = 0)`

**用途 / Purpose:** 处理 `pop state` 相关逻辑。

### CleanAndPushState
`public void CleanAndPushState(GameState gameState, int level = 0)`

**用途 / Purpose:** 处理 `clean and push state` 相关逻辑。

### CleanStates
`public void CleanStates(int level = 0)`

**用途 / Purpose:** 处理 `clean states` 相关逻辑。

## 使用示例

```csharp
var manager = GameStateManager.Current;
```

## 参见

- [完整类目录](../catalog)