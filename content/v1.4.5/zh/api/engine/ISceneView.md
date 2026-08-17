---
title: "ISceneView"
description: "引擎场景视图的内部桥接接口（TaleWorlds.Engine）：把托管 SceneView 的渲染/相机/射线投射请求分发到原生侧；对 mod 不可见、不可直接调用，一律经公开 SceneView 使用。"
---
# ISceneView

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**类型：** `internal interface ISceneView`（`[ApplicationInterfaceBase]`）
**Base:** 无
**源文件:** `TaleWorlds.Engine/ISceneView.cs`

## 概述

`ISceneView` 是引擎层对「场景视图（SceneView）」定义的**内部桥接接口**：它把托管侧 `SceneView` 的渲染、相机、坐标投影、射线投射等请求，通过 `[EngineMethod]` 分发给 C++ 原生侧实现。它是托管/原生边界上的契约面，**对 mod 既是 `internal` 不可引用，也绝不应被直接调用**——公开侧由 `SceneView`（`View` 的子类）封装，mod 只跟 `SceneView` / `Scene` / `Camera` 打交道。`ISceneView` 真正的价值是「读懂 `SceneView` 底层在调什么」，而非让你去用它。

## 心智模型

把 `ISceneView` 想成「`SceneView` 通往原生渲染管线的电话总机」：**你拨不了这部总机，拨了也听不懂（全是原生指针）。**

- **它是什么**：带 `[ApplicationInterfaceBase]` 的 `internal interface`，每个方法都标 `[EngineMethod("...")]`，签名里满是 `UIntPtr` 原生句柄与 `ref`/`out` 参数。它是 `SceneView` 与原生引擎之间的方法分发表。
- **为什么存在**：Bannerlord 的渲染、相机、射线检测大量跑在 C++ 引擎里；`ISceneView` 把这套能力以统一接口暴露给托管侧，`SceneView` 再用 `EngineApplicationInterface.ISceneView.X(base.Pointer, ...)` 把调用转过去。
- **mod 如何真正用到**：你不持有也不需要 `ISceneView`。想要一个场景视图就 `SceneView.CreateSceneView()`；想要它的场景就 `sceneView.GetScene()`（返回 `Scene`）；想要投影/射线就走 `SceneView` 公开方法（如 `WorldPointToScreenPoint`、`ProjectedMousePositionOnGround`）。这些方法内部才去碰 `ISceneView`。
- **层级**：引擎层（比 `Mission` / `Campaign` 更底层），属「引擎桥」，不是「战役/任务 API」。

## 何时用 / 何时不要用

- **用**：排查 `SceneView` 的底层行为、理解某条渲染/射线请求最终落到哪个原生方法、或阅读引擎源码时定位 `SceneView` 调用链。
- **不要用**：在 mod 代码里 `new`、持有或调用 `ISceneView`——它是 `internal`，编译期就引用不到；即便通过反射强拿，方法签名里的 `UIntPtr` 一旦传错就是原生崩溃/坏档级别的风险。**绝对不要**照抄「`IISceneView service = ...;`」这类占位伪代码：`IISceneView` 这个类型根本不存在（`ISceneView` 也只有一个 `I`），场景视图也不是靠依赖注入或工厂拿到的「service」。

## 依赖

- 上游 / 相关：`[SceneView](../SceneView)`（唯一被 mod 持有的场景视图托管类，封装 `ISceneView` 边界）、`[Scene](../Scene)`（`GetScene()` 返回的场景托管类）、`[Camera](../Camera)`（`SetCamera` 接收的相机）、`[NativeObject](../NativeObject)`（`SceneView`/`Scene` 的原生句柄基类）、`[EngineApplicationInterface](../EngineApplicationInterface)`（引擎侧接口总入口，内含 `ISceneView` 实例）、`[View](../View)`（`SceneView` 的直接基类）。
- 下游 / 边界：这是引擎原生边界，托管侧经 `SceneView` 间接消费；不要把它当作可替换的托管服务。

## 关键方法（按用途分组）

> 以下均为 `ISceneView` 在原生侧暴露的 `[EngineMethod]`；mod 不直接调，列出来是为了「看懂 `SceneView` 在做什么」。

- **生命周期 / 场景绑定**：`CreateSceneView()`（创建视图）、`SetScene(UIntPtr, UIntPtr scene)`、`GetScene(UIntPtr)`（返回 `Scene`）、`ReadyToRender(UIntPtr)`、`CheckSceneReadyToRender(UIntPtr)`、`ClearAll(...)`、`AddClearTask(...)`。
- **相机 / 坐标投影**：`SetCamera(UIntPtr, UIntPtr camera)`、`WorldPointToScreenPoint(UIntPtr, Vec3)`、`ScreenPointToViewportPoint(UIntPtr, float, float)`、`TranslateMouse(...)`。
- **射线 / 地面拾取**：`RayCastForClosestEntityOrTerrain(...)`、`ProjectedMousePositionOnGround(...)`、`ProjectedMousePositionOnWater(...)`。
- **渲染开关 / 后期**：`SetRenderWithPostfx`、`SetSceneUsesSkybox` / `SetSceneUsesShadows` / `SetSceneUsesContour`、`SetResolutionScaling`、`SetPostfxFromConfig`、`SetPostfxConfigParams`、`SetDoQuickExposure`、`SetShadowmapResolutionMultiplier` 等。

## 示例

```csharp
// 正确做法：通过公开 SceneView 拿到视图与场景，全程不碰 ISceneView
// 1) 创建一个场景视图（内部会经 EngineApplicationInterface.ISceneView.CreateSceneView()）
SceneView sceneView = SceneView.CreateSceneView();

// 2) 把一个已存在的 Scene 绑到视图上（Mission.Current.Scene 是常见来源）
Scene scene = Mission.Current.Scene;
sceneView.SetScene(scene);

// 3) 取回绑定的场景 / 世界坐标转屏幕坐标（底层即驱动 ISceneView）
Scene bound = sceneView.GetScene();
Vec2 screen = sceneView.WorldPointToScreenPoint(worldPosition);
```

> 上面每一步 `SceneView` 的方法，内部都是 `EngineApplicationInterface.ISceneView.X(base.Pointer, ...)`——这才是 `ISceneView` 被调用的真实位置。

## 风险

- **原生指针误用**：`ISceneView` 方法全部吃 `UIntPtr`/引用参数，直接调用时传错句柄会触发原生崩溃，且不在托管异常体系内，极难定位。
- **可见性**：`internal` 接口，mod 工程默认引用不到；强行反射调用会绕过类型与生命周期保护。
- **生命周期**：`SceneView` / `Scene` 的句柄由引擎管理，在 Mission 结束、场景卸载后继续使用其指针同样会崩。

## 参见

- [SceneView](../SceneView)（mod 实际持有的场景视图托管类）
- [Scene](../Scene)（视图绑定的场景）
- [Camera](../Camera)（视图相机）
- [NativeObject](../NativeObject)（原生句柄基类）
- [EngineApplicationInterface](../EngineApplicationInterface)（引擎接口总入口）
- ↑ [引擎 API 索引](../)
