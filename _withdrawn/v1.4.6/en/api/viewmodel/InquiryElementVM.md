---
title: "InquiryElementVM"
description: "InquiryElementVM: a public class in TaleWorlds.Core.ViewModelCollection.Information, inheriting ViewModel; 8 exposed members (0 methods, 7 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.Core.ViewModelCollection/Information/InquiryElementVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# InquiryElementVM

**Namespace:** `TaleWorlds.Core.ViewModelCollection.Information`
**Module:** `TaleWorlds.Core.ViewModelCollection`
**Type:** `public class InquiryElementVM : ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/Information/InquiryElementVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.Core.ViewModelCollection)

## Overview

InquiryElementVM lives in the TaleWorlds.Core.ViewModelCollection module, source file TaleWorlds.Core.ViewModelCollection/Information/InquiryElementVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is InquiryElementVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 8 public/protected members: 7 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: InquiryElementVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.Core.ViewModelCollection`), namespace `TaleWorlds.Core.ViewModelCollection.Information`, inheritance chain InquiryElementVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 7/8, methods 0/8), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core.ViewModelCollection/Information/InquiryElementVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `InquiryElementVM` | `public InquiryElementVM(InquiryElement elementData, TextObject hint, Action<InquiryElementVM, bool>onSelectedStateChanged = null)` | constructor |
| `IsFilteredOut` | `public bool IsFilteredOut` | property |
| `IsSelected` | `public bool IsSelected` | property |
| `HasVisuals` | `public bool HasVisuals` | property |
| `IsEnabled` | `public bool IsEnabled` | property |
| `Text` | `public string Text` | property |
| `ImageIdentifier` | `public ImageIdentifierVM ImageIdentifier` | property |
| `Hint` | `public HintViewModel Hint` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace BasicTooltipViewModel](../BasicTooltipViewModel/)
- [same namespace GameNotificationItemVM](../GameNotificationItemVM/)
- [same namespace GameNotificationVM](../GameNotificationVM/)
- [same namespace HintViewModel](../HintViewModel/)
