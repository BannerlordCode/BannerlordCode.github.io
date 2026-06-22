<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CreditsWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CreditsWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Credits
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CreditsWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Credits/CreditsWidget.cs`

## 概述

`CreditsWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `RootItemWidget` | `public Widget RootItemWidget { get; set; }` |
| `ScrollPixelsPerSecond` | `public float ScrollPixelsPerSecond { get; set; }` |
| `ManualScrollWaitTimer` | `public float ManualScrollWaitTimer { get; set; }` |

## 使用示例

```csharp
// CreditsWidget (Widget) 的典型用法
// 声明/访问一个 CreditsWidget
var widget = root.GetChild("creditsWidget");;
```

## 参见

- [完整类目录](../catalog)