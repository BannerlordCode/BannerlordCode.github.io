<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `WarningTextWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WarningTextWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class WarningTextWidget : TextWidget`
**Base:** `TextWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/WarningTextWidget.cs`

## 概述

`WarningTextWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsWarned` | `public bool IsWarned { get; set; }` |

## 使用示例

```csharp
// WarningTextWidget (Widget) 的典型用法
// 声明/访问一个 WarningTextWidget
var widget = root.GetChild("warningTextWidget");;
```

## 参见

- [完整类目录](../catalog)