<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `OptionsScreenWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OptionsScreenWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Options
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OptionsScreenWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Options/OptionsScreenWidget.cs`

## 概述

`OptionsScreenWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `VideoMemoryUsageWidget` | `public Widget VideoMemoryUsageWidget { get; set; }` |
| `CurrentOptionDescriptionWidget` | `public RichTextWidget CurrentOptionDescriptionWidget { get; set; }` |
| `CurrentOptionNameWidget` | `public RichTextWidget CurrentOptionNameWidget { get; set; }` |
| `CurrentOptionImageWidget` | `public Widget CurrentOptionImageWidget { get; set; }` |
| `PerformanceTabToggle` | `public TabToggleWidget PerformanceTabToggle { get; set; }` |

## 主要方法

### SetCurrentOption
```csharp
public void SetCurrentOption(Widget currentOptionWidget, Sprite newgraphicsSprite)
```

## 使用示例

```csharp
// OptionsScreenWidget (Widget) 的典型用法
// 声明/访问一个 OptionsScreenWidget
var widget = root.GetChild("optionsScreenWidget");;
```

## 参见

- [完整类目录](../catalog)