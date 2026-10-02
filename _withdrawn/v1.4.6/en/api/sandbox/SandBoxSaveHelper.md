---
title: "SandBoxSaveHelper"
description: "SandBoxSaveHelper: a public class in SandBox; 9 exposed members (4 methods, 2 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/SandBoxSaveHelper.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SandBoxSaveHelper

**Namespace:** `SandBox`
**Module:** `SandBox`
**Type:** `public static class SandBoxSaveHelper`
**File:** `SandBox/SandBoxSaveHelper.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

SandBoxSaveHelper lives in the SandBox module, source file SandBox/SandBoxSaveHelper.cs. It is a public class; the inheritance chain is SandBoxSaveHelper. It exposes 9 public/protected members: 4 methods, 2 properties, 1 events, 2 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SandBoxSaveHelper lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox`, inheritance chain SandBoxSaveHelper. The surface is method-led (methods 4/9, properties 2/9), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/SandBoxSaveHelper.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Action` | `public static event Action<SandBoxSaveHelper.SaveHelperState>OnStateChange;` | event |
| `TryLoadSave` | `public static void TryLoadSave(SaveGameFileInfo saveInfo, Action<LoadResult>onStartGame, Action onCancel = null)` | method |
| `MBReadOnlyList` | `public static MBReadOnlyList<SandBoxSaveHelper.ModuleCheckResult>CheckMetaDataCompatibilityErrors(MetaData fileMetaData)` | method |
| `GetIsDisabledWithReason` | `public static bool GetIsDisabledWithReason(SaveGameFileInfo saveGameFileInfo, out TextObject reason)` | method |
| `GetModuleNameFromModuleId` | `public static string GetModuleNameFromModuleId(string id)` | method |
| `SaveHelperState` | `public enum SaveHelperState` | property |
| `ModuleCheckResult` | `public readonly struct ModuleCheckResult` | property |
| `SaveHelperState` | `public enum SaveHelperState` | nested type |
| `ModuleCheckResult` | `public readonly struct ModuleCheckResult` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace Add1000GoldCheat](../Add1000GoldCheat/)
- [same namespace Add100InfluenceCheat](../Add100InfluenceCheat/)
- [same namespace Add100RenownCheat](../Add100RenownCheat/)
- [same namespace AddCraftingMaterialsCheat](../AddCraftingMaterialsCheat/)
