---
title: "SandBoxSaveManager"
description: "SandBoxSaveManager: a public class in SandBox, inheriting ISaveManager; 3 exposed members (3 methods, 0 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/SandBoxSaveManager.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SandBoxSaveManager

**Namespace:** `SandBox`
**Module:** `SandBox`
**Type:** `public class SandBoxSaveManager : ISaveManager`
**File:** `SandBox/SandBoxSaveManager.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

SandBoxSaveManager lives in the SandBox module, source file SandBox/SandBoxSaveManager.cs. It is a public class, implementing/inheriting ISaveManager; the inheritance chain is SandBoxSaveManager → ISaveManager. It exposes 3 public/protected members: 3 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SandBoxSaveManager lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox`, inheritance chain SandBoxSaveManager → ISaveManager. The surface is method-led (methods 3/3, properties 0/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/SandBoxSaveManager.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetAutoSaveInterval` | `public int GetAutoSaveInterval()` | method |
| `IsAutoSaveDisabled` | `public bool IsAutoSaveDisabled()` | method |
| `OnSaveOver` | `public void OnSaveOver(bool isSuccessful, string newSaveGameName)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ISaveManager](../../campaign/ISaveManager/)
- [same namespace Add1000GoldCheat](../Add1000GoldCheat/)
- [same namespace Add100InfluenceCheat](../Add100InfluenceCheat/)
- [same namespace Add100RenownCheat](../Add100RenownCheat/)
- [same namespace AddCraftingMaterialsCheat](../AddCraftingMaterialsCheat/)
