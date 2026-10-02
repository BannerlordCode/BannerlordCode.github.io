---
title: "IMbEvent"
description: "IMbEvent: a public interface in TaleWorlds.CampaignSystem; 2 exposed members (2 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/IMbEvent.cs."
---
# IMbEvent

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface IMbEvent`
**File:** `TaleWorlds.CampaignSystem/IMbEvent.cs`

## Overview

IMbEvent lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/IMbEvent.cs. It is a public interface; the inheritance chain is IMbEvent. It exposes 2 public/protected members: 2 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IMbEvent is a top-level type in TaleWorlds.CampaignSystem, namespace matching the module directory; inheritance chain IMbEvent. The surface is method-led (methods 2/2, properties 0/2), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/IMbEvent.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AddNonSerializedListener` | `void AddNonSerializedListener(object owner, Action action);` | method |
| `ClearListeners` | `void ClearListeners(object o);` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionNotes](../ActionNotes)
- [same namespace AIBehaviorData](../AIBehaviorData)
- [same namespace Army](../Army)
- [same namespace AtmosphereGrid](../AtmosphereGrid)
