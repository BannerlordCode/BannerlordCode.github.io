---
title: "ManagedParameters"
description: "ManagedParameters: a public class in TaleWorlds.CampaignSystem, inheriting IManagedParametersInitializer; 4 exposed members (3 methods, 1 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/ManagedParameters.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ManagedParameters

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public sealed class ManagedParameters : IManagedParametersInitializer`
**File:** `TaleWorlds.CampaignSystem/ManagedParameters.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

ManagedParameters lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ManagedParameters.cs. It is a public class (sealed), implementing/inheriting IManagedParametersInitializer; the inheritance chain is ManagedParameters → IManagedParametersInitializer. It exposes 4 public/protected members: 3 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ManagedParameters lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem`, inheritance chain ManagedParameters → IManagedParametersInitializer. The surface is method-led (methods 3/4, properties 1/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ManagedParameters.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Instance` | `public static ManagedParameters Instance` | property |
| `Initialize` | `public void Initialize(string relativeXmlPath)` | method |
| `GetManagedParameter` | `public bool GetManagedParameter(ManagedParametersEnum _managedParametersEnum)` | method |
| `SetManagedParameter` | `public bool SetManagedParameter(ManagedParametersEnum _managedParametersEnum, bool value)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IManagedParametersInitializer](../../core-extra/IManagedParametersInitializer/)
- [same namespace ActionNotes](../ActionNotes/)
- [same namespace AIBehaviorData](../AIBehaviorData/)
- [same namespace Army](../Army/)
- [same namespace AtmosphereGrid](../AtmosphereGrid/)
