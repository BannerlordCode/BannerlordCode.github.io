<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TauntSlotData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TauntSlotData

**Namespace:** TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TauntSlotData : MultiplayerLocalData`
**Base:** `MultiplayerLocalData`
**File:** `TaleWorlds.MountAndBlade.Diamond/Lobby/LocalData/TauntSlotData.cs`

## Overview

`TauntSlotData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `TauntSlotData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `PlayerId` | `public string PlayerId { get; set; }` |
| `TauntIndices` | `public List<TauntIndexData> TauntIndices { get; set; }` |

## Key Methods

### HasSameContentWith
`public override bool HasSameContentWith(MultiplayerLocalData other)`

**Purpose:** Checks whether the current object has/contains `same content with`.

## Usage Example

```csharp
var value = new TauntSlotData();
```

## See Also

- [Complete Class Catalog](../catalog)