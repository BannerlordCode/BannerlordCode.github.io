---
title: "RenderTargetComponent"
description: "RenderTargetComponent: a public class in TaleWorlds.Engine, inheriting DotNetObject; 4 exposed members (1 methods, 2 properties, 0 fields). Source: TaleWorlds.Engine/RenderTargetComponent.cs."
---
# RenderTargetComponent

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public sealed class RenderTargetComponent : DotNetObject`
**File:** `TaleWorlds.Engine/RenderTargetComponent.cs`

## Overview

RenderTargetComponent lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/RenderTargetComponent.cs. It is a public class (sealed), implementing/inheriting DotNetObject; the inheritance chain is RenderTargetComponent → DotNetObject. It exposes 4 public/protected members: 1 methods, 2 properties, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: RenderTargetComponent is a top-level type in TaleWorlds.Engine, namespace matching the module directory; inheritance chain RenderTargetComponent → DotNetObject. The surface is property-led (properties 2/4, methods 1/4), so it mostly exposes state for reading. DotNetObject on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/RenderTargetComponent.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RenderTarget` | `public Texture RenderTarget` | property |
| `UserData` | `public object UserData` | property |
| `TextureUpdateEventHandler` | `public delegate void TextureUpdateEventHandler(Texture sender, EventArgs e);` | method |
| `TextureUpdateEventHandler` | `public delegate void TextureUpdateEventHandler(Texture sender, EventArgs e)` | nested type |

## See Also

- [↑ engine module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AnimResult](../AnimResult)
- [same namespace ApplicationHealthChecker](../ApplicationHealthChecker)
- [same namespace AsyncTask](../AsyncTask)
- [same namespace BillboardType](../BillboardType)
