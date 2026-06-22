<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TauntIndexData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TauntIndexData

**Namespace:** TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct TauntIndexData`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Diamond/Lobby/LocalData/TauntIndexData.cs`

## Overview

`TauntIndexData` is a data struct/DTO holding structured fields. Construct it to pass or serialize data.

## Key Properties

| Name | Signature |
|------|-----------|
| `TauntId` | `public string TauntId { get; set; }` |
| `TauntIndex` | `public int TauntIndex { get; set; }` |

## Key Methods

### Equals
```csharp
public override bool Equals(object obj)
```

### GetHashCode
```csharp
public override int GetHashCode()
```

## Usage Example

```csharp
// Typical usage of TauntIndexData (Data)
new TauntIndexData { /* fill fields */ };;
```

## See Also

- [Complete Class Catalog](../catalog)