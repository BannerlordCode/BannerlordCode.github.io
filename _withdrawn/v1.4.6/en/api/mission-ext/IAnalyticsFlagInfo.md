---
title: "IAnalyticsFlagInfo"
description: "IAnalyticsFlagInfo: a public interface in TaleWorlds.MountAndBlade, inheriting IMissionBehavior; 2 exposed members (1 methods, 1 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/IAnalyticsFlagInfo.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IAnalyticsFlagInfo

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public interface IAnalyticsFlagInfo : IMissionBehavior`
**File:** `TaleWorlds.MountAndBlade/IAnalyticsFlagInfo.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

IAnalyticsFlagInfo lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/IAnalyticsFlagInfo.cs. It is a public interface, implementing/inheriting IMissionBehavior; the inheritance chain is IAnalyticsFlagInfo → IMissionBehavior. It exposes 2 public/protected members: 1 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IAnalyticsFlagInfo lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain IAnalyticsFlagInfo → IMissionBehavior. The surface is method-led (methods 1/2, properties 1/2), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/IAnalyticsFlagInfo.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MBReadOnlyList` | `MBReadOnlyList<FlagCapturePoint>AllCapturePoints` | property |
| `GetFlagOwnerTeam` | `Team GetFlagOwnerTeam(FlagCapturePoint flag);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IMissionBehavior](../IMissionBehavior/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
