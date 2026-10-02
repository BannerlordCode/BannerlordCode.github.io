---
title: "CampaignEntityComponent"
description: "CampaignEntityComponent: a public class in TaleWorlds.CampaignSystem, inheriting IEntityComponent; 3 exposed members (3 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/CampaignEntityComponent.cs."
---
# CampaignEntityComponent

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class CampaignEntityComponent : IEntityComponent`
**File:** `TaleWorlds.CampaignSystem/CampaignEntityComponent.cs`

## Overview

CampaignEntityComponent lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/CampaignEntityComponent.cs. It is a public class, implementing/inheriting IEntityComponent; the inheritance chain is CampaignEntityComponent → IEntityComponent. It exposes 3 public/protected members: 3 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CampaignEntityComponent is a top-level type in TaleWorlds.CampaignSystem, namespace matching the module directory; inheritance chain CampaignEntityComponent → IEntityComponent. The surface is method-led (methods 3/3, properties 0/3), so it mostly exposes operations. IEntityComponent on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/CampaignEntityComponent.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnInitialize` | `protected virtual void OnInitialize()` | method |
| `OnFinalize` | `protected virtual void OnFinalize()` | method |
| `OnTick` | `public virtual void OnTick(float realDt, float dt)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionNotes](../ActionNotes)
- [same namespace AIBehaviorData](../AIBehaviorData)
- [same namespace Army](../Army)
- [same namespace AtmosphereGrid](../AtmosphereGrid)
