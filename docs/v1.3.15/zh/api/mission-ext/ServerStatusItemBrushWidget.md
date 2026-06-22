<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ServerStatusItemBrushWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ServerStatusItemBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.HUD
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ServerStatusItemBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/HUD/ServerStatusItemBrushWidget.cs`

## 概述

`ServerStatusItemBrushWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `Status` | `public int Status { get; set; }` |

## 使用示例

```csharp
// ServerStatusItemBrushWidget (Widget) 的典型用法
// 声明/访问一个 ServerStatusItemBrushWidget
var widget = root.GetChild("serverStatusItemBrushWidget");;
```

## 参见

- [完整类目录](../catalog)