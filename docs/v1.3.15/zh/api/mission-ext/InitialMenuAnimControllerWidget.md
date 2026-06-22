<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `InitialMenuAnimControllerWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# InitialMenuAnimControllerWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class InitialMenuAnimControllerWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/InitialMenuAnimControllerWidget.cs`

## 概述

`InitialMenuAnimControllerWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsAnimEnabled` | `public bool IsAnimEnabled { get; set; }` |
| `OptionsList` | `public Widget OptionsList { get; set; }` |
| `InitialWaitTime` | `public float InitialWaitTime { get; set; }` |
| `WaitTimeBetweenOptions` | `public float WaitTimeBetweenOptions { get; set; }` |
| `OptionFadeInTime` | `public float OptionFadeInTime { get; set; }` |

## 使用示例

```csharp
// InitialMenuAnimControllerWidget (Widget) 的典型用法
// 声明/访问一个 InitialMenuAnimControllerWidget
var widget = root.GetChild("initialMenuAnimControllerWidget");;
```

## 参见

- [完整类目录](../catalog)