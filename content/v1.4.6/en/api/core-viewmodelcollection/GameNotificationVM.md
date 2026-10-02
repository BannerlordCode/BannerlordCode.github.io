---
title: "GameNotificationVM"
description: "GameNotificationVM: a public class in TaleWorlds.Core.ViewModelCollection, inheriting ViewModel; 18 exposed members (9 methods, 7 properties, 0 fields). Source: TaleWorlds.Core.ViewModelCollection/Information/GameNotificationVM.cs."
---
# GameNotificationVM

**Namespace:** `TaleWorlds.Core.ViewModelCollection.Information`
**Module:** `TaleWorlds.Core.ViewModelCollection`
**Type:** `public class GameNotificationVM : ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/Information/GameNotificationVM.cs`

## Overview

GameNotificationVM lives in the TaleWorlds.Core.ViewModelCollection module, source file TaleWorlds.Core.ViewModelCollection/Information/GameNotificationVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is GameNotificationVM → ViewModel. It exposes 18 public/protected members: 9 methods, 7 properties, 1 events, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GameNotificationVM is a top-level type in TaleWorlds.Core.ViewModelCollection, namespace differing from (TaleWorlds.Core.ViewModelCollection.Information) the module directory; inheritance chain GameNotificationVM → ViewModel. The surface is method-led (methods 9/18, properties 7/18), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core.ViewModelCollection/Information/GameNotificationVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Action` | `public event Action<GameNotificationItemVM>CurrentNotificationChanged;` | event |
| `FadeOutCurrentNotification` | `public void FadeOutCurrentNotification(bool useExtraDisplayTime = false)` | method |
| `SkipCurrentNotification` | `public void SkipCurrentNotification()` | method |
| `GameNotificationVM` | `public GameNotificationVM()` | constructor |
| `ClearNotifications` | `public void ClearNotifications()` | method |
| `AddDialogNotification` | `public MBInformationManager.DialogNotificationHandle AddDialogNotification(TextObject text, int extraTimeInMs, BasicCharacterObject announcerCharacter, Equipment equipment, MBInformationManager.NotificationPriority priority, string dialogSoundPath)` | method |
| `GetStatusOfDialogNotification` | `public MBInformationManager.NotificationStatus GetStatusOfDialogNotification(MBInformationManager.DialogNotificationHandle handle)` | method |
| `ClearDialogNotification` | `public void ClearDialogNotification(MBInformationManager.DialogNotificationHandle handle, bool fadeOut)` | method |
| `GetIsAnyDialogNotificationActiveOrQueued` | `public bool GetIsAnyDialogNotificationActiveOrQueued()` | method |
| `ClearAllDialogNotifications` | `public void ClearAllDialogNotifications(bool fadeOut)` | method |
| `AddGameNotification` | `public void AddGameNotification(string notificationText, int extraTimeInMs, BasicCharacterObject announcerCharacter, Equipment equipment, string soundId)` | method |
| `CurrentNotification` | `public GameNotificationItemVM CurrentNotification` | property |
| `GotNotification` | `public bool GotNotification` | property |
| `NotificationId` | `public int NotificationId` | property |
| `CurrentNotificationDurationInSeconds` | `public float CurrentNotificationDurationInSeconds` | property |
| `IsPaused` | `public bool IsPaused` | property |
| `MustFadeOutCurrentNotification` | `public bool MustFadeOutCurrentNotification` | property |
| `CurrentNotificationFadeOutDelayInSeconds` | `public float CurrentNotificationFadeOutDelayInSeconds` | property |

## See Also

- [↑ core-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BasicTooltipViewModel](../BasicTooltipViewModel)
- [same namespace GameNotificationItemVM](../GameNotificationItemVM)
- [same namespace HintViewModel](../HintViewModel)
- [same namespace HintVM](../HintVM)
