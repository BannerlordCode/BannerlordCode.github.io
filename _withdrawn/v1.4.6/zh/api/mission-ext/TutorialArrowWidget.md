---
title: "TutorialArrowWidget"
description: "TutorialArrowWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial 的 public 类，继承 Widget；公开成员 9 个（方法 4、属性 4、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tutorial/TutorialArrowWidget.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TutorialArrowWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class TutorialArrowWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tutorial/TutorialArrowWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

TutorialArrowWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tutorial/TutorialArrowWidget.cs。它是一个 public 类，实现/继承 Widget，继承链为 TutorialArrowWidget → Widget → PropertyOwnerObject。public/protected 成员共 9 个：4 方法、4 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TutorialArrowWidget 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial`，继承链 TutorialArrowWidget → Widget → PropertyOwnerObject。成员构成以方法为主（方法 4/9，属性 4/9），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tutorial/TutorialArrowWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsArrowEnabled` | `public bool IsArrowEnabled` | 属性 |
| `FadeInTime` | `public float FadeInTime` | 属性 |
| `BigCircleRadius` | `public float BigCircleRadius` | 属性 |
| `SmallCircleRadius` | `public float SmallCircleRadius` | 属性 |
| `TutorialArrowWidget` | `public TutorialArrowWidget(UIContext context) : base(context)` | 构造函数 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `SetArrowProperties` | `public void SetArrowProperties(float width, float height, bool isDirectionDown, bool isDirectionRight)` | 方法 |
| `ResetFade` | `public void ResetFade()` | 方法 |
| `DisableFade` | `public void DisableFade()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ElementNotificationWidget](../ElementNotificationWidget/)
- [同命名空间 TutorialDirectionArrowWidget](../TutorialDirectionArrowWidget/)
- [同命名空间 TutorialHighlightItemBrushWidget](../TutorialHighlightItemBrushWidget/)
- [同命名空间 TutorialObjectiveItemWidget](../TutorialObjectiveItemWidget/)
