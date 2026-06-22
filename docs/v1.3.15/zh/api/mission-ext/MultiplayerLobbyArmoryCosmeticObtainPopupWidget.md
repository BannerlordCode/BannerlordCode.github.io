<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerLobbyArmoryCosmeticObtainPopupWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerLobbyArmoryCosmeticObtainPopupWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Armory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyArmoryCosmeticObtainPopupWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/Armory/MultiplayerLobbyArmoryCosmeticObtainPopupWidget.cs`

## 概述

`MultiplayerLobbyArmoryCosmeticObtainPopupWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `ObtainState` | `public int ObtainState { get; set; }` |
| `CancelButtonWidget` | `public ButtonWidget CancelButtonWidget { get; set; }` |
| `ItemPreviewListPanel` | `public ListPanel ItemPreviewListPanel { get; set; }` |
| `ActionButtonWidget` | `public ButtonWidget ActionButtonWidget { get; set; }` |
| `ResultSuccessfulIconWidget` | `public Widget ResultSuccessfulIconWidget { get; set; }` |
| `ResultFailedIconWidget` | `public Widget ResultFailedIconWidget { get; set; }` |
| `ResultTextWidget` | `public TextWidget ResultTextWidget { get; set; }` |
| `LoadingAnimationWidget` | `public Widget LoadingAnimationWidget { get; set; }` |

## 使用示例

```csharp
// MultiplayerLobbyArmoryCosmeticObtainPopupWidget (Widget) 的典型用法
// 声明/访问一个 MultiplayerLobbyArmoryCosmeticObtainPopupWidget
var widget = root.GetChild("multiplayerLobbyArmoryCosmeticObtainPopupWidget");;
```

## 参见

- [完整类目录](../catalog)