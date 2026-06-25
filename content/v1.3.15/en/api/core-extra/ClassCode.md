---
title: "ClassCode"
description: "Auto-generated class reference for ClassCode."
---
# ClassCode

**Namespace:** TaleWorlds.Library.CodeGeneration
**Module:** TaleWorlds.Library
**Type:** `public class ClassCode`
**Base:** none
**File:** `TaleWorlds.Library/CodeGeneration/ClassCode.cs`

## Overview

`ClassCode` lives in `TaleWorlds.Library.CodeGeneration` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library.CodeGeneration` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; set; }` |
| `IsGeneric` | `public bool IsGeneric { get; set; }` |
| `GenericTypeCount` | `public int GenericTypeCount { get; set; }` |
| `IsPartial` | `public bool IsPartial { get; }` |
| `AccessModifier` | `public ClassCodeAccessModifier AccessModifier { get; }` |
| `IsClass` | `public bool IsClass { get; }` |
| `InheritedInterfaces` | `public List<string> InheritedInterfaces { get; }` |
| `NestedClasses` | `public List<ClassCode> NestedClasses { get; }` |
| `Methods` | `public List<MethodCode> Methods { get; }` |
| `Constructors` | `public List<ConstructorCode> Constructors { get; }` |
| `Variables` | `public List<VariableCode> Variables { get; }` |
| `CommentSection` | `public CommentSection CommentSection { get; set; }` |

## Key Methods

### GenerateInto
`public void GenerateInto(CodeGenerationFile codeGenerationFile)`

**Purpose:** **Purpose:** Generates an instance, data, or representation of into.

```csharp
// Obtain an instance of ClassCode from the subsystem API first
ClassCode classCode = ...;
classCode.GenerateInto(codeGenerationFile);
```

### AddVariable
`public void AddVariable(VariableCode variableCode)`

**Purpose:** **Purpose:** Adds variable to the current collection or state.

```csharp
// Obtain an instance of ClassCode from the subsystem API first
ClassCode classCode = ...;
classCode.AddVariable(variableCode);
```

### AddNestedClass
`public void AddNestedClass(ClassCode clasCode)`

**Purpose:** **Purpose:** Adds nested class to the current collection or state.

```csharp
// Obtain an instance of ClassCode from the subsystem API first
ClassCode classCode = ...;
classCode.AddNestedClass(clasCode);
```

### AddMethod
`public void AddMethod(MethodCode methodCode)`

**Purpose:** **Purpose:** Adds method to the current collection or state.

```csharp
// Obtain an instance of ClassCode from the subsystem API first
ClassCode classCode = ...;
classCode.AddMethod(methodCode);
```

### AddConsturctor
`public void AddConsturctor(ConstructorCode constructorCode)`

**Purpose:** **Purpose:** Adds consturctor to the current collection or state.

```csharp
// Obtain an instance of ClassCode from the subsystem API first
ClassCode classCode = ...;
classCode.AddConsturctor(constructorCode);
```

### AddInterface
`public void AddInterface(string interfaceName)`

**Purpose:** **Purpose:** Adds interface to the current collection or state.

```csharp
// Obtain an instance of ClassCode from the subsystem API first
ClassCode classCode = ...;
classCode.AddInterface("example");
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ClassCode classCode = ...;
classCode.GenerateInto(codeGenerationFile);
```

## See Also

- [Area Index](../)