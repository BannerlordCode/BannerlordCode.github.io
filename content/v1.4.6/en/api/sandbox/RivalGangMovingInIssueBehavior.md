---
title: "RivalGangMovingInIssueBehavior"
description: "RivalGangMovingInIssueBehavior: a public class in SandBox, inheriting CampaignBehaviorBase; 8 exposed members (2 methods, 3 properties, 0 fields). Source: SandBox/Issues/RivalGangMovingInIssueBehavior.cs."
---
# RivalGangMovingInIssueBehavior

**Namespace:** `SandBox.Issues`
**Module:** `SandBox`
**Type:** `public class RivalGangMovingInIssueBehavior : CampaignBehaviorBase`
**File:** `SandBox/Issues/RivalGangMovingInIssueBehavior.cs`

## Overview

RivalGangMovingInIssueBehavior lives in the SandBox module, source file SandBox/Issues/RivalGangMovingInIssueBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase; the inheritance chain is RivalGangMovingInIssueBehavior → CampaignBehaviorBase. It exposes 8 public/protected members: 2 methods, 3 properties, 3 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: RivalGangMovingInIssueBehavior is a top-level type in SandBox, namespace differing from (SandBox.Issues) the module directory; inheritance chain RivalGangMovingInIssueBehavior → CampaignBehaviorBase. The surface is property-led (properties 3/8, methods 2/8), so it mostly exposes state for reading. CampaignBehaviorBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Issues/RivalGangMovingInIssueBehavior.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |
| `SaveableTypeDefiner` | `public class RivalGangMovingInIssueTypeDefiner : SaveableTypeDefiner` | property |
| `IssueBase` | `public class RivalGangMovingInIssue : IssueBase` | property |
| `QuestBase` | `public class RivalGangMovingInIssueQuest : QuestBase` | property |
| `SaveableTypeDefiner` | `public class RivalGangMovingInIssueTypeDefiner : SaveableTypeDefiner` | nested type |
| `IssueBase` | `public class RivalGangMovingInIssue : IssueBase` | nested type |
| `QuestBase` | `public class RivalGangMovingInIssueQuest : QuestBase` | nested type |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace FamilyFeudIssueBehavior](../FamilyFeudIssueBehavior)
- [same namespace NotableWantsDaughterFoundIssueBehavior](../NotableWantsDaughterFoundIssueBehavior)
- [same namespace ProdigalSonIssueBehavior](../ProdigalSonIssueBehavior)
- [same namespace RuralNotableInnAndOutIssueBehavior](../RuralNotableInnAndOutIssueBehavior)
