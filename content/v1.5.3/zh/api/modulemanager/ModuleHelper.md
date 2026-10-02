---
title: "ModuleHelper"
description: "ModuleHelper 的自动生成类参考。"
---
# ModuleHelper

**Namespace:** TaleWorlds.ModuleManager
**Module:** TaleWorlds.ModuleManager
**Type:** `public static class ModuleHelper `
**Base:** System.Object
**Source:** TaleWorlds.ModuleManager/ModuleHelper.cs

## 概述

`ModuleHelper` 的自动生成类参考页面。声明来自 `TaleWorlds.ModuleManager/ModuleHelper.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetModuleFullPath
`public static string GetModuleFullPath(string moduleId) `

### GetModuleInfo
`public static ModuleInfo GetModuleInfo(string moduleId) `

### OnModuleDeactivated
`public static void OnModuleDeactivated(string id) `

### OnModuleActivated
`public static void OnModuleActivated(string id) `

### InitializeModules
`public static void InitializeModules(string[] loadedModuleIds,string[] platformModulePaths = null) `

### InitializeSingleModule
`public static ModuleInfo InitializeSingleModule(string modulePath) `

### IsModuleActive
`public static bool IsModuleActive(string moduleId) `

### InitializePlatformModuleExtension
`public static void InitializePlatformModuleExtension(IPlatformModuleExtension moduleExtension,List<string> args) `

### ClearPlatformModuleExtension
`public static void ClearPlatformModuleExtension() `

### GetModuleInfos
`public static List<ModuleInfo> GetModuleInfos(string[] moduleIds) `

### GetModules
`public static List<ModuleInfo> GetModules(Func<ModuleInfo,bool> cond = null) `

### GetAllModules
`public static Dictionary<string,ModuleInfo>.ValueCollection GetAllModules() `

### GetActiveModules
`public static List<ModuleInfo> GetActiveModules() `

### GetMbprojPath
`public static string GetMbprojPath(string id) `

### GetXmlPathForNative
`public static string GetXmlPathForNative(string moduleId,string xmlName) `

### GetXmlPathForNativeWBase
`public static string GetXmlPathForNativeWBase(string moduleId,string xmlName) `

### GetXsltPathForNative
`public static string GetXsltPathForNative(string moduleId,string xsltName) `

### GetPath
`public static string GetPath(string id) `

### GetXmlPath
`public static string GetXmlPath(string moduleId,string xmlName) `

### GetXsltPath
`public static string GetXsltPath(string moduleId,string xmlName) `

### GetXsdPathForModules
`public static string GetXsdPathForModules(string moduleId,string xsdName) `

### GetXsdPath
`public static string GetXsdPath(string xmlInfoId) `

### GetDependentModulesOf
`public static IEnumerable<ModuleInfo> GetDependentModulesOf(IEnumerable<ModuleInfo> source,ModuleInfo module) `

### GetSortedModules
`public static List<ModuleInfo> GetSortedModules(string[] moduleIDs) `

### GetModulesForLauncher
`public static List<ModuleInfo> GetModulesForLauncher() `

### GetOfficialModuleIds
`public static MBList<string> GetOfficialModuleIds() `

### GetActiveGameAssemblies
`public static MBList<Assembly> GetActiveGameAssemblies() `

## 参见

- [本区域目录](../)
- [API 参考](../../)
