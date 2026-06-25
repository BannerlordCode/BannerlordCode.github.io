---
title: "MeetingSceneData"
description: "Auto-generated class reference for MeetingSceneData."
---
# MeetingSceneData

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public struct MeetingSceneData`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/MeetingSceneData.cs`

## Overview

`MeetingSceneData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `MeetingSceneData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `SceneID` | `public string SceneID { get; }` |
| `CultureString` | `public string CultureString { get; }` |

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
MeetingSceneData entry = ...;
```

## See Also

- [Area Index](../)