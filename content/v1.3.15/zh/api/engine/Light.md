---
title: "Light"
description: "Light 是挂在 GameEntity 组件上的光源，封装 rglLight 原生对象，支持点光源以及颜色、强度、半径、阴影与闪烁等实时配置。"
---
# Light

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public sealed class Light : GameEntityComponent`
**Base:** `GameEntityComponent`
**Source:** `TaleWorlds.Engine/Light.cs`

## 概述

`Light` 是场景中一个光源的托管句柄，不是 [Resource](../Resource/) 而是挂在 [GameEntity](../GameEntity/) 上的 `GameEntityComponent`，底层由 `rglLight` 原生对象支撑。它用 `CreatePointLight(radius)` 创建点光源，随后通过 `Frame`、`LightColor`、`Intensity`、`Radius`、`SetShadowType` 等成员实时配置光照外观，并在 `Dispose` 时释放原生灯对象（带终结器兜底）。

## 心智模型

把 `Light` 想成“场景里一盏可摆可改的灯”。它和 [GameEntity](../GameEntity/) 是组合关系：灯本身只管光照参数，`Frame` 决定它在世界中的位置与朝向，而灯是否被渲染、随哪个实体移动，由承载它的 `GameEntity` 决定。典型用法是先 `Light.CreatePointLight(radius)` 拿到灯，配置颜色/强度/阴影，再把它挂到目标实体的组件列表上；火把、营火、魔法光效都走这条路。需要持续闪烁或体积光时，用 `SetLightFlicker` / `SetVolumetricProperties`。不要把它当成可复制的值——底层 `rglLight` 是原生句柄，且 `Dispose` 会真正释放它；当你不再需要这盏灯（例如实体被移除）时调用 `Dispose`，否则原生灯对象会泄漏。它的 `IsValid` 在句柄释放后变 `false`，可作为存活判断。

## 关键成员

| 成员 | 作用 |
| --- | --- |
| `CreatePointLight(float)` | 静态工厂，按光照半径创建一盏点光源并返回 `Light` 句柄 |
| `IsValid` | 只读，等价于 `Pointer != UIntPtr.Zero`，判断底层 `rglLight` 是否仍存活 |
| `Frame`（get/set） | 灯的世界变换 `MatrixFrame`，决定位置与朝向；setter 直接写原生侧 |
| `LightColor`（get/set） | 灯光颜色（`Vec3`），影响漫反射色调 |
| `Intensity`（get/set） | 光照强度，数值越大越亮 |
| `Radius`（get/set） | 光照影响半径，决定点光源覆盖范围 |
| `SetShadowType(Light.ShadowType)` | 设阴影类型：`NoShadow` / `StaticShadow` / `DynamicShadow`（`Count` 为枚举边界，不要传入） |
| `ShadowEnabled`（get/set） | 开关该灯是否投射阴影 |
| `SetLightFlicker(float, float)` | 设置闪烁幅度与间隔，做火把/烛火动态效果 |
| `SetVolumetricProperties(bool, float)` | 开启体积光并设体积参数 |
| `SetVisibility(bool)` | 运行时显隐这盏灯 |
| `Dispose()` | 释放原生 `rglLight` 并抑制终结器；类自带 `~Light()` 终结器兜底，但显式 `Dispose` 更及时 |

## 真实示例

```csharp
// 在场景里新建一个带半径的点光源
Light torch = Light.CreatePointLight(15f);

// 配置颜色、强度、阴影，再挂到某个 GameEntity 上参与渲染
torch.LightColor = new Vec3(1f, 0.8f, 0.5f);
torch.Intensity = 2.5f;
torch.SetShadowType(Light.ShadowType.DynamicShadow);
torch.ShadowEnabled = true;
torch.SetVisibility(true);
```

## 风险与崩溃边界

- **`Dispose` 后句柄失效。** `Dispose` 调用原生 `Release` 并 `GC.SuppressFinalize`；释放后 `Frame`/`LightColor` 等任何访问都会指向已释放的 `rglLight`。
- **终结器只兜底不保证时机。** 不显式 `Dispose` 时 `~Light()` 会在 GC 时释放，但原生灯对象可能长时间滞留；实体频繁创建/销毁光源时应主动 `Dispose`。
- **`ShadowType` 不要传入 `Count`。** 该枚举值仅作边界计数，传给 `SetShadowType` 会被原生层当作非法阴影模式。
- **`Frame` 写入即渲染状态变更。** 每帧高频设置 `Frame`/`Intensity` 会触发原生侧更新，过量动态灯会显著拖累渲染线程；多数静态灯应在创建时设好参数，而非每帧重设。
- **灯依赖承载它的 `GameEntity` 生命周期。** 实体被 `Remove` 后，若仍持有 `Light` 引用去 `Dispose`，可能因组件已被场景清理而操作失效句柄。

## 依赖关系

- 上游：[GameEntity](../GameEntity/) 持有 `Light` 组件并决定其渲染与变换；原生句柄由 `rglLight` 支撑（见 [native-interop](../../../architecture/native-interop/)）。
- 下游：光照作用于 [Material](../Material/) 与 [Scene](../Scene/) 的实时渲染结果。
- 相关：点光源经 `CreatePointLight` 创建后通常挂到任务/战役场景的实体上。
- 架构参考：[crash-boundaries](../../../architecture/crash-boundaries/) 涉及组件释放时机与原生句柄有效性。

- 父级：[engine API 索引](../)
- 同级：[GameEntity](../GameEntity/) · [Scene](../Scene/) · [Material](../Material/) · [Mesh](../Mesh/) · [ScriptComponent](../ScriptComponent/)
