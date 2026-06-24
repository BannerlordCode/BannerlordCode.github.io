<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BrushWidget`
- [← 本领域 / 返回 gui](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BrushWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class BrushWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/BrushWidget.cs`

## 概述

`BrushWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `BrushWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Brush` | `public Brush Brush { get; }` |
| `ReadOnlyBrush` | `public Brush ReadOnlyBrush { get; }` |
| `Sprite` | `public new Sprite Sprite { get; set; }` |
| `BrushRenderer` | `public BrushRenderer BrushRenderer { get; }` |

## 主要方法

### UpdateBrushes
`public override void UpdateBrushes(float dt)`

**用途 / Purpose:** 更新 `brushes` 的状态或数据。

### SetState
`public override void SetState(string stateName)`

**用途 / Purpose:** 设置 `state` 的值或状态。

### UpdateAnimationPropertiesSubTask
`public override void UpdateAnimationPropertiesSubTask(float alphaFactor)`

**用途 / Purpose:** 更新 `animation properties sub task` 的状态或数据。

### OnBrushChanged
`public virtual void OnBrushChanged()`

**用途 / Purpose:** 当 `brush changed` 事件触发时调用此方法。

## 使用示例

```csharp
var widget = new BrushWidget(context);
```

## 参见

- [完整类目录](../catalog)