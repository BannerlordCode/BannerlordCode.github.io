<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MainAgentControlModeParentWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MainAgentControlModeParentWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.MainAgentControlMode
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MainAgentControlModeParentWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/MainAgentControlMode/MainAgentControlModeParentWidget.cs`

## 概述

`MainAgentControlModeParentWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsActive` | `public bool IsActive { get; set; }` |
| `AnimationFirstStepDuration` | `public float AnimationFirstStepDuration { get; set; }` |
| `AnimationSecondStepDuration` | `public float AnimationSecondStepDuration { get; set; }` |
| `ChildItemId` | `public string ChildItemId { get; set; }` |
| `ControlModesList` | `public ListPanel ControlModesList { get; set; }` |
| `SelectionIndicatorWidget` | `public Widget SelectionIndicatorWidget { get; set; }` |

## 使用示例

```csharp
// MainAgentControlModeParentWidget (Widget) 的典型用法
// 声明/访问一个 MainAgentControlModeParentWidget
var widget = root.GetChild("mainAgentControlModeParentWidget");;
```

## 参见

- [完整类目录](../catalog)