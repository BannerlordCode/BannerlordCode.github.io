---
title: "IMonsterMissionData"
description: "Auto-generated class reference for IMonsterMissionData."
---
# IMonsterMissionData

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public interface IMonsterMissionData`
**Base:** none
**File:** `TaleWorlds.Core/IMonsterMissionData.cs`

## Overview

`IMonsterMissionData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `IMonsterMissionData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IIMonsterMissionData service = ...;
```

## See Also

- [Area Index](../)