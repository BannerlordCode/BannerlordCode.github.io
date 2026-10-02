---
title: "PrefabDatabindingExtension"
description: "PrefabDatabindingExtension: a public class in TaleWorlds.GauntletUI.Data, inheriting PrefabExtension; 7 exposed members (7 methods, 0 properties, 0 fields). Canonical bucket gui. Source: TaleWorlds.GauntletUI.Data/PrefabDatabindingExtension.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PrefabDatabindingExtension

**Namespace:** `TaleWorlds.GauntletUI.Data`
**Module:** `TaleWorlds.GauntletUI.Data`
**Type:** `public class PrefabDatabindingExtension : PrefabExtension`
**File:** `TaleWorlds.GauntletUI.Data/PrefabDatabindingExtension.cs`
**Bucket:** `gui` (rule:TaleWorlds.GauntletUI)

## Overview

PrefabDatabindingExtension lives in the TaleWorlds.GauntletUI.Data module, source file TaleWorlds.GauntletUI.Data/PrefabDatabindingExtension.cs. It is a public class, implementing/inheriting PrefabExtension; the inheritance chain is PrefabDatabindingExtension → PrefabExtension. It exposes 7 public/protected members: 7 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PrefabDatabindingExtension lands in canonical bucket `gui` (matched rule `rule:TaleWorlds.GauntletUI`), namespace `TaleWorlds.GauntletUI.Data`, inheritance chain PrefabDatabindingExtension → PrefabExtension. The surface is method-led (methods 7/7, properties 0/7), so it mostly exposes operations. PrefabExtension on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI.Data/PrefabDatabindingExtension.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `RegisterAttributeTypes` | `protected override void RegisterAttributeTypes(WidgetAttributeContext widgetAttributeContext)` | method |
| `OnWidgetCreated` | `protected override void OnWidgetCreated(WidgetCreationData widgetCreationData, WidgetInstantiationResult widgetInstantiationResult, int childCount)` | method |
| `OnSave` | `protected override void OnSave(PrefabExtensionContext prefabExtensionContext, XmlNode node, WidgetTemplate widgetTemplate)` | method |
| `OnAttributesSet` | `protected override void OnAttributesSet(WidgetCreationData widgetCreationData, WidgetInstantiationResult widgetInstantiationResult, Dictionary<string, WidgetAttributeTemplate>parameters)` | method |
| `DoLoading` | `protected override void DoLoading(PrefabExtensionContext prefabExtensionContext, WidgetAttributeContext widgetAttributeContext, WidgetTemplate template, XmlNode node)` | method |
| `OnLoadingFinished` | `protected override void OnLoadingFinished(WidgetPrefab widgetPrefab)` | method |
| `AfterAttributesSet` | `protected override void AfterAttributesSet(WidgetCreationData widgetCreationData, WidgetInstantiationResult widgetInstantiationResult, Dictionary<string, WidgetAttributeTemplate>parameters)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace GauntletMovie](../GauntletMovie/)
- [same namespace GauntletView](../GauntletView/)
- [same namespace GeneratedGauntletMovie](../GeneratedGauntletMovie/)
- [same namespace GeneratedWidgetData](../GeneratedWidgetData/)
