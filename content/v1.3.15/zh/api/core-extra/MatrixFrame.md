---
title: "MatrixFrame"
description: '游戏世界里描述一个物体在三维空间里位于何处、朝向何方的 4x4 变换矩阵（旋转 + 平移，可含缩放）。'
---
# MatrixFrame

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct MatrixFrame`
**Base:** 无（值类型，直接继承自 `System.ValueType`）
**File:** `TaleWorlds.Library/MatrixFrame.cs`

## 一句话职责

它把一个局部坐标点换算成世界坐标点（或反过来）：本质上就是「位置 + 朝向 + 缩放」的组合，用来告诉引擎某件物体、某根骨骼或某个粒子发射器在场景里到底摆在哪里。

## 心智模型

`MatrixFrame` 是 `TaleWorlds.Library` 里的纯数学值类型，属于 Foundation（基础数学/几何）层，几乎所有更上层的子系统（Mission、Campaign、UI 的 3D 预览）都建立在它之上。它由两个公开字段组成：

- `rotation`（`Mat3`）：3x3 旋转矩阵，同时隐含各轴的缩放（s=右/side、f=前/forward、u=上/up 三个基向量）。
- `origin`（`Vec3`）：该坐标系原点在世界中的位置；其 `w` 分量恒为 1（齐次坐标）。

它本身不持有任何「场景对象」引用——你拿到它、改它、再把它写回场景实体，场景实体（如 `GameEntity`、`AgentVisuals`）才是真正的持有者。因为是个 struct，赋值和传参是**值拷贝**：你本地修改了一份副本不会自动影响原实体，必须显式回写（如 `GameEntity.SetFrame`）。

生命周期：你通常在某个 `GameEntity` 或 `AgentVisuals` 上 `GetGlobalFrame()` 拿到它，改完后再写回去；也可以直接 `new MatrixFrame(...)` 或从 `MatrixFrame.Identity` 起步自行构造。

## 何时用 / 何时不要用

- **用**：需要把局部坐标转世界坐标（`TransformToParent`）、把世界坐标转回某个实体的局部坐标（`TransformToLocal`）、构造朝向相机/目标的观察矩阵（`CreateLookAt`）、在两段变换之间插值（`Lerp`/`Slerp`）、绕某根轴旋转或平移实体（`Rotate`/`Strafe`/`Advance`/`Elevate`）。
- **不要用**：只做标量数学（用 `MathF`）；只需要一个方向向量（用 `Vec3`）；要做四元数插值之外的高级旋转（考虑 `Quaternion`）。不要在 UI 视图模型（ViewModel）层里直接摆弄 `MatrixFrame` 来定位控件——UI 用的是屏幕坐标，不是世界变换。

## 依赖图
- [本区域目录](../)
- [Vec3 —— 三维向量，MatrixFrame 的 origin 与基向量类型](../Vec3)
- [Mat3 —— 3x3 旋转矩阵，MatrixFrame.rotation 的类型](../Mat3)
- [Quaternion —— 四元数，Slerp 内部使用](../Quaternion)
- [SDK 总览：各层职责与边界](../../../architecture/sdk-overview)
- [崩溃边界：数学类型误用与帧回写的常见陷阱](../../../architecture/crash-boundaries)

## 风险段

- **值拷贝陷阱**：`MatrixFrame` 是 struct。从 `entity.GetGlobalFrame()` 取出的帧是副本，原地 `frame.origin += ...` 之后必须再 `entity.SetFrame(frame)`（或等价回写）才会生效，否则改动会静默丢失。
- **`w` 分量未填充**：很多构造路径只填了 `rotation` 与 `origin` 的 xyz，没设齐次 `w`。`InverseFast()` 依赖 `Fill()` 后的规整齐次形式；如果你手工拼帧，调用 `Fill()` 把各基向量 `w` 清零、`origin.w = 1f` 后再求逆，否则结果不可预期。
- **非正交/含缩放的帧**：`TransformToLocal` 假设帧是正交且单位长度的。若帧带非均匀缩放，应使用 `TransformToLocalNonOrthogonal`，否则反变换会得到错误坐标。
- **`TransformToParentWithW` 是齐次乘法**：它的输出 `w` 不是 1，不能直接当世界坐标点使用，需自行做透视除法。
- **性能**：`Inverse()`/`Determinant4X4()` 每帧大量调用（例如每根骨骼）会有成本，能缓存就缓存；`Rotate` 内部调用 `MathF.SinCos`，连续多次旋转可合并为一次矩阵乘法（`m1 * m2`）。

## 成员说明

### 公开字段
- `rotation`（`Mat3`）：坐标系的三个基向量 s/f/u 及隐含缩放。直接读写即可，但修改后若用于求逆请记得 `Fill()`。
- `origin`（`Vec3`）：原点在世界空间中的位置；`origin.w` 应保持 1。

### 构造与常量
- `MatrixFrame(in Mat3 rot, in Vec3 o)`：用旋转与原点直接构造。
- `MatrixFrame(12 个 float)` / `MatrixFrame(16 个 float)`：按行主序填矩阵；16 参版本显式给出每个 `w`。
- `MatrixFrame.Identity`（静态）：单位矩阵，原点在 (0,0,0)，无旋转无缩放。新帧的起点。
- `MatrixFrame.Zero`（静态）：全零帧（非单位，慎用，求逆会出问题）。

### 坐标变换
- `Vec3 TransformToParent(in Vec3 v)`：把局部坐标点变到世界坐标。最常用的入口，side-effect：无（纯函数）。
- `Vec2 TransformToParent(in Vec2 v)`：只取 xy 平面变换，忽略 z。
- `MatrixFrame TransformToParent(in MatrixFrame m)`：把另一帧的变换「叠加」到本帧之下（子坐标系挂到父坐标系）。
- `Vec3 TransformToLocal(in Vec3 v)`：世界坐标 → 本帧局部坐标；**要求帧正交且单位长度**。
- `Vec3 TransformToLocalNonUnit(in Vec3 v)`：同上但容忍非单位长度基向量。
- `Vec3 TransformToLocalNonOrthogonal(in Vec3 v)` / `MatrixFrame TransformToLocalNonOrthogonal(in MatrixFrame frame)`：用于带非均匀缩放的帧，内部先求逆再变换。

### 插值（静态）
- `Lerp(in MatrixFrame m1, in MatrixFrame m2, float alpha)`：线性插值位置并对旋转做 `Mat3.Lerp`；适合平移过渡。
- `Slerp(in MatrixFrame m1, in MatrixFrame m2, float alpha)`：用四元数球面插值旋转 + 线性插值位置；适合朝向平滑过渡（如相机转向）。
- `LerpNonOrthogonal(...)`：针对非正交帧的插值，末尾自动 `Fill()`。

### 构造辅助（静态）
- `CreateLookAt(in Vec3 position, in Vec3 target, in Vec3 upVector)`：生成从 `position` 看向 `target` 的观察矩阵，常用于相机/箭头朝向。
- `CenterFrameOfTwoPoints(in Vec3 p1, in Vec3 p2, Vec3 upVector)`：生成以 p1→p2 为「前」轴、中点为原点的帧（如旗帜挂在两点之间）。

### 就地修改（有 side-effect，改的是当前副本）
- `void Rotate(float radian, in Vec3 axis)`：绕 `axis` 旋转本帧（轴需为单位向量）。
- `MatrixFrame Strafe(float a)` / `Advance(float a)` / `Elevate(float a)`：沿本地右/前/上轴平移 `a`，返回自身以便链式调用。
- `void Scale(in Vec3 scalingVector)`：按各轴缩放本帧。
- `Vec3 GetScale()`：返回各基向量长度，即当前缩放。
- `MatrixFrame GetUnitRotFrame(float removedScale)`：去掉缩放、只保留单位旋转与原点。

### 求逆与判定
- `MatrixFrame Inverse()` / `InverseFast()`：返回逆变换；`Inverse()` 直接转调 `InverseFast()`。前提：帧已 `Fill()` 且非奇异（否则结果无定义，可用 `Determinant4X4()` 预判）。
- `float Determinant4X4()`：4x4 行列式，接近 0 表示帧退化。
- `bool NearlyEquals(MatrixFrame rhs, float epsilon = 1E-05f)`：浮点容差比较。
- `bool IsIdentity` / `bool IsZero`：快捷判定。

### 索引器与运算符
- `Vec3 this[int i]`、`float this[int i, int j]`：`i=0/1/2/3` 分别对应 s/f/u/origin 行，`j` 取该向量分量；越界抛 `IndexOutOfRangeException`。
- `operator *`：等价于 `m1.TransformToParent(m2)`，用于把子帧挂到父帧。
- `operator ==` / `!=`：比较 origin 与 rotation。

### 杂项
- `void Fill()`：规整齐次坐标（基向量 `w=0`、`origin.w=1`），求逆前必调。
- `ToString()` / `Equals` / `GetHashCode()`：调试与哈希用；注意 `GetHashCode` 直接沿用 `ValueType` 实现，性能较差，勿在热路径做字典键。

## 最小真实示例

示例 1：从场景实体取出帧、沿本地「前」轴前移 3 米、再写回。

```csharp
GameEntity entity = mission.Scene.FindEntityWithTag("torch_point");
MatrixFrame frame = entity.GetGlobalFrame();
frame.Advance(3f);
entity.SetFrame(ref frame);
```

示例 2：让一个特效发射点始终看向目标英雄，并用 Slerp 平滑过渡。

```csharp
MatrixFrame current = agentVisuals.GetGlobalFrame();
MatrixFrame target = MatrixFrame.CreateLookAt(current.origin, hero.Position, Vec3.Up);
float t = MathF.Clamp(timeSinceStart / 0.5f, 0f, 1f);
MatrixFrame next = MatrixFrame.Slerp(current, target, t);
agentVisuals.SetFrame(ref next);
```

## 导航

- ↑ Parent（本区域目录）：[../](../)
- ↔ Sibling：[Vec3](../Vec3)、[Mat3](../Mat3)、[Quaternion](../Quaternion)、[MathF](../MathF)
- 相关：[GameEntity 通过 GameEntity 取/写帧需回到各引擎类型页](../Game)，[崩溃边界](../../../architecture/crash-boundaries)
