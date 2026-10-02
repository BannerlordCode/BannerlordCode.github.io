---
title: "MbEvent<T1,T2,T3,T4,T5,T6>"
description: "MbEvent<T1,T2,T3,T4,T5,T6>: a public class in TaleWorlds.CampaignSystem, inheriting IMbEvent<T1, T2, T3, T4, T5, T6>, IMbEventBase; 3 exposed members (3 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/MbEvent.7.cs."
---
# MbEvent<T1,T2,T3,T4,T5,T6>

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class MbEvent<T1, T2, T3, T4, T5, T6>: IMbEvent<T1, T2, T3, T4, T5, T6>, IMbEventBase`
**File:** `TaleWorlds.CampaignSystem/MbEvent.7.cs`

## Overview

MbEvent<T1,T2,T3,T4,T5,T6> lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/MbEvent.7.cs. It is a public class, implementing/inheriting IMbEvent<T1, T2, T3, T4, T5, T6>, IMbEventBase; the inheritance chain is MbEvent → IMbEvent. It exposes 3 public/protected members: 3 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MbEvent<T1,T2,T3,T4,T5,T6> is a top-level type in TaleWorlds.CampaignSystem, namespace matching the module directory; inheritance chain MbEvent → IMbEvent. The surface is method-led (methods 3/3, properties 0/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/MbEvent.7.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AddNonSerializedListener` | `public void AddNonSerializedListener(object owner, Action<T1, T2, T3, T4, T5, T6>action)` | method |
| `Invoke` | `public void Invoke(T1 t1, T2 t2, T3 t3, T4 t4, T5 t5, T6 t6)` | method |
| `ClearListeners` | `public void ClearListeners(object o)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface IMbEvent](../IMbEvent)
- [base / interface IMbEventBase](../IMbEventBase)
- [same namespace ActionNotes](../ActionNotes)
- [same namespace AIBehaviorData](../AIBehaviorData)
- [same namespace Army](../Army)
- [same namespace AtmosphereGrid](../AtmosphereGrid)
