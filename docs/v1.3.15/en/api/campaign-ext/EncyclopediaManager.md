<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EncyclopediaManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EncyclopediaManager

**Namespace:** TaleWorlds.CampaignSystem.Encyclopedia
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaManager`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Encyclopedia/EncyclopediaManager.cs`

## Overview

`EncyclopediaManager` is a manager (often reached via a Current singleton or Mission.Current). Use it to access/modify its managed subsystem.

## Key Properties

| Name | Signature |
|------|-----------|
| `ViewDataTracker` | `public IViewDataTracker ViewDataTracker { get; }` |

## Key Methods

### CreateEncyclopediaPages
```csharp
public void CreateEncyclopediaPages()
```

### GetEncyclopediaPages
```csharp
public IEnumerable<EncyclopediaPage> GetEncyclopediaPages()
```

### GetPageOf
```csharp
public EncyclopediaPage GetPageOf(Type type)
```

### GetIdentifier
```csharp
public string GetIdentifier(Type type)
```

### GoToLink
```csharp
public void GoToLink(string pageType, string stringID)
```

### GoToLink
```csharp
public void GoToLink(string link)
```

### SetLinkCallback
```csharp
public void SetLinkCallback(Action<string, object> ExecuteLink)
```

## Usage Example

```csharp
// Typical usage of EncyclopediaManager (Manager)
EncyclopediaManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)