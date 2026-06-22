<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PerkItemButtonWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PerkItemButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterDeveloper
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PerkItemButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterDeveloper/PerkItemButtonWidget.cs`

## 概述

`PerkItemButtonWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `NotEarnedPerkBrush` | `public Brush NotEarnedPerkBrush { get; set; }` |
| `EarnedNotSelectedPerkBrush` | `public Brush EarnedNotSelectedPerkBrush { get; set; }` |
| `InSelectionPerkBrush` | `public Brush InSelectionPerkBrush { get; set; }` |
| `EarnedActivePerkBrush` | `public Brush EarnedActivePerkBrush { get; set; }` |
| `EarnedNotActivePerkBrush` | `public Brush EarnedNotActivePerkBrush { get; set; }` |
| `EarnedPreviousPerkNotSelectedPerkBrush` | `public Brush EarnedPreviousPerkNotSelectedPerkBrush { get; set; }` |
| `PerkVisualWidgetParent` | `public BrushWidget PerkVisualWidgetParent { get; set; }` |
| `Level` | `public int Level { get; set; }` |
| `PerkVisualWidget` | `public Widget PerkVisualWidget { get; set; }` |
| `PerkState` | `public int PerkState { get; set; }` |
| `AlternativeType` | `public int AlternativeType { get; set; }` |

## 使用示例

```csharp
// PerkItemButtonWidget (Widget) 的典型用法
// 声明/访问一个 PerkItemButtonWidget
var widget = root.GetChild("perkItemButtonWidget");;
```

## 参见

- [完整类目录](../catalog)