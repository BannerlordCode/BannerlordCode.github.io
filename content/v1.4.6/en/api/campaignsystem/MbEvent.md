---
title: "MbEvent"
description: "MbEvent: a public class in TaleWorlds.CampaignSystem, inheriting IMbEvent; 3 exposed members (3 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/MbEvent.cs."
---
# MbEvent

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class MbEvent : IMbEvent`
**File:** `TaleWorlds.CampaignSystem/MbEvent.cs`

## Overview

MbEvent lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/MbEvent.cs. It is a public class, implementing/inheriting IMbEvent; the inheritance chain is MbEvent → IMbEvent. It exposes 3 public/protected members: 3 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MbEvent is a top-level type in TaleWorlds.CampaignSystem, namespace matching the module directory; inheritance chain MbEvent → IMbEvent. The surface is method-led (methods 3/3, properties 0/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/MbEvent.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AddNonSerializedListener` | `public void AddNonSerializedListener(object owner, Action action)` | method |
| `Invoke` | `public void Invoke()` | method |
| `ClearListeners` | `public void ClearListeners(object o)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface IMbEvent](../IMbEvent)
- [same namespace ActionNotes](../ActionNotes)
- [same namespace AIBehaviorData](../AIBehaviorData)
- [same namespace Army](../Army)
- [same namespace AtmosphereGrid](../AtmosphereGrid)
