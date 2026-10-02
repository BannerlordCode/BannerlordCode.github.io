---
title: "PhotoModeVM"
description: "PhotoModeVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting ViewModel; 20 exposed members (11 methods, 8 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/PhotoModeVM.cs."
---
# PhotoModeVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class PhotoModeVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/PhotoModeVM.cs`

## Overview

PhotoModeVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/PhotoModeVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is PhotoModeVM → ViewModel. It exposes 20 public/protected members: 11 methods, 8 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PhotoModeVM is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace matching the module directory; inheritance chain PhotoModeVM → ViewModel. The surface is method-led (methods 11/20, properties 8/20), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/PhotoModeVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PhotoModeVM` | `public PhotoModeVM(Scene missionScene, Func<bool>getVignetteOn, Func<bool>getHideAgentsOn)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `AddTakePictureKey` | `public void AddTakePictureKey(GameKey key)` | method |
| `AddFasterCameraKey` | `public void AddFasterCameraKey(HotKey hotkey)` | method |
| `AddKey` | `public void AddKey(GameKey key)` | method |
| `AddHotkey` | `public void AddHotkey(HotKey hotkey)` | method |
| `AddHotkeyWithForcedName` | `public void AddHotkeyWithForcedName(HotKey hotkey, TextObject forcedName)` | method |
| `AddConsoleTakePictureKey` | `public void AddConsoleTakePictureKey(string keyID, TextObject forcedName)` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `Reset` | `public void Reset()` | method |
| `UpdateTakePictureKeyVisibility` | `public void UpdateTakePictureKeyVisibility(bool canTakePicture)` | method |
| `UpdateFasterCameraKeyVisibility` | `public void UpdateFasterCameraKeyVisibility(bool canMoveCamera)` | method |
| `MBBindingList` | `public MBBindingList<InputKeyItemVM>Keys` | property |
| `SelectorVM` | `public SelectorVM<SelectorItemVM>ColorGradeSelector` | property |
| `SelectorVM` | `public SelectorVM<SelectorItemVM>OverlaySelector` | property |
| `FocusEndValueOption` | `public PhotoModeValueOptionVM FocusEndValueOption` | property |
| `FocusStartValueOption` | `public PhotoModeValueOptionVM FocusStartValueOption` | property |
| `FocusValueOption` | `public PhotoModeValueOptionVM FocusValueOption` | property |
| `ExposureOption` | `public PhotoModeValueOptionVM ExposureOption` | property |
| `VerticalFovOption` | `public PhotoModeValueOptionVM VerticalFovOption` | property |

## See Also

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BoundaryCrossingVM](../BoundaryCrossingVM)
- [same namespace FullScreenNoticeVM](../FullScreenNoticeVM)
- [same namespace GameVersionVM](../GameVersionVM)
- [same namespace IMissionScreen](../IMissionScreen)
