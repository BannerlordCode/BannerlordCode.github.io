---
title: Rectangle2D
description: Rectangle2D - 2D 渲染矩形结构体，支持变换、碰撞检测、坐标转?
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Rectangle2D`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Rectangle2D
**命名空间:** TaleWorlds.TwoDimension
**模块:** TaleWorlds.TwoDimension
**类型:** struct（值类型）

## 概述

`Rectangle2D

` ?Bannerlord 2D 渲染层的核心几何结构体，用于描述一个可变换的矩形——它?Gauntlet UI 框架中所?Widget 的几何基础。每?Widget 持有一?

`Rectangle2D

`，记录其本地位置（`LocalPosition

`）、缩放（

`LocalScale

`）、旋转（

`LocalRotation

`）、轴心（

`LocalPivot

`），以及一?视觉覆盖"属性（像素偏移、缩放倍率、旋转偏移——用于动画或微调而不污染本地变换）。本结构体负责把这些本地变换与父矩形的变换组合成世界坐标?

`MatrixFrame

`，并提供碰撞检测、点包含判断、屏幕坐标与本地坐标互转等几何查询?
它是 

`struct

` 而非 

`class

`，意味着它是值语义——赋值或传参会复制全部字段。为了在 Widget 树中实现"父子变换继承"，`CalculateMatrixFrame

` 接受父矩形的 

`in

` 引用，把本地变换矩阵乘以父矩阵（或仅叠加原点，若无旋转），结果缓存到 

`_cachedMatrixFrame

`。后续的 

`IsCollide

`/

`IsPointInside

`/

`TransformScreenPositionToLocal

` 等查询都基于这个缓存矩阵，因此必须先 

`CalculateMatrixFrame

` 再查询?
Mod 开发者通常不直接构?

`Rectangle2D

`，而是通过 Gauntlet UI 框架间接使用——每?

`Widget

` 内部持有一个。但若你要自定义渲染或做精确的点击命中测试，理解本结构体的变换管线很有必要?
## 心智模型

?

`Rectangle2D

` 想成"本地变换 + 视觉覆盖 + 缓存的世界矩?三层结构。本地变换（

`LocalPosition

`/

`LocalScale

`/

`LocalRotation

`/

`LocalPivot

`）是 Widget 自身的布局属性，由父 Widget 的布局逻辑设置；视觉覆盖（

`_renderProperties

` 里的 

`PositionOffsetPixel

`/

`ScaleMultiplier

`/

`RotationOffset

`）是动画系统或样式系统在渲染前临时叠加的微调，不影响布局——例如按钮悬停时的轻微放大就是通过 

`ScaleMultiplier

` 实现的?
变换管线分两步：

`CalculateMatrixFrame(parentRectangle)

` 计算"布局矩阵" 

`_cachedMatrixFrame

`，只考虑本地变换 + 父矩阵，用于布局与命中测试；

`CalculateVisualMatrixFrame()

` 在布局矩阵基础上叠加视觉覆盖，计算"视觉矩阵" 

`_cachedVisualMatrixFrame

`，用于实际绘制。`_hasRotation

` 标志位优化：若无旋转，矩阵退化为平移 + 缩放，避免昂贵的矩阵乘法与正交化。`_hasDifferentVisuals

` 标志位优化：若无视觉覆盖，视觉矩阵直接等于布局矩阵，跳?

`CalculateVisualMatrixFrame

` 的全部计算?
碰撞检?

`IsCollide

` ?

`IsSubRectOf

` 支持旋转矩形——先?AABB 包围盒快速排除，再对旋转情况做边段相交检查（4×4 边两两测试）。`IsPointInside

` 同样先用包围盒排除，再对旋转情况把点变换到本地坐标系判断?
## 主要属?
\| 属?字段 \| 类型 \| 说明 \|
\|-----------\|------\|------\|
\| 

`IsValid

` \| 

`bool

` \| 矩形是否有效，`Invalid

` 静态属性返?false \|
\| 

`LocalPosition

` \| 

`Vector2

` \| 相对父矩形的本地位置 \|
\| 

`LocalScale

` \| 

`Vector2

` \| 本地缩放，`Create()

` 默认 (10,10) \|
\| 

`LocalPivot

` \| 

`Vector2

` \| 旋转轴心?-1 比例），(0,0) 为左上角 \|
\| 

`LocalRotation

` \| 

`float

` \| 本地旋转角度（度?\|
\| 

`TopLeft

`/

`TopRight

`/

`BottomRight

`/

`BottomLeft

` \| 

`Vector2

` \| 计算后的四个角世界坐?\|
\| 

`Invalid

` \| 

`static Rectangle2D

` \| 静态无效矩形，

`IsValid = false

` \|

## 主要方法

### Create
`

`

`csharp
public static Rectangle2D Create()
`

`

`
静态工厂。返回一个有效矩形，

`LocalScale = (10,10)

`，渲染属性为空，三个缓存矩阵?

`MatrixFrame.Identity

`?
### FillLocalValuesFrom
`

`

`csharp
public Rectangle2D FillLocalValuesFrom(in Rectangle2D other)
`

`

`
从另一个矩形复制本地变换与渲染属性（不复制缓存矩阵）。返?

`this

` 便于链式调用。用?Widget 重建时保留旧变换?
### GetVisualScale
`

`

`csharp
public Vector2 GetVisualScale()
`

`

`
返回视觉缩放 = 

`LocalScale * ScaleMultiplier

`。这是实际绘制时使用的缩放值?
### AddVisualOffset / SetVisualOffset
`

`

`csharp
public void AddVisualOffset(float offsetX, float offsetY)
public void SetVisualOffset(float offsetX, float offsetY)
`

`

`
`Add

` 在现有像素偏移上叠加；`Set

` 直接覆盖。偏移以像素为单位，在父坐标系中应用?
### AddVisualScale / SetVisualScale
`

`

`csharp
public void AddVisualScale(float scaleX, float scaleY)
public void SetVisualScale(float scaleX, float scaleY)
`

`

`
`Add

` 在现有缩放倍率上叠加；

`Set

` 直接覆盖。`ScaleMultiplier

` 默认 (1,1)，设?(1.1,1.1) 表示放大 10%?
### AddVisualRotationOffset / SetVisualRotationOffset
`

`

`csharp
public void AddVisualRotationOffset(float rotationOffset)
public void SetVisualRotationOffset(float rotationOffset)
`

`

`
`Add

` 在现有旋转偏移上叠加；`Set

` 直接覆盖。单位为度?
### ValidateVisuals
`

`

`csharp
public void ValidateVisuals()
`

`

`
检查视觉覆盖是否有非默认值（偏移非零/缩放非一/旋转非零），更新 

`_hasDifferentVisuals

`。`CalculateMatrixFrame

` 内部调用?
### CalculateMatrixFrame
`

`

`csharp
public void CalculateMatrixFrame(in Rectangle2D parentRectangle)
`

`

`
核心布局计算。若 

`LocalScale

` 为零则置为一；调?

`RectangleHelper.CreateMatrixFrame

` 构建本地矩阵；若父矩形有效则组合（有旋转时矩阵乘法，无旋转时仅叠加原点）；正交化缓存矩阵；计算四个角世界坐标?AABB 包围盒；?

`_visualsNeedCalculation = true

`?
### CalculateVisualMatrixFrame
`

`

`csharp
public void CalculateVisualMatrixFrame()
`

`

`
视觉矩阵计算。若 

`_visualsNeedCalculation

` ?false 则直接返回；?

`_hasDifferentVisuals

` ?false 则视觉矩?= 布局矩阵；否则叠加旋转偏移、缩放倍率、像素偏移到布局矩阵上。处理负缩放导致的偏移修正。最后置 

`_visualsNeedCalculation = false

`?
### GetCachedOrigin
`

`

`csharp
public Vector2 GetCachedOrigin()
`

`

`
返回缓存的原点（矩形左上角在世界坐标的位置）?
### GetCachedMatrixFrame / GetCachedVisualMatrixFrame
`

`

`csharp
public MatrixFrame GetCachedMatrixFrame()
public MatrixFrame GetCachedVisualMatrixFrame()
`

`

`
返回缓存的布局矩阵 / 视觉矩阵。必须在 

`CalculateMatrixFrame

` / 

`CalculateVisualMatrixFrame

` 后调用?
### GetCenter
`

`

`csharp
public Vector2 GetCenter()
`

`

`
返回 AABB 包围盒的中心点?
### GetBoundingBox
`

`

`csharp
public SimpleRectangle GetBoundingBox()
`

`

`
返回 AABB 包围盒（

`SimpleRectangle

`）。旋转矩形时这是包围四个角的最小轴对齐矩形?
### IsIdentical
`

`

`csharp
public bool IsIdentical(in Rectangle2D other)
`

`

`
判断两个矩形的布局矩阵与视觉矩阵是否完全相同。用于变化检测以跳过不必要的重绘?
### IsCollide
`

`

`csharp
public bool IsCollide(in Rectangle2D other)
`

`

`
判断两个矩形是否相交。先 AABB 包围盒快速排除；再互查是否互为子矩形；若都非旋转则直接返?true；否?4×4 边段两两相交测试?
### IsSubRectOf
`

`

`csharp
public bool IsSubRectOf(in Rectangle2D other)
`

`

`
判断本矩形是否完全包含于 

`other

`。先 AABB 包围盒检查，再（旋转情况下）检查四个角是否都在 

`other

` 内?
### IsPointInside
`

`

`csharp
public bool IsPointInside(in Vector2 point)
`

`

`
判断点是否在矩形内。先 AABB 包围盒排除；无旋转时直接返回 true；有旋转时把点变换到本地坐标系，检查是否在 [0, LocalScale) 范围内?
### TransformScreenPositionToLocal
`

`

`csharp
public Vector2 TransformScreenPositionToLocal(in Vector2 screenPosition)
`

`

`
把屏?世界坐标变换到本地坐标系。用 

`_cachedOrthonormalMatrix.TransformToLocal

`?
### TransformLocalPositionToScreen
`

`

`csharp
public Vector2 TransformLocalPositionToScreen(in Vector2 localPosition)
`

`

`
把本地坐标变换到屏幕/世界坐标。用 

`_cachedOrthonormalMatrix.TransformToParent

`?
### DrawBoundingBox / DrawCorners
`

`

`csharp
public void DrawBoundingBox()
public void DrawCorners()
`

`

`
调试绘制方法。在 1.3.15 中为空实现（占位），可能由调试构建填充?
## 使用示例

### 示例：自定义 Widget 中使?Rectangle2D 做命中测?
**场景**: 你实现了一个自定义 Gauntlet Widget，需要精确判断鼠标点击是否落在旋转后的矩形内。`Rectangle2D.IsPointInside

` 已经支持旋转，你只需?

`OnMouseClick

` 时确保布局矩阵已计算?
`

`

`csharp
public class RotatingIconButton : Widget
{
    private float _rotationAngle;

    protected override void OnLateUpdate(float dt)
    {
        // 持续旋转
        _rotationAngle = (_rotationAngle + 90f * dt) % 360f;
        this.LocalRotation = _rotationAngle;

        // 必须先计算布局矩阵，否?IsPointInside 会用旧缓?        // Gauntlet 框架通常会在布局阶段调用 CalculateMatrixFrame?        // 但若你在 OnLateUpdate 里改?LocalRotation，需要等下一帧布局?        // 此处仅演示查询用法?    }

    public bool IsMouseOverIcon(Vector2 mouseScreenPos)
    {
        // Rectangle2D 由基?Widget 持有，通过 ThisRectangle 访问（假设的访问器）
        Rectangle2D rect = this.Rectangle;
        if (!rect.IsValid) return false;

        // 确保 CalculateMatrixFrame 已在当前帧执行过
        // （Gauntlet 布局管线保证查询前已计算?        return rect.IsPointInside(in mouseScreenPos);
    }
}
`

`

`

**要点**: 

`IsPointInside

` 依赖 

`_cachedOrthonormalMatrix

`，而后者由 

`CalculateMatrixFrame

` 填充。Gauntlet 框架的布局管线会在每帧渲染前对所?Widget 调用 

`CalculateMatrixFrame

`，所?

`OnMouseClick

` 时查询是安全的。但若你?

`OnLateUpdate

` 中修改了 

`LocalRotation

` 并立即查询，会得到上一帧的结果——需手动调用 

`CalculateMatrixFrame(parentRectangle)

` 或等待下一帧。`LocalScale

` 默认 (10,10) 而非 (1,1)，这是因?Gauntlet 的坐标单位是"逻辑像素 / 10"。`IsCollide

` ?

`IsSubRectOf

` 用于 Widget 间的布局碰撞（如自动避让），普?Mod 几乎不需要手动调用?
## 参见
- [完整类目录](../catalog)
- [本领域目录](../catalog-ui)
- [API 目录](../)
- [SDK 总览](../../architecture/sdk-overview)
