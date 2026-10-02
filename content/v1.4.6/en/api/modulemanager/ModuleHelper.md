---
title: "ModuleHelper"
description: "ModuleHelper: a public class in TaleWorlds.ModuleManager; 32 exposed members (27 methods, 2 properties, 3 fields). Source: TaleWorlds.ModuleManager/ModuleHelper.cs."
---
# ModuleHelper

**Namespace:** `TaleWorlds.ModuleManager`
**Module:** `TaleWorlds.ModuleManager`
**Type:** `public static class ModuleHelper`
**File:** `TaleWorlds.ModuleManager/ModuleHelper.cs`

## Overview

ModuleHelper lives in the TaleWorlds.ModuleManager module, source file TaleWorlds.ModuleManager/ModuleHelper.cs. It is a public class; the inheritance chain is ModuleHelper. It exposes 32 public/protected members: 27 methods, 2 properties, 3 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ModuleHelper is a top-level type in TaleWorlds.ModuleManager, namespace matching the module directory; inheritance chain ModuleHelper. The surface is method-led (methods 27/32, properties 2/32), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.ModuleManager/ModuleHelper.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetModuleFullPath` | `public static string GetModuleFullPath(string moduleId)` | method |
| `GetModuleInfo` | `public static ModuleInfo GetModuleInfo(string moduleId)` | method |
| `OnModuleDeactivated` | `public static void OnModuleDeactivated(string id)` | method |
| `OnModuleActivated` | `public static void OnModuleActivated(string id)` | method |
| `InitializeModules` | `public static void InitializeModules(string[]loadedModuleIds, string[]platformModulePaths = null)` | method |
| `InitializeSingleModule` | `public static ModuleInfo InitializeSingleModule(string modulePath)` | method |
| `IsModuleActive` | `public static bool IsModuleActive(string moduleId)` | method |
| `InitializePlatformModuleExtension` | `public static void InitializePlatformModuleExtension(IPlatformModuleExtension moduleExtension, List<string>args)` | method |
| `ClearPlatformModuleExtension` | `public static void ClearPlatformModuleExtension()` | method |
| `List` | `public static List<ModuleInfo>GetModuleInfos(string[]moduleIds)` | method |
| `List` | `public static List<ModuleInfo>GetModules(Func<ModuleInfo, bool>cond = null)` | method |
| `GetAllModules` | `public static Dictionary<string, ModuleInfo>.ValueCollection GetAllModules()` | method |
| `List` | `public static List<ModuleInfo>GetActiveModules()` | method |
| `GetMbprojPath` | `public static string GetMbprojPath(string id)` | method |
| `GetXmlPathForNative` | `public static string GetXmlPathForNative(string moduleId, string xmlName)` | method |
| `GetXmlPathForNativeWBase` | `public static string GetXmlPathForNativeWBase(string moduleId, string xmlName)` | method |
| `GetXsltPathForNative` | `public static string GetXsltPathForNative(string moduleId, string xsltName)` | method |
| `GetPath` | `public static string GetPath(string id)` | method |
| `GetXmlPath` | `public static string GetXmlPath(string moduleId, string xmlName)` | method |
| `GetXsltPath` | `public static string GetXsltPath(string moduleId, string xmlName)` | method |
| `GetXsdPathForModules` | `public static string GetXsdPathForModules(string moduleId, string xsdName)` | method |
| `GetXsdPath` | `public static string GetXsdPath(string xmlInfoId)` | method |
| `IEnumerable` | `public static IEnumerable<ModuleInfo>GetDependentModulesOf(IEnumerable<ModuleInfo>source, ModuleInfo module)` | method |
| `List` | `public static List<ModuleInfo>GetSortedModules(string[]moduleIDs)` | method |
| `List` | `public static List<ModuleInfo>GetModulesForLauncher()` | method |
| `MBList` | `public static MBList<string>GetOfficialModuleIds()` | method |
| `MBList` | `public static MBList<Assembly>GetActiveGameAssemblies()` | method |
| `ModuleVersionSeperator` | `public const char ModuleVersionSeperator` | field |
| `IsTestMode` | `public static bool IsTestMode` | field |
| `ModuleCodeSeperator` | `public const char ModuleCodeSeperator` | field |
| `MBList` | `public static readonly MBList<string>ModulesDisablingLoadingAfterBeingRemoved` | property |
| `MBList` | `public static readonly MBList<string>ModulesDisablingLoadingAfterBeingAdded` | property |

## See Also

- [↑ modulemanager module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace DependedModule](../DependedModule)
- [same namespace Extensions](../Extensions)
- [same namespace IPlatformModuleExtension](../IPlatformModuleExtension)
- [same namespace ModuleCategory](../ModuleCategory)
