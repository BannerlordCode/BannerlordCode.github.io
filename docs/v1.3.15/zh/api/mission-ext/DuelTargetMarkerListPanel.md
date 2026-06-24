<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DuelTargetMarkerListPanel`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DuelTargetMarkerListPanel

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DuelTargetMarkerListPanel : ListPanel`
**Base:** `ListPanel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/NameMarker/DuelTargetMarkerListPanel.cs`

## 概述

`DuelTargetMarkerListPanel` 位于 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Position` | `public Vec2 Position { get; set; }` |
| `IsAgentInScreenBoundaries` | `public bool IsAgentInScreenBoundaries { get; set; }` |
| `IsAvailable` | `public bool IsAvailable { get; set; }` |
| `IsTracked` | `public bool IsTracked { get; set; }` |
| `IsAgentFocused` | `public bool IsAgentFocused { get; set; }` |
| `HasTargetSentDuelRequest` | `public bool HasTargetSentDuelRequest { get; set; }` |
| `HasPlayerSentDuelRequest` | `public bool HasPlayerSentDuelRequest { get; set; }` |
| `WSign` | `public int WSign { get; set; }` |
| `ActionText` | `public RichTextWidget ActionText { get; set; }` |
| `Background` | `public BrushWidget Background { get; set; }` |
| `Border` | `public BrushWidget Border { get; set; }` |
| `TroopClassBorder` | `public BrushWidget TroopClassBorder { get; set; }` |

## 使用示例

```csharp
var value = new DuelTargetMarkerListPanel();
```

## 参见

- [完整类目录](../catalog)