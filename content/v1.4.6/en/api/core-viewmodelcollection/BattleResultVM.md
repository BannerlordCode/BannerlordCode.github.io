---
title: "BattleResultVM"
description: "BattleResultVM: a public class in TaleWorlds.Core.ViewModelCollection, inheriting ViewModel; 5 exposed members (0 methods, 4 properties, 0 fields). Source: TaleWorlds.Core.ViewModelCollection/BattleResultVM.cs."
---
# BattleResultVM

**Namespace:** `TaleWorlds.Core.ViewModelCollection`
**Module:** `TaleWorlds.Core.ViewModelCollection`
**Type:** `public class BattleResultVM : ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/BattleResultVM.cs`

## Overview

BattleResultVM lives in the TaleWorlds.Core.ViewModelCollection module, source file TaleWorlds.Core.ViewModelCollection/BattleResultVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is BattleResultVM → ViewModel. It exposes 5 public/protected members: 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BattleResultVM is a top-level type in TaleWorlds.Core.ViewModelCollection, namespace matching the module directory; inheritance chain BattleResultVM → ViewModel. The surface is property-led (properties 4/5, methods 0/5), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core.ViewModelCollection/BattleResultVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BattleResultVM` | `public BattleResultVM(string text, Func<List<TooltipProperty>>propertyFunc, CharacterCode deadHeroCode = null)` | constructor |
| `Text` | `public string Text` | property |
| `Hint` | `public BasicTooltipViewModel Hint` | property |
| `DeadLordPortrait` | `public CharacterImageIdentifierVM DeadLordPortrait` | property |
| `DeadLordClanBanner` | `public BannerImageIdentifierVM DeadLordClanBanner` | property |

## See Also

- [↑ core-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CharacterEquipmentItemVM](../CharacterEquipmentItemVM)
- [same namespace CharacterViewModel](../CharacterViewModel)
- [same namespace CharacterWithActionViewModel](../CharacterWithActionViewModel)
- [same namespace ControlCharacterCreationStage](../ControlCharacterCreationStage)
