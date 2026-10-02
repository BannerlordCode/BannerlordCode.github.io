---
title: "SceneNotificationVM"
description: "SceneNotificationVM: a public class in TaleWorlds.Core.ViewModelCollection, inheriting ViewModel; 25 exposed members (7 methods, 17 properties, 0 fields). Source: TaleWorlds.Core.ViewModelCollection/Information/SceneNotificationVM.cs."
---
# SceneNotificationVM

**Namespace:** `TaleWorlds.Core.ViewModelCollection.Information`
**Module:** `TaleWorlds.Core.ViewModelCollection`
**Type:** `public class SceneNotificationVM : ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/Information/SceneNotificationVM.cs`

## Overview

SceneNotificationVM lives in the TaleWorlds.Core.ViewModelCollection module, source file TaleWorlds.Core.ViewModelCollection/Information/SceneNotificationVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is SceneNotificationVM → ViewModel. It exposes 25 public/protected members: 7 methods, 17 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SceneNotificationVM is a top-level type in TaleWorlds.Core.ViewModelCollection, namespace differing from (TaleWorlds.Core.ViewModelCollection.Information) the module directory; inheritance chain SceneNotificationVM → ViewModel. The surface is property-led (properties 17/25, methods 7/25), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core.ViewModelCollection/Information/SceneNotificationVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ActiveData` | `public SceneNotificationData ActiveData` | property |
| `SceneNotificationVM` | `public SceneNotificationVM(Action onPositiveTrigger, Action closeNotification, Func<string>getContinueInputText)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `CreateNotification` | `public void CreateNotification(SceneNotificationData data)` | method |
| `ClearData` | `public void ClearData()` | method |
| `ExecuteAffirmativeProcess` | `public void ExecuteAffirmativeProcess()` | method |
| `ExecuteClose` | `public void ExecuteClose()` | method |
| `ExecuteNegativeProcess` | `public void ExecuteNegativeProcess()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `IsShown` | `public bool IsShown` | property |
| `IsReady` | `public bool IsReady` | property |
| `ClickToContinueText` | `public string ClickToContinueText` | property |
| `TitleText` | `public string TitleText` | property |
| `AffirmativeDescription` | `public string AffirmativeDescription` | property |
| `CancelDescription` | `public string CancelDescription` | property |
| `SceneID` | `public string SceneID` | property |
| `ButtonOkLabel` | `public string ButtonOkLabel` | property |
| `ButtonCancelLabel` | `public string ButtonCancelLabel` | property |
| `IsButtonOkShown` | `public bool IsButtonOkShown` | property |
| `IsButtonCancelShown` | `public bool IsButtonCancelShown` | property |
| `AffirmativeTitleText` | `public string AffirmativeTitleText` | property |
| `NegativeTitleText` | `public string NegativeTitleText` | property |
| `Scene` | `public object Scene` | property |
| `EndProgress` | `public float EndProgress` | property |
| `AffirmativeHint` | `public BasicTooltipViewModel AffirmativeHint` | property |

## See Also

- [↑ core-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BasicTooltipViewModel](../BasicTooltipViewModel)
- [same namespace GameNotificationItemVM](../GameNotificationItemVM)
- [same namespace GameNotificationVM](../GameNotificationVM)
- [same namespace HintViewModel](../HintViewModel)
