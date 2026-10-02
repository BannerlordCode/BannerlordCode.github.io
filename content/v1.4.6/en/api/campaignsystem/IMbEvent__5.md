---
title: "IMbEvent<outT1,outT2,outT3,outT4,outT5>"
description: "IMbEvent<outT1,outT2,outT3,outT4,outT5>: a public interface in TaleWorlds.CampaignSystem, inheriting IMbEventBase; 1 exposed members (1 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/IMbEvent.6.cs."
---
# IMbEvent<outT1,outT2,outT3,outT4,outT5>

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface IMbEvent<out T1, out T2, out T3, out T4, out T5>: IMbEventBase`
**File:** `TaleWorlds.CampaignSystem/IMbEvent.6.cs`

## Overview

IMbEvent<outT1,outT2,outT3,outT4,outT5> lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/IMbEvent.6.cs. It is a public interface, implementing/inheriting IMbEventBase; the inheritance chain is IMbEvent → IMbEventBase. It exposes 1 public/protected members: 1 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IMbEvent<outT1,outT2,outT3,outT4,outT5> is a top-level type in TaleWorlds.CampaignSystem, namespace matching the module directory; inheritance chain IMbEvent → IMbEventBase. The surface is method-led (methods 1/1, properties 0/1), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/IMbEvent.6.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AddNonSerializedListener` | `void AddNonSerializedListener(object owner, Action<T1, T2, T3, T4, T5>action);` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface IMbEventBase](../IMbEventBase)
- [same namespace ActionNotes](../ActionNotes)
- [same namespace AIBehaviorData](../AIBehaviorData)
- [same namespace Army](../Army)
- [same namespace AtmosphereGrid](../AtmosphereGrid)
