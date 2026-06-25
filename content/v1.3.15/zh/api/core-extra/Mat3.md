---
title: Mat3
description: Mat3 - 3x3 旋转矩阵结构体，用于表示物体朝向与坐标变?
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Mat3`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Mat3
**命名空间:** TaleWorlds.Library
**模块:** TaleWorlds.Library
**类型:** struct（`[Serializable]

`?
## 概述

`Mat3

` ?Bannerlord 核心数学库中?3×3 矩阵结构体，用于表示 3D 空间中的旋转和缩放。它由三?

`Vec3

` 向量组成——`s

`（Side/X 轴）、`f

`（Forward/Y 轴）、`u

`（Up/Z 轴），分别代表矩阵的三个行向量?
`Mat3

` ?Bannerlord 引擎中最基础的数据类型之一，广泛用于场景实体的朝向（`MatrixFrame.rotation

`）、坐标空间变换、角?相机方向计算等。它提供了绕轴旋转、正交化、缩放、四元数转换、欧拉角提取等完整的矩阵运算功能?
## 心智模型

?

`Mat3

` 视为"三个基向量的集合"。矩阵的三行 

`s

`、`f

`、`u

` 分别定义了局部坐标系?X、Y、Z 轴方向。一个单位正交矩阵（

`Identity

`）的三个轴分别指向世界坐标的 (1,0,0)?0,1,0)?0,0,1)?
核心操作?- **旋转**——`RotateAboutSide/Forward/Up

` 绕局部轴旋转；`RotateAboutAnArbitraryVector

` 绕任意轴旋转；`ApplyEulerAngles

` ?Z-X-Y 顺序应用欧拉角?- **变换**——`TransformToParent

` 将局部坐标转换为父坐标；

`TransformToLocal

` 将父坐标转换为局部坐标?- **正交?*——`Orthonormalize

` 使三个轴单位正交；`OrthonormalizeAccordingToForwardAndKeepUpAsZAxis

` 保持 Forward 方向但强?Up ?Z 轴（用于地面实体）?- **缩放**——`ApplyScaleLocal

` 按标量或向量缩放各轴；`GetScaleVector

` 返回各轴长度；`HasScale

` 判断是否有非单位缩放?- **转换**——`ToQuaternion

` 转四元数；`GetEulerAngles

` 提取欧拉角；

`Transpose

` 转置?
## 主要属?
\| 属?字段 \| 类型 \| 说明 \|
\|------\|------\|------\|
\| 

`s

` \| 

`Vec3

` \| Side 向量（矩阵第一行，X 轴方向） \|
\| 

`f

` \| 

`Vec3

` \| Forward 向量（矩阵第二行，Y 轴方向） \|
\| 

`u

` \| 

`Vec3

` \| Up 向量（矩阵第三行，Z 轴方向） \|
\| 

`this[int i]

` \| 

`Vec3

` \| 索引器：0=s, 1=f, 2=u \|
\| 

`Identity

` \| 

`Mat3

` \| 单位矩阵（静态属性） \|

## 主要方法

### 构造函?

`

`

`csharp
public Mat3(in Vec3 s, in Vec3 f, in Vec3 u)
public Mat3(float sx, float sy, float sz, float fx, float fy, float fz, float ux, float uy, float uz)
`

`

`
用三?

`Vec3

` 或九?float 分量构造矩阵?
### RotateAboutSide / RotateAboutForward / RotateAboutUp
`

`

`csharp
public void RotateAboutSide(float a)
public void RotateAboutForward(float a)
public void RotateAboutUp(float a)
`

`

`
分别?Side（X）、Forward（Y）、Up（Z）轴旋转 

`a

` 弧度。使?

`MathF.SinCos

` 计算旋转后的轴向量?
### RotateAboutAnArbitraryVector
`

`

`csharp
public void RotateAboutAnArbitraryVector(in Vec3 v, float a)
`

`

`
绕任意向?

`v

` 旋转 

`a

` 弧度。三个轴分别调用 

`Vec3.RotateAboutAnArbitraryVector

`?
### ApplyEulerAngles
`

`

`csharp
public void ApplyEulerAngles(in Vec3 eulerAngles)
`

`

`
?Z-X-Y 顺序应用欧拉角旋转（?Up/Z，再 Side/X，最?Forward/Y）?
### TransformToParent / TransformToLocal
`

`

`csharp
public Vec3 TransformToParent(in Vec3 v)
public Vec3 TransformToLocal(in Vec3 v)
public Vec2 TransformToParent(in Vec2 v)
public Vec2 TransformToLocal(in Vec2 v)
public Mat3 TransformToParent(in Mat3 m)
public Mat3 TransformToLocal(in Mat3 m)
`

`

`
坐标空间变换。`TransformToParent

` 将局部坐标转为父坐标（矩阵乘向量）；

`TransformToLocal

` 将父坐标转为局部坐标（转置矩阵乘向量）。支?

`Vec3

`、`Vec2

` ?

`Mat3

` 的变换?
### Orthonormalize
`

`

`csharp
public void Orthonormalize()
`

`

`
正交归一化。先归一?Forward，再?Forward×Up 计算 Side 并归一化，最后用 Side×Forward 重新计算 Up。确保三轴单位正交?
### OrthonormalizeAccordingToForwardAndKeepUpAsZAxis
`

`

`csharp
public void OrthonormalizeAccordingToForwardAndKeepUpAsZAxis()
`

`

`
特殊正交化：清零 Forward ?Z 分量后归一化，强制 Up 为世?Z ?(0,0,1)，Side = Forward × Up。适用于需?贴地"的实体朝向?
### IsOrthonormal / IsUnit / IsIdentity / IsZero
`

`

`csharp
public bool IsOrthonormal()
public bool IsUnit()
public bool IsIdentity()
public bool IsZero()
`

`

`
矩阵状态检查。`IsOrthonormal

` 检查三轴单位正交且右手系；

`IsUnit

` 仅检查各轴长度为 1；`IsIdentity

` 检查是否为单位矩阵；`IsZero

` 检查是否为零矩阵?
### IsLeftHanded / IsUniformScaled / HasScale
`

`

`csharp
public bool IsLeftHanded()
public bool IsUniformScaled()
public bool HasScale()
`

`

`
`IsLeftHanded

` 通过三重积判断是否为左手系；

`IsUniformScaled

` 检查三轴缩放是否一致；

`HasScale

` 检查是否有非单位缩放?
### ApplyScaleLocal
`

`

`csharp
public void ApplyScaleLocal(float scaleAmount)
public void ApplyScaleLocal(in Vec3 scaleAmountXYZ)
`

`

`
按标量或向量缩放各轴。标量版本统一缩放；向量版本分别缩?s/f/u ?x/y/z 分量?
### GetScaleVector / GetScaleVectorSquared
`

`

`csharp
public Vec3 GetScaleVector()
public Vec3 GetScaleVectorSquared()
`

`

`
返回各轴长度（或长度平方）组成的 

`Vec3

`?
### GetUnitRotation / MakeUnit
`

`

`csharp
public Mat3 GetUnitRotation(float removedScale)
public Vec3 MakeUnit()
`

`

`
`GetUnitRotation

` 返回去除指定缩放后的单位旋转矩阵；`MakeUnit

` 归一化各轴并返回各轴原始长度?
### ToQuaternion
`

`

`csharp
public void ToQuaternion(out Quaternion quat)
public Quaternion ToQuaternion()
`

`

`
将矩阵转换为四元数。委托给 

`Quaternion.QuaternionFromMat3

`?
### GetEulerAngles
`

`

`csharp
public Vec3 GetEulerAngles()
`

`

`
从矩阵提取欧拉角。先正交化，然后通过 

`Asin

` ?

`Atan2

` 计算三个旋转角度?
### Transpose
`

`

`csharp
public Mat3 Transpose()
`

`

`
返回转置矩阵。对于正交矩阵，转置等于逆矩阵?
### Lerp / LerpNonOrthogonal
`

`

`csharp
public static Mat3 Lerp(in Mat3 m1, in Mat3 m2, float alpha)
public static Mat3 LerpNonOrthogonal(in Mat3 m1, in Mat3 m2, float alpha)
`

`

`
线性插值两个矩阵。`Lerp

` 插?Forward ?Up 后正交化；`LerpNonOrthogonal

` 插值所有三个轴但不正交化?
### CreateMat3WithForward
`

`

`csharp
public static Mat3 CreateMat3WithForward(in Vec3 direction)
`

`

`
根据 Forward 方向创建正交矩阵。若方向接近垂直（\|z\|?.99）则 Up ?Y 轴，否则?Z 轴?
### CreateDiagonalMat3
`

`

`csharp
public static Mat3 CreateDiagonalMat3(in Vec3 diagonalData)
`

`

`
创建对角矩阵，非对角元素为零?
### NearlyEquals
`

`

`csharp
public bool NearlyEquals(in Mat3 rhs, float epsilon = 1E-05f)
`

`

`
判断两个矩阵是否在误差范围内近似相等?
### 运算?

`

`

`csharp
public static Mat3 operator *(in Mat3 v, float a)   // 矩阵 × 标量
public static bool operator ==(in Mat3 m1, in Mat3 m2)
public static bool operator !=(in Mat3 m1, in Mat3 m2)
`

`

`

## 使用示例

### 示例: 创建朝向目标的旋转矩?
**场景**: 模组需要让一个场景实体朝向某个方向?
`

`

`csharp
Vec3 entityPos = new Vec3(100, 200, 0);
Vec3 targetPos = new Vec3(150, 250, 0);
Vec3 direction = targetPos - entityPos;

// 创建朝向目标的矩?Mat3 rotation = Mat3.CreateMat3WithForward(direction);

// 应用到实体的 MatrixFrame
MatrixFrame frame = entity.GetGlobalFrame();
frame.rotation = rotation;
entity.SetGlobalFrame(frame);
`

`

`

**要点**: 

`CreateMat3WithForward

` 自动计算正交?Side ?Up 轴；适用于需?看向"某个方向的场景实体、相机等?
### 示例: 绕轴旋转实体

**场景**: 模组需要在 Mission 中旋转一个场景实?45 度?
`

`

`csharp
GameEntity entity = Mission.Current.Scene.FindEntityWithTag("my_entity");
if (entity != null)
{
    MatrixFrame frame = entity.GetGlobalFrame();

    // ?Up 轴（Z 轴）旋转 45 ?    float angleRadians = MathF.Deg2Rad(45f);
    frame.rotation.RotateAboutUp(angleRadians);

    entity.SetGlobalFrame(frame);
}
`

`

`

**要点**: 

`RotateAboutUp

` 修改的是矩阵本身（struct 语义，需?entity 取出、修改、设回）；角度单位是弧度，使?

`MathF.Deg2Rad

` 转换?
### 示例: 坐标空间变换

**场景**: 将一个世界坐标点转换为实体的局部坐标?
`

`

`csharp
GameEntity entity = Mission.Current.Scene.FindEntityWithTag("my_entity");
MatrixFrame frame = entity.GetGlobalFrame();

Vec3 worldPoint = new Vec3(100, 200, 50);

// 世界坐标 ?实体局部坐?Vec3 localPoint = frame.TransformToLocal(worldPoint);

Debug.Print($"世界坐标 {worldPoint} ?局部坐?{localPoint}");

// 反向：局部坐??世界坐标
Vec3 backToWorld = frame.TransformToParent(localPoint);
`

`

`

**要点**: 

`MatrixFrame.TransformToLocal

` 内部使用 

`Mat3.TransformToLocal

` 做旋转部分的变换；局部坐标的零点在实体位置，轴方向由实体朝向决定?
## 参见
- [完整类目录](../catalog)
- [本领域目录](../catalog-core)
- [API 目录](../)
- [SDK 总览](../../architecture/sdk-overview)
