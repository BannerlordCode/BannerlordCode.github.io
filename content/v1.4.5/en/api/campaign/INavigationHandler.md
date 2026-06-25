---
title: "INavigationHandler"
description: "Auto-generated class reference for INavigationHandler."
---
# INavigationHandler

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public interface INavigationHandler`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/INavigationHandler.cs`

## Overview

`INavigationHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `INavigationHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IINavigationHandler service = ...;
```

## See Also

- [Area Index](../)