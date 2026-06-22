<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TauntSlotData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TauntSlotData

**Namespace:** TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TauntSlotData : MultiplayerLocalData`
**Base:** `MultiplayerLocalData`
**File:** `TaleWorlds.MountAndBlade.Diamond/Lobby/LocalData/TauntSlotData.cs`

## Overview

`TauntSlotData` is a data struct/DTO holding structured fields. Construct it to pass or serialize data.

## Key Properties

| Name | Signature |
|------|-----------|
| `PlayerId` | `public string PlayerId { get; set; }` |
| `TauntIndices` | `public List<TauntIndexData> TauntIndices { get; set; }` |

## Key Methods

### HasSameContentWith
```csharp
public override bool HasSameContentWith(MultiplayerLocalData other)
```

## Usage Example

```csharp
// Typical usage of TauntSlotData (Data)
new TauntSlotData { /* fill fields */ };;
```

## See Also

- [Complete Class Catalog](../catalog)