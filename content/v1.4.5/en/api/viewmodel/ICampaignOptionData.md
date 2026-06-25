---
title: "ICampaignOptionData"
description: "Auto-generated class reference for ICampaignOptionData."
---
# ICampaignOptionData

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection
**Module:** TaleWorlds.CampaignSystem
**Type:** `public interface ICampaignOptionData`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection/ICampaignOptionData.cs`

## Overview

`ICampaignOptionData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `ICampaignOptionData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IICampaignOptionData service = ...;
```

## See Also

- [Area Index](../)