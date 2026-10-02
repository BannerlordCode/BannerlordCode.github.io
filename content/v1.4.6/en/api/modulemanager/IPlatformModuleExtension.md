---
title: "IPlatformModuleExtension"
description: "IPlatformModuleExtension: a public interface in TaleWorlds.ModuleManager; 5 exposed members (5 methods, 0 properties, 0 fields). Source: TaleWorlds.ModuleManager/IPlatformModuleExtension.cs."
---
# IPlatformModuleExtension

**Namespace:** `TaleWorlds.ModuleManager`
**Module:** `TaleWorlds.ModuleManager`
**Type:** `public interface IPlatformModuleExtension`
**File:** `TaleWorlds.ModuleManager/IPlatformModuleExtension.cs`

## Overview

IPlatformModuleExtension lives in the TaleWorlds.ModuleManager module, source file TaleWorlds.ModuleManager/IPlatformModuleExtension.cs. It is a public interface; the inheritance chain is IPlatformModuleExtension. It exposes 5 public/protected members: 5 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IPlatformModuleExtension is a top-level type in TaleWorlds.ModuleManager, namespace matching the module directory; inheritance chain IPlatformModuleExtension. The surface is method-led (methods 5/5, properties 0/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.ModuleManager/IPlatformModuleExtension.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Initialize` | `void Initialize(List<string>args);` | method |
| `Destroy` | `void Destroy();` | method |
| `string[]GetModulePaths` | `string[]GetModulePaths();` | method |
| `SetLauncherMode` | `void SetLauncherMode(bool isLauncherModeActive);` | method |
| `CheckEntitlement` | `bool CheckEntitlement(string title);` | method |

## See Also

- [↑ modulemanager module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace DependedModule](../DependedModule)
- [same namespace Extensions](../Extensions)
- [same namespace ModuleCategory](../ModuleCategory)
- [same namespace ModuleHelper](../ModuleHelper)
