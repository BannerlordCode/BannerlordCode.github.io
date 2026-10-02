---
title: "ReferenceMBEvent<T1>"
description: "ReferenceMBEvent<T1>: a public class in TaleWorlds.CampaignSystem, inheriting ReferenceIMBEvent<T1>, IMbEventBase; 3 exposed members (3 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/ReferenceMBEvent.cs."
---
# ReferenceMBEvent<T1>

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class ReferenceMBEvent<T1>: ReferenceIMBEvent<T1>, IMbEventBase`
**File:** `TaleWorlds.CampaignSystem/ReferenceMBEvent.cs`

## Overview

ReferenceMBEvent<T1> lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ReferenceMBEvent.cs. It is a public class, implementing/inheriting ReferenceIMBEvent<T1>, IMbEventBase; the inheritance chain is ReferenceMBEvent → ReferenceIMBEvent → IMbEventBase. It exposes 3 public/protected members: 3 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ReferenceMBEvent<T1> is a top-level type in TaleWorlds.CampaignSystem, namespace matching the module directory; inheritance chain ReferenceMBEvent → ReferenceIMBEvent → IMbEventBase. The surface is method-led (methods 3/3, properties 0/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ReferenceMBEvent.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AddNonSerializedListener` | `public void AddNonSerializedListener(object owner, ReferenceAction<T1>action)` | method |
| `Invoke` | `public void Invoke(ref T1 t1)` | method |
| `ClearListeners` | `public void ClearListeners(object o)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface ReferenceIMBEvent](../ReferenceIMBEvent__1)
- [base / interface IMbEventBase](../IMbEventBase)
- [same namespace ActionNotes](../ActionNotes)
- [same namespace AIBehaviorData](../AIBehaviorData)
- [same namespace Army](../Army)
- [same namespace AtmosphereGrid](../AtmosphereGrid)
