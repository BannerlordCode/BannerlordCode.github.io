<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerClassLoadoutTroopCardBrushWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerClassLoadoutTroopCardBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.ClassLoadout
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerClassLoadoutTroopCardBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/ClassLoadout/MultiplayerClassLoadoutTroopCardBrushWidget.cs`

## 概述

`MultiplayerClassLoadoutTroopCardBrushWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `CultureID` | `public string CultureID { get; set; }` |
| `Border` | `public BrushWidget Border { get; set; }` |
| `ClassBorder` | `public BrushWidget ClassBorder { get; set; }` |
| `ClassFrame` | `public BrushWidget ClassFrame { get; set; }` |

## 使用示例

```csharp
// MultiplayerClassLoadoutTroopCardBrushWidget (Widget) 的典型用法
// 声明/访问一个 MultiplayerClassLoadoutTroopCardBrushWidget
var widget = root.GetChild("multiplayerClassLoadoutTroopCardBrushWidget");;
```

## 参见

- [完整类目录](../catalog)