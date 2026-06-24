<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Extensions`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Extensions

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class Extensions`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Library/TaleWorlds.Library/Extensions.cs`

## Overview

`Extensions` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetTypesSafe
`public static List<Type> GetTypesSafe(this Assembly assembly, Func<Type, bool> func = null)`

**Purpose:** Gets the current value of `types safe`.

### GetReferencingAssembliesSafe
`public static Assembly GetReferencingAssembliesSafe(this Assembly baseAssembly, Func<Assembly, bool> func = null)`

**Purpose:** Gets the current value of `referencing assemblies safe`.

### GetCustomAttributesSafe
`public static object GetCustomAttributesSafe(this Type type, Type attributeType, bool inherit)`

**Purpose:** Gets the current value of `custom attributes safe`.

### GetCustomAttributesSafe
`public static object GetCustomAttributesSafe(this Type type, bool inherit)`

**Purpose:** Gets the current value of `custom attributes safe`.

### GetCustomAttributesSafe
`public static IEnumerable<Attribute> GetCustomAttributesSafe(this Type type, Type attributeType)`

**Purpose:** Gets the current value of `custom attributes safe`.

### GetCustomAttributesSafe
`public static object GetCustomAttributesSafe(this PropertyInfo property, Type attributeType, bool inherit)`

**Purpose:** Gets the current value of `custom attributes safe`.

### GetCustomAttributesSafe
`public static object GetCustomAttributesSafe(this PropertyInfo property, bool inherit)`

**Purpose:** Gets the current value of `custom attributes safe`.

### GetCustomAttributesSafe
`public static IEnumerable<Attribute> GetCustomAttributesSafe(this PropertyInfo property, Type attributeType)`

**Purpose:** Gets the current value of `custom attributes safe`.

### GetCustomAttributesSafe
`public static object GetCustomAttributesSafe(this FieldInfo field, Type attributeType, bool inherit)`

**Purpose:** Gets the current value of `custom attributes safe`.

### GetCustomAttributesSafe
`public static object GetCustomAttributesSafe(this FieldInfo field, bool inherit)`

**Purpose:** Gets the current value of `custom attributes safe`.

### GetCustomAttributesSafe
`public static IEnumerable<Attribute> GetCustomAttributesSafe(this FieldInfo field, Type attributeType)`

**Purpose:** Gets the current value of `custom attributes safe`.

### GetCustomAttributesSafe
`public static object GetCustomAttributesSafe(this MethodInfo method, Type attributeType, bool inherit)`

**Purpose:** Gets the current value of `custom attributes safe`.

### GetCustomAttributesSafe
`public static object GetCustomAttributesSafe(this MethodInfo method, bool inherit)`

**Purpose:** Gets the current value of `custom attributes safe`.

### GetCustomAttributesSafe
`public static IEnumerable<Attribute> GetCustomAttributesSafe(this MethodInfo method, Type attributeType)`

**Purpose:** Gets the current value of `custom attributes safe`.

### GetCustomAttributesSafe
`public static object GetCustomAttributesSafe(this Assembly assembly, Type attributeType, bool inherit)`

**Purpose:** Gets the current value of `custom attributes safe`.

### GetCustomAttributesSafe
`public static object GetCustomAttributesSafe(this Assembly assembly, bool inherit)`

**Purpose:** Gets the current value of `custom attributes safe`.

### GetCustomAttributesSafe
`public static IEnumerable<Attribute> GetCustomAttributesSafe(this Assembly assembly, Type attributeType)`

**Purpose:** Gets the current value of `custom attributes safe`.

### GetDeterministicHashCode
`public static int GetDeterministicHashCode(this string text)`

**Purpose:** Gets the current value of `deterministic hash code`.

## Usage Example

```csharp
Extensions.GetTypesSafe(assembly, func<Type, false);
```

## See Also

- [Complete Class Catalog](../catalog)