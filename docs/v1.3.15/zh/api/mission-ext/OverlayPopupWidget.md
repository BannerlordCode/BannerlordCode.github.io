<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `OverlayPopupWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
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
```csharp
public void SetCurrentCharacter(GameMenuPartyItemButtonWidget item)
```

### OnCloseButtonClick
```csharp
public void OnCloseButtonClick(Widget widget)
```

## 使用示例

```csharp
// OverlayPopupWidget (Widget) 的典型用法
// 声明/访问一个 OverlayPopupWidget
var widget = root.GetChild("overlayPopupWidget");;
```

## 参见

- [完整类目录](../catalog)