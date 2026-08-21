---
title: "WorldPosition"
description: "TaleWorlds.Engine 中表示「地面上某点」的轻量结构体：绑定 Scene 与 NavMesh，惰性解析地面与导航高度。"
---
# WorldPosition

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public struct WorldPosition`
**Base:** 值类型（无基类）
**Source:** `TaleWorlds.Engine/WorldPosition.cs`

## 概述

`WorldPosition` 是引擎用来表示「地面上某个点」的轻量结构体：它保存一个二维坐标、所属的 `Scene` 指针以及可选的 NavMesh 指针，从而在需要时惰性地解析出正确的地面/导航高度（Z）。与单纯的 `Vec3` 不同，`WorldPosition` 知道自己「属于哪张场景的哪块导航面」，因此广泛用于智能体寻路、队伍移动和物体贴地摆放。它不会在构造时立即计算高度，而是把 Z 的校验推迟到第一次读取 `GetGroundZ` / `GetNavMeshZ` 时，由 `Scene` 通过 `WorldPositionValidateZ` 完成。

## 心智模型

`WorldPosition` 把「一个地面点」与「它所处的场景/导航面上下文」打包在一起，所以它不是单纯的 `Vec3`，而是一个会按需向 `Scene` 查询高度的智能坐标。构造时通常只给 XY（与一个 `Scene`），Z 标记为无效（`ZValidityState.Invalid`）；当你调用 `GetGroundZ`、`GetNavMeshZ`、`GetGroundVec3` 等方法时，引擎才会通过 `ValidateZ` 去查地形或导航网格并回填 Z，若查不到则返回 `float.NaN`。这意味着：读取高度前先用 `IsValid` 判断，且不要假设第一次 `GetGroundVec3` 一定拿到有效 Z；移动位置时调用 `SetVec2` 会让已校验的 Z 失效，下次读取会重新计算。`Normal` 字段保存所在面的法线，常用于把物体贴到斜坡上。需要世界坐标时优先用 `GetGroundVec3`/`GetNavMeshVec3`，而不是直接读 `_position`。你几乎总是从 `Mission`、[Agent](../../mission/Agent/) 或寻路结果拿到 `WorldPosition`，而不是手动构造。

## 关键成员

| 成员 | 作用 |
| --- | --- |
| `AsVec2` / `X` / `Y` | 该点的二维地面坐标分量 |
| `IsValid` | 当且仅当 `AsVec2` 有效且绑定了 `Scene` 时为真 |
| `State`（`ZValidityState`） | Z 的校验状态：Invalid / Valid / ValidAccordingToNavMesh |
| `GetGroundZ()` / `GetGroundVec3()` | 惰性查询并回填地形地面高度 |
| `GetNavMeshZ()` / `GetNavMeshVec3()` | 惰性查询并回填导航网格高度 |
| `SetVec2(Vec2)` | 移动 XY，并使已校验的 Z 失效，下次读取会重新计算 |

## 真实示例

```csharp
// WorldPosition 把一个地面点与其所在 Scene / NavMesh 绑定，便于惰性求高度
WorldPosition spot = new WorldPosition(Mission.Current.Scene, new Vec3(100f, 200f, 0f));

// 惰性求地面高度；若尚未校验，引擎会向 Scene 查询地形/导航网格
float groundZ = spot.GetGroundZ();
Vec3 groundPoint = spot.GetGroundVec3();

// 移动只会更新 XY，并让已校验的 Z 失效，下次读取会重新计算
spot.SetVec2(new Vec2(120f, 210f));
```

## 风险与崩溃边界

- **未校验的高度返回 `NaN`。** 在 `GetGroundZ`/`GetNavMeshZ` 前若 Z 无效，返回 `float.NaN`；把 `NaN` 直接喂给变换或寻路会污染后续计算，务必先验 `IsValid` 或用 `State` 判断。
- **`SetVec2` 重置 Z 校验。** 移动位置后必须先重新调用高度查询再使用 `GetGroundVec3`，否则拿到的是旧 Z 或 `NaN`。
- **`Invalid` 静态值不可用于真实查询。** `WorldPosition.Invalid` 是一个全零的占位值，调用其高度方法没有意义。
- **绑定 `Scene` 不可中途更换。** `WorldPosition` 在构造时固定所属场景，跨场景复用同一实例会导致导航/地形查询指向错误的世界。
- **多线程版本带 `MT` 后缀。** `GetNavMeshZMT` / `GetGroundZMT` 在锁内执行，主线程外使用非 `MT` 版本可能读到撕裂数据。

## 跨版本提示

`WorldPosition` 的公开结构体形态（构造自 `Scene`+`Vec3`、`GetGroundZ`/`GetNavMeshZ`/`GetGroundVec3`、`SetVec2`、`State` 字段）在 1.3.15 与 1.4.5 间保持一致。挂载线程安全的 `MT` 后缀变体在两个版本都存在，跨版本 mod 可放心使用，但注意不要假设 `ZValidityState` 的内部枚举数值跨版本不变。

## 依赖关系

- 上游：[Scene](../Scene/) 提供 `WorldPositionValidateZ` 与 `WorldPositionComputeNearestNavMesh`，是高度惰性解析的执行者；[NativeObject](../NativeObject/) 不直接涉及（本类型是 struct）。
- 下游：寻路起点/终点广泛使用此类型，例如 [Scene](../Scene/) 的 `GetPathDistanceBetweenPositions`、`IsLineToPointClear`。
- 相关：智能体位置见 [Agent](../../mission/Agent/)；导航结果见 [Scene](../Scene/) 的 NavMesh 查询方法。
- 架构参考：[native-interop](../../../architecture/native-interop/) 解释托管结构体与原生 `rglWorld_position` 的字段映射。

- 父级：[engine API 索引](../)
- 同级：[Scene](../Scene/) · [NativeObject](../NativeObject/) · [Camera](../Camera/)
