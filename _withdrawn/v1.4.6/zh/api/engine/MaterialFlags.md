---
title: "MaterialFlags"
description: "MaterialFlags：TaleWorlds.Engine 的 public 枚举，继承 uint；公开成员 29 个（方法 0、属性 0、字段 0）。canonical 桶 engine。源文件 TaleWorlds.Engine/MaterialFlags.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MaterialFlags

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public enum MaterialFlags : uint`
**File:** `TaleWorlds.Engine/MaterialFlags.cs`
**Bucket:** `engine` (rule:TaleWorlds.Engine)

## 概述

MaterialFlags 位于 TaleWorlds.Engine 模块，源文件 TaleWorlds.Engine/MaterialFlags.cs。它是一个 public 枚举，实现/继承 uint，继承链为 MaterialFlags → uint。public/protected 成员共 29 个：29 枚举值。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MaterialFlags 落在 canonical 桶 `engine`（命中规则 `rule:TaleWorlds.Engine`），命名空间 `TaleWorlds.Engine`，继承链 MaterialFlags → uint。成员构成以方法为主（方法 0/29，属性 0/29），对外主要以操作入口暴露。继承链上的 uint 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Engine/MaterialFlags.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `1U` | `RenderFrontToBack == 1U` | 枚举值 |
| `2U` | `NoDepthTest == 2U` | 枚举值 |
| `4U` | `DontDrawToDepthRenderTarget == 4U` | 枚举值 |
| `8U` | `NoModifyDepthBuffer == 8U` | 枚举值 |
| `16U` | `CullFrontFaces == 16U` | 枚举值 |
| `32U` | `TwoSided == 32U` | 枚举值 |
| `64U` | `AlphaBlendSort == 64U` | 枚举值 |
| `128U` | `DontOptimizeMesh == 128U` | 枚举值 |
| `256U` | `DontCastShadow == 256U` | 枚举值 |
| `512U` | `DisableStreaming == 512U` | 枚举值 |
| `0U` | `BillboardNone == 0U` | 枚举值 |
| `4096U` | `Billboard_2d == 4096U` | 枚举值 |
| `8192U` | `Billboard_3d == 8192U` | 枚举值 |
| `12288U` | `BillboardMask == 12288U` | 枚举值 |
| `131072U` | `Skybox == 131072U` | 枚举值 |
| `262144U` | `MultiPassAlpha == 262144U` | 枚举值 |
| `524288U` | `GbufferAlphaBlend == 524288U` | 枚举值 |
| `1048576U` | `RequiresForwardRendering == 1048576U` | 枚举值 |
| `2097152U` | `AvoidRecomputationOfNormals == 2097152U` | 枚举值 |
| `150994944U` | `RenderOrderPlus_1 == 150994944U` | 枚举值 |
| `167772160U` | `RenderOrderPlus_2 == 167772160U` | 枚举值 |
| `184549376U` | `RenderOrderPlus_3 == 184549376U` | 枚举值 |
| `201326592U` | `RenderOrderPlus_4 == 201326592U` | 枚举值 |
| `218103808U` | `RenderOrderPlus_5 == 218103808U` | 枚举值 |
| `234881024U` | `RenderOrderPlus_6 == 234881024U` | 枚举值 |
| `251658240U` | `RenderOrderPlus_7 == 251658240U` | 枚举值 |
| `268435456U` | `GreaterDepthNoWrite == 268435456U` | 枚举值 |
| `536870912U` | `AlwaysDepthTest == 536870912U` | 枚举值 |
| `1073741824U` | `RenderToAmbientOcclusionBuffer == 1073741824U` | 枚举值 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 AnimResult](../AnimResult/)
- [同命名空间 ApplicationHealthChecker](../ApplicationHealthChecker/)
- [同命名空间 AsyncTask](../AsyncTask/)
- [同命名空间 BillboardType](../BillboardType/)
