---
title: "RuralNotableInnAndOutIssueBehavior"
description: "RuralNotableInnAndOutIssueBehavior: a public class in SandBox, inheriting CampaignBehaviorBase; 9 exposed members (3 methods, 3 properties, 0 fields). Source: SandBox/Issues/RuralNotableInnAndOutIssueBehavior.cs."
---
# RuralNotableInnAndOutIssueBehavior

**Namespace:** `SandBox.Issues`
**Module:** `SandBox`
**Type:** `public class RuralNotableInnAndOutIssueBehavior : CampaignBehaviorBase`
**File:** `SandBox/Issues/RuralNotableInnAndOutIssueBehavior.cs`

## Overview

RuralNotableInnAndOutIssueBehavior lives in the SandBox module, source file SandBox/Issues/RuralNotableInnAndOutIssueBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase; the inheritance chain is RuralNotableInnAndOutIssueBehavior → CampaignBehaviorBase. It exposes 9 public/protected members: 3 methods, 3 properties, 3 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: RuralNotableInnAndOutIssueBehavior is a top-level type in SandBox, namespace differing from (SandBox.Issues) the module directory; inheritance chain RuralNotableInnAndOutIssueBehavior → CampaignBehaviorBase. The surface is method-led (methods 3/9, properties 3/9), so it mostly exposes operations. CampaignBehaviorBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Issues/RuralNotableInnAndOutIssueBehavior.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace FamilyFeudIssueBehavior](../FamilyFeudIssueBehavior)
- [same namespace NotableWantsDaughterFoundIssueBehavior](../NotableWantsDaughterFoundIssueBehavior)
- [same namespace ProdigalSonIssueBehavior](../ProdigalSonIssueBehavior)
- [same namespace RivalGangMovingInIssueBehavior](../RivalGangMovingInIssueBehavior)
