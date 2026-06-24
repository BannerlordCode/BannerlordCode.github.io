<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CampaignMusicHandler`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CampaignMusicHandler

**Namespace:** SandBox.View
**Module:** SandBox.View
**Type:** `public class CampaignMusicHandler : IMusicHandler`
**Base:** `IMusicHandler`
**File:** `SandBox.View/CampaignMusicHandler.cs`

## Overview

`CampaignMusicHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `CampaignMusicHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### Create
`public static void Create()`

**Purpose:** Creates a new `create` instance or object.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new CampaignMusicHandler());
```

## See Also

- [Complete Class Catalog](../catalog)