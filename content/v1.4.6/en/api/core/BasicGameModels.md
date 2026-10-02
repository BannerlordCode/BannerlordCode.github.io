---
title: "BasicGameModels"
description: "BasicGameModels: a public class in TaleWorlds.Core, inheriting GameModelsManager; 4 exposed members (0 methods, 3 properties, 0 fields). Source: TaleWorlds.Core/BasicGameModels.cs."
---
# BasicGameModels

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class BasicGameModels : GameModelsManager`
**File:** `TaleWorlds.Core/BasicGameModels.cs`

## Overview

BasicGameModels lives in the TaleWorlds.Core module, source file TaleWorlds.Core/BasicGameModels.cs. It is a public class, implementing/inheriting GameModelsManager; the inheritance chain is BasicGameModels → GameModelsManager. It exposes 4 public/protected members: 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BasicGameModels is a top-level type in TaleWorlds.Core, namespace matching the module directory; inheritance chain BasicGameModels → GameModelsManager. The surface is property-led (properties 3/4, methods 0/4), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/BasicGameModels.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RidingModel` | `public RidingModel RidingModel` | property |
| `ItemCategorySelector` | `public ItemCategorySelector ItemCategorySelector` | property |
| `ItemValueModel` | `public ItemValueModel ItemValueModel` | property |
| `BasicGameModels` | `public BasicGameModels(IEnumerable<GameModel>inputComponents) : base(inputComponents)` | constructor |

## See Also

- [↑ core module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface GameModelsManager](../GameModelsManager)
- [same namespace ActionSetCode](../ActionSetCode)
- [same namespace AgentAttackType](../AgentAttackType)
- [same namespace AgentControllerType](../AgentControllerType)
- [same namespace AgentData](../AgentData)
