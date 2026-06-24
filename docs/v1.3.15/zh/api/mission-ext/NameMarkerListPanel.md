<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `NameMarkerListPanel`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# NameMarkerListPanel

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class NameMarkerListPanel : ListPanel`
**Base:** `ListPanel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/NameMarker/NameMarkerListPanel.cs`

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

**用途 / Purpose:** 更新 `update` 的状态或数据。

### UpdateRectangle
`public void UpdateRectangle()`

**用途 / Purpose:** 更新 `rectangle` 的状态或数据。

## 使用示例

```csharp
var value = new NameMarkerListPanel();
value.Update(0);
```

## 参见

- [完整类目录](../catalog)