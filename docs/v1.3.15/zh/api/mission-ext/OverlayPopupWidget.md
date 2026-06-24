<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `OverlayPopupWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 设置 `current character` 的值或状态。

### OnCloseButtonClick
`public void OnCloseButtonClick(Widget widget)`

**用途 / Purpose:** 当 `close button click` 事件触发时调用此方法。

## 使用示例

```csharp
var widget = new OverlayPopupWidget(context);
```

## 参见

- [完整类目录](../catalog)