---
title: "PartyThinkParams"
description: "PartyThinkParams: a public class in TaleWorlds.CampaignSystem; 9 exposed members (6 methods, 2 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/PartyThinkParams.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PartyThinkParams

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class PartyThinkParams`
**File:** `TaleWorlds.CampaignSystem/PartyThinkParams.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

PartyThinkParams lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/PartyThinkParams.cs. It is a public class; the inheritance chain is PartyThinkParams. It exposes 9 public/protected members: 6 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PartyThinkParams lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem`, inheritance chain PartyThinkParams. The surface is method-led (methods 6/9, properties 2/9), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/PartyThinkParams.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `float>>AIBehaviorScores` | `public MBReadOnlyList<ValueTuple<AIBehaviorData, float>>AIBehaviorScores` | property |
| `MBReadOnlyList` | `public MBReadOnlyList<MobileParty>PossibleArmyMembersUponArmyCreation` | property |
| `PartyThinkParams` | `public PartyThinkParams(MobileParty mobileParty)` | constructor |
| `Reset` | `public void Reset(MobileParty mobileParty)` | method |
| `Initialization` | `public void Initialization()` | method |
| `SetArmyMembers` | `public void SetArmyMembers(MBList<MobileParty>armyMembers)` | method |
| `TryGetBehaviorScore` | `public bool TryGetBehaviorScore(in AIBehaviorData aiBehaviorData, out float score)` | method |
| `SetBehaviorScore` | `public void SetBehaviorScore(in AIBehaviorData aiBehaviorData, float score)` | method |
| `AddBehaviorScore` | `public void AddBehaviorScore(in ValueTuple<AIBehaviorData, float>value)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionNotes](../ActionNotes/)
- [same namespace AIBehaviorData](../AIBehaviorData/)
- [same namespace Army](../Army/)
- [same namespace AtmosphereGrid](../AtmosphereGrid/)
