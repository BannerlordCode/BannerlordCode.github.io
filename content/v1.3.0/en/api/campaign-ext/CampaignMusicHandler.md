---
title: "CampaignMusicHandler"
description: "Auto-generated class reference for CampaignMusicHandler."
---
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

**Purpose:** Creates a new instance or related entity for the this instance.

```csharp
// Static call; no instance required
CampaignMusicHandler.Create();
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<CampaignMusicHandler>();
```

## See Also

- [Area Index](../)