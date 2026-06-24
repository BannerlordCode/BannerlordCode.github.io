<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerLobbyArmoryCosmeticObtainPopupWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
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

## 心智模型

把 `MultiplayerLobbyArmoryCosmeticObtainPopupWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

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
var widget = new MultiplayerLobbyArmoryCosmeticObtainPopupWidget(context);
```

## 参见

- [完整类目录](../catalog)