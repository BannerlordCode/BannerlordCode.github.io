---
title: "CharacterTableau"
description: "CharacterTableau: a public class in TaleWorlds.MountAndBlade.View.Tableaus; 33 exposed members (28 methods, 4 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/CharacterTableau.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CharacterTableau

**Namespace:** `TaleWorlds.MountAndBlade.View.Tableaus`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class CharacterTableau`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/CharacterTableau.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

CharacterTableau lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/CharacterTableau.cs. It is a public class; the inheritance chain is CharacterTableau. It exposes 33 public/protected members: 28 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CharacterTableau lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.View.Tableaus`, inheritance chain CharacterTableau. The surface is method-led (methods 28/33, properties 4/33), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/CharacterTableau.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Texture` | `public Texture Texture` | property |
| `IsRunningCustomAnimation` | `public bool IsRunningCustomAnimation` | property |
| `ShouldLoopCustomAnimation` | `public bool ShouldLoopCustomAnimation` | property |
| `CustomAnimationWaitDuration` | `public float CustomAnimationWaitDuration` | property |
| `CharacterTableau` | `public CharacterTableau()` | constructor |
| `OnTick` | `public void OnTick(float dt)` | method |
| `GetCustomAnimationProgressRatio` | `public float GetCustomAnimationProgressRatio()` | method |
| `SetEnabled` | `public void SetEnabled(bool enabled)` | method |
| `SetLeftHandWieldedEquipmentIndex` | `public void SetLeftHandWieldedEquipmentIndex(int index)` | method |
| `SetRightHandWieldedEquipmentIndex` | `public void SetRightHandWieldedEquipmentIndex(int index)` | method |
| `SetTargetSize` | `public void SetTargetSize(int width, int height)` | method |
| `SetCharStringID` | `public void SetCharStringID(string charStringId)` | method |
| `OnFinalize` | `public void OnFinalize()` | method |
| `SetBodyProperties` | `public void SetBodyProperties(string bodyPropertiesCode)` | method |
| `SetStanceIndex` | `public void SetStanceIndex(int index)` | method |
| `SetCustomRenderScale` | `public void SetCustomRenderScale(float value)` | method |
| `SetIsFemale` | `public void SetIsFemale(bool isFemale)` | method |
| `SetIsBannerShownInBackground` | `public void SetIsBannerShownInBackground(bool isBannerShownInBackground)` | method |
| `SetRace` | `public void SetRace(int race)` | method |
| `SetIdleAction` | `public void SetIdleAction(string idleAction)` | method |
| `SetCustomAnimation` | `public void SetCustomAnimation(string animation)` | method |
| `StartCustomAnimation` | `public void StartCustomAnimation()` | method |
| `StopCustomAnimation` | `public void StopCustomAnimation()` | method |
| `SetIdleFaceAnim` | `public void SetIdleFaceAnim(string idleFaceAnim)` | method |
| `SetEquipmentCode` | `public void SetEquipmentCode(string equipmentCode)` | method |
| `SetIsEquipmentAnimActive` | `public void SetIsEquipmentAnimActive(bool value)` | method |
| `SetMountCreationKey` | `public void SetMountCreationKey(string value)` | method |
| `SetBannerCode` | `public void SetBannerCode(string value)` | method |
| `SetArmorColor1` | `public void SetArmorColor1(uint clothColor1)` | method |
| `SetArmorColor2` | `public void SetArmorColor2(uint clothColor2)` | method |
| `RotateCharacter` | `public void RotateCharacter(bool value)` | method |
| `TriggerCharacterMountPlacesSwap` | `public void TriggerCharacterMountPlacesSwap()` | method |
| `OnCharacterTableauMouseMove` | `public void OnCharacterTableauMouseMove(int mouseMoveX)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace BannerTableau](../BannerTableau/)
- [same namespace BannerThumbnailCreationBaseData](../BannerThumbnailCreationBaseData/)
- [same namespace BasicCharacterTableau](../BasicCharacterTableau/)
- [same namespace BrightnessDemoTableau](../BrightnessDemoTableau/)
