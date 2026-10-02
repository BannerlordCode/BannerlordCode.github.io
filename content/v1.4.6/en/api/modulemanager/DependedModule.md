---
title: "DependedModule"
description: "DependedModule: a public struct in TaleWorlds.ModuleManager; 5 exposed members (1 methods, 3 properties, 0 fields). Source: TaleWorlds.ModuleManager/DependedModule.cs."
---
# DependedModule

**Namespace:** `TaleWorlds.ModuleManager`
**Module:** `TaleWorlds.ModuleManager`
**Type:** `public struct DependedModule`
**File:** `TaleWorlds.ModuleManager/DependedModule.cs`

## Overview

DependedModule lives in the TaleWorlds.ModuleManager module, source file TaleWorlds.ModuleManager/DependedModule.cs. It is a public struct; the inheritance chain is DependedModule. It exposes 5 public/protected members: 1 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DependedModule is a top-level type in TaleWorlds.ModuleManager, namespace matching the module directory; inheritance chain DependedModule. The surface is property-led (properties 3/5, methods 1/5), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.ModuleManager/DependedModule.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ModuleId` | `public string ModuleId` | property |
| `Version` | `public ApplicationVersion Version` | property |
| `IsOptional` | `public bool IsOptional` | property |
| `DependedModule` | `public DependedModule(string moduleId, ApplicationVersion version, bool isOptional = false)` | constructor |
| `UpdateVersionChangeSet` | `public void UpdateVersionChangeSet()` | method |

## See Also

- [↑ modulemanager module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace Extensions](../Extensions)
- [same namespace IPlatformModuleExtension](../IPlatformModuleExtension)
- [same namespace ModuleCategory](../ModuleCategory)
- [same namespace ModuleHelper](../ModuleHelper)
