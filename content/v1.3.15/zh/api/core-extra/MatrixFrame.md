---
title: "MatrixFrame"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MatrixFrame`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MatrixFrame

**命名空间:** TaleWorlds.Library  
**文件:** 

`bannerlord-1.3.15/TaleWorlds.Library/MatrixFrame.cs

`  
**类型:** struct（`[Serializable]

`?
引擎中通用的仿射变换（affine transform），由一?3x3 旋转 [

`Mat3

`](./Mat3) 和一个平移原?[

`Vec3

`](./Vec3) 组成。在内部?4x4 齐次矩阵存储：`rotation

` 的三个基向量 

`s

`（side/右）、`f

`（forward/前）、`u

`（up/上）构成?3 行，

`origin

` 构成?4 行。该结构在实体放置、摄像机、骨骼与坐标空间换算中被广泛使用?
## 概述

`MatrixFrame

` 同时承载“位?+ 朝向”，?Bannerlord 中描述一个物体在世界中摆放姿态的基本单位。它的两套核心操作是 

`TransformToParent

`（把局部坐?子帧变换到本帧空间，即“世界化”）?

`TransformToLocal

`（反向，把世界坐标变到本帧的局部空间）。沿自身坐标轴移动用 

`Strafe

` / 

`Advance

` / 

`Elevate

`；绕任意轴旋转用 

`Rotate

`。多个变换可?

`*

` 运算符组合?
&gt; 注意：本结构?

`struct

`（值类型），赋值与传参会复制。`Advance

` / 

`Strafe

` / 

`Elevate

` / 

`Rotate

` / 

`Scale

` 会就地修?

`this

` 并返?

`this

`?
## 
## 心智模型

先把 `MatrixFrame` 当作这个子系统的入口或数据节点来理解：先看属性代表什么状态，再看方法允许你做什么。
字段

\| 名称 \| 类型 \| 描述 \|
\|------\|------\|------\|
\| rotation \| Mat3 \| 旋转部分，由基向?

`s

`、`f

`、`u

` 组成 \|
\| origin \| Vec3 \| 平移/原点（第 4 行） \|

## 构造函?
\| 构造函?\| 描述 \|
\|----------\|------\|
\| 

`MatrixFrame(in Mat3 rot, in Vec3 o)

` \| 由旋转与原点直接构?\|
\| 

`MatrixFrame(float _11.._43)

`?2 ?float?\| ?3x3 + 原点 xyz 构造，

`origin.w = -1

` \|
\| 

`MatrixFrame(float _11.._44)

`?6 ?float?\| 以完?4x4 分量构造，

`s/f/u

` 各带 

`w

`，`origin

` ?

`w

` \|

`

`

`csharp
public MatrixFrame(in Mat3 rot, in Vec3 o)
public MatrixFrame(float _11, float _12, float _13,
                   float _21, float _22, float _23,
                   float _31, float _32, float _33,
                   float _41, float _42, float _43)
public MatrixFrame(float _11, float _12, float _13, float _14,
                   float _21, float _22, float _23, float _24,
                   float _31, float _32, float _33, float _34,
                   float _41, float _42, float _43, float _44)
`

`

`

## 静态属?
\| 名称 \| 类型 \| 描述 \|
\|------\|------\|------\|
\| Identity \| MatrixFrame \| 单位变换：`Mat3.Identity

` + 原点 

`(0,0,0,1)

` \|
\| Zero \| MatrixFrame \| 全零旋转 + 原点 

`(0,0,0,1)

` \|

## 实例属?
\| 名称 \| 类型 \| 描述 \|
\|------\|------\|------\|
\| IsIdentity \| bool \| 原点为零且旋转为单位矩阵时为 

`true

` \|
\| IsZero \| bool \| 原点为零且旋转为零矩阵时?

`true

` \|
\| this[int i] \| Vec3 \| 按行访问：`0

`=s, 

`1

`=f, 

`2

`=u, 

`3

`=origin；越界抛 

`IndexOutOfRangeException

` \|
\| this[int i, int j] \| float \| 按元素访问第 

`i

` 行第 

`j

` 列；越界?

`IndexOutOfRangeException

` \|

## 变换方法

### TransformToParent（Vec3?
`

`

`csharp
public Vec3 TransformToParent(in Vec3 v)
`

`

`

把局部向?

`v

` 变换到本帧空间（应用旋转 + 平移）。即“局??世界”?
**参数:**
- 

`v

` - 局部空间向?
**返回:** 变换后的世界空间向量（`w = -1

`）?
### TransformToParent（MatrixFrame?
`

`

`csharp
public MatrixFrame TransformToParent(in MatrixFrame m)
`

`

`

把子?

`m

` 变换到本帧空间：旋转?

`this.rotation.TransformToParent(m.rotation)

`，原点用 

`this.TransformToParent(m.origin)

`?
**返回:** 组合后的?

`MatrixFrame

`?
### TransformToParent（Vec2?
`

`

`csharp
public Vec2 TransformToParent(in Vec2 v)
`

`

`

2D 版本：仅使用 

`s

`、`f

` 基向量的 xy 分量与原点的 xy?
### TransformToParentDouble

`

`

`csharp
public Vec3 TransformToParentDouble(in Vec3 v)
`

`

`

?

`TransformToParent(in Vec3)

` 相同，但中间?

`double

` 精度计算，减少大坐标下的误差?
### TransformToParentWithW

`

`

`csharp
public Vec3 TransformToParentWithW(Vec3 _s)
`

`

`

完整 4x4 变换，保留并计算 

`w

` 分量（用于齐?投影坐标）?
### TransformToLocal

`

`

`csharp
public Vec3 TransformToLocal(in Vec3 v)
public MatrixFrame TransformToLocal(in MatrixFrame m)
`

`

`

把世界空间向??

`v

` 变换到本帧的局部空间（先减 

`origin

`，再用旋转的转置变换）。Vec3 重载假设旋转为正交单位基?
### TransformToLocalNonUnit

`

`

`csharp
public Vec3 TransformToLocalNonUnit(in Vec3 v)
`

`

`

?

`TransformToLocal(in Vec3)

` 计算式相同，用于旋转未归一化的情形?
### TransformToLocalNonOrthogonal

`

`

`csharp
public Vec3 TransformToLocalNonOrthogonal(in Vec3 v)
public MatrixFrame TransformToLocalNonOrthogonal(in MatrixFrame frame)
`

`

`

通过构造完?4x4 并调?

`Inverse()

` 求逆来变换，适用于旋转非正交（含缩放/剪切）的情形。代价高?

`TransformToLocal

`?
## 移动方法

沿自身坐标轴平移 

`origin

`，就地修改并返回 

`this

`，便于链式调用?
`

`

`csharp
public MatrixFrame Strafe(float a)   // ?s（右）移?public MatrixFrame Advance(float a)  // ?f（前）移?public MatrixFrame Elevate(float a)  // ?u（上）移?

`

`

`

\| 方法 \| 方向 \| 等价?\|
\|------\|------\|--------\|
\| Strafe \| 右（s?\| 

`origin += rotation.s * a

` \|
\| Advance \| 前（f?\| 

`origin += rotation.f * a

` \|
\| Elevate \| 上（u?\| 

`origin += rotation.u * a

` \|

## 旋转 / 缩放

### Rotate

`

`

`csharp
public void Rotate(float radian, in Vec3 axis)
`

`

`

绕任?

`axis

`（无需归一化即可，内部?Rodrigues 公式构造旋转矩阵）旋转 

`radian

` 弧度，就地修?

`origin

` ?

`rotation

`?
### Scale

`

`

`csharp
public void Scale(in Vec3 scalingVector)
`

`

`

?

`scalingVector

` 缩放本帧（构造缩放矩阵并与本帧复合）?
### GetScale

`

`

`csharp
public Vec3 GetScale()
`

`

`

**返回:** 各轴缩放 

`(rotation.s.Length, rotation.f.Length, rotation.u.Length)

`?
### GetUnitRotFrame

`

`

`csharp
public MatrixFrame GetUnitRotFrame(float removedScale)
`

`

`

返回保留 

`origin

`、旋转归一化（移除 

`removedScale

` 缩放）的新帧?
## ?/ 行列?
### Inverse / InverseFast

`

`

`csharp
public MatrixFrame Inverse()
public MatrixFrame InverseFast()
`

`

`

`Inverse()

` 直接转发?

`InverseFast()

`，按 4x4 伴随矩阵法求逆，并在行列式不?1 时整体除以行列式?
### Determinant4X4

`

`

`csharp
public float Determinant4X4()
`

`

`

**返回:** 4x4 矩阵的行列式?
### NearlyEquals

`

`

`csharp
public bool NearlyEquals(MatrixFrame rhs, float epsilon = 1E-05f)
`

`

`

**返回:** 旋转与原点均?

`epsilon

` 内相等时?

`true

`?
### Fill

`

`

`csharp
public void Fill()
`

`

`

?

`rotation.s.w / f.w / u.w

` ?0、`origin.w

` ?1，使该帧成为规范齐次矩阵?
## 静态方?
### Lerp / LerpNonOrthogonal / Slerp

`

`

`csharp
public static MatrixFrame Lerp(in MatrixFrame m1, in MatrixFrame m2, float alpha)
public static MatrixFrame LerpNonOrthogonal(in MatrixFrame m1, in MatrixFrame m2, float alpha)
public static MatrixFrame Slerp(in MatrixFrame m1, in MatrixFrame m2, float alpha)
`

`

`

帧间插值。`origin

` 均用 

`Vec3.Lerp

`；旋转部分：

`Lerp

` ?

`Mat3.Lerp

`，`LerpNonOrthogonal

` ?

`Mat3.LerpNonOrthogonal

` 并调?

`Fill()

`，`Slerp

` 经四元数球面插值（

`Quaternion.Slerp

`）后转回 

`Mat3

`?
### CreateLookAt

`

`

`csharp
public static MatrixFrame CreateLookAt(in Vec3 position, in Vec3 target, in Vec3 upVector)
`

`

`

构造“看向目标”的视图帧：前向 = 

`(target - position)

` 归一化，侧向 = 

`up × forward

`，上?= 

`forward × side

`，原点平移为 

`-dot(? position)

`?
### CenterFrameOfTwoPoints

`

`

`csharp
public static MatrixFrame CenterFrameOfTwoPoints(in Vec3 p1, in Vec3 p2, Vec3 upVector)
`

`

`

?

`p1

`、`p2

` 中点为原点、`p2 - p1

` 方向?

`s

` 构造帧；当 

`s

` ?

`upVector

` 接近平行?0.95）时回退?

`(0,1,0)

`，最?

`Fill()

`?
## 运算?
\| 运算?\| 签名 \| 描述 \|
\|--------\|------\|------\|
\| 

`*

` \| 

`operator *(in MatrixFrame m1, in MatrixFrame m2)

` \| 等价 

`m1.TransformToParent(m2)

`，即 

`m2

` ?

`m1

` 空间下的复合 \|
\| 

`==

` \| 

`operator ==(in MatrixFrame m1, in MatrixFrame m2)

` \| 

`origin

` ?

`rotation

` 均相?\|
\| 

`!=

` \| 

`operator !=(in MatrixFrame m1, in MatrixFrame m2)

` \| 上述取反 \|

&gt; 该结构重写了 

`Equals(object)

`（按 

`==

` 比较）与 

`ToString()

`（打?Rotation ?Origin），?

`GetHashCode()

` 未做重写（沿用基类实现）?
## 使用示例

`

`

`csharp
using TaleWorlds.Library;

// 1) 在世界某位置放置一个朝东的实体
//    Mat3 ?s=右、f=前、u=上；这里?forward 指向 +X
var spawnFrame = new MatrixFrame(
    new Mat3(
        new Vec3(0f, 1f, 0f),  // s (right)  -&gt; +Y
        new Vec3(1f, 0f, 0f),  // f (forward)-&gt; +X
        new Vec3(0f, 0f, 1f)), // u (up)     -&gt; +Z
    new Vec3(100f, 50f, 0f));

// 2) 沿自身前向推?10 单位、向右平?2 单位
spawnFrame.Advance(10f).Strafe(2f);

// 3) 绕世?Z 轴旋?90 ?spawnFrame.Rotate(MathF.PI / 2f, new Vec3(0f, 0f, 1f));

// 4) 把一个局部偏移点变换到世界空?Vec3 localOffset = new Vec3(0f, 0f, 5f);   // 局部“正上方? 单位
Vec3 worldPoint = spawnFrame.TransformToParent(localOffset);

// 5) ?* 组合父子变换：父?+ 相对子帧
MatrixFrame parent = MatrixFrame.Identity;
parent.origin = new Vec3(0f, 0f, 100f);
MatrixFrame childLocal = spawnFrame;
MatrixFrame childWorld = parent * childLocal; // 等价 parent.TransformToParent(childLocal)

// 6) 反向：把世界点变?spawnFrame 的局部空?Vec3 localAgain = spawnFrame.TransformToLocal(worldPoint);
`

`

`

## 参见

- [Vec3](./Vec3)
- [Mat3](./Mat3)
