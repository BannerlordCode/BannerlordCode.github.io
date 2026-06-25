---
title: "NameMarkerListPanel"
description: "NameMarkerListPanel 的自动生成类参考。"
---
# NameMarkerListPanel

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class NameMarkerListPanel : ListPanel`
**Base:** `ListPanel`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker/NameMarkerListPanel.cs`

## 概述

`NameMarkerListPanel` 位于 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `FarAlphaTarget` | `public float FarAlphaTarget { get; }` |
| `FarDistanceCutoff` | `public float FarDistanceCutoff { get; }` |
| `CloseDistanceCutoff` | `public float CloseDistanceCutoff { get; }` |
| `HasTypeMarker` | `public bool HasTypeMarker { get; }` |
| `Rect` | `public MarkerRect Rect { get; }` |
| `IsInScreenBoundaries` | `public bool IsInScreenBoundaries { get; }` |
| `NameTextWidget` | `public TextWidget NameTextWidget { get; set; }` |
| `TypeVisualWidget` | `public BrushWidget TypeVisualWidget { get; set; }` |
| `DistanceIconWidget` | `public BrushWidget DistanceIconWidget { get; set; }` |
| `DistanceTextWidget` | `public TextWidget DistanceTextWidget { get; set; }` |
| `Position` | `public Vec2 Position { get; set; }` |
| `IssueNotificationColor` | `public Color IssueNotificationColor { get; set; }` |
| `MainQuestNotificationColor` | `public Color MainQuestNotificationColor { get; set; }` |
| `EnemyColor` | `public Color EnemyColor { get; set; }` |
| `FriendlyColor` | `public Color FriendlyColor { get; set; }` |
| `IconType` | `public string IconType { get; set; }` |
| `NameType` | `public string NameType { get; set; }` |
| `Distance` | `public int Distance { get; set; }` |
| `IsMarkerEnabled` | `public bool IsMarkerEnabled { get; set; }` |
| `IsMarkerPersistent` | `public bool IsMarkerPersistent { get; set; }` |
| `HasIssue` | `public bool HasIssue { get; set; }` |
| `HasMainQuest` | `public bool HasMainQuest { get; set; }` |
| `IsEnemy` | `public bool IsEnemy { get; set; }` |
| `IsFriendly` | `public bool IsFriendly { get; set; }` |
| `IsFocused` | `public new bool IsFocused { get; set; }` |

## 主要方法

### Update
`public void Update(float dt)`

**用途 / Purpose:** 重新计算并更新当前对象的最新表示。

```csharp
// 先通过子系统 API 拿到 NameMarkerListPanel 实例
NameMarkerListPanel nameMarkerListPanel = ...;
nameMarkerListPanel.Update(0);
```

### UpdateRectangle
`public void UpdateRectangle()`

**用途 / Purpose:** 重新计算并更新 rectangle 的最新表示。

```csharp
// 先通过子系统 API 拿到 NameMarkerListPanel 实例
NameMarkerListPanel nameMarkerListPanel = ...;
nameMarkerListPanel.UpdateRectangle();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
NameMarkerListPanel nameMarkerListPanel = ...;
nameMarkerListPanel.Update(0);
```

## 参见

- [本区域目录](../)