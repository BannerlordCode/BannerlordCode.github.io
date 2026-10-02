---
title: "MenuViewContext"
description: "MenuViewContext：SandBox.View 的 public 类，继承 IMenuContextHandler；公开成员 30 个（方法 27、属性 2、字段 0）。源文件 SandBox.View/Menu/MenuViewContext.cs。"
---
# MenuViewContext

**Namespace:** `SandBox.View.Menu`
**Module:** `SandBox.View`
**Type:** `public class MenuViewContext : IMenuContextHandler`
**File:** `SandBox.View/Menu/MenuViewContext.cs`

## 概述

MenuViewContext 位于 SandBox.View 模块，源文件 SandBox.View/Menu/MenuViewContext.cs。它是一个 public 类，实现/继承 IMenuContextHandler，继承链为 MenuViewContext → IMenuContextHandler。public/protected 成员共 30 个：27 方法、2 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MenuViewContext 是 SandBox.View 的顶层类型，命名空间与模块目录不同（SandBox.View.Menu），继承链 MenuViewContext → IMenuContextHandler。成员构成以方法为主（方法 27/30，属性 2/30），对外主要以操作入口暴露。继承链上的 IMenuContextHandler 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.View/Menu/MenuViewContext.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MenuContext` | `public MenuContext MenuContext` | 属性 |
| `List` | `public List<MenuView>MenuViews` | 属性 |
| `MenuViewContext` | `public MenuViewContext(ScreenBase screen, MenuContext menuContext)` | 构造函数 |
| `UpdateMenuContext` | `public void UpdateMenuContext(MenuContext menuContext)` | 方法 |
| `AddLayer` | `public void AddLayer(ScreenLayer layer)` | 方法 |
| `RemoveLayer` | `public void RemoveLayer(ScreenLayer layer)` | 方法 |
| `FindLayer` | `public T FindLayer<T>() where T : ScreenLayer` | 方法 |
| `FindLayer` | `public T FindLayer<T>(string name) where T : ScreenLayer` | 方法 |
| `OnFrameTick` | `public void OnFrameTick(float dt)` | 方法 |
| `OnResume` | `public void OnResume()` | 方法 |
| `OnHourlyTick` | `public void OnHourlyTick()` | 方法 |
| `OnActivate` | `public void OnActivate()` | 方法 |
| `OnDeactivate` | `public void OnDeactivate()` | 方法 |
| `OnInitialize` | `public void OnInitialize()` | 方法 |
| `OnFinalize` | `public void OnFinalize()` | 方法 |
| `StopAllSounds` | `public void StopAllSounds()` | 方法 |
| `OnMapConversationActivated` | `public void OnMapConversationActivated()` | 方法 |
| `OnMapConversationDeactivated` | `public void OnMapConversationDeactivated()` | 方法 |
| `OnGameStateDeactivate` | `public void OnGameStateDeactivate()` | 方法 |
| `OnGameStateInitialize` | `public void OnGameStateInitialize()` | 方法 |
| `OnGameStateFinalize` | `public void OnGameStateFinalize()` | 方法 |
| `CloseCharacterDeveloper` | `public void CloseCharacterDeveloper()` | 方法 |
| `AddMenuView` | `public MenuView AddMenuView<T>(params object[]parameters) where T : MenuView, new()` | 方法 |
| `GetMenuView` | `public T GetMenuView<T>() where T : MenuView` | 方法 |
| `RemoveMenuView` | `public void RemoveMenuView(MenuView menuView)` | 方法 |
| `CloseTownManagement` | `public void CloseTownManagement()` | 方法 |
| `CloseRecruitVolunteers` | `public void CloseRecruitVolunteers()` | 方法 |
| `CloseTournamentLeaderboard` | `public void CloseTournamentLeaderboard()` | 方法 |
| `CloseTroopSelection` | `public void CloseTroopSelection()` | 方法 |
| `CreateTroopSelectionView` | `protected virtual MenuView CreateTroopSelectionView(TroopRoster fullRoster, TroopRoster initialSelections, List<Ship>eligibleShips, Func<CharacterObject, bool>canChangeStatusOfTroop, Action<TroopRoster>onDone, int maxSelectableTroopCount, int minSelectableTroopCount, bool isNavalRaid)` | 方法 |

## 参见

- [↑ sandbox-view 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 MenuBackgroundView](../MenuBackgroundView)
- [同命名空间 MenuBaseView](../MenuBaseView)
- [同命名空间 MenuOverlayBaseView](../MenuOverlayBaseView)
- [同命名空间 MenuRecruitVolunteersView](../MenuRecruitVolunteersView)
