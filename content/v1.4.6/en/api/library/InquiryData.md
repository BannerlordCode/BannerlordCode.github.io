---
title: "InquiryData"
description: "InquiryData: a public class in TaleWorlds.Library; 4 exposed members (3 methods, 0 properties, 0 fields). Source: TaleWorlds.Library/InquiryData.cs."
---
# InquiryData

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class InquiryData`
**File:** `TaleWorlds.Library/InquiryData.cs`

## Overview

InquiryData lives in the TaleWorlds.Library module, source file TaleWorlds.Library/InquiryData.cs. It is a public class; the inheritance chain is InquiryData. It exposes 4 public/protected members: 3 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: InquiryData is a top-level type in TaleWorlds.Library, namespace matching the module directory; inheritance chain InquiryData. The surface is method-led (methods 3/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/InquiryData.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `InquiryData` | `public InquiryData(string titleText, string text, bool isAffirmativeOptionShown, bool isNegativeOptionShown, string affirmativeText, string negativeText, Action affirmativeAction, Action negativeAction, string soundEventPath = "", float expireTime = 0f, Action timeoutAction = null, Func<ValueTuple<bool, string>>isAffirmativeOptionEnabled = null, Func<ValueTuple<bool, string>>isNegativeOptionEnabled = null)` | constructor |
| `SetText` | `public void SetText(string text)` | method |
| `SetTitleText` | `public void SetTitleText(string titleText)` | method |
| `HasSameContentWith` | `public bool HasSameContentWith(object other)` | method |

## See Also

- [↑ library module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AmbientInformation](../AmbientInformation)
- [same namespace ApplicationPlatform](../ApplicationPlatform)
- [same namespace ApplicationVersion](../ApplicationVersion)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
