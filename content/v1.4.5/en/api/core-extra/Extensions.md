---
title: "Extensions"
description: "Auto-generated class reference for Extensions."
---
# Extensions

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class Extensions`
**Base:** none
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/Extensions.cs`

## Overview

`Extensions` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetTypesSafe
`public static List<Type> GetTypesSafe(this Assembly assembly, Func<Type, bool> func = null)`

**Purpose:** Reads and returns the `types safe` value held by the current object.

```csharp
// Static call; no instance required
Extensions.GetTypesSafe(assembly, func<Type, false);
```

### GetReferencingAssembliesSafe
`public static Assembly GetReferencingAssembliesSafe(this Assembly baseAssembly, Func<Assembly, bool> func = null)`

**Purpose:** Reads and returns the `referencing assemblies safe` value held by the current object.

```csharp
// Static call; no instance required
Extensions.GetReferencingAssembliesSafe(baseAssembly, func<Assembly, false);
```

### GetCustomAttributesSafe
`public static object GetCustomAttributesSafe(this Type type, Type attributeType, bool inherit)`

**Purpose:** Reads and returns the `custom attributes safe` value held by the current object.

```csharp
// Static call; no instance required
Extensions.GetCustomAttributesSafe(type, attributeType, false);
```

### GetCustomAttributesSafe
`public static object GetCustomAttributesSafe(this Type type, bool inherit)`

**Purpose:** Reads and returns the `custom attributes safe` value held by the current object.

```csharp
// Static call; no instance required
Extensions.GetCustomAttributesSafe(type, false);
```

### GetCustomAttributesSafe
`public static IEnumerable<Attribute> GetCustomAttributesSafe(this Type type, Type attributeType)`

**Purpose:** Reads and returns the `custom attributes safe` value held by the current object.

```csharp
// Static call; no instance required
Extensions.GetCustomAttributesSafe(type, attributeType);
```

### GetCustomAttributesSafe
`public static object GetCustomAttributesSafe(this PropertyInfo property, Type attributeType, bool inherit)`

**Purpose:** Reads and returns the `custom attributes safe` value held by the current object.

```csharp
// Static call; no instance required
Extensions.GetCustomAttributesSafe(property, attributeType, false);
```

### GetCustomAttributesSafe
`public static object GetCustomAttributesSafe(this PropertyInfo property, bool inherit)`

**Purpose:** Reads and returns the `custom attributes safe` value held by the current object.

```csharp
// Static call; no instance required
Extensions.GetCustomAttributesSafe(property, false);
```

### GetCustomAttributesSafe
`public static IEnumerable<Attribute> GetCustomAttributesSafe(this PropertyInfo property, Type attributeType)`

**Purpose:** Reads and returns the `custom attributes safe` value held by the current object.

```csharp
// Static call; no instance required
Extensions.GetCustomAttributesSafe(property, attributeType);
```

### GetCustomAttributesSafe
`public static object GetCustomAttributesSafe(this FieldInfo field, Type attributeType, bool inherit)`

**Purpose:** Reads and returns the `custom attributes safe` value held by the current object.

```csharp
// Static call; no instance required
Extensions.GetCustomAttributesSafe(field, attributeType, false);
```

### GetCustomAttributesSafe
`public static object GetCustomAttributesSafe(this FieldInfo field, bool inherit)`

**Purpose:** Reads and returns the `custom attributes safe` value held by the current object.

```csharp
// Static call; no instance required
Extensions.GetCustomAttributesSafe(field, false);
```

### GetCustomAttributesSafe
`public static IEnumerable<Attribute> GetCustomAttributesSafe(this FieldInfo field, Type attributeType)`

**Purpose:** Reads and returns the `custom attributes safe` value held by the current object.

```csharp
// Static call; no instance required
Extensions.GetCustomAttributesSafe(field, attributeType);
```

### GetCustomAttributesSafe
`public static object GetCustomAttributesSafe(this MethodInfo method, Type attributeType, bool inherit)`

**Purpose:** Reads and returns the `custom attributes safe` value held by the current object.

```csharp
// Static call; no instance required
Extensions.GetCustomAttributesSafe(method, attributeType, false);
```

### GetCustomAttributesSafe
`public static object GetCustomAttributesSafe(this MethodInfo method, bool inherit)`

**Purpose:** Reads and returns the `custom attributes safe` value held by the current object.

```csharp
// Static call; no instance required
Extensions.GetCustomAttributesSafe(method, false);
```

### GetCustomAttributesSafe
`public static IEnumerable<Attribute> GetCustomAttributesSafe(this MethodInfo method, Type attributeType)`

**Purpose:** Reads and returns the `custom attributes safe` value held by the current object.

```csharp
// Static call; no instance required
Extensions.GetCustomAttributesSafe(method, attributeType);
```

### GetCustomAttributesSafe
`public static object GetCustomAttributesSafe(this Assembly assembly, Type attributeType, bool inherit)`

**Purpose:** Reads and returns the `custom attributes safe` value held by the current object.

```csharp
// Static call; no instance required
Extensions.GetCustomAttributesSafe(assembly, attributeType, false);
```

### GetCustomAttributesSafe
`public static object GetCustomAttributesSafe(this Assembly assembly, bool inherit)`

**Purpose:** Reads and returns the `custom attributes safe` value held by the current object.

```csharp
// Static call; no instance required
Extensions.GetCustomAttributesSafe(assembly, false);
```

### GetCustomAttributesSafe
`public static IEnumerable<Attribute> GetCustomAttributesSafe(this Assembly assembly, Type attributeType)`

**Purpose:** Reads and returns the `custom attributes safe` value held by the current object.

```csharp
// Static call; no instance required
Extensions.GetCustomAttributesSafe(assembly, attributeType);
```

### GetDeterministicHashCode
`public static int GetDeterministicHashCode(this string text)`

**Purpose:** Reads and returns the `deterministic hash code` value held by the current object.

```csharp
// Static call; no instance required
Extensions.GetDeterministicHashCode(text);
```

## Usage Example

```csharp
Extensions.GetTypesSafe(assembly, func<Type, false);
```

## See Also

- [Area Index](../)