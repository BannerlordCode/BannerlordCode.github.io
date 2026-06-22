<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Managed`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Managed

**命名空间:** TaleWorlds.DotNet
**模块:** TaleWorlds.DotNet
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`Managed` 是 `TaleWorlds.DotNet` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `ManagedCallbacksDll` | `public static string ManagedCallbacksDll { get; }` |


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)