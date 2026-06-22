<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerTroopTypeIconWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerTroopTypeIconWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerTroopTypeIconWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/MultiplayerTroopTypeIconWidget.cs`

## 概述

`MultiplayerTroopTypeIconWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `ScaleFactor` | `public float ScaleFactor { get; set; }` |
| `BackgroundWidget` | `public Widget BackgroundWidget { get; set; }` |
| `ForegroundWidget` | `public Widget ForegroundWidget { get; set; }` |
| `IconSpriteType` | `public string IconSpriteType { get; set; }` |

## 使用示例

```csharp
// MultiplayerTroopTypeIconWidget (Widget) 的典型用法
// 声明/访问一个 MultiplayerTroopTypeIconWidget
var widget = root.GetChild("multiplayerTroopTypeIconWidget");;
```

## 参见

- [完整类目录](../catalog)