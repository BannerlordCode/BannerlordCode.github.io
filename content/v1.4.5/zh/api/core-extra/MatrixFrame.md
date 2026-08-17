---
title: "MatrixFrame"
description: "TaleWorlds.Library 的局部坐标系帧（Mat3 旋转 + Vec3 原点）：把"位置 + 三轴朝向 + 缩放"打包成一个值类型，用于 Agent/实体的放置、朝向与父子空间变换。"
---
# MatrixFrame

**Namespace:** `TaleWorlds.Library`  
**Module:** `TaleWorlds.Library`  
**Type:** `public struct MatrixFrame`  
**Base:** `System.ValueType`  
**Source:** `TaleWorlds.Library/MatrixFrame.cs`

## 概述

`MatrixFrame` 是一个"局部坐标系帧"：它由两个字段组成——`rotation`（`Mat3`，三轴正交基）和 `origin`（`Vec3`，帧在世界中的位置）。它把"物体放在哪里、面朝哪、缩放多少"封装成一个值类型，是任务里放置 [Agent](../../mission/Agent/)、实体、骨骼挂点、相机与触发器最常用的坐标系表达。

和 `Vec2`/`Vec3` 一样，`MatrixFrame` 是 `struct`，赋值与传参整体复制。`origin` 相当于"帧的原点在世界坐标里的位置"，`rotation` 的三根轴 `s`/`f`/`u` 分别对应局部坐标系的 side(+X)/forward(+Y)/up(+Z) 方向——这是 Bannerlord 的左手坐标约定。

## 心智模型

把 `MatrixFrame` 想成一个**带位置的方向标牌**：标牌立在世界某点（`origin`），上面印着三根互相垂直的箭头（`rotation` 的 `s`/`f`/`u`）。

- **它本身是一个坐标变换。** `TransformToParent(localPoint)` 把"相对这个标牌的局部坐标"换算成"世界坐标"；`TransformToLocal(worldPoint)` 做反方向。换句话说，帧既代表一个物体的位姿，也代表一套从局部到世界的映射。
- **`rotation` 三根轴有明确语义。** `rotation.s` = side(局部 +X)，`rotation.f` = forward(局部 +Y)，`rotation.u` = up(局部 +Z)。它们必须等于 `Vec3.Side`/`Forward`/`Up` 方向且彼此正交。左手约定下，forward 指向北、up 指向天空。
- **`origin` 是位置，`w = 1`。** 帧的原点是位置向量，齐次分量应为 `1`；三轴向量的 `w` 应为 `0`（方向）。`Fill()` 会把三个轴向量的 `w` 清零、把 `origin.w` 设 `1`，构造后若手动改过分量要记得调用它。
- **按值复制，无引用共享。** `MatrixFrame a = b;` 之后两者独立；`Advance/Strafe/Elevate/Rotate/Scale` 这些**就地**方法改的是 `this`，链式调用返回 `this` 本身，方便连续变换。
- **与 `Vec3` 的分工**：`Vec3` 只描述"一个点或方向"；`MatrixFrame` 描述"一整套局部坐标系"。需要把一个子物体挂到父物体上、或把局部偏移换算到世界时，用 `MatrixFrame` 而不是手动维护 `Vec3` 位置加几个角度。

## 何时用 / 何时不要用

- **用 `MatrixFrame`**：放置实体/骨骼挂点/相机（`GameEntity.SetFrame` 之类 API 接收的就是它）、计算"我前方 2 米、上方 1 米"的世界点、把子物体变换到父物体空间、做 LookAt 朝向、对位姿做 `Lerp`/`Slerp` 插值。
- **不要用 `MatrixFrame`**：只关心一个世界坐标点用 `Vec3`；只关心地面平面与朝向角用 [Vec2](../Vec2/)；只做纯方向计算用 [Vec3](../Vec3/)。不要自己手算 `s/f/u` 三个 `Vec3` 拼旋转——优先用 `Mat3.Identity` + `RotateAboutUp/Forward/Side` 或 `CreateLookAt` 保证正交与 `w` 正确。

## 依赖关系

- 向量：[Vec2](../Vec2/) —— `TransformToParent(in Vec2)` / `TransformToLocal` 把平面点放进/取出帧。
- 向量：[Vec3](../Vec3/) —— 帧的 `origin`、三轴、以及 `Vec3 * MatrixFrame` 齐次变换都基于它；`Vec3.Up` 等轴常量常用于构造。
- 旋转矩阵：`Mat3`（同命名空间）—— `rotation` 字段的类型，`Mat3.Identity`、`RotateAboutUp` 等用于构造旋转。
- 数学工具：[MathF](../../core-extra/MathF/) —— 各变换内部依赖三角函数与 `Clamp`。
- 运行时来源：[Agent](../../mission/Agent/) 的 `Position`/`Frame` 等用 `MatrixFrame` 表达位姿；[MobileParty](../../campaign/MobileParty/) 的地图坐标本无帧概念，需先用 `Vec2.ToVec3` 升维再构造。

## 成员说明

### 构造与常量
| 成员 | 作用 |
| --- | --- |
| `MatrixFrame(in Mat3 rot, in Vec3 o)` | 用旋转矩阵 + 原点构造（最常用）。 |
| `MatrixFrame(12 个 float)` / `MatrixFrame(16 个 float)` | 按行优先直接填旋转（9 或 12 个）与原点（3 或 4 个）分量。 |
| `MatrixFrame.Identity` / `MatrixFrame.Zero` | 单位帧（无旋转、原点原点）与零帧。 |
| `IsIdentity` / `IsZero` | 快速判等。 |

### 分量访问
| 成员 | 作用 |
| --- | --- |
| `rotation`（Mat3）/ `origin`（Vec3） | 直接读写的字段。 |
| `this[int i]` | `0→s, 1→f, 2→u, 3→origin`（整条轴/原点）。 |
| `this[int i, int j]` | 第 `i` 行第 `j` 列标量访问。 |

### 局部 ↔ 父级变换
| 成员 | 作用 |
| --- | --- |
| `TransformToParent(in Vec3)` / `TransformToParent(in Vec2)` | 局部坐标 → 世界坐标（含原点平移）。 |
| `TransformToParentDouble(in Vec3)` | 双精度版本，减少大坐标累计误差。 |
| `TransformToLocal(in Vec3)` | 世界坐标 → 局部坐标。 |
| `TransformToLocalNonUnit` / `TransformToLocalNonOrthogonal(...)` | 非单位 / 非正交帧下的局部变换。 |
| `TransformToParent(in MatrixFrame)` / `TransformToLocal(in MatrixFrame)` | 把另一个帧整体变换到本帧的父/局部空间。 |
| `TransformToParentWithW(Vec3)` | 带齐次 `w` 的完整 4×4 变换（区分点位/方向）。 |

### 帧的运算与组合
| 成员 | 作用 |
| --- | --- |
| `operator *`（`m1 * m2`） | 等价于 `m1.TransformToParent(m2)`，帧的组合（父子叠加）。 |
| `Inverse()` / `InverseFast()` | 求逆帧，做反向变换；非正交帧慎用。 |
| `Determinant4X4()` | 4×4 行列式。 |
| `Lerp` / `Slerp` / `LerpNonOrthogonal` | 位姿插值（旋转走四元数球面插值）。 |

### 就地编辑（返回 this，可链式）
| 成员 | 作用 |
| --- | --- |
| `Rotate(radian, in Vec3 axis)` | 绕任意轴旋转整个帧。 |
| `Advance(a)` / `Strafe(a)` / `Elevate(a)` | 沿 forward/side/up 平移 `origin`。 |
| `Scale(in Vec3)` / `GetScale()` | 缩放帧（非均匀）并读回当前缩放。 |
| `Fill()` / `Filled()` | 把轴向量 `w` 清 0、原点 `w` 设 1；`Filled()` 返回填充后的副本。 |

### 便捷构造
| 成员 | 作用 |
| --- | --- |
| `CreateLookAt(in Vec3 position, in Vec3 target, in Vec3 upVector)` | 构造"站在 position 看向 target"的帧。 |
| `CenterFrameOfTwoPoints(in Vec3 p1, in Vec3 p2, Vec3 upVector)` | 构造以两点中点为原点、轴线指向 p2 的帧。 |
| `GetUnitRotFrame(removedScale)` | 去掉缩放、只保留旋转与原点。 |
| `NearlyEquals(rhs, eps)` | 容差比较两个帧。 |

## 真实示例：用帧放置实体与朝向

```csharp
// 用绕 Up 轴偏航 90° 的旋转矩阵 + 代理位置构造局部帧
Mat3 rot = Mat3.Identity;
rot.RotateAboutUp(MathF.PI / 2f);     // 绕世界上方偏航
Vec3 origin = agent.Position;         // 帧放在代理所在的世界位置
MatrixFrame frame = new MatrixFrame(rot, origin);

// 局部点 -> 世界：帧前方 2 米、上方 1 米处的世界坐标
Vec3 worldPoint = frame.TransformToParent(new Vec3(0f, 2f, 1f));

// 世界 -> 局部
Vec3 localPoint = frame.TransformToLocal(worldPoint);

// 沿帧自身坐标轴连续平移原点（就地修改，返回 this）
frame.Advance(2f)    // 沿 forward(+Y)
     .Strafe(1f)     // 沿 side(+X)
     .Elevate(0.5f); // 沿 up(+Z)

// 求逆帧，把世界向量转回该帧的局部空间
MatrixFrame inverse = frame.Inverse();

// 也可以直接面向目标构造（省去手动搭旋转）
MatrixFrame look = MatrixFrame.CreateLookAt(agent.Position, otherAgent.Position, Vec3.Up);
```

上例全部为真实成员：`Mat3.Identity`、`Mat3.RotateAboutUp`、`MathF.PI`、`MatrixFrame(rot, origin)` 构造、`TransformToParent`、`TransformToLocal`、`Advance`/`Strafe`/`Elevate`、`Inverse`、`CreateLookAt`、`Vec3.Up`，以及 [Agent](../../mission/Agent/) 的 `Position`。`Advance/Strafe/Elevate` 是就地修改 `frame` 本身（链式返回 `this`）；若要保留原帧，先 `MatrixFrame copy = frame;` 再改副本。

## 风险与陷阱

- **按值复制的"假共享"。** `MatrixFrame a = b;` 后两者独立；方法内改形参不影响调用方。需要回写时返回新值重新赋值或用 `ref`/`in`。
- **`Advance/Strafe/Elevate/Rotate/Scale` 是就地的。** 它们修改 `this`（并返回 `this`），连续链式调用会逐次改变同一个帧。若原帧还要复用，先复制一份再改。
- **手性 / 轴语义别搞反。** 约定是 side=+X、forward=+Y、up=+Z，且为左手系。`CreateLookAt` 的 `upVector` 应与世界 up（`Vec3.Up`）一致；若目标方向几乎与 up 平行，结果会退化（参考 `CenterFrameOfTwoPoints` 中对平行情况的 `upVector` 替换）。
- **`origin.w` 与轴向量 `w`。** 位置向量的齐次分量应为 `1`、方向轴应为 `0`。自己拼分量后忘了 `Fill()`，会让 `TransformToParentWithW` 与 `InverseFast` 的齐次计算错乱。构造后若手动改过 `rotation`/`origin` 分量，调用 `Fill()` 复位 `w`。
- **`Inverse` 在非正交帧上失真。** `Inverse()` 走 `InverseFast()`，假设帧近似正交；含非均匀缩放或非正交基时改用 `TransformToLocalNonOrthogonal` 系列，否则反向变换会有误差。
- **归一化零向量陷阱会传导进来。** 当用 `CreateLookAt` 且 `position == target`、或轴向量为零时，内部 `Normalize()` 会回退到任意单位向量，产生无意义朝向；构造前校验两点不重合。
- **`Vec3` ↔ 平面丢高度。** 用 `TransformToParent(in Vec2)` 时只用到 `s/f` 与 `origin` 的 `x,y`，z 高度被忽略；把地图 `Vec2` 升维成帧原点前想清楚高度来源（见 [Vec2](../Vec2/)、[Vec3](../Vec3/)）。

## 导航

- ↑ 父级：[core-extra API](../)
- ↔ 同级：[Vec2](../Vec2/) · [Vec3](../Vec3/)
- 相关：[Agent](../../mission/Agent/)（位姿来源，多数为 `MatrixFrame`）· [MobileParty](../../campaign/MobileParty/)（地图坐标为 `Vec2`，需升维后构造帧）· [MathF](../../core-extra/MathF/)（旋转与插值依赖）
