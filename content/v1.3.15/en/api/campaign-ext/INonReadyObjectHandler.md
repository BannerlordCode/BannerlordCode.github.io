---
title: "INonReadyObjectHandler"
description: "Auto-generated class reference for INonReadyObjectHandler."
---
# INonReadyObjectHandler

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public interface INonReadyObjectHandler`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/INonReadyObjectHandler.cs`

## Overview

`INonReadyObjectHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `INonReadyObjectHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IINonReadyObjectHandler service = ...;
```

## See Also

- [Area Index](../)