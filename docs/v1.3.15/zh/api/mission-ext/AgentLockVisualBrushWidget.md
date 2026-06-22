<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AgentLockVisualBrushWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AgentLockVisualBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentLockVisualBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/AgentLockVisualBrushWidget.cs`

## 概述

`AgentLockVisualBrushWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `Position` | `public Vec2 Position { get; set; }` |
| `LockState` | `public int LockState { get; set; }` |

## 使用示例

```csharp
// AgentLockVisualBrushWidget (Widget) 的典型用法
// 声明/访问一个 AgentLockVisualBrushWidget
var widget = root.GetChild("agentLockVisualBrushWidget");;
```

## 参见

- [完整类目录](../catalog)