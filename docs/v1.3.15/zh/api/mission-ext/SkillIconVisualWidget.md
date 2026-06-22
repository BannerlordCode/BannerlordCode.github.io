<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SkillIconVisualWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SkillIconVisualWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SkillIconVisualWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/SkillIconVisualWidget.cs`

## 概述

`SkillIconVisualWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `SkillId` | `public string SkillId { get; set; }` |
| `UseSmallVariation` | `public bool UseSmallVariation { get; set; }` |
| `UseSmallestVariation` | `public bool UseSmallestVariation { get; set; }` |

## 使用示例

```csharp
// SkillIconVisualWidget (Widget) 的典型用法
// 声明/访问一个 SkillIconVisualWidget
var widget = root.GetChild("skillIconVisualWidget");;
```

## 参见

- [完整类目录](../catalog)