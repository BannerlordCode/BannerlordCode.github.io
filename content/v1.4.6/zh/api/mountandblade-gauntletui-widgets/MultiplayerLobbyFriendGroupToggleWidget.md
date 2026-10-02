---
title: "MultiplayerLobbyFriendGroupToggleWidget"
description: "MultiplayerLobbyFriendGroupToggleWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 ToggleButtonWidget；公开成员 8 个（方法 2、属性 5、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/Friend/MultiplayerLobbyFriendGroupToggleWidget.cs。"
---
# MultiplayerLobbyFriendGroupToggleWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Friend`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class MultiplayerLobbyFriendGroupToggleWidget : ToggleButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/Friend/MultiplayerLobbyFriendGroupToggleWidget.cs`

## 概述

MultiplayerLobbyFriendGroupToggleWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/Friend/MultiplayerLobbyFriendGroupToggleWidget.cs。它是一个 public 类，实现/继承 ToggleButtonWidget，继承链为 MultiplayerLobbyFriendGroupToggleWidget → ToggleButtonWidget → ButtonWidget。public/protected 成员共 8 个：2 方法、5 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MultiplayerLobbyFriendGroupToggleWidget 是 TaleWorlds.MountAndBlade.GauntletUI.Widgets 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Friend），继承链 MultiplayerLobbyFriendGroupToggleWidget → ToggleButtonWidget → ButtonWidget。成员构成以属性为主（属性 5/8，方法 2/8），对外主要以状态读取接口暴露。继承链上的 ButtonWidget 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/Friend/MultiplayerLobbyFriendGroupToggleWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MultiplayerLobbyFriendGroupToggleWidget` | `public MultiplayerLobbyFriendGroupToggleWidget(UIContext context) : base(context)` | 构造函数 |
| `OnClick` | `protected override void OnClick(Widget widget)` | 方法 |
| `RefreshState` | `protected override void RefreshState()` | 方法 |
| `CollapseIndicator` | `public Widget CollapseIndicator` | 属性 |
| `TitleContainer` | `public Widget TitleContainer` | 属性 |
| `PlayerCountText` | `public TextWidget PlayerCountText` | 属性 |
| `PlayerCount` | `public int PlayerCount` | 属性 |
| `InitialClosedState` | `public bool InitialClosedState` | 属性 |

## 参见

- [↑ mountandblade-gauntletui-widgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 ToggleButtonWidget](../ToggleButtonWidget)
- [同命名空间 MultiplayerLobbyFriendGroupWidget](../MultiplayerLobbyFriendGroupWidget)
- [同命名空间 MultiplayerLobbyFriendsPanelWidget](../MultiplayerLobbyFriendsPanelWidget)
