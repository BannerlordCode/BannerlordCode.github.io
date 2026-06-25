---
title: "ICharacterData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ICharacterData`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ICharacterData

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `class`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/ICharacterData.cs`

## Overview

`ICharacterData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `ICharacterData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
ICharacterData implementation = GetCharacterDataImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)