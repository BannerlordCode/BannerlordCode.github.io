<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ModuleHelper`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ModuleHelper

**命名空间:** TaleWorlds.ModuleManager
**模块:** TaleWorlds.ModuleManager
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`ModuleHelper` 是 `TaleWorlds.ModuleManager` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)