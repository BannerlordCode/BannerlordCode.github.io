<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CraftingMaterialVisualBrushWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CraftingMaterialVisualBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CraftingMaterialVisualBrushWidget`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting/CraftingMaterialVisualBrushWidget.cs`

## 概述

`CraftingMaterialVisualBrushWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `CraftingMaterialVisualBrushWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `MaterialType` | `public string MaterialType { get; set; }` |
| `IsBig` | `public bool IsBig { get; set; }` |

## 主要方法

### CraftingMaterialVisualBrushWidget
`public class CraftingMaterialVisualBrushWidget(UIContext context)`

**用途 / Purpose:** 处理 `crafting material visual brush widget` 相关逻辑。

## 使用示例

```csharp
var widget = new CraftingMaterialVisualBrushWidget(context);
```

## 参见

- [完整类目录](../catalog)