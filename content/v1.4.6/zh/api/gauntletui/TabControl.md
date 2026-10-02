---
title: "TabControl"
description: "TabControl：TaleWorlds.GauntletUI 的 public 类，继承 Widget；公开成员 7 个（方法 3、属性 2、字段 0）。源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/TabControl.cs。"
---
# TabControl

**Namespace:** `TaleWorlds.GauntletUI.BaseTypes`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class TabControl : Widget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/TabControl.cs`

## 概述

TabControl 位于 TaleWorlds.GauntletUI 模块，源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/TabControl.cs。它是一个 public 类，实现/继承 Widget，继承链为 TabControl → Widget → PropertyOwnerObject。public/protected 成员共 7 个：3 方法、2 属性、1 事件、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TabControl 是 TaleWorlds.GauntletUI 的顶层类型，命名空间与模块目录不同（TaleWorlds.GauntletUI.BaseTypes），继承链 TabControl → Widget → PropertyOwnerObject。成员构成以方法为主（方法 3/7，属性 2/7），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/TabControl.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnActiveTabChange;` | `public event OnActiveTabChangeEvent OnActiveTabChange;` | 事件 |
| `TabControl` | `public TabControl(UIContext context) : base(context)` | 构造函数 |
| `OnBeforeChildRemoved` | `protected override void OnBeforeChildRemoved(Widget child)` | 方法 |
| `ActiveTab` | `public Widget ActiveTab` | 属性 |
| `SetActiveTab` | `public void SetActiveTab(string tabName)` | 方法 |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | 方法 |
| `SelectedIndex` | `public int SelectedIndex` | 属性 |

## 参见

- [↑ gauntletui 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 BasicContainer](../BasicContainer)
- [同命名空间 BrushWidget](../BrushWidget)
- [同命名空间 ButtonType](../ButtonType)
- [同命名空间 ButtonWidget](../ButtonWidget)
