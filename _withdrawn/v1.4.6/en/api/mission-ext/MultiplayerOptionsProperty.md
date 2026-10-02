---
title: "MultiplayerOptionsProperty"
description: "MultiplayerOptionsProperty: a public class in TaleWorlds.MountAndBlade, inheriting Attribute; 4 exposed members (0 methods, 2 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/MultiplayerOptionsProperty.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MultiplayerOptionsProperty

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MultiplayerOptionsProperty : Attribute`
**File:** `TaleWorlds.MountAndBlade/MultiplayerOptionsProperty.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MultiplayerOptionsProperty lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MultiplayerOptionsProperty.cs. It is a public class, implementing/inheriting Attribute; the inheritance chain is MultiplayerOptionsProperty → Attribute. It exposes 4 public/protected members: 2 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MultiplayerOptionsProperty lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain MultiplayerOptionsProperty → Attribute. The surface is property-led (properties 2/4, methods 0/4), so it mostly exposes state for reading. Attribute on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MultiplayerOptionsProperty.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `HasBounds` | `public bool HasBounds` | property |
| `MultiplayerOptionsProperty` | `public MultiplayerOptionsProperty(MultiplayerOptions.OptionValueType optionValueType, MultiplayerOptionsProperty.ReplicationOccurrence replicationOccurrence, string description = null, int boundsMin = 0, int boundsMax = 0, string[]validGameModes = null, bool hasMultipleSelections = false, Type enumType = null)` | constructor |
| `ReplicationOccurrence` | `public enum ReplicationOccurrence` | property |
| `ReplicationOccurrence` | `public enum ReplicationOccurrence` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
