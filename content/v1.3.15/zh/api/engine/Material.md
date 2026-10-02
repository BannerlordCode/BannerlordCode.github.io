---
title: "Material"
description: "封装着色器、纹理槽、着色器开关与混合参数的 GPU 渲染配方，作为共享资源被 Mesh 引用。"
---
# Material

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public sealed class Material : Resource`
**Base:** `Resource`
**Source:** `TaleWorlds.Engine/Material.cs`

## 概述

`Material` 封装一个 GPU 着色器程序及其绑定的纹理槽、着色器开关位（shader flags）与 Alpha 混合参数；它是场景中每个 [Mesh](../Mesh/) 用来决定"如何被渲染"的配置对象，本身不持有任何顶点数据。注意它是 [Resource](../Resource/) 的子类，意味着材质像其它引擎资源一样可被按名字缓存，多个网格可能共享同一份材质实例。

## 心智模型

`Material` 是"渲染外观配方"：把 `Shader`、`Texture` 槽位（DiffuseMap / BumpMap / EnvironmentMap / SpecularMap 等，见 `MBTextureType` 枚举）、着色器开关（UseSpecular、UseDynamicLight、UseSunLight……见 `MBMaterialShaderFlags`）和混合模式打包在一起，挂到 [Mesh](../Mesh/) 上决定其绘制方式。它由资源系统按名字创建（`GetFromResource`），或用 `GetDefaultMaterial` 取全局默认材质——构造器是 internal 且需要原生指针，你不应自己 `new Material()`。关键陷阱是共享性：同一个实例可能被场景里多个网格引用，直接 `SetShader` / `SetTexture` 会影响所有引用者；需要独立改动的必须先 `CreateCopy`。何时用：给某网格换贴图、开启动态光照、切换半透明混合；何时不用：若只想临时改单个网格的颜色，应改 [Mesh](../Mesh/) 的 `Color`/`Color2`，而不是动材质。常见获取路径：`mesh.GetMaterial()` 拿到网格当前材质，或 `Mesh.CreateMeshWithMaterial(material)` 在创建网格时一并指定。

## 关键成员

| 成员 | 作用 |
| --- | --- |
| `GetFromResource(name)` / `GetDefaultMaterial()` | 静态工厂：按资源名取材质，或取全局默认材质（二者皆为共享实例，勿随意改写） |
| `CreateCopy()` | 复制出一份独立材质，避免改动影响到共享它的其它网格 |
| `SetShader(Shader)` / `GetShader()` | 替换 / 读取当前着色器程序；换 shader 后需重新绑定纹理槽 |
| `SetTexture(MBTextureType, Texture)` / `GetTexture(MBTextureType)` | 把贴图绑到指定槽位（DiffuseMap / DiffuseMap2 / BumpMap / EnvironmentMap / SpecularMap） |
| `SetShaderFlags(ulong)` / `GetShaderFlags()` | 整体覆写 / 读取着色器开关位；与下方按名增删方法配合使用 |
| `AddMaterialShaderFlag(name, showErrors)` / `RemoveMaterialShaderFlag(name)` | 按名字增删着色器开关（如 `"use_tableau_blending"`），无需手算位掩码 |
| `SetAlphaBlendMode(MBAlphaBlendMode)` / `GetAlphaBlendMode()` | 控制半透明混合方式（NoAlphaBlend / Modulate / Add / Multiply 等） |
| `SetEnableSkinning(bool)` / `UsingSkinning()` | 开关骨骼蒙皮；蒙皮网格必须开启，否则动画不生效 |

## 真实示例

```csharp
// 从资源里取共享材质，并复制一份，避免改到其它网格引用的原材质
Material material = Material.GetFromResource("my_banner").CreateCopy();

// 换着色器并把招牌贴图绑到 DiffuseMap 槽
material.SetShader(Shader.GetFromResource("custom_lit"));
material.SetTexture(Material.MBTextureType.DiffuseMap, Texture.GetFromResource("my_banner_texture"));

// 开启动态光照，并设为半透明混合
material.AddMaterialShaderFlag("use_dynamic_light", true);
material.SetAlphaBlendMode(Material.MBAlphaBlendMode.Modulate);

// 把材质应用到网格
Mesh mesh = Mesh.CreateMeshWithMaterial(material);
```

## 风险与崩溃边界

- **材质是共享资源。** 直接对 `GetFromResource` / `GetDefaultMaterial` 返回的实例调用 `SetShader` / `SetTexture` 会影响所有引用它的网格；需要独立改动务必先 `CreateCopy`。
- **不要用 `new Material()`。** 公共构造器是 internal，需要原生指针；始终用 `GetFromResource` / `CreateCopy` 等工厂。
- **换 `Shader` 后纹理槽语义会变。** `SetShader` 不会保留旧纹理绑定关系，换 shader 后通常需要重新 `SetTexture` 到对应槽位。
- **着色器开关用位掩码。** `SetShaderFlags` 是整体覆写，误用会清掉其它开关；优先用 `AddMaterialShaderFlag` / `RemoveMaterialShaderFlag` 按名增删。
- **`AlphaBlendMode` 用枚举而非字符串。** 错误的值（如越界）会被强转为 `MBAlphaBlendMode` 字节，可能产生未定义混合行为。

## 依赖关系

- 上游：[Resource](../Resource/) 是材质与网格共享的缓存资源基类，负责按名查找与引用；[Texture](../Texture/) 与 [Shader](../Shader/) 是被绑定进材质的底层资源。
- 下游：材质被 [Mesh](../Mesh/) 通过 `SetMaterial` 引用，[MetaMesh](../MetaMesh/) 的每个子网格也各自持有一份材质。
- 相关：实际绘制由 [Scene](../Scene/) 在渲染阶段驱动；原生句柄与引用计数由 [NativeObject](../NativeObject/) 提供。
- 架构参考：[native-interop](../../../architecture/native-interop/) 解释托管材质对象与原生 rgl 材质之间的绑定方式。

- 父级：[engine API 索引](../)
- 同级：[Mesh](../Mesh/) · [MetaMesh](../MetaMesh/) · [Skeleton](../Skeleton/) · [ParticleSystem](../ParticleSystem/) · [Resource](../Resource/) · [Texture](../Texture/) · [Shader](../Shader/)
