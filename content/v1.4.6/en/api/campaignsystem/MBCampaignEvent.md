---
title: "MBCampaignEvent"
description: "MBCampaignEvent: a public class in TaleWorlds.CampaignSystem; 13 exposed members (6 methods, 3 properties, 1 fields). Source: TaleWorlds.CampaignSystem/MBCampaignEvent.cs."
---
# MBCampaignEvent

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class MBCampaignEvent`
**File:** `TaleWorlds.CampaignSystem/MBCampaignEvent.cs`

## Overview

MBCampaignEvent lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/MBCampaignEvent.cs. It is a public class; the inheritance chain is MBCampaignEvent. It exposes 13 public/protected members: 6 methods, 3 properties, 1 fields, 2 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MBCampaignEvent is a top-level type in TaleWorlds.CampaignSystem, namespace matching the module directory; inheritance chain MBCampaignEvent. The surface is method-led (methods 6/13, properties 3/13), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/MBCampaignEvent.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TriggerPeriod` | `public CampaignTime TriggerPeriod` | property |
| `InitialWait` | `public CampaignTime InitialWait` | property |
| `isEventDeleted` | `public bool isEventDeleted` | property |
| `MBCampaignEvent` | `public MBCampaignEvent(string eventName)` | constructor |
| `MBCampaignEvent` | `public MBCampaignEvent(CampaignTime triggerPeriod, CampaignTime initialWait)` | constructor |
| `AddHandler` | `public void AddHandler(MBCampaignEvent.CampaignEventDelegate gameEventDelegate)` | method |
| `RunHandlers` | `public void RunHandlers(params object[]delegateParams)` | method |
| `Unregister` | `public void Unregister(object instance)` | method |
| `CheckUpdate` | `public void CheckUpdate()` | method |
| `DeletePeriodicEvent` | `public void DeletePeriodicEvent()` | method |
| `List` | `protected List<MBCampaignEvent.CampaignEventDelegate>handlers` | field |
| `CampaignEventDelegate` | `public delegate void CampaignEventDelegate(MBCampaignEvent campaignEvent, params object[]delegateParams);` | method |
| `CampaignEventDelegate` | `public delegate void CampaignEventDelegate(MBCampaignEvent campaignEvent, params object[]delegateParams)` | nested type |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionNotes](../ActionNotes)
- [same namespace AIBehaviorData](../AIBehaviorData)
- [same namespace Army](../Army)
- [same namespace AtmosphereGrid](../AtmosphereGrid)
