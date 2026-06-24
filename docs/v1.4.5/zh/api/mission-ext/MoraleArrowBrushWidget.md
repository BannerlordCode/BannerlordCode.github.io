<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MoraleArrowBrushWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MoraleArrowBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.HUD
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MoraleArrowBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.HUD/MoraleArrowBrushWidget.cs`

## 概述

`MoraleArrowBrushWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `MoraleArrowBrushWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `LeftSideArrow` | `public bool LeftSideArrow { get; set; }` |
| `AreMoralesIndependent` | `public bool AreMoralesIndependent { get; set; }` |

## 主要方法

### SetFlowLevel
`public void SetFlowLevel(int flow)`

**用途 / Purpose:** 设置 `flow level` 的值或状态。

## 使用示例

```csharp
var widget = new MoraleArrowBrushWidget(context);
```

## 参见

- [完整类目录](../catalog)