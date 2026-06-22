<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ArmyOverlayCohesionFillBarWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ArmyOverlayCohesionFillBarWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Menu.Overlay
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ArmyOverlayCohesionFillBarWidget : FillBarWidget`
**Base:** `FillBarWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/Menu/Overlay/ArmyOverlayCohesionFillBarWidget.cs`

## 概述

`ArmyOverlayCohesionFillBarWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsCohesionWarningEnabled` | `public bool IsCohesionWarningEnabled { get; set; }` |
| `IsArmyLeader` | `public bool IsArmyLeader { get; set; }` |

## 使用示例

```csharp
// ArmyOverlayCohesionFillBarWidget (Widget) 的典型用法
// 声明/访问一个 ArmyOverlayCohesionFillBarWidget
var widget = root.GetChild("armyOverlayCohesionFillBarWidget");;
```

## 参见

- [完整类目录](../catalog)