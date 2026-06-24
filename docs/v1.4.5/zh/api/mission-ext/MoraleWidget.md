<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MoraleWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MoraleWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.HUD
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MoraleWidget : Widget`
**Base:** `Widget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.HUD/MoraleWidget.cs`

## 概述

`MoraleWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `MoraleWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `ParentWidget` | `public Widget ParentWidget { get; }` |
| `MaskWidget` | `public Widget MaskWidget { get; }` |
| `ItemWidget` | `public BrushWidget ItemWidget { get; }` |
| `ItemGlowWidget` | `public BrushWidget ItemGlowWidget { get; }` |
| `ItemBackgroundWidget` | `public Widget ItemBackgroundWidget { get; }` |
| `IncreaseLevel` | `public int IncreaseLevel { get; set; }` |
| `MoralePercentage` | `public int MoralePercentage { get; set; }` |
| `Container` | `public Widget Container { get; set; }` |
| `ItemContainer` | `public Widget ItemContainer { get; set; }` |
| `ItemBrush` | `public Brush ItemBrush { get; set; }` |
| `ItemGlowBrush` | `public Brush ItemGlowBrush { get; set; }` |
| `ItemBackgroundBrush` | `public Brush ItemBackgroundBrush { get; set; }` |
| `TeamColorAsStr` | `public string TeamColorAsStr { get; set; }` |
| `TeamColorAsStrSecondary` | `public string TeamColorAsStrSecondary { get; set; }` |
| `FlowArrowWidget` | `public MoraleArrowBrushWidget FlowArrowWidget { get; set; }` |
| `ExtendToLeft` | `public bool ExtendToLeft { get; set; }` |
| `AreMoralesIndependent` | `public bool AreMoralesIndependent { get; set; }` |

## 主要方法

### SetFillAmount
`public void SetFillAmount(float fill, int fillMargin)`

**用途 / Purpose:** 设置 `fill amount` 的值或状态。

## 使用示例

```csharp
var widget = new MoraleWidget(context);
```

## 参见

- [完整类目录](../catalog)