<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerPerkContainerPanelWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerPerkContainerPanelWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Perks
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerPerkContainerPanelWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Perks/MultiplayerPerkContainerPanelWidget.cs`

## 概述

`MultiplayerPerkContainerPanelWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `PopupWidgetFirst` | `public MultiplayerPerkPopupWidget PopupWidgetFirst { get; set; }` |
| `PopupWidgetSecond` | `public MultiplayerPerkPopupWidget PopupWidgetSecond { get; set; }` |
| `PopupWidgetThird` | `public MultiplayerPerkPopupWidget PopupWidgetThird { get; set; }` |
| `TroopTupleBodyWidget` | `public MultiplayerClassLoadoutTroopSubclassButtonWidget TroopTupleBodyWidget { get; set; }` |

## 主要方法

### PerkSelected
```csharp
public void PerkSelected(MultiplayerPerkItemToggleWidget selectedItem)
```

## 使用示例

```csharp
// MultiplayerPerkContainerPanelWidget (Widget) 的典型用法
// 声明/访问一个 MultiplayerPerkContainerPanelWidget
var widget = root.GetChild("multiplayerPerkContainerPanelWidget");;
```

## 参见

- [完整类目录](../catalog)