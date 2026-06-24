<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Managed`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Managed

**Namespace:** TaleWorlds.DotNet
**Module:** TaleWorlds.DotNet
**Type:** `public static class Managed`
**Area:** campaign-ext

## Overview

`Managed` lives in `TaleWorlds.DotNet`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.DotNet` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ManagedCallbacksDll` | `public static string ManagedCallbacksDll { get; }` |

## Key Methods

### GetStackTraceStr
`public static string GetStackTraceStr(int skipCount = 0)`

**Purpose:** Gets the current value of `stack trace str`.

### GetStackTraceRaw
`public static string GetStackTraceRaw(int skipCount = 0)`

**Purpose:** Gets the current value of `stack trace raw`.

### GetStringHashCode
`public static uint GetStringHashCode(string text)`

**Purpose:** Gets the current value of `string hash code`.

### GetStackTraceRaw
`public static string GetStackTraceRaw(StackTrace stack, int skipCount = 0)`

**Purpose:** Gets the current value of `stack trace raw`.

### GetModuleList
`public static string GetModuleList()`

**Purpose:** Gets the current value of `module list`.

### GetVersionInts
`public static void GetVersionInts(ref int major, ref int minor, ref int revision)`

**Purpose:** Gets the current value of `version ints`.

### PassInitializationMethodPointersForDotNet
`public static void PassInitializationMethodPointersForDotNet(Delegate a, Delegate b)`

**Purpose:** Handles logic related to `pass initialization method pointers for dot net`.

### Start
`public static void Start(IEnumerable<IManagedComponent> components)`

**Purpose:** Handles logic related to `start`.

### InitializeTypes
`public static void InitializeTypes(Dictionary<string, Type> types)`

**Purpose:** Initializes the state, resources, or bindings for `types`.

### AddTypes
`public static void AddTypes(Dictionary<string, Type> types)`

**Purpose:** Adds `types` to the current collection or state.

### ShowDotNetVersion
`public static string ShowDotNetVersion(List<string> strings)`

**Purpose:** Handles logic related to `show dot net version`.

### PassManagedInitializeMethodPointerDelegate
`public delegate void PassManagedInitializeMethodPointerDelegate( Delegate initalizer)`

**Purpose:** Handles logic related to `pass managed initialize method pointer delegate`.

### PassManagedCallbackMethodPointersDelegate
`public delegate void PassManagedCallbackMethodPointersDelegate( Delegate methodDelegate)`

**Purpose:** Handles logic related to `pass managed callback method pointers delegate`.

### InitializerDelegate
`public delegate void InitializerDelegate(Delegate argument)`

**Purpose:** Initializes the state, resources, or bindings for `r delegate`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
Managed.GetStackTraceStr(0);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
