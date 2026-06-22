<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerArmoryPageWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerArmoryPageWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Armory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerArmoryPageWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/Armory/MultiplayerArmoryPageWidget.cs`

## 概述

`MultiplayerArmoryPageWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsTauntAssignmentActive` | `public bool IsTauntAssignmentActive { get; set; }` |
| `IsTauntControlsOpen` | `public bool IsTauntControlsOpen { get; set; }` |
| `TauntEnabledRadialDistance` | `public int TauntEnabledRadialDistance { get; set; }` |
| `TauntDisabledRadialDistance` | `public int TauntDisabledRadialDistance { get; set; }` |
| `TauntStateAnimationDuration` | `public float TauntStateAnimationDuration { get; set; }` |
| `TauntAssignmentOverlayAlpha` | `public float TauntAssignmentOverlayAlpha { get; set; }` |
| `LeftSideParent` | `public Widget LeftSideParent { get; set; }` |
| `GameModesDropdownParent` | `public Widget GameModesDropdownParent { get; set; }` |
| `HeroPreviewParent` | `public Widget HeroPreviewParent { get; set; }` |
| `TauntAssignmentOverlay` | `public Widget TauntAssignmentOverlay { get; set; }` |
| `ManageTauntsButton` | `public Widget ManageTauntsButton { get; set; }` |
| `TauntSlotsContainer` | `public Widget TauntSlotsContainer { get; set; }` |
| `RightPanelTabControl` | `public TabControl RightPanelTabControl { get; set; }` |
| `TauntCircleActionSelector` | `public CircleActionSelectorWidget TauntCircleActionSelector { get; set; }` |

## 使用示例

```csharp
// MultiplayerArmoryPageWidget (Widget) 的典型用法
// 声明/访问一个 MultiplayerArmoryPageWidget
var widget = root.GetChild("multiplayerArmoryPageWidget");;
```

## 参见

- [完整类目录](../catalog)