---
title: "ITrackableCampaignObject"
description: "ITrackableCampaignObject: a public interface in TaleWorlds.CampaignSystem, inheriting ITrackableBase; 2 exposed members (1 methods, 1 properties, 0 fields). Source: TaleWorlds.CampaignSystem/ITrackableCampaignObject.cs."
---
# ITrackableCampaignObject

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface ITrackableCampaignObject : ITrackableBase`
**File:** `TaleWorlds.CampaignSystem/ITrackableCampaignObject.cs`

## Overview

ITrackableCampaignObject lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ITrackableCampaignObject.cs. It is a public interface, implementing/inheriting ITrackableBase; the inheritance chain is ITrackableCampaignObject → ITrackableBase. It exposes 2 public/protected members: 1 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ITrackableCampaignObject is a top-level type in TaleWorlds.CampaignSystem, namespace matching the module directory; inheritance chain ITrackableCampaignObject → ITrackableBase. The surface is method-led (methods 1/2, properties 1/2), so it mostly exposes operations. ITrackableBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ITrackableCampaignObject.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetBanner` | `Banner GetBanner();` | method |
| `IsReady` | `bool IsReady` | property |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionNotes](../ActionNotes)
- [same namespace AIBehaviorData](../AIBehaviorData)
- [same namespace Army](../Army)
- [same namespace AtmosphereGrid](../AtmosphereGrid)
