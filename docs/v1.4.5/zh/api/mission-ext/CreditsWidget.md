<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CreditsWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CreditsWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Credits
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CreditsWidget`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Credits/CreditsWidget.cs`

## 概述

`CreditsWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `CreditsWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `RootItemWidget` | `public Widget RootItemWidget { get; set; }` |
| `ScrollPixelsPerSecond` | `public float ScrollPixelsPerSecond { get; set; }` |
| `ManualScrollWaitTimer` | `public float ManualScrollWaitTimer { get; set; }` |

## 主要方法

### CreditsWidget
`public class CreditsWidget(UIContext context)`

**用途 / Purpose:** 处理 `credits widget` 相关逻辑。

## 使用示例

```csharp
var widget = new CreditsWidget(context);
```

## 参见

- [完整类目录](../catalog)