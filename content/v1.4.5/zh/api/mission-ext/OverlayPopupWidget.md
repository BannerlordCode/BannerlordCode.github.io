---
title: "OverlayPopupWidget"
description: "OverlayPopupWidget 的自动生成类参考。"
---
# OverlayPopupWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.Overlay
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OverlayPopupWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/Overlay/OverlayPopupWidget.cs`

## 概述

`OverlayPopupWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `OverlayPopupWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `CurrentCharacterImageWidget` | `public ImageIdentifierWidget CurrentCharacterImageWidget { get; set; }` |
| `LocationTextWidget` | `public TextWidget LocationTextWidget { get; set; }` |
| `NameTextWidget` | `public TextWidget NameTextWidget { get; set; }` |
| `PowerTextWidget` | `public TextWidget PowerTextWidget { get; set; }` |
| `DescriptionTextWidget` | `public TextWidget DescriptionTextWidget { get; set; }` |
| `RelationBackgroundWidget` | `public Widget RelationBackgroundWidget { get; set; }` |
| `ActionButtonsList` | `public ListPanel ActionButtonsList { get; set; }` |
| `CloseButton` | `public ButtonWidget CloseButton { get; set; }` |

## 主要方法

### SetCurrentCharacter
`public void SetCurrentCharacter(GameMenuPartyItemButtonWidget item)`

**用途 / Purpose:** 为 current character 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 OverlayPopupWidget 实例
OverlayPopupWidget overlayPopupWidget = ...;
overlayPopupWidget.SetCurrentCharacter(item);
```

### OnCloseButtonClick
`public void OnCloseButtonClick(Widget widget)`

**用途 / Purpose:** 在 close button click 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 OverlayPopupWidget 实例
OverlayPopupWidget overlayPopupWidget = ...;
overlayPopupWidget.OnCloseButtonClick(widget);
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
OverlayPopupWidget widget = ...;
```

## 参见

- [本区域目录](../)