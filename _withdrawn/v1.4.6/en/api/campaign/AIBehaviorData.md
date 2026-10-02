---
title: "AIBehaviorData"
description: "AIBehaviorData: a public struct in TaleWorlds.CampaignSystem, inheriting IEquatable<AIBehaviorData>; 8 exposed members (5 methods, 0 properties, 1 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/AIBehaviorData.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# AIBehaviorData

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public struct AIBehaviorData : IEquatable<AIBehaviorData>`
**File:** `TaleWorlds.CampaignSystem/AIBehaviorData.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

AIBehaviorData lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/AIBehaviorData.cs. It is a public struct, implementing/inheriting IEquatable<AIBehaviorData>; the inheritance chain is AIBehaviorData → IEquatable. It exposes 8 public/protected members: 5 methods, 1 fields, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AIBehaviorData lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem`, inheritance chain AIBehaviorData → IEquatable. The surface is method-led (methods 5/8, properties 0/8), so it mostly exposes operations. IEquatable on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/AIBehaviorData.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `AIBehaviorData` | `public AIBehaviorData(IMapPoint party, AiBehavior aiBehavior, MobileParty.NavigationType navigationType, bool willGatherArmy, bool isFromPort, bool isTargetingPort)` | constructor |
| `AIBehaviorData` | `public AIBehaviorData(CampaignVec2 position, AiBehavior aiBehavior, MobileParty.NavigationType navigationType, bool willGatherArmy, bool isFromPort, bool isTargetingPort)` | constructor |
| `Equals` | `public override bool Equals(object obj)` | method |
| `Equals` | `public bool Equals(AIBehaviorData other)` | method |
| `GetHashCode` | `public override int GetHashCode()` | method |
| `operator` | `public static bool operator` | operator |
| `!` | `public static bool operator !` | operator |
| `Invalid` | `public static readonly AIBehaviorData Invalid` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionNotes](../ActionNotes/)
- [same namespace Army](../Army/)
- [same namespace AtmosphereGrid](../AtmosphereGrid/)
- [same namespace BattleResultPartyData](../BattleResultPartyData/)
