<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AgentAlarmStateWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AgentAlarmStateWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentAlarmStateWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/AgentAlarmStateWidget.cs`

## 概述

`AgentAlarmStateWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `AlarmState` | `public string AlarmState { get; set; }` |
| `WSign` | `public int WSign { get; set; }` |
| `Position` | `public Vec2 Position { get; set; }` |

## 使用示例

```csharp
// AgentAlarmStateWidget (Widget) 的典型用法
// 声明/访问一个 AgentAlarmStateWidget
var widget = root.GetChild("agentAlarmStateWidget");;
```

## 参见

- [完整类目录](../catalog)