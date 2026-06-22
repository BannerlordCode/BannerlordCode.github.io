<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerLobbyArmoryCosmeticItemBrushWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerLobbyArmoryCosmeticItemBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Armory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyArmoryCosmeticItemBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/Armory/MultiplayerLobbyArmoryCosmeticItemBrushWidget.cs`

## 概述

`MultiplayerLobbyArmoryCosmeticItemBrushWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsUsed` | `public bool IsUsed { get; set; }` |
| `Rarity` | `public int Rarity { get; set; }` |

## 主要方法

### SetState
```csharp
public override void SetState(string stateName)
```

## 使用示例

```csharp
// MultiplayerLobbyArmoryCosmeticItemBrushWidget (Widget) 的典型用法
// 声明/访问一个 MultiplayerLobbyArmoryCosmeticItemBrushWidget
var widget = root.GetChild("multiplayerLobbyArmoryCosmeticItemBrushWidget");;
```

## 参见

- [完整类目录](../catalog)