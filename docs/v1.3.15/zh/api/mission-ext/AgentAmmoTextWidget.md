<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AgentAmmoTextWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AgentAmmoTextWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentAmmoTextWidget : TextWidget`
**Base:** `TextWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/AgentAmmoTextWidget.cs`

## 概述

`AgentAmmoTextWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsAlertEnabled` | `public bool IsAlertEnabled { get; set; }` |

## 使用示例

```csharp
// AgentAmmoTextWidget (Widget) 的典型用法
// 声明/访问一个 AgentAmmoTextWidget
var widget = root.GetChild("agentAmmoTextWidget");;
```

## 参见

- [完整类目录](../catalog)