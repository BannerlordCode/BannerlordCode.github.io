---
title: "MBTextModel"
description: "Auto-generated class reference for MBTextModel."
---
# MBTextModel

**Namespace:** TaleWorlds.Localization.TextProcessor
**Module:** TaleWorlds.Localization
**Type:** `public class MBTextModel`
**Base:** none
**File:** `TaleWorlds.Localization/TextProcessor/MBTextModel.cs`

## Overview

`MBTextModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `MBTextModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
Game.Current.ReplaceModel<MBTextModel>(new MyMBTextModel());
```

## See Also

- [Area Index](../)