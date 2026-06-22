<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `HUDExtensionBrushWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# HUDExtensionBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.HUD
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class HUDExtensionBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/HUD/HUDExtensionBrushWidget.cs`

## 概述

`HUDExtensionBrushWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `AlphaChangeDuration` | `public float AlphaChangeDuration { get; set; }` |
| `OrderEnabledAlpha` | `public float OrderEnabledAlpha { get; set; }` |
| `IsOrderActive` | `public bool IsOrderActive { get; set; }` |

## 使用示例

```csharp
// HUDExtensionBrushWidget (Widget) 的典型用法
// 声明/访问一个 HUDExtensionBrushWidget
var widget = root.GetChild("hUDExtensionBrushWidget");;
```

## 参见

- [完整类目录](../catalog)