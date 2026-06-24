---
title: VisualState
description: VisualState - GauntletUI 控件视觉状态快?
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `VisualState`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VisualState
**命名空间:** TaleWorlds.GauntletUI
**模块:** TaleWorlds.GauntletUI
**类型:** class

## 概述
`VisualState

` 表示一?Widget 控件在某个具名状态（?"Hover"?Pressed"?Disabled"）下的视觉属性快照。它保存位置偏移、建议尺寸、四向边距以及过渡时长等数值，?Brush 在状态切换时插值使用?
`VisualState

` 只承?目标?。每个数值属性都配有一个对应的 

`Got*

` 布尔位（?

`GotMarginTop

`），用于标记该属性是否被显式赋值。未赋值的属性在状态过渡时保持原值，避免意外归零?
## 心智模型
?

`VisualState

` 视作一?状态切换的目标蓝图"：当控件从状?A 切到状?B 时，引擎会读?B 状态下被显式设置过的属性，作为动画终点。`FillFromWidget

` 是反向操作，把当前控件的实时几何属性抄进状态对象，便于生成或调试状态模板?
每个 setter 在写?backing field 的同时把对应?

`Got*

` 标志置为 

`true

`，这是这套数据模型的核心约束—?只有被显式赋值的字段才参与过??
## 主要属?\| 属?\| 类型 \| 说明 \|
\|------\|------\|------\|
\| 

`State

` \| 

`string

` \| 状态名，例?"Hover"?Pressed"，只读，构造时确定 \|
\| 

`TransitionDuration

` \| 

`float

` \| 进入该状态时的过渡时长（秒）；写入时同步?

`GotTransitionDuration=true

` \|
\| 

`PositionXOffset

` \| 

`float

` \| X 方向位置偏移；写入时?

`GotPositionXOffset=true

` \|
\| 

`PositionYOffset

` \| 

`float

` \| Y 方向位置偏移；写入时?

`GotPositionYOffset=true

` \|
\| 

`SuggestedWidth

` \| 

`float

` \| 建议宽度；写入时?

`GotSuggestedWidth=true

` \|
\| 

`SuggestedHeight

` \| 

`float

` \| 建议高度；写入时?

`GotSuggestedHeight=true

` \|
\| 

`MarginTop

` \| 

`float

` \| 顶部外边距；写入时置 

`GotMarginTop=true

` \|
\| 

`MarginBottom

` \| 

`float

` \| 底部外边距；写入时置 

`GotMarginBottom=true

` \|
\| 

`MarginLeft

` \| 

`float

` \| 左侧外边距；写入时置 

`GotMarginLeft=true

` \|
\| 

`MarginRight

` \| 

`float

` \| 右侧外边距；写入时置 

`GotMarginRight=true

` \|
\| 

`GotTransitionDuration

` \| 

`bool

` \| 是否显式设置?

`TransitionDuration

` \|
\| 

`GotPositionXOffset

` / 

`GotPositionYOffset

` \| 

`bool

` \| 是否显式设置过对应位置偏?\|
\| 

`GotSuggestedWidth

` / 

`GotSuggestedHeight

` \| 

`bool

` \| 是否显式设置过建议尺?\|
\| 

`GotMarginTop/Bottom/Left/Right

` \| 

`bool

` \| 是否显式设置过对应边?\|

## 主要方法
### VisualState
`

`

`csharp
public VisualState(string state)
`

`

`
以指定的状态名构造实例，所?

`Got*

` 标志初始?

`false

`，数值字段为默认 0?
### FillFromWidget
`

`

`csharp
public void FillFromWidget(Widget widget)
`

`

`
把传入控件的当前 

`PositionXOffset

`、`PositionYOffset

`、`SuggestedWidth

`、`SuggestedHeight

` 以及四个 

`Margin*

` 属性复制到本状态对象。每?setter 都会把对应的 

`Got*

` 置为 

`true

`，因此调用后?8 个属性都会被标记?已设?。`TransitionDuration

` 不受影响?
## 使用示例
### 示例: 从控件反向生成状态模?**场景**: 调试或代码生成时，希望把一个控件的当前几何属性固化为某个具名状态?

`

`

`csharp
// 假设 myButton 是一个已布局好的 Widget
var hoverState = new VisualState("Hover");
hoverState.TransitionDuration = 0.15f;
hoverState.FillFromWidget(myButton);
// 此时 hoverState.GotPositionXOffset/GotMarginTop 等均?true?// 可用?brush 模板序列化或对比检?

`

`

`
**要点**: 

`FillFromWidget

` 只覆盖位置与边距类属性；

`TransitionDuration

` 需要单独设置?
## 参见
- [完整类目录](../catalog-engine)
- [本领域目录](../catalog-engine)
- [API 目录](../)
- [SDK 总览](../../architecture/sdk-overview)
