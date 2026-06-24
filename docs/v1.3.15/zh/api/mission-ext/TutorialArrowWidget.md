<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TutorialArrowWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TutorialArrowWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TutorialArrowWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tutorial/TutorialArrowWidget.cs`

## 概述

`TutorialArrowWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `TutorialArrowWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsArrowEnabled` | `public bool IsArrowEnabled { get; set; }` |
| `FadeInTime` | `public float FadeInTime { get; set; }` |
| `BigCircleRadius` | `public float BigCircleRadius { get; set; }` |
| `SmallCircleRadius` | `public float SmallCircleRadius { get; set; }` |

## 主要方法

### SetArrowProperties
`public void SetArrowProperties(float width, float height, bool isDirectionDown, bool isDirectionRight)`

**用途 / Purpose:** 设置 `arrow properties` 的值或状态。

### ResetFade
`public void ResetFade()`

**用途 / Purpose:** 将 `fade` 重置为初始状态。

### DisableFade
`public void DisableFade()`

**用途 / Purpose:** 处理 `disable fade` 相关逻辑。

## 使用示例

```csharp
var widget = new TutorialArrowWidget(context);
```

## 参见

- [完整类目录](../catalog)