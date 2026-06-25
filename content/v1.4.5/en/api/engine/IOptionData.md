---
title: "IOptionData"
description: "Auto-generated class reference for IOptionData."
---
# IOptionData

**Namespace:** TaleWorlds.Engine.Options
**Module:** TaleWorlds.Engine
**Type:** `public interface IOptionData`
**Base:** none
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine.Options/IOptionData.cs`

## Overview

`IOptionData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `IOptionData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IIOptionData service = ...;
```

## See Also

- [Area Index](../)