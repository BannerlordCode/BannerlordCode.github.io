<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MouseWidget`
- [← 本领域 / 返回 gui](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MouseWidget

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public class MouseWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/MouseWidget.cs`

## 概述

`MouseWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `MouseWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `LeftMouseButton` | `public Widget LeftMouseButton { get; set; }` |
| `RightMouseButton` | `public Widget RightMouseButton { get; set; }` |
| `MiddleMouseButton` | `public Widget MiddleMouseButton { get; set; }` |
| `MouseX1Button` | `public Widget MouseX1Button { get; set; }` |
| `MouseX2Button` | `public Widget MouseX2Button { get; set; }` |
| `MouseScrollUp` | `public Widget MouseScrollUp { get; set; }` |
| `MouseScrollDown` | `public Widget MouseScrollDown { get; set; }` |
| `KeyboardKeys` | `public TextWidget KeyboardKeys { get; set; }` |

## 主要方法

### UpdatePressedKeys
`public void UpdatePressedKeys()`

**用途 / Purpose:** 更新 `pressed keys` 的状态或数据。

## 使用示例

```csharp
var widget = new MouseWidget(context);
```

## 参见

- [完整类目录](../catalog)