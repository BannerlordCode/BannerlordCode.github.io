<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameMenuWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameMenuWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.GameMenu
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GameMenuWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/GameMenu/GameMenuWidget.cs`

## 概述

`GameMenuWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `EncounterModeMenuWidth` | `public int EncounterModeMenuWidth { get; set; }` |
| `EncounterModeMenuHeight` | `public int EncounterModeMenuHeight { get; set; }` |
| `EncounterModeMenuMarginTop` | `public int EncounterModeMenuMarginTop { get; set; }` |
| `NormalModeMenuWidth` | `public int NormalModeMenuWidth { get; set; }` |
| `NormalModeMenuHeight` | `public int NormalModeMenuHeight { get; }` |
| `NormalModeMenuMarginTop` | `public int NormalModeMenuMarginTop { get; }` |
| `IsOverlayExtended` | `public bool IsOverlayExtended { get; }` |
| `ScopeTargeter` | `public NavigationScopeTargeter ScopeTargeter { get; set; }` |
| `TitleTextWidget` | `public TextWidget TitleTextWidget { get; set; }` |
| `TitleContainerWidget` | `public Widget TitleContainerWidget { get; set; }` |
| `IsNight` | `public bool IsNight { get; set; }` |
| `IsEncounterMenu` | `public bool IsEncounterMenu { get; set; }` |
| `Overlay` | `public Widget Overlay { get; set; }` |
| `ExtendButtonWidget` | `public ButtonWidget ExtendButtonWidget { get; set; }` |
| `ExtendButtonArrowWidget` | `public BrushWidget ExtendButtonArrowWidget { get; set; }` |
| `OptionItemsList` | `public ListPanel OptionItemsList { get; set; }` |
| `SpriteName` | `public string SpriteName { get; set; }` |
| `MenuId` | `public string MenuId { get; set; }` |
| `OverriddenSpriteMapBrush` | `public Brush OverriddenSpriteMapBrush { get; set; }` |

## 主要方法

### UpdateOverlayState
```csharp
public void UpdateOverlayState()
```

### OnOptionStateChanged
```csharp
public void OnOptionStateChanged()
```

## 使用示例

```csharp
// GameMenuWidget (Widget) 的典型用法
// 声明/访问一个 GameMenuWidget
var widget = root.GetChild("gameMenuWidget");;
```

## 参见

- [完整类目录](../catalog)