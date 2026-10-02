---
title: "IActivityService"
description: "IActivityService: a public interface in TaleWorlds.ActivitySystem; 6 exposed members (6 methods, 0 properties, 0 fields). Source: TaleWorlds.ActivitySystem/IActivityService.cs."
---
# IActivityService

**Namespace:** `TaleWorlds.ActivitySystem`
**Module:** `TaleWorlds.ActivitySystem`
**Type:** `public interface IActivityService`
**File:** `TaleWorlds.ActivitySystem/IActivityService.cs`

## Overview

IActivityService lives in the TaleWorlds.ActivitySystem module, source file TaleWorlds.ActivitySystem/IActivityService.cs. It is a public interface; the inheritance chain is IActivityService. It exposes 6 public/protected members: 6 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IActivityService is a top-level type in TaleWorlds.ActivitySystem, namespace matching the module directory; inheritance chain IActivityService. The surface is method-led (methods 6/6, properties 0/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.ActivitySystem/IActivityService.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `StartActivity` | `bool StartActivity(string activityId);` | method |
| `EndActivity` | `bool EndActivity(string activityId, ActivityOutcome outcome);` | method |
| `Task` | `Task<Activity>GetActivity(string activityId);` | method |
| `SetAvailability` | `bool SetAvailability(string activityId, bool isAvailable);` | method |
| `IsInitializationCompleted` | `bool IsInitializationCompleted();` | method |
| `GetActivityTransition` | `ActivityTransition GetActivityTransition(string activityId);` | method |

## See Also

- [↑ activitysystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace Activity](../Activity)
- [same namespace ActivityManager](../ActivityManager)
- [same namespace ActivityOutcome](../ActivityOutcome)
- [same namespace ActivityTransition](../ActivityTransition)
