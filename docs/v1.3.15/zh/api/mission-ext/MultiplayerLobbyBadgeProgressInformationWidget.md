<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerLobbyBadgeProgressInformationWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerLobbyBadgeProgressInformationWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyBadgeProgressInformationWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/MultiplayerLobbyBadgeProgressInformationWidget.cs`

## 概述

`MultiplayerLobbyBadgeProgressInformationWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `CenterBadgeSize` | `public float CenterBadgeSize { get; set; }` |
| `OuterBadgeBaseSize` | `public float OuterBadgeBaseSize { get; set; }` |
| `SizeDecayFromCenterPerElement` | `public float SizeDecayFromCenterPerElement { get; set; }` |
| `ShownBadgeCount` | `public int ShownBadgeCount { get; set; }` |
| `ActiveBadgesList` | `public ListPanel ActiveBadgesList { get; set; }` |

## 使用示例

```csharp
// MultiplayerLobbyBadgeProgressInformationWidget (Widget) 的典型用法
// 声明/访问一个 MultiplayerLobbyBadgeProgressInformationWidget
var widget = root.GetChild("multiplayerLobbyBadgeProgressInformationWidget");;
```

## 参见

- [完整类目录](../catalog)