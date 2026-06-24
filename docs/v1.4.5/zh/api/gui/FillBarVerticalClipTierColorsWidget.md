<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `FillBarVerticalClipTierColorsWidget`
- [← 本领域 / 返回 gui](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# FillBarVerticalClipTierColorsWidget

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public class FillBarVerticalClipTierColorsWidget`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI.ExtraWidgets/TaleWorlds.GauntletUI.ExtraWidgets/FillBarVerticalClipTierColorsWidget.cs`

## 概述

`FillBarVerticalClipTierColorsWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `FillBarVerticalClipTierColorsWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `MaxedColor` | `public string MaxedColor { get; set; }` |
| `HighColor` | `public string HighColor { get; set; }` |
| `MediumColor` | `public string MediumColor { get; set; }` |
| `LowColor` | `public string LowColor { get; set; }` |

## 主要方法

### FillBarVerticalClipTierColorsWidget
`public class FillBarVerticalClipTierColorsWidget(UIContext context)`

**用途 / Purpose:** 处理 `fill bar vertical clip tier colors widget` 相关逻辑。

## 使用示例

```csharp
var widget = new FillBarVerticalClipTierColorsWidget(context);
```

## 参见

- [完整类目录](../catalog)