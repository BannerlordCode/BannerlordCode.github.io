<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `OrderOfBattleScreenWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OrderOfBattleScreenWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.OrderOfBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderOfBattleScreenWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/OrderOfBattle/OrderOfBattleScreenWidget.cs`

## 概述

`OrderOfBattleScreenWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `AlphaChangeDuration` | `public float AlphaChangeDuration { get; set; }` |
| `AreCameraControlsEnabled` | `public bool AreCameraControlsEnabled { get; set; }` |
| `CameraEnabledAlpha` | `public float CameraEnabledAlpha { get; set; }` |
| `LeftSideFormations` | `public ListPanel LeftSideFormations { get; set; }` |
| `RightSideFormations` | `public ListPanel RightSideFormations { get; set; }` |
| `CaptainPool` | `public ListPanel CaptainPool { get; set; }` |
| `Markers` | `public Widget Markers { get; set; }` |
| `CanToggleHeroSelection` | `public bool CanToggleHeroSelection { get; set; }` |

## 使用示例

```csharp
// OrderOfBattleScreenWidget (Widget) 的典型用法
// 声明/访问一个 OrderOfBattleScreenWidget
var widget = root.GetChild("orderOfBattleScreenWidget");;
```

## 参见

- [完整类目录](../catalog)