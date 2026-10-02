---
title: "Color"
description: "Color: a public struct in TaleWorlds.Library; 23 exposed members (20 methods, 2 properties, 0 fields). Source: TaleWorlds.Library/Color.cs."
---
# Color

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public struct Color`
**File:** `TaleWorlds.Library/Color.cs`

## Overview

Color lives in the TaleWorlds.Library module, source file TaleWorlds.Library/Color.cs. It is a public struct; the inheritance chain is Color. It exposes 23 public/protected members: 20 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Color is a top-level type in TaleWorlds.Library, namespace matching the module directory; inheritance chain Color. The surface is method-led (methods 20/23, properties 2/23), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/Color.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Color` | `public Color(float red, float green, float blue, float alpha = 1f)` | constructor |
| `ToVector3` | `public Vector3 ToVector3()` | method |
| `ToVec3` | `public Vec3 ToVec3()` | method |
| `*` | `public static Color operator *(Color c, float f)` | operator |
| `*` | `public static Color operator *(Color c1, Color c2)` | operator |
| `+` | `public static Color operator +(Color c1, Color c2)` | operator |
| `-` | `public static Color operator -(Color c1, Color c2)` | operator |
| `Black` | `public static Color Black` | property |
| `White` | `public static Color White` | property |
| `operator` | `public static bool operator` | operator |
| `!` | `public static bool operator !` | operator |
| `GetHashCode` | `public override int GetHashCode()` | method |
| `Equals` | `public override bool Equals(object obj)` | method |
| `FromVector3` | `public static Color FromVector3(Vector3 vector3)` | method |
| `FromVector3` | `public static Color FromVector3(Vec3 vector3)` | method |
| `Length` | `public float Length()` | method |
| `ToUnsignedInteger` | `public uint ToUnsignedInteger()` | method |
| `FromUint` | `public static Color FromUint(uint color)` | method |
| `FromHSV` | `public static Color FromHSV(float h, float s, float v)` | method |
| `ConvertStringToColor` | `public static Color ConvertStringToColor(string color)` | method |
| `Lerp` | `public static Color Lerp(Color start, Color end, float ratio)` | method |
| `ToString` | `public override string ToString()` | method |
| `UIntToColorString` | `public static string UIntToColorString(uint color)` | method |

## See Also

- [↑ library module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AmbientInformation](../AmbientInformation)
- [same namespace ApplicationPlatform](../ApplicationPlatform)
- [same namespace ApplicationVersion](../ApplicationVersion)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
