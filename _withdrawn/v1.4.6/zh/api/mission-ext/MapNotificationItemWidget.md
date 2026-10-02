---
title: "MapNotificationItemWidget"
description: "MapNotificationItemWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Notification 的 public 类，继承 BrushWidget；公开成员 16 个（方法 1、属性 14、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/Notification/MapNotificationItemWidget.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MapNotificationItemWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Notification`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class MapNotificationItemWidget : BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/Notification/MapNotificationItemWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

MapNotificationItemWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/Notification/MapNotificationItemWidget.cs。它是一个 public 类，实现/继承 BrushWidget，继承链为 MapNotificationItemWidget → BrushWidget → Widget → PropertyOwnerObject。public/protected 成员共 16 个：1 方法、14 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MapNotificationItemWidget 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Notification`，继承链 MapNotificationItemWidget → BrushWidget → Widget → PropertyOwnerObject。成员构成以属性为主（属性 14/16，方法 1/16），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/Notification/MapNotificationItemWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MapNotificationItemWidget` | `public MapNotificationItemWidget(UIContext context) : base(context)` | 构造函数 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `IsFocusItem` | `public bool IsFocusItem` | 属性 |
| `DefaultWidth` | `public float DefaultWidth` | 属性 |
| `ExtendedWidth` | `public float ExtendedWidth` | 属性 |
| `RemoveNotificationButtonWidget` | `public ButtonWidget RemoveNotificationButtonWidget` | 属性 |
| `NotificationRingImageWidget` | `public Widget NotificationRingImageWidget` | 属性 |
| `IsInspectionForced` | `public bool IsInspectionForced` | 属性 |
| `NotificationType` | `public string NotificationType` | 属性 |
| `DefaultWidthSprite` | `public Sprite DefaultWidthSprite` | 属性 |
| `ExtendedWidthSprite` | `public Sprite ExtendedWidthSprite` | 属性 |
| `NotificationRingWidget` | `public Widget NotificationRingWidget` | 属性 |
| `NotificationExtensionWidget` | `public Widget NotificationExtensionWidget` | 属性 |
| `NotificationTextContainerWidget` | `public Widget NotificationTextContainerWidget` | 属性 |
| `NotificationDescriptionText` | `public RichTextWidget NotificationDescriptionText` | 属性 |
| `RemoveButtonVisualWidget` | `public InputKeyVisualWidget RemoveButtonVisualWidget` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 BrushWidget](../../gui/BrushWidget/)
- [同命名空间 MapNotificationContainerWidget](../MapNotificationContainerWidget/)
