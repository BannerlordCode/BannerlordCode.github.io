---
title: "SaveableLocalizationTypeDefiner"
description: "SaveableLocalizationTypeDefiner: a public class in TaleWorlds.Localization, inheriting SaveableTypeDefiner; 3 exposed members (2 methods, 0 properties, 0 fields). Source: TaleWorlds.Localization/SaveableLocalizationTypeDefiner.cs."
---
# SaveableLocalizationTypeDefiner

**Namespace:** `TaleWorlds.Localization`
**Module:** `TaleWorlds.Localization`
**Type:** `public class SaveableLocalizationTypeDefiner : SaveableTypeDefiner`
**File:** `TaleWorlds.Localization/SaveableLocalizationTypeDefiner.cs`

## Overview

SaveableLocalizationTypeDefiner lives in the TaleWorlds.Localization module, source file TaleWorlds.Localization/SaveableLocalizationTypeDefiner.cs. It is a public class, implementing/inheriting SaveableTypeDefiner; the inheritance chain is SaveableLocalizationTypeDefiner → SaveableTypeDefiner. It exposes 3 public/protected members: 2 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SaveableLocalizationTypeDefiner is a top-level type in TaleWorlds.Localization, namespace matching the module directory; inheritance chain SaveableLocalizationTypeDefiner → SaveableTypeDefiner. The surface is method-led (methods 2/3, properties 0/3), so it mostly exposes operations. SaveableTypeDefiner on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Localization/SaveableLocalizationTypeDefiner.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SaveableLocalizationTypeDefiner` | `public SaveableLocalizationTypeDefiner() : base(20000)` | constructor |
| `DefineClassTypes` | `protected override void DefineClassTypes()` | method |
| `DefineContainerDefinitions` | `protected override void DefineContainerDefinitions()` | method |

## See Also

- [↑ localization module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace DateRange](../DateRange)
- [same namespace LocalizationException](../LocalizationException)
- [same namespace LocalizedTextManager](../LocalizedTextManager)
- [same namespace LocalizedVoiceManager](../LocalizedVoiceManager)
