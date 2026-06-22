<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `NameMarkerScreenWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# NameMarkerScreenWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class NameMarkerScreenWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/NameMarker/NameMarkerScreenWidget.cs`

## 概述

`NameMarkerScreenWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsMarkersEnabled` | `public bool IsMarkersEnabled { get; set; }` |
| `TargetAlphaValue` | `public float TargetAlphaValue { get; set; }` |
| `MarkersContainer` | `public Widget MarkersContainer { get; set; }` |

## 使用示例

```csharp
// NameMarkerScreenWidget (Widget) 的典型用法
// 声明/访问一个 NameMarkerScreenWidget
var widget = root.GetChild("nameMarkerScreenWidget");;
```

## 参见

- [完整类目录](../catalog)