---
title: "SandboxBattleInitializationModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SandboxBattleInitializationModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SandboxBattleInitializationModel

**Namespace:** SandBox.GameComponents
**Module:** SandBox.GameComponents
**Type:** `public class SandboxBattleInitializationModel : BattleInitializationModel`
**Base:** `BattleInitializationModel`
**File:** `SandBox/GameComponents/SandboxBattleInitializationModel.cs`

## Overview

`SandboxBattleInitializationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `SandboxBattleInitializationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetAllAvailableTroopTypes
`public override List<FormationClass> GetAllAvailableTroopTypes()`

**Purpose:** Gets the current value of `all available troop types`.

## Usage Example

```csharp
Game.Current.ReplaceModel<SandboxBattleInitializationModel>(new MySandboxBattleInitializationModel());
```

## See Also

- [Complete Class Catalog](../catalog)