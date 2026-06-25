---
title: "ModuleHelper"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ModuleHelper`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ModuleHelper

**Namespace:** TaleWorlds.ModuleManager
**Module:** TaleWorlds.ModuleManager
**Type:** `public static class ModuleHelper`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.ModuleManager/TaleWorlds.ModuleManager/ModuleHelper.cs`

## 概述

`ModuleHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `ModuleHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetModuleFullPath
`public static string GetModuleFullPath(string moduleId)`

**用途 / Purpose:** 获取 `module full path` 的当前值。

### GetModuleInfo
`public static ModuleInfo GetModuleInfo(string moduleId)`

**用途 / Purpose:** 获取 `module info` 的当前值。

### OnModuleDeactivated
`public static void OnModuleDeactivated(string id)`

**用途 / Purpose:** 当 `module deactivated` 事件触发时调用此方法。

### OnModuleActivated
`public static void OnModuleActivated(string id)`

**用途 / Purpose:** 当 `module activated` 事件触发时调用此方法。

### InitializeModules
`public static void InitializeModules(string loadedModuleIds, string platformModulePaths = null)`

**用途 / Purpose:** 初始化 `modules` 的状态、资源或绑定。

### InitializeSingleModule
`public static ModuleInfo InitializeSingleModule(string modulePath)`

**用途 / Purpose:** 初始化 `single module` 的状态、资源或绑定。

### IsModuleActive
`public static bool IsModuleActive(string moduleId)`

**用途 / Purpose:** 处理 `is module active` 相关逻辑。

### InitializePlatformModuleExtension
`public static void InitializePlatformModuleExtension(IPlatformModuleExtension moduleExtension, List<string> args)`

**用途 / Purpose:** 初始化 `platform module extension` 的状态、资源或绑定。

### ClearPlatformModuleExtension
`public static void ClearPlatformModuleExtension()`

**用途 / Purpose:** 处理 `clear platform module extension` 相关逻辑。

### GetModuleInfos
`public static List<ModuleInfo> GetModuleInfos(string moduleIds)`

**用途 / Purpose:** 获取 `module infos` 的当前值。

### GetModules
`public static List<ModuleInfo> GetModules(Func<ModuleInfo, bool> cond = null)`

**用途 / Purpose:** 获取 `modules` 的当前值。

### GetAllModules
`public static Dictionary<string, ModuleInfo>.ValueCollection GetAllModules()`

**用途 / Purpose:** 获取 `all modules` 的当前值。

### GetActiveModules
`public static List<ModuleInfo> GetActiveModules()`

**用途 / Purpose:** 获取 `active modules` 的当前值。

### GetMbprojPath
`public static string GetMbprojPath(string id)`

**用途 / Purpose:** 获取 `mbproj path` 的当前值。

### GetXmlPathForNative
`public static string GetXmlPathForNative(string moduleId, string xmlName)`

**用途 / Purpose:** 获取 `xml path for native` 的当前值。

### GetXmlPathForNativeWBase
`public static string GetXmlPathForNativeWBase(string moduleId, string xmlName)`

**用途 / Purpose:** 获取 `xml path for native w base` 的当前值。

### GetXsltPathForNative
`public static string GetXsltPathForNative(string moduleId, string xsltName)`

**用途 / Purpose:** 获取 `xslt path for native` 的当前值。

### GetPath
`public static string GetPath(string id)`

**用途 / Purpose:** 获取 `path` 的当前值。

### GetXmlPath
`public static string GetXmlPath(string moduleId, string xmlName)`

**用途 / Purpose:** 获取 `xml path` 的当前值。

### GetXsltPath
`public static string GetXsltPath(string moduleId, string xmlName)`

**用途 / Purpose:** 获取 `xslt path` 的当前值。

### GetXsdPathForModules
`public static string GetXsdPathForModules(string moduleId, string xsdName)`

**用途 / Purpose:** 获取 `xsd path for modules` 的当前值。

### GetXsdPath
`public static string GetXsdPath(string xmlInfoId)`

**用途 / Purpose:** 获取 `xsd path` 的当前值。

### GetDependentModulesOf
`public static IEnumerable<ModuleInfo> GetDependentModulesOf(IEnumerable<ModuleInfo> source, ModuleInfo module)`

**用途 / Purpose:** 获取 `dependent modules of` 的当前值。

### GetSortedModules
`public static List<ModuleInfo> GetSortedModules(string moduleIDs)`

**用途 / Purpose:** 获取 `sorted modules` 的当前值。

### GetModulesForLauncher
`public static List<ModuleInfo> GetModulesForLauncher()`

**用途 / Purpose:** 获取 `modules for launcher` 的当前值。

### GetOfficialModuleIds
`public static MBList<string> GetOfficialModuleIds()`

**用途 / Purpose:** 获取 `official module ids` 的当前值。

### GetActiveGameAssemblies
`public static MBList<Assembly> GetActiveGameAssemblies()`

**用途 / Purpose:** 获取 `active game assemblies` 的当前值。

## 使用示例

```csharp
ModuleHelper.Initialize();
```

## 参见

- [完整类目录](../catalog)