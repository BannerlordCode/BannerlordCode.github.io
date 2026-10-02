---
title: "ActivityManager"
description: "ActivityManager: a public class in TaleWorlds.ActivitySystem; 6 exposed members (5 methods, 1 properties, 0 fields). Canonical bucket activitysystem. Source: TaleWorlds.ActivitySystem/ActivityManager.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ActivityManager

**Namespace:** `TaleWorlds.ActivitySystem`
**Module:** `TaleWorlds.ActivitySystem`
**Type:** `public class ActivityManager`
**File:** `TaleWorlds.ActivitySystem/ActivityManager.cs`
**Bucket:** `activitysystem` (rule:TaleWorlds.ActivitySystem)

## Overview

ActivityManager lives in the TaleWorlds.ActivitySystem module, source file TaleWorlds.ActivitySystem/ActivityManager.cs. It is a public class; the inheritance chain is ActivityManager. It exposes 6 public/protected members: 5 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ActivityManager lands in canonical bucket `activitysystem` (matched rule `rule:TaleWorlds.ActivitySystem`), namespace `TaleWorlds.ActivitySystem`, inheritance chain ActivityManager. The surface is method-led (methods 5/6, properties 1/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.ActivitySystem/ActivityManager.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ActivityService` | `public static IActivityService ActivityService` | property |
| `StartActivity` | `public static bool StartActivity(string activityId)` | method |
| `EndActivity` | `public static bool EndActivity(string activityId, ActivityOutcome outcome)` | method |
| `SetActivityAvailability` | `public static bool SetActivityAvailability(string activityId, bool isAvailable)` | method |
| `Task` | `public static Task<Activity>GetActivity(string activityId)` | method |
| `GetActivityTransition` | `public static ActivityTransition GetActivityTransition(string activityId)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace Activity](../Activity/)
- [same namespace ActivityOutcome](../ActivityOutcome/)
- [same namespace ActivityTransition](../ActivityTransition/)
- [same namespace IActivityService](../IActivityService/)
