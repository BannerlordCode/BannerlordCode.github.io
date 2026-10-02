---
title: "MathF"
description: "MathF: a public class in TaleWorlds.Library; 67 exposed members (60 methods, 0 properties, 7 fields). Canonical bucket core-extra. Source: TaleWorlds.Library/MathF.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MathF

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public static class MathF`
**File:** `TaleWorlds.Library/MathF.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## Overview

MathF lives in the TaleWorlds.Library module, source file TaleWorlds.Library/MathF.cs. It is a public class; the inheritance chain is MathF. It exposes 67 public/protected members: 60 methods, 7 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MathF lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Library`), namespace `TaleWorlds.Library`, inheritance chain MathF. The surface is method-led (methods 60/67, properties 0/67), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/MathF.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Sqrt` | `public static float Sqrt(float x)` | method |
| `Sin` | `public static float Sin(float x)` | method |
| `Asin` | `public static float Asin(float x)` | method |
| `Cos` | `public static float Cos(float x)` | method |
| `Acos` | `public static float Acos(float x)` | method |
| `Tan` | `public static float Tan(float x)` | method |
| `Tanh` | `public static float Tanh(float x)` | method |
| `Atan` | `public static float Atan(float x)` | method |
| `Atan2` | `public static float Atan2(float y, float x)` | method |
| `Pow` | `public static double Pow(double x, double y)` | method |
| `Pow` | `public static double Pow(float x, double y)` | method |
| `Pow` | `public static double Pow(double x, float y)` | method |
| `Pow` | `public static float Pow(float x, float y)` | method |
| `PowTwo32` | `public static int PowTwo32(int x)` | method |
| `PowTwo64` | `public static ulong PowTwo64(int x)` | method |
| `IsValidValue` | `public static bool IsValidValue(float f)` | method |
| `Clamp` | `public static float Clamp(float value, float minValue, float maxValue)` | method |
| `AngleClamp` | `public static float AngleClamp(float angle)` | method |
| `Lerp` | `public static float Lerp(float valueFrom, float valueTo, float amount, float minimumDifference = 1E-05f)` | method |
| `Lerp` | `public static float Lerp(float valueFrom, float valueTo, int amount, float minimumDifference = 1E-05f)` | method |
| `AngleLerp` | `public static float AngleLerp(float angleFrom, float angleTo, float amount, float minimumDifference = 1E-05f)` | method |
| `Round` | `public static int Round(double f)` | method |
| `Round` | `public static int Round(float f)` | method |
| `Round` | `public static float Round(float f, int digits)` | method |
| `Round` | `public static int Round(int f)` | method |
| `Floor` | `public static int Floor(double f)` | method |
| `Floor` | `public static int Floor(float f)` | method |
| `Floor` | `public static int Floor(int f)` | method |
| `Ceiling` | `public static int Ceiling(double f)` | method |
| `Ceiling` | `public static int Ceiling(float f)` | method |
| `Ceiling` | `public static int Ceiling(int f)` | method |
| `Abs` | `public static double Abs(double f)` | method |
| `Abs` | `public static float Abs(float f)` | method |
| `Abs` | `public static int Abs(int f)` | method |
| `Max` | `public static double Max(double a, double b)` | method |
| `Max` | `public static float Max(float a, float b)` | method |
| `float>MinMax` | `public static ValueTuple<float, float>MinMax(float a, float b)` | method |
| `Max` | `public static float Max(float a, int b)` | method |
| `Max` | `public static float Max(int a, float b)` | method |
| `Max` | `public static int Max(int a, int b)` | method |
| `Max` | `public static long Max(long a, long b)` | method |
| `Max` | `public static uint Max(uint a, uint b)` | method |
| `Max` | `public static float Max(float a, float b, float c)` | method |
| `Min` | `public static double Min(double a, double b)` | method |
| `Min` | `public static float Min(float a, float b)` | method |
| `Min` | `public static short Min(short a, short b)` | method |
| `Min` | `public static int Min(int a, int b)` | method |
| `Min` | `public static long Min(long a, long b)` | method |
| `Min` | `public static uint Min(uint a, uint b)` | method |
| `Min` | `public static int Min(int a, float b)` | method |
| `Min` | `public static int Min(float a, int b)` | method |
| `Min` | `public static float Min(float a, float b, float c)` | method |
| `PingPong` | `public static float PingPong(float min, float max, float time)` | method |
| `GreatestCommonDivisor` | `public static int GreatestCommonDivisor(int a, int b)` | method |
| `Log` | `public static float Log(float a)` | method |
| `Log` | `public static float Log(float a, float newBase)` | method |
| `Sign` | `public static int Sign(float f)` | method |
| `Sign` | `public static int Sign(int f)` | method |
| `SinCos` | `public static void SinCos(float a, out float sa, out float ca)` | method |
| `Log10` | `public static float Log10(float val)` | method |
| `DegToRad` | `public const float DegToRad` | field |
| `RadToDeg` | `public const float RadToDeg` | field |
| `TwoPI` | `public const float TwoPI` | field |
| `PI` | `public const float PI` | field |
| `HalfPI` | `public const float HalfPI` | field |
| `E` | `public const float E` | field |
| `Epsilon` | `public const float Epsilon` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AmbientInformation](../AmbientInformation/)
- [same namespace ApplicationPlatform](../ApplicationPlatform/)
- [same namespace ApplicationVersion](../ApplicationVersion/)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter/)
