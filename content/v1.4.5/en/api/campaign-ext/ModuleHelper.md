---
title: "ModuleHelper"
description: "Auto-generated class reference for ModuleHelper."
---
# ModuleHelper

**Namespace:** TaleWorlds.ModuleManager
**Module:** TaleWorlds.ModuleManager
**Type:** `public static class ModuleHelper`
**Base:** none
**File:** `bin/TaleWorlds.ModuleManager/TaleWorlds.ModuleManager/ModuleHelper.cs`

## Overview

`ModuleHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `ModuleHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetModuleFullPath
`public static string GetModuleFullPath(string moduleId)`

**Purpose:** **Purpose:** Reads and returns the module full path value held by the this instance.

```csharp
// Static call; no instance required
ModuleHelper.GetModuleFullPath("example");
```

### GetModuleInfo
`public static ModuleInfo GetModuleInfo(string moduleId)`

**Purpose:** **Purpose:** Reads and returns the module info value held by the this instance.

```csharp
// Static call; no instance required
ModuleHelper.GetModuleInfo("example");
```

### OnModuleDeactivated
`public static void OnModuleDeactivated(string id)`

**Purpose:** **Purpose:** Invoked when the module deactivated event is raised.

```csharp
// Static call; no instance required
ModuleHelper.OnModuleDeactivated("example");
```

### OnModuleActivated
`public static void OnModuleActivated(string id)`

**Purpose:** **Purpose:** Invoked when the module activated event is raised.

```csharp
// Static call; no instance required
ModuleHelper.OnModuleActivated("example");
```

### InitializeModules
`public static void InitializeModules(string loadedModuleIds, string platformModulePaths = null)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by modules.

```csharp
// Static call; no instance required
ModuleHelper.InitializeModules("example", "example");
```

### InitializeSingleModule
`public static ModuleInfo InitializeSingleModule(string modulePath)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by single module.

```csharp
// Static call; no instance required
ModuleHelper.InitializeSingleModule("example");
```

### IsModuleActive
`public static bool IsModuleActive(string moduleId)`

**Purpose:** **Purpose:** Determines whether the this instance is in the module active state or condition.

```csharp
// Static call; no instance required
ModuleHelper.IsModuleActive("example");
```

### InitializePlatformModuleExtension
`public static void InitializePlatformModuleExtension(IPlatformModuleExtension moduleExtension, List<string> args)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by platform module extension.

```csharp
// Static call; no instance required
ModuleHelper.InitializePlatformModuleExtension(moduleExtension, args);
```

### ClearPlatformModuleExtension
`public static void ClearPlatformModuleExtension()`

**Purpose:** **Purpose:** Removes all platform module extension from the this instance.

```csharp
// Static call; no instance required
ModuleHelper.ClearPlatformModuleExtension();
```

### GetModuleInfos
`public static List<ModuleInfo> GetModuleInfos(string moduleIds)`

**Purpose:** **Purpose:** Reads and returns the module infos value held by the this instance.

```csharp
// Static call; no instance required
ModuleHelper.GetModuleInfos("example");
```

### GetModules
`public static List<ModuleInfo> GetModules(Func<ModuleInfo, bool> cond = null)`

**Purpose:** **Purpose:** Reads and returns the modules value held by the this instance.

```csharp
// Static call; no instance required
ModuleHelper.GetModules(func<ModuleInfo, false);
```

### GetAllModules
`public static Dictionary<string, ModuleInfo>.ValueCollection GetAllModules()`

**Purpose:** **Purpose:** Reads and returns the all modules value held by the this instance.

```csharp
// Static call; no instance required
ModuleHelper.GetAllModules();
```

### GetActiveModules
`public static List<ModuleInfo> GetActiveModules()`

**Purpose:** **Purpose:** Reads and returns the active modules value held by the this instance.

```csharp
// Static call; no instance required
ModuleHelper.GetActiveModules();
```

### GetMbprojPath
`public static string GetMbprojPath(string id)`

**Purpose:** **Purpose:** Reads and returns the mbproj path value held by the this instance.

```csharp
// Static call; no instance required
ModuleHelper.GetMbprojPath("example");
```

### GetXmlPathForNative
`public static string GetXmlPathForNative(string moduleId, string xmlName)`

**Purpose:** **Purpose:** Reads and returns the xml path for native value held by the this instance.

```csharp
// Static call; no instance required
ModuleHelper.GetXmlPathForNative("example", "example");
```

### GetXmlPathForNativeWBase
`public static string GetXmlPathForNativeWBase(string moduleId, string xmlName)`

**Purpose:** **Purpose:** Reads and returns the xml path for native w base value held by the this instance.

```csharp
// Static call; no instance required
ModuleHelper.GetXmlPathForNativeWBase("example", "example");
```

### GetXsltPathForNative
`public static string GetXsltPathForNative(string moduleId, string xsltName)`

**Purpose:** **Purpose:** Reads and returns the xslt path for native value held by the this instance.

```csharp
// Static call; no instance required
ModuleHelper.GetXsltPathForNative("example", "example");
```

### GetPath
`public static string GetPath(string id)`

**Purpose:** **Purpose:** Reads and returns the path value held by the this instance.

```csharp
// Static call; no instance required
ModuleHelper.GetPath("example");
```

### GetXmlPath
`public static string GetXmlPath(string moduleId, string xmlName)`

**Purpose:** **Purpose:** Reads and returns the xml path value held by the this instance.

```csharp
// Static call; no instance required
ModuleHelper.GetXmlPath("example", "example");
```

### GetXsltPath
`public static string GetXsltPath(string moduleId, string xmlName)`

**Purpose:** **Purpose:** Reads and returns the xslt path value held by the this instance.

```csharp
// Static call; no instance required
ModuleHelper.GetXsltPath("example", "example");
```

### GetXsdPathForModules
`public static string GetXsdPathForModules(string moduleId, string xsdName)`

**Purpose:** **Purpose:** Reads and returns the xsd path for modules value held by the this instance.

```csharp
// Static call; no instance required
ModuleHelper.GetXsdPathForModules("example", "example");
```

### GetXsdPath
`public static string GetXsdPath(string xmlInfoId)`

**Purpose:** **Purpose:** Reads and returns the xsd path value held by the this instance.

```csharp
// Static call; no instance required
ModuleHelper.GetXsdPath("example");
```

### GetDependentModulesOf
`public static IEnumerable<ModuleInfo> GetDependentModulesOf(IEnumerable<ModuleInfo> source, ModuleInfo module)`

**Purpose:** **Purpose:** Reads and returns the dependent modules of value held by the this instance.

```csharp
// Static call; no instance required
ModuleHelper.GetDependentModulesOf(source, module);
```

### GetSortedModules
`public static List<ModuleInfo> GetSortedModules(string moduleIDs)`

**Purpose:** **Purpose:** Reads and returns the sorted modules value held by the this instance.

```csharp
// Static call; no instance required
ModuleHelper.GetSortedModules("example");
```

### GetModulesForLauncher
`public static List<ModuleInfo> GetModulesForLauncher()`

**Purpose:** **Purpose:** Reads and returns the modules for launcher value held by the this instance.

```csharp
// Static call; no instance required
ModuleHelper.GetModulesForLauncher();
```

### GetOfficialModuleIds
`public static MBList<string> GetOfficialModuleIds()`

**Purpose:** **Purpose:** Reads and returns the official module ids value held by the this instance.

```csharp
// Static call; no instance required
ModuleHelper.GetOfficialModuleIds();
```

### GetActiveGameAssemblies
`public static MBList<Assembly> GetActiveGameAssemblies()`

**Purpose:** **Purpose:** Reads and returns the active game assemblies value held by the this instance.

```csharp
// Static call; no instance required
ModuleHelper.GetActiveGameAssemblies();
```

## Usage Example

```csharp
ModuleHelper.Initialize();
```

## See Also

- [Area Index](../)