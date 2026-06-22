<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerArmoryCosmeticsSectionWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerArmoryCosmeticsSectionWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Armory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerArmoryCosmeticsSectionWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/Armory/MultiplayerArmoryCosmeticsSectionWidget.cs`

## 概述

`MultiplayerArmoryCosmeticsSectionWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsTauntAssignmentActive` | `public bool IsTauntAssignmentActive { get; set; }` |
| `TauntAssignmentStateAnimationDuration` | `public float TauntAssignmentStateAnimationDuration { get; set; }` |
| `TauntAssignmentStateAlpha` | `public float TauntAssignmentStateAlpha { get; set; }` |
| `TopSectionParent` | `public Widget TopSectionParent { get; set; }` |
| `BottomSectionParent` | `public Widget BottomSectionParent { get; set; }` |
| `SortControlsParent` | `public Widget SortControlsParent { get; set; }` |
| `CategorySeparatorWidget` | `public Widget CategorySeparatorWidget { get; set; }` |

## 使用示例

```csharp
// MultiplayerArmoryCosmeticsSectionWidget (Widget) 的典型用法
// 声明/访问一个 MultiplayerArmoryCosmeticsSectionWidget
var widget = root.GetChild("multiplayerArmoryCosmeticsSectionWidget");;
```

## 参见

- [完整类目录](../catalog)