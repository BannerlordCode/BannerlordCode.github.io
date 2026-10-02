---
title: "Resource"
description: "Resource: a public class in TaleWorlds.Engine, inheriting NativeObject; 3 exposed members (1 methods, 1 properties, 0 fields). Canonical bucket engine. Source: TaleWorlds.Engine/Resource.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Resource

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public abstract class Resource : NativeObject`
**File:** `TaleWorlds.Engine/Resource.cs`
**Bucket:** `engine` (rule:TaleWorlds.Engine)

## Overview

Resource lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/Resource.cs. It is a public class (abstract), implementing/inheriting NativeObject; the inheritance chain is Resource → NativeObject. It exposes 3 public/protected members: 1 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Resource lands in canonical bucket `engine` (matched rule `rule:TaleWorlds.Engine`), namespace `TaleWorlds.Engine`, inheritance chain Resource → NativeObject. The surface is method-led (methods 1/3, properties 1/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/Resource.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsValid` | `public bool IsValid` | property |
| `Resource` | `protected Resource()` | constructor |
| `CheckResourceParameter` | `protected void CheckResourceParameter(Resource param, string paramName = "")` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface NativeObject](../../core-extra/NativeObject/)
- [same namespace AnimResult](../AnimResult/)
- [same namespace ApplicationHealthChecker](../ApplicationHealthChecker/)
- [same namespace AsyncTask](../AsyncTask/)
- [same namespace BillboardType](../BillboardType/)
