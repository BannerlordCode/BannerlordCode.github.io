---
title: "ESteamPartyBeaconLocationData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ESteamPartyBeaconLocationData`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ESteamPartyBeaconLocationData

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `class`
**Base:** none
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/ESteamPartyBeaconLocationData.cs`

## Overview

`ESteamPartyBeaconLocationData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `ESteamPartyBeaconLocationData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var value = new ESteamPartyBeaconLocationData();
```

## See Also

- [Complete Class Catalog](../catalog)