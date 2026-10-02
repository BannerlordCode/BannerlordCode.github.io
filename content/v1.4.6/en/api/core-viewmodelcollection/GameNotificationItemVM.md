---
title: "GameNotificationItemVM"
description: "GameNotificationItemVM: a public class in TaleWorlds.Core.ViewModelCollection, inheriting ViewModel; 7 exposed members (0 methods, 6 properties, 0 fields). Source: TaleWorlds.Core.ViewModelCollection/Information/GameNotificationItemVM.cs."
---
# GameNotificationItemVM

**Namespace:** `TaleWorlds.Core.ViewModelCollection.Information`
**Module:** `TaleWorlds.Core.ViewModelCollection`
**Type:** `public class GameNotificationItemVM : ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/Information/GameNotificationItemVM.cs`

## Overview

GameNotificationItemVM lives in the TaleWorlds.Core.ViewModelCollection module, source file TaleWorlds.Core.ViewModelCollection/Information/GameNotificationItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is GameNotificationItemVM → ViewModel. It exposes 7 public/protected members: 6 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GameNotificationItemVM is a top-level type in TaleWorlds.Core.ViewModelCollection, namespace differing from (TaleWorlds.Core.ViewModelCollection.Information) the module directory; inheritance chain GameNotificationItemVM → ViewModel. The surface is property-led (properties 6/7, methods 0/7), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core.ViewModelCollection/Information/GameNotificationItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GameNotificationItemVM` | `public GameNotificationItemVM(string notificationText, int extraTimeInMs, BasicCharacterObject announcerCharacter, Equipment characterEquipment, string soundId, int priority, bool isDialog, string dialogSoundPath)` | constructor |
| `ExtraTimeInMs` | `public int ExtraTimeInMs` | property |
| `GameNotificationText` | `public string GameNotificationText` | property |
| `CharacterNameText` | `public string CharacterNameText` | property |
| `NotificationSoundId` | `public string NotificationSoundId` | property |
| `DialogSoundPath` | `public string DialogSoundPath` | property |
| `Announcer` | `public CharacterImageIdentifierVM Announcer` | property |

## See Also

- [↑ core-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BasicTooltipViewModel](../BasicTooltipViewModel)
- [same namespace GameNotificationVM](../GameNotificationVM)
- [same namespace HintViewModel](../HintViewModel)
- [same namespace HintVM](../HintVM)
