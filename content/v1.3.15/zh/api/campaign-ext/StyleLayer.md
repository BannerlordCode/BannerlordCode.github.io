---
title: StyleLayer
description: StyleLayer - Gauntlet UI 画刷图层的运行时覆写?
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `StyleLayer`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# StyleLayer

**命名空间:** TaleWorlds.GauntletUI
**模块:** TaleWorlds.GauntletUI
**类型:** class（实?

`IBrushLayerData

`, 

`IDataSource

`?**领域:** UI 引擎 Gauntlet

## 概述

`StyleLayer

` ?Gauntlet UI 系统?画刷图层"（`BrushLayer

`）的运行时可覆写包装器。每?UI 控件的视觉外观由 

`Brush

` 定义，而一?Brush 又可以包含多?

`BrushLayer

`（例如背景层、前景层、叠加层）。`StyleLayer

` 包裹一?

`BrushLayer

`（即 

`SourceLayer

`），允许在运行时按需覆写其中任何属性——颜色、透明度、精灵、翻转、延伸量、宽度策略等——同时保?若未覆写则回退到源图层默认?的语义?
它还实现?

`IBrushLayerData

`，因此可以被 

`BrushAnimation

` 系统直接读写，用于动画化图层属性；并通过 

`Version

` 字段做脏标记，让渲染管线在每帧判断是否需要重新构建几何体?
## 心智模型

- **覆写优先?*：每个属性的 getter 都遵?若被本地修改过则返回本地值，否则返回 

`SourceLayer

` 的默认?。setter 在写入本地字段的同时，会置位对应?

`isXxxChanged

` 标志并自?

`_localVersion

`?- **版本号驱动重?*：`Version

` = 本地版本 + 源图层版本。渲染管线比?

`Version

` 即可判断是否需要重?draw data，避免逐属?diff?- **动画系统的桥?*：`GetValueAsFloat

` / 

`GetValueAsColor

` / 

`GetValueAsSprite

` / 

`GetIsValueChanged

` ?

`BrushAnimationPropertyType

` 枚举统一访问，让动画曲线可以驱动任意图层属性?- **克隆语义**：`CreateFrom(source)

` + 

`FillFrom(source)

` 提供浅拷贝，用于在动画或样式切换时不污染原始 

`Brush

`?
## 主要属?
\| 属?\| 类型 \| 说明 \|
\|------\|------\|------\|
\| 

`SourceLayer

` \| 

`BrushLayer

` \| 被包装的原始图层，所有未覆写属性回退到此 \|
\| 

`Version

` \| 

`uint

` \| 本地版本 + 源版本，用于脏检?\|
\| 

`Name

` \| 

`string

` \| 图层名（只读，setter 空实现） \|
\| 

`Sprite

` \| 

`Sprite

` \| 图层使用的精灵图，覆写后会用自定义精?\|
\| 

`ImageFitType

` \| 

`ImageFitTypes

` \| 图像在图层内的适配方式 \|
\| 

`Color

` \| 

`Color

` \| 图层主颜?\|
\| 

`ColorFactor

` \| 

`float

` \| 颜色强度系数 \|
\| 

`AlphaFactor

` \| 

`float

` \| 透明度系数（0=透明?=不透明?\|
\| 

`HueFactor

` / 

`SaturationFactor

` / 

`ValueFactor

` \| 

`float

` \| HSV 调整系数 \|
\| 

`IsHidden

` \| 

`bool

` \| 是否隐藏该图?\|
\| 

`XOffset

` / 

`YOffset

` \| 

`float

` \| 图层?X/Y 方向的偏?\|
\| 

`Rotation

` \| 

`float

` \| 旋转角度 \|
\| 

`ExtendLeft/Right/Top/Bottom

` \| 

`float

` \| 九宫格延伸量 \|
\| 

`OverridenWidth

` / 

`OverridenHeight

` \| 

`float

` \| 强制覆盖的宽/?\|
\| 

`WidthPolicy

` / 

`HeightPolicy

` \| 

`BrushLayerSizePolicy

` \| 尺寸策略 \|
\| 

`HorizontalFlip

` / 

`VerticalFlip

` \| 

`bool

` \| 是否水平/垂直翻转 \|
\| 

`OverlayMethod

` \| 

`BrushOverlayMethod

` \| 叠加方式 \|
\| 

`OverlaySprite

` \| 

`Sprite

` \| 叠加精灵 \|
\| 

`OverlayXOffset

` / 

`OverlayYOffset

` \| 

`float

` \| 叠加层偏?\|
\| 

`UseRandomBaseOverlayXOffset/YOffset

` \| 

`bool

` \| 是否使用随机基底偏移 \|

## 主要方法

### StyleLayer (构造函?
`

`

`csharp
public StyleLayer(BrushLayer brushLayer)
`

`

`
包装一个已有的 

`BrushLayer

`。所有属性初始均回退到源图层?
### CreateFrom
`

`

`csharp
public static StyleLayer CreateFrom(StyleLayer source)
`

`

`
基于另一?

`StyleLayer

` 创建新实例并调用 

`FillFrom

` 拷贝所有覆写值。用于在不修改原样式的情况下?快照"?
### FillFrom
`

`

`csharp
public void FillFrom(StyleLayer source)
`

`

`
把另一?

`StyleLayer

` 的所有覆写属性复制到当前实例，常用于动画状态恢复或样式切换?
### GetValueAsFloat / GetValueAsColor / GetValueAsSprite
`

`

`csharp
public float GetValueAsFloat(BrushAnimationProperty.BrushAnimationPropertyType propertyType)
public Color GetValueAsColor(BrushAnimationProperty.BrushAnimationPropertyType propertyType)
public Sprite GetValueAsSprite(BrushAnimationProperty.BrushAnimationPropertyType propertyType)
`

`

`
按动画属性类型枚举统一读取图层属性。`BrushAnimation

` 通过这些方法在每一帧插值后回写属性，无需为每个属性写专门的动画通道?
### GetIsValueChanged
`

`

`csharp
public bool GetIsValueChanged(BrushAnimationProperty.BrushAnimationPropertyType propertyType)
`

`

`
判断某个属性是否被本地覆写过，动画系统据此决定是否需要插值该通道?
## 使用示例

### 示例: 运行时高亮按钮图?**场景**: 模组希望在鼠标悬停时把按钮的某个图层的颜色覆写为高亮色，而不修改原始 Brush?

`

`

`csharp
StyleLayer highlight = StyleLayer.CreateFrom(button.Brush.GetLayer("Default"));
highlight.Color = new Color(1.2f, 1.0f, 0.8f, 1.0f);
highlight.AlphaFactor = 1.0f;
// 注：实际覆写需要通过 Brush 的图层访问接口应用回?

`

`

`
**要点**: 

`CreateFrom

` 保证原始 

`BrushLayer

` 不被污染；通过 

`Version

` 自增，渲染管线会自动重建几何体?
### 示例: 动画系统读取图层属?**场景**: 自定义动画曲线想驱动图层?

`AlphaFactor

`?

`

`

`csharp
float current = layer.GetValueAsFloat(BrushAnimationProperty.BrushAnimationPropertyType.AlphaFactor);
float target = MBMath.Lerp(current, 0f, t);
layer.AlphaFactor = target;
// Version 自增 ?触发重绘
`

`

`
**要点**: 动画系统通过 

`GetValueAsFloat

` 读取初值，通过 setter 写入新值并自动更新版本号?
## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
- [API 目录](../)
- [SDK 总览](../../architecture/sdk-overview)
