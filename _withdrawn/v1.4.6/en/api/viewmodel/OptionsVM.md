---
title: "OptionsVM"
description: "OptionsVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions, inheriting ViewModel; 53 exposed members (23 methods, 26 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/OptionsVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# OptionsVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class OptionsVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/OptionsVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

OptionsVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/OptionsVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is OptionsVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 53 public/protected members: 23 methods, 26 properties, 2 constructors, 2 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: OptionsVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions`, inheritance chain OptionsVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 26/53, methods 23/53), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/OptionsVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CurrentOptionsMode` | `public OptionsVM.OptionsMode CurrentOptionsMode` | property |
| `OptionsVM` | `public OptionsVM(bool autoHandleClose, OptionsVM.OptionsMode optionsMode, Action<KeyOptionVM>onKeybindRequest, Action onBrightnessExecute = null, Action onExposureExecute = null)` | constructor |
| `OptionsVM` | `public OptionsVM(OptionsVM.OptionsMode optionsMode, Action onClose, Action<KeyOptionVM>onKeybindRequest, Action onBrightnessExecute = null, Action onExposureExecute = null) : this(false, optionsMode, onKeybindRequest, null, null)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `ExecuteCloseOptions` | `public void ExecuteCloseOptions()` | method |
| `OnBrightnessClick` | `protected void OnBrightnessClick()` | method |
| `OnExposureClick` | `protected void OnExposureClick()` | method |
| `GetActiveCategory` | `public ViewModel GetActiveCategory()` | method |
| `GetIndexOfCategory` | `public int GetIndexOfCategory(ViewModel categoryVM)` | method |
| `GetConfig` | `public float GetConfig(IOptionData data)` | method |
| `SetConfig` | `public void SetConfig(IOptionData data, float val)` | method |
| `SelectPreviousCategory` | `public void SelectPreviousCategory()` | method |
| `SelectNextCategory` | `public void SelectNextCategory()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `HandleCancel` | `protected void HandleCancel(bool autoHandleClose)` | method |
| `ExecuteCancel` | `public void ExecuteCancel()` | method |
| `OnDone` | `protected void OnDone()` | method |
| `ExecuteBenchmark` | `protected void ExecuteBenchmark()` | method |
| `ExecuteDone` | `public void ExecuteDone()` | method |
| `ExecuteReset` | `protected void ExecuteReset()` | method |
| `IsOptionsChanged` | `public bool IsOptionsChanged()` | method |
| `CategoryIndex` | `public int CategoryIndex` | property |
| `OptionsLbl` | `public string OptionsLbl` | property |
| `CancelLbl` | `public string CancelLbl` | property |
| `DoneLbl` | `public string DoneLbl` | property |
| `ResetLbl` | `public string ResetLbl` | property |
| `IsConsole` | `public bool IsConsole` | property |
| `IsDevelopmentMode` | `public bool IsDevelopmentMode` | property |
| `VideoMemoryUsageName` | `public string VideoMemoryUsageName` | property |
| `VideoMemoryUsageText` | `public string VideoMemoryUsageText` | property |
| `VideoMemoryUsageNormalized` | `public float VideoMemoryUsageNormalized` | property |
| `GameKeyOptionGroups` | `public GameKeyOptionCategoryVM GameKeyOptionGroups` | property |
| `GamepadOptions` | `public GamepadOptionCategoryVM GamepadOptions` | property |
| `PerformanceOptions` | `public GroupedOptionCategoryVM PerformanceOptions` | property |
| `AudioOptions` | `public GroupedOptionCategoryVM AudioOptions` | property |
| `GameplayOptions` | `public GroupedOptionCategoryVM GameplayOptions` | property |
| `VideoOptions` | `public GroupedOptionCategoryVM VideoOptions` | property |
| `BrightnessPopUp` | `public BrightnessOptionVM BrightnessPopUp` | property |
| `ExposurePopUp` | `public ExposureOptionVM ExposurePopUp` | property |
| `SetDoneInputKey` | `public void SetDoneInputKey(HotKey hotkey)` | method |
| `SetCancelInputKey` | `public void SetCancelInputKey(HotKey hotkey)` | method |
| `SetPreviousTabInputKey` | `public void SetPreviousTabInputKey(HotKey hotkey)` | method |
| `SetNextTabInputKey` | `public void SetNextTabInputKey(HotKey hotkey)` | method |
| `SetResetInputKey` | `public void SetResetInputKey(HotKey hotkey)` | method |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey` | property |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey` | property |
| `PreviousTabInputKey` | `public InputKeyItemVM PreviousTabInputKey` | property |
| `NextTabInputKey` | `public InputKeyItemVM NextTabInputKey` | property |
| `ResetInputKey` | `public InputKeyItemVM ResetInputKey` | property |
| `OptionsDataType` | `public enum OptionsDataType` | property |
| `OptionsMode` | `public enum OptionsMode` | property |
| `OptionsDataType` | `public enum OptionsDataType` | nested type |
| `OptionsMode` | `public enum OptionsMode` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionOptionDataVM](../ActionOptionDataVM/)
- [same namespace BooleanOptionDataVM](../BooleanOptionDataVM/)
- [same namespace BrightnessOptionVM](../BrightnessOptionVM/)
- [same namespace ExposureOptionVM](../ExposureOptionVM/)
