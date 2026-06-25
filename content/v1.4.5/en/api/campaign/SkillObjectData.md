---
title: "SkillObjectData"
description: "Auto-generated class reference for SkillObjectData."
---
# SkillObjectData

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SkillObjectData : PropertyObjectData`
**Base:** `PropertyObjectData`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/CharacterData.cs`

## Overview

`SkillObjectData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `SkillObjectData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
SkillObjectData entry = ...;
```

## See Also

- [Area Index](../)