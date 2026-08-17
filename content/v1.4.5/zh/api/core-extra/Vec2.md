---
title: "Vec2"
description: "TaleWorlds.Library 的二维地面坐标向量（x 为东、y 为北）：用于表示平面上的位置、朝向角与代理在地图上的移动，不携带高度信息。"
---
# Vec2

**Namespace:** `TaleWorlds.Library`  
**Module:** `TaleWorlds.Library`  
**Type:** `public struct Vec2`  
**Base:** `System.ValueType`  
**Source:** `TaleWorlds.Library/Vec2.cs`

## 概述

`Vec2` 是游戏世界**地面平面**上的二维坐标／方向：它的 `x` 指向东、`y` 指向北，单独用来回答"在平面上哪里"和"面朝哪个方向"这两个问题。它不保存高度，因此凡是涉及跳、爬、飞行、地形起伏的逻辑都不该只靠它。常见归属是：战役地图上的 `MobileParty.Position`、任务里代理在地面上的投影、以及用 `RotationInRadians` 表达的朝向角。

因为 `Vec2` 是 `struct`，每一次赋值、传参、返回都是**按值整体复制**，不存在引用共享；你改一个局部副本不会影响原始变量，这点和 `class` 完全不同（见风险一节）。

## 心智模型

把 `Vec2` 想象成一张俯视图上的"图钉 + 箭头"。

- **坐标空间是地面（Ground Plane）。** `x` 轴向东、`y` 轴向北，原点由具体系统决定（地图坐标系、或某次 mission 的局部参照系）。没有第三个维度——高度由 `Vec3` 负责。
- **它是值类型，按值复制。** `Vec2 a = b;` 之后，`a` 与 `b` 是两个独立副本；改 `a.x` 不会动 `b`。把它作为参数传入方法后，方法内部对形参的修改不会回写到调用方，除非参数用 `ref`/`in`。
- **朝向用单个弧度角表示。** `Vec2.Forward` 固定为 `(0, 1)`，即 0 弧度的基准方向；`Vec2.FromRotation(angle)` 给出该角度的单位方向向量 `(-sin, cos)`，`RotationInRadians` 则是它的逆运算 `Atan2(-x, y)`。旋转角以"从北向顺时针/逆时针偏转"的方式递增，由 `MathF` 的三角函数约定决定。
- **典型用途**：地图上两支队伍的距离、代理在地面上的朝向角、导航寻路的目标点、地形高度采样时先忽略 z 的平面计算。需要完整三维位置时换用 [Vec3](../Vec3/)，需要"位置 + 朝向 + 缩放"的局部坐标系时换用 [MatrixFrame](../MatrixFrame/)。

## 何时用 / 何时不要用

- **用 `Vec2`**：只在二维平面做运算——地图距离、地面朝向、俯视投影、平面法线、巡逻点序列；需要 `RotationInRadians` / `FromRotation` 这类角度约定时。
- **不要用 `Vec2`**：涉及高度、垂直跳跃、抛射、相机俯仰、地形高低差时，改用 [Vec3](../Vec3/)（或保留 z 的 [MatrixFrame](../MatrixFrame/)）。**不要**为了"图省事"把 `Vec3` 直接丢 z 转成 `Vec2` 后再转回——高度会永久丢失（见风险）。需要朝向角 + 位置组合放置实体时，用 [MatrixFrame](../MatrixFrame/) 比"存一个 Vec2 + 一个 float 角度"更不容易出错。

## 依赖关系

- 三维扩展：[Vec3](../Vec3/) —— `ToVec3(z)` 升维、`AsVec2` 降维（在 [Vec3](../Vec3/) 一侧）。
- 坐标系帧：[MatrixFrame](../MatrixFrame/) —— `TransformToParent(in Vec2)` / `TransformToLocal` 把平面点放进或取出一个局部坐标系。
- 数学工具：[MathF](../../core-extra/MathF/) —— `Vec2.RotationInRadians`、`FromRotation`、`RotateCCW` 内部都依赖它。
- 运行时来源：[Agent](../../mission/Agent/) 的 `Position.AsVec2`（任务内地面投影）；[MobileParty](../../campaign/MobileParty/) 的 `Position`（战役地图坐标，本身就是 `Vec2`）。

## 成员说明

### 构造与常量
| 成员 | 作用 |
| --- | --- |
| `Vec2(float a, float b)` | 用 `x=a, y=b` 构造。 |
| `Vec2(Vec2 v)` / `Vec2(Vector2 v)` | 从副本或 `System.Numerics.Vector2` 构造。 |
| `Vec2.Side` / `Vec2.Forward` / `Vec2.One` / `Vec2.Zero` / `Vec2.Invalid` | 静态只读常量：`Side=(1,0)`、`Forward=(0,1)`、`Zero=(0,0)`、`Invalid=(NaN,NaN)`。 |
| `IsValid` | 两个分量都不是 `NaN`/无穷大时为真，可用来排查脏数据。 |

### 分量与长度
| 成员 | 作用 |
| --- | --- |
| `x`, `y`（字段）/ `X`, `Y`（只读属性） | 直接读写分量；属性是字段的只读镜像。 |
| `Length` / `LengthSquared` | 模长及其平方；比较距离时优先用平方版本避免开方。 |
| `IsUnit()` / `IsNonZero()` / `NearlyEquals(v, eps)` | 约等于单位向量 / 非零 / 容差相等判断，浮点比较时比 `==` 安全。 |

### 归一化与缩放
| 成员 | 作用 |
| --- | --- |
| `Normalize()` | **就地**把自身缩放到单位长度，返回原长度；零向量时回退为 `(0,1)` 而不是报错。 |
| `Normalized()` | 返回归一化后的**新副本**，不改动自身（想要只读版本时用它）。 |
| `ClampMagnitude(min, max)` | 归一化后再按区间缩放模长。 |

### 乘积与投影
| 成员 | 作用 |
| --- | --- |
| `DotProduct(v)` / `DotProduct(a, b)` | 点积，判断夹角或投影长度。 |
| `ElementWiseProduct(a, b)` | 分量相乘。 |
| `CCW(a, b)` / `GetWindingOrder(...)` | 二维叉积（有符号面积）与三角形绕序，几何判定用。 |
| `Determinant(a, b)` | 两向量行列式，等价于 `CCW`。 |

### 朝向与旋转
| 成员 | 作用 |
| --- | --- |
| `RotationInRadians` | 由分量反推朝向角 `Atan2(-x, y)`，0 对应 `Forward`。 |
| `FromRotation(rot)` | 静态：给定角度返回单位方向 `(-sin, cos)`。 |
| `RotateCCW(angle)` | 就地把向量绕原点逆时针旋转。 |
| `RightVec()` / `LeftVec()` | 垂直方向（右 / 左），用于侧移与法线。 |

### 局部 / 父级变换（单位向量帧）
| 成员 | 作用 |
| --- | --- |
| `TransformToLocalUnitF(a)` / `TransformToParentUnitF(a)` | 把自己当作单位旋转帧，把向量在局部↔父级间转换（带 Right/Left 手性变体）。 |
| `AngleBetween(v)` | 两向量夹角（带符号）。 |

### 距离与几何
| 成员 | 作用 |
| --- | --- |
| `Distance(v)` / `DistanceSquared(v)` | 到另一点的欧氏距离及其平方。 |
| `DistanceToLine(line1, line2, point)` | 点到直线的距离。 |
| `DistanceSquaredToLineSegment(...)` / `DistanceToLineSegment(...)` | 点到线段的距离，并附带最近点 `out` 参数。 |

### 升降维与运算
| 成员 | 作用 |
| --- | --- |
| `ToVec3(float z = 0f)` | 升到三维，补一个 `z`（默认 0）。 |
| `+ - * /`、`Abs`、`Max`、`Min`、`Lerp`、`Slerp` | 标准向量算术与插值；`*` 支持向量×标量。 |

## 真实示例：地图距离与朝向角

```csharp
// 取代理在地面上的位置（Vec3 -> Vec2，丢弃高度 z）
Vec2 agentPos = agent.Position.AsVec2;
Vec2 target = new Vec2(10f, 0f);

// 平面距离：优先用平方版本做阈值比较，避免无谓开方
float distSq = agentPos.DistanceSquared(target);
if (distSq < 4f * 4f)
{
    // 计算指向目标的单位方向（不修改 agentPos 本身）
    Vec2 toTarget = (target - agentPos).Normalized();

    // 由方向反推朝向角：0 弧度对应 Vec2.Forward(+Y)
    float rotation = toTarget.RotationInRadians;

    // 再正向用角度得到朝向向量，沿该方向前进 2 米
    Vec2 facing = Vec2.FromRotation(rotation);
    Vec2 next = agentPos + facing * 2f;

    // 右侧法线，用于侧移或摆出阵型
    Vec2 right = toTarget.RightVec();
    Vec2 flank = agentPos + right * 1.5f;
}
```

上例只用到 `Vec2` 的真实成员：`agent.Position`（[Agent](../../mission/Agent/) 的 `Vec3`）、`AsVec2`、`DistanceSquared`、`Normalized`、`RotationInRadians`、`FromRotation`、运算符与 `RightVec`。注意 `Normalized()` 返回新副本、不改原值；若要就地归一化再用 `Normalize()`。

## 风险与陷阱

- **按值复制的"假共享"。** `Vec2 a = someVec; a.x = 5;` 不会影响 `someVec`。把 `Vec2` 当方法参数传入后，方法内修改形参不会回写。需要回写时用 `ref`/`in` 或返回新值重新赋值。
- **零向量归一化不报错。** `Normalize()` 在模长小于 `1e-5` 时不会抛出，而是把自身设为 `(0, 1)`——一个**合法但方向任意**的向量。如果你拿它当方向用，会得到不可预期的结果。调用前先用 `IsNonZero()` 判断。
- **降维丢高度。** `Vec3.AsVec2` 与 `ToVec3()` 的逆运算并不保 z：从 `Vec3` 转 `Vec2` 再转回，`z` 会变成默认值 0。地图坐标（`MobileParty.Position`）本就没有高度，但任务内代理的 `Position` 有 z，转平面算完距离后**不要再转回 Vec3 当世界坐标用**。
- **朝向角约定易混。** `RotationInRadians = Atan2(-x, y)`，基准是 `+Y` 向北；`FromRotation` 给出 `(-sin, cos)`。不要把它和"从 +X 向东起算"的 `MathF.Atan2(y, x)` 混用，否则朝向会转 90°。
- **`Invalid` 是 `NaN` 载体。** `Vec2.Invalid` 分量为 `NaN`，参与运算会污染结果；用 `IsValid` 校验来源后再计算。
- **浮点别用 `==`。** 直接比较 `a == b` 在浮点上几乎总是失败，改用 `NearlyEquals(v, epsilon)` 或比较 `DistanceSquared` 与阈值。

## 导航

- ↑ 父级：[core-extra API](../)
- ↔ 同级：[Vec3](../Vec3/) · [MatrixFrame](../MatrixFrame/)
- 相关：[Agent](../../mission/Agent/)（地面投影来源）· [MobileParty](../../campaign/MobileParty/)（地图坐标为 `Vec2`）· [MathF](../../core-extra/MathF/)（三角函数与角度）
