---
title: "MBTeam"
description: "MBTeam: a public struct in TaleWorlds.MountAndBlade; 9 exposed members (7 methods, 2 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/MBTeam.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MBTeam

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public struct MBTeam`
**File:** `TaleWorlds.MountAndBlade/MBTeam.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MBTeam lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MBTeam.cs. It is a public struct; the inheritance chain is MBTeam. It exposes 9 public/protected members: 7 methods, 2 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MBTeam lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain MBTeam. The surface is method-led (methods 7/9, properties 2/9), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MBTeam.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
