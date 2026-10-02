---
title: "Shader"
description: "Shader 是对已编译 rgl 着色器的托管封装，按资源名取用并解析材质层所需的 flag 掩码。"
---
# Shader

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public sealed class Shader : Resource`
**Base:** `Resource`
**Source:** `TaleWorlds.Engine/Shader.cs`

## 概述

`Shader` 是引擎里一个已编译着色器程序的托管句柄，继承自 [Resource](../Resource/)。它非常轻量：运行期只能按资源名取回（`GetFromResource`）、读取其 `Name`，并通过 `GetMaterialShaderFlagMask` 把着色器上声明的 flag 名（如阴影接收、透明）解析成 [Material](../Material/) 可用的 `ulong` 位掩码。它不负责编译着色器本身——编译由烘焙/加载流程完成。

## 心智模型

把 `Shader` 想成“一种渲染程序的名字 + 它的 flag 字典”。你不会 `new` 它，而是在需要给 [Material](../Material/) 指定着色器时，用 `Shader.GetFromResource("terrain_shader")` 取出对应的着色器对象。它的核心价值在于 `GetMaterialShaderFlagMask`：材质系统在设置 `shadow_receive`、`disable_sun` 等开关时，先拿着色器询问“这个 flag 名对应哪一位”，再把位写进材质的 flag 字段。当你只是想确认某个着色器存在或打印其名字做调试时，它直接满足；当你要改材质外观，正确路径是拿 `Shader` 去构造或修改 `Material`，而不是试图在 `Shader` 上“设置参数”。不要假设一个任意名字的着色器一定存在——`GetFromResource` 在缺失时会走原生异常路径。

## 关键成员

| 成员 | 作用 |
| --- | --- |
| `GetFromResource(string)` | 按资源名取回已编译着色器；名字不存在时由原生层报错，调用前应确认该着色器在模块中已注册 |
| `Name` | 只读，返回着色器在原生侧的资源名，常用于日志/调试核对 |
| `GetMaterialShaderFlagMask(string, bool)` | 把着色器声明的 flag 名解析为 `ulong` 位掩码；第二个参数 `showErrors` 控制名字未知时是否打印错误，返回 0 表示无此 flag |

## 真实示例

```csharp
// 按资源名取一张已编译的着色器
Shader terrainShader = Shader.GetFromResource("terrain_shader");

// 用着色器上的 flag 名解析出材质层面要用到的位掩码
ulong shadowMask = terrainShader.GetMaterialShaderFlagMask("shadow_receive", true);
string shaderName = terrainShader.Name;
```

## 风险与崩溃边界

- **`GetFromResource` 对未知名字不安全。** 与 `Texture.CheckAndGetFromResource` 不同，`Shader.GetFromResource` 在着色器缺失时走原生异常，mod 应在已知资源存在或先校验后再调用。
- **flag 名拼写错误会静默返回 0。** `GetMaterialShaderFlagMask` 在 `showErrors=false` 时未知 flag 返回 0，若直接把 0 当有效掩码写进材质，会导致对应开关完全不生效且难以排查。
- **句柄失效。** 作为 [Resource](../Resource/) 派生类，跨场景或显存回收后旧 `Shader` 引用的 `Pointer` 可能失效；长期持有前用 `IsValid` 复核。
- **不要复用他人模块的私有着色器名。** 不同模块的着色器资源名可能不在你的加载上下文里，引用未加载模块的着色器会得到空/异常结果。

## 依赖关系

- 上游：继承自 [Resource](../Resource/)，复用 `IsValid` 与 `Pointer` 转发。
- 下游：着色器由 [Material](../Material/) 取用，并通过 `GetMaterialShaderFlagMask` 解析材质 flag。
- 相关：着色器编译/烘焙由 [Utilities](../Utilities/) 的 `CompileAllShaders` / `CheckShaderCompilation` 触发。
- 架构参考：[native-interop](../../../architecture/native-interop/) 解释托管 `Shader` 与原生着色器句柄的绑定。

- 父级：[engine API 索引](../)
- 同级：[Resource](../Resource/) · [Texture](../Texture/) · [Material](../Material/) · [Mesh](../Mesh/) · [Utilities](../Utilities/)
