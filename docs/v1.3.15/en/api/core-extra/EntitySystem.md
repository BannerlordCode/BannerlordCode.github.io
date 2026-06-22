<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EntitySystem`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EntitySystem

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class EntitySystem<T>`
**Base:** none
**File:** `TaleWorlds.Core/EntitySystem.cs`

## Overview

> TODO: add this class's responsibility and typical use-cases from a developer perspective.

## Key Properties

| Name | Signature |
|------|-----------|
| `Components` | `public MBReadOnlyList<T> Components { get; }` |

## Key Methods

### AddComponent
```csharp
public T AddComponent(Type componentType)
```

### GetComponent
```csharp
public T GetComponent(Type componentType)
```

### GetComponents
```csharp
public MBList<T> GetComponents()
```

### Finalize
```csharp
public void Finalize(T component)
```

### RemoveComponent
```csharp
public void RemoveComponent(T component)
```

## Usage Example

```csharp
// TODO: add a typical use-case
```

## See Also

- [Complete Class Catalog](../catalog)