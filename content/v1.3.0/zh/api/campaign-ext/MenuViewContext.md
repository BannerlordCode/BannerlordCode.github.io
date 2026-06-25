---
title: "MenuViewContext"
description: "MenuViewContext 的自动生成类参考。"
---
# MenuViewContext

**Namespace:** SandBox.View.Menu
**Module:** SandBox.View
**Type:** `public class MenuViewContext : IMenuContextHandler`
**Base:** `IMenuContextHandler`
**File:** `SandBox.View/Menu/MenuViewContext.cs`

## 概述

`MenuViewContext` 位于 `SandBox.View.Menu`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.View.Menu` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `MenuContext` | `public MenuContext MenuContext { get; }` |
| `MenuViews` | `public List<MenuView> MenuViews { get; }` |

## 主要方法

### UpdateMenuContext
`public void UpdateMenuContext(MenuContext menuContext)`

**用途 / Purpose:** 重新计算并更新 menu context 的最新表示。

```csharp
// 先通过子系统 API 拿到 MenuViewContext 实例
MenuViewContext menuViewContext = ...;
menuViewContext.UpdateMenuContext(menuContext);
```

### AddLayer
`public void AddLayer(ScreenLayer layer)`

**用途 / Purpose:** 将 layer 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 MenuViewContext 实例
MenuViewContext menuViewContext = ...;
menuViewContext.AddLayer(layer);
```

### RemoveLayer
`public void RemoveLayer(ScreenLayer layer)`

**用途 / Purpose:** 从当前容器或状态中移除 layer。

```csharp
// 先通过子系统 API 拿到 MenuViewContext 实例
MenuViewContext menuViewContext = ...;
menuViewContext.RemoveLayer(layer);
```

### OnFrameTick
`public void OnFrameTick(float dt)`

**用途 / Purpose:** 在 frame tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MenuViewContext 实例
MenuViewContext menuViewContext = ...;
menuViewContext.OnFrameTick(0);
```

### OnResume
`public void OnResume()`

**用途 / Purpose:** 在 resume 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MenuViewContext 实例
MenuViewContext menuViewContext = ...;
menuViewContext.OnResume();
```

### OnHourlyTick
`public void OnHourlyTick()`

**用途 / Purpose:** 在 hourly tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MenuViewContext 实例
MenuViewContext menuViewContext = ...;
menuViewContext.OnHourlyTick();
```

### OnActivate
`public void OnActivate()`

**用途 / Purpose:** 在 activate 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MenuViewContext 实例
MenuViewContext menuViewContext = ...;
menuViewContext.OnActivate();
```

### OnDeactivate
`public void OnDeactivate()`

**用途 / Purpose:** 在 deactivate 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MenuViewContext 实例
MenuViewContext menuViewContext = ...;
menuViewContext.OnDeactivate();
```

### OnInitialize
`public void OnInitialize()`

**用途 / Purpose:** 在 initialize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MenuViewContext 实例
MenuViewContext menuViewContext = ...;
menuViewContext.OnInitialize();
```

### OnFinalize
`public void OnFinalize()`

**用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MenuViewContext 实例
MenuViewContext menuViewContext = ...;
menuViewContext.OnFinalize();
```

### StopAllSounds
`public void StopAllSounds()`

**用途 / Purpose:** 停止all sounds流程或状态机。

```csharp
// 先通过子系统 API 拿到 MenuViewContext 实例
MenuViewContext menuViewContext = ...;
menuViewContext.StopAllSounds();
```

### OnMapConversationActivated
`public void OnMapConversationActivated()`

**用途 / Purpose:** 在 map conversation activated 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MenuViewContext 实例
MenuViewContext menuViewContext = ...;
menuViewContext.OnMapConversationActivated();
```

### OnMapConversationDeactivated
`public void OnMapConversationDeactivated()`

**用途 / Purpose:** 在 map conversation deactivated 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MenuViewContext 实例
MenuViewContext menuViewContext = ...;
menuViewContext.OnMapConversationDeactivated();
```

### OnGameStateDeactivate
`public void OnGameStateDeactivate()`

**用途 / Purpose:** 在 game state deactivate 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MenuViewContext 实例
MenuViewContext menuViewContext = ...;
menuViewContext.OnGameStateDeactivate();
```

### OnGameStateInitialize
`public void OnGameStateInitialize()`

**用途 / Purpose:** 在 game state initialize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MenuViewContext 实例
MenuViewContext menuViewContext = ...;
menuViewContext.OnGameStateInitialize();
```

### OnGameStateFinalize
`public void OnGameStateFinalize()`

**用途 / Purpose:** 在 game state finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MenuViewContext 实例
MenuViewContext menuViewContext = ...;
menuViewContext.OnGameStateFinalize();
```

### CloseCharacterDeveloper
`public void CloseCharacterDeveloper()`

**用途 / Purpose:** 关闭character developer对应的资源或界面。

```csharp
// 先通过子系统 API 拿到 MenuViewContext 实例
MenuViewContext menuViewContext = ...;
menuViewContext.CloseCharacterDeveloper();
```

### RemoveMenuView
`public void RemoveMenuView(MenuView menuView)`

**用途 / Purpose:** 从当前容器或状态中移除 menu view。

```csharp
// 先通过子系统 API 拿到 MenuViewContext 实例
MenuViewContext menuViewContext = ...;
menuViewContext.RemoveMenuView(menuView);
```

### CloseTownManagement
`public void CloseTownManagement()`

**用途 / Purpose:** 关闭town management对应的资源或界面。

```csharp
// 先通过子系统 API 拿到 MenuViewContext 实例
MenuViewContext menuViewContext = ...;
menuViewContext.CloseTownManagement();
```

### CloseRecruitVolunteers
`public void CloseRecruitVolunteers()`

**用途 / Purpose:** 关闭recruit volunteers对应的资源或界面。

```csharp
// 先通过子系统 API 拿到 MenuViewContext 实例
MenuViewContext menuViewContext = ...;
menuViewContext.CloseRecruitVolunteers();
```

### CloseTournamentLeaderboard
`public void CloseTournamentLeaderboard()`

**用途 / Purpose:** 关闭tournament leaderboard对应的资源或界面。

```csharp
// 先通过子系统 API 拿到 MenuViewContext 实例
MenuViewContext menuViewContext = ...;
menuViewContext.CloseTournamentLeaderboard();
```

### CloseTroopSelection
`public void CloseTroopSelection()`

**用途 / Purpose:** 关闭troop selection对应的资源或界面。

```csharp
// 先通过子系统 API 拿到 MenuViewContext 实例
MenuViewContext menuViewContext = ...;
menuViewContext.CloseTroopSelection();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MenuViewContext menuViewContext = ...;
menuViewContext.UpdateMenuContext(menuContext);
```

## 参见

- [本区域目录](../)