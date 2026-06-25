---
title: "ApplicationVersion"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ApplicationVersion`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ApplicationVersion

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct ApplicationVersion`
**Area:** core-extra

## Overview

`ApplicationVersion` lives in `TaleWorlds.Library`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ApplicationVersionType` | `public ApplicationVersionType ApplicationVersionType { get; }` |
| `Major` | `public int Major { get; }` |
| `Minor` | `public int Minor { get; }` |
| `Revision` | `public int Revision { get; }` |
| `ChangeSet` | `public int ChangeSet { get; }` |

## Key Methods

### FromParametersFile
`public static ApplicationVersion FromParametersFile(string customParameterFilePath = null)`

**Purpose:** Handles logic related to `from parameters file`.

### FromString
`public static ApplicationVersion FromString(string versionAsString, int defaultChangeSet = 0)`

**Purpose:** Handles logic related to `from string`.

### IsSame
`public bool IsSame(ApplicationVersion other, bool checkChangeSet)`

**Purpose:** Handles logic related to `is same`.

### IsOlderThan
`public bool IsOlderThan(ApplicationVersion other)`

**Purpose:** Handles logic related to `is older than`.

### IsNewerThan
`public bool IsNewerThan(ApplicationVersion other)`

**Purpose:** Handles logic related to `is newer than`.

### ApplicationVersionTypeFromString
`public static ApplicationVersionType ApplicationVersionTypeFromString(string applicationVersionTypeAsString)`

**Purpose:** Handles logic related to `application version type from string`.

### GetPrefix
`public static string GetPrefix(ApplicationVersionType applicationVersionType)`

**Purpose:** Gets the current value of `prefix`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

### Equals
`public override bool Equals(object obj)`

**Purpose:** Handles logic related to `equals`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
ApplicationVersion.FromParametersFile("example");
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)
