---
title: "BannerEditorVM"
description: "BannerEditorVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 46 exposed members (13 methods, 31 properties, 1 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/BannerEditorVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BannerEditorVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class BannerEditorVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/BannerEditorVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

BannerEditorVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/BannerEditorVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is BannerEditorVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 46 public/protected members: 13 methods, 31 properties, 1 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BannerEditorVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection`, inheritance chain BannerEditorVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 31/46, methods 13/46), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/BannerEditorVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Character` | `public BasicCharacterObject Character` | property |
| `BannerEditorVM` | `public BannerEditorVM(BasicCharacterObject character, Banner banner, Action<bool>onExit, Action refresh, int currentStageIndex, int totalStagesCount, int furthestIndex, Action<int>goToIndex)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `RefreshSelectedColorsAndSigils` | `public void RefreshSelectedColorsAndSigils()` | method |
| `SetClanRelatedRules` | `public void SetClanRelatedRules(bool canChangeBackgroundColor)` | method |
| `ExecuteSwitchColors` | `public void ExecuteSwitchColors()` | method |
| `ExecuteDone` | `public void ExecuteDone()` | method |
| `ExecuteCancel` | `public void ExecuteCancel()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `SetCancelInputKey` | `public void SetCancelInputKey(HotKey hotKey)` | method |
| `SetDoneInputKey` | `public void SetDoneInputKey(HotKey hotKey)` | method |
| `AddCameraControlInputKey` | `public void AddCameraControlInputKey(HotKey hotKey)` | method |
| `AddCameraControlInputKey` | `public void AddCameraControlInputKey(GameKey gameKey)` | method |
| `AddCameraControlInputKey` | `public void AddCameraControlInputKey(GameAxisKey gameAxisKey, TextObject keyName)` | method |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey` | property |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey` | property |
| `MBBindingList` | `public MBBindingList<InputKeyItemVM>CameraControlKeys` | property |
| `ExecuteGoToIndex` | `public void ExecuteGoToIndex(int index)` | method |
| `MBBindingList` | `public MBBindingList<HintViewModel>CategoryNames` | property |
| `MBBindingList` | `public MBBindingList<BannerIconVM>IconsList` | property |
| `MBBindingList` | `public MBBindingList<BannerColorVM>PrimaryColorList` | property |
| `MBBindingList` | `public MBBindingList<BannerColorVM>SigilColorList` | property |
| `RandomizeHint` | `public HintViewModel RandomizeHint` | property |
| `UndoHint` | `public HintViewModel UndoHint` | property |
| `RedoHint` | `public HintViewModel RedoHint` | property |
| `ResetHint` | `public HintViewModel ResetHint` | property |
| `CurrentShieldName` | `public string CurrentShieldName` | property |
| `MinIconSize` | `public int MinIconSize` | property |
| `MaxIconSize` | `public int MaxIconSize` | property |
| `CurrentIconSize` | `public int CurrentIconSize` | property |
| `PrimaryColorText` | `public string PrimaryColorText` | property |
| `SizeText` | `public string SizeText` | property |
| `SigilColorText` | `public string SigilColorText` | property |
| `CancelText` | `public string CancelText` | property |
| `DoneText` | `public string DoneText` | property |
| `BannerVM` | `public BannerViewModel BannerVM` | property |
| `IconCodes` | `public string IconCodes` | property |
| `ColorCodes` | `public string ColorCodes` | property |
| `CanChangeBackgroundColor` | `public bool CanChangeBackgroundColor` | property |
| `CharacterGamepadControlsEnabled` | `public bool CharacterGamepadControlsEnabled` | property |
| `Title` | `public string Title` | property |
| `Description` | `public string Description` | property |
| `TotalStageCount` | `public int TotalStageCount` | property |
| `CurrentStageIndex` | `public int CurrentStageIndex` | property |
| `FurthestIndex` | `public int FurthestIndex` | property |
| `ShieldSlotIndex` | `public int ShieldSlotIndex` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionCampaignOptionData](../ActionCampaignOptionData/)
- [same namespace BooleanCampaignOptionData](../BooleanCampaignOptionData/)
- [same namespace CampaignOptionData](../CampaignOptionData/)
- [same namespace CampaignOptionDataType](../CampaignOptionDataType/)
