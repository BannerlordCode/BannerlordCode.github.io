---
title: "MenuViewContext"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MenuViewContext`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MenuViewContext

**Namespace:** SandBox.View.Menu
**Module:** SandBox.View
**Type:** `public class MenuViewContext : IMenuContextHandler`
**Base:** `IMenuContextHandler`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.View/SandBox.View.Menu/MenuViewContext.cs`

## 概述

`MenuViewContext` 位于 `SandBox.View.Menu`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.View.Menu` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `MenuViews` | `public List<MenuView> MenuViews { get; }` |

## 主要方法

### UpdateMenuContext
`public void UpdateMenuContext(MenuContext menuContext)`

**用途 / Purpose:** 更新 `menu context` 的状态或数据。

### AddLayer
`public void AddLayer(ScreenLayer layer)`

**用途 / Purpose:** 向当前集合/状态中添加 `layer`。

### RemoveLayer
`public void RemoveLayer(ScreenLayer layer)`

**用途 / Purpose:** 从当前集合/状态中移除 `layer`。

### OnFrameTick
`public void OnFrameTick(float dt)`

**用途 / Purpose:** 当 `frame tick` 事件触发时调用此方法。

### OnResume
`public void OnResume()`

**用途 / Purpose:** 当 `resume` 事件触发时调用此方法。

### OnHourlyTick
`public void OnHourlyTick()`

**用途 / Purpose:** 当 `hourly tick` 事件触发时调用此方法。

### OnActivate
`public void OnActivate()`

**用途 / Purpose:** 当 `activate` 事件触发时调用此方法。

### OnDeactivate
`public void OnDeactivate()`

**用途 / Purpose:** 当 `deactivate` 事件触发时调用此方法。

### OnInitialize
`public void OnInitialize()`

**用途 / Purpose:** 当 `initialize` 事件触发时调用此方法。

### OnFinalize
`public void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### StopAllSounds
`public void StopAllSounds()`

**用途 / Purpose:** 处理 `stop all sounds` 相关逻辑。

### OnMapConversationActivated
`public void OnMapConversationActivated()`

**用途 / Purpose:** 当 `map conversation activated` 事件触发时调用此方法。

### OnMapConversationDeactivated
`public void OnMapConversationDeactivated()`

**用途 / Purpose:** 当 `map conversation deactivated` 事件触发时调用此方法。

### OnGameStateDeactivate
`public void OnGameStateDeactivate()`

**用途 / Purpose:** 当 `game state deactivate` 事件触发时调用此方法。

### OnGameStateInitialize
`public void OnGameStateInitialize()`

**用途 / Purpose:** 当 `game state initialize` 事件触发时调用此方法。

### OnGameStateFinalize
`public void OnGameStateFinalize()`

**用途 / Purpose:** 当 `game state finalize` 事件触发时调用此方法。

### CloseCharacterDeveloper
`public void CloseCharacterDeveloper()`

**用途 / Purpose:** 处理 `close character developer` 相关逻辑。

### RemoveMenuView
`public void RemoveMenuView(MenuView menuView)`

**用途 / Purpose:** 从当前集合/状态中移除 `menu view`。

### CloseTownManagement
`public void CloseTownManagement()`

**用途 / Purpose:** 处理 `close town management` 相关逻辑。

### CloseRecruitVolunteers
`public void CloseRecruitVolunteers()`

**用途 / Purpose:** 处理 `close recruit volunteers` 相关逻辑。

### CloseTournamentLeaderboard
`public void CloseTournamentLeaderboard()`

**用途 / Purpose:** 处理 `close tournament leaderboard` 相关逻辑。

### CloseTroopSelection
`public void CloseTroopSelection()`

**用途 / Purpose:** 处理 `close troop selection` 相关逻辑。

## 使用示例

```csharp
var value = new MenuViewContext();
value.UpdateMenuContext(menuContext);
```

## 参见

- [完整类目录](../catalog)