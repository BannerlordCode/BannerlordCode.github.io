---
title: "ISelectionOptionData"
description: "Auto-generated class reference for ISelectionOptionData."
---
# ISelectionOptionData

**Namespace:** TaleWorlds.Engine.Options
**Module:** TaleWorlds.Engine
**Type:** `public interface ISelectionOptionData : IOptionData`
**Base:** `IOptionData`
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine.Options/ISelectionOptionData.cs`

## Overview

`ISelectionOptionData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `ISelectionOptionData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IISelectionOptionData service = ...;
```

## See Also

- [Area Index](../)