---
title: "DependedModule"
description: "DependedModule: a public struct in TaleWorlds.ModuleManager; 5 exposed members (1 methods, 3 properties, 0 fields). Canonical bucket modulemanager. Source: TaleWorlds.ModuleManager/DependedModule.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DependedModule

**Namespace:** `TaleWorlds.ModuleManager`
**Module:** `TaleWorlds.ModuleManager`
**Type:** `public struct DependedModule`
**File:** `TaleWorlds.ModuleManager/DependedModule.cs`
**Bucket:** `modulemanager` (rule:TaleWorlds.ModuleManager)

## Overview

DependedModule lives in the TaleWorlds.ModuleManager module, source file TaleWorlds.ModuleManager/DependedModule.cs. It is a public struct; the inheritance chain is DependedModule. It exposes 5 public/protected members: 1 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DependedModule lands in canonical bucket `modulemanager` (matched rule `rule:TaleWorlds.ModuleManager`), namespace `TaleWorlds.ModuleManager`, inheritance chain DependedModule. The surface is property-led (properties 3/5, methods 1/5), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.ModuleManager/DependedModule.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ModuleId` | `public string ModuleId` | property |
| `Version` | `public ApplicationVersion Version` | property |
| `IsOptional` | `public bool IsOptional` | property |
| `DependedModule` | `public DependedModule(string moduleId, ApplicationVersion version, bool isOptional = false)` | constructor |
| `UpdateVersionChangeSet` | `public void UpdateVersionChangeSet()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace Extensions](../Extensions/)
- [same namespace IPlatformModuleExtension](../IPlatformModuleExtension/)
- [same namespace ModuleCategory](../ModuleCategory/)
- [same namespace ModuleHelper](../ModuleHelper/)
