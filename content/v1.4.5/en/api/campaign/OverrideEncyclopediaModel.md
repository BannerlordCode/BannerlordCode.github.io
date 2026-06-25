---
title: "OverrideEncyclopediaModel"
description: "Auto-generated class reference for OverrideEncyclopediaModel."
---
# OverrideEncyclopediaModel

**Namespace:** TaleWorlds.CampaignSystem.Encyclopedia
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class OverrideEncyclopediaModel : EncyclopediaModelBase`
**Base:** `EncyclopediaModelBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Encyclopedia/OverrideEncyclopediaModel.cs`

## Overview

`OverrideEncyclopediaModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `OverrideEncyclopediaModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
Game.Current.ReplaceModel<OverrideEncyclopediaModel>(new MyOverrideEncyclopediaModel());
```

## See Also

- [Area Index](../)