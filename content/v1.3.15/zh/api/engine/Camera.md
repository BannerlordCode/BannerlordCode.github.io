---
title: "Camera"
description: "TaleWorlds.Engine 中描述视锥的托管包装：决定渲染视角与视野，并提供屏幕空间/世界空间的投影换算。"
---
# Camera

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public sealed class Camera : NativeObject`
**Base:** `NativeObject`
**Source:** `TaleWorlds.Engine/Camera.cs`

## 概述

`Camera` 是引擎里描述「一个视锥（view frustum）」的托管包装：它持有原生相机对象，决定某一帧从哪个位置、以多大视野、朝哪个方向渲染世界，也提供屏幕空间与世界空间之间的投影换算。任务（[Mission](../../mission/Mission/)）的主相机就是它的一个实例；渲染流程每帧用它的 `Frame`、`Fov`、`Near`/`Far` 构造视图投影矩阵。对 mod 而言，`Camera` 最常见的用途不是「创建新相机」，而是读取 `Mission.Current.Camera` 来做射线拾取、可见性判断或自定义渲染。

## 心智模型

`Camera` 处在渲染管线的入口：它把一根位置（`Position`）、朝向（`Direction`/`Frame`）、视野（`SetFovVertical`/`SetFovHorizontal`）与远近裁剪面（`Near`/`Far`）描述成一次完整的取景。你通常从 `Mission.Current.Camera` 拿到已配置好的主相机，只有在做离屏渲染（如物品预览）时才用 `CreateCamera()` 自建一个，并在用完后调用 `ReleaseCamera()` 把原生引用还回去。相机可以绑定到一个 `GameEntity`：设置 `Entity` 属性后，相机的 `Frame` 会跟随该实体的全局坐标系，常用于第一/三人称视角。做 UI 之外的世界交互（如点击地面、瞄准实体）时，用 `ViewportPointToWorldRay` 把屏幕坐标变成世界射线，再配合 [Scene](../Scene/) 的射线查询；纯 UI 拾取请不要混用 [GauntletLayer](../GauntletLayer/) 的鼠标逻辑。读取属性（`GetFovVertical`、`GetAspectRatio`、`GetViewProjMatrix`）不会触发原生写入，而 `LookAt`/`SetFov*`/`FillParametersFrom` 会改动相机状态。

## 关键成员

| 成员 | 作用 |
| --- | --- |
| `Entity` | 绑定的 [GameEntity](../GameEntity/)，设置后相机 Frame 跟随该实体 |
| `Position` / `Direction` / `Frame` | 相机的位置、朝前的反方向与世界变换矩阵 |
| `Near` / `Far` / `HorizontalFov` | 远近裁剪面与水平视野，均为只读快照 |
| `LookAt(Vec3, Vec3, Vec3)` | 按眼睛位置、目标点与上方向量直接摆好相机 |
| `ViewportPointToWorldRay(...)` | 把视口坐标转换为一条世界射线，用于射线拾取 |
| `ReleaseCamera()` | 释放原生相机引用，自建相机后必须调用 |

## 真实示例

```csharp
// 从当前任务拿到主相机（Mission.Current.Camera 是真实属性）
Camera camera = Mission.Current.Camera;
camera.LookAt(new Vec3(0f, 0f, 2f), new Vec3(0f, 10f, 0f), new Vec3(0f, 0f, 1f));

// 把屏幕中心坐标转成一条世界射线，用于拾取实体
Vec3 rayBegin = Vec3.Zero;
Vec3 rayEnd = Vec3.Zero;
camera.ViewportPointToWorldRay(ref rayBegin, ref rayEnd, new Vec2(0.5f, 0.5f));

// 判断某个实体是否在当前相机视野内
bool seesEntity = camera.CheckEntityVisibility(targetEntity);
```

## 风险与崩溃边界

- **自建相机必须释放。** 用 `CreateCamera()` 得到的实例在不再需要时务必 `ReleaseCamera()`（或 `ReleaseCameraEntity()`），否则泄漏原生相机对象。
- **`Entity` 绑定是单向跟随。** 设置 `Entity` 后相机 `Frame` 由该实体驱动，再手动 `SetFrame` 可能被下一帧覆盖；解绑需把 `Entity` 设为 null。
- **`ViewportPointToWorldRay` 的视口坐标范围。** 传入的 `Vec2` 应为归一化视口坐标（通常 0~1），越界会得到无意义的射线。
- **`ScreenSpaceRayProjection` 会折算到 `Entity` 空间。** 当相机绑定了实体时，返回的 `rayBegin`/`rayEnd` 会被变换到实体全局坐标系，使用时注意坐标系，不要和世界空间混用。
- **不要把它当成 UI 相机。** 与界面层 [GauntletLayer](../GauntletLayer/) 的鼠标命中逻辑无关，世界拾取才用本类。

## 跨版本提示

`Camera` 的公开 API（`CreateCamera`、`ReleaseCamera`、`LookAt`、`SetFovVertical`/`SetFovHorizontal`、`ViewportPointToWorldRay`、`CheckEntityVisibility`、`Entity` 属性）在 1.3.15 与 1.4.5 间保持稳定。两个版本均提供静态 `ConstructCameraFromPositionElevationBearing` 用于从球坐标构造相机帧，跨版本可直接复用。

## 依赖关系

- 上游：[NativeObject](../NativeObject/) 提供 `Pointer` 与引用计数；渲染主循环每帧读取 `Frame`/`Fov` 构造视图投影矩阵。
- 下游：被 [Mission](../../mission/Mission/) 持有主相机；可绑定到 [GameEntity](../GameEntity/) 实现跟随视角。
- 相关：屏幕空间拾取的结果通常交给 [Scene](../Scene/) 做射线查询；界面层另见 [GauntletLayer](../GauntletLayer/)。
- 架构参考：[native-interop](../../../architecture/native-interop/) 解释托管相机与原生 `rglCamera_object` 的绑定。

- 父级：[engine API 索引](../)
- 同级：[Scene](../Scene/) · [GameEntity](../GameEntity/) · [NativeObject](../NativeObject/) · [GauntletLayer](../GauntletLayer/)
