---
title: "LocalizationException"
description: "LocalizationException: a public class in TaleWorlds.Localization, inheriting Exception; 3 exposed members (0 methods, 0 properties, 0 fields). Source: TaleWorlds.Localization/LocalizationException.cs."
---
# LocalizationException

**Namespace:** `TaleWorlds.Localization`
**Module:** `TaleWorlds.Localization`
**Type:** `public class LocalizationException : Exception`
**File:** `TaleWorlds.Localization/LocalizationException.cs`

## Overview

LocalizationException lives in the TaleWorlds.Localization module, source file TaleWorlds.Localization/LocalizationException.cs. It is a public class, implementing/inheriting Exception; the inheritance chain is LocalizationException → Exception. It exposes 3 public/protected members: 3 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: LocalizationException is a top-level type in TaleWorlds.Localization, namespace matching the module directory; inheritance chain LocalizationException → Exception. The surface is method-led (methods 0/3, properties 0/3), so it mostly exposes operations. Exception on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Localization/LocalizationException.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `LocalizationException` | `public LocalizationException()` | constructor |
| `LocalizationException` | `public LocalizationException(string message) : base(message)` | constructor |
| `LocalizationException` | `public LocalizationException(string message, Exception inner) : base(message, inner)` | constructor |

## See Also

- [↑ localization module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace DateRange](../DateRange)
- [same namespace LocalizedTextManager](../LocalizedTextManager)
- [same namespace LocalizedVoiceManager](../LocalizedVoiceManager)
- [same namespace MBTextManager](../MBTextManager)
