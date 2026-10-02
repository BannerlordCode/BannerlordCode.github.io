---
title: "VoiceObject"
description: "VoiceObject: a public class in TaleWorlds.Localization; 3 exposed members (2 methods, 1 properties, 0 fields). Canonical bucket localization. Source: TaleWorlds.Localization/VoiceObject.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# VoiceObject

**Namespace:** `TaleWorlds.Localization`
**Module:** `TaleWorlds.Localization`
**Type:** `public class VoiceObject`
**File:** `TaleWorlds.Localization/VoiceObject.cs`
**Bucket:** `localization` (rule:TaleWorlds.Localization)

## Overview

VoiceObject lives in the TaleWorlds.Localization module, source file TaleWorlds.Localization/VoiceObject.cs. It is a public class; the inheritance chain is VoiceObject. It exposes 3 public/protected members: 2 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: VoiceObject lands in canonical bucket `localization` (matched rule `rule:TaleWorlds.Localization`), namespace `TaleWorlds.Localization`, inheritance chain VoiceObject. The surface is method-led (methods 2/3, properties 1/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Localization/VoiceObject.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MBReadOnlyList` | `public MBReadOnlyList<string>VoicePaths` | property |
| `AddVoicePaths` | `public void AddVoicePaths(XmlNode node, string modulePath)` | method |
| `Deserialize` | `public static VoiceObject Deserialize(XmlNode node, string modulePath)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace DateRange](../DateRange/)
- [same namespace LocalizationException](../LocalizationException/)
- [same namespace LocalizedTextManager](../LocalizedTextManager/)
- [same namespace LocalizedVoiceManager](../LocalizedVoiceManager/)
