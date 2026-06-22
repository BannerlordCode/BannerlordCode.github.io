<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerClassLoadoutItemTabControllerButtonWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerClassLoadoutItemTabControllerButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.ClassLoadout
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerClassLoadoutItemTabControllerButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/ClassLoadout/MultiplayerClassLoadoutItemTabControllerButtonWidget.cs`

## 概述

`MultiplayerClassLoadoutItemTabControllerButtonWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `ItemTabList` | `public MultiplayerClassLoadoutItemTabListPanel ItemTabList { get; set; }` |
| `CursorWidget` | `public Widget CursorWidget { get; set; }` |
| `AnimationSpeed` | `public float AnimationSpeed { get; set; }` |

## 使用示例

```csharp
// MultiplayerClassLoadoutItemTabControllerButtonWidget (Widget) 的典型用法
// 声明/访问一个 MultiplayerClassLoadoutItemTabControllerButtonWidget
var widget = root.GetChild("multiplayerClassLoadoutItemTabControllerButtonWidget");;
```

## 参见

- [完整类目录](../catalog)