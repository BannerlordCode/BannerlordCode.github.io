---
title: "ModuleHelper"
description: "Auto-generated class reference for ModuleHelper."
---
# ModuleHelper

**Namespace:** TaleWorlds.ModuleManager
**Module:** TaleWorlds.ModuleManager
**Type:** `public static class ModuleHelper `
**Base:** System.Object
**Source:** TaleWorlds.ModuleManager/ModuleHelper.cs

## Overview

Auto-generated stub for `ModuleHelper`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### GetModuleFullPath
`public static string GetModuleFullPath(string moduleId)`

### GetModuleInfo
`public static ModuleInfo GetModuleInfo(string moduleId)`

### OnModuleDeactivated
`public static void OnModuleDeactivated(string id)`

### OnModuleActivated
`public static void OnModuleActivated(string id)`

### InitializeModules
`public static void InitializeModules(string[] loadedModuleIds,string[] platformModulePaths = null)`

### InitializeSingleModule
`public static ModuleInfo InitializeSingleModule(string modulePath)`

### IsModuleActive
`public static bool IsModuleActive(string moduleId)`

### InitializePlatformModuleExtension
`public static void InitializePlatformModuleExtension(IPlatformModuleExtension moduleExtension,List<string> args)`

### ClearPlatformModuleExtension
`public static void ClearPlatformModuleExtension()`

### GetModuleInfos
`public static List<ModuleInfo> GetModuleInfos(string[] moduleIds)`

### GetModules
`public static List<ModuleInfo> GetModules(Func<ModuleInfo,bool> cond = null)`

### GetAllModules
`public static Dictionary<string,ModuleInfo>.ValueCollection GetAllModules()`

### GetActiveModules
`public static List<ModuleInfo> GetActiveModules()`

### GetMbprojPath
`public static string GetMbprojPath(string id)`

### GetXmlPathForNative
`public static string GetXmlPathForNative(string moduleId,string xmlName)`

### GetXmlPathForNativeWBase
`public static string GetXmlPathForNativeWBase(string moduleId,string xmlName)`

### GetXsltPathForNative
`public static string GetXsltPathForNative(string moduleId,string xsltName)`

### GetPath
`public static string GetPath(string id)`

### GetXmlPath
`public static string GetXmlPath(string moduleId,string xmlName)`

### GetXsltPath
`public static string GetXsltPath(string moduleId,string xmlName)`

### GetXsdPathForModules
`public static string GetXsdPathForModules(string moduleId,string xsdName)`

### GetXsdPath
`public static string GetXsdPath(string xmlInfoId)`

### GetDependentModulesOf
`public static IEnumerable<ModuleInfo> GetDependentModulesOf(IEnumerable<ModuleInfo> source,ModuleInfo module)`

### GetSortedModules
`public static List<ModuleInfo> GetSortedModules(string[] moduleIDs)`

### GetModulesForLauncher
`public static List<ModuleInfo> GetModulesForLauncher()`

### GetOfficialModuleIds
`public static MBList<string> GetOfficialModuleIds()`

### GetActiveGameAssemblies
`public static MBList<Assembly> GetActiveGameAssemblies()`

## See Also

- [Section index](../)
