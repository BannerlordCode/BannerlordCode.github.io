---
title: "RenderTargetComponent"
description: "RenderTargetComponent: a public class in TaleWorlds.Engine, inheriting DotNetObject; 4 exposed members (1 methods, 2 properties, 0 fields). Canonical bucket engine. Source: TaleWorlds.Engine/RenderTargetComponent.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# RenderTargetComponent

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public sealed class RenderTargetComponent : DotNetObject`
**File:** `TaleWorlds.Engine/RenderTargetComponent.cs`
**Bucket:** `engine` (rule:TaleWorlds.Engine)

## Overview

RenderTargetComponent lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/RenderTargetComponent.cs. It is a public class (sealed), implementing/inheriting DotNetObject; the inheritance chain is RenderTargetComponent → DotNetObject. It exposes 4 public/protected members: 1 methods, 2 properties, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: RenderTargetComponent lands in canonical bucket `engine` (matched rule `rule:TaleWorlds.Engine`), namespace `TaleWorlds.Engine`, inheritance chain RenderTargetComponent → DotNetObject. The surface is property-led (properties 2/4, methods 1/4), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/RenderTargetComponent.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `RenderTarget` | `public Texture RenderTarget` | property |
| `UserData` | `public object UserData` | property |
| `TextureUpdateEventHandler` | `public delegate void TextureUpdateEventHandler(Texture sender, EventArgs e);` | method |
| `TextureUpdateEventHandler` | `public delegate void TextureUpdateEventHandler(Texture sender, EventArgs e)` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface DotNetObject](../../core-extra/DotNetObject/)
- [same namespace AnimResult](../AnimResult/)
- [same namespace ApplicationHealthChecker](../ApplicationHealthChecker/)
- [same namespace AsyncTask](../AsyncTask/)
- [same namespace BillboardType](../BillboardType/)
