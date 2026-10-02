---
title: "SessionKey"
description: "SessionKey: a public struct in TaleWorlds.Diamond; 11 exposed members (7 methods, 2 properties, 0 fields). Canonical bucket engine. Source: TaleWorlds.Diamond/SessionKey.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SessionKey

**Namespace:** `TaleWorlds.Diamond`
**Module:** `TaleWorlds.Diamond`
**Type:** `public struct SessionKey`
**File:** `TaleWorlds.Diamond/SessionKey.cs`
**Bucket:** `engine` (rule:TaleWorlds.Diamond)

## Overview

SessionKey lives in the TaleWorlds.Diamond module, source file TaleWorlds.Diamond/SessionKey.cs. It is a public struct; the inheritance chain is SessionKey. It exposes 11 public/protected members: 7 methods, 2 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SessionKey lands in canonical bucket `engine` (matched rule `rule:TaleWorlds.Diamond`), namespace `TaleWorlds.Diamond`, inheritance chain SessionKey. The surface is method-led (methods 7/11, properties 2/11), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Diamond/SessionKey.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Guid` | `public Guid Guid` | property |
| `SessionKey` | `public SessionKey(Guid guid)` | constructor |
| `SessionKey` | `public SessionKey(byte[]b)` | constructor |
| `NewGuid` | `public static SessionKey NewGuid()` | method |
| `ToString` | `public override string ToString()` | method |
| `byte[]ToByteArray` | `public byte[]ToByteArray()` | method |
| `operator` | `public static bool operator` | operator |
| `!` | `public static bool operator !` | operator |
| `Equals` | `public override bool Equals(object o)` | method |
| `GetHashCode` | `public override int GetHashCode()` | method |
| `Empty` | `public static SessionKey Empty` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AccessObject](../AccessObject/)
- [same namespace AccessObjectJsonConverter](../AccessObjectJsonConverter/)
- [same namespace AccessObjectResult](../AccessObjectResult/)
- [same namespace AesHelper](../AesHelper/)
