---
title: "ModuleInfo"
description: "ModuleInfo: a public class in TaleWorlds.ModuleManager; 19 exposed members (4 methods, 14 properties, 0 fields). Source: TaleWorlds.ModuleManager/ModuleInfo.cs."
---
# ModuleInfo

**Namespace:** `TaleWorlds.ModuleManager`
**Module:** `TaleWorlds.ModuleManager`
**Type:** `public class ModuleInfo`
**File:** `TaleWorlds.ModuleManager/ModuleInfo.cs`

## Overview

ModuleInfo lives in the TaleWorlds.ModuleManager module, source file TaleWorlds.ModuleManager/ModuleInfo.cs. It is a public class; the inheritance chain is ModuleInfo. It exposes 19 public/protected members: 4 methods, 14 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ModuleInfo is a top-level type in TaleWorlds.ModuleManager, namespace matching the module directory; inheritance chain ModuleInfo. The surface is property-led (properties 14/19, methods 4/19), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.ModuleManager/ModuleInfo.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsSelected` | `public bool IsSelected` | property |
| `Id` | `public string Id` | property |
| `Name` | `public string Name` | property |
| `IsOfficial` | `public bool IsOfficial` | property |
| `IsDefault` | `public bool IsDefault` | property |
| `IsRequiredOfficial` | `public bool IsRequiredOfficial` | property |
| `IsActive` | `public bool IsActive` | property |
| `Version` | `public ApplicationVersion Version` | property |
| `RequiredBaseVersion` | `public ApplicationVersion RequiredBaseVersion` | property |
| `Category` | `public ModuleCategory Category` | property |
| `FolderPath` | `public string FolderPath` | property |
| `Type` | `public ModuleType Type` | property |
| `HasMultiplayerCategory` | `public bool HasMultiplayerCategory` | property |
| `IsNative` | `public bool IsNative` | property |
| `ModuleInfo` | `public ModuleInfo()` | constructor |
| `LoadWithFullPath` | `public void LoadWithFullPath(string fullPath)` | method |
| `ActivateModule` | `public void ActivateModule()` | method |
| `DeactivateModule` | `public void DeactivateModule()` | method |
| `UpdateVersionChangeSet` | `public void UpdateVersionChangeSet()` | method |

## See Also

- [↑ modulemanager module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace DependedModule](../DependedModule)
- [same namespace Extensions](../Extensions)
- [same namespace IPlatformModuleExtension](../IPlatformModuleExtension)
- [same namespace ModuleCategory](../ModuleCategory)
