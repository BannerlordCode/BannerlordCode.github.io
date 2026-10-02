---
title: "MaterialFlags"
description: "MaterialFlags: a public enum in TaleWorlds.Engine, inheriting uint; 29 exposed members (0 methods, 0 properties, 0 fields). Source: TaleWorlds.Engine/MaterialFlags.cs."
---
# MaterialFlags

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public enum MaterialFlags : uint`
**File:** `TaleWorlds.Engine/MaterialFlags.cs`

## Overview

MaterialFlags lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/MaterialFlags.cs. It is a public enum, implementing/inheriting uint; the inheritance chain is MaterialFlags → uint. It exposes 29 public/protected members: 29 enum values.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MaterialFlags is a top-level type in TaleWorlds.Engine, namespace matching the module directory; inheritance chain MaterialFlags → uint. The surface is method-led (methods 0/29, properties 0/29), so it mostly exposes operations. uint on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/MaterialFlags.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `1U` | `RenderFrontToBack == 1U` | enum value |
| `2U` | `NoDepthTest == 2U` | enum value |
| `4U` | `DontDrawToDepthRenderTarget == 4U` | enum value |
| `8U` | `NoModifyDepthBuffer == 8U` | enum value |
| `16U` | `CullFrontFaces == 16U` | enum value |
| `32U` | `TwoSided == 32U` | enum value |
| `64U` | `AlphaBlendSort == 64U` | enum value |
| `128U` | `DontOptimizeMesh == 128U` | enum value |
| `256U` | `DontCastShadow == 256U` | enum value |
| `512U` | `DisableStreaming == 512U` | enum value |
| `0U` | `BillboardNone == 0U` | enum value |
| `4096U` | `Billboard_2d == 4096U` | enum value |
| `8192U` | `Billboard_3d == 8192U` | enum value |
| `12288U` | `BillboardMask == 12288U` | enum value |
| `131072U` | `Skybox == 131072U` | enum value |
| `262144U` | `MultiPassAlpha == 262144U` | enum value |
| `524288U` | `GbufferAlphaBlend == 524288U` | enum value |
| `1048576U` | `RequiresForwardRendering == 1048576U` | enum value |
| `2097152U` | `AvoidRecomputationOfNormals == 2097152U` | enum value |
| `150994944U` | `RenderOrderPlus_1 == 150994944U` | enum value |
| `167772160U` | `RenderOrderPlus_2 == 167772160U` | enum value |
| `184549376U` | `RenderOrderPlus_3 == 184549376U` | enum value |
| `201326592U` | `RenderOrderPlus_4 == 201326592U` | enum value |
| `218103808U` | `RenderOrderPlus_5 == 218103808U` | enum value |
| `234881024U` | `RenderOrderPlus_6 == 234881024U` | enum value |
| `251658240U` | `RenderOrderPlus_7 == 251658240U` | enum value |
| `268435456U` | `GreaterDepthNoWrite == 268435456U` | enum value |
| `536870912U` | `AlwaysDepthTest == 536870912U` | enum value |
| `1073741824U` | `RenderToAmbientOcclusionBuffer == 1073741824U` | enum value |

## See Also

- [↑ engine module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AnimResult](../AnimResult)
- [same namespace ApplicationHealthChecker](../ApplicationHealthChecker)
- [same namespace AsyncTask](../AsyncTask)
- [same namespace BillboardType](../BillboardType)
