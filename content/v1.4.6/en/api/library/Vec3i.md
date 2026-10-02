---
title: "Vec3i"
description: "Vec3i: a public struct in TaleWorlds.Library; 12 exposed members (10 methods, 0 properties, 1 fields). Source: TaleWorlds.Library/Vec3i.cs."
---
# Vec3i

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public struct Vec3i`
**File:** `TaleWorlds.Library/Vec3i.cs`

## Overview

Vec3i lives in the TaleWorlds.Library module, source file TaleWorlds.Library/Vec3i.cs. It is a public struct; the inheritance chain is Vec3i. It exposes 12 public/protected members: 10 methods, 1 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Vec3i is a top-level type in TaleWorlds.Library, namespace matching the module directory; inheritance chain Vec3i. The surface is method-led (methods 10/12, properties 0/12), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/Vec3i.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Vec3i` | `public Vec3i(int x = 0, int y = 0, int z = 0)` | constructor |
| `operator` | `public static bool operator` | operator |
| `!` | `public static bool operator !` | operator |
| `ToVec3` | `public Vec3 ToVec3()` | method |
| `this[...]` | `public int this[int index]` | indexer |
| `*` | `public static Vec3i operator *(Vec3i v, int mult)` | operator |
| `+` | `public static Vec3i operator +(Vec3i v1, Vec3i v2)` | operator |
| `-` | `public static Vec3i operator -(Vec3i v1, Vec3i v2)` | operator |
| `Equals` | `public override bool Equals(object obj)` | method |
| `GetHashCode` | `public override int GetHashCode()` | method |
| `ToString` | `public override string ToString()` | method |
| `Zero` | `public static readonly Vec3i Zero` | field |

## See Also

- [↑ library module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AmbientInformation](../AmbientInformation)
- [same namespace ApplicationPlatform](../ApplicationPlatform)
- [same namespace ApplicationVersion](../ApplicationVersion)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
