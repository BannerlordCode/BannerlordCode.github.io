<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CharacterCreationCultureVisualBrushWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CharacterCreationCultureVisualBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterCreation.Culture
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CharacterCreationCultureVisualBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterCreation/Culture/CharacterCreationCultureVisualBrushWidget.cs`

## 概述

`CharacterCreationCultureVisualBrushWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `UseSmallVisuals` | `public bool UseSmallVisuals { get; set; }` |
| `Layer1Widget` | `public ParallaxItemBrushWidget Layer1Widget { get; set; }` |
| `Layer2Widget` | `public ParallaxItemBrushWidget Layer2Widget { get; set; }` |
| `Layer3Widget` | `public ParallaxItemBrushWidget Layer3Widget { get; set; }` |
| `Layer4Widget` | `public ParallaxItemBrushWidget Layer4Widget { get; set; }` |
| `CurrentCultureId` | `public string CurrentCultureId { get; set; }` |
| `IsBig` | `public bool IsBig { get; set; }` |

## 使用示例

```csharp
// CharacterCreationCultureVisualBrushWidget (Widget) 的典型用法
// 声明/访问一个 CharacterCreationCultureVisualBrushWidget
var widget = root.GetChild("characterCreationCultureVisualBrushWidget");;
```

## 参见

- [完整类目录](../catalog)