<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CraftingDifficultyBarParentWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CraftingDifficultyBarParentWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CraftingDifficultyBarParentWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Crafting/CraftingDifficultyBarParentWidget.cs`

## 概述

`CraftingDifficultyBarParentWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `OrderDifficulty` | `public int OrderDifficulty { get; set; }` |
| `SmithingLevel` | `public int SmithingLevel { get; set; }` |
| `SmithingLevelTextWidget` | `public TextWidget SmithingLevelTextWidget { get; set; }` |
| `OrderDifficultyTextWidget` | `public TextWidget OrderDifficultyTextWidget { get; set; }` |

## 使用示例

```csharp
// CraftingDifficultyBarParentWidget (Widget) 的典型用法
// 声明/访问一个 CraftingDifficultyBarParentWidget
var widget = root.GetChild("craftingDifficultyBarParentWidget");;
```

## 参见

- [完整类目录](../catalog)