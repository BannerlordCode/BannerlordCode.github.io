---
title: "PhysicsMaterial"
description: "Auto-generated class reference for PhysicsMaterial."
---
# PhysicsMaterial

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `struct PhysicsMaterial`
**Base:** none
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/PhysicsMaterial.cs`

## Overview

`PhysicsMaterial` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetFlags
`public PhysicsMaterialFlags GetFlags()`

**Purpose:** **Purpose:** Reads and returns the flags value held by the this instance.

```csharp
// Obtain an instance of PhysicsMaterial from the subsystem API first
PhysicsMaterial physicsMaterial = ...;
var result = physicsMaterial.GetFlags();
```

### GetDynamicFriction
`public float GetDynamicFriction()`

**Purpose:** **Purpose:** Reads and returns the dynamic friction value held by the this instance.

```csharp
// Obtain an instance of PhysicsMaterial from the subsystem API first
PhysicsMaterial physicsMaterial = ...;
var result = physicsMaterial.GetDynamicFriction();
```

### GetStaticFriction
`public float GetStaticFriction()`

**Purpose:** **Purpose:** Reads and returns the static friction value held by the this instance.

```csharp
// Obtain an instance of PhysicsMaterial from the subsystem API first
PhysicsMaterial physicsMaterial = ...;
var result = physicsMaterial.GetStaticFriction();
```

### GetRestitution
`public float GetRestitution()`

**Purpose:** **Purpose:** Reads and returns the restitution value held by the this instance.

```csharp
// Obtain an instance of PhysicsMaterial from the subsystem API first
PhysicsMaterial physicsMaterial = ...;
var result = physicsMaterial.GetRestitution();
```

### GetLinearDamping
`public float GetLinearDamping()`

**Purpose:** **Purpose:** Reads and returns the linear damping value held by the this instance.

```csharp
// Obtain an instance of PhysicsMaterial from the subsystem API first
PhysicsMaterial physicsMaterial = ...;
var result = physicsMaterial.GetLinearDamping();
```

### GetAngularDamping
`public float GetAngularDamping()`

**Purpose:** **Purpose:** Reads and returns the angular damping value held by the this instance.

```csharp
// Obtain an instance of PhysicsMaterial from the subsystem API first
PhysicsMaterial physicsMaterial = ...;
var result = physicsMaterial.GetAngularDamping();
```

### Equals
`public bool Equals(PhysicsMaterial m)`

**Purpose:** **Purpose:** Compares the this instance with the supplied instance for equality.

```csharp
// Obtain an instance of PhysicsMaterial from the subsystem API first
PhysicsMaterial physicsMaterial = ...;
var result = physicsMaterial.Equals(m);
```

### GetMaterialCount
`public static int GetMaterialCount()`

**Purpose:** **Purpose:** Reads and returns the material count value held by the this instance.

```csharp
// Static call; no instance required
PhysicsMaterial.GetMaterialCount();
```

### GetFromName
`public static PhysicsMaterial GetFromName(string id)`

**Purpose:** **Purpose:** Reads and returns the from name value held by the this instance.

```csharp
// Static call; no instance required
PhysicsMaterial.GetFromName("example");
```

### GetNameAtIndex
`public static string GetNameAtIndex(int index)`

**Purpose:** **Purpose:** Reads and returns the name at index value held by the this instance.

```csharp
// Static call; no instance required
PhysicsMaterial.GetNameAtIndex(0);
```

### GetFlagsAtIndex
`public static PhysicsMaterialFlags GetFlagsAtIndex(int index)`

**Purpose:** **Purpose:** Reads and returns the flags at index value held by the this instance.

```csharp
// Static call; no instance required
PhysicsMaterial.GetFlagsAtIndex(0);
```

### GetRestitutionAtIndex
`public static float GetRestitutionAtIndex(int index)`

**Purpose:** **Purpose:** Reads and returns the restitution at index value held by the this instance.

```csharp
// Static call; no instance required
PhysicsMaterial.GetRestitutionAtIndex(0);
```

### GetDynamicFrictionAtIndex
`public static float GetDynamicFrictionAtIndex(int index)`

**Purpose:** **Purpose:** Reads and returns the dynamic friction at index value held by the this instance.

```csharp
// Static call; no instance required
PhysicsMaterial.GetDynamicFrictionAtIndex(0);
```

### GetStaticFrictionAtIndex
`public static float GetStaticFrictionAtIndex(int index)`

**Purpose:** **Purpose:** Reads and returns the static friction at index value held by the this instance.

```csharp
// Static call; no instance required
PhysicsMaterial.GetStaticFrictionAtIndex(0);
```

### GetLinearDampingAtIndex
`public static float GetLinearDampingAtIndex(int index)`

**Purpose:** **Purpose:** Reads and returns the linear damping at index value held by the this instance.

```csharp
// Static call; no instance required
PhysicsMaterial.GetLinearDampingAtIndex(0);
```

### GetAngularDampingAtIndex
`public static float GetAngularDampingAtIndex(int index)`

**Purpose:** **Purpose:** Reads and returns the angular damping at index value held by the this instance.

```csharp
// Static call; no instance required
PhysicsMaterial.GetAngularDampingAtIndex(0);
```

### GetFromIndex
`public static PhysicsMaterial GetFromIndex(int index)`

**Purpose:** **Purpose:** Reads and returns the from index value held by the this instance.

```csharp
// Static call; no instance required
PhysicsMaterial.GetFromIndex(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PhysicsMaterial physicsMaterial = ...;
physicsMaterial.GetFlags();
```

## See Also

- [Area Index](../)