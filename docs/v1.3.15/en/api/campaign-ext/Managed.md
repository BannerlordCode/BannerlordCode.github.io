<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Managed`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Managed

**Namespace:** TaleWorlds.DotNet
**Module:** TaleWorlds.DotNet
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `Managed` is a class in the `TaleWorlds.DotNet` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `ManagedCallbacksDll` | `public static string ManagedCallbacksDll { get; }` |


## Key Methods

### GetStackTraceStr

```csharp
public static string GetStackTraceStr(int skipCount = 0)
```

### GetStackTraceRaw

```csharp
public static string GetStackTraceRaw(int skipCount = 0)
```

### GetStringHashCode

```csharp
public static uint GetStringHashCode(string text)
```

### GetStackTraceRaw

```csharp
public static string GetStackTraceRaw(StackTrace stack, int skipCount = 0)
```

### GetModuleList

```csharp
public static string GetModuleList()
```

### GetVersionInts

```csharp
public static void GetVersionInts(ref int major, ref int minor, ref int revision)
```

### PassInitializationMethodPointersForDotNet

```csharp
public static void PassInitializationMethodPointersForDotNet(Delegate a, Delegate b)
```

### Start

```csharp
public static void Start(IEnumerable<IManagedComponent> components)
```

### InitializeTypes

```csharp
public static void InitializeTypes(Dictionary<string, Type> types)
```

### AddTypes

```csharp
public static void AddTypes(Dictionary<string, Type> types)
```

### ShowDotNetVersion

```csharp
public static string ShowDotNetVersion(List<string> strings)
```

### PassManagedInitializeMethodPointerDelegate

```csharp
public delegate void PassManagedInitializeMethodPointerDelegate( Delegate initalizer)
```

### PassManagedCallbackMethodPointersDelegate

```csharp
public delegate void PassManagedCallbackMethodPointersDelegate( Delegate methodDelegate)
```

### InitializerDelegate

```csharp
public delegate void InitializerDelegate(Delegate argument)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)