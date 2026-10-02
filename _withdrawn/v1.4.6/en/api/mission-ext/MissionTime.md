---
title: "MissionTime"
description: "MissionTime: a public struct in TaleWorlds.MountAndBlade, inheriting IComparable<MissionTime>; 38 exposed members (18 methods, 14 properties, 5 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/MissionTime.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionTime

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public struct MissionTime : IComparable<MissionTime>`
**File:** `TaleWorlds.MountAndBlade/MissionTime.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MissionTime lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MissionTime.cs. It is a public struct, implementing/inheriting IComparable<MissionTime>; the inheritance chain is MissionTime → IComparable. It exposes 38 public/protected members: 18 methods, 14 properties, 5 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionTime lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain MissionTime → IComparable. The surface is method-led (methods 18/38, properties 14/38), so it mostly exposes operations. IComparable on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MissionTime.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `NumberOfTicks` | `public long NumberOfTicks` | property |
| `MissionTime` | `public MissionTime(long numberOfTicks)` | constructor |
| `DeltaTime` | `public static MissionTime DeltaTime` | property |
| `Now` | `public static MissionTime Now` | property |
| `IsFuture` | `public bool IsFuture` | property |
| `IsPast` | `public bool IsPast` | property |
| `IsNow` | `public bool IsNow` | property |
| `ElapsedHours` | `public float ElapsedHours` | property |
| `ElapsedSeconds` | `public float ElapsedSeconds` | property |
| `ElapsedMilliseconds` | `public float ElapsedMilliseconds` | property |
| `ToHours` | `public double ToHours` | property |
| `ToMinutes` | `public double ToMinutes` | property |
| `ToSeconds` | `public double ToSeconds` | property |
| `ToMilliseconds` | `public double ToMilliseconds` | property |
| `MillisecondsFromNow` | `public static MissionTime MillisecondsFromNow(float valueInMilliseconds)` | method |
| `SecondsFromNow` | `public static MissionTime SecondsFromNow(float valueInSeconds)` | method |
| `Equals` | `public bool Equals(MissionTime other)` | method |
| `Equals` | `public override bool Equals(object obj)` | method |
| `GetHashCode` | `public override int GetHashCode()` | method |
| `CompareTo` | `public int CompareTo(MissionTime other)` | method |
| `operator` | `public static bool operator<(MissionTime x, MissionTime y)` | operator |
| `operator>` | `public static bool operator>(MissionTime x, MissionTime y)` | operator |
| `operator` | `public static bool operator` | operator |
| `!` | `public static bool operator !` | operator |
| `operator` | `public static bool operator<=(MissionTime x, MissionTime y)` | operator |
| `operator>=` | `public static bool operator>=(MissionTime x, MissionTime y)` | operator |
| `Milliseconds` | `public static MissionTime Milliseconds(float valueInMilliseconds)` | method |
| `Seconds` | `public static MissionTime Seconds(float valueInSeconds)` | method |
| `Minutes` | `public static MissionTime Minutes(float valueInMinutes)` | method |
| `Hours` | `public static MissionTime Hours(float valueInHours)` | method |
| `Zero` | `public static MissionTime Zero` | property |
| `+` | `public static MissionTime operator +(MissionTime g1, MissionTime g2)` | operator |
| `-` | `public static MissionTime operator -(MissionTime g1, MissionTime g2)` | operator |
| `TimeTicksPerMilliSecond` | `public const long TimeTicksPerMilliSecond` | field |
| `TimeTicksPerSecond` | `public const long TimeTicksPerSecond` | field |
| `TimeTicksPerMinute` | `public const long TimeTicksPerMinute` | field |
| `TimeTicksPerHour` | `public const long TimeTicksPerHour` | field |
| `InvTimeTicksPerSecond` | `public const float InvTimeTicksPerSecond` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
