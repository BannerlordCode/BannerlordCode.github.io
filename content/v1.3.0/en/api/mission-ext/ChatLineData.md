---
title: "ChatLineData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ChatLineData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ChatLineData

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct ChatLineData`
**Area:** mission-ext

## Overview

`ChatLineData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `ChatLineData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### Update
`public void Update()`

**Purpose:** Updates the state or data of `update`.

## Usage Example

```csharp
var value = new ChatLineData();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
