---
title: "RuralNotableInnAndOutIssueBehavior"
description: "RuralNotableInnAndOutIssueBehavior: a public class in SandBox.Issues, inheriting CampaignBehaviorBase; 9 exposed members (3 methods, 3 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/Issues/RuralNotableInnAndOutIssueBehavior.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# RuralNotableInnAndOutIssueBehavior

**Namespace:** `SandBox.Issues`
**Module:** `SandBox`
**Type:** `public class RuralNotableInnAndOutIssueBehavior : CampaignBehaviorBase`
**File:** `SandBox/Issues/RuralNotableInnAndOutIssueBehavior.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

RuralNotableInnAndOutIssueBehavior lives in the SandBox module, source file SandBox/Issues/RuralNotableInnAndOutIssueBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase; the inheritance chain is RuralNotableInnAndOutIssueBehavior → CampaignBehaviorBase → ICampaignBehavior. It exposes 9 public/protected members: 3 methods, 3 properties, 3 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: RuralNotableInnAndOutIssueBehavior lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Issues`, inheritance chain RuralNotableInnAndOutIssueBehavior → CampaignBehaviorBase → ICampaignBehavior. The surface is method-led (methods 3/9, properties 3/9), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Issues/RuralNotableInnAndOutIssueBehavior.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |
| `OnCheckForIssue` | `public void OnCheckForIssue(Hero hero)` | method |
| `SaveableTypeDefiner` | `public class RuralNotableInnAndOutIssueTypeDefiner : SaveableTypeDefiner` | property |
| `IssueBase` | `public class RuralNotableInnAndOutIssue : IssueBase` | property |
| `QuestBase` | `public class RuralNotableInnAndOutIssueQuest : QuestBase` | property |
| `SaveableTypeDefiner` | `public class RuralNotableInnAndOutIssueTypeDefiner : SaveableTypeDefiner` | nested type |
| `IssueBase` | `public class RuralNotableInnAndOutIssue : IssueBase` | nested type |
| `QuestBase` | `public class RuralNotableInnAndOutIssueQuest : QuestBase` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace FamilyFeudIssueBehavior](../FamilyFeudIssueBehavior/)
- [same namespace NotableWantsDaughterFoundIssueBehavior](../NotableWantsDaughterFoundIssueBehavior/)
- [same namespace ProdigalSonIssueBehavior](../ProdigalSonIssueBehavior/)
- [same namespace RivalGangMovingInIssueBehavior](../RivalGangMovingInIssueBehavior/)
