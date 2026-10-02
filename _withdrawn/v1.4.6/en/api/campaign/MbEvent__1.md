---
title: "MbEvent<T>"
description: "MbEvent<T>: a public class in TaleWorlds.CampaignSystem, inheriting IMbEvent<T>, IMbEventBase; 3 exposed members (3 methods, 0 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/MbEvent.2.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MbEvent<T>

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class MbEvent<T>: IMbEvent<T>, IMbEventBase`
**File:** `TaleWorlds.CampaignSystem/MbEvent.2.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

MbEvent<T> lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/MbEvent.2.cs. It is a public class, implementing/inheriting IMbEvent<T>, IMbEventBase; the inheritance chain is MbEvent → IMbEvent. It exposes 3 public/protected members: 3 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MbEvent<T> lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem`, inheritance chain MbEvent → IMbEvent. The surface is method-led (methods 3/3, properties 0/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/MbEvent.2.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `AddNonSerializedListener` | `public void AddNonSerializedListener(object owner, Action<T>action)` | method |
| `Invoke` | `public void Invoke(T t)` | method |
| `ClearListeners` | `public void ClearListeners(object o)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IMbEvent](../IMbEvent/)
- [base / interface IMbEventBase](../IMbEventBase/)
- [same namespace ActionNotes](../ActionNotes/)
- [same namespace AIBehaviorData](../AIBehaviorData/)
- [same namespace Army](../Army/)
- [same namespace AtmosphereGrid](../AtmosphereGrid/)
