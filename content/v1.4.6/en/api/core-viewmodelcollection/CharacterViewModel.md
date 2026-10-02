---
title: "CharacterViewModel"
description: "CharacterViewModel: a public class in TaleWorlds.Core.ViewModelCollection, inheriting ViewModel; 33 exposed members (7 methods, 23 properties, 0 fields). Source: TaleWorlds.Core.ViewModelCollection/CharacterViewModel.cs."
---
# CharacterViewModel

**Namespace:** `TaleWorlds.Core.ViewModelCollection`
**Module:** `TaleWorlds.Core.ViewModelCollection`
**Type:** `public class CharacterViewModel : ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/CharacterViewModel.cs`

## Overview

CharacterViewModel lives in the TaleWorlds.Core.ViewModelCollection module, source file TaleWorlds.Core.ViewModelCollection/CharacterViewModel.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is CharacterViewModel → ViewModel. It exposes 33 public/protected members: 7 methods, 23 properties, 2 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CharacterViewModel is a top-level type in TaleWorlds.Core.ViewModelCollection, namespace matching the module directory; inheritance chain CharacterViewModel → ViewModel. The surface is property-led (properties 23/33, methods 7/33), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core.ViewModelCollection/CharacterViewModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CharacterViewModel` | `public CharacterViewModel()` | constructor |
| `CharacterViewModel` | `public CharacterViewModel(CharacterViewModel.StanceTypes stance = CharacterViewModel.StanceTypes.None)` | constructor |
| `SetEquipment` | `public void SetEquipment(EquipmentIndex index, EquipmentElement item)` | method |
| `SetEquipment` | `public virtual void SetEquipment(Equipment equipment)` | method |
| `FillFrom` | `public void FillFrom(BasicCharacterObject character, int seed = -1, string bannerCode = null)` | method |
| `FillFrom` | `public void FillFrom(CharacterViewModel characterViewModel, int seed = -1)` | method |
| `ExecuteEquipWeaponAtIndex` | `public void ExecuteEquipWeaponAtIndex(EquipmentIndex index, bool isLeftHand)` | method |
| `ExecuteStartCustomAnimation` | `public void ExecuteStartCustomAnimation(string animation, bool loop = false, float loopInterval = 0f)` | method |
| `ExecuteStopCustomAnimation` | `public void ExecuteStopCustomAnimation()` | method |
| `BannerCodeText` | `public string BannerCodeText` | property |
| `BodyProperties` | `public string BodyProperties` | property |
| `MountCreationKey` | `public string MountCreationKey` | property |
| `CharStringId` | `public string CharStringId` | property |
| `CustomAnimation` | `public string CustomAnimation` | property |
| `StanceIndex` | `public int StanceIndex` | property |
| `IsFemale` | `public bool IsFemale` | property |
| `IsHidden` | `public bool IsHidden` | property |
| `IsTableauEnabled` | `public bool IsTableauEnabled` | property |
| `IsPlayingCustomAnimations` | `public bool IsPlayingCustomAnimations` | property |
| `ShouldLoopCustomAnimation` | `public bool ShouldLoopCustomAnimation` | property |
| `CustomAnimationProgressRatio` | `public float CustomAnimationProgressRatio` | property |
| `CustomAnimationWaitDuration` | `public float CustomAnimationWaitDuration` | property |
| `Race` | `public int Race` | property |
| `HasMount` | `public bool HasMount` | property |
| `EquipmentCode` | `public string EquipmentCode` | property |
| `IdleAction` | `public string IdleAction` | property |
| `IdleFaceAnim` | `public string IdleFaceAnim` | property |
| `ArmorColor1` | `public uint ArmorColor1` | property |
| `ArmorColor2` | `public uint ArmorColor2` | property |
| `LeftHandWieldedEquipmentIndex` | `public int LeftHandWieldedEquipmentIndex` | property |
| `RightHandWieldedEquipmentIndex` | `public int RightHandWieldedEquipmentIndex` | property |
| `StanceTypes` | `public enum StanceTypes` | property |
| `StanceTypes` | `public enum StanceTypes` | nested type |

## See Also

- [↑ core-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BattleResultVM](../BattleResultVM)
- [same namespace CharacterEquipmentItemVM](../CharacterEquipmentItemVM)
- [same namespace CharacterWithActionViewModel](../CharacterWithActionViewModel)
- [same namespace ControlCharacterCreationStage](../ControlCharacterCreationStage)
