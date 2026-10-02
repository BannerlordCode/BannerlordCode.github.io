---
title: "MBCommon"
description: "MBCommon: a public class in TaleWorlds.MountAndBlade; 14 exposed members (7 methods, 5 properties, 0 fields). Source: TaleWorlds.MountAndBlade/MBCommon.cs."
---
# MBCommon

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MBCommon`
**File:** `TaleWorlds.MountAndBlade/MBCommon.cs`

## Overview

MBCommon lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MBCommon.cs. It is a public class; the inheritance chain is MBCommon. It exposes 14 public/protected members: 7 methods, 5 properties, 2 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MBCommon is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain MBCommon. The surface is method-led (methods 7/14, properties 5/14), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MBCommon.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CurrentGameType` | `public static MBCommon.GameType CurrentGameType` | property |
| `PauseGameEngine` | `public static void PauseGameEngine()` | method |
| `UnPauseGameEngine` | `public static void UnPauseGameEngine()` | method |
| `GetApplicationTime` | `public static float GetApplicationTime()` | method |
| `GetTotalMissionTime` | `public static float GetTotalMissionTime()` | method |
| `IsDebugMode` | `public static bool IsDebugMode` | property |
| `FixSkeletons` | `public static void FixSkeletons()` | method |
| `IsPaused` | `public static bool IsPaused` | property |
| `CheckResourceModifications` | `public static void CheckResourceModifications()` | method |
| `Hash` | `public static int Hash(int i, object o)` | method |
| `GameType` | `public enum GameType` | property |
| `TimeType` | `public enum TimeType` | property |
| `GameType` | `public enum GameType` | nested type |
| `TimeType` | `public enum TimeType` | nested type |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
