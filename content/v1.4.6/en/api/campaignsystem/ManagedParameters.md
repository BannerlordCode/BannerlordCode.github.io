---
title: "ManagedParameters"
description: "ManagedParameters: a public class in TaleWorlds.CampaignSystem, inheriting IManagedParametersInitializer; 4 exposed members (3 methods, 1 properties, 0 fields). Source: TaleWorlds.CampaignSystem/ManagedParameters.cs."
---
# ManagedParameters

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public sealed class ManagedParameters : IManagedParametersInitializer`
**File:** `TaleWorlds.CampaignSystem/ManagedParameters.cs`

## Overview

ManagedParameters lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ManagedParameters.cs. It is a public class (sealed), implementing/inheriting IManagedParametersInitializer; the inheritance chain is ManagedParameters → IManagedParametersInitializer. It exposes 4 public/protected members: 3 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ManagedParameters is a top-level type in TaleWorlds.CampaignSystem, namespace matching the module directory; inheritance chain ManagedParameters → IManagedParametersInitializer. The surface is method-led (methods 3/4, properties 1/4), so it mostly exposes operations. IManagedParametersInitializer on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ManagedParameters.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Instance` | `public static ManagedParameters Instance` | property |
| `Initialize` | `public void Initialize(string relativeXmlPath)` | method |
| `GetManagedParameter` | `public bool GetManagedParameter(ManagedParametersEnum _managedParametersEnum)` | method |
| `SetManagedParameter` | `public bool SetManagedParameter(ManagedParametersEnum _managedParametersEnum, bool value)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionNotes](../ActionNotes)
- [same namespace AIBehaviorData](../AIBehaviorData)
- [same namespace Army](../Army)
- [same namespace AtmosphereGrid](../AtmosphereGrid)
