---
title: "NavigationForcedScopeCollectionTargeter"
description: "NavigationForcedScopeCollectionTargeter：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 Widget；公开成员 9 个（方法 2、属性 6、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/NavigationForcedScopeCollectionTargeter.cs。"
---
# NavigationForcedScopeCollectionTargeter

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class NavigationForcedScopeCollectionTargeter : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/NavigationForcedScopeCollectionTargeter.cs`

## 概述

NavigationForcedScopeCollectionTargeter 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/NavigationForcedScopeCollectionTargeter.cs。它是一个 public 类，实现/继承 Widget，继承链为 NavigationForcedScopeCollectionTargeter → Widget。public/protected 成员共 9 个：2 方法、6 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：NavigationForcedScopeCollectionTargeter 是 TaleWorlds.MountAndBlade.GauntletUI.Widgets 的顶层类型，命名空间与模块目录一致，继承链 NavigationForcedScopeCollectionTargeter → Widget。成员构成以属性为主（属性 6/9，方法 2/9），对外主要以状态读取接口暴露。继承链上的 Widget 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/NavigationForcedScopeCollectionTargeter.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `UseRootAsTarget` | `public bool UseRootAsTarget` | 属性 |
| `NavigationForcedScopeCollectionTargeter` | `public NavigationForcedScopeCollectionTargeter(UIContext context) : base(context)` | 构造函数 |
| `OnConnectedToRoot` | `protected override void OnConnectedToRoot()` | 方法 |
| `OnDisconnectedFromRoot` | `protected override void OnDisconnectedFromRoot()` | 方法 |
| `IsCollectionEnabled` | `public bool IsCollectionEnabled` | 属性 |
| `IsCollectionDisabled` | `public bool IsCollectionDisabled` | 属性 |
| `CollectionID` | `public string CollectionID` | 属性 |
| `CollectionOrder` | `public int CollectionOrder` | 属性 |
| `CollectionParent` | `public Widget CollectionParent` | 属性 |

## 参见

- [↑ mountandblade-gauntletui-widgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AutoHideRichTextWidget](../AutoHideRichTextWidget)
- [同命名空间 AutoHideTextWidget](../AutoHideTextWidget)
- [同命名空间 AutoHideZeroTextWidget](../AutoHideZeroTextWidget)
- [同命名空间 BannerlordCustomWidgetManager](../BannerlordCustomWidgetManager)
