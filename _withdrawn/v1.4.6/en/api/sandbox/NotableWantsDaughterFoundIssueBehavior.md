---
title: "NotableWantsDaughterFoundIssueBehavior"
description: "NotableWantsDaughterFoundIssueBehavior: a public class in SandBox.Issues, inheriting CampaignBehaviorBase; 9 exposed members (3 methods, 3 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/Issues/NotableWantsDaughterFoundIssueBehavior.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# NotableWantsDaughterFoundIssueBehavior

**Namespace:** `SandBox.Issues`
**Module:** `SandBox`
**Type:** `public class NotableWantsDaughterFoundIssueBehavior : CampaignBehaviorBase`
**File:** `SandBox/Issues/NotableWantsDaughterFoundIssueBehavior.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

NotableWantsDaughterFoundIssueBehavior lives in the SandBox module, source file SandBox/Issues/NotableWantsDaughterFoundIssueBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase; the inheritance chain is NotableWantsDaughterFoundIssueBehavior → CampaignBehaviorBase → ICampaignBehavior. It exposes 9 public/protected members: 3 methods, 3 properties, 3 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: NotableWantsDaughterFoundIssueBehavior lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Issues`, inheritance chain NotableWantsDaughterFoundIssueBehavior → CampaignBehaviorBase → ICampaignBehavior. The surface is method-led (methods 3/9, properties 3/9), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Issues/NotableWantsDaughterFoundIssueBehavior.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `OnCheckForIssue` | `public void OnCheckForIssue(Hero hero)` | method |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |
| `SaveableTypeDefiner` | `public class NotableWantsDaughterFoundIssueTypeDefiner : SaveableTypeDefiner` | property |
| `IssueBase` | `public class NotableWantsDaughterFoundIssue : IssueBase` | property |
| `QuestBase` | `public class NotableWantsDaughterFoundIssueQuest : QuestBase` | property |
| `SaveableTypeDefiner` | `public class NotableWantsDaughterFoundIssueTypeDefiner : SaveableTypeDefiner` | nested type |
| `IssueBase` | `public class NotableWantsDaughterFoundIssue : IssueBase` | nested type |
| `QuestBase` | `public class NotableWantsDaughterFoundIssueQuest : QuestBase` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace FamilyFeudIssueBehavior](../FamilyFeudIssueBehavior/)
- [same namespace ProdigalSonIssueBehavior](../ProdigalSonIssueBehavior/)
- [same namespace RivalGangMovingInIssueBehavior](../RivalGangMovingInIssueBehavior/)
- [same namespace RuralNotableInnAndOutIssueBehavior](../RuralNotableInnAndOutIssueBehavior/)
