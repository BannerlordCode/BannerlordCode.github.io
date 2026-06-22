<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBStringBuilder`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBStringBuilder

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct MBStringBuilder`
**Base:** none
**File:** `TaleWorlds.Library/MBStringBuilder.cs`

## Overview

> TODO: add this class's responsibility and typical use-cases from a developer perspective.

## Key Properties

| Name | Signature |
|------|-----------|
| `Length` | `public int Length { get; }` |

## Key Methods

### Initialize
```csharp
public void Initialize(int capacity = 16, string callerMemberName = "")
```

### ToStringAndRelease
```csharp
public string ToStringAndRelease()
```

### Release
```csharp
public void Release()
```

### Append
```csharp
public MBStringBuilder Append(char value)
```

### Append
```csharp
public MBStringBuilder Append(int value)
```

### Append
```csharp
public MBStringBuilder Append(uint value)
```

### Append
```csharp
public MBStringBuilder Append(float value)
```

### Append
```csharp
public MBStringBuilder Append(double value)
```

### AppendLine
```csharp
public MBStringBuilder AppendLine()
```

### ToString
```csharp
public override string ToString()
```

### Acquire
```csharp
public static StringBuilder Acquire(int capacity = 16)
```

### Release
```csharp
public static void Release(StringBuilder sb)
```

### GetStringAndReleaseBuilder
```csharp
public static string GetStringAndReleaseBuilder(StringBuilder sb)
```

## Usage Example

```csharp
// TODO: add a typical use-case
```

## See Also

- [Complete Class Catalog](../catalog)