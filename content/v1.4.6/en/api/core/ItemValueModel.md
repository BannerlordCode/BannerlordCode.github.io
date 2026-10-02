---
title: "ItemValueModel"
description: "ItemValueModel: a public class in TaleWorlds.Core, inheriting MBGameModel<ItemValueModel>; 4 exposed members (4 methods, 0 properties, 0 fields). Source: TaleWorlds.Core/ItemValueModel.cs."
---
# ItemValueModel

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public abstract class ItemValueModel : MBGameModel<ItemValueModel>`
**File:** `TaleWorlds.Core/ItemValueModel.cs`

## Overview

ItemValueModel lives in the TaleWorlds.Core module, source file TaleWorlds.Core/ItemValueModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<ItemValueModel>; the inheritance chain is ItemValueModel → MBGameModel → GameModel. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ItemValueModel is a top-level type in TaleWorlds.Core, namespace matching the module directory; inheritance chain ItemValueModel → MBGameModel → GameModel. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/ItemValueModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetEquipmentValueFromTier` | `public abstract float GetEquipmentValueFromTier(float itemTierf);` | method |
| `CalculateTier` | `public abstract float CalculateTier(ItemObject item);` | method |
| `CalculateValue` | `public abstract int CalculateValue(ItemObject item);` | method |
| `GetIsTransferable` | `public abstract bool GetIsTransferable(ItemObject item);` | method |

## See Also

- [↑ core module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MBGameModel](../MBGameModel__1)
- [same namespace ActionSetCode](../ActionSetCode)
- [same namespace AgentAttackType](../AgentAttackType)
- [same namespace AgentControllerType](../AgentControllerType)
- [same namespace AgentData](../AgentData)
