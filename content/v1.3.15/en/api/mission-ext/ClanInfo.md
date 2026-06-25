---
title: "ClanInfo"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClanInfo`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClanInfo

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ClanInfo`
**Area:** mission-ext

## Overview

`ClanInfo` lives in `TaleWorlds.MountAndBlade.Diamond`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

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
// Prepare the required context, then call the static entry point directly
ClanInfo.CreateUnavailableClanInfo();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
