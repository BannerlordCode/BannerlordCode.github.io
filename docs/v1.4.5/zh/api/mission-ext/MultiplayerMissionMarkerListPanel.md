<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerMissionMarkerListPanel`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerMissionMarkerListPanel

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.FlagMarker
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerMissionMarkerListPanel : ListPanel`
**Base:** `ListPanel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.FlagMarker/MultiplayerMissionMarkerListPanel.cs`

## 概述

`MultiplayerMissionMarkerListPanel` 位于 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.FlagMarker`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.FlagMarker` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `FarAlphaTarget` | `public float FarAlphaTarget { get; set; }` |
| `FarDistanceCutoff` | `public float FarDistanceCutoff { get; set; }` |
| `CloseDistanceCutoff` | `public float CloseDistanceCutoff { get; set; }` |
| `FlagWidget` | `public Widget FlagWidget { get; set; }` |
| `RemovalTimeVisiblityWidget` | `public Widget RemovalTimeVisiblityWidget { get; set; }` |
| `SpawnFlagIconWidget` | `public Widget SpawnFlagIconWidget { get; set; }` |
| `PeerWidget` | `public Widget PeerWidget { get; set; }` |
| `SiegeEngineWidget` | `public Widget SiegeEngineWidget { get; set; }` |
| `Position` | `public Vec2 Position { get; set; }` |
| `Distance` | `public int Distance { get; set; }` |
| `IsMarkerEnabled` | `public bool IsMarkerEnabled { get; set; }` |
| `IsSpawnFlag` | `public bool IsSpawnFlag { get; set; }` |
| `MarkerType` | `public int MarkerType { get; set; }` |

## 使用示例

```csharp
var example = new MultiplayerMissionMarkerListPanel();
```

## 参见

- [完整类目录](../catalog)