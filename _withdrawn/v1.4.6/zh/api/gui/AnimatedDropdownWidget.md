---
title: "AnimatedDropdownWidget"
description: "AnimatedDropdownWidget：TaleWorlds.GauntletUI 的 public 类，继承 Widget；公开成员 20 个（方法 10、属性 9、字段 0）。canonical 桶 gui。源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/AnimatedDropdownWidget.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# AnimatedDropdownWidget

**Namespace:** `TaleWorlds.GauntletUI`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class AnimatedDropdownWidget : Widget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/AnimatedDropdownWidget.cs`
**Bucket:** `gui` (rule:TaleWorlds.GauntletUI)

## 概述

AnimatedDropdownWidget 位于 TaleWorlds.GauntletUI 模块，源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/AnimatedDropdownWidget.cs。它是一个 public 类，实现/继承 Widget，继承链为 AnimatedDropdownWidget → Widget → PropertyOwnerObject。public/protected 成员共 20 个：10 方法、9 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：AnimatedDropdownWidget 落在 canonical 桶 `gui`（命中规则 `rule:TaleWorlds.GauntletUI`），命名空间 `TaleWorlds.GauntletUI`，继承链 AnimatedDropdownWidget → Widget → PropertyOwnerObject。成员构成以方法为主（方法 10/20，属性 9/20），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/AnimatedDropdownWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AnimatedDropdownWidget` | `public AnimatedDropdownWidget(UIContext context) : base(context)` | 构造函数 |
| `TextWidget` | `public Widget TextWidget` | 属性 |
| `ScrollbarWidget` | `public ScrollbarWidget ScrollbarWidget` | 属性 |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | 方法 |
| `OnDisconnectedFromRoot` | `protected override void OnDisconnectedFromRoot()` | 方法 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `OpenPanel` | `protected virtual void OpenPanel()` | 方法 |
| `ClosePanel` | `protected virtual void ClosePanel()` | 方法 |
| `OnButtonClick` | `public void OnButtonClick(Widget widget)` | 方法 |
| `UpdateButtonText` | `public void UpdateButtonText(string text)` | 方法 |
| `OnListChanged` | `public void OnListChanged(Widget widget)` | 方法 |
| `OnListChanged` | `public void OnListChanged(Widget parentWidget, Widget addedWidget)` | 方法 |
| `OnSelectionChanged` | `public void OnSelectionChanged(Widget widget)` | 方法 |
| `Button` | `public ButtonWidget Button` | 属性 |
| `DropdownContainerWidget` | `public Widget DropdownContainerWidget` | 属性 |
| `DropdownClipWidget` | `public Widget DropdownClipWidget` | 属性 |
| `ListPanel` | `public ListPanel ListPanel` | 属性 |
| `ListPanelValue` | `public int ListPanelValue` | 属性 |
| `CurrentSelectedIndex` | `public int CurrentSelectedIndex` | 属性 |
| `UpdateSelectedItem` | `public bool UpdateSelectedItem` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 AlignmentAxis](../AlignmentAxis/)
- [同命名空间 AnimationInterpolation](../AnimationInterpolation/)
- [同命名空间 AudioProperty](../AudioProperty/)
- [同命名空间 Brush](../Brush/)
