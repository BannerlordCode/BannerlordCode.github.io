<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NewsItem`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# NewsItem

**Namespace:** TaleWorlds.Library.NewsManager
**Module:** TaleWorlds.Library
**Type:** `public struct NewsItem`
**Base:** none
**File:** `TaleWorlds.Library/NewsManager/NewsItem.cs`

## Overview

`NewsItem` lives in `TaleWorlds.Library.NewsManager` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library.NewsManager` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Title` | `public string Title { get; set; }` |
| `Description` | `public string Description { get; set; }` |
| `ImageSourcePath` | `public string ImageSourcePath { get; set; }` |
| `Feeds` | `public List<NewsType> Feeds { get; set; }` |
| `NewsLink` | `public string NewsLink { get; set; }` |

## Usage Example

```csharp
var value = new NewsItem();
```

## See Also

- [Complete Class Catalog](../catalog)