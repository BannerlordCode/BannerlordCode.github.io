---
title: "Resource"
description: "Resource 是 Texture、Shader、Mesh、Material 等原生图形资源的抽象基类，由 rglResource 原生句柄支撑并按名称加载。"
---
# Resource

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public abstract class Resource : NativeObject`
**Base:** `NativeObject`
**Source:** `TaleWorlds.Engine/Resource.cs`

## 概述

`Resource` 是 Bannerlord 引擎里所有按名称加载的原生图形资源（贴图、着色器、网格、材质等）的抽象基类。它本身不持有任何具体数据，只是把 `NativeObject` 的指针封装成带 `IsValid` 句柄有效性判定与 `CheckResourceParameter` 断言校验的统一基类，供派生类型复用原生资源生命周期与参数校验逻辑。

## 心智模型

把 `Resource` 想成“引擎资源在托管侧的句柄”：你几乎永远不会直接 `new` 一个 `Resource`，因为真正的资源（[Texture](../Texture/)、[Shader](../Shader/)、[Mesh](../Mesh/)、[Material](../Material/)）都通过各自的 `GetFromResource(name)` 或 `CreateXxx` 工厂，从原生 `rglResource` 表里按字符串名字取回一个已存在的实例。它的唯一运行时价值是：任何资源引用在传给别的 API 之前，先用 `IsValid` 确认底层原生句柄还没被释放，并用 `CheckResourceParameter` 在开发期捕获 null 或失效参数。当你只是持有一个“可能是任意资源”的引用时（例如某个方法参数为 `Resource` 类型），它就是这个基类发挥作用的地方；如果你明确知道资源种类，应转成具体子类以访问 `Width`、`Name` 等成员。不要用 `Resource` 做容器或缓存的键而忽略 `IsValid`——场景切换或显存回收后旧句柄会变悬空。

## 关键成员

| 成员 | 作用 |
| --- | --- |
| `IsValid` | 只读属性，等价于 `Pointer != UIntPtr.Zero`，在访问任何资源成员前判断原生句柄是否仍存活 |
| `CheckResourceParameter(Resource, string)` | 受保护断言辅助：`null` 抛 `NullReferenceException`，句柄无效抛 `ArgumentException`；用于派生类公开方法的参数前置校验（仅开发断言构建启用） |
| 继承的 `Pointer` | 来自 [NativeObject](../NativeObject/)，指向底层 `rglResource` 原生对象的地址，所有读操作都经它转发给 `EngineApplicationInterface` |

## 真实示例

```csharp
// Resource 是抽象基类，运行期拿到的永远是具体子类（这里以 Texture 为例）
Texture bannerTexture = Texture.CheckAndGetFromResource("ui_banner");
Resource resource = bannerTexture;

// 任何 Resource 派生类型都能用 IsValid 判断底层 rglResource 句柄是否仍然有效
if (resource.IsValid)
{
    Material material = Material.GetFromResource("banner_material");
    GameEntity entity = GameEntity.Instantiate(Mission.Current.Scene, "banner", true);
}
```

## 风险与崩溃边界

- **不要 `new Resource()`。** 它是抽象类且构造函数是 `protected`/`internal`，需要原生指针；永远通过派生类的 `GetFromResource` / `CreateXxx` 工厂获取实例。
- **`IsValid` 只是瞬间快照。** 调用后、真正使用句柄前，资源可能被渲染线程或显存回收释放；跨帧持有引用时必须每次使用前重新校验。
- **`CheckResourceParameter` 是受保护方法。** 第三方 mod 代码处于 `Resource` 派生类之外，无法直接调用它；不要为了“校验参数”而反射调用，应在自己的方法里显式判 `null` 与 `IsValid`。
- **悬空句柄会崩在原生层。** 把已 `Release` 的资源句柄继续传给 `EngineApplicationInterface` 会触发原生端访问违规，症状是调用栈落在 `rglResource` 相关函数而非托管侧。

## 依赖关系

- 上游：[NativeObject](../NativeObject/) 提供 `Pointer` 与引用计数机制，是 `IsValid` 判定的基础。
- 下游：具体资源派生类见 [Texture](../Texture/)、[Shader](../Shader/)、[Mesh](../Mesh/)、[Material](../Material/)。
- 相关：资源的运行时容器是 [GameEntity](../GameEntity/)，场景切换时负责其生命周期。
- 架构参考：[native-interop](../../../architecture/native-interop/) 解释托管 `Resource` 与原生 `rglResource` 句柄的绑定方式。

- 父级：[engine API 索引](../)
- 同级：[Texture](../Texture/) · [Shader](../Shader/) · [Mesh](../Mesh/) · [Material](../Material/) · [NativeObject](../NativeObject/) · [GameEntity](../GameEntity/)
