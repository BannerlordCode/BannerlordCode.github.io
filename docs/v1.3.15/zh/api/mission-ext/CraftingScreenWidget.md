<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CraftingScreenWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CraftingScreenWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CraftingScreenWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Crafting/CraftingScreenWidget.cs`

## 概述

`CraftingScreenWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

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
// CraftingScreenWidget (Widget) 的典型用法
// 声明/访问一个 CraftingScreenWidget
var widget = root.GetChild("craftingScreenWidget");;
```

## 参见

- [完整类目录](../catalog)