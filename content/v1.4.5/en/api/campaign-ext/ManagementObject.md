---
title: "ManagementObject"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ManagementObject`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ManagementObject

**Namespace:** System.Management
**Module:** System.Management
**Type:** `public class ManagementObject : ManagementBaseObject, ICloneable`
**Base:** `ManagementBaseObject`
**File:** `Bannerlord.Source/bin/System.Management/System.Management/ManagementObject.cs`

## Overview

`ManagementObject` lives in `System.Management` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `System.Management` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ClassPath` | `public override ManagementPath ClassPath { get; }` |
| `Options` | `public ObjectGetOptions Options { get; set; }` |
| `Path` | `public virtual ManagementPath Path { get; set; }` |
| `Scope` | `public ManagementScope Scope { get; set; }` |

## Key Methods

### Clone
`public override object Clone()`

**Purpose:** Handles logic related to `clone`.

### CopyTo
`public void CopyTo(ManagementOperationObserver watcher, ManagementPath path)`

**Purpose:** Handles logic related to `copy to`.

### CopyTo
`public void CopyTo(ManagementOperationObserver watcher, ManagementPath path, PutOptions options)`

**Purpose:** Handles logic related to `copy to`.

### CopyTo
`public void CopyTo(ManagementOperationObserver watcher, string path)`

**Purpose:** Handles logic related to `copy to`.

### CopyTo
`public void CopyTo(ManagementOperationObserver watcher, string path, PutOptions options)`

**Purpose:** Handles logic related to `copy to`.

### CopyTo
`public ManagementPath CopyTo(ManagementPath path)`

**Purpose:** Handles logic related to `copy to`.

### CopyTo
`public ManagementPath CopyTo(ManagementPath path, PutOptions options)`

**Purpose:** Handles logic related to `copy to`.

### CopyTo
`public ManagementPath CopyTo(string path)`

**Purpose:** Handles logic related to `copy to`.

### CopyTo
`public ManagementPath CopyTo(string path, PutOptions options)`

**Purpose:** Handles logic related to `copy to`.

### Delete
`public void Delete()`

**Purpose:** Handles logic related to `delete`.

### Delete
`public void Delete(DeleteOptions options)`

**Purpose:** Handles logic related to `delete`.

### Delete
`public void Delete(ManagementOperationObserver watcher)`

**Purpose:** Handles logic related to `delete`.

### Delete
`public void Delete(ManagementOperationObserver watcher, DeleteOptions options)`

**Purpose:** Handles logic related to `delete`.

### Dispose
`public new void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### Get
`public void Get()`

**Purpose:** Gets the current value of `get`.

### Get
`public void Get(ManagementOperationObserver watcher)`

**Purpose:** Gets the current value of `get`.

### GetMethodParameters
`public ManagementBaseObject GetMethodParameters(string methodName)`

**Purpose:** Gets the current value of `method parameters`.

### GetRelated
`public ManagementObjectCollection GetRelated()`

**Purpose:** Gets the current value of `related`.

### GetRelated
`public void GetRelated(ManagementOperationObserver watcher)`

**Purpose:** Gets the current value of `related`.

### GetRelated
`public void GetRelated(ManagementOperationObserver watcher, string relatedClass)`

**Purpose:** Gets the current value of `related`.

### GetRelated
`public void GetRelated(ManagementOperationObserver watcher, string relatedClass, string relationshipClass, string relationshipQualifier, string relatedQualifier, string relatedRole, string thisRole, bool classDefinitionsOnly, EnumerationOptions options)`

**Purpose:** Gets the current value of `related`.

### GetRelated
`public ManagementObjectCollection GetRelated(string relatedClass)`

**Purpose:** Gets the current value of `related`.

### GetRelated
`public ManagementObjectCollection GetRelated(string relatedClass, string relationshipClass, string relationshipQualifier, string relatedQualifier, string relatedRole, string thisRole, bool classDefinitionsOnly, EnumerationOptions options)`

**Purpose:** Gets the current value of `related`.

### GetRelationships
`public ManagementObjectCollection GetRelationships()`

**Purpose:** Gets the current value of `relationships`.

### GetRelationships
`public void GetRelationships(ManagementOperationObserver watcher)`

**Purpose:** Gets the current value of `relationships`.

### GetRelationships
`public void GetRelationships(ManagementOperationObserver watcher, string relationshipClass)`

**Purpose:** Gets the current value of `relationships`.

### GetRelationships
`public void GetRelationships(ManagementOperationObserver watcher, string relationshipClass, string relationshipQualifier, string thisRole, bool classDefinitionsOnly, EnumerationOptions options)`

**Purpose:** Gets the current value of `relationships`.

### GetRelationships
`public ManagementObjectCollection GetRelationships(string relationshipClass)`

**Purpose:** Gets the current value of `relationships`.

### GetRelationships
`public ManagementObjectCollection GetRelationships(string relationshipClass, string relationshipQualifier, string thisRole, bool classDefinitionsOnly, EnumerationOptions options)`

**Purpose:** Gets the current value of `relationships`.

### InvokeMethod
`public void InvokeMethod(ManagementOperationObserver watcher, string methodName, ManagementBaseObject inParameters, InvokeMethodOptions options)`

**Purpose:** Handles logic related to `invoke method`.

### InvokeMethod
`public void InvokeMethod(ManagementOperationObserver watcher, string methodName, object args)`

**Purpose:** Handles logic related to `invoke method`.

### InvokeMethod
`public ManagementBaseObject InvokeMethod(string methodName, ManagementBaseObject inParameters, InvokeMethodOptions options)`

**Purpose:** Handles logic related to `invoke method`.

### InvokeMethod
`public object InvokeMethod(string methodName, object args)`

**Purpose:** Handles logic related to `invoke method`.

### Put
`public ManagementPath Put()`

**Purpose:** Handles logic related to `put`.

### Put
`public void Put(ManagementOperationObserver watcher)`

**Purpose:** Handles logic related to `put`.

### Put
`public void Put(ManagementOperationObserver watcher, PutOptions options)`

**Purpose:** Handles logic related to `put`.

### Put
`public ManagementPath Put(PutOptions options)`

**Purpose:** Handles logic related to `put`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

## Usage Example

```csharp
var value = new ManagementObject();
value.Clone();
```

## See Also

- [Complete Class Catalog](../catalog)