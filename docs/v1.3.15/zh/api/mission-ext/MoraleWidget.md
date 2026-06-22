<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MoraleWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MoraleWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.HUD
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MoraleWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/HUD/MoraleWidget.cs`

## 概述

`MoraleWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
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
| `ParentWidget` | `public Widget ParentWidget { get; }` |
| `MaskWidget` | `public Widget MaskWidget { get; }` |
| `ItemWidget` | `public BrushWidget ItemWidget { get; }` |
| `ItemGlowWidget` | `public BrushWidget ItemGlowWidget { get; }` |
| `ItemBackgroundWidget` | `public Widget ItemBackgroundWidget { get; }` |

## 主要方法

### SetFillAmount
```csharp
public void SetFillAmount(float fill, int fillMargin)
```

## 使用示例

```csharp
// MoraleWidget (Widget) 的典型用法
// 声明/访问一个 MoraleWidget
var widget = root.GetChild("moraleWidget");;
```

## 参见

- [完整类目录](../catalog)