<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `RundownLineWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# RundownLineWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Information.RundownTooltip
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class RundownLineWidget : ListPanel`
**Base:** `ListPanel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Information.RundownTooltip/RundownLineWidget.cs`

## 概述

`RundownLineWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `RundownLineWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `NameTextWidget` | `public TextWidget NameTextWidget { get; set; }` |
| `ValueTextWidget` | `public TextWidget ValueTextWidget { get; set; }` |
| `Value` | `public float Value { get; set; }` |

## 主要方法

### RefreshValueOffset
`public void RefreshValueOffset(float columnWidth)`

**用途 / Purpose:** 刷新 `value offset` 的显示或缓存。

## 使用示例

```csharp
var widget = new RundownLineWidget(context);
```

## 参见

- [完整类目录](../catalog)