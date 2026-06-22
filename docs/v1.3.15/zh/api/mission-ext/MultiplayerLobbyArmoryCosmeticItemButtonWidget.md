<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerLobbyArmoryCosmeticItemButtonWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerLobbyArmoryCosmeticItemButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Armory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyArmoryCosmeticItemButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/Armory/MultiplayerLobbyArmoryCosmeticItemButtonWidget.cs`

## 概述

`MultiplayerLobbyArmoryCosmeticItemButtonWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `ItemType` | `public int ItemType { get; set; }` |
| `IsUnlocked` | `public bool IsUnlocked { get; set; }` |
| `SelectableStateAnimationDuration` | `public float SelectableStateAnimationDuration { get; set; }` |
| `SelectableStateAlpha` | `public float SelectableStateAlpha { get; set; }` |
| `NonSelectableStateAlpha` | `public float NonSelectableStateAlpha { get; set; }` |
| `IsSelectable` | `public bool IsSelectable { get; set; }` |

## 使用示例

```csharp
// MultiplayerLobbyArmoryCosmeticItemButtonWidget (Widget) 的典型用法
// 声明/访问一个 MultiplayerLobbyArmoryCosmeticItemButtonWidget
var widget = root.GetChild("multiplayerLobbyArmoryCosmeticItemButtonWidget");;
```

## 参见

- [完整类目录](../catalog)