<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PlayerIdExtensions`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PlayerIdExtensions

**Namespace:** TaleWorlds.Diamond
**Module:** TaleWorlds.Diamond
**Type:** `public static class PlayerIdExtensions`
**Area:** campaign-ext

## Overview

`PlayerIdExtensions` lives in `TaleWorlds.Diamond`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ConvertToPeerId
`public static PeerId ConvertToPeerId(this PlayerId playerId)`

**Purpose:** Handles logic related to `convert to peer id`.

### ConvertToPlayerId
`public static PlayerId ConvertToPlayerId(this PeerId peerId)`

**Purpose:** Handles logic related to `convert to player id`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
PlayerIdExtensions.ConvertToPeerId(playerId);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
