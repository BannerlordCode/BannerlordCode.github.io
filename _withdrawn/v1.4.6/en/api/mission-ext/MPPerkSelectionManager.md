---
title: "MPPerkSelectionManager"
description: "MPPerkSelectionManager: a public class in TaleWorlds.MountAndBlade; 9 exposed members (6 methods, 2 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/MPPerkSelectionManager.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MPPerkSelectionManager

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MPPerkSelectionManager`
**File:** `TaleWorlds.MountAndBlade/MPPerkSelectionManager.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MPPerkSelectionManager lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MPPerkSelectionManager.cs. It is a public class; the inheritance chain is MPPerkSelectionManager. It exposes 9 public/protected members: 6 methods, 2 properties, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MPPerkSelectionManager lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain MPPerkSelectionManager. The surface is method-led (methods 6/9, properties 2/9), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MPPerkSelectionManager.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Instance` | `public static MPPerkSelectionManager Instance` | property |
| `FreeInstance` | `public static void FreeInstance()` | method |
| `InitializeForUser` | `public void InitializeForUser(string username, PlayerId playerId)` | method |
| `ResetPendingChanges` | `public void ResetPendingChanges()` | method |
| `TryToApplyAndSavePendingChanges` | `public void TryToApplyAndSavePendingChanges()` | method |
| `List` | `public List<MPPerkSelectionManager.MPPerkSelection>GetSelectionsForHeroClass(MultiplayerClassDivisions.MPHeroClass currentHeroClass)` | method |
| `SetSelectionsForHeroClassTemporarily` | `public void SetSelectionsForHeroClassTemporarily(MultiplayerClassDivisions.MPHeroClass currentHeroClass, List<MPPerkSelectionManager.MPPerkSelection>perkChoices)` | method |
| `MPPerkSelection` | `public struct MPPerkSelection` | property |
| `MPPerkSelection` | `public struct MPPerkSelection` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
