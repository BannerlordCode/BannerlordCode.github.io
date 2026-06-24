<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ManagementBaseObject`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ManagementBaseObject

**Namespace:** System.Management
**Module:** System.Management
**Type:** `public class ManagementBaseObject : Component, ICloneable, ISerializable`
**Base:** `Component`
**File:** `Bannerlord.Source/bin/System.Management/System.Management/ManagementBaseObject.cs`

## Overview

`ManagementBaseObject` lives in `System.Management` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `System.Management` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ClassPath` | `public virtual ManagementPath ClassPath { get; }` |
| `this` | `public object this { get; set; }` |
| `Properties` | `public virtual PropertyDataCollection Properties { get; }` |
| `Qualifiers` | `public virtual QualifierDataCollection Qualifiers { get; }` |
| `SystemProperties` | `public virtual PropertyDataCollection SystemProperties { get; }` |

## Key Methods

### Clone
`public virtual object Clone()`

**Purpose:** Handles logic related to `clone`.

### CompareTo
`public bool CompareTo(ManagementBaseObject otherObject, ComparisonSettings settings)`

**Purpose:** Handles logic related to `compare to`.

### Dispose
`public new void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### Equals
`public override bool Equals(object obj)`

**Purpose:** Handles logic related to `equals`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

### GetPropertyQualifierValue
`public object GetPropertyQualifierValue(string propertyName, string qualifierName)`

**Purpose:** Gets the current value of `property qualifier value`.

### GetPropertyValue
`public object GetPropertyValue(string propertyName)`

**Purpose:** Gets the current value of `property value`.

### GetQualifierValue
`public object GetQualifierValue(string qualifierName)`

**Purpose:** Gets the current value of `qualifier value`.

### GetText
`public string GetText(TextFormat format)`

**Purpose:** Gets the current value of `text`.

### IntPtr
`public static explicit operator IntPtr(ManagementBaseObject managementObject)`

**Purpose:** Handles logic related to `int ptr`.

### SetPropertyQualifierValue
`public void SetPropertyQualifierValue(string propertyName, string qualifierName, object qualifierValue)`

**Purpose:** Sets the value or state of `property qualifier value`.

### SetPropertyValue
`public void SetPropertyValue(string propertyName, object propertyValue)`

**Purpose:** Sets the value or state of `property value`.

### SetQualifierValue
`public void SetQualifierValue(string qualifierName, object qualifierValue)`

**Purpose:** Sets the value or state of `qualifier value`.

## Usage Example

```csharp
var value = new ManagementBaseObject();
value.Clone();
```

## See Also

- [Complete Class Catalog](../catalog)