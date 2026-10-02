---
title: "ProfanityChecker"
description: "ProfanityChecker: a public class in TaleWorlds.Library; 6 exposed members (3 methods, 1 properties, 0 fields). Source: TaleWorlds.Library/ProfanityChecker.cs."
---
# ProfanityChecker

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class ProfanityChecker`
**File:** `TaleWorlds.Library/ProfanityChecker.cs`

## Overview

ProfanityChecker lives in the TaleWorlds.Library module, source file TaleWorlds.Library/ProfanityChecker.cs. It is a public class; the inheritance chain is ProfanityChecker. It exposes 6 public/protected members: 3 methods, 1 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ProfanityChecker is a top-level type in TaleWorlds.Library, namespace matching the module directory; inheritance chain ProfanityChecker. The surface is method-led (methods 3/6, properties 1/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/ProfanityChecker.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ProfanityChecker` | `public ProfanityChecker(string[]profanityList, string[]allowList)` | constructor |
| `IsProfane` | `public bool IsProfane(string word)` | method |
| `ContainsProfanity` | `public bool ContainsProfanity(string text, ProfanityChecker.ProfanityChechkerType checkType)` | method |
| `CensorText` | `public string CensorText(string text)` | method |
| `ProfanityChechkerType` | `public enum ProfanityChechkerType` | property |
| `ProfanityChechkerType` | `public enum ProfanityChechkerType` | nested type |

## See Also

- [↑ library module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AmbientInformation](../AmbientInformation)
- [same namespace ApplicationPlatform](../ApplicationPlatform)
- [same namespace ApplicationVersion](../ApplicationVersion)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
