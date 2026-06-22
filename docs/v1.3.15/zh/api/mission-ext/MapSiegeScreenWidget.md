<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapSiegeScreenWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapSiegeScreenWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Siege
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MapSiegeScreenWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/Siege/MapSiegeScreenWidget.cs`

## 概述

`MapSiegeScreenWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `DeployableSiegeMachinesPopup` | `public Widget DeployableSiegeMachinesPopup { get; set; }` |

## 主要方法

### SetCurrentButton
```csharp
public void SetCurrentButton(MapSiegeMachineButtonWidget button)
```

## 使用示例

```csharp
// MapSiegeScreenWidget (Widget) 的典型用法
// 声明/访问一个 MapSiegeScreenWidget
var widget = root.GetChild("mapSiegeScreenWidget");;
```

## 参见

- [完整类目录](../catalog)