<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerLobbyMaskedIntTextWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerLobbyMaskedIntTextWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyMaskedIntTextWidget : TextWidget`
**Base:** `TextWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/MultiplayerLobbyMaskedIntTextWidget.cs`

## 概述

`MultiplayerLobbyMaskedIntTextWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `IntValue` | `public int IntValue { get; set; }` |
| `MaskedIntValue` | `public int MaskedIntValue { get; set; }` |
| `MaskText` | `public string MaskText { get; set; }` |

## 使用示例

```csharp
// MultiplayerLobbyMaskedIntTextWidget (Widget) 的典型用法
// 声明/访问一个 MultiplayerLobbyMaskedIntTextWidget
var widget = root.GetChild("multiplayerLobbyMaskedIntTextWidget");;
```

## 参见

- [完整类目录](../catalog)