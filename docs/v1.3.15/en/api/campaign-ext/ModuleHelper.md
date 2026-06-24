<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ModuleHelper`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ModuleHelper

**Namespace:** TaleWorlds.ModuleManager
**Module:** TaleWorlds.ModuleManager
**Type:** `public static class ModuleHelper`
**Base:** none
**File:** `TaleWorlds.ModuleManager/ModuleHelper.cs`

## Overview

`ModuleHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `ModuleHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetModuleFullPath
`public static string GetModuleFullPath(string moduleId)`

**Purpose:** Gets the current value of `module full path`.

### GetModuleInfo
`public static ModuleInfo GetModuleInfo(string moduleId)`

**Purpose:** Gets the current value of `module info`.

### OnModuleDeactivated
`public static void OnModuleDeactivated(string id)`

**Purpose:** Called when the `module deactivated` event is raised.

### OnModuleActivated
`public static void OnModuleActivated(string id)`

**Purpose:** Called when the `module activated` event is raised.

### InitializeModules
`public static void InitializeModules(string loadedModuleIds, string platformModulePaths = null)`

**Purpose:** Initializes the state, resources, or bindings for `modules`.

### InitializeSingleModule
`public static ModuleInfo InitializeSingleModule(string modulePath)`

**Purpose:** Initializes the state, resources, or bindings for `single module`.

### IsModuleActive
`public static bool IsModuleActive(string moduleId)`

**Purpose:** Handles logic related to `is module active`.

### InitializePlatformModuleExtension
`public static void InitializePlatformModuleExtension(IPlatformModuleExtension moduleExtension, List<string> args)`

**Purpose:** Initializes the state, resources, or bindings for `platform module extension`.

### ClearPlatformModuleExtension
`public static void ClearPlatformModuleExtension()`

**Purpose:** Handles logic related to `clear platform module extension`.

### GetModuleInfos
`public static List<ModuleInfo> GetModuleInfos(string moduleIds)`

**Purpose:** Gets the current value of `module infos`.

### GetModules
`public static List<ModuleInfo> GetModules(Func<ModuleInfo, bool> cond = null)`

**Purpose:** Gets the current value of `modules`.

### GetAllModules
`public static Dictionary<string, ModuleInfo>.ValueCollection GetAllModules()`

**Purpose:** Gets the current value of `all modules`.

### GetActiveModules
`public static List<ModuleInfo> GetActiveModules()`

**Purpose:** Gets the current value of `active modules`.

### GetMbprojPath
`public static string GetMbprojPath(string id)`

**Purpose:** Gets the current value of `mbproj path`.

### GetXmlPathForNative
`public static string GetXmlPathForNative(string moduleId, string xmlName)`

**Purpose:** Gets the current value of `xml path for native`.

### GetXmlPathForNativeWBase
`public static string GetXmlPathForNativeWBase(string moduleId, string xmlName)`

**Purpose:** Gets the current value of `xml path for native w base`.

### GetXsltPathForNative
`public static string GetXsltPathForNative(string moduleId, string xsltName)`

**Purpose:** Gets the current value of `xslt path for native`.

### GetPath
`public static string GetPath(string id)`

**Purpose:** Gets the current value of `path`.

### GetXmlPath
`public static string GetXmlPath(string moduleId, string xmlName)`

**Purpose:** Gets the current value of `xml path`.

### GetXsltPath
`public static string GetXsltPath(string moduleId, string xmlName)`

**Purpose:** Gets the current value of `xslt path`.

### GetXsdPathForModules
`public static string GetXsdPathForModules(string moduleId, string xsdName)`

**Purpose:** Gets the current value of `xsd path for modules`.

### GetXsdPath
`public static string GetXsdPath(string xmlInfoId)`

**Purpose:** Gets the current value of `xsd path`.

### GetDependentModulesOf
`public static IEnumerable<ModuleInfo> GetDependentModulesOf(IEnumerable<ModuleInfo> source, ModuleInfo module)`

**Purpose:** Gets the current value of `dependent modules of`.

### GetSortedModules
`public static List<ModuleInfo> GetSortedModules(string moduleIDs)`

**Purpose:** Gets the current value of `sorted modules`.

### GetModulesForLauncher
`public static List<ModuleInfo> GetModulesForLauncher()`

**Purpose:** Gets the current value of `modules for launcher`.

### GetOfficialModuleIds
`public static MBList<string> GetOfficialModuleIds()`

**Purpose:** Gets the current value of `official module ids`.

### GetActiveGameAssemblies
`public static MBList<Assembly> GetActiveGameAssemblies()`

**Purpose:** Gets the current value of `active game assemblies`.

## Usage Example

```csharp
ModuleHelper.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)