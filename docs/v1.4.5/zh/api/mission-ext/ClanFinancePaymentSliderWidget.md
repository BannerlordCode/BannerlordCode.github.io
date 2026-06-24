<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ClanFinancePaymentSliderWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ClanFinancePaymentSliderWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Clan
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ClanFinancePaymentSliderWidget : SliderWidget`
**Base:** `SliderWidget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Clan/ClanFinancePaymentSliderWidget.cs`

## 概述

`ClanFinancePaymentSliderWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `ClanFinancePaymentSliderWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `InitialFillWidget` | `public Widget InitialFillWidget { get; set; }` |
| `NewIncreaseFillWidget` | `public Widget NewIncreaseFillWidget { get; set; }` |
| `NewDecreaseFillWidget` | `public Widget NewDecreaseFillWidget { get; set; }` |
| `CurrentRatioIndicatorWidget` | `public Widget CurrentRatioIndicatorWidget { get; set; }` |
| `CurrentSize` | `public int CurrentSize { get; set; }` |
| `TargetSize` | `public int TargetSize { get; set; }` |
| `SizeLimit` | `public int SizeLimit { get; set; }` |

## 使用示例

```csharp
var widget = new ClanFinancePaymentSliderWidget(context);
```

## 参见

- [完整类目录](../catalog)