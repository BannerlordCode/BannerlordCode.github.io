<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `FormationMarkerListPanel`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# FormationMarkerListPanel

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FormationMarkerListPanel : ListPanel`
**Base:** `ListPanel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission/FormationMarkerListPanel.cs`

## 概述

`FormationMarkerListPanel` 位于 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `FarAlphaTarget` | `public float FarAlphaTarget { get; set; }` |
| `FarDistanceCutoff` | `public float FarDistanceCutoff { get; set; }` |
| `CloseDistanceCutoff` | `public float CloseDistanceCutoff { get; set; }` |
| `ClosestFadeoutRange` | `public float ClosestFadeoutRange { get; set; }` |
| `FarScaleTarget` | `public float FarScaleTarget { get; set; }` |
| `CloseScaleTarget` | `public float CloseScaleTarget { get; set; }` |
| `IsMarkerEnabled` | `public bool IsMarkerEnabled { get; set; }` |
| `IsTargetingAFormation` | `public bool IsTargetingAFormation { get; set; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `ShowDistanceTexts` | `public bool ShowDistanceTexts { get; set; }` |
| `TeamType` | `public int TeamType { get; set; }` |
| `WSign` | `public int WSign { get; set; }` |
| `Distance` | `public float Distance { get; set; }` |
| `MarkerType` | `public string MarkerType { get; set; }` |
| `Position` | `public Vec2 Position { get; set; }` |
| `IconBrush` | `public Brush IconBrush { get; set; }` |
| `FormationTypeMarker` | `public Widget FormationTypeMarker { get; set; }` |
| `TeamTypeMarker` | `public Widget TeamTypeMarker { get; set; }` |
| `NameTextWidget` | `public TextWidget NameTextWidget { get; set; }` |

## 使用示例

```csharp
var example = new FormationMarkerListPanel();
```

## 参见

- [完整类目录](../catalog)