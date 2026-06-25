---
title: "ICharacterData"
description: "Auto-generated class reference for ICharacterData."
---
# ICharacterData

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public interface ICharacterData`
**Base:** none
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/ICharacterData.cs`

## Overview

`ICharacterData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `ICharacterData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IICharacterData service = ...;
```

## See Also

- [Area Index](../)