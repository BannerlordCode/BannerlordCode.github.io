<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EscapeMenuButtonWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EscapeMenuButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.EscapeMenu
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class EscapeMenuButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/EscapeMenu/EscapeMenuButtonWidget.cs`

## 概述

`EscapeMenuButtonWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsPositiveBehaviored` | `public bool IsPositiveBehaviored { get; set; }` |
| `PositiveBehaviorBrush` | `public Brush PositiveBehaviorBrush { get; set; }` |

## 使用示例

```csharp
// EscapeMenuButtonWidget (Widget) 的典型用法
// 声明/访问一个 EscapeMenuButtonWidget
var widget = root.GetChild("escapeMenuButtonWidget");;
```

## 参见

- [完整类目录](../catalog)