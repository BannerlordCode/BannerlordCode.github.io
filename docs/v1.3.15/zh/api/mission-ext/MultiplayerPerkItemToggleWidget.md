<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerPerkItemToggleWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerPerkItemToggleWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Perks
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerPerkItemToggleWidget : ToggleButtonWidget`
**Base:** `ToggleButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Perks/MultiplayerPerkItemToggleWidget.cs`

## 概述

`MultiplayerPerkItemToggleWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `IconType` | `public string IconType { get; set; }` |
| `IconWidget` | `public BrushWidget IconWidget { get; set; }` |
| `IsSelectable` | `public bool IsSelectable { get; set; }` |
| `ContainerPanel` | `public MultiplayerPerkContainerPanelWidget ContainerPanel { get; set; }` |

## 使用示例

```csharp
// MultiplayerPerkItemToggleWidget (Widget) 的典型用法
// 声明/访问一个 MultiplayerPerkItemToggleWidget
var widget = root.GetChild("multiplayerPerkItemToggleWidget");;
```

## 参见

- [完整类目录](../catalog)