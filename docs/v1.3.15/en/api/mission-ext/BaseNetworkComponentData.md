<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BaseNetworkComponentData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BaseNetworkComponentData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BaseNetworkComponentData : UdpNetworkComponent`
**Base:** `UdpNetworkComponent`
**File:** `TaleWorlds.MountAndBlade/BaseNetworkComponentData.cs`

## Overview

`BaseNetworkComponentData` is a data struct/DTO holding structured fields. Construct it to pass or serialize data.

## Key Properties

| Name | Signature |
|------|-----------|
| `CurrentBattleIndex` | `public int CurrentBattleIndex { get; }` |

## Key Methods

### UpdateCurrentBattleIndex
```csharp
public void UpdateCurrentBattleIndex(int currentBattleIndex)
```

## Usage Example

```csharp
// Typical usage of BaseNetworkComponentData (Data)
new BaseNetworkComponentData { /* fill fields */ };;
```

## See Also

- [Complete Class Catalog](../catalog)