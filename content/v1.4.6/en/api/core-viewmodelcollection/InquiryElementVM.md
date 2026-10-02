---
title: "InquiryElementVM"
description: "InquiryElementVM: a public class in TaleWorlds.Core.ViewModelCollection, inheriting ViewModel; 8 exposed members (0 methods, 7 properties, 0 fields). Source: TaleWorlds.Core.ViewModelCollection/Information/InquiryElementVM.cs."
---
# InquiryElementVM

**Namespace:** `TaleWorlds.Core.ViewModelCollection.Information`
**Module:** `TaleWorlds.Core.ViewModelCollection`
**Type:** `public class InquiryElementVM : ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/Information/InquiryElementVM.cs`

## Overview

InquiryElementVM lives in the TaleWorlds.Core.ViewModelCollection module, source file TaleWorlds.Core.ViewModelCollection/Information/InquiryElementVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is InquiryElementVM → ViewModel. It exposes 8 public/protected members: 7 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: InquiryElementVM is a top-level type in TaleWorlds.Core.ViewModelCollection, namespace differing from (TaleWorlds.Core.ViewModelCollection.Information) the module directory; inheritance chain InquiryElementVM → ViewModel. The surface is property-led (properties 7/8, methods 0/8), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core.ViewModelCollection/Information/InquiryElementVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ core-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BasicTooltipViewModel](../BasicTooltipViewModel)
- [same namespace GameNotificationItemVM](../GameNotificationItemVM)
- [same namespace GameNotificationVM](../GameNotificationVM)
- [same namespace HintViewModel](../HintViewModel)
