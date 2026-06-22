<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ModuleHelper`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ModuleHelper

**Namespace:** TaleWorlds.ModuleManager
**Module:** TaleWorlds.ModuleManager
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `ModuleHelper` is a class in the `TaleWorlds.ModuleManager` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Methods

### GetModuleFullPath

```csharp
public static string GetModuleFullPath(string moduleId)
```

### GetModuleInfo

```csharp
public static ModuleInfo GetModuleInfo(string moduleId)
```

### OnModuleDeactivated

```csharp
public static void OnModuleDeactivated(string id)
```

### OnModuleActivated

```csharp
public static void OnModuleActivated(string id)
```

### InitializeModules

```csharp
public static void InitializeModules(string loadedModuleIds, string platformModulePaths = null)
```

### InitializeSingleModule

```csharp
public static ModuleInfo InitializeSingleModule(string modulePath)
```

### IsModuleActive

```csharp
public static bool IsModuleActive(string moduleId)
```

### InitializePlatformModuleExtension

```csharp
public static void InitializePlatformModuleExtension(IPlatformModuleExtension moduleExtension, List<string> args)
```

### ClearPlatformModuleExtension

```csharp
public static void ClearPlatformModuleExtension()
```

### GetModuleInfos

```csharp
public static List<ModuleInfo> GetModuleInfos(string moduleIds)
```

### GetModules

```csharp
public static List<ModuleInfo> GetModules(Func<ModuleInfo, bool> cond = null)
```

### GetAllModules

```csharp
public static Dictionary<string, ModuleInfo>.ValueCollection GetAllModules()
```

### GetActiveModules

```csharp
public static List<ModuleInfo> GetActiveModules()
```

### GetMbprojPath

```csharp
public static string GetMbprojPath(string id)
```

### GetXmlPathForNative

```csharp
public static string GetXmlPathForNative(string moduleId, string xmlName)
```

### GetXmlPathForNativeWBase

```csharp
public static string GetXmlPathForNativeWBase(string moduleId, string xmlName)
```

### GetXsltPathForNative

```csharp
public static string GetXsltPathForNative(string moduleId, string xsltName)
```

### GetPath

```csharp
public static string GetPath(string id)
```

### GetXmlPath

```csharp
public static string GetXmlPath(string moduleId, string xmlName)
```

### GetXsltPath

```csharp
public static string GetXsltPath(string moduleId, string xmlName)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)