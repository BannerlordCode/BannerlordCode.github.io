<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CustomBattleCompositionData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CustomBattleCompositionData

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct CustomBattleCompositionData`
**Base:** none
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle.CustomBattle/CustomBattleCompositionData.cs`

## Overview

`CustomBattleCompositionData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `CustomBattleCompositionData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CustomBattleCompositionData
`public struct CustomBattleCompositionData(float rangedPercentage, float cavalryPercentage, float rangedCavalryPercentage)`

**Purpose:** Handles logic related to `custom battle composition data`.

## Usage Example

```csharp
var value = new CustomBattleCompositionData();
```

## See Also

- [Complete Class Catalog](../catalog)