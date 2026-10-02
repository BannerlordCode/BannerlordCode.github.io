---
title: "MenuView"
description: "MenuView：SandBox.View 的 public 类，继承 SandboxView；公开成员 15 个（方法 11、属性 3、字段 1）。源文件 SandBox.View/Menu/MenuView.cs。"
---
# MenuView

**Namespace:** `SandBox.View.Menu`
**Module:** `SandBox.View`
**Type:** `public abstract class MenuView : SandboxView`
**File:** `SandBox.View/Menu/MenuView.cs`

## 概述

MenuView 位于 SandBox.View 模块，源文件 SandBox.View/Menu/MenuView.cs。它是一个 public 类（abstract），实现/继承 SandboxView，继承链为 MenuView → SandboxView。public/protected 成员共 15 个：11 方法、3 属性、1 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MenuView 是 SandBox.View 的顶层类型，命名空间与模块目录不同（SandBox.View.Menu），继承链 MenuView → SandboxView。成员构成以方法为主（方法 11/15，属性 3/15），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.View/Menu/MenuView.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ShouldUpdateMenuAfterRemoved` | `public virtual bool ShouldUpdateMenuAfterRemoved` | 属性 |
| `MenuViewContext` | `public MenuViewContext MenuViewContext` | 属性 |
| `MenuContext` | `public MenuContext MenuContext` | 属性 |
| `OnMenuContextUpdated` | `protected internal virtual void OnMenuContextUpdated(MenuContext newMenuContext)` | 方法 |
| `OnMenuContextRefreshed` | `protected internal virtual void OnMenuContextRefreshed()` | 方法 |
| `OnOverlayTypeChange` | `protected internal virtual void OnOverlayTypeChange(GameMenu.MenuOverlayType newType)` | 方法 |
| `OnCharacterDeveloperOpened` | `protected internal virtual void OnCharacterDeveloperOpened()` | 方法 |
| `OnCharacterDeveloperClosed` | `protected internal virtual void OnCharacterDeveloperClosed()` | 方法 |
| `OnBackgroundMeshNameSet` | `protected internal virtual void OnBackgroundMeshNameSet(string name)` | 方法 |
| `OnHourlyTick` | `protected internal virtual void OnHourlyTick()` | 方法 |
| `OnResume` | `protected internal virtual void OnResume()` | 方法 |
| `OnMapConversationActivated` | `protected internal virtual void OnMapConversationActivated()` | 方法 |
| `OnMapConversationDeactivated` | `protected internal virtual void OnMapConversationDeactivated()` | 方法 |
| `GetTutorialContext` | `protected internal virtual TutorialContexts GetTutorialContext()` | 方法 |
| `ContextAlphaModifier` | `protected const float ContextAlphaModifier` | 字段 |

## 参见

- [↑ sandbox-view 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 SandboxView](../SandboxView)
- [同命名空间 MenuBackgroundView](../MenuBackgroundView)
- [同命名空间 MenuBaseView](../MenuBaseView)
- [同命名空间 MenuOverlayBaseView](../MenuOverlayBaseView)
- [同命名空间 MenuRecruitVolunteersView](../MenuRecruitVolunteersView)
