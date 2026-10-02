---
title: "NotificationProperty"
description: "NotificationProperty: a public class in TaleWorlds.MountAndBlade, inheriting Attribute; 4 exposed members (0 methods, 3 properties, 0 fields). Source: TaleWorlds.MountAndBlade/NotificationProperty.cs."
---
# NotificationProperty

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class NotificationProperty : Attribute`
**File:** `TaleWorlds.MountAndBlade/NotificationProperty.cs`

## Overview

NotificationProperty lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/NotificationProperty.cs. It is a public class, implementing/inheriting Attribute; the inheritance chain is NotificationProperty → Attribute. It exposes 4 public/protected members: 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: NotificationProperty is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain NotificationProperty → Attribute. The surface is property-led (properties 3/4, methods 0/4), so it mostly exposes state for reading. Attribute on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/NotificationProperty.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `StringId` | `public string StringId` | property |
| `SoundIdOne` | `public string SoundIdOne` | property |
| `SoundIdTwo` | `public string SoundIdTwo` | property |
| `NotificationProperty` | `public NotificationProperty(string stringId, string soundIdOne, string soundIdTwo = "")` | constructor |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
