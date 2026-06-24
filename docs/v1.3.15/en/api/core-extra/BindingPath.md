<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BindingPath`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BindingPath

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class BindingPath`
**Area:** core-extra

## Overview

`BindingPath` lives in `TaleWorlds.Library`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Path` | `public string Path { get; }` |
| `Nodes` | `public string Nodes { get; }` |
| `FirstNode` | `public string FirstNode { get; }` |
| `LastNode` | `public string LastNode { get; }` |
| `SubPath` | `public BindingPath SubPath { get; }` |
| `ParentPath` | `public BindingPath ParentPath { get; }` |

## Key Methods

### CreateFromProperty
`public static BindingPath CreateFromProperty(string propertyName)`

**Purpose:** Creates a new `from property` instance or object.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

### Equals
`public override bool Equals(object obj)`

**Purpose:** Handles logic related to `equals`.

### IsRelatedWithPathAsString
`public static bool IsRelatedWithPathAsString(string path, string referencePath)`

**Purpose:** Handles logic related to `is related with path as string`.

### IsRelatedWithPath
`public static bool IsRelatedWithPath(string path, BindingPath referencePath)`

**Purpose:** Handles logic related to `is related with path`.

### IsRelatedWith
`public bool IsRelatedWith(BindingPath referencePath)`

**Purpose:** Handles logic related to `is related with`.

### DecrementIfRelatedWith
`public void DecrementIfRelatedWith(BindingPath path, int startIndex)`

**Purpose:** Handles logic related to `decrement if related with`.

### Simplify
`public BindingPath Simplify()`

**Purpose:** Handles logic related to `simplify`.

### Append
`public BindingPath Append(BindingPath bindingPath)`

**Purpose:** Handles logic related to `append`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
BindingPath.CreateFromProperty("example");
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)
