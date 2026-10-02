---
title: "Texture"
description: "Texture 封装 rgl 贴图资源，支持按路径、字节或资源名加载，并管理 GPU 显存与渲染目标（RenderTarget）的生命周期。"
---
# Texture

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public sealed class Texture : Resource`
**Base:** `Resource`
**Source:** `TaleWorlds.Engine/Texture.cs`

## 概述

`Texture` 是引擎里一张 GPU 贴图的托管句柄，继承自 [Resource](../Resource/)。它既能从模块资源名（`GetFromResource`）、磁盘路径或内存字节数组加载普通贴图，也能创建用于实时绘制的渲染目标（`CreateRenderTarget` / `CreateDepthTarget` / `CreateTableauTexture`），并暴露尺寸、显存占用、加载状态等只读属性，以及显式释放 GPU 显存的多个 `Release` 重载。

## 心智模型

把 `Texture` 想成“显存中一张图的句柄”。普通贴图（UI、地表、模型贴图）大多通过 `Texture.GetFromResource("name")` 或 `CheckAndGetFromResource("name")` 按资源名取回——后者在缺失时返回 `null` 而非崩溃，更适合 mod 里不确定资源是否存在的场景。渲染目标（小地图、Tableau、截图）则用 `CreateRenderTarget` 系列主动创建，并配 `RenderTargetComponent` / `TableauView` 参与每帧重绘。你拿到贴图后通常是“读它的属性”（`Width`、`Height`、`IsLoaded`）再交给 [Material](../Material/) 或 [MetaMesh](../MetaMesh/) 使用；不再需要时务必 `Release`，否则 GPU 显存会持续堆积——渲染目标尤其要及时释放。不要把它当作可随意复制的值类型：句柄唯一，释放后旧引用即失效。

## 关键成员

| 成员 | 作用 |
| --- | --- |
| `Width` / `Height` / `MemorySize` | 只读，分别取贴图像素宽、高与显存占用（字节），均经 `EngineApplicationInterface.ITexture` 转发 |
| `IsLoaded()` | 判断原生贴图是否已完成异步加载，访问像素/尺寸前应先确认 |
| `IsRenderTarget` | 只读，标识该贴图是不是实时渲染目标 |
| `Name`（get/set） | 贴图资源名；setter 会改原生侧名字，影响后续 `GetFromResource` 查找 |
| `GetFromResource(name)` | 按资源名取贴图，缺失时抛异常；安全变体 `CheckAndGetFromResource(name)` 返回 `null` |
| `CreateTextureFromPath(PlatformFilePath)` / `LoadTextureFromPath(file, folder)` | 从磁盘路径加载贴图 |
| `CreateRenderTarget(...)` / `CreateDepthTarget(...)` / `CreateTableauTexture(...)` | 创建渲染目标 / 深度目标 / Tableau 贴图，用于实时绘制 |
| `CreateFromByteArray(...)` / `CreateFromMemory(byte[])` | 从内存字节直接构造贴图 |
| `Release()` / `ReleaseImmediately()` / `ReleaseAfterNumberOfFrames(int)` | 释放原生贴图；`Release` 仅标脏并令句柄失效，`ReleaseImmediately` 立即回收 GPU 显存，延迟版等若干帧后回收 |
| `SetTextureAsAlwaysValid()` | 标记该贴图永不被资源回收系统卸载，用于长期驻留的关键 UI 贴图 |
| `RenderTargetComponent` / `TableauView` / `UserData` | 仅渲染目标可用：重绘事件、场景视图与用户自定义数据载体 |

## 真实示例

```csharp
// 从模块资源名加载一张贴图；CheckAndGetFromResource 在缺失时返回 null 而非崩溃
Texture banner = Texture.CheckAndGetFromResource("ui_banner");
if (banner != null && banner.IsLoaded())
{
    int width = banner.Width;
    int height = banner.Height;
    banner.SetTextureAsAlwaysValid();
}

// 用完主动释放，避免 GPU 显存堆积（RenderTarget 尤其重要）
banner.Release();
```

## 风险与崩溃边界

- **`Release` 后句柄即失效。** `Release()` 会调用 `ManualInvalidate()`，之后任何通过其 `Pointer` 的读操作都会指向已释放的原生对象；不要保留并复用已释放贴图。
- **`RenderTarget` 与 `RenderTargetComponent` 强耦合。** `Release` 会触发 `RenderTargetComponent.OnTargetReleased()`；若仍有 `TableauView` 或绘制回调持有该组件，后续重绘会访问失效句柄。
- **`GetPixelData(byte[])` 要求数组大小匹配。** 传入的 `byte[]` 必须与贴图像素字节数一致，否则原生拷贝越界；读取前先用 `Width`/`Height` 计算缓冲长度。
- **跨渲染线程访问。** 贴图数据由渲染线程拥有，主线程上频繁 `GetPixelData` 或 `SaveToFile` 会与渲染同步产生卡顿甚至竞争；实时贴图应优先用渲染目标回调而非每帧拉取。

## 依赖关系

- 上游：继承自 [Resource](../Resource/)，后者提供 `IsValid` 句柄有效性判断与 `Pointer` 转发。
- 下游：贴图被 [Material](../Material/) 与 [MetaMesh](../MetaMesh/) 引用作为表面贴图。
- 相关：渲染目标与 [Scene](../Scene/) 的渲染流程、[GameEntity](../GameEntity/) 的 Tableau 表现绑定。
- 架构参考：[native-interop](../../../architecture/native-interop/) 解释托管 `Texture` 与原生贴图句柄的绑定。

- 父级：[engine API 索引](../)
- 同级：[Resource](../Resource/) · [Shader](../Shader/) · [Material](../Material/) · [Mesh](../Mesh/) · [MetaMesh](../MetaMesh/) · [Scene](../Scene/)
