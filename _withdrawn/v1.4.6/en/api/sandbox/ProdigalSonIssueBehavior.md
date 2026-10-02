---
title: "ProdigalSonIssueBehavior"
description: "ProdigalSonIssueBehavior: a public class in SandBox.Issues, inheriting CampaignBehaviorBase; 9 exposed members (3 methods, 3 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/Issues/ProdigalSonIssueBehavior.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ProdigalSonIssueBehavior

**Namespace:** `SandBox.Issues`
**Module:** `SandBox`
**Type:** `public class ProdigalSonIssueBehavior : CampaignBehaviorBase`
**File:** `SandBox/Issues/ProdigalSonIssueBehavior.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

ProdigalSonIssueBehavior lives in the SandBox module, source file SandBox/Issues/ProdigalSonIssueBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase; the inheritance chain is ProdigalSonIssueBehavior → CampaignBehaviorBase → ICampaignBehavior. It exposes 9 public/protected members: 3 methods, 3 properties, 3 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ProdigalSonIssueBehavior lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Issues`, inheritance chain ProdigalSonIssueBehavior → CampaignBehaviorBase → ICampaignBehavior. The surface is method-led (methods 3/9, properties 3/9), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Issues/ProdigalSonIssueBehavior.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |
| `CheckForIssue` | `public void CheckForIssue(Hero hero)` | method |
| `SaveableTypeDefiner` | `public class ProdigalSonIssueTypeDefiner : SaveableTypeDefiner` | property |
| `IssueBase` | `public class ProdigalSonIssue : IssueBase` | property |
| `QuestBase` | `public class ProdigalSonIssueQuest : QuestBase` | property |
| `SaveableTypeDefiner` | `public class ProdigalSonIssueTypeDefiner : SaveableTypeDefiner` | nested type |
| `IssueBase` | `public class ProdigalSonIssue : IssueBase` | nested type |
| `QuestBase` | `public class ProdigalSonIssueQuest : QuestBase` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace FamilyFeudIssueBehavior](../FamilyFeudIssueBehavior/)
- [same namespace NotableWantsDaughterFoundIssueBehavior](../NotableWantsDaughterFoundIssueBehavior/)
- [same namespace RivalGangMovingInIssueBehavior](../RivalGangMovingInIssueBehavior/)
- [same namespace RuralNotableInnAndOutIssueBehavior](../RuralNotableInnAndOutIssueBehavior/)
