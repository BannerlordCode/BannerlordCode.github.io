<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MatrixFrame`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MatrixFrame

**命名空间:** TaleWorlds.Library  
**文件:** `bannerlord-1.3.15/TaleWorlds.Library/MatrixFrame.cs`  
**类型:** struct（`[Serializable]`）

引擎中通用的仿射变换（affine transform），由一个 3x3 旋转 [`Mat3`](./Mat3.md) 和一个平移原点 [`Vec3`](./Vec3.md) 组成。在内部以 4x4 齐次矩阵存储：`rotation` 的三个基向量 `s`（side/右）、`f`（forward/前）、`u`（up/上）构成上 3 行，`origin` 构成第 4 行。该结构在实体放置、摄像机、骨骼与坐标空间换算中被广泛使用。

## 概述

`MatrixFrame` 同时承载“位置 + 朝向”，是 Bannerlord 中描述一个物体在世界中摆放姿态的基本单位。它的两套核心操作是 `TransformToParent`（把局部坐标/子帧变换到本帧空间，即“世界化”）与 `TransformToLocal`（反向，把世界坐标变到本帧的局部空间）。沿自身坐标轴移动用 `Strafe` / `Advance` / `Elevate`；绕任意轴旋转用 `Rotate`。多个变换可用 `*` 运算符组合。

> 注意：本结构为 `struct`（值类型），赋值与传参会复制。`Advance` / `Strafe` / `Elevate` / `Rotate` / `Scale` 会就地修改 `this` 并返回 `this`。

## 字段

| 名称 | 类型 | 描述 |
|------|------|------|
| rotation | Mat3 | 旋转部分，由基向量 `s`、`f`、`u` 组成 |
| origin | Vec3 | 平移/原点（第 4 行） |

## 构造函数

| 构造函数 | 描述 |
|----------|------|
| `MatrixFrame(in Mat3 rot, in Vec3 o)` | 由旋转与原点直接构造 |
| `MatrixFrame(float _11.._43)`（12 个 float） | 以 3x3 + 原点 xyz 构造，`origin.w = -1` |
| `MatrixFrame(float _11.._44)`（16 个 float） | 以完整 4x4 分量构造，`s/f/u` 各带 `w`，`origin` 带 `w` |

```csharp
public MatrixFrame(in Mat3 rot, in Vec3 o)
public MatrixFrame(float _11, float _12, float _13,
                   float _21, float _22, float _23,
                   float _31, float _32, float _33,
                   float _41, float _42, float _43)
public MatrixFrame(float _11, float _12, float _13, float _14,
                   float _21, float _22, float _23, float _24,
                   float _31, float _32, float _33, float _34,
                   float _41, float _42, float _43, float _44)
```

## 静态属性

| 名称 | 类型 | 描述 |
|------|------|------|
| Identity | MatrixFrame | 单位变换：`Mat3.Identity` + 原点 `(0,0,0,1)` |
| Zero | MatrixFrame | 全零旋转 + 原点 `(0,0,0,1)` |

## 实例属性

| 名称 | 类型 | 描述 |
|------|------|------|
| IsIdentity | bool | 原点为零且旋转为单位矩阵时为 `true` |
| IsZero | bool | 原点为零且旋转为零矩阵时为 `true` |
| this[int i] | Vec3 | 按行访问：`0`=s, `1`=f, `2`=u, `3`=origin；越界抛 `IndexOutOfRangeException` |
| this[int i, int j] | float | 按元素访问第 `i` 行第 `j` 列；越界抛 `IndexOutOfRangeException` |

## 变换方法

### TransformToParent（Vec3）

```csharp
public Vec3 TransformToParent(in Vec3 v)
```

把局部向量 `v` 变换到本帧空间（应用旋转 + 平移）。即“局部 → 世界”。

**参数:**
- `v` - 局部空间向量

**返回:** 变换后的世界空间向量（`w = -1`）。

### TransformToParent（MatrixFrame）

```csharp
public MatrixFrame TransformToParent(in MatrixFrame m)
```

把子帧 `m` 变换到本帧空间：旋转用 `this.rotation.TransformToParent(m.rotation)`，原点用 `this.TransformToParent(m.origin)`。

**返回:** 组合后的新 `MatrixFrame`。

### TransformToParent（Vec2）

```csharp
public Vec2 TransformToParent(in Vec2 v)
```

2D 版本：仅使用 `s`、`f` 基向量的 xy 分量与原点的 xy。

### TransformToParentDouble

```csharp
public Vec3 TransformToParentDouble(in Vec3 v)
```

与 `TransformToParent(in Vec3)` 相同，但中间以 `double` 精度计算，减少大坐标下的误差。

### TransformToParentWithW

```csharp
public Vec3 TransformToParentWithW(Vec3 _s)
```

完整 4x4 变换，保留并计算 `w` 分量（用于齐次/投影坐标）。

### TransformToLocal

```csharp
public Vec3 TransformToLocal(in Vec3 v)
public MatrixFrame TransformToLocal(in MatrixFrame m)
```

把世界空间向量/帧 `v` 变换到本帧的局部空间（先减 `origin`，再用旋转的转置变换）。Vec3 重载假设旋转为正交单位基。

### TransformToLocalNonUnit

```csharp
public Vec3 TransformToLocalNonUnit(in Vec3 v)
```

与 `TransformToLocal(in Vec3)` 计算式相同，用于旋转未归一化的情形。

### TransformToLocalNonOrthogonal

```csharp
public Vec3 TransformToLocalNonOrthogonal(in Vec3 v)
public MatrixFrame TransformToLocalNonOrthogonal(in MatrixFrame frame)
```

通过构造完整 4x4 并调用 `Inverse()` 求逆来变换，适用于旋转非正交（含缩放/剪切）的情形。代价高于 `TransformToLocal`。

## 移动方法

沿自身坐标轴平移 `origin`，就地修改并返回 `this`，便于链式调用。

```csharp
public MatrixFrame Strafe(float a)   // 沿 s（右）移动
public MatrixFrame Advance(float a)  // 沿 f（前）移动
public MatrixFrame Elevate(float a)  // 沿 u（上）移动
```

| 方法 | 方向 | 等价于 |
|------|------|--------|
| Strafe | 右（s） | `origin += rotation.s * a` |
| Advance | 前（f） | `origin += rotation.f * a` |
| Elevate | 上（u） | `origin += rotation.u * a` |

## 旋转 / 缩放

### Rotate

```csharp
public void Rotate(float radian, in Vec3 axis)
```

绕任意 `axis`（无需归一化即可，内部按 Rodrigues 公式构造旋转矩阵）旋转 `radian` 弧度，就地修改 `origin` 与 `rotation`。

### Scale

```csharp
public void Scale(in Vec3 scalingVector)
```

按 `scalingVector` 缩放本帧（构造缩放矩阵并与本帧复合）。

### GetScale

```csharp
public Vec3 GetScale()
```

**返回:** 各轴缩放 `(rotation.s.Length, rotation.f.Length, rotation.u.Length)`。

### GetUnitRotFrame

```csharp
public MatrixFrame GetUnitRotFrame(float removedScale)
```

返回保留 `origin`、旋转归一化（移除 `removedScale` 缩放）的新帧。

## 逆 / 行列式

### Inverse / InverseFast

```csharp
public MatrixFrame Inverse()
public MatrixFrame InverseFast()
```

`Inverse()` 直接转发到 `InverseFast()`，按 4x4 伴随矩阵法求逆，并在行列式不为 1 时整体除以行列式。

### Determinant4X4

```csharp
public float Determinant4X4()
```

**返回:** 4x4 矩阵的行列式。

### NearlyEquals

```csharp
public bool NearlyEquals(MatrixFrame rhs, float epsilon = 1E-05f)
```

**返回:** 旋转与原点均在 `epsilon` 内相等时为 `true`。

### Fill

```csharp
public void Fill()
```

把 `rotation.s.w / f.w / u.w` 置 0、`origin.w` 置 1，使该帧成为规范齐次矩阵。

## 静态方法

### Lerp / LerpNonOrthogonal / Slerp

```csharp
public static MatrixFrame Lerp(in MatrixFrame m1, in MatrixFrame m2, float alpha)
public static MatrixFrame LerpNonOrthogonal(in MatrixFrame m1, in MatrixFrame m2, float alpha)
public static MatrixFrame Slerp(in MatrixFrame m1, in MatrixFrame m2, float alpha)
```

帧间插值。`origin` 均用 `Vec3.Lerp`；旋转部分：`Lerp` 用 `Mat3.Lerp`，`LerpNonOrthogonal` 用 `Mat3.LerpNonOrthogonal` 并调用 `Fill()`，`Slerp` 经四元数球面插值（`Quaternion.Slerp`）后转回 `Mat3`。

### CreateLookAt

```csharp
public static MatrixFrame CreateLookAt(in Vec3 position, in Vec3 target, in Vec3 upVector)
```

构造“看向目标”的视图帧：前向 = `(target - position)` 归一化，侧向 = `up × forward`，上向 = `forward × side`，原点平移为 `-dot(基, position)`。

### CenterFrameOfTwoPoints

```csharp
public static MatrixFrame CenterFrameOfTwoPoints(in Vec3 p1, in Vec3 p2, Vec3 upVector)
```

以 `p1`、`p2` 中点为原点、`p2 - p1` 方向为 `s` 构造帧；当 `s` 与 `upVector` 接近平行（>0.95）时回退到 `(0,1,0)`，最后 `Fill()`。

## 运算符

| 运算符 | 签名 | 描述 |
|--------|------|------|
| `*` | `operator *(in MatrixFrame m1, in MatrixFrame m2)` | 等价 `m1.TransformToParent(m2)`，即 `m2` 在 `m1` 空间下的复合 |
| `==` | `operator ==(in MatrixFrame m1, in MatrixFrame m2)` | `origin` 与 `rotation` 均相等 |
| `!=` | `operator !=(in MatrixFrame m1, in MatrixFrame m2)` | 上述取反 |

> 该结构重写了 `Equals(object)`（按 `==` 比较）与 `ToString()`（打印 Rotation 与 Origin），但 `GetHashCode()` 未做重写（沿用基类实现）。

## 使用示例

```csharp
using TaleWorlds.Library;

// 1) 在世界某位置放置一个朝东的实体
//    Mat3 的 s=右、f=前、u=上；这里令 forward 指向 +X
var spawnFrame = new MatrixFrame(
    new Mat3(
        new Vec3(0f, 1f, 0f),  // s (right)  -> +Y
        new Vec3(1f, 0f, 0f),  // f (forward)-> +X
        new Vec3(0f, 0f, 1f)), // u (up)     -> +Z
    new Vec3(100f, 50f, 0f));

// 2) 沿自身前向推进 10 单位、向右平移 2 单位
spawnFrame.Advance(10f).Strafe(2f);

// 3) 绕世界 Z 轴旋转 90 度
spawnFrame.Rotate(MathF.PI / 2f, new Vec3(0f, 0f, 1f));

// 4) 把一个局部偏移点变换到世界空间
Vec3 localOffset = new Vec3(0f, 0f, 5f);   // 局部“正上方”5 单位
Vec3 worldPoint = spawnFrame.TransformToParent(localOffset);

// 5) 用 * 组合父子变换：父帧 + 相对子帧
MatrixFrame parent = MatrixFrame.Identity;
parent.origin = new Vec3(0f, 0f, 100f);
MatrixFrame childLocal = spawnFrame;
MatrixFrame childWorld = parent * childLocal; // 等价 parent.TransformToParent(childLocal)

// 6) 反向：把世界点变到 spawnFrame 的局部空间
Vec3 localAgain = spawnFrame.TransformToLocal(worldPoint);
```

## 参见

- [Vec3](./Vec3.md)
- [Mat3](./Mat3.md)
