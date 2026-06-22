<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SiegeEngineVisualWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SiegeEngineVisualWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.FlagMarker
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SiegeEngineVisualWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/FlagMarker/SiegeEngineVisualWidget.cs`

## 概述

`SiegeEngineVisualWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `EngineID` | `public string EngineID { get; set; }` |
| `OutlineWidget` | `public Widget OutlineWidget { get; set; }` |
| `IconWidget` | `public Widget IconWidget { get; set; }` |

## 使用示例

```csharp
// SiegeEngineVisualWidget (Widget) 的典型用法
// 声明/访问一个 SiegeEngineVisualWidget
var widget = root.GetChild("siegeEngineVisualWidget");;
```

## 参见

- [完整类目录](../catalog)