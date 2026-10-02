---
title: "TextInquiryData"
description: "TextInquiryData: a public class in TaleWorlds.Library; 3 exposed members (1 methods, 0 properties, 1 fields). Source: TaleWorlds.Library/TextInquiryData.cs."
---
# TextInquiryData

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class TextInquiryData`
**File:** `TaleWorlds.Library/TextInquiryData.cs`

## Overview

TextInquiryData lives in the TaleWorlds.Library module, source file TaleWorlds.Library/TextInquiryData.cs. It is a public class; the inheritance chain is TextInquiryData. It exposes 3 public/protected members: 1 methods, 1 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TextInquiryData is a top-level type in TaleWorlds.Library, namespace matching the module directory; inheritance chain TextInquiryData. The surface is method-led (methods 1/3, properties 0/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/TextInquiryData.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TextInquiryData` | `public TextInquiryData(string titleText, string text, bool isAffirmativeOptionShown, bool isNegativeOptionShown, string affirmativeText, string negativeText, Action<string>affirmativeAction, Action negativeAction, bool shouldInputBeObfuscated = false, Func<string, Tuple<bool, string>>textCondition = null, string soundEventPath = "", string defaultInputText = "")` | constructor |
| `HasSameContentWith` | `public bool HasSameContentWith(object other)` | method |
| `Text` | `public string Text` | field |

## See Also

- [↑ library module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AmbientInformation](../AmbientInformation)
- [same namespace ApplicationPlatform](../ApplicationPlatform)
- [same namespace ApplicationVersion](../ApplicationVersion)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
