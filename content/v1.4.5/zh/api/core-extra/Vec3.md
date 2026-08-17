---
title: "Vec3"
description: "TaleWorlds.Library 的三维向量（x 东、y 北、z 上，并带一个 w 齐次分量）：用于表示完整 3D 位置、方向与法线，是任务内 Agent 坐标与实体的基础类型。"
---
# Vec3

**Namespace:** `TaleWorlds.Library`  
**Module:** `TaleWorlds.Library`  
**Type:** `public struct Vec3`  
**Base:** `System.ValueType`  
**Source:** `TaleWorlds.Library/Vec3.cs`

## 概述

`Vec3` 是游戏世界里的完整三维向量：`x` 向东、`y` 向北、`z` 为高度（上），外加一个 `w` 齐次分量（默认 `-1`）。它既当"位置"用，也当"方向/法线"用——区别在于方向向量通常 `w = 0`、位置向量通常 `w = 1`（矩阵变换时决定要不要叠加 `origin` 平移）。任务里 `Agent.Position`、实体坐标、相机向量、物理方向都是 `Vec3`。

和 `Vec2` 一样，`Vec3` 是 `struct`：赋值与传参整体复制，没有引用别名。它的 `w` 字段容易被忽略，却是和 [MatrixFrame](../MatrixFrame/) 做齐次变换时决定"点位还是方向"的关键。

## 心智模型

把 `Vec3` 想成空间里一个**带箭头的针**：箭头指向哪里是方向，针尖落在哪里是位置。

- **坐标空间是完整三维世界。** `x` 东、`y` 北、`z` 上，左手坐标系（与渲染惯例一致）。位置向量模长即到原点的距离，方向向量模长为 1 时才是"纯方向"。
- **`w` 是齐次坐标开关。** 默认构造 `w = -1`；当作"方向"参与 `MatrixFrame` 变换时应置 `0`，当作"位置"时应置 `1`（见 [MatrixFrame](../MatrixFrame/) 的 `TransformToParentWithW`）。大多数业务代码用 `Vec3` 的位置/方向语义即可，不必手动管 `w`，但把 `Vec3` 乘进 `MatrixFrame` 时要注意它的 `w` 参与齐次计算。
- **值类型，按值复制。** `Vec3 a = b;` 得到两个独立副本；方法内改形参不影响调用方。需要"归一化但不想改原值"时用 `NormalizedCopy()`，不要随手 `Normalize()` 把源改掉。
- **降维到平面用 `AsVec2`。** `Vec3.AsVec2` 取 `x,y` 并**丢弃 z**；反过来 `Vec2.ToVec3(z)` 升维补 z。地图逻辑（[MobileParty](../../campaign/MobileParty/)）通常只用 `Vec2`，任务逻辑用 `Vec3`，两者转换时高度信息会丢失（见风险）。
- **与 `Vec2` 的分工**：`Vec2` 是地面平面（无高度、带朝向角）；`Vec3` 是完整三维（有高度，用 `RotationZ`/`RotationX` 表达俯仰/偏航）。需要"位置 + 旋转 + 缩放"打包成局部坐标系时用 [MatrixFrame](../MatrixFrame/)。

## 何时用 / 何时不要用

- **用 `Vec3`**：任何需要高度或三维方向的场景——代理/实体的世界坐标、抛射与物理方向、相机前向、表面法线、两点间的三维距离、绕任意轴旋转。
- **不要用 `Vec3`**：纯平面距离、地面朝向角（用 [Vec2](../Vec2/) 更贴合地图约定，且 `RotationInRadians` 语义清晰）；需要"局部原点 + 三轴旋转"放置一个物体时用 [MatrixFrame](../MatrixFrame/) 而不是手动维护一个 `Vec3` 位置加几个欧拉角；大量颜色/ARGB 数据请用专门的颜色类型，`ToARGB` 仅用于把 `w,x,y,z` 当 4 通道打包的少数场合。

## 依赖关系

- 平面版本：[Vec2](../Vec2/) —— `AsVec2` 降维、`Vec2.ToVec3(z)` 升维。
- 坐标系帧：[MatrixFrame](../MatrixFrame/) —— `Vec3 * MatrixFrame` 运算符与 `TransformToParent`/`TransformToLocal` 把向量放进或取出局部坐标系，齐次 `w` 在此生效。
- 数学工具：[MathF](../../core-extra/MathF/) —— `Normalize`、`RotateAbout*`、`AngleBetweenTwoVectors` 内部依赖它。
- 运行时来源：[Agent](../../mission/Agent/) 的 `Position`（任务内三维坐标）；[MobileParty](../../campaign/MobileParty/) 的 `Position` 是 `Vec2`，需要升维时用 `ToVec3`。

## 成员说明

### 构造与常量
| 成员 | 作用 |
| --- | --- |
| `Vec3(x, y, z, w = -1)` | 主构造，`w` 默认 `-1`（非标准齐次值，使用前按需设 `0`/`1`）。 |
| `Vec3(Vec3 c, w = -1)` / `Vec3(Vec2 xy, z = 0, w = -1)` / `Vec3(Vector3 v)` | 副本、由 `Vec2` 升维、由 `System.Numerics.Vector3` 构造。 |
| `Vec3.Side=(1,0,0)`、`Forward=(0,1,0)`、`Up=(0,0,1)`、`Zero`、`Invalid=(NaN,NaN,NaN)` | 静态轴常量与边界值。 |

### 分量、索引与长度
| 成员 | 作用 |
| --- | --- |
| `x, y, z, w`（字段）/ `X, Y, Z`（只读属性） | 直接读写；属性为字段只读镜像。 |
| `this[int i]` | 索引器：`0→x, 1→y, 2→z, 3→w`，越界抛异常。 |
| `Length` / `LengthSquared` | 模长及其平方。 |
| `IsValid` / `IsValidXYZW` / `IsUnit` / `IsNonZero` | 有效性（仅 xyz / 含 w）、是否单位向量、是否非零。 |

### 升/降维与打包
| 成员 | 作用 |
| --- | --- |
| `AsVec2`（get/set） | 取 `x,y` 丢弃 z；也可只写回 `x,y`。 |
| `ToARGB` | 把 `w,x,y,z` 当 4 个 0–1 通道打包成 `uint` 颜色（仅特殊场合）。 |
| `RotationZ` / `RotationX` | 由分量推出的偏航/俯仰角（地面用 `RotationZ`，对应 `Vec2.RotationInRadians`）。 |

### 归一化与缩放
| 成员 | 作用 |
| --- | --- |
| `Normalize()` | **就地**归一化并返回原长度；零向量回退为 `(0,1,0)`。 |
| `NormalizedCopy()` | 返回归一化**新副本**，不改自身（首选只读用法）。 |
| `ClampMagnitude(min, max)` / `ClampedCopy(min, max, out bool)` | 限制模长；`ClampedCopy` 还有分量夹紧并报告是否被夹。 |
| `NormalizeWithoutChangingZ()` | 只把 `x,y` 归一化到与现有 `z` 匹配的单位向量，保持高度方向不变。 |

### 乘积与几何
| 成员 | 作用 |
| --- | --- |
| `DotProduct(a, b)`（静态） | 点积。 |
| `CrossProduct(a, b)`（静态） / `CrossProductWithUp()` / `CrossProductWithUpAsLeftParameter()` | 叉乘；后两者是相对 `Up` 轴的常用水平法线。 |
| `ElementWiseProduct` / `ElementWiseDivision` / `Abs` | 分量运算。 |
| `Reflect(normal)` / `ProjectOnUnitVector(ov)` | 镜面反射、投影到单位向量。 |

### 旋转
| 成员 | 作用 |
| --- | --- |
| `RotateAboutX/Y/Z(a)` | 绕各坐标轴就地旋转。 |
| `RotateAboutAnArbitraryVector(vec, a)` | 绕任意单位向量旋转，返回新向量。 |
| `RotateVectorToXYPlane()` | 投影回地面平面并保留原长度。 |

### 距离与角度
| 成员 | 作用 |
| --- | --- |
| `Distance(v)` / `DistanceSquared(v)` | 三维欧氏距离及其平方。 |
| `AngleBetweenTwoVectors(a, b)` | 两向量夹角（夹在 `[-1,1]` 后取 `Acos`）。 |
| `Lerp` / `Slerp` / `Vec3Max` / `Vec3Min` | 线性/球面插值、分量最值。 |

### 解析与比较
| 成员 | 作用 |
| --- | --- |
| `NearlyEquals(in v, eps)` | 容差相等，浮点比较用。 |
| `Parse(string)` / `ToString()` / `ToString(format)` | 文本互转，格式形如 `(x, y, z)`。 |
| `Vec3 * MatrixFrame` | 运算符：把向量经矩阵（含齐次 `w`）变换到父空间。 |

## 真实示例：三维方向与平面距离

```csharp
// 取任务内代理的三维世界坐标
Vec3 agentPos = agent.Position;            // Vec3：x 东、y 北、z 高
Vec3 otherPos = otherAgent.Position;

// 从代理指向目标的完整 3D 方向
Vec3 toTarget = otherPos - agentPos;       // 运算符相减，得到 Vec3
Vec3 dir = toTarget.NormalizedCopy();      // 单位方向，不修改 toTarget 自身
float dist = agentPos.Distance(otherPos);  // 三维欧氏距离

// 高度差直接读 z
float heightGap = agentPos.z - otherPos.z;

// 落到地面做平面比较：z 会被丢弃
Vec2 flatAgent = agentPos.AsVec2;
Vec2 flatOther = otherPos.AsVec2;
float flatDist = flatAgent.Distance(flatOther);

// 水平右向量（以 +Z 为上的地面法线）
Vec3 rightVec = toTarget.CrossProductWithUp();
```

上例全部使用 `Vec3` 的真实成员：`agent.Position`（[Agent](../../mission/Agent/) 属性）、运算符 `-`、`NormalizedCopy`、`Distance`、`AsVec2`、`CrossProductWithUp`。注意 `NormalizedCopy()` 返回新值、`Normalize()` 会改自身；`AsVec2` 转换不可逆地丢掉 `z`。

## 风险与陷阱

- **按值复制的"假共享"。** `Vec3 a = b; a.z = 5;` 不影响 `b`；方法内改形参不回写。需要回写时返回新值重新赋值或用 `ref`/`in`。
- **`Normalize()` 零向量不报错。** 模长小于 `1e-5` 时回退为 `(0,1,0)`，是一个合法但方向任意的向量。调用前用 `IsNonZero()` 判断，或优先用 `NormalizedCopy()` 并检查结果。
- **降维丢高度（Vec3 ↔ Vec2）。** `AsVec2` 丢弃 `z`；`Vec2.ToVec3(z)` 升维时 `z` 需手动补。任务内代理有真实高度，转平面算完距离后**不要把 `Vec2` 再转回 `Vec3` 当世界坐标**，否则高度归零。
- **`w` 齐次分量语义。** 默认构造 `w=-1` 不是合法齐次值。把 `Vec3` 用 `*` 乘进 `MatrixFrame` 时，`w` 决定该向量是"方向(`0`)"还是"位置(`1`)"——方向不会被 `origin` 平移，位置会。混用时会出现"方向被平移"或"位置不平移"的诡异结果。用 `Fill()` 类语义把 `w` 设成 `1`（位置）或 `0`（方向）。
- **`Invalid` 是 NaN。** `Vec3.Invalid` 分量全为 `NaN`，参与任何运算都会污染；用 `IsValid` / `IsValidXYZW` 校验来源。
- **浮点别用 `==`。** 直接用 `==` 比较几乎总失败，用 `NearlyEquals(in v, eps)` 或比较 `DistanceSquared` 与阈值。

## 导航

- ↑ 父级：[core-extra API](../)
- ↔ 同级：[Vec2](../Vec2/) · [MatrixFrame](../MatrixFrame/)
- 相关：[Agent](../../mission/Agent/)（三维坐标来源）· [MobileParty](../../campaign/MobileParty/)（地图坐标为 `Vec2`，需 `ToVec3` 升维）· [MathF](../../core-extra/MathF/)（三角函数与角度）
