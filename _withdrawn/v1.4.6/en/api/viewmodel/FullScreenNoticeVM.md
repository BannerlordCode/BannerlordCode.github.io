---
title: "FullScreenNoticeVM"
description: "FullScreenNoticeVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting ViewModel; 10 exposed members (4 methods, 5 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/FullScreenNoticeVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# FullScreenNoticeVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class FullScreenNoticeVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/FullScreenNoticeVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

FullScreenNoticeVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/FullScreenNoticeVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is FullScreenNoticeVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 10 public/protected members: 4 methods, 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: FullScreenNoticeVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection`, inheritance chain FullScreenNoticeVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 5/10, methods 4/10), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/FullScreenNoticeVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `FullScreenNoticeVM` | `public FullScreenNoticeVM()` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `ExecuteCloseNotice` | `public void ExecuteCloseNotice()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `IsNoticeActive` | `public bool IsNoticeActive` | property |
| `NoticeTitleText` | `public string NoticeTitleText` | property |
| `NoticeContentText` | `public string NoticeContentText` | property |
| `ConfirmText` | `public string ConfirmText` | property |
| `SetDoneInputKey` | `public void SetDoneInputKey(HotKey hotkey)` | method |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace BoundaryCrossingVM](../BoundaryCrossingVM/)
- [same namespace GameVersionVM](../GameVersionVM/)
- [same namespace IMissionScreen](../IMissionScreen/)
- [same namespace MissionAgentStatusVM](../MissionAgentStatusVM/)
