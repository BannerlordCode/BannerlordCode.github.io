<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AnimatedNumberTextWidget`
- [← 本领域 / 返回 gui](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# AnimatedNumberTextWidget

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public class AnimatedNumberTextWidget : TextWidget`
**Base:** `TextWidget`
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI.ExtraWidgets/TaleWorlds.GauntletUI.ExtraWidgets/AnimatedNumberTextWidget.cs`

## 概述

`AnimatedNumberTextWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `AnimatedNumberTextWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `AnimationDelay` | `public float AnimationDelay { get; set; }` |
| `AnimationDuration` | `public float AnimationDuration { get; set; }` |
| `ReferenceNumber` | `public int ReferenceNumber { get; set; }` |
| `Number` | `public int Number { get; set; }` |
| `AutoStart` | `public bool AutoStart { get; set; }` |

## 主要方法

### StartAnimation
`public void StartAnimation()`

**用途 / Purpose:** 处理 `start animation` 相关逻辑。

### Reset
`public void Reset()`

**用途 / Purpose:** 将 `reset` 重置为初始状态。

## 使用示例

```csharp
var widget = new AnimatedNumberTextWidget(context);
```

## 参见

- [完整类目录](../catalog)