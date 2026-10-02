---
title: "AsyncTask"
description: "AsyncTask: a public class in TaleWorlds.Engine, inheriting NativeObject, ITask; 1 exposed members (1 methods, 0 properties, 0 fields). Canonical bucket engine. Source: TaleWorlds.Engine/AsyncTask.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# AsyncTask

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public sealed class AsyncTask : NativeObject, ITask`
**File:** `TaleWorlds.Engine/AsyncTask.cs`
**Bucket:** `engine` (rule:TaleWorlds.Engine)

## Overview

AsyncTask lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/AsyncTask.cs. It is a public class (sealed), implementing/inheriting NativeObject, ITask; the inheritance chain is AsyncTask → NativeObject. It exposes 1 public/protected members: 1 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AsyncTask lands in canonical bucket `engine` (matched rule `rule:TaleWorlds.Engine`), namespace `TaleWorlds.Engine`, inheritance chain AsyncTask → NativeObject. The surface is method-led (methods 1/1, properties 0/1), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/AsyncTask.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CreateWithDelegate` | `public static AsyncTask CreateWithDelegate(ManagedDelegate function, bool isBackground)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface NativeObject](../../core-extra/NativeObject/)
- [base / interface ITask](../../core-extra/ITask/)
- [same namespace AnimResult](../AnimResult/)
- [same namespace ApplicationHealthChecker](../ApplicationHealthChecker/)
- [same namespace BillboardType](../BillboardType/)
- [same namespace BodyFlags](../BodyFlags/)
