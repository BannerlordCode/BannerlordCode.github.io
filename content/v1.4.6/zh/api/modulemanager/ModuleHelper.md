---
title: "ModuleHelper"
description: "ModuleHelper：TaleWorlds.ModuleManager 的 public 类；公开成员 32 个（方法 27、属性 2、字段 3）。源文件 TaleWorlds.ModuleManager/ModuleHelper.cs。"
---
# ModuleHelper

**Namespace:** `TaleWorlds.ModuleManager`
**Module:** `TaleWorlds.ModuleManager`
**Type:** `public static class ModuleHelper`
**File:** `TaleWorlds.ModuleManager/ModuleHelper.cs`

## 概述

ModuleHelper 位于 TaleWorlds.ModuleManager 模块，源文件 TaleWorlds.ModuleManager/ModuleHelper.cs。它是一个 public 类，继承链为 ModuleHelper。public/protected 成员共 32 个：27 方法、2 属性、3 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ModuleHelper 是 TaleWorlds.ModuleManager 的顶层类型，命名空间与模块目录一致，继承链 ModuleHelper。成员构成以方法为主（方法 27/32，属性 2/32），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.ModuleManager/ModuleHelper.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetModuleFullPath` | `public static string GetModuleFullPath(string moduleId)` | 方法 |
| `GetModuleInfo` | `public static ModuleInfo GetModuleInfo(string moduleId)` | 方法 |
| `OnModuleDeactivated` | `public static void OnModuleDeactivated(string id)` | 方法 |
| `OnModuleActivated` | `public static void OnModuleActivated(string id)` | 方法 |
| `InitializeModules` | `public static void InitializeModules(string[]loadedModuleIds, string[]platformModulePaths = null)` | 方法 |
| `InitializeSingleModule` | `public static ModuleInfo InitializeSingleModule(string modulePath)` | 方法 |
| `IsModuleActive` | `public static bool IsModuleActive(string moduleId)` | 方法 |
| `InitializePlatformModuleExtension` | `public static void InitializePlatformModuleExtension(IPlatformModuleExtension moduleExtension, List<string>args)` | 方法 |
| `ClearPlatformModuleExtension` | `public static void ClearPlatformModuleExtension()` | 方法 |
| `List` | `public static List<ModuleInfo>GetModuleInfos(string[]moduleIds)` | 方法 |
| `List` | `public static List<ModuleInfo>GetModules(Func<ModuleInfo, bool>cond = null)` | 方法 |
| `GetAllModules` | `public static Dictionary<string, ModuleInfo>.ValueCollection GetAllModules()` | 方法 |
| `List` | `public static List<ModuleInfo>GetActiveModules()` | 方法 |
| `GetMbprojPath` | `public static string GetMbprojPath(string id)` | 方法 |
| `GetXmlPathForNative` | `public static string GetXmlPathForNative(string moduleId, string xmlName)` | 方法 |
| `GetXmlPathForNativeWBase` | `public static string GetXmlPathForNativeWBase(string moduleId, string xmlName)` | 方法 |
| `GetXsltPathForNative` | `public static string GetXsltPathForNative(string moduleId, string xsltName)` | 方法 |
| `GetPath` | `public static string GetPath(string id)` | 方法 |
| `GetXmlPath` | `public static string GetXmlPath(string moduleId, string xmlName)` | 方法 |
| `GetXsltPath` | `public static string GetXsltPath(string moduleId, string xmlName)` | 方法 |
| `GetXsdPathForModules` | `public static string GetXsdPathForModules(string moduleId, string xsdName)` | 方法 |
| `GetXsdPath` | `public static string GetXsdPath(string xmlInfoId)` | 方法 |
| `IEnumerable` | `public static IEnumerable<ModuleInfo>GetDependentModulesOf(IEnumerable<ModuleInfo>source, ModuleInfo module)` | 方法 |
| `List` | `public static List<ModuleInfo>GetSortedModules(string[]moduleIDs)` | 方法 |
| `List` | `public static List<ModuleInfo>GetModulesForLauncher()` | 方法 |
| `MBList` | `public static MBList<string>GetOfficialModuleIds()` | 方法 |
| `MBList` | `public static MBList<Assembly>GetActiveGameAssemblies()` | 方法 |
| `ModuleVersionSeperator` | `public const char ModuleVersionSeperator` | 字段 |
| `IsTestMode` | `public static bool IsTestMode` | 字段 |
| `ModuleCodeSeperator` | `public const char ModuleCodeSeperator` | 字段 |
| `MBList` | `public static readonly MBList<string>ModulesDisablingLoadingAfterBeingRemoved` | 属性 |
| `MBList` | `public static readonly MBList<string>ModulesDisablingLoadingAfterBeingAdded` | 属性 |

## 参见

- [↑ modulemanager 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 DependedModule](../DependedModule)
- [同命名空间 Extensions](../Extensions)
- [同命名空间 IPlatformModuleExtension](../IPlatformModuleExtension)
- [同命名空间 ModuleCategory](../ModuleCategory)
