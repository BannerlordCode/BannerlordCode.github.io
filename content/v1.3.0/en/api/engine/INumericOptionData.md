---
title: "INumericOptionData"
description: "Auto-generated class reference for INumericOptionData."
---
# INumericOptionData

**Namespace:** TaleWorlds.Engine.Options
**Module:** TaleWorlds.Engine
**Type:** `public interface INumericOptionData : IOptionData`
**Base:** `IOptionData`
**File:** `TaleWorlds.Engine/Options/INumericOptionData.cs`

## Overview

`INumericOptionData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `INumericOptionData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IINumericOptionData service = ...;
```

## See Also

- [Area Index](../)