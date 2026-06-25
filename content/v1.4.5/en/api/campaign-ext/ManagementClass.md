---
title: "ManagementClass"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ManagementClass`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ManagementClass

**Namespace:** System.Management
**Module:** System.Management
**Type:** `public class ManagementClass : ManagementObject`
**Base:** `ManagementObject`
**File:** `Bannerlord.Source/bin/System.Management/System.Management/ManagementClass.cs`

## Overview

`ManagementClass` lives in `System.Management` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `System.Management` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Derivation` | `public StringCollection Derivation { get; }` |
| `Methods` | `public MethodDataCollection Methods { get; }` |
| `Path` | `public override ManagementPath Path { get; set; }` |

## Key Methods

### Clone
`public override object Clone()`

**Purpose:** Handles logic related to `clone`.

### CreateInstance
`public ManagementObject CreateInstance()`

**Purpose:** Creates a new `instance` instance or object.

### Derive
`public ManagementClass Derive(string newClassName)`

**Purpose:** Handles logic related to `derive`.

### GetInstances
`public ManagementObjectCollection GetInstances()`

**Purpose:** Gets the current value of `instances`.

### GetInstances
`public ManagementObjectCollection GetInstances(EnumerationOptions options)`

**Purpose:** Gets the current value of `instances`.

### GetInstances
`public void GetInstances(ManagementOperationObserver watcher)`

**Purpose:** Gets the current value of `instances`.

### GetInstances
`public void GetInstances(ManagementOperationObserver watcher, EnumerationOptions options)`

**Purpose:** Gets the current value of `instances`.

### GetRelatedClasses
`public ManagementObjectCollection GetRelatedClasses()`

**Purpose:** Gets the current value of `related classes`.

### GetRelatedClasses
`public void GetRelatedClasses(ManagementOperationObserver watcher)`

**Purpose:** Gets the current value of `related classes`.

### GetRelatedClasses
`public void GetRelatedClasses(ManagementOperationObserver watcher, string relatedClass)`

**Purpose:** Gets the current value of `related classes`.

### GetRelatedClasses
`public void GetRelatedClasses(ManagementOperationObserver watcher, string relatedClass, string relationshipClass, string relationshipQualifier, string relatedQualifier, string relatedRole, string thisRole, EnumerationOptions options)`

**Purpose:** Gets the current value of `related classes`.

### GetRelatedClasses
`public ManagementObjectCollection GetRelatedClasses(string relatedClass)`

**Purpose:** Gets the current value of `related classes`.

### GetRelatedClasses
`public ManagementObjectCollection GetRelatedClasses(string relatedClass, string relationshipClass, string relationshipQualifier, string relatedQualifier, string relatedRole, string thisRole, EnumerationOptions options)`

**Purpose:** Gets the current value of `related classes`.

### GetRelationshipClasses
`public ManagementObjectCollection GetRelationshipClasses()`

**Purpose:** Gets the current value of `relationship classes`.

### GetRelationshipClasses
`public void GetRelationshipClasses(ManagementOperationObserver watcher)`

**Purpose:** Gets the current value of `relationship classes`.

### GetRelationshipClasses
`public void GetRelationshipClasses(ManagementOperationObserver watcher, string relationshipClass)`

**Purpose:** Gets the current value of `relationship classes`.

### GetRelationshipClasses
`public void GetRelationshipClasses(ManagementOperationObserver watcher, string relationshipClass, string relationshipQualifier, string thisRole, EnumerationOptions options)`

**Purpose:** Gets the current value of `relationship classes`.

### GetRelationshipClasses
`public ManagementObjectCollection GetRelationshipClasses(string relationshipClass)`

**Purpose:** Gets the current value of `relationship classes`.

### GetRelationshipClasses
`public ManagementObjectCollection GetRelationshipClasses(string relationshipClass, string relationshipQualifier, string thisRole, EnumerationOptions options)`

**Purpose:** Gets the current value of `relationship classes`.

### GetStronglyTypedClassCode
`public CodeTypeDeclaration GetStronglyTypedClassCode(bool includeSystemClassInClassDef, bool systemPropertyClass)`

**Purpose:** Gets the current value of `strongly typed class code`.

### GetStronglyTypedClassCode
`public bool GetStronglyTypedClassCode(CodeLanguage lang, string filePath, string classNamespace)`

**Purpose:** Gets the current value of `strongly typed class code`.

### GetSubclasses
`public ManagementObjectCollection GetSubclasses()`

**Purpose:** Gets the current value of `subclasses`.

### GetSubclasses
`public ManagementObjectCollection GetSubclasses(EnumerationOptions options)`

**Purpose:** Gets the current value of `subclasses`.

### GetSubclasses
`public void GetSubclasses(ManagementOperationObserver watcher)`

**Purpose:** Gets the current value of `subclasses`.

### GetSubclasses
`public void GetSubclasses(ManagementOperationObserver watcher, EnumerationOptions options)`

**Purpose:** Gets the current value of `subclasses`.

## Usage Example

```csharp
var value = new ManagementClass();
value.Clone();
```

## See Also

- [Complete Class Catalog](../catalog)