<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClanInfo`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ClanInfo

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ClanInfo`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/ClanInfo.cs`

## Overview

`ClanInfo` lives in `TaleWorlds.MountAndBlade.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ClanId` | `public Guid ClanId { get; }` |
| `Name` | `public string Name { get; }` |
| `Tag` | `public string Tag { get; }` |
| `Faction` | `public string Faction { get; }` |
| `Sigil` | `public string Sigil { get; }` |
| `InformationText` | `public string InformationText { get; }` |
| `Players` | `public ClanPlayer Players { get; }` |
| `Announcements` | `public ClanAnnouncement Announcements { get; }` |

## Key Methods

### CreateUnavailableClanInfo
`public static ClanInfo CreateUnavailableClanInfo()`

**Purpose:** Creates a new `unavailable clan info` instance or object.

## Usage Example

```csharp
ClanInfo.CreateUnavailableClanInfo();
```

## See Also

- [Complete Class Catalog](../catalog)