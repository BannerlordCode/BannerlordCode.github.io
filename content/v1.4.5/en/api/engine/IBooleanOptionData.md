---
title: "IBooleanOptionData"
description: "Auto-generated class reference for IBooleanOptionData."
---
# IBooleanOptionData

**Namespace:** TaleWorlds.Engine.Options
**Module:** TaleWorlds.Engine
**Type:** `public interface IBooleanOptionData : IOptionData`
**Base:** `IOptionData`
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine.Options/IBooleanOptionData.cs`

## Overview

`IBooleanOptionData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `IBooleanOptionData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IIBooleanOptionData service = ...;
```

## See Also

- [Area Index](../)