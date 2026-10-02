---
title: "ICampaignBehaviorManager"
description: "ICampaignBehaviorManager: a public interface in TaleWorlds.CampaignSystem; 8 exposed members (8 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/ICampaignBehaviorManager.cs."
---
# ICampaignBehaviorManager

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface ICampaignBehaviorManager`
**File:** `TaleWorlds.CampaignSystem/ICampaignBehaviorManager.cs`

## Overview

ICampaignBehaviorManager lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ICampaignBehaviorManager.cs. It is a public interface; the inheritance chain is ICampaignBehaviorManager. It exposes 8 public/protected members: 8 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ICampaignBehaviorManager is a top-level type in TaleWorlds.CampaignSystem, namespace matching the module directory; inheritance chain ICampaignBehaviorManager. The surface is method-led (methods 8/8, properties 0/8), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ICampaignBehaviorManager.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RegisterEvents` | `void RegisterEvents();` | method |
| `GetBehavior` | `T GetBehavior<T>();` | method |
| `IEnumerable` | `IEnumerable<T>GetBehaviors<T>();` | method |
| `AddBehavior` | `void AddBehavior(CampaignBehaviorBase campaignBehavior);` | method |
| `RemoveBehavior` | `void RemoveBehavior<T>() where T : CampaignBehaviorBase;` | method |
| `ClearBehaviors` | `void ClearBehaviors();` | method |
| `LoadBehaviorData` | `void LoadBehaviorData();` | method |
| `InitializeCampaignBehaviors` | `void InitializeCampaignBehaviors(IEnumerable<CampaignBehaviorBase>inputComponents);` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionNotes](../ActionNotes)
- [same namespace AIBehaviorData](../AIBehaviorData)
- [same namespace Army](../Army)
- [same namespace AtmosphereGrid](../AtmosphereGrid)
