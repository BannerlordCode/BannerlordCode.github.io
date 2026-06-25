---
title: "DebugSystemFilter"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DebugSystemFilter`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DebugSystemFilter

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public enum DebugSystemFilter : ulong`
**Base:** `ulong`
**Area:** core-extra

## Overview

`DebugSystemFilter` lives in `TaleWorlds.Library`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `None` |
| `Graphics` |
| `4294967296UL` |
| `ArtificialIntelligence` |
| `8589934592UL` |
| `MultiPlayer` |
| `17179869184UL` |
| `IO` |
| `34359738368UL` |
| `Network` |
| `68719476736UL` |
| `CampaignEvents` |
| `137438953472UL` |
| `MemoryManager` |
| `274877906944UL` |
| `TCP` |
| `549755813888UL` |
| `FileManager` |
| `1099511627776UL` |
| `NaturalInteractionDevice` |
| `2199023255552UL` |
| `UDP` |
| `4398046511104UL` |
| `ResourceManager` |
| `8796093022208UL` |
| `Mono` |
| `17592186044416UL` |
| `ONO` |
| `35184372088832UL` |
| `Old` |

## Usage Example

```csharp
DebugSystemFilter example = DebugSystemFilter.None;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)
