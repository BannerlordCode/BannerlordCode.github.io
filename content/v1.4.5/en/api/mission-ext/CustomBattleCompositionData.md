---
title: "CustomBattleCompositionData"
description: "Auto-generated class reference for CustomBattleCompositionData."
---
# CustomBattleCompositionData

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct CustomBattleCompositionData`
**Base:** none
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle.CustomBattle/CustomBattleCompositionData.cs`

## Overview

`CustomBattleCompositionData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `CustomBattleCompositionData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CustomBattleCompositionData
`public struct CustomBattleCompositionData(float rangedPercentage, float cavalryPercentage, float rangedCavalryPercentage)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CustomBattleCompositionData from the subsystem API first
CustomBattleCompositionData customBattleCompositionData = ...;
var result = customBattleCompositionData.CustomBattleCompositionData(0, 0, 0);
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
CustomBattleCompositionData entry = ...;
```

## See Also

- [Area Index](../)