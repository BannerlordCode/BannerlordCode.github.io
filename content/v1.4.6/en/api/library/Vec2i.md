---
title: "Vec2i"
description: "Vec2i: a public struct in TaleWorlds.Library, inheriting IEquatable<Vec2i>; 12 exposed members (5 methods, 2 properties, 4 fields). Source: TaleWorlds.Library/Vec2i.cs."
---
# Vec2i

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public struct Vec2i : IEquatable<Vec2i>`
**File:** `TaleWorlds.Library/Vec2i.cs`

## Overview

Vec2i lives in the TaleWorlds.Library module, source file TaleWorlds.Library/Vec2i.cs. It is a public struct, implementing/inheriting IEquatable<Vec2i>; the inheritance chain is Vec2i → IEquatable. It exposes 12 public/protected members: 5 methods, 2 properties, 4 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Vec2i is a top-level type in TaleWorlds.Library, namespace matching the module directory; inheritance chain Vec2i → IEquatable. The surface is method-led (methods 5/12, properties 2/12), so it mostly exposes operations. IEquatable on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/Vec2i.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ library module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AmbientInformation](../AmbientInformation)
- [same namespace ApplicationPlatform](../ApplicationPlatform)
- [same namespace ApplicationVersion](../ApplicationVersion)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
