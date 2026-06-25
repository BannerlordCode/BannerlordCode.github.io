---
title: "OppositionData"
description: "Auto-generated class reference for OppositionData."
---
# OppositionData

**Namespace:** StoryMode.Quests.ThirdPhase
**Module:** StoryMode.Quests
**Type:** `internal class OppositionData`
**Base:** none
**File:** `Modules.StoryMode/StoryMode/StoryMode.Quests.ThirdPhase/DefeatTheConspiracyQuestBehavior.cs`

## Overview

`OppositionData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `OppositionData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
OppositionData entry = ...;
```

## See Also

- [Area Index](../)