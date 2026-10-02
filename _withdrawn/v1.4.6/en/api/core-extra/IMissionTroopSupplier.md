---
title: "IMissionTroopSupplier"
description: "IMissionTroopSupplier: a public interface in TaleWorlds.Core; 8 exposed members (5 methods, 3 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Core/IMissionTroopSupplier.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IMissionTroopSupplier

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public interface IMissionTroopSupplier`
**File:** `TaleWorlds.Core/IMissionTroopSupplier.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Core)

## Overview

IMissionTroopSupplier lives in the TaleWorlds.Core module, source file TaleWorlds.Core/IMissionTroopSupplier.cs. It is a public interface; the inheritance chain is IMissionTroopSupplier. It exposes 8 public/protected members: 5 methods, 3 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IMissionTroopSupplier lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Core`), namespace `TaleWorlds.Core`, inheritance chain IMissionTroopSupplier. The surface is method-led (methods 5/8, properties 3/8), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/IMissionTroopSupplier.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IEnumerable` | `IEnumerable<IAgentOriginBase>SupplyTroops(int numberToAllocate);` | method |
| `SupplyOneTroop` | `IAgentOriginBase SupplyOneTroop();` | method |
| `IEnumerable` | `IEnumerable<IAgentOriginBase>GetAllTroops();` | method |
| `GetGeneralCharacter` | `BasicCharacterObject GetGeneralCharacter();` | method |
| `NumRemovedTroops` | `int NumRemovedTroops` | property |
| `NumTroopsNotSupplied` | `int NumTroopsNotSupplied` | property |
| `AnyTroopRemainsToBeSupplied` | `bool AnyTroopRemainsToBeSupplied` | property |
| `GetNumberOfPlayerControllableTroops` | `int GetNumberOfPlayerControllableTroops();` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionSetCode](../ActionSetCode/)
- [same namespace AgentAttackType](../AgentAttackType/)
- [same namespace AgentControllerType](../AgentControllerType/)
- [same namespace AgentData](../AgentData/)
