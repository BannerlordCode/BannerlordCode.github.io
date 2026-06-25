---
title: "NameplateNotificationListPanel"
description: "NameplateNotificationListPanel 的自动生成类参考。"
---
# NameplateNotificationListPanel

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Nameplate.Notifications
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class NameplateNotificationListPanel`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Nameplate.Notifications/NameplateNotificationListPanel.cs`

## 概述

`NameplateNotificationListPanel` 位于 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Nameplate.Notifications`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Nameplate.Notifications` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `RelationVisualWidget` | `public Widget RelationVisualWidget { get; set; }` |
| `RelationType` | `public int RelationType { get; set; }` |
| `StayAmount` | `public float StayAmount { get; set; }` |
| `FadeTime` | `public float FadeTime { get; set; }` |

## 主要方法

### NameplateNotificationListPanel
`public class NameplateNotificationListPanel(UIContext context)`

**用途 / Purpose:** 处理与 「nameplate notification list panel」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 NameplateNotificationListPanel 实例
NameplateNotificationListPanel nameplateNotificationListPanel = ...;
var result = nameplateNotificationListPanel.NameplateNotificationListPanel(context);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
NameplateNotificationListPanel nameplateNotificationListPanel = ...;
nameplateNotificationListPanel.NameplateNotificationListPanel(context);
```

## 参见

- [本区域目录](../)