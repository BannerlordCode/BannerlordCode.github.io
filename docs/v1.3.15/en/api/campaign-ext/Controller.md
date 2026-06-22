<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Controller`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Controller

**Namespace:** TaleWorlds.DotNet
**Module:** TaleWorlds.DotNet
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `Controller` is a class in the `TaleWorlds.DotNet` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Methods

### OverrideManagedDllFolder

```csharp
public static void OverrideManagedDllFolder(IntPtr overridenFolderAsPointer)
```

### LoadOnCurrentApplicationDomain

```csharp
public static void LoadOnCurrentApplicationDomain(IntPtr gameDllNameAsPointer, IntPtr gameTypeNameAsPointer, int currentEngineAsInteger, int currentPlatformAsInteger)
```

### SetEngineMethodsAsMono

```csharp
public static void SetEngineMethodsAsMono(IntPtr passControllerMethods, IntPtr passManagedInitializeMethod, IntPtr passManagedCallbackMethod)
```

### SetEngineMethodsAsHostedDotNetCore

```csharp
public static void SetEngineMethodsAsHostedDotNetCore(IntPtr passControllerMethods, IntPtr passManagedInitializeMethod, IntPtr passManagedCallbackMethod)
```

### SetEngineMethodsAsDotNet

```csharp
public static void SetEngineMethodsAsDotNet(Delegate passControllerMethods, Delegate passManagedInitializeMethod, Delegate passManagedCallbackMethod)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)