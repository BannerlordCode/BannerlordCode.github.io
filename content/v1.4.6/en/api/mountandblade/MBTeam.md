---
title: "MBTeam"
description: "MBTeam: a public struct in TaleWorlds.MountAndBlade; 9 exposed members (7 methods, 2 properties, 0 fields). Source: TaleWorlds.MountAndBlade/MBTeam.cs."
---
# MBTeam

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public struct MBTeam`
**File:** `TaleWorlds.MountAndBlade/MBTeam.cs`

## Overview

MBTeam lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MBTeam.cs. It is a public struct; the inheritance chain is MBTeam. It exposes 9 public/protected members: 7 methods, 2 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MBTeam is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain MBTeam. The surface is method-led (methods 7/9, properties 2/9), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MBTeam.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `InvalidTeam` | `public static MBTeam InvalidTeam` | property |
| `GetHashCode` | `public override int GetHashCode()` | method |
| `Equals` | `public override bool Equals(object obj)` | method |
| `operator` | `public static bool operator` | operator |
| `!` | `public static bool operator !` | operator |
| `IsValid` | `public bool IsValid` | property |
| `IsEnemyOf` | `public bool IsEnemyOf(MBTeam otherTeam)` | method |
| `SetIsEnemyOf` | `public void SetIsEnemyOf(MBTeam otherTeam, bool isEnemyOf)` | method |
| `ToString` | `public override string ToString()` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
