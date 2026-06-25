---
title: "SettlementEventType"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SettlementEventType`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SettlementEventType

**Namespace:** SandBox.ViewModelCollection.Nameplate
**Module:** SandBox.ViewModelCollection
**Type:** `public enum SettlementEventType`
**Area:** campaign-ext

## Overview

`SettlementEventType` lives in `SandBox.ViewModelCollection.Nameplate`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Nameplate` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `Tournament` |
| `AvailableIssue` |
| `ActiveQuest` |
| `ActiveStoryQuest` |
| `TrackedIssue` |
| `TrackedStoryQuest` |

## Usage Example

```csharp
SettlementEventType example = SettlementEventType.Tournament;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
