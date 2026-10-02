---
title: "PartyThinkParams"
description: "PartyThinkParams: a public class in TaleWorlds.CampaignSystem; 9 exposed members (6 methods, 2 properties, 0 fields). Source: TaleWorlds.CampaignSystem/PartyThinkParams.cs."
---
# PartyThinkParams

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class PartyThinkParams`
**File:** `TaleWorlds.CampaignSystem/PartyThinkParams.cs`

## Overview

PartyThinkParams lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/PartyThinkParams.cs. It is a public class; the inheritance chain is PartyThinkParams. It exposes 9 public/protected members: 6 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PartyThinkParams is a top-level type in TaleWorlds.CampaignSystem, namespace matching the module directory; inheritance chain PartyThinkParams. The surface is method-led (methods 6/9, properties 2/9), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/PartyThinkParams.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionNotes](../ActionNotes)
- [same namespace AIBehaviorData](../AIBehaviorData)
- [same namespace Army](../Army)
- [same namespace AtmosphereGrid](../AtmosphereGrid)
