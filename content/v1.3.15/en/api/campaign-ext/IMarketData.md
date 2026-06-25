---
title: "IMarketData"
description: "Auto-generated class reference for IMarketData."
---
# IMarketData

**Namespace:** TaleWorlds.CampaignSystem.Settlements
**Module:** TaleWorlds.CampaignSystem
**Type:** `public interface IMarketData`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Settlements/IMarketData.cs`

## Overview

`IMarketData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `IMarketData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IIMarketData service = ...;
```

## See Also

- [Area Index](../)