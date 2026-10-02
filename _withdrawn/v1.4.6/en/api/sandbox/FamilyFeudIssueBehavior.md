---
title: "FamilyFeudIssueBehavior"
description: "FamilyFeudIssueBehavior: a public class in SandBox.Issues, inheriting CampaignBehaviorBase; 11 exposed members (3 methods, 4 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/Issues/FamilyFeudIssueBehavior.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# FamilyFeudIssueBehavior

**Namespace:** `SandBox.Issues`
**Module:** `SandBox`
**Type:** `public class FamilyFeudIssueBehavior : CampaignBehaviorBase`
**File:** `SandBox/Issues/FamilyFeudIssueBehavior.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

FamilyFeudIssueBehavior lives in the SandBox module, source file SandBox/Issues/FamilyFeudIssueBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase; the inheritance chain is FamilyFeudIssueBehavior → CampaignBehaviorBase → ICampaignBehavior. It exposes 11 public/protected members: 3 methods, 4 properties, 4 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: FamilyFeudIssueBehavior lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Issues`, inheritance chain FamilyFeudIssueBehavior → CampaignBehaviorBase → ICampaignBehavior. The surface is property-led (properties 4/11, methods 3/11), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Issues/FamilyFeudIssueBehavior.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `OnCheckForIssue` | `public void OnCheckForIssue(Hero hero)` | method |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |
| `SaveableTypeDefiner` | `public class FamilyFeudIssueTypeDefiner : SaveableTypeDefiner` | property |
| `MissionLogic` | `public class FamilyFeudIssueMissionBehavior : MissionLogic` | property |
| `IssueBase` | `public class FamilyFeudIssue : IssueBase` | property |
| `QuestBase` | `public class FamilyFeudIssueQuest : QuestBase` | property |
| `SaveableTypeDefiner` | `public class FamilyFeudIssueTypeDefiner : SaveableTypeDefiner` | nested type |
| `MissionLogic` | `public class FamilyFeudIssueMissionBehavior : MissionLogic` | nested type |
| `IssueBase` | `public class FamilyFeudIssue : IssueBase` | nested type |
| `QuestBase` | `public class FamilyFeudIssueQuest : QuestBase` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace NotableWantsDaughterFoundIssueBehavior](../NotableWantsDaughterFoundIssueBehavior/)
- [same namespace ProdigalSonIssueBehavior](../ProdigalSonIssueBehavior/)
- [same namespace RivalGangMovingInIssueBehavior](../RivalGangMovingInIssueBehavior/)
- [same namespace RuralNotableInnAndOutIssueBehavior](../RuralNotableInnAndOutIssueBehavior/)
