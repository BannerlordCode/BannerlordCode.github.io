<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CraftingScreenWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CraftingScreenWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CraftingScreenWidget : Widget`
**Base:** `Widget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting/CraftingScreenWidget.cs`

## 概述

`CraftingScreenWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `CraftingScreenWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsInCraftingMode` | `public bool IsInCraftingMode { get; set; }` |
| `IsInRefinementMode` | `public bool IsInRefinementMode { get; set; }` |
| `IsInSmeltingMode` | `public bool IsInSmeltingMode { get; set; }` |
| `MainActionButtonWidget` | `public ButtonWidget MainActionButtonWidget { get; set; }` |
| `FinalCraftButtonWidget` | `public ButtonWidget FinalCraftButtonWidget { get; set; }` |
| `NewCraftedWeaponPopupWidget` | `public Widget NewCraftedWeaponPopupWidget { get; set; }` |
| `CraftingOrderPopupWidget` | `public Widget CraftingOrderPopupWidget { get; set; }` |

## 使用示例

```csharp
var widget = new CraftingScreenWidget(context);
```

## 参见

- [完整类目录](../catalog)