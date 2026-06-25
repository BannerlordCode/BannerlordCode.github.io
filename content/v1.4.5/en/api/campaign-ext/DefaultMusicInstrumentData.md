---
title: "DefaultMusicInstrumentData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultMusicInstrumentData`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultMusicInstrumentData

**Namespace:** SandBox.Objects
**Module:** SandBox.Objects
**Type:** `public class DefaultMusicInstrumentData`
**Base:** none
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Objects/DefaultMusicInstrumentData.cs`

## Overview

`DefaultMusicInstrumentData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `DefaultMusicInstrumentData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var value = new DefaultMusicInstrumentData();
```

## See Also

- [Complete Class Catalog](../catalog)