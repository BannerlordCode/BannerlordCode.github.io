<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapSiegeMachineButtonWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapSiegeMachineButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Siege
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MapSiegeMachineButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/Siege/MapSiegeMachineButtonWidget.cs`

## 概述

`MapSiegeMachineButtonWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `ColoredImageWidget` | `public Widget ColoredImageWidget { get; set; }` |
| `IsDeploymentTarget` | `public bool IsDeploymentTarget { get; set; }` |
| `MachineID` | `public string MachineID { get; set; }` |

## 使用示例

```csharp
// MapSiegeMachineButtonWidget (Widget) 的典型用法
// 声明/访问一个 MapSiegeMachineButtonWidget
var widget = root.GetChild("mapSiegeMachineButtonWidget");;
```

## 参见

- [完整类目录](../catalog)