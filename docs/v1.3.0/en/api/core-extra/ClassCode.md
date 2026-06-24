<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClassCode`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `generate into`.

### AddVariable
`public void AddVariable(VariableCode variableCode)`

**Purpose:** Adds `variable` to the current collection or state.

### AddNestedClass
`public void AddNestedClass(ClassCode clasCode)`

**Purpose:** Adds `nested class` to the current collection or state.

### AddMethod
`public void AddMethod(MethodCode methodCode)`

**Purpose:** Adds `method` to the current collection or state.

### AddConsturctor
`public void AddConsturctor(ConstructorCode constructorCode)`

**Purpose:** Adds `consturctor` to the current collection or state.

### AddInterface
`public void AddInterface(string interfaceName)`

**Purpose:** Adds `interface` to the current collection or state.

## Usage Example

```csharp
var value = new ClassCode();
value.GenerateInto(codeGenerationFile);
```

## See Also

- [Complete Class Catalog](../catalog)