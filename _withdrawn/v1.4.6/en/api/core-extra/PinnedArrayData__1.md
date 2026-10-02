---
title: "PinnedArrayData<T>"
description: "PinnedArrayData<T>: a public struct in TaleWorlds.Library; 9 exposed members (2 methods, 5 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Library/PinnedArrayData.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PinnedArrayData<T>

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public struct PinnedArrayData<T>`
**File:** `TaleWorlds.Library/PinnedArrayData.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## Overview

PinnedArrayData<T> lives in the TaleWorlds.Library module, source file TaleWorlds.Library/PinnedArrayData.cs. It is a public struct; the inheritance chain is PinnedArrayData. It exposes 9 public/protected members: 2 methods, 5 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PinnedArrayData<T> lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Library`), namespace `TaleWorlds.Library`, inheritance chain PinnedArrayData. The surface is property-led (properties 5/9, methods 2/9), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/PinnedArrayData.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Pinned` | `public bool Pinned` | property |
| `Pointer` | `public IntPtr Pointer` | property |
| `T[]Array` | `public T[]Array` | property |
| `]Array2D` | `public T[, ]Array2D` | property |
| `Handle` | `public GCHandle Handle` | property |
| `PinnedArrayData` | `public PinnedArrayData(T[]array, bool manualPinning = false)` | constructor |
| `PinnedArrayData` | `public PinnedArrayData(T[, ]array, bool manualPinning = false)` | constructor |
| `CheckIfTypeRequiresManualPinning` | `public static bool CheckIfTypeRequiresManualPinning(Type type)` | method |
| `Dispose` | `public void Dispose()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AmbientInformation](../AmbientInformation/)
- [same namespace ApplicationPlatform](../ApplicationPlatform/)
- [same namespace ApplicationVersion](../ApplicationVersion/)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter/)
