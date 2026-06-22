<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CreditsTextWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CreditsTextWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Credits
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CreditsTextWidget : RichTextWidget`
**Base:** `RichTextWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Credits/CreditsTextWidget.cs`

## 概述

`CreditsTextWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `OverrideFont` | `public string OverrideFont { get; set; }` |

## 使用示例

```csharp
// CreditsTextWidget (Widget) 的典型用法
// 声明/访问一个 CreditsTextWidget
var widget = root.GetChild("creditsTextWidget");;
```

## 参见

- [完整类目录](../catalog)