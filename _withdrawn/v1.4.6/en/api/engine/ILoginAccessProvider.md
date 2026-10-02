---
title: "ILoginAccessProvider"
description: "ILoginAccessProvider: a public interface in TaleWorlds.Diamond; 4 exposed members (4 methods, 0 properties, 0 fields). Canonical bucket engine. Source: TaleWorlds.Diamond/ILoginAccessProvider.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ILoginAccessProvider

**Namespace:** `TaleWorlds.Diamond`
**Module:** `TaleWorlds.Diamond`
**Type:** `public interface ILoginAccessProvider`
**File:** `TaleWorlds.Diamond/ILoginAccessProvider.cs`
**Bucket:** `engine` (rule:TaleWorlds.Diamond)

## Overview

ILoginAccessProvider lives in the TaleWorlds.Diamond module, source file TaleWorlds.Diamond/ILoginAccessProvider.cs. It is a public interface; the inheritance chain is ILoginAccessProvider. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ILoginAccessProvider lands in canonical bucket `engine` (matched rule `rule:TaleWorlds.Diamond`), namespace `TaleWorlds.Diamond`, inheritance chain ILoginAccessProvider. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Diamond/ILoginAccessProvider.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Initialize` | `void Initialize(string preferredUserName, PlatformInitParams initParams);` | method |
| `GetUserName` | `string GetUserName();` | method |
| `GetPlayerId` | `PlayerId GetPlayerId();` | method |
| `CreateAccessObject` | `AccessObjectResult CreateAccessObject();` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AccessObject](../AccessObject/)
- [same namespace AccessObjectJsonConverter](../AccessObjectJsonConverter/)
- [same namespace AccessObjectResult](../AccessObjectResult/)
- [same namespace AesHelper](../AesHelper/)
