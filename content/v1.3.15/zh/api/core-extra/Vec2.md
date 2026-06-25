---
title: Vec2
description: Vec2 - 二维向量结构体，用于平面坐标、方向与几何运算
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Vec2`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Vec2
**命名空间:** TaleWorlds.Library
**模块:** TaleWorlds.Library
**类型:** struct（值类型，可序列化?
## 概述
`Vec2

` ?Bannerlord 引擎中所有二维数学运算的基础值类型。它由一?

`float

`（X、Y）组成，承担两类截然不同的语义：一是平面坐标（如大地图 XZ 平面上的位置），二是方向向量（如 Agent 朝向、阵?facing）。由于其结构体特性，赋值与传参都是值拷贝，不会产生堆分配?
游戏代码大量使用 

`Vec2

` 来描述大地图上的位置、阵型朝向、UI 偏移、噪声采样坐标等。Mod 开发者在编写 Party 路径、阵型控制、地图绘制、自定义 UI 动画等场景时几乎必然与它打交道。它同时?

`System.Numerics.Vector2

` 之间定义了双向隐?显式转换，可在调?.NET 原生 API 时无缝互操作?
## 心智模型
?

`Vec2

` 当作"两个 float 的元?+ 一套几何工?。当 X、Y 表示位置时，单位通常是米或场景单位；当表示方向时，约定是单位向量（长度为 1），此时可用 

`IsUnit()

` 校验。Bannerlord 中前向方向约定为 

`Forward = (0, 1)

`、右侧为 

`Side = (1, 0)

`，旋转角以弧度表示并通过 

`RotationInRadians

` ?

`FromRotation

` 互转——注意它使用 

`Atan2(-x, y)

`，因?0 弧度对应 +Y 方向（前向），π/2 对应 +X 方向（右侧），与引擎坐标系保持一致?
修改自身的方法（

`Normalize

`、`RotateCCW

`、`ClampMagnitude

`）会就地改变 this；若需保留原值应使用 

`Normalized()

` 或先拷贝。该结构不提供反射式属?setter，X、Y 只读但底?

`x

`、`y

` 字段?public，直接写 

`v.x = ...

` 是允许的（但破坏封装，引擎内代码会这么干）?
## 主要属?\| 属?\| 类型 \| 说明 \|
\|------\|------\|------\|
\| 

`X

` \| 

`float

` \| X 分量（只读访问器，底?

`x

` 字段可写?\|
\| 

`Y

` \| 

`float

` \| Y 分量（只读访问器，底?

`y

` 字段可写?\|
\| 

`Length

` \| 

`float

` \| 向量长度（√(x²+y²)?\|
\| 

`LengthSquared

` \| 

`float

` \| 长度平方，避免开方，常用于距离比?\|
\| 

`RotationInRadians

` \| 

`float

` \| 该方向向量对应的弧度角，0 = +Y（前向），π/2 = +X（右侧） \|
\| 

`IsValid

` \| 

`bool

` \| 是否为有效向量（?NaN/Infinity?\|
\| 

`Side

` \| 

`Vec2

` \| 静态常?(1, 0)，引擎右侧方?\|
\| 

`Forward

` \| 

`Vec2

` \| 静态常?(0, 1)，引擎前向方?\|
\| 

`One

` \| 

`Vec2

` \| 静态常?(1, 1) \|
\| 

`Zero

` \| 

`Vec2

` \| 静态常?(0, 0)，表示原点或零向?\|
\| 

`Invalid

` \| 

`Vec2

` \| 静态常?(NaN, NaN)，用于标记无效向?\|

## 主要方法
### Vec2
`

`

`csharp
public Vec2(float a, float b)
public Vec2(Vec2 v)
public Vec2(Vector2 v)
`

`

`
构造函数。`a,b

` 直接赋给 x,y；拷贝构造和?

`System.Numerics.Vector2

` 隐式转换?
### Normalize / Normalized
`

`

`csharp
public float Normalize()
public Vec2 Normalized()
`

`

`
`Normalize()

` 就地?this 缩放为单位向量并返回原始长度；若长度过小?1E-5）则重置?(0,1) 防止除零。`Normalized()

` 返回归一化后的新向量，this 不变?
### ClampMagnitude
`

`

`csharp
public void ClampMagnitude(float min, float max)
`

`

`
就地调整向量长度，使其夹?[min, max] 区间内。先归一化再?

`MathF.Clamp(原长, min, max)

` 乘回?
### RotateCCW
`

`

`csharp
public void RotateCCW(float angleInRadians)
`

`

`
就地绕原点逆时针旋转。引擎用 

`MathF.SinCos

` 一次性算?sin/cos 减少开销?
### DotProduct
`

`

`csharp
public float DotProduct(Vec2 v)
public static float DotProduct(Vec2 va, Vec2 vb)
`

`

`
点积，常用于投影、夹角余弦、判断同?反向?
### CCW / Determinant
`

`

`csharp
public static float CCW(Vec2 va, Vec2 vb)
public static float Determinant(in Vec2 vec1, in Vec2 vec2)
`

`

`
二维叉积（标量）。正值表?vb ?va 的逆时针侧；用于左右判断、点在多边形内外、winding order?
### GetWindingOrder
`

`

`csharp
public static WindingOrder GetWindingOrder(Vec2 first, Vec2 second, Vec2 third)
`

`

`
返回三点构成的三角形绕序：`Ccw

`（逆时针）、`Cw

`（顺时针）、`None

`（共线）?
### RightVec / LeftVec
`

`

`csharp
public Vec2 RightVec()
public Vec2 LeftVec()
`

`

`
返回相对当前方向的右?左侧垂直单位向量。`RightVec

` = (y, -x)，`LeftVec

` = (-y, x)?
### TransformToLocalUnitF / TransformToParentUnitF
`

`

`csharp
public Vec2 TransformToLocalUnitF(Vec2 a)
public Vec2 TransformToParentUnitF(Vec2 a)
`

`

`
将向?a 从当前向量定义的局部坐标系变换到父坐标系（或反之）。约定当前向量为 +Y 轴朝向。存?

`LeftHanded

` 变体用于左手系场景?
### FromRotation
`

`

`csharp
public static Vec2 FromRotation(float rotation)
`

`

`
给定弧度角返回单位方向向量：

`(-sin(θ), cos(θ))

`，与 

`RotationInRadians

` 互为逆运算?
### Distance / DistanceSquared
`

`

`csharp
public float Distance(Vec2 v)
public float DistanceSquared(Vec2 v)
`

`

`
到另一个点的距离（开方）/ 距离平方（无开方）。性能敏感比较优先用平方版本?
### DistanceToLine / DistanceToLineSegmentSquared / DistanceSquaredToLineSegment
`

`

`csharp
public static float DistanceToLine(Vec2 line1, Vec2 line2, Vec2 point)
public static float DistanceToLineSegmentSquared(Vec2 line1, Vec2 line2, Vec2 point)
public float DistanceToLineSegment(Vec2 v, Vec2 w, out Vec2 closestPointOnLineSegment)
public float DistanceSquaredToLineSegment(Vec2 v, Vec2 w, out Vec2 closestPointOnLineSegment)
`

`

`
点到无限直线 / 点到线段的距离。线段版本会输出最近点（钳制到线段两端点之内）?
### Lerp / Slerp
`

`

`csharp
public static Vec2 Lerp(Vec2 v1, Vec2 v2, float alpha)
public static Vec2 Slerp(Vec2 start, Vec2 end, float percent)
`

`

`
线性插值（?alpha 比例）和球面线性插值（保持长度，沿单位圆弧插值，适合方向插值）?
### AngleBetween
`

`

`csharp
public float AngleBetween(Vec2 vector2)
`

`

`
返回?this ?vector2 的有符号夹角（弧度）。用 

`Atan2(叉积, 点积)

` 计算，正值为逆时针?
### IsUnit / IsNonZero / NearlyEquals
`

`

`csharp
public bool IsUnit()
public bool IsNonZero()
public bool NearlyEquals(Vec2 v, float epsilon = 1E-05f)
`

`

`
`IsUnit

` 判长度是否在 [0.99, 1.01] 容差内；

`IsNonZero

` 判任一分量绝对?&gt; 1E-5；`NearlyEquals

` ?epsilon 容差比较两分量?
### ToVec3
`

`

`csharp
public Vec3 ToVec3(float z = 0f)
`

`

`
扩展?3D 向量，X、Y 拷贝，Z 用参数（默认 0），W 设为 -1（标记为位置向量）?
### Max / Min / Abs
`

`

`csharp
public static Vec2 Max(Vec2 v1, Vec2 v2)
public static Vec2 Min(Vec2 v1, Vec2 v2)
public static Vec2 Abs(Vec2 vec)
`

`

`
分量级最?最?绝对值?
## 使用示例
### 示例: 计算大地图上两点之间的相对方位并生成朝向
**场景**: 当你需要让一?Party 朝向另一?Party 时，常需要把世界位移向量转换?Agent/Mission 用的朝向角?

`

`

`csharp
// 假设 partyA ?(100, 200)，partyB ?(150, 180)
Vec2 from = new Vec2(100f, 200f);
Vec2 to   = new Vec2(150f, 180f);

Vec2 delta = to - from;            // operator- 已重?float distance = delta.Length;      // 实际距离（米?Vec2 dir = delta.Normalized();      // 单位方向向量

float headingRad = dir.RotationInRadians;   // 引擎朝向角（弧度?// 如果需要让 Agent 朝这个方向：
// agent.SetMovementDirection(dir, ...);
// 或在阵型控制中：formation.FaceDirection = dir;

// 判断 partyB 是在 partyA 的左侧还是右侧（相对前向 Forward=(0,1)?float cross = Vec2.CCW(Vec2.Forward, dir);
if (cross &gt; 0)      { /* 在前向的逆时针侧 = 左侧 */ }
else if (cross &lt; 0) { /* 右侧 */ }
`

`

`
**要点**: 减法运算符返回新 

`Vec2

` 而非修改原值；

`RotationInRadians

` ?

`Atan2(-x, y)

` 而非 

`Atan2(y, x)

`，因为引擎前向是 +Y；用 

`CCW

` 做左右判断比 

`AngleBetween

` 更快、更稳?
### 示例: 在阵型控制中按距离筛选并插值移?**场景**: 自定义阵型逻辑需要在每帧把单位从当前位置平滑移向目标点?

`

`

`csharp
Vec2 current = agentPosition.XZ();          // 假设已有扩展方法?XZ 平面
Vec2 target  = formationTargetPos.XZ();

float distSq = current.DistanceSquared(target);
if (distSq &lt; 0.01f) return;                  // 已到位，避免抖动

float step = MathF.Min(moveSpeed * dt, MathF.Sqrt(distSq));
Vec2 next  = Vec2.Lerp(current, target, step / MathF.Sqrt(distSq));
agent.Position = next.ToVec3(agent.Position.z);  // 保留高度
`

`

`
**要点**: ?

`DistanceSquared

` 而非 

`Distance

` 做阈值判断可省一次开方；

`Lerp

` ?alpha 需自行钳制?[0,1]；`ToVec3

` ?z 参数用于保留原高度?
## 参见
- [完整类目录](../catalog)
- [本领域目录](../catalog-core)
- [API 目录](../)
- [SDK 总览](../../architecture/sdk-overview)
