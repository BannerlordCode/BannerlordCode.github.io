---
title: "PeerId"
description: "PeerId: a public struct in TaleWorlds.Diamond; 13 exposed members (7 methods, 2 properties, 0 fields). Canonical bucket engine. Source: TaleWorlds.Diamond/PeerId.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PeerId

**Namespace:** `TaleWorlds.Diamond`
**Module:** `TaleWorlds.Diamond`
**Type:** `public struct PeerId`
**File:** `TaleWorlds.Diamond/PeerId.cs`
**Bucket:** `engine` (rule:TaleWorlds.Diamond)

## Overview

PeerId lives in the TaleWorlds.Diamond module, source file TaleWorlds.Diamond/PeerId.cs. It is a public struct; the inheritance chain is PeerId. It exposes 13 public/protected members: 7 methods, 2 properties, 4 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PeerId lands in canonical bucket `engine` (matched rule `rule:TaleWorlds.Diamond`), namespace `TaleWorlds.Diamond`, inheritance chain PeerId. The surface is method-led (methods 7/13, properties 2/13), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Diamond/PeerId.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsValid` | `public bool IsValid` | property |
| `PeerId` | `public PeerId(Guid guid)` | constructor |
| `PeerId` | `public PeerId(byte[]data)` | constructor |
| `PeerId` | `public PeerId(string peerIdAsString)` | constructor |
| `PeerId` | `public PeerId(ulong chunk1, ulong chunk2, ulong chunk3, ulong chunk4)` | constructor |
| `byte[]ToByteArray` | `public byte[]ToByteArray()` | method |
| `ToString` | `public override string ToString()` | method |
| `FromString` | `public static PeerId FromString(string peerIdAsString)` | method |
| `operator` | `public static bool operator` | operator |
| `!` | `public static bool operator !` | operator |
| `Equals` | `public override bool Equals(object o)` | method |
| `GetHashCode` | `public override int GetHashCode()` | method |
| `Empty` | `public static PeerId Empty` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AccessObject](../AccessObject/)
- [same namespace AccessObjectJsonConverter](../AccessObjectJsonConverter/)
- [same namespace AccessObjectResult](../AccessObjectResult/)
- [same namespace AesHelper](../AesHelper/)
