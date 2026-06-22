<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerLobbyGameTypeCardButtonWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerLobbyGameTypeCardButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyGameTypeCardButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/MultiplayerLobbyGameTypeCardButtonWidget.cs`

## 概述

`MultiplayerLobbyGameTypeCardButtonWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `GameTypeId` | `public string GameTypeId { get; set; }` |
| `GameTypeImageWidget` | `public BrushWidget GameTypeImageWidget { get; set; }` |
| `CheckboxWidget` | `public Widget CheckboxWidget { get; set; }` |

## 使用示例

```csharp
// MultiplayerLobbyGameTypeCardButtonWidget (Widget) 的典型用法
// 声明/访问一个 MultiplayerLobbyGameTypeCardButtonWidget
var widget = root.GetChild("multiplayerLobbyGameTypeCardButtonWidget");;
```

## 参见

- [完整类目录](../catalog)