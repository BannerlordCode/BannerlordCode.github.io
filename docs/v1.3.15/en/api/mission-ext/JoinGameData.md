<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `JoinGameData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# JoinGameData

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class JoinGameData`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Diamond/JoinGameData.cs`

## Overview

`JoinGameData` is a data struct/DTO holding structured fields. Construct it to pass or serialize data.

## Key Properties

| Name | Signature |
|------|-----------|
| `GameServerProperties` | `public GameServerProperties GameServerProperties { get; set; }` |
| `PeerIndex` | `public int PeerIndex { get; set; }` |
| `SessionKey` | `public int SessionKey { get; set; }` |

## Usage Example

```csharp
// Typical usage of JoinGameData (Data)
new JoinGameData { /* fill fields */ };;
```

## See Also

- [Complete Class Catalog](../catalog)