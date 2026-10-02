---
title: "GameNotificationItemVM"
description: "GameNotificationItemVM: a public class in TaleWorlds.Core.ViewModelCollection.Information, inheriting ViewModel; 7 exposed members (0 methods, 6 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.Core.ViewModelCollection/Information/GameNotificationItemVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GameNotificationItemVM

**Namespace:** `TaleWorlds.Core.ViewModelCollection.Information`
**Module:** `TaleWorlds.Core.ViewModelCollection`
**Type:** `public class GameNotificationItemVM : ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/Information/GameNotificationItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.Core.ViewModelCollection)

## Overview

GameNotificationItemVM lives in the TaleWorlds.Core.ViewModelCollection module, source file TaleWorlds.Core.ViewModelCollection/Information/GameNotificationItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is GameNotificationItemVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 7 public/protected members: 6 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GameNotificationItemVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.Core.ViewModelCollection`), namespace `TaleWorlds.Core.ViewModelCollection.Information`, inheritance chain GameNotificationItemVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 6/7, methods 0/7), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core.ViewModelCollection/Information/GameNotificationItemVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GameNotificationItemVM` | `public GameNotificationItemVM(string notificationText, int extraTimeInMs, BasicCharacterObject announcerCharacter, Equipment characterEquipment, string soundId, int priority, bool isDialog, string dialogSoundPath)` | constructor |
| `ExtraTimeInMs` | `public int ExtraTimeInMs` | property |
| `GameNotificationText` | `public string GameNotificationText` | property |
| `CharacterNameText` | `public string CharacterNameText` | property |
| `NotificationSoundId` | `public string NotificationSoundId` | property |
| `DialogSoundPath` | `public string DialogSoundPath` | property |
| `Announcer` | `public CharacterImageIdentifierVM Announcer` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace BasicTooltipViewModel](../BasicTooltipViewModel/)
- [same namespace GameNotificationVM](../GameNotificationVM/)
- [same namespace HintViewModel](../HintViewModel/)
- [same namespace HintVM](../HintVM/)
