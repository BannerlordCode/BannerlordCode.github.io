<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `OptionsGamepadCategoryWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OptionsGamepadCategoryWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Options.Gamepad
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OptionsGamepadCategoryWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Options/Gamepad/OptionsGamepadCategoryWidget.cs`

## 概述

`OptionsGamepadCategoryWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `Playstation4LayoutParentWidget` | `public Widget Playstation4LayoutParentWidget { get; set; }` |
| `Playstation5LayoutParentWidget` | `public Widget Playstation5LayoutParentWidget { get; set; }` |
| `XboxLayoutParentWidget` | `public Widget XboxLayoutParentWidget { get; set; }` |
| `CurrentGamepadType` | `public int CurrentGamepadType { get; set; }` |

## 使用示例

```csharp
// OptionsGamepadCategoryWidget (Widget) 的典型用法
// 声明/访问一个 OptionsGamepadCategoryWidget
var widget = root.GetChild("optionsGamepadCategoryWidget");;
```

## 参见

- [完整类目录](../catalog)