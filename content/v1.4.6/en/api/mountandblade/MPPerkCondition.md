---
title: "MPPerkCondition"
description: "MPPerkCondition: a public class in TaleWorlds.MountAndBlade; 10 exposed members (5 methods, 3 properties, 1 fields). Source: TaleWorlds.MountAndBlade/MPPerkCondition.cs."
---
# MPPerkCondition

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class MPPerkCondition`
**File:** `TaleWorlds.MountAndBlade/MPPerkCondition.cs`

## Overview

MPPerkCondition lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MPPerkCondition.cs. It is a public class (abstract); the inheritance chain is MPPerkCondition. It exposes 10 public/protected members: 5 methods, 3 properties, 1 fields, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MPPerkCondition is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain MPPerkCondition. The surface is method-led (methods 5/10, properties 3/10), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MPPerkCondition.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `EventFlags` | `public virtual MPPerkCondition.PerkEventFlags EventFlags` | property |
| `IsPeerCondition` | `public virtual bool IsPeerCondition` | property |
| `Check` | `public abstract bool Check(MissionPeer peer);` | method |
| `Check` | `public abstract bool Check(Agent agent);` | method |
| `IsGameModesValid` | `protected virtual bool IsGameModesValid(List<string>gameModes)` | method |
| `Deserialize` | `protected abstract void Deserialize(XmlNode node);` | method |
| `CreateFrom` | `public static MPPerkCondition CreateFrom(List<string>gameModes, XmlNode node)` | method |
| `Type>Registered` | `protected static Dictionary<string, Type>Registered` | field |
| `PerkEventFlags` | `public enum PerkEventFlags` | property |
| `PerkEventFlags` | `public enum PerkEventFlags` | nested type |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
