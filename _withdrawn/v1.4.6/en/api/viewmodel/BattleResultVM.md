---
title: "BattleResultVM"
description: "BattleResultVM: a public class in TaleWorlds.Core.ViewModelCollection, inheriting ViewModel; 5 exposed members (0 methods, 4 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.Core.ViewModelCollection/BattleResultVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BattleResultVM

**Namespace:** `TaleWorlds.Core.ViewModelCollection`
**Module:** `TaleWorlds.Core.ViewModelCollection`
**Type:** `public class BattleResultVM : ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/BattleResultVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.Core.ViewModelCollection)

## Overview

BattleResultVM lives in the TaleWorlds.Core.ViewModelCollection module, source file TaleWorlds.Core.ViewModelCollection/BattleResultVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is BattleResultVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 5 public/protected members: 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BattleResultVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.Core.ViewModelCollection`), namespace `TaleWorlds.Core.ViewModelCollection`, inheritance chain BattleResultVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 4/5, methods 0/5), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core.ViewModelCollection/BattleResultVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `BattleResultVM` | `public BattleResultVM(string text, Func<List<TooltipProperty>>propertyFunc, CharacterCode deadHeroCode = null)` | constructor |
| `Text` | `public string Text` | property |
| `Hint` | `public BasicTooltipViewModel Hint` | property |
| `DeadLordPortrait` | `public CharacterImageIdentifierVM DeadLordPortrait` | property |
| `DeadLordClanBanner` | `public BannerImageIdentifierVM DeadLordClanBanner` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace CharacterEquipmentItemVM](../CharacterEquipmentItemVM/)
- [same namespace CharacterViewModel](../CharacterViewModel/)
- [same namespace CharacterWithActionViewModel](../CharacterWithActionViewModel/)
- [same namespace ControlCharacterCreationStage](../ControlCharacterCreationStage/)
