<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ParameterContainer`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ParameterContainer

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class ParameterContainer`
**Base:** none
**File:** `TaleWorlds.Library/ParameterContainer.cs`

## Overview

> TODO: add this class's responsibility and typical use-cases from a developer perspective.

## Key Properties

| Name | Signature |
|------|-----------|
| `Iterator` | `public IEnumerable<KeyValuePair<string, string>> Iterator { get; }` |

## Key Methods

### AddParameter
```csharp
public void AddParameter(string key, string value, bool overwriteIfExists)
```

### AddParameterConcurrent
```csharp
public void AddParameterConcurrent(string key, string value, bool overwriteIfExists)
```

### AddParametersConcurrent
```csharp
public void AddParametersConcurrent(IEnumerable<KeyValuePair<string, string>> parameters, bool overwriteIfExists)
```

### ClearParameters
```csharp
public void ClearParameters()
```

### TryGetParameter
```csharp
public bool TryGetParameter(string key, out string outValue)
```

### TryGetParameterAsBool
```csharp
public bool TryGetParameterAsBool(string key, out bool outValue)
```

### TryGetParameterAsInt
```csharp
public bool TryGetParameterAsInt(string key, out int outValue)
```

### TryGetParameterAsUInt16
```csharp
public bool TryGetParameterAsUInt16(string key, out ushort outValue)
```

### TryGetParameterAsFloat
```csharp
public bool TryGetParameterAsFloat(string key, out float outValue)
```

### TryGetParameterAsByte
```csharp
public bool TryGetParameterAsByte(string key, out byte outValue)
```

### TryGetParameterAsSByte
```csharp
public bool TryGetParameterAsSByte(string key, out sbyte outValue)
```

### TryGetParameterAsVec3
```csharp
public bool TryGetParameterAsVec3(string key, out Vec3 outValue)
```

### TryGetParameterAsVec2
```csharp
public bool TryGetParameterAsVec2(string key, out Vec2 outValue)
```

### GetParameter
```csharp
public string GetParameter(string key)
```

### Clone
```csharp
public ParameterContainer Clone()
```

## Usage Example

```csharp
// TODO: add a typical use-case
```

## See Also

- [Complete Class Catalog](../catalog)