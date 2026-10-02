---
title: "Vec2i"
description: "Vec2i: a public struct in TaleWorlds.Library, inheriting IEquatable<Vec2i>; 12 exposed members (5 methods, 2 properties, 4 fields). Canonical bucket core-extra. Source: TaleWorlds.Library/Vec2i.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Vec2i

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public struct Vec2i : IEquatable<Vec2i>`
**File:** `TaleWorlds.Library/Vec2i.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## Overview

Vec2i lives in the TaleWorlds.Library module, source file TaleWorlds.Library/Vec2i.cs. It is a public struct, implementing/inheriting IEquatable<Vec2i>; the inheritance chain is Vec2i → IEquatable. It exposes 12 public/protected members: 5 methods, 2 properties, 4 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Vec2i lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Library`), namespace `TaleWorlds.Library`, inheritance chain Vec2i → IEquatable. The surface is method-led (methods 5/12, properties 2/12), so it mostly exposes operations. IEquatable on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/Vec2i.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Item1` | `public int Item1` | property |
| `Item2` | `public int Item2` | property |
| `Vec2i` | `public Vec2i(int x = 0, int y = 0)` | constructor |
| `operator` | `public static bool operator` | operator |
| `!` | `public static bool operator !` | operator |
| `Equals` | `public override bool Equals(object obj)` | method |
| `Equals` | `public bool Equals(Vec2i value)` | method |
| `GetHashCode` | `public override int GetHashCode()` | method |
| `Side` | `public static readonly Vec2i Side` | field |
| `Forward` | `public static readonly Vec2i Forward` | field |
| `One` | `public static readonly Vec2i One` | field |
| `Zero` | `public static readonly Vec2i Zero` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AmbientInformation](../AmbientInformation/)
- [same namespace ApplicationPlatform](../ApplicationPlatform/)
- [same namespace ApplicationVersion](../ApplicationVersion/)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter/)
