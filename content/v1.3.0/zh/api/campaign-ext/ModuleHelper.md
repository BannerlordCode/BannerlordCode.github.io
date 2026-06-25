---
title: "ModuleHelper"
description: "ModuleHelper 的自动生成类参考。"
---
# ModuleHelper

**Namespace:** TaleWorlds.ModuleManager
**Module:** TaleWorlds.ModuleManager
**Type:** `public static class ModuleHelper`
**Base:** 无
**File:** `TaleWorlds.ModuleManager/ModuleHelper.cs`

## 概述

`ModuleHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `ModuleHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetModuleFullPath
`public static string GetModuleFullPath(string moduleId)`

**用途 / Purpose:** 读取并返回当前对象中 module full path 的结果。

```csharp
// 静态调用，不需要实例
ModuleHelper.GetModuleFullPath("example");
```

### GetModuleInfo
`public static ModuleInfo GetModuleInfo(string moduleId)`

**用途 / Purpose:** 读取并返回当前对象中 module info 的结果。

```csharp
// 静态调用，不需要实例
ModuleHelper.GetModuleInfo("example");
```

### OnModuleDeactivated
`public static void OnModuleDeactivated(string id)`

**用途 / Purpose:** 在 module deactivated 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
ModuleHelper.OnModuleDeactivated("example");
```

### OnModuleActivated
`public static void OnModuleActivated(string id)`

**用途 / Purpose:** 在 module activated 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
ModuleHelper.OnModuleActivated("example");
```

### InitializeModules
`public static void InitializeModules(string loadedModuleIds, string platformModulePaths = null)`

**用途 / Purpose:** 为 modules 初始化必要的资源、状态或绑定。

```csharp
// 静态调用，不需要实例
ModuleHelper.InitializeModules("example", "example");
```

### InitializeSingleModule
`public static ModuleInfo InitializeSingleModule(string modulePath)`

**用途 / Purpose:** 为 single module 初始化必要的资源、状态或绑定。

```csharp
// 静态调用，不需要实例
ModuleHelper.InitializeSingleModule("example");
```

### IsModuleActive
`public static bool IsModuleActive(string moduleId)`

**用途 / Purpose:** 判断当前对象是否处于 module active 状态或条件。

```csharp
// 静态调用，不需要实例
ModuleHelper.IsModuleActive("example");
```

### InitializePlatformModuleExtension
`public static void InitializePlatformModuleExtension(IPlatformModuleExtension moduleExtension)`

**用途 / Purpose:** 为 platform module extension 初始化必要的资源、状态或绑定。

```csharp
// 静态调用，不需要实例
ModuleHelper.InitializePlatformModuleExtension(moduleExtension);
```

### ClearPlatformModuleExtension
`public static void ClearPlatformModuleExtension()`

**用途 / Purpose:** 清空当前对象中的platform module extension。

```csharp
// 静态调用，不需要实例
ModuleHelper.ClearPlatformModuleExtension();
```

### GetModuleInfos
`public static List<ModuleInfo> GetModuleInfos(string moduleIds)`

**用途 / Purpose:** 读取并返回当前对象中 module infos 的结果。

```csharp
// 静态调用，不需要实例
ModuleHelper.GetModuleInfos("example");
```

### GetModules
`public static List<ModuleInfo> GetModules(Func<ModuleInfo, bool> cond = null)`

**用途 / Purpose:** 读取并返回当前对象中 modules 的结果。

```csharp
// 静态调用，不需要实例
ModuleHelper.GetModules(func<ModuleInfo, false);
```

### GetActiveModules
`public static List<ModuleInfo> GetActiveModules()`

**用途 / Purpose:** 读取并返回当前对象中 active modules 的结果。

```csharp
// 静态调用，不需要实例
ModuleHelper.GetActiveModules();
```

### GetMbprojPath
`public static string GetMbprojPath(string id)`

**用途 / Purpose:** 读取并返回当前对象中 mbproj path 的结果。

```csharp
// 静态调用，不需要实例
ModuleHelper.GetMbprojPath("example");
```

### GetXmlPathForNative
`public static string GetXmlPathForNative(string moduleId, string xmlName)`

**用途 / Purpose:** 读取并返回当前对象中 xml path for native 的结果。

```csharp
// 静态调用，不需要实例
ModuleHelper.GetXmlPathForNative("example", "example");
```

### GetXmlPathForNativeWBase
`public static string GetXmlPathForNativeWBase(string moduleId, string xmlName)`

**用途 / Purpose:** 读取并返回当前对象中 xml path for native w base 的结果。

```csharp
// 静态调用，不需要实例
ModuleHelper.GetXmlPathForNativeWBase("example", "example");
```

### GetXsltPathForNative
`public static string GetXsltPathForNative(string moduleId, string xsltName)`

**用途 / Purpose:** 读取并返回当前对象中 xslt path for native 的结果。

```csharp
// 静态调用，不需要实例
ModuleHelper.GetXsltPathForNative("example", "example");
```

### GetPath
`public static string GetPath(string id)`

**用途 / Purpose:** 读取并返回当前对象中 path 的结果。

```csharp
// 静态调用，不需要实例
ModuleHelper.GetPath("example");
```

### GetXmlPath
`public static string GetXmlPath(string moduleId, string xmlName)`

**用途 / Purpose:** 读取并返回当前对象中 xml path 的结果。

```csharp
// 静态调用，不需要实例
ModuleHelper.GetXmlPath("example", "example");
```

### GetXsltPath
`public static string GetXsltPath(string moduleId, string xmlName)`

**用途 / Purpose:** 读取并返回当前对象中 xslt path 的结果。

```csharp
// 静态调用，不需要实例
ModuleHelper.GetXsltPath("example", "example");
```

### GetXsdPathForModules
`public static string GetXsdPathForModules(string moduleId, string xsdName)`

**用途 / Purpose:** 读取并返回当前对象中 xsd path for modules 的结果。

```csharp
// 静态调用，不需要实例
ModuleHelper.GetXsdPathForModules("example", "example");
```

### GetXsdPath
`public static string GetXsdPath(string xmlInfoId)`

**用途 / Purpose:** 读取并返回当前对象中 xsd path 的结果。

```csharp
// 静态调用，不需要实例
ModuleHelper.GetXsdPath("example");
```

### GetDependentModulesOf
`public static IEnumerable<ModuleInfo> GetDependentModulesOf(IEnumerable<ModuleInfo> source, ModuleInfo module)`

**用途 / Purpose:** 读取并返回当前对象中 dependent modules of 的结果。

```csharp
// 静态调用，不需要实例
ModuleHelper.GetDependentModulesOf(source, module);
```

### GetSortedModules
`public static List<ModuleInfo> GetSortedModules(string moduleIDs)`

**用途 / Purpose:** 读取并返回当前对象中 sorted modules 的结果。

```csharp
// 静态调用，不需要实例
ModuleHelper.GetSortedModules("example");
```

### GetModulesForLauncher
`public static List<ModuleInfo> GetModulesForLauncher()`

**用途 / Purpose:** 读取并返回当前对象中 modules for launcher 的结果。

```csharp
// 静态调用，不需要实例
ModuleHelper.GetModulesForLauncher();
```

### GetOfficialModuleIds
`public static MBList<string> GetOfficialModuleIds()`

**用途 / Purpose:** 读取并返回当前对象中 official module ids 的结果。

```csharp
// 静态调用，不需要实例
ModuleHelper.GetOfficialModuleIds();
```

### GetActiveGameAssemblies
`public static MBList<Assembly> GetActiveGameAssemblies()`

**用途 / Purpose:** 读取并返回当前对象中 active game assemblies 的结果。

```csharp
// 静态调用，不需要实例
ModuleHelper.GetActiveGameAssemblies();
```

## 使用示例

```csharp
ModuleHelper.Initialize();
```

## 参见

- [本区域目录](../)