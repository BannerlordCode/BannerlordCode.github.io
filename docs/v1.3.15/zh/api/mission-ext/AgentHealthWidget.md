<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AgentHealthWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AgentHealthWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentHealthWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/AgentHealthWidget.cs`

## 概述

`AgentHealthWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `Health` | `public int Health { get; set; }` |
| `MaxHealth` | `public int MaxHealth { get; set; }` |
| `HealthBar` | `public FillBarWidget HealthBar { get; set; }` |
| `HealthDropContainer` | `public Widget HealthDropContainer { get; set; }` |
| `HealthDropBrush` | `public Brush HealthDropBrush { get; set; }` |
| `ShowHealthBar` | `public bool ShowHealthBar { get; set; }` |

## 使用示例

```csharp
// AgentHealthWidget (Widget) 的典型用法
// 声明/访问一个 AgentHealthWidget
var widget = root.GetChild("agentHealthWidget");;
```

## 参见

- [完整类目录](../catalog)